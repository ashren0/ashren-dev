import { z, defineCollection } from "astro:content";

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    category: z.enum(["blog", "tutorials", "projects", "writeups"]),
    tags: z.array(z.string()),
    image: z.object({
      url: z.string(),
      alt: z.string()
    })
  })
});

export const collections = {
  posts
};
