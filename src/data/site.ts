export const contact = {
	phone: '(19) 3713-5100',
	whatsapp: 'https://wa.me/551937135100',
	email: 'contato@reginaldocosta.com.br',
	street: 'R. Treze de Maio, 151 - Centro',
	city: 'Limeira – SP, 13480-170',
	address: 'R. Treze de Maio, 151 - Centro, Limeira – SP',
	hours: 'Seg. a Sex. das 08:00–12:00 e 13:00–17:30',
	oab: 'OAB-13.584',
	maps: 'https://www.google.com/maps/place/R.+Treze+de+Maio,+151+-+Centro,+Limeira+-+SP,+13480-170',
	mapsEmbed: 'https://www.google.com/maps?q=R.+Treze+de+Maio,+151+-+Centro,+Limeira+-+SP&output=embed',
	social: [
		{ icon: 'lucide:facebook', label: 'Facebook', href: '#' },
		{ icon: 'lucide:instagram', label: 'Instagram', href: '#' },
		{ icon: 'lucide:linkedin', label: 'LinkedIn', href: '#' },
	],
};

export const whatsappMsg = (text: string) => `${contact.whatsapp}?text=${encodeURIComponent(text)}`;

export const nav = [
	{ label: 'Início', href: '/' },
	{ label: 'Sobre', href: '/sobre' },
	{ label: 'Áreas', href: '/areas' },
	{ label: 'Equipe', href: '/equipe' },
	{ label: 'Blog', href: '/blog' },
	{ label: 'Contato', href: '/contato' },
];

export type Area = {
	slug: string;
	title: string;
	short: string;
	desc: string;
	long: string;
	img: string;
	featured?: boolean;
};

export const areas: Area[] = [
	{
		slug: 'administrativo-e-regulatorio',
		title: 'Administrativo e Regulatório',
		short: 'Licitações, contratos públicos, concessões e processos regulatórios.',
		desc: 'Soluções amplas para agências, empresas e órgãos que precisam navegar normas, licitações e regulação com segurança.',
		long: 'Atuamos no acompanhamento de demandas relacionadas ao direito administrativo e regulatório, tanto na esfera administrativa quanto judicial. A assessoria abrange licitações, contratos públicos, concessões, permissões, processos regulatórios e relacionamento com órgãos da administração pública, com atuação consultiva e contenciosa.',
		img: '/images/area-administrativo.webp',
		featured: true,
	},
	{
		slug: 'civil',
		title: 'Civil',
		short: 'Contratos, família, sucessões e responsabilidade civil, na esfera administrativa e judicial.',
		desc: 'O ramo do direito privado que rege as regras e condutas do dia a dia: contratos, família, sucessões e responsabilidade civil.',
		long: 'Atuamos no acompanhamento de demandas cíveis, tanto na esfera administrativa quanto judicial. A assessoria abrange elaboração e revisão de contratos, direito de família, sucessões, responsabilidade civil, obrigações e direitos patrimoniais, com atuação consultiva e contenciosa.',
		img: '/images/area-civil.webp',
		featured: true,
	},
	{
		slug: 'criminal',
		title: 'Criminal',
		short: 'Defesa da fase investigativa ao julgamento, em inquéritos, ações penais e recursos.',
		desc: 'Atuação técnica sobre os bens mais importantes para a sociedade, com defesa estratégica em todas as fases do processo.',
		long: 'Atuamos na defesa e assessoria em demandas relacionadas ao direito penal, desde a fase investigativa até o julgamento. A atuação abrange inquéritos policiais, ações penais, audiências, recursos e medidas cautelares, com atuação consultiva e contenciosa.',
		img: '/images/area-criminal.webp',
		featured: true,
	},
	{
		slug: 'trabalhista-e-previdenciario',
		title: 'Trabalhista e Previdenciário',
		short: 'Relações de trabalho, rescisões, benefícios, aposentadorias e revisões.',
		desc: 'Relações de trabalho, aposentadorias e benefícios — garantindo que cada direito conquistado seja respeitado.',
		long: 'Atuamos no acompanhamento de demandas trabalhistas e previdenciárias, tanto na esfera administrativa quanto judicial. A assessoria abrange relações de trabalho, verbas trabalhistas, rescisões, benefícios previdenciários, aposentadorias e revisões, com atuação consultiva e contenciosa.',
		img: '/images/area-trabalhista.webp',
		featured: true,
	},
	{
		slug: 'eleitoral',
		title: 'Eleitoral',
		short: 'Registro de candidaturas, propaganda, prestação de contas e ações eleitorais.',
		desc: 'Execução plena das normas e regulamentações eleitorais para candidatos, partidos e campanhas.',
		long: 'Atuamos no acompanhamento de demandas relacionadas ao processo eleitoral, tanto na esfera administrativa quanto judicial. A assessoria abrange registro de candidaturas, propaganda eleitoral, prestação de contas, ações eleitorais e consultoria preventiva para candidatos, partidos políticos e agentes públicos, com atuação consultiva e contenciosa.',
		img: '/images/area-eleitoral.webp',
		featured: true,
	},
	{
		slug: 'tributario',
		title: 'Tributário',
		short: 'Planejamento fiscal, recuperação de créditos, autuações e execuções fiscais.',
		desc: 'Suporte e respaldo para reduzir riscos fiscais, recuperar créditos e planejar a carga tributária com inteligência.',
		long: 'Atuamos no acompanhamento de demandas tributárias, tanto na esfera administrativa quanto judicial. A assessoria abrange planejamento fiscal, recuperação de créditos, defesas em autuações, execuções fiscais e processos tributários, com atuação consultiva e contenciosa.',
		img: '/images/area-tributario.webp',
		featured: true,
	},
	{
		slug: 'penal-empresarial',
		title: 'Penal Empresarial',
		short: 'Crimes contra a ordem econômica, tributária, financeira e ambiental.',
		desc: 'Defesa de empresas e gestores em investigações e ações penais ligadas à atividade empresarial.',
		long: 'Atuamos na defesa e assessoria em demandas relacionadas a crimes empresariais e corporativos, tanto na esfera investigativa quanto judicial. A atuação abrange crimes contra a ordem econômica, tributária, financeira e ambiental, além de delitos relacionados à atividade empresarial, com atuação consultiva e contenciosa.',
		img: '/images/area-criminal.webp',
	},
	{
		slug: 'penal-tributario',
		title: 'Penal Tributário',
		short: 'Crimes contra a ordem tributária e autuações com repercussão criminal.',
		desc: 'Defesa técnica quando uma questão fiscal ganha contornos criminais.',
		long: 'Atuamos na defesa e assessoria em demandas relacionadas a crimes contra a ordem tributária, desde a fase investigativa até o julgamento. A atuação abrange inquéritos, ações penais, autuações fiscais com repercussão criminal, crimes tributários e medidas de defesa, com atuação consultiva e contenciosa.',
		img: '/images/area-tributario.webp',
	},
	{
		slug: 'defesa-criminal-eleitoral',
		title: 'Defesa Criminal Eleitoral',
		short: 'Crimes eleitorais e conexos, com foco na preservação de direitos políticos.',
		desc: 'Estratégia de defesa voltada à preservação dos direitos políticos de candidatos e agentes públicos.',
		long: 'Atuamos na defesa em crimes eleitorais e conexos, com estratégia voltada à preservação de direitos políticos. A atuação abrange investigações, ações penais eleitorais, captação ilícita de sufrágio, corrupção eleitoral e crimes correlatos, com atuação consultiva e contenciosa.',
		img: '/images/area-eleitoral.webp',
	},
];

