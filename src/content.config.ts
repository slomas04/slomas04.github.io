// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';


const projects = defineCollection({
    loader: glob({ base: './src/collections/projects', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        url: z.string().optional(),
        technologies: z.array(z.string())
    })
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { projects };