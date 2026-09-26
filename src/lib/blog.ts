import { getCollection, type CollectionEntry } from 'astro:content';
import { team } from '../data/site';

export type Post = CollectionEntry<'blog'>;

export async function getPosts() {
	const posts = await getCollection('blog');
	return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export const authorOf = (post: Post) => team.find((t) => t.slug === post.data.author);

export const formatDate = (d: Date) =>
	d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric', timeZone: 'UTC' });

export const shortDate = (d: Date) => ({
	day: d.toLocaleDateString('pt-BR', { day: '2-digit', timeZone: 'UTC' }),
	month: d.toLocaleDateString('pt-BR', { month: 'short', timeZone: 'UTC' }).replace('.', ''),
});

export const readingTime = (post: Post) => Math.max(1, Math.ceil((post.body ?? '').split(/\s+/).length / 200));
