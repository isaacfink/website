import { baseService } from "astro/assets";
import { defineCollection, z } from "astro:content";

function getBaseConfig() {
  return {
    schema: ({ image }) =>
      z.object({
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
        heroImage: image(),
      }),
  };
}

const blog = defineCollection({
  ...getBaseConfig(),
});

const pythonOrm = defineCollection({
  ...getBaseConfig(),
});

export const collections = { blog, "python-orm": pythonOrm };
