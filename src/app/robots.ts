import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules:[
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
      {
        userAgent: "YandexBot",
        allow: "/",
      },
      {
        userAgent: "GPTBot", 
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User", 
        allow: "/",
      },
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: "/",
      },
    ],
    sitemap: "https://sparshpolymer.com/sitemap.xml",
  };
}
