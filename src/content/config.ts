import { defineCollection, z } from 'astro:content';

// PHASE 3 — finalised when we migrate the Webflow CMS. These schemas mirror the
// two Webflow Collections and will be confirmed against the real field names
// pulled via the Webflow Data API / connector.

const insights = defineCollection({
  type: 'content', // MDX bodies in src/content/insights/<slug>.mdx
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    publishedAt: z.coerce.date().optional(),
    coverImage: z.string().optional(), // -> https://assets.hubsell.com/...
    draft: z.boolean().default(false),
  }),
});

const customerstories = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    company: z.string().optional(),
    summary: z.string().optional(),
    logo: z.string().optional(),
    metrics: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { insights, customerstories };
