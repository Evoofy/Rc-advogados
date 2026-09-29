import { areas, contact, faq, type Lawyer } from '../data/site';

/** schema.org structured data (JSON-LD) shared across pages. */

export const ORG_ID = '#organizacao';

export function organization(site: URL) {
	const url = site.href;
	return {
		'@context': 'https://schema.org',
		'@type': 'LegalService',
		'@id': `${url}${ORG_ID}`,
		name: 'Reginaldo Costa Advogados Associados',
		alternateName: 'RC Advogados',
		url,
		logo: new URL('/images/logo.png', site).href,
		image: new URL('/og/og-default.jpg', site).href,
		description:
			'Hub de soluções jurídicas em Limeira – SP: Direito Civil, Criminal, Trabalhista e Previdenciário, Tributário, Eleitoral, Administrativo e Regulatório.',
		telephone: '+55-19-3713-5100',
		email: contact.email,
		address: {
			'@type': 'PostalAddress',
			streetAddress: 'R. Treze de Maio, 151 - Centro',
			addressLocality: 'Limeira',
			addressRegion: 'SP',
			postalCode: '13480-170',
			addressCountry: 'BR',
		},
		geo: { '@type': 'GeoCoordinates', latitude: -22.5653729, longitude: -47.4033639 },
		hasMap: contact.maps,
		openingHoursSpecification: [
			{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '12:00' },
			{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '13:00', closes: '17:30' },
		],
		areaServed: [{ '@type': 'City', name: 'Limeira' }, { '@type': 'Country', name: 'Brasil' }],
		knowsAbout: areas.map((a) => (a.title.startsWith('Defesa') ? a.title : `Direito ${a.title}`)),
		sameAs: contact.social.map((s) => s.href),
	};
}

export function website(site: URL) {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'RC Advogados',
		url: site.href,
		inLanguage: 'pt-BR',
		publisher: { '@id': `${site.href}${ORG_ID}` },
	};
}

export function breadcrumbs(site: URL, items: { label: string; href?: string }[], current: URL) {
	const all = [{ label: 'Início', href: '/' }, ...items];
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: all.map((c, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			name: c.label,
			item: new URL(c.href ?? current.pathname, site).href,
		})),
	};
}

export function person(site: URL, lawyer: Lawyer, image: string) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: lawyer.name,
		jobTitle: lawyer.role,
		description: lawyer.bio,
		image,
		url: new URL(`/equipe/${lawyer.slug}/`, site).href,
		identifier: lawyer.oab,
		knowsAbout: lawyer.tags,
		worksFor: { '@id': `${site.href}${ORG_ID}` },
		...(lawyer.social?.length ? { sameAs: lawyer.social.map((s) => s.href) } : {}),
	};
}

export function article(
	site: URL,
	post: { title: string; description: string; date: Date; url: URL; image: string },
	author?: Lawyer,
) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: post.title,
		description: post.description,
		image: post.image,
		datePublished: post.date.toISOString(),
		dateModified: post.date.toISOString(),
		inLanguage: 'pt-BR',
		mainEntityOfPage: post.url.href,
		author: author
			? { '@type': 'Person', name: author.name, url: new URL(`/equipe/${author.slug}/`, site).href }
			: { '@id': `${site.href}${ORG_ID}` },
		publisher: { '@id': `${site.href}${ORG_ID}` },
	};
}

export function faqPage() {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faq.map((f) => ({
			'@type': 'Question',
			name: f.q,
			acceptedAnswer: { '@type': 'Answer', text: f.a },
		})),
	};
}

export function service(site: URL, name: string, description: string, url: URL) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name,
		description,
		url: url.href,
		areaServed: { '@type': 'Country', name: 'Brasil' },
		provider: { '@id': `${site.href}${ORG_ID}` },
	};
}
