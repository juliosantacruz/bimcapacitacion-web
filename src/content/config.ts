import { defineCollection, z } from "astro:content";

const temariosCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      imageAlt: z.string(),
    }),
});

const tutorialesCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image(),
      imageAlt: z.string(),
      YTVideo: z.string()
    }),
});

export const collections = {
  temarios: temariosCollection,
  tutoriales:tutorialesCollection,
};
