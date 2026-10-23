type Card = { icon: string; title: string; text?: string };

export type Landing = {
	slug: string;
	name: string;
	/** Meta description (≤ 155 chars) */
	seoDescription: string;
	/** <title> override (defaults to name) */
	pageTitle?: string;
	/** Canonical path when two landing pages share the same content (e.g. Google/Facebook versions) */
	canonical?: string;
	/** Show in footer / listings (ad-campaign duplicates set this to false) */
	listed?: boolean;
	tag: string;
	/** Hero pill text */
	badgeText?: string;
	title: string;
	accent: string;
	lead: string;
	img: string;
	/** WhatsApp message for every CTA on the page (old ad pages tag the source: "(G)" Google, "(F)" Facebook) */
	waText?: string;
	ctaLabel?: string;
	threshold?: string;
	typesEyebrow: string;
	typesTitle: string;
	typesLead?: string;
	/** "E mais outras dezenas de situações" box (default true) */
	typesMore?: boolean;
	types: Card[];
	/** Second card grid, e.g. "O que pode levar a um acidente de trabalho?" */
	extraCards?: { eyebrow: string; title: string; items: Card[] };
	eligibilityTitle: string;
	eligibilityLead: string;
	eligibility: (string | { title: string; text: string })[];
	eligibilityNote?: string;
	/** Checklist section, e.g. "Veja quais os direitos que o trabalhador tem" */
	rights?: { eyebrow: string; title: string; lead?: string; items: string[]; note?: string };
	/** "Nós somos especialistas…" paragraphs + numbers + reasons (old ad pages) */
	about?: { title: string; paragraphs: string[] };
	stats?: { value: string; label: string }[];
	reasons?: Card[];
	steps?: { title: string; text: string }[];
	closingTitle?: string;
	closing: string;
	/** Fake "app" widget shown in the hero */
	widget?: { label: string; value: string; status: string; ok: string };
};

/* ---------------------------------------------------------------------------
 * Ad-campaign landing pages from the previous site — SAME URLs and original copy.
 * LPG = Google Ads, LPF = Facebook/Instagram Ads. The WhatsApp message ends with
 * "(G)" or "(F)" so the office can tell which campaign each contact came from.
 * ------------------------------------------------------------------------- */
const officeAbout: NonNullable<Landing['about']> = {
	title: 'Nós somos especialistas e estamos prontos para te atender',
	paragraphs: [
		'Estamos há mais de 10 anos exercendo o atendimento jurídico em Limeira (SP), acompanhados de profissionais altamente capacitados e experientes, que trabalham pautados em ética, transparência e compromisso com a satisfação dos clientes.',
		'Nosso atendimento é 100% personalizado para atender nossos clientes de acordo com suas reais necessidades.',
		'Trabalhamos com as mais modernas ferramentas de atendimento, de forma que conseguimos atender a você ou sua empresa em qualquer lugar do país ou mundo, resultando em uma economia de tempo e dinheiro para nossos clientes.',
		'Além disso, também atuamos com contratos mensais de prestação de serviços, oferecidos tanto para empresas quanto pessoas físicas, de forma que sempre estejam protegidos por profissionais qualificados. Ao final do mês, oferecemos um relatório atualizado e detalhado de todos os serviços prestados.',
	],
};
const officeStats = [
	{ value: '1.7k+', label: 'Idas ao Tribunal' },
	{ value: '890+', label: 'Clientes Satisfeitos' },
	{ value: '97%', label: 'Causas Ganhas' },
];
const officeReasons = [
	{ icon: 'lucide:award', title: 'Experiência', text: 'São mais de 10 anos de atuação em atendimento jurídico com ética e transparência' },
	{ icon: 'lucide:user-check', title: 'Atendimento', text: 'Atendemos cada cliente de forma 100% customizada, para atender suas necessidades reais' },
	{ icon: 'lucide:star', title: 'Reconhecimento', text: 'O mercado reconhece nossa atuação e valoriza, sendo mais de 890 clientes satisfeitos' },
	{ icon: 'lucide:scale', title: 'Expertise', text: 'Temos 97% das causas ganhas devido a expertise de nossos advogados atuantes' },
];

