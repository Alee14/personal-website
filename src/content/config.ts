import { defineCollection, z } from "astro:content";
import { rssSchema } from '@astrojs/rss';

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        tags: z.array(z.string()),
    }),
});

export const collections = {
    blog: blogCollection,
};
