import type { Metadata } from "next";
import { Barlow_Condensed, Source_Sans_3 } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { SiteShell } from "@/components/SiteShell";
import { site } from "@/lib/site";
import "./globals.css";

const display = Barlow_Condensed({
  variable: "--font-condensed",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover" as const,
  themeColor: "#062D97",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.previewUrl),
  title: {
    default: `${site.name} | Sample redesign`,
    template: `%s | ${site.name}`,
  },
  description: `${site.description}. Preview only. Not the official SHQ Properties website.`,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  icons: {
    icon: "/brand/logo.png",
    apple: "/brand/logo.png",
  },
  openGraph: {
    title: `${site.name} | Sample redesign`,
    description: `${site.tagline}. Family-owned REI and GC in ${site.region} since ${site.founded}. Preview only.`,
    type: "website",
    url: site.previewUrl,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "SHQ Properties sample redesign preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Sample redesign`,
    description: `${site.tagline}. Preview only. Not the official website.`,
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} antialiased`}>
      <body className="bg-soft font-sans text-ink">
        <JsonLd />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
