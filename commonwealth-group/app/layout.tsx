import type { Metadata } from "next";
import { Cinzel, Source_Serif_4 } from "next/font/google";
import { SiteShell } from "@/components/SiteShell";
import { site } from "@/lib/site";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.previewUrl),
  title: {
    default: `${site.shortName} | Sample redesign`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "Sample redesign of The Commonwealth Group, a Mid-Atlantic development, leasing, and management firm since 1973. Preview only. Not affiliated.",
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
    title: `${site.shortName} | Sample redesign`,
    description:
      "Institutional sample redesign for discussion. Not affiliated. Preview only.",
    type: "website",
    url: site.previewUrl,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "The Commonwealth Group sample redesign preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.shortName} | Sample redesign`,
    description:
      "Institutional sample redesign for discussion. Not affiliated. Preview only.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${sourceSerif.variable} antialiased`}
    >
      <body className="bg-ivory font-sans text-ink">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
