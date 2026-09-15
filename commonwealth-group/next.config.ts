import type { NextConfig } from "next";

const githubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(githubPages
    ? {
        output: "export" as const,
        images: { unoptimized: true },
        basePath: "/mjl-sites",
        assetPrefix: "/mjl-sites",
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
