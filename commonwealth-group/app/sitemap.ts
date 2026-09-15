import type { MetadataRoute } from "next";
import { categories } from "@/lib/categories";
import { properties, propertyHref } from "@/lib/properties";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const routes = [
  "/",
  "/available-properties",
  "/portfolio",
  "/development",
  "/management",
  "/management/marketing-leasing",
  "/management/acquisitions-disposition",
  "/montchanin-builders",
  "/clients",
  "/leadership",
  "/about",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-15");
  const pages = [
    ...routes.map((path) => ({
      url: `${site.previewUrl}${path === "/" ? "" : path}`,
      lastModified,
    })),
    ...categories.map((category) => ({
      url: `${site.previewUrl}/portfolio/${category.slug}`,
      lastModified,
    })),
    ...properties.map((property) => ({
      url: `${site.previewUrl}${propertyHref(property)}`,
      lastModified,
    })),
  ];
  return pages;
}
