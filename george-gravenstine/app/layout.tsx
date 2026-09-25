import type { Metadata } from 'next';
import { Vollkorn, Fira_Sans } from 'next/font/google';
import './globals.css';
import site, { siteOrigin } from '@/site.config';
import Header from './components/Header';
import Footer from './components/Footer';

const display = Vollkorn({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
  display: 'swap'
});

const body = Fira_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-body',
  display: 'swap'
});

const description =
  'George Gravenstine Agency, LLC. An independent insurance agency at 119 N Church Street in Moorestown, quoting auto, home and commercial insurance across several companies at once.';

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: {
    default: `${site.office.legalName}. Independent auto, home and business insurance in Moorestown, NJ.`,
    template: `%s. ${site.office.legalName}`
  },
  description,
  alternates: { canonical: siteOrigin },
  openGraph: {
    title: site.office.legalName,
    description,
    url: siteOrigin,
    siteName: site.office.legalName,
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: site.office.legalName }]
  },
  twitter: {
    card: 'summary_large_image',
    title: site.office.legalName,
    description,
    images: ['/og.png']
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' }
    ],
    apple: '/apple-icon.png'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'InsuranceAgency',
  name: site.office.legalName,
  url: `https://${site.domain}`,
  telephone: site.office.phone,
  email: site.office.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.office.street,
    addressLocality: site.office.town,
    addressRegion: site.office.state,
    postalCode: site.office.zip,
    addressCountry: 'US'
  },
  geo: { '@type': 'GeoCoordinates', latitude: 39.9633508, longitude: -74.950175 },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00'
    }
  ],
  areaServed: [
    { '@type': 'State', name: 'New Jersey' },
    { '@type': 'State', name: 'Pennsylvania' }
  ],
  sameAs: site.social.map((s) => s.url)
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body antialiased">
        <Header />
        <main id="top">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
