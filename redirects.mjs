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
	'/empresa': '/sobre/',
	'/sobre-nos': '/sobre/',
	'/servico': '/areas/',
	'/equipe-reginaldo-costa': '/equipe/',
	'/reginaldo-costa': '/equipe/reginaldo-costa/',
	'/area-do-cliente': '/consultar-processos/',
	'/login': '/consultar-processos/',

	// Landing pages (possibly used by ad campaigns)
	'/acidente-de-trabalho-lp': '/acidente-de-trabalho/',
	'/acidente-de-trabalho-lpg': '/acidente-de-trabalho/',
	'/acidente-de-trabalho-lpf': '/acidente-de-trabalho/',
	'/restricao-indevida-lp': '/areas/#civil',

	// Blog posts migrated from the WordPress site (same slug, now under /blog)
	'/alimentos-gravidicos': '/blog/alimentos-gravidicos/',
	'/atraso-no-voo-gera-dano-moral': '/blog/atraso-no-voo-gera-dano-moral/',
	'/auxilio-acidente': '/blog/auxilio-acidente/',
	'/beneficios-concedidos-pelo-inss-ao-idoso': '/blog/beneficios-concedidos-pelo-inss-ao-idoso/',
	'/codigos-recolimento-guia-inss': '/blog/codigos-recolimento-guia-inss/',
	'/conviventes-podem-alterar-sobrenome': '/blog/conviventes-podem-alterar-sobrenome/',
	'/injuria-racial-e-racismo-em-partida-de-futebol': '/blog/injuria-racial-e-racismo-em-partida-de-futebol/',
	'/justica-concede-liminar-para-que-empresa-de-limeira-volte-a-faturar-e-exercer-atividade-empresarial': '/blog/justica-concede-liminar-para-que-empresa-de-limeira-volte-a-faturar-e-exercer-atividade-empresarial/',
	'/meu-filho-a-tem-direito-a-heranca': '/blog/meu-filho-a-tem-direito-a-heranca/',
	'/o-que-e-limbo-previdenciario': '/blog/o-que-e-limbo-previdenciario/',
	'/planejamento-previdenciario': '/blog/planejamento-previdenciario/',
	'/regulacao-do-saneamento-basico-do-poder-normativo-a-norma-de-referencia': '/blog/regulacao-do-saneamento-basico-do-poder-normativo-a-norma-de-referencia/',
	'/rescisao-indireta': '/blog/rescisao-indireta/',
	'/situacao-vexatoria-limeirense-e-deportado-do-chile-por-falta-de-teste-para-covid-19': '/blog/situacao-vexatoria-limeirense-e-deportado-do-chile-por-falta-de-teste-para-covid-19/',

	// Author archives
	'/author/reginaldocosta-adm': '/equipe/',
	'/author/reginaldocosta-advs': '/equipe/',
	'/author/studiopontozero': '/equipe/',

	// WordPress feeds and pagination
	'/feed': '/blog/',
	'/comments/feed': '/blog/',
	'/blog/feed': '/blog/',
	'/blog/page/2': '/blog/',
	'/page/2': '/blog/',

	// Category archives (→ the only post in it, otherwise the blog)
	'/category/advogados': '/blog/',
	'/category/advogados/direito-empresarial-advogados': '/blog/justica-concede-liminar-para-que-empresa-de-limeira-volte-a-faturar-e-exercer-atividade-empresarial/',
	'/category/aposentadoria-2': '/blog/',
	'/category/dano-moral': '/blog/',
	'/category/danos-morais': '/blog/atraso-no-voo-gera-dano-moral/',
	'/category/danos-morais/trabalhista': '/blog/',
	'/category/direito-administrativo': '/blog/',
	'/category/direito-da-familia': '/blog/conviventes-podem-alterar-sobrenome/',
	'/category/direito-empresarial': '/blog/justica-concede-liminar-para-que-empresa-de-limeira-volte-a-faturar-e-exercer-atividade-empresarial/',
	'/category/inventario': '/blog/meu-filho-a-tem-direito-a-heranca/',
	'/category/pensao-alimenticia': '/blog/alimentos-gravidicos/',
	'/category/previdencia-social': '/blog/',
	'/category/previdencia-social/aposentadoria': '/blog/',
	'/category/previdenciario': '/blog/',

	// Tag archives (→ the only post with the tag, otherwise the blog)
	'/tag/13o-salario': '/blog/rescisao-indireta/',
	'/tag/advogados': '/blog/planejamento-previdenciario/',
	'/tag/alimentos-gravidicos': '/blog/alimentos-gravidicos/',
	'/tag/aposentadoria': '/blog/',
	'/tag/aposentadoria-por-idade': '/blog/beneficios-concedidos-pelo-inss-ao-idoso/',
	'/tag/auxilio-doenca': '/blog/codigos-recolimento-guia-inss/',
	'/tag/auxilio-maternidade': '/blog/codigos-recolimento-guia-inss/',
	'/tag/auxilio-reclusao': '/blog/codigos-recolimento-guia-inss/',
	'/tag/baixa-renda': '/blog/codigos-recolimento-guia-inss/',
	'/tag/beneficio': '/blog/',
	'/tag/beneficio-inss': '/blog/o-que-e-limbo-previdenciario/',
	'/tag/bpc': '/blog/planejamento-previdenciario/',
	'/tag/chile': '/blog/situacao-vexatoria-limeirense-e-deportado-do-chile-por-falta-de-teste-para-covid-19/',
	'/tag/clt': '/blog/rescisao-indireta/',
	'/tag/cnis': '/blog/planejamento-previdenciario/',
	'/tag/contrato-de-trabalho': '/blog/rescisao-indireta/',
	'/tag/contribuicao': '/blog/planejamento-previdenciario/',
	'/tag/covid': '/blog/situacao-vexatoria-limeirense-e-deportado-do-chile-por-falta-de-teste-para-covid-19/',
	'/tag/crime': '/blog/injuria-racial-e-racismo-em-partida-de-futebol/',
	'/tag/danos-morais': '/blog/',
	'/tag/demissao': '/blog/rescisao-indireta/',
	'/tag/deportado': '/blog/situacao-vexatoria-limeirense-e-deportado-do-chile-por-falta-de-teste-para-covid-19/',
	'/tag/direito-administrativo': '/blog/regulacao-do-saneamento-basico-do-poder-normativo-a-norma-de-referencia/',
	'/tag/direito-de-familia': '/blog/',
	'/tag/direito-empresarial': '/blog/justica-concede-liminar-para-que-empresa-de-limeira-volte-a-faturar-e-exercer-atividade-empresarial/',
	'/tag/direito-penal': '/blog/injuria-racial-e-racismo-em-partida-de-futebol/',
	'/tag/direito-previdenciario': '/blog/planejamento-previdenciario/',
	'/tag/dispensa-com-justa-causa': '/blog/rescisao-indireta/',
	'/tag/dispensa-sem-justa-causa': '/blog/rescisao-indireta/',
	'/tag/dona-de-casa': '/blog/codigos-recolimento-guia-inss/',
	'/tag/empresa': '/blog/justica-concede-liminar-para-que-empresa-de-limeira-volte-a-faturar-e-exercer-atividade-empresarial/',
	'/tag/facultativo': '/blog/codigos-recolimento-guia-inss/',
	'/tag/fgts': '/blog/rescisao-indireta/',
	'/tag/guia-do-inss': '/blog/codigos-recolimento-guia-inss/',
	'/tag/heranca': '/blog/meu-filho-a-tem-direito-a-heranca/',
	'/tag/herdeiro': '/blog/meu-filho-a-tem-direito-a-heranca/',
	'/tag/indenizacao': '/blog/',
	'/tag/inss': '/blog/',
	'/tag/julgado': '/blog/situacao-vexatoria-limeirense-e-deportado-do-chile-por-falta-de-teste-para-covid-19/',
	'/tag/justica': '/blog/justica-concede-liminar-para-que-empresa-de-limeira-volte-a-faturar-e-exercer-atividade-empresarial/',
	'/tag/latam': '/blog/situacao-vexatoria-limeirense-e-deportado-do-chile-por-falta-de-teste-para-covid-19/',
	'/tag/leis-trabalhistas': '/blog/rescisao-indireta/',
	'/tag/limeira': '/blog/',
	'/tag/liminar': '/blog/justica-concede-liminar-para-que-empresa-de-limeira-volte-a-faturar-e-exercer-atividade-empresarial/',
	'/tag/loas': '/blog/',
	'/tag/paternidade': '/blog/',
	'/tag/pensao': '/blog/',
	'/tag/pensao-por-morte': '/blog/beneficios-concedidos-pelo-inss-ao-idoso/',
	'/tag/planejamento-previdenciario': '/blog/planejamento-previdenciario/',
	'/tag/profissional-liberal': '/blog/codigos-recolimento-guia-inss/',
	'/tag/racismo': '/blog/injuria-racial-e-racismo-em-partida-de-futebol/',
	'/tag/regulacao': '/blog/regulacao-do-saneamento-basico-do-poder-normativo-a-norma-de-referencia/',
	'/tag/renda': '/blog/planejamento-previdenciario/',
	'/tag/rescisao-indireta': '/blog/rescisao-indireta/',
	'/tag/saneamento-basico': '/blog/regulacao-do-saneamento-basico-do-poder-normativo-a-norma-de-referencia/',
	'/tag/servicos-publico': '/blog/regulacao-do-saneamento-basico-do-poder-normativo-a-norma-de-referencia/',
	'/tag/sucessao': '/blog/meu-filho-a-tem-direito-a-heranca/',
	'/tag/tempo': '/blog/planejamento-previdenciario/',
	'/tag/viagem': '/blog/situacao-vexatoria-limeirense-e-deportado-do-chile-por-falta-de-teste-para-covid-19/',
	'/tag/voo-atrasado': '/blog/atraso-no-voo-gera-dano-moral/',

	// Staging blog placeholders
	'/category/trabalhista': '/blog/',
	'/category/aposentadoria': '/blog/',
	'/2026/08/12/hello-world': '/blog/',
	'/2026/08/20/hello-world-2': '/blog/',
	'/2026/09/21/hello-world-2-2': '/blog/',
};

/**
 * Redirects that only make sense on the web server (not as Astro pages), e.g. XML files.
 * Written to dist/.htaccess and dist/_redirects only.
 */
export const serverRedirects = {
	// Old WordPress sitemaps (the old one is likely registered in Search Console)
	'/sitemap.xml': '/sitemap-index.xml',
	'/sitemap_index.xml': '/sitemap-index.xml',
	'/wp-sitemap.xml': '/sitemap-index.xml',
};