const acidenteAd = {
	name: 'Acidente de trabalho',
	seoDescription: 'Sofreu um acidente de trabalho? Descubra quais são os seus direitos: estabilidade, auxílio-acidente, auxílio-doença acidentário e indenizações.',
	listed: false,
	tag: 'Acidente de trabalho',
	badgeText: 'Mais de 10 anos de atendimento jurídico',
	title: 'Sofreu um acidente de',
	accent: 'trabalho?',
	lead: 'Descubra quais são os seus direitos! Cada caso tem as suas particularidades e por isso deve ser avaliado individualmente.',
	img: '/images/acidente.webp',
	ctaLabel: 'Falar com advogado',
	typesEyebrow: 'Tipos de acidente',
	typesTitle: 'Quais os tipos de acidente?',
	typesMore: false,
	types: [
		{ icon: 'lucide:hard-hat', title: 'Típico', text: 'É o tipo de acidente que machuca fisicamente um trabalhador durante o expediente, no local de trabalho ou ao redor dele.' },
		{ icon: 'lucide:activity', title: 'Atípico', text: 'Já esse acidente de trabalho é causado por esforço repetitivo ou excesso de trabalho, como LER e burnout.' },
		{ icon: 'lucide:route', title: 'De trajeto', text: 'O acidente de trajeto é aquele que acontece enquanto o trabalhador vai para o local de trabalho ou vice-versa.' },
	],
	extraCards: {
		eyebrow: 'Causas',
		title: 'O que pode levar a um acidente de trabalho?',
		items: [
			{ icon: 'lucide:shield-alert', title: 'Falta de segurança', text: 'Os equipamentos que protegem os profissionais enquanto trabalham são fundamentais para manter sua integridade, prevenir acidentes e garantir a segurança.' },
			{ icon: 'lucide:triangle-alert', title: 'Exposição do trabalhador', text: 'Em vários casos, o trabalhador é exposto a materiais perigosos para a sua saúde e também a atividades que demandam muito esforço físico, que podem causar lesões.' },
			{ icon: 'lucide:clock-alert', title: 'Jornadas longas', text: 'Todo trabalhador deve seguir a jornada adequada ao seu trabalho. Quando ela é excedida, acidentes podem acontecer, sejam quedas ou até mesmo um acidente vascular cerebral.' },
		],
	},
	eligibilityTitle: 'Quando é possível entrar com processo por acidente de trabalho?',
	eligibilityLead: '',
	eligibility: [
		{ title: 'Empresa não emitir o Comunicado de Acidente de Trabalho (CAT)', text: 'É uma obrigação da empresa, pois o CAT (Comunicado de Acidente de Trabalho) atesta que houve o acidente ou doença.' },
		{ title: 'O trabalhador teve o auxílio-doença acidentário negado', text: 'Infelizmente o INSS muitas vezes nega o auxílio-doença acidentário, mas receber esse valor é um direito garantido.' },
		{ title: 'Em caso de demissão após o acidente', text: 'O trabalhador precisa permanecer na empresa por pelo menos um ano após o acidente, e não pode ser demitido sem justa causa.' },
		{ title: 'INSS negou o auxílio-acidente', text: 'Se o trabalhador cumpre todos os requisitos, mas o INSS nega o auxílio-acidente, é possível entrar com recursos judiciais.' },
		{ title: 'Desenvolver incapacidade parcial ou total para o trabalho', text: 'Caso o trabalhador tenha sequelas, devido ao acidente, que atrapalhem ou não permitam que ele trabalhe, o auxílio-acidente deve ser solicitado.' },
		{ title: 'Solicitar o auxílio-acidente retroativo', text: 'Esse auxílio é direito do trabalhador acidentado, por isso deve ser pago após o fim do auxílio-doença acidentário, mas às vezes é negado pelo INSS.' },
	],
	rights: {
		eyebrow: 'Seus direitos',
		title: 'Veja quais os direitos que o trabalhador tem em caso de acidente de trabalho',
		lead: 'Existem diversos direitos que o trabalhador tem acesso, de acordo com o seu acidente de trabalho. Confira alguns deles abaixo!',
		items: [
			'Garantia de estabilidade de emprego',
			'Direito de aposentadoria por invalidez',
			'Direito ao auxílio-acidente',
			'Direito ao auxílio doença acidentário',
			'Direito à pensão por morte',
			'Afastamento remunerado',
			'Recolhimento do FGTS',
			'Indenização por danos morais e estéticos',
			'Indenização por danos materiais',
		],
	},
	about: officeAbout,
	stats: officeStats,
	reasons: officeReasons,
	closingTitle: 'Avalie o seu caso com um especialista',
	closing: 'Cada caso tem as suas particularidades e por isso deve ser avaliado individualmente.',
} satisfies Omit<Landing, 'slug'>;

