import type { ImageMetadata } from 'astro';

/**
 * Content and data files reference photos as `/images/<file>` strings.
 * This resolves them to the optimized assets in `src/assets/images/`,
 * so `<Img>` and `getImage()` can generate responsive, compressed variants.
 */
const files = import.meta.glob<{ default: ImageMetadata }>('/src/assets/images/**/*.{webp,jpg,jpeg,png}', { eager: true });

export function asset(path: string): ImageMetadata {
	const rel = path.replace(/^\/images\//, '');
	const hit = files[`/src/assets/images/${rel}`];
	if (!hit) throw new Error(`Imagem não encontrada em src/assets/images: ${path}`);
	return hit.default;
}
