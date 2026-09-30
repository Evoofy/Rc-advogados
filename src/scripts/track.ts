/**
 * Pushes lead interactions to the dataLayer so GTM/GA4 can use them as conversions.
 * Events are queued even before consent; GTM/GA4 only receive them once loaded.
 *
 *   whatsapp_click · email_click · phone_click  { link_location, link_text }
 *   generate_lead (contact form, see src/pages/contato.astro)
 */
declare global {
	interface Window {
		dataLayer?: Record<string, unknown>[];
	}
}

const kind = (href: string) =>
	/api\.whatsapp\.com\/send|wa\.me\/\d/.test(href) ? 'whatsapp_click' : href.startsWith('mailto:') ? 'email_click' : href.startsWith('tel:') ? 'phone_click' : null;

/** Where on the page the link lives: nav, footer, or the nearest section with an id */
const location = (el: Element) => {
	if (el.closest('#nav, #mobile-menu')) return 'menu';
	if (el.closest('footer')) return 'rodape';
	if (el.closest('#cookie-banner')) return 'cookies';
	if (el.closest('#whatsapp-float')) return 'botao-flutuante';
	const section = el.closest('section[id], article[id], section');
	return section?.id || section?.querySelector('h1, h2')?.textContent?.trim().slice(0, 40) || 'pagina';
};

document.addEventListener(
	'click',
	(e) => {
		const a = (e.target as Element).closest?.('a[href]') as HTMLAnchorElement | null;
		const event = a && kind(a.href);
		if (!a || !event) return;
		window.dataLayer?.push({
			event,
			link_location: location(a),
			link_text: (a.textContent || a.getAttribute('aria-label') || '').replace(/\s+/g, ' ').trim().slice(0, 60),
			page_path: window.location.pathname,
		});
	},
	{ capture: true },
);

export {};
