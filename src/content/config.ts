import { defineCollection, z } from "astro:content";

const methodsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    docs: z.string().url(),
  }),
});

export const collections = {
  methods: methodsCollection,
};
