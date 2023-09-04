import { baseService } from "astro/assets";
import { defineCollection, z } from "astro:content";

function getBaseConfig() {
  return {
    schema: z.object({
      title: z.string(),
      description: z.string(),
      // Transform string to Date object
      pubDate: z
        .string()
        .or(z.date())
        .transform((val) => new Date(val)),
      updatedDate: z
        .string()
        .optional()
        .transform((str) => (str ? new Date(str) : undefined)),
      heroImage: z.string().optional(),
    }),
  };
}

const blog = defineCollection({
  ...getBaseConfig(),
});

const pythonOrm = defineCollection({
  ...getBaseConfig(),
});

const stack = defineCollection({
  schema: z.object({
    title: z.string(),
    logo: z.string(),
  }),
});

export const collections = { blog, "python-orm": pythonOrm, stack };
