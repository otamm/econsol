// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// Define a `loader` and `schema` for each collection
const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/blog" }),
    // --- MODIFIED SECTION START ---
    // The schema is now simplified to only include the desired fields.
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
    })
    // --- MODIFIED SECTION END ---
});

// Export a single `collections` object to register your collection(s)
export const collections = { blog };