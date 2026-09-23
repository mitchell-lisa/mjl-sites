import Image from 'next/image';
import Link from 'next/link';
import site from '@/site.config';

const nav = [
  { label: 'Auto', href: '/auto-insurance' },
  { label: 'Home', href: '/home-insurance' },
  { label: 'Business', href: '/business-insurance' },
  { label: 'Quote', href: '/quote' },
  { label: 'About', href: '/about' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/contact' }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white border-b border-rail">
      {/* utility row, the way an agency site puts the portal above the masthead */}
      <div className="hidden sm:block bg-band border-b border-rail">
        <div className="mx-auto max-w-measure px-5 py-1.5 flex justify-end gap-x-6 text-[12px] text-mute">
          <a href={site.clientCenterUrl} className="hover:text-ink" rel="noopener">
            Client Center
          </a>
          <Link href="/contact" className="hover:text-ink">
            Contact
          </Link>
          {site.social.map((so) => (
            <a key={so.url} href={so.url} className="hover:text-ink" rel="noopener">
              {so.label}
            </a>
          ))}
          <a href={site.office.phoneHref} className="hover:text-ink">
            {site.office.phone}
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-measure px-5 py-2.5 flex items-center gap-3">
        <Link href="/" className="flex items-center gap-2.5 mr-auto min-w-0">
          <Image
            src="/logo.png"
            alt={`${site.office.legalName} monogram`}
            width={781}
            height={391}
            priority
            className="h-7 w-auto sm:h-9"
          />
          <span className="font-display text-[14px] sm:text-[16px] leading-tight font-semibold text-ink truncate">
            George Gravenstine
            <span className="hidden sm:block text-[11px] font-body font-normal text-mute">
              Agency, LLC. Moorestown, NJ
            </span>
          </span>
        </Link>

        <a
          href={site.office.phoneHref}
          className="shrink-0 bg-blue text-white text-[13px] font-medium px-3 py-2 hover:bg-bluedeep"
        >
          <span className="sm:hidden">Call</span>
          <span className="hidden sm:inline">Call {site.office.phone}</span>
        </a>

        <details className="sm:hidden relative shrink-0">
          <summary className="list-none cursor-pointer select-none border border-rail px-3 py-2 text-[13px] text-ink">
            Menu
          </summary>
          <nav
            aria-label="Main"
            className="absolute right-0 top-full mt-2 w-48 bg-white border border-rail py-2"
          >
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="block px-4 py-2 text-[15px] text-ink hover:bg-band"
              >
                {n.label}
              </Link>
            ))}
            <a
              href={site.clientCenterUrl}
              rel="noopener"
              className="block px-4 py-2 text-[15px] text-blue border-t border-rail mt-1 pt-3"
            >
              Client Center
            </a>
            {site.social.map((so) => (
              <a
                key={so.url}
                href={so.url}
                rel="noopener"
                className="block px-4 py-2 text-[15px] text-blue"
              >
                {so.label}
              </a>
            ))}
          </nav>
        </details>
      </div>

      <nav aria-label="Main" className="hidden sm:block border-t border-rail/70">
        <div className="mx-auto max-w-measure px-5 py-2 text-[13px] text-mute flex flex-wrap gap-x-6 gap-y-1">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="hover:text-ink">
              {n.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
