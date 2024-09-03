import type { MetadataRoute } from "next";

const isDev = process.env.NODE_ENV === "development" ? true : false;
const url = isDev ? "http://localhost:3000" : "https://nxt-lms.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: url,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${url}/courses`,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 0.8,
    },
    {
      url: `${url}/about`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ];
}
