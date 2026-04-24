import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fnl-rdc.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/programme`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/inscription`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/sponsors`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/equipe`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },
  ];
}