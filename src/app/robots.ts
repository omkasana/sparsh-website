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
        userAgent: "GPTBot", // ChatGPT
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User", // ChatGPT Search
        allow: "/",
      },
      {
        userAgent: "ClaudeBot", // Anthropic Claude
        allow: "/",
      },
      {
        userAgent: "PerplexityBot", // Perplexity AI
        allow: "/",
      },
      {
        userAgent: "Google-Extended", // Google Gemini/Bard
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
