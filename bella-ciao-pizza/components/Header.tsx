import Link from "next/link";
import { LogoMark } from "@/components/LogoMark";
import { nav, site } from "@/lib/site";

export function Header() {
  return (
    <header className="bg-ink text-paper">
      <div className="mx-auto flex max-w-page flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Link href="/" className="flex min-h-[44px] items-center gap-3">
          <LogoMark
            priority
            alt="Bella Ciao Pizza Trinacria mark"
            className="h-16 w-auto sm:h-20"
          />
          <span className="leading-tight">
            <span className="block font-display text-xl text-gold sm:text-2xl">
              {site.shortName}
            </span>
            <span className="block text-sm text-paper/75">
              {site.tagline} · {site.city}
            </span>
          </span>
        </Link>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <nav className="hidden items-center gap-5 font-medium text-paper/80 md:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-gold">
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={site.phoneHref}
            className="inline-flex min-h-[44px] items-center font-semibold text-gold underline decoration-gold/40 underline-offset-4"
          >
            {site.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}
