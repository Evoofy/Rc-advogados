// @ts-check
import { readFile, writeFile } from 'node:fs/promises';
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

import { redirects, serverRedirects, rewrites } from './redirects.mjs';

// Primary domain on Vercel (reginaldocosta.com.br → www via 308)
const site = 'https://www.reginaldocosta.com.br';
const redirectSources = new Set(Object.keys(redirects).map((p) => `${site}${p}/`));
// Same content served at a second URL (canonical points elsewhere): keep them out of the sitemap
const nonCanonical = new Set(['/login/', '/acidente-de-trabalho-lpf/', '/page/2/'].map((p) => `${site}${p}`));
// Archive pages (tags, categories, authors, pagination) exist but were never in the old sitemap either
const isArchive = (page) => /\/(tag|category|author)\/|\/page\/2\/$/.test(page);

/**
 * vercel.json (the site is hosted on Vercel, which ignores .htaccess).
 * Regenerated from redirects.mjs on every `astro dev` / `astro build` — commit it with the redirects.
 * Vercel reads it before building, so it must live in the repo root.
 */
function vercelConfig() {
	return {
		name: 'vercel-config',
		hooks: {
			'astro:config:done': async () => {
				const entries = [...Object.entries(redirects), ...Object.entries(serverRedirects)];
				const config = {
					$schema: 'https://openapi.vercel.sh/vercel.json',
					trailingSlash: true,
					// Both spellings, so an old URL is always a single 301 hop
					redirects: entries.flatMap(([from, to]) => [from, `${from}/`].map((source) => ({ source, destination: to, statusCode: 301 }))),
					// Old URL keeps answering with the new file's content (feeds → RSS, old sitemaps → sitemap)
					rewrites: Object.entries(rewrites).map(([source, destination]) => ({ source, destination })),
					headers: [
						{
							source: '/(.*)',
							headers: [
								{ key: 'X-Content-Type-Options', value: 'nosniff' },
								{ key: 'X-Frame-Options', value: 'SAMEORIGIN' },
								{ key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
								{ key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=()' },
							],
						},
						// Hashed file names: safe to cache forever
						{ source: '/_astro/(.*)', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] },
						// Same name across versions: one week
						{ source: '/(images|og)/(.*)', headers: [{ key: 'Cache-Control', value: 'public, max-age=604800' }] },
					],
				};
				const json = JSON.stringify(config, null, '\t') + '\n';
				const file = new URL('./vercel.json', import.meta.url);
				const current = await readFile(file, 'utf8').catch(() => '');
				if (current !== json) await writeFile(file, json);
			},
		},
	};
}

/** Writes the redirect map as real 301s for Apache/LiteSpeed and Netlify/Cloudflare. */
function hostingRedirects() {
	return {
		name: 'hosting-redirects',
		hooks: {
			'astro:build:done': async ({ dir }) => {
				const entries = [...Object.entries(redirects), ...Object.entries(serverRedirects)];
				const htaccess = [
					'# Gerado no build a partir de redirects.mjs — não editar à mão',
					'Options -Indexes',
					'ErrorDocument 404 /404.html',
					'',
					'<IfModule mod_rewrite.c>',
					'RewriteEngine On',
					'# HTTPS e domínio com www',
					'RewriteCond %{HTTPS} off [OR]',
					'RewriteCond %{HTTP_HOST} !^www\\. [NC]',
					`RewriteRule ^ ${site}%{REQUEST_URI} [R=301,L,NE]`,
					'',
					'# Mesmo endereço antigo, conteúdo novo (feeds e sitemaps do WordPress)',
					...Object.entries(rewrites).map(([from, to]) => `RewriteRule ^${from.slice(1).replace(/\/$/, '').replace(/[.]/g, '\\.')}/?$ ${to} [L]`),
					'',
					'# Endereços criados pelo site novo → endereços antigos',
					...entries.map(([from, to]) => `RewriteRule ^${from.slice(1).replace(/[.]/g, '\\.')}/?$ ${to} [R=301,L,NE]`),
					'</IfModule>',
					'',
					'# Compressão (LiteSpeed já comprime sozinho; isto cobre Apache)',
					'<IfModule mod_brotli.c>',
					'  AddOutputFilterByType BROTLI_COMPRESS text/html text/css text/plain text/xml application/xml application/javascript text/javascript application/json application/manifest+json image/svg+xml',
					'</IfModule>',
					'<IfModule mod_deflate.c>',
					'  AddOutputFilterByType DEFLATE text/html text/css text/plain text/xml application/xml application/javascript text/javascript application/json application/manifest+json image/svg+xml',
					'</IfModule>',
					'AddType application/manifest+json .webmanifest',
					'AddType font/woff2 .woff2',
					'',
					'<IfModule mod_headers.c>',
					'  # Segurança',
					'  Header always set X-Content-Type-Options "nosniff"',
					'  Header always set X-Frame-Options "SAMEORIGIN"',
					'  Header always set Referrer-Policy "strict-origin-when-cross-origin"',
					'  Header always set Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=()"',
					'  Header always set Strict-Transport-Security "max-age=31536000" env=HTTPS',
					'  # Cache: imagens/fontes fora de /_astro mudam sem trocar de nome → 1 semana',
					'  <FilesMatch "\\.(webp|jpg|jpeg|png|svg|ico|woff2|webmanifest)$">',
					'    Header set Cache-Control "public, max-age=604800"',
					'  </FilesMatch>',
					'  <FilesMatch "\\.(html|xml|txt)$">',
					'    Header set Cache-Control "public, max-age=0, must-revalidate"',
					'  </FilesMatch>',
					'</IfModule>',
					'',
				].join('\n');
				// /_astro/ files have a content hash in the name: safe to cache forever
				const immutable = ['<IfModule mod_headers.c>', '  Header set Cache-Control "public, max-age=31536000, immutable"', '</IfModule>', ''].join('\n');
				const security = [
					'  X-Content-Type-Options: nosniff',
					'  X-Frame-Options: SAMEORIGIN',
					'  Referrer-Policy: strict-origin-when-cross-origin',
					'  Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()',
					'  Strict-Transport-Security: max-age=31536000',
				];
				const headers = ['/*', ...security, '', '/_astro/*', '  Cache-Control: public, max-age=31536000, immutable', ''].join('\n');
				const netlify = [...entries.flatMap(([from, to]) => [`${from} ${to} 301`, `${from}/ ${to} 301`]), ...Object.entries(rewrites).map(([from, to]) => `${from} ${to} 200`)].join('\n') + '\n';
				await writeFile(new URL('.htaccess', dir), htaccess);
				await writeFile(new URL('_redirects', dir), netlify);
				await writeFile(new URL('_astro/.htaccess', dir), immutable);
				await writeFile(new URL('_headers', dir), headers);
			},
		},
	};
}

// https://astro.build/config
export default defineConfig({
	site,
	trailingSlash: 'always',
	redirects,

	vite: {
		plugins: [tailwindcss()],
	},

	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Manrope',
			cssVariable: '--font-manrope',
			weights: ['300 800'],
			styles: ['normal'],
			subsets: ['latin'],
			fallbacks: ['ui-sans-serif', 'system-ui', 'sans-serif'],
		},
		{
			provider: fontProviders.google(),
			name: 'Instrument Serif',
			cssVariable: '--font-instrument',
			weights: [400],
			styles: ['normal', 'italic'],
			subsets: ['latin'],
			fallbacks: ['Georgia', 'serif'],
		},
	],

	integrations: [
		icon(),
		sitemap({
			filter: (page) => !redirectSources.has(page) && !nonCanonical.has(page) && !isArchive(page) && !page.endsWith('/404/'),
		}),
		hostingRedirects(),
		vercelConfig(),
	],
});