export type Lawyer = {
	slug: string;
	name: string;
	oab: string;
	img: string;
	role: string;
	bio: string;
	tags: string[];
	education?: string[];
	practice?: string[];
};

export const team: Lawyer[] = [
	{
		slug: 'reginaldo-costa',
		name: 'Dr. Reginaldo José da Costa',
		oab: 'OAB/SP 264.367',
		img: '/images/adv-reginaldo.webp',
		role: 'Sócio fundador',
		bio: 'Bacharel em direito, advogado inscrito na OAB/SP 264.367, pós-graduado em direito e processo do trabalho pela Universidade Presbiteriana Mackenzie, atuante nas áreas de direito do trabalho, direito empresarial, na área consultiva e contenciosa, áreas cíveis, incluindo direito de família, consultor na área de Direito Administrativo (licitações, contratos administrativos e delegação de serviços) e de Direito Regulatório.',
		tags: ['Trabalhista', 'Empresarial', 'Administrativo', 'Regulatório', 'Família'],
		education: [
			'Bacharel em Direito.',
			'Pós-graduado em Direito e Processo do Trabalho pela Universidade Presbiteriana Mackenzie.',
		],
		practice: [
			'Advogado atuante nas áreas de Direito do Trabalho e Direito Empresarial, nas esferas consultiva e contenciosa.',
			'Atuação em Direito Civil, incluindo Direito de Família.',
			'Consultor em Direito Administrativo, com foco em licitações, contratos administrativos e delegação de serviços públicos.',
			'Consultor em Direito Regulatório.',
			'Sócio fundador do escritório RC Advogados.',
		],
	},
	{
		slug: 'eliezer-teodoro',
		name: 'Dr. Eliezer Roberto Teodoro',
		oab: 'OAB/SP 411.338',
		img: '/images/adv-eliezer.webp',
		role: 'Advogado',
		bio: 'Bacharel em direito, advogado inscrito na OAB/SP 411.338, pós-graduando em Direito Contratual e Responsabilidade Civil, advogado militante no contencioso e preventivo, notadamente nas áreas cível (ações indenizatórias, usucapião, cobranças, contratos, aluguéis, estatutos), consumidor (ações indenizatórias, contratos) e família e sucessões (pensão alimentícia, divórcio, guarda e inventário).',
		tags: ['Cível', 'Consumidor', 'Família', 'Sucessões'],
		education: ['Bacharel em Direito.', 'Pós-graduando em Direito Contratual e Responsabilidade Civil.'],
		practice: [
			'Cível: ações indenizatórias, usucapião, cobranças, contratos, aluguéis e estatutos.',
			'Consumidor: ações indenizatórias e contratos.',
			'Família e Sucessões: pensão alimentícia, divórcio, guarda e inventário.',
		],
	},
	{
		slug: 'mariane-almeida',
		name: 'Dra. Mariane Almeida',
		oab: 'OAB/SP 518.830',
		img: '/images/adv-mariane.webp',
		role: 'Advogada',
		bio: 'Bacharel em Direito, advogada inscrita na OAB/SP 518.830, pós-graduada em Direito de Família e Sucessões. Atua de forma consultiva, judicial e extrajudicial nas demandas relacionadas ao direito de família, sucessões e relações patrimoniais, oferecendo orientação jurídica segura e personalizada.',
		tags: ['Família', 'Sucessões', 'Patrimonial'],
		education: ['Bacharel em Direito.', 'Pós-graduada em Direito de Família e Sucessões.'],
		practice: [
			'Atuação consultiva, judicial e extrajudicial em direito de família.',
			'Sucessões e planejamento de relações patrimoniais.',
		],
	},
	{
		slug: 'ricardo-marques',
		name: 'Dr. Ricardo Marques',
		oab: 'OAB/SP 537.744',
		img: '/images/adv-ricardo.webp',
		role: 'Advogado',
		bio: 'Advogado inscrito na OAB/SP 537.744, integrante da equipe multidisciplinar da RC Advogados.',
		tags: ['Consultivo', 'Contencioso'],
	},
	{
		slug: 'guilherme-andrade',
		name: 'Dr. Guilherme Marcato de Andrade',
		oab: 'OAB/SP 472.937',
		img: '/images/adv-guilherme.webp',
		role: 'Advogado',
		bio: 'Bacharel em direito, advogado inscrito na OAB/SP 472.937, pós-graduando em Direito do Trabalho e Processo do Trabalho pelo Instituto Damásio de Direito, chancelado pela Faculdade IBMEC de São Paulo/SP. Atuante na área trabalhista, cível e direito do consumidor.',
		tags: ['Trabalhista', 'Cível', 'Consumidor'],
		education: [
			'Bacharel em Direito.',
			'Pós-graduando em Direito do Trabalho e Processo do Trabalho pelo Instituto Damásio de Direito (Faculdade IBMEC São Paulo).',
		],
		practice: ['Atuação na área trabalhista.', 'Direito cível e do consumidor.'],
	},
	{
		slug: 'gabriel-prudente',
		name: 'Dr. Gabriel Prudente',
		oab: 'OAB/SP 481.397',
		img: '/images/adv-gabriel.webp',
		role: 'Advogado',
		bio: 'Advogado inscrito na OAB/SP 481.397, integrante da equipe multidisciplinar da RC Advogados.',
		tags: ['Consultivo', 'Contencioso'],
	},
	{
		slug: 'evander-oliveira',
		name: 'Dr. Evander Garcia de Oliveira',
		oab: 'OAB/SP 459.347',
		img: '/images/adv-evander.webp',
		role: 'Advogado',
		bio: 'Bacharel em direito, advogado inscrito na OAB/SP 459.347, atuante na área cível em geral, especialmente na propositura e defesa em ações indenizatórias, cobrança e execução de dívidas, tutelas de urgência e interposição de recursos nos tribunais superiores.',
		tags: ['Cível', 'Execução', 'Recursos'],
		education: ['Bacharel em Direito.'],
		practice: [
			'Propositura e defesa em ações indenizatórias.',
			'Cobrança e execução de dívidas.',
			'Tutelas de urgência e recursos nos tribunais superiores.',
		],
	},
];

