import type { MetadataRoute } from "next";
import { site } from "@/lib/site-config";

export const dynamic = "force-static";

const paths = ["", "/pies", "/events", "/story", "/book"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-28");
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
  }));
}
