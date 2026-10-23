/** Companies served — from the previous site's /empresa/ page ("Empresas atendidas"). */
export type Empresa = { name: string; logo?: string; instagram?: string; /** light logo: show on a dark tile */ dark?: boolean };

export const empresas: Empresa[] = [
	{ name: "CISAB ZONA DA MATA", logo: '/images/empresas/cisab-zona-da-mata.png', instagram: 'cisabzm' },
	{ name: "APRECE — Associação dos Municípios do Estado do Ceará", logo: '/images/empresas/aprece-associa-o-dos-munic-pios-do-estad.jpg', instagram: 'aprececeara' },
	{ name: "EMHUR - Empresa De Desenvolvimento Urbano", logo: '/images/empresas/emhur-empresa-de-desenvolvimento-urbano.png' },
	{ name: "ARISB-MG", logo: '/images/empresas/arisb-mg.png', instagram: 'arisb.mg' },
	{ name: "ASSEMAE", logo: '/images/empresas/assemae.png', instagram: 'assemaenacional' },
	{ name: "ARIS-MG", logo: '/images/empresas/aris-mg.png', instagram: 'aris.minasgerais' },
	{ name: "POSTO LIMEIRANEA LTDA", logo: '/images/empresas/posto-limeiranea-ltda.png', instagram: 'postolimeiranea' },
	{ name: "AUTO POSTO NO OASIS", logo: '/images/empresas/auto-posto-no-oasis.png', instagram: 'nopostono' },
	{ name: "AUTO POSTO COLINAS DE SÃO JOÃO", logo: '/images/empresas/auto-posto-colinas-de-s-o-jo-o.png', instagram: 'postocolinassaojoao' },
	{ name: "AUTO POSTO CHACÁRA ANTONIETA", logo: '/images/empresas/auto-posto-chac-ra-antonieta.webp', instagram: 'postopetroramos' },
	{ name: "POSTO JARDIM DA COLINAS LTDA", logo: '/images/empresas/posto-jardim-da-colinas-ltda.png', instagram: 'postojardimdascolinas' },
	{ name: "CENTRO AUTOMOTIVO RIVIERA", logo: '/images/empresas/centro-automotivo-riviera.png' },
	{ name: "AUTO POSTO SANTA LUCIA", logo: '/images/empresas/auto-posto-santa-lucia.png', instagram: 'autoposto.stalucia' },
	{ name: "FLAMA CONSULTORIA", logo: '/images/empresas/flama-consultoria.png', instagram: 'flamaconsultoria_' },
	{ name: "MÁQUINAS GEKKO INDUSTRIAL E AGRÍCOLA", logo: '/images/empresas/m-quinas-gekko-industrial-e-agr-cola.png', instagram: 'maquinasgekko' },
	{ name: "TIRADENTES CONSULTORIA IMOBILIÁRIA", logo: '/images/empresas/tiradentes-consultoria-imobili-ria.jpg', instagram: 'imobtiradentes' },
	{ name: "BIOMCROP BIOTECNOLOGIA AGRÍCOLA LTDA", logo: '/images/empresas/biomcrop-biotecnologia-agr-cola-ltda.png', instagram: 'biomcrop', dark: true },
	{ name: "ALFA S M HOLDING PATRIMONIAL LTDA" },
	{ name: "RD EMBALAGENS LTDA", logo: '/images/empresas/rd-embalagens-ltda.png' },
	{ name: "ACCESS FABRICAÇÃO E COMÉRCIO DE MÁQUINAS INDUSTRIAIS LTDA.", logo: '/images/empresas/access-fabrica-o-e-com-rcio-de-m-quinas-.png' },
	{ name: "PLATAFER", logo: '/images/empresas/platafer.png' },
	{ name: "CTA EQUIPAMENTOS", logo: '/images/empresas/cta-equipamentos.png', instagram: 'ctaequipamentos', dark: true },
	{ name: "AC TRANSPORTES" },
];
