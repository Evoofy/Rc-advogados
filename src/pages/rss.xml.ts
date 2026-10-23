import type { APIRoute } from 'astro';
import { getPosts } from '../lib/blog';
import { postUrl } from '../lib/urls';

/** RSS feed. Also served at the old WordPress feed URLs (/feed/, /blog/feed/, /comments/feed/) via rewrites. */
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = async ({ site }) => {
	const posts = await getPosts();
	const items = posts
		.map((p) => {
			const url = new URL(postUrl(p.id), site).href;
			return `<item><title>${esc(p.data.title)}</title><link>${url}</link><guid isPermaLink="true">${url}</guid><pubDate>${p.data.date.toUTCString()}</pubDate><category>${esc(p.data.category)}</category><description>${esc(p.data.description)}</description></item>`;
		})
		.join('');
	const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>Reginaldo Costa Advogados</title><link>${site}</link><description>Artigos do blog da RC Advogados</description><language>pt-BR</language><atom:link href="${new URL('/feed/', site).href}" rel="self" type="application/rss+xml"/>${items}</channel></rss>`;
	return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
