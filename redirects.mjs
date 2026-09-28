// @ts-check
/**
 * 301 redirects from the current WordPress site (reginaldocosta.com.br) and the
 * staging site (rcadvogados.webdinamix.com.br) to the new URLs.
 * Single source of truth: used by Astro's `redirects` and written to
 * dist/.htaccess (Apache/LiteSpeed) and dist/_redirects (Netlify/Cloudflare).
 *
 * Old blog posts keep their slug and now live under /blog.
 */
export const redirects = {
	// Institutional pages
	'/empresa': '/sobre',
	'/sobre-nos': '/sobre',
	'/servico': '/areas',
	'/equipe-reginaldo-costa': '/equipe',
	'/reginaldo-costa': '/equipe/reginaldo-costa',
	'/area-do-cliente': '/consultar-processos',
	'/login': '/consultar-processos',

	// Landing pages (possibly used by ad campaigns)
	'/acidente-de-trabalho-lp': '/acidente-de-trabalho',
	'/acidente-de-trabalho-lpg': '/acidente-de-trabalho',
	'/acidente-de-trabalho-lpf': '/acidente-de-trabalho',
	'/restricao-indevida-lp': '/areas#civil',

	// Blog posts migrated from the WordPress site (same slug, now under /blog)
	'/alimentos-gravidicos': '/blog/alimentos-gravidicos',
	'/atraso-no-voo-gera-dano-moral': '/blog/atraso-no-voo-gera-dano-moral',
	'/auxilio-acidente': '/blog/auxilio-acidente',
	'/beneficios-concedidos-pelo-inss-ao-idoso': '/blog/beneficios-concedidos-pelo-inss-ao-idoso',
	'/codigos-recolimento-guia-inss': '/blog/codigos-recolimento-guia-inss',
	'/conviventes-podem-alterar-sobrenome': '/blog/conviventes-podem-alterar-sobrenome',
	'/injuria-racial-e-racismo-em-partida-de-futebol': '/blog/injuria-racial-e-racismo-em-partida-de-futebol',
	'/justica-concede-liminar-para-que-empresa-de-limeira-volte-a-faturar-e-exercer-atividade-empresarial': '/blog/justica-concede-liminar-para-que-empresa-de-limeira-volte-a-faturar-e-exercer-atividade-empresarial',
	'/meu-filho-a-tem-direito-a-heranca': '/blog/meu-filho-a-tem-direito-a-heranca',
	'/o-que-e-limbo-previdenciario': '/blog/o-que-e-limbo-previdenciario',
	'/planejamento-previdenciario': '/blog/planejamento-previdenciario',
	'/regulacao-do-saneamento-basico-do-poder-normativo-a-norma-de-referencia': '/blog/regulacao-do-saneamento-basico-do-poder-normativo-a-norma-de-referencia',
	'/rescisao-indireta': '/blog/rescisao-indireta',
	'/situacao-vexatoria-limeirense-e-deportado-do-chile-por-falta-de-teste-para-covid-19': '/blog/situacao-vexatoria-limeirense-e-deportado-do-chile-por-falta-de-teste-para-covid-19',

	// Staging blog placeholders
	'/category/trabalhista': '/blog',
	'/category/aposentadoria': '/blog',
	'/2026/08/12/hello-world': '/blog',
	'/2026/08/20/hello-world-2': '/blog',
	'/2026/09/21/hello-world-2-2': '/blog',
};