const adLandings: Landing[] = [
	{
		...acidenteAd,
		slug: 'acidente-de-trabalho-lpg',
		pageTitle: 'Acidente de trabalho: descubra seus direitos',
		waText: 'Olá, sofri um acidente de trabalho e gostaria de falar com um advogado... (G)',
	},
	{
		...acidenteAd,
		slug: 'acidente-de-trabalho-lpf',
		pageTitle: 'Acidente de trabalho: descubra seus direitos',
		// Same content as the Google version: consolidate it for search, keep the URL for the ads
		canonical: '/acidente-de-trabalho-lpg/',
		waText: 'Olá, sofri um acidente de trabalho e gostaria de falar com um advogado... (F)',
	},
	{
		slug: 'restricao-indevida-lp',
		name: 'Restrição indevida',
		pageTitle: 'Nome negativado indevidamente? Descubra seus direitos',
		seoDescription: 'Seu nome foi negativado indevidamente? Você pode ter direito à retirada do nome dos cadastros e a indenização por danos morais e materiais.',
		listed: false,
		tag: 'Negativação indevida',
		badgeText: 'Mais de 10 anos de atendimento jurídico',
		title: 'Seu nome foi negativado',
		accent: 'indevidamente?',
		lead: 'Descubra seus direitos! Você pode entrar com um processo por danos morais e materiais em casos de negativação indevida, desde que consiga comprovar a falha da empresa responsável pela negativação.',
		img: '/images/lp-restricao.jpg',
		ctaLabel: 'Falar com advogado',
		waText: 'Olá, meu nome foi negativado indevidamente e gostaria de falar com um advogado...',
		typesEyebrow: 'Causas comuns',
		typesTitle: 'Principais causas de nome negativado de forma indevida por empresas',
		typesMore: false,
		types: [
			{ icon: 'lucide:receipt', title: 'Cobranças indevidas' },
			{ icon: 'lucide:server-crash', title: 'Falhas no sistema da empresa responsável pela negativação' },
			{ icon: 'lucide:id-card', title: 'Erros de identificação' },
			{ icon: 'lucide:shield-alert', title: 'Fraude ou golpe' },
			{ icon: 'lucide:badge-check', title: 'Conta já paga' },
			{ icon: 'lucide:file-x', title: 'Serviço não contratado ou já cancelado' },
			{ icon: 'lucide:credit-card', title: 'Cartão de crédito não solicitado' },
			{ icon: 'lucide:landmark', title: 'Conta bancária desconhecida' },
			{ icon: 'lucide:zap', title: 'Instalação de energia desconhecida' },
			{ icon: 'lucide:graduation-cap', title: 'Matrícula em faculdade sem consentimento' },
		],
		eligibilityTitle: 'Quando é possível entrar com processo?',
		eligibilityLead: 'Você pode entrar com um processo por danos morais e materiais em casos de negativação indevida, desde que consiga comprovar a falha da empresa responsável pela negativação.',
		eligibility: [],
		rights: {
			eyebrow: 'Seus direitos',
			title: 'Quais são meus direitos?',
			lead: 'Se você foi negativado indevidamente, tem direito a:',
			items: [
				'Retirada do nome dos cadastros de negativação',
				'Indenização por danos morais e materiais, se for o caso',
				'Correção dos dados cadastrais',
				'Comprovação de quitação da dívida, caso já tenha sido paga',
			],
			note: 'Lembre-se: é importante buscar ajuda de um profissional especializado para lidar com casos de negativação indevida e garantir que seus direitos sejam respeitados.',
		},
		about: officeAbout,
		stats: officeStats,
		reasons: officeReasons,
		closingTitle: 'Avalie o seu caso com um especialista',
		closing: 'Cada caso tem as suas particularidades e por isso deve ser avaliado individualmente.',
	},
];

