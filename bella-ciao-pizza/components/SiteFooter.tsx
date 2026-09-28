import Link from "next/link";
import { LogoMark } from "@/components/LogoMark";
import { ServiceArea } from "@/components/ServiceArea";
import { isPreview, lines, previewCopy, site } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="on-dark bg-ink text-cream">
      <div className="mx-auto grid max-w-page gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[auto_1fr_auto] lg:items-end">
        <LogoMark alt="Bella Ciao Pizza" className="h-24 w-auto" />
        <div>
          <p className="font-display text-3xl font-medium text-gold sm:text-4xl">{lines.footerMark}</p>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold uppercase tracking-[0.14em]">
            <li>
              <Link href="/book" className="hover:text-gold">
                Book
              </Link>
            </li>
            <li>
              <a href={site.phoneHref} className="hover:text-gold">
                Call
              </a>
            </li>
            <li>
              <a href={site.emailHref} className="hover:text-gold">
                Email
              </a>
            </li>
            <li>
              <a href={site.instagramUrl} className="hover:text-gold" rel="noopener noreferrer" target="_blank">
                Instagram
              </a>
            </li>
            <li>
              <Link href="/events" className="hover:text-gold">
                Events
              </Link>
            </li>
          </ul>
          <div className="mt-4 text-sm text-[#e7e0d6]">
            <ServiceArea variant="footer" />
            <p className="mt-1">
              <a href={site.phoneHref} className="hover:text-gold">
                {site.phoneDisplay}
              </a>
              <span aria-hidden> · </span>
              <a href={site.emailHref} className="hover:text-gold">
                {site.email}
              </a>
            </p>
          </div>
        </div>
        <p className="font-display text-2xl italic text-gold">{lines.closing}</p>
      </div>
      {isPreview ? (
        <p className="border-t border-cream/10 px-5 py-4 text-center text-xs leading-relaxed text-[#ddd4c6] sm:px-8">
          {previewCopy.footerCredit}
        </p>
      ) : (
        <p className="border-t border-cream/10 px-5 py-4 text-center text-xs text-[#ddd4c6]">
          {site.name}
        </p>
      )}
    </footer>
  );
}
