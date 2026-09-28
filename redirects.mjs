// @ts-check
/**
 * 301 redirects from the current WordPress site (reginaldocosta.com.br) and the
 * staging site (rcadvogados.webdinamix.com.br) to the new URLs.
 * Single source of truth: used by Astro's `redirects` and written to
 * dist/.htaccess (Apache/LiteSpeed) and dist/_redirects (Netlify/Cloudflare).
 *
 * Old blog posts point to the closest area/article until they are migrated.
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

	// Blog posts from the WordPress site
	'/atraso-no-voo-gera-dano-moral': '/blog/voo-cancelado-direitos-do-passageiro',
	'/situacao-vexatoria-limeirense-e-deportado-do-chile-por-falta-de-teste-para-covid-19': '/blog/voo-cancelado-direitos-do-passageiro',
	'/auxilio-acidente': '/blog/acidente-de-trabalho-estabilidade',
	'/planejamento-previdenciario': '/blog/revisao-de-aposentadoria',
	'/beneficios-concedidos-pelo-inss-ao-idoso': '/blog/revisao-de-aposentadoria',
	'/codigos-recolimento-guia-inss': '/areas#trabalhista-e-previdenciario',
	'/rescisao-indireta': '/areas#trabalhista-e-previdenciario',
	'/o-que-e-limbo-previdenciario': '/areas#trabalhista-e-previdenciario',
	'/conviventes-podem-alterar-sobrenome': '/areas#civil',
	'/meu-filho-a-tem-direito-a-heranca': '/areas#civil',
	'/alimentos-gravidicos': '/areas#civil',
	'/injuria-racial-e-racismo-em-partida-de-futebol': '/areas#criminal',
	'/regulacao-do-saneamento-basico-do-poder-normativo-a-norma-de-referencia': '/areas#administrativo-e-regulatorio',
	'/justica-concede-liminar-para-que-empresa-de-limeira-volte-a-faturar-e-exercer-atividade-empresarial': '/areas#tributario',

	// Staging blog placeholders
	'/category/trabalhista': '/blog',
	'/category/aposentadoria': '/blog',
	'/2026/08/12/hello-world': '/blog',
	'/2026/08/20/hello-world-2': '/blog',
	'/2026/09/21/hello-world-2-2': '/blog',
};
