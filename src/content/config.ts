import { z, defineCollection } from 'astro:content';

const influencer = defineCollection({
  type: 'data', // v2.5.0 and later
  schema: z.object({
    name: z.string(),
    social_media_handle: z.string(),
    description: z.string(),
    total_followers: z.string(),
    image_url: z.string(),
    quote_url: z.string(),
    order: z.number(),
    accessories: z.array(
      z.object({
        image_url: z.string(),
        hashtag: z.string(),
        is_dm: z.boolean(),
        buy_link: z.string(),
        price: z.number(),
        buy_tagline: z.string(),
        dm_tagline: z.string(),
        dm_link: z.string(),
      })
    )
  }),
});

export const collections = {
  influencer
};