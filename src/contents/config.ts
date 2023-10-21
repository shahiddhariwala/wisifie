import { z, defineCollection } from 'astro:content';

const influencersCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    name: z.string(),
    social_media_handle: z.string(),
    description: z.string(),
    total_followers: z.string(),
    image_url: z.string(),
    accessories: z.array(
      z.object({
        image_url: z.string(),
        hashtag: z.string(),
        is_dm: z.boolean(),
        buy_link: z.string(),
        price: z.number()
      })
    )
  }),
});

export const collections = {
  'influencer': influencersCollection,
};