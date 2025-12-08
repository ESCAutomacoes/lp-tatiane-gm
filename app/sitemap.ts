import type { MetadataRoute } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://workshopdocaosapaz.com.br";

const routes = ["", "/checkout", "/obrigado"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((path, index) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency: index === 0 ? "daily" : "weekly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
