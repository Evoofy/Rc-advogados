// @ts-check
/**
 * 301 redirects from the current WordPress site (reginaldocosta.com.br) and the
 * staging site (rcadvogados.webdinamix.com.br) to the new URLs.
 * Single source of truth: used by Astro's `redirects` and written to
 * dist/.htaccess (Apache/LiteSpeed) and dist/_redirects (Netlify/Cloudflare).
 *
 * Pages that existed on the old site are served at the SAME URL (no redirect): posts at the root,
 * landing pages, /empresa/, /equipe-reginaldo-costa/, /area-do-cliente/, /login/.
 * Archives (tags, categories, authors, page 2) are real pages too; feeds and old sitemaps are rewrites.
 * Only URLs created by the new site (and the old /home/ → /, as WordPress did) redirect.
 */
export const redirects = {
	// Institutional pages
	'/sobre-nos': '/sobre/',
	'/servico': '/areas/',
	'/reginaldo-costa': '/equipe/reginaldo-costa/',

	// Landing pages (possibly used by ad campaigns)
	'/acidente-de-trabalho-lp': '/acidente-de-trabalho/',

	// The new site briefly used these URLs: send them back to the original WordPress addresses
	'/blog/acidente-de-trabalho-estabilidade': '/acidente-de-trabalho-estabilidade/',
	'/blog/alimentos-gravidicos': '/alimentos-gravidicos/',
	'/blog/atraso-no-voo-gera-dano-moral': '/atraso-no-voo-gera-dano-moral/',
	'/blog/auxilio-acidente': '/auxilio-acidente/',
	'/blog/beneficios-concedidos-pelo-inss-ao-idoso': '/beneficios-concedidos-pelo-inss-ao-idoso/',
	'/blog/codigos-recolimento-guia-inss': '/codigos-recolimento-guia-inss/',
	'/blog/conviventes-podem-alterar-sobrenome': '/conviventes-podem-alterar-sobrenome/',
	'/blog/golpe-do-pix-primeiras-24-horas': '/golpe-do-pix-primeiras-24-horas/',
	'/blog/injuria-racial-e-racismo-em-partida-de-futebol': '/injuria-racial-e-racismo-em-partida-de-futebol/',
	'/blog/justica-concede-liminar-para-que-empresa-de-limeira-volte-a-faturar-e-exercer-atividade-empresarial': '/justica-concede-liminar-para-que-empresa-de-limeira-volte-a-faturar-e-exercer-atividade-empresarial/',
	'/blog/meu-filho-a-tem-direito-a-heranca': '/meu-filho-a-tem-direito-a-heranca/',
	'/blog/o-que-e-limbo-previdenciario': '/o-que-e-limbo-previdenciario/',
	'/blog/planejamento-previdenciario': '/planejamento-previdenciario/',
	'/blog/regulacao-do-saneamento-basico-do-poder-normativo-a-norma-de-referencia': '/regulacao-do-saneamento-basico-do-poder-normativo-a-norma-de-referencia/',
	'/blog/rescisao-indireta': '/rescisao-indireta/',
	'/blog/revisao-de-aposentadoria': '/revisao-de-aposentadoria/',
	'/blog/situacao-vexatoria-limeirense-e-deportado-do-chile-por-falta-de-teste-para-covid-19': '/situacao-vexatoria-limeirense-e-deportado-do-chile-por-falta-de-teste-para-covid-19/',
	'/blog/voo-cancelado-direitos-do-passageiro': '/voo-cancelado-direitos-do-passageiro/',
	'/equipe': '/equipe-reginaldo-costa/',
	'/consultar-processos': '/area-do-cliente/',
	'/home': '/',

	// Staging blog placeholders
	'/category/trabalhista': '/blog/',
	'/category/aposentadoria': '/blog/',
	'/2026/08/12/hello-world': '/blog/',
	'/2026/08/20/hello-world-2': '/blog/',
	'/2026/09/21/hello-world-2-2': '/blog/',
};

/**
 * Rewrites: the OLD URL answers with the content of a new file (no redirect, same address).
 * Written to vercel.json, dist/.htaccess and dist/_redirects.
 */
export const rewrites = {
	// WordPress feeds → RSS
	'/feed/': '/rss.xml',
	'/blog/feed/': '/rss.xml',
	'/comments/feed/': '/rss.xml',
	// Old WordPress sitemaps (the old one is likely registered in Search Console)
	'/sitemap.xml': '/sitemap-index.xml',
	'/sitemap_index.xml': '/sitemap-index.xml',
	'/wp-sitemap.xml': '/sitemap-index.xml',
};

/** Shortcuts that leave the site (cPanel lives on the old host). Written to the hosting files only. */
export const serverRedirects = {
	'/webmail': 'https://webmail.reginaldocosta.com.br/',
	'/cpanel': 'https://mail.reginaldocosta.com.br:2083/',
	'/whm': 'https://mail.reginaldocosta.com.br:2083/',
};
