import { createClient } from '@sanity/client'
import imageUrlBuilder from "@sanity/image-url"
import { getFile } from '@sanity/asset-utils';

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: "2023-05-03",
    useCdn: false,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);