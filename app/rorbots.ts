import type { MetadataRoute } from "next";

const isDev = process.env.NODE_ENV === "development" ? true : false;
const url = isDev
  ? "http://localhost:3000/sitemap.xml"
  : "https://nxt-lms.vercel.app/sitemap.xml";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: ["/"],
        disallow: "/private/",
      },
      {
        userAgent: ["Applebot", "Bingbot"],
        disallow: ["/"],
      },
    ],
    sitemap: url,
  };
}
