import sanityClient  from "@sanity/client";
import imageUrlBuilder  from "@sanity/image-url";

export const client = sanityClient({
  projectId: "io7g0pqm",
  dataset: "production",
  apiVersion: "2022-07-27",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKENT,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);