import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import { SiteShell } from "@/components/SiteShell";
import { site } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.previewUrl),
  title: {
    default: `Wood-fired mobile pizza in Dayton, NJ | ${site.shortName} (preview)`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "Bella Ciao Pizza LLC brings a wood-fired oven to private events and catering in Dayton and South Brunswick, NJ. Preview built by MJL Collective.",
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
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: `${site.shortName} | Preview`,
    description:
      "Mobile wood-fired pizza for private events and catering. Dayton / South Brunswick, NJ. Preview by MJL Collective.",
    type: "website",
    url: site.previewUrl,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Bella Ciao Pizza preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.shortName} | Preview`,
    description:
      "Mobile wood-fired pizza for private events and catering. Dayton / South Brunswick, NJ. Preview by MJL Collective.",
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
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-paper font-body pb-[4.5rem] text-ink md:pb-0">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
