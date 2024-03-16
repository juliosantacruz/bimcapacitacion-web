import { defineCollection, z } from "astro:content";

const temariosCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: image().refine((img) => img.width >= 400, {
        message: "Cover image must be at least 400 pixels wide!",
      }),
      imageAlt: z.string(),
    }),
});

export const collections = {
  temarios: temariosCollection,
};
