// @ts-check
import { writeFile } from 'node:fs/promises';
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

import { redirects, serverRedirects } from './redirects.mjs';

const site = 'https://reginaldocosta.com.br';
const redirectSources = new Set(Object.keys(redirects).map((p) => `${site}${p}/`));

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
					'# HTTPS e domínio sem www',
					'RewriteCond %{HTTPS} off [OR]',
					'RewriteCond %{HTTP_HOST} ^www\\. [NC]',
					`RewriteRule ^ ${site}%{REQUEST_URI} [R=301,L,NE]`,
					'',
					'# URLs antigas → novas',
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
				const netlify = entries.flatMap(([from, to]) => [`${from} ${to} 301`, `${from}/ ${to} 301`]).join('\n') + '\n';
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
			filter: (page) => !redirectSources.has(page) && !page.endsWith('/404/'),
		}),
		hostingRedirects(),
	],
});
