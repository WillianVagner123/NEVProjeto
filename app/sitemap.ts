import type { MetadataRoute } from "next";

const routes = ["", "/grupo-de-pesquisa", "/liga-academica", "/framework-nutev", "/biblioteca", "/eventos", "/equipe", "/contato", "/politica-de-privacidade"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  return routes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date(), changeFrequency: "monthly", priority: route === "" ? 1 : 0.8 }));
}
