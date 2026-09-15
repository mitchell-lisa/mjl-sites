import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

const routes = [
  "/",
  "/portfolio",
  "/about",
  "/leadership",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-15");
  return routes.map((path) => ({
    url: `${site.previewUrl}${path === "/" ? "" : path}`,
    lastModified,
  }));
}