export const testimonials = [
	{ name: 'Israel Carlos Souza', text: 'Excelente atendimento. Profissionais competentes e dedicados. Indico aos amigos.' },
	{ name: 'Edmilson Viana', text: 'Escritório bem estruturado, e excelentes profissionais.' },
	{ name: 'Panoraamic Eye', text: 'Advogados de confiança e responsabilidade!!' },
	{ name: 'Silvana Tolentino', text: 'Excelente profissional, com uma equipe que resolve.' },
];

export const faq = [
	{
		q: 'A primeira conversa tem custo?',
		a: 'Não. A análise inicial do seu caso é gratuita e sem compromisso. Você explica a situação e nós orientamos sobre os caminhos possíveis.',
	},
	{
		q: 'Vocês atendem fora de Limeira?',
		a: 'Sim. Além do atendimento presencial na nossa sede, atendemos clientes de todo o Brasil de forma 100% digital, por WhatsApp, videochamada e e-mail.',
	},
	{
		q: 'Como acompanho o andamento do meu processo?',
		a: 'Você recebe atualizações a cada movimentação relevante e pode falar com a equipe responsável sempre que precisar.',
	},
	{
		q: 'Quais documentos devo separar para a primeira reunião?',
		a: 'Documento de identidade, comprovante de residência e todo material relacionado ao caso: contratos, comprovantes, prints de conversas e e-mails. Se não tiver tudo, não tem problema — a gente orienta.',
	},
];