export const landings: Landing[] = [
	...adLandings,
	{
		slug: 'golpe-do-pix',
		name: 'Golpe do PIX',
		seoDescription: 'Sofreu golpe do Pix, boleto falso ou fraude bancária acima de R$ 5.000? Entenda quando é possível buscar a restituição. Atendimento 100% online.',
		tag: 'Golpes bancários',
		title: 'Sofreu um golpe bancário e teve um prejuízo superior a',
		accent: 'R$ 5.000?',
		lead: 'Em situações de fraude, transferências indevidas ou operações não reconhecidas, a legislação brasileira prevê a responsabilidade das instituições financeiras. Nossa equipe analisa gratuitamente o seu caso e orienta sobre as medidas cabíveis para buscar a recuperação do prejuízo.',
		img: '/images/pix.webp',
		threshold: 'O escritório atua em casos com prejuízo superior a R$ 5.000, compatíveis com sua estrutura e área de especialização.',
		typesEyebrow: 'Golpes comuns',
		typesTitle: 'Quais os tipos de golpe?',
		types: [
			{ icon: 'lucide:smartphone', title: 'Golpe do Pix', text: 'Transferências realizadas após contato de falsos representantes de instituições financeiras ou mediante engenharia social.' },
			{ icon: 'lucide:car', title: 'Falso intermediador na compra de veículos', text: 'Negociações aparentemente legítimas em que o pagamento é direcionado a terceiros fraudulentos.' },
			{ icon: 'lucide:receipt', title: 'Boleto falso', text: 'Pagamentos efetuados por meio de boletos visualmente idênticos aos originais, mas destinados a contas de fraudadores.' },
			{ icon: 'lucide:gift', title: 'Sites falsos de tarefas ou recompensas', text: 'Transferências realizadas em sites falsos que prometem tarefas ou recompensas, configurando fraude.' },
		],
		eligibilityTitle: 'Quando é possível buscar a restituição',
		eligibilityLead: 'A possibilidade de restituição dos valores depende de diversos fatores, entre eles:',
		eligibility: [
			'Existência de fraude ou golpe comprovável',
			'Falha na segurança ou no dever de proteção da instituição financeira',
			'Adoção oportuna das medidas cabíveis',
			'Adequação aos mecanismos previstos pelo sistema financeiro',
		],
		steps: [
			{ title: 'Relato do ocorrido', text: 'O cliente descreve, de forma detalhada, como ocorreu o golpe, o valor envolvido e os documentos disponíveis.' },
			{ title: 'Análise jurídica do caso', text: 'O time jurídico avalia a viabilidade da demanda, considerando provas, prazos, conduta do banco e enquadramento legal.' },
			{ title: 'Apresentação dos cenários', text: 'São apresentados, com clareza e responsabilidade, os cenários jurídicos existentes, riscos e alternativas cabíveis.' },
			{ title: 'Definição da estratégia', text: 'Quando pertinente, é definida a atuação judicial e/ou extrajudicial mais adequada ao caso concreto.' },
		],
		closing: 'O tempo é um fator relevante na preservação de provas e na adoção das medidas adequadas. Caso tenha sofrido prejuízo financeiro significativo em decorrência de fraude ou golpe, é possível solicitar uma avaliação jurídica responsável e criteriosa.',
		widget: { label: 'Pix enviado · agora', value: 'R$ 7.850,00', status: 'Suspeito', ok: 'Análise de restituição iniciada' },
	},
	{
		slug: 'voo-cancelado',
		name: 'Voo Cancelado',
		seoDescription: 'Voo cancelado, atraso de mais de 4 horas, overbooking ou bagagem extraviada? Conheça seus direitos a reembolso e indenização. Atendimento online.',
		tag: 'Direito do passageiro',
		title: 'Seu voo foi cancelado, atrasou ou sua bagagem',
		accent: 'sumiu?',
		lead: 'Cancelamentos, atrasos longos, overbooking e extravio de bagagem podem gerar direito a assistência, reembolso e indenização por danos materiais e morais. Analisamos gratuitamente o seu caso e cuidamos de tudo contra a companhia aérea.',
		img: '/images/voo.webp',
		typesEyebrow: 'Problemas comuns',
		typesTitle: 'Em quais situações atuamos?',
		types: [
			{ icon: 'lucide:plane-landing', title: 'Voo cancelado', text: 'Cancelamentos sem aviso prévio adequado, que fizeram você perder compromissos, conexões ou dias de viagem.' },
			{ icon: 'lucide:clock-alert', title: 'Atraso superior a 4 horas', text: 'Esperas longas no aeroporto, muitas vezes sem assistência de alimentação, comunicação ou hospedagem.' },
			{ icon: 'lucide:users', title: 'Overbooking', text: 'Embarque negado porque a companhia vendeu mais passagens do que assentos disponíveis.' },
			{ icon: 'lucide:luggage', title: 'Bagagem extraviada ou danificada', text: 'Malas perdidas, violadas, danificadas ou entregues com atraso no destino.' },
		],
		eligibilityTitle: 'Quando é possível buscar indenização',
		eligibilityLead: 'O direito à reparação depende das circunstâncias de cada caso, entre elas:',
		eligibility: [
			'Cancelamento, atraso ou alteração relevante do voo',
			'Falta de assistência material por parte da companhia',
			'Prejuízos comprováveis: hospedagem, alimentação, compromissos perdidos',
			'Reclamação dentro dos prazos previstos em lei',
		],
		steps: [
			{ title: 'Envie seus dados', text: 'Você nos manda o cartão de embarque, comprovantes e um breve relato do que aconteceu.' },
			{ title: 'Análise gratuita', text: 'Avaliamos a viabilidade, os prazos e o valor potencial da indenização.' },
			{ title: 'Atuação contra a companhia', text: 'Cuidamos da negociação e, se necessário, da ação judicial — 100% online.' },
			{ title: 'Você recebe', text: 'Acompanhamento transparente até a conclusão do caso.' },
		],
		closing: 'Guarde cartões de embarque, e-mails da companhia e comprovantes de gastos extras. Quanto antes o caso for analisado, maiores as chances de uma solução rápida.',
		widget: { label: 'Voo LA 3291 · GRU → REC', value: 'Cancelado', status: 'Atraso 9h', ok: 'Pedido de indenização em análise' },
	},
	{
		slug: 'acidente-de-trabalho',
		name: 'Acidente de Trabalho',
		seoDescription: 'Acidente de trabalho ou doença ocupacional? Estabilidade, benefícios do INSS e indenização. Assessoria jurídica em Limeira – SP e em todo o Brasil.',
		tag: 'Trabalhista e previdenciário',
		title: 'Sofreu um acidente de trabalho ou desenvolveu uma',
		accent: 'doença ocupacional?',
		lead: 'Acidentes no trabalho e no trajeto, doenças ocupacionais e afastamentos podem garantir estabilidade, benefícios do INSS e indenização do empregador. Assessoria especializada para garantir seus direitos — e a segurança da sua empresa.',
		img: '/images/acidente.webp',
		typesEyebrow: 'Situações comuns',
		typesTitle: 'Quais os tipos de acidente?',
		types: [
			{ icon: 'lucide:hard-hat', title: 'Acidente típico', text: 'Lesões ocorridas durante o exercício da atividade, dentro ou fora do estabelecimento da empresa.' },
			{ icon: 'lucide:route', title: 'Acidente de trajeto', text: 'Ocorrências no deslocamento entre a residência e o local de trabalho.' },
			{ icon: 'lucide:activity', title: 'Doença ocupacional', text: 'LER/DORT, problemas de coluna, perda auditiva, burnout e outras doenças ligadas à atividade.' },
			{ icon: 'lucide:file-heart', title: 'Benefício negado pelo INSS', text: 'Auxílio-doença, auxílio-acidente ou aposentadoria por invalidez indeferidos ou cessados.' },
		],
		eligibilityTitle: 'Quais direitos podem ser garantidos',
		eligibilityLead: 'Conforme o caso concreto, o trabalhador pode ter direito a:',
		eligibility: [
			'Estabilidade de 12 meses após o retorno do afastamento',
			'Auxílio-doença acidentário e auxílio-acidente',
			'Indenização por danos morais, materiais e estéticos',
			'Pensão em caso de redução da capacidade de trabalho',
		],
		steps: [
			{ title: 'Relato do ocorrido', text: 'Você conta como aconteceu o acidente e quais documentos possui: CAT, atestados, exames.' },
			{ title: 'Análise jurídica', text: 'Avaliamos responsabilidade do empregador, nexo com a atividade e prazos.' },
			{ title: 'Estratégia', text: 'Definimos a atuação junto ao INSS e/ou na Justiça do Trabalho.' },
			{ title: 'Acompanhamento', text: 'Você é informado a cada etapa, do pedido administrativo à decisão final.' },
		],
		closing: 'Prazos e provas são decisivos em casos de acidente. Se você ou alguém da sua família foi afetado, solicite uma avaliação jurídica responsável e criteriosa.',
		widget: { label: 'CAT emitida · INSS', value: 'Benefício B91', status: 'Negado', ok: 'Recurso administrativo protocolado' },
	},
];

export const landingStats = [
	{ value: '20.000+', label: 'clientes atendidos em todo o Brasil' },
	{ value: '5★', label: 'avaliação no Google' },
	{ value: '100%', label: 'atendimento nacional e online' },
];
