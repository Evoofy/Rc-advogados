import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const categories = ['Previdenciário', 'Trabalhista', 'Família', 'Consumidor', 'Golpes', 'Criminal', 'Empresarial', 'Administrativo'] as const;

const blog = defineCollection({
	loader: glob({ pattern: '*.md', base: './src/content/blog' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		category: z.enum(categories),
		/** Lawyer slug from src/data/site.ts; omitted posts are signed by the firm */
		author: z.string().optional(),
		/** `/images/...` path resolved from src/assets/images */
		cover: z.string(),
		/** Crop anchor for portrait covers (lawyer photos) */
		coverPosition: z.enum(['top', 'center']).default('center'),
		/** Original URL on the previous WordPress site */
		source: z.string().url().optional(),
	}),
});

export const collections = { blog };
