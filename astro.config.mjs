// @ts-check
import { writeFile } from 'node:fs/promises';
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

import { redirects } from './redirects.mjs';

const site = 'https://reginaldocosta.com.br';
const redirectSources = new Set(Object.keys(redirects).map((p) => `${site}${p}/`));

/** Writes the redirect map as real 301s for Apache/LiteSpeed and Netlify/Cloudflare. */
function hostingRedirects() {
	return {
		name: 'hosting-redirects',
		hooks: {
			'astro:build:done': async ({ dir }) => {
				const entries = Object.entries(redirects);
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
					'<IfModule mod_headers.c>',
					'  <FilesMatch "\\.(js|css|woff2|webp|jpg|png|svg)$">',
					'    Header set Cache-Control "public, max-age=31536000, immutable"',
					'  </FilesMatch>',
					'  <FilesMatch "\\.html$">',
					'    Header set Cache-Control "public, max-age=0, must-revalidate"',
					'  </FilesMatch>',
					'</IfModule>',
					'',
				].join('\n');
				const netlify = entries.flatMap(([from, to]) => [`${from} ${to} 301`, `${from}/ ${to} 301`]).join('\n') + '\n';
				await writeFile(new URL('.htaccess', dir), htaccess);
				await writeFile(new URL('_redirects', dir), netlify);
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
