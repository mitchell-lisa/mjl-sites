import type { Metadata } from "next";
import { Bodoni_Moda, Source_Sans_3 } from "next/font/google";
import { SiteShell } from "@/components/SiteShell";
import { buildJsonLd } from "@/lib/jsonld";
import { isPreview, site } from "@/lib/site-config";
import "./globals.css";

const display = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-bodoni",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-source",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Wood-fired pizza that comes to you | Bella Ciao Pizza",
    template: "%s | Bella Ciao Pizza",
  },
  description: site.description,
  applicationName: site.shortName,
  robots: isPreview
    ? {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
          index: false,
          follow: false,
          noimageindex: true,
        },
      }
    : { index: true, follow: true },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: site.shortName,
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Bella Ciao Pizza, wood-fired pizza that comes to you",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} h-full antialiased`}>
      <body className="min-h-full bg-paper pb-[calc(4.25rem+env(safe-area-inset-bottom))] font-body text-ink md:pb-0">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()) }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
