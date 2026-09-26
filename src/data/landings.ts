export type Landing = {
	slug: string;
	name: string;
	tag: string;
	title: string;
	accent: string;
	lead: string;
	img: string;
	threshold?: string;
	typesEyebrow: string;
	typesTitle: string;
	types: { icon: string; title: string; text: string }[];
	eligibilityTitle: string;
	eligibilityLead: string;
	eligibility: string[];
	steps: { title: string; text: string }[];
	closing: string;
	/** Fake "app" widget shown in the hero */
	widget: { label: string; value: string; status: string; ok: string };
};

export const landings: Landing[] = [
	{
		slug: 'golpe-do-pix',
		name: 'Golpe do PIX',
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
