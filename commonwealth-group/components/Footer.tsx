import Link from "next/link";
import { Wordmark } from "@/components/Wordmark";
import { categories } from "@/lib/categories";
import { footerNav, serviceNav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-grid grid gap-12 py-14 md:grid-cols-12 md:py-16">
        <div className="md:col-span-4">
          <Wordmark />
          <p className="mt-6 max-w-sm text-[0.95rem] leading-7 text-muted">
            A fully integrated and diversified real estate company. Development,
            leasing, and management in the Mid-Atlantic since {site.founded}.
          </p>
          <p className="mt-6 text-sm leading-7 text-muted">
            {site.address.line1}
            <br />
            {site.address.line2}
            <br />
            <a className="text-maroon hover:underline" href={site.phoneHref}>
              {site.phoneDisplay}
            </a>
            <br />
            <a
              className="text-maroon hover:underline"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow">The firm</p>
          <ul className="mt-4 space-y-3 text-sm">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-maroon" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="eyebrow">Services</p>
          <ul className="mt-4 space-y-3 text-sm">
            {serviceNav.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-maroon" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow">Portfolio</p>
          <ul className="mt-4 space-y-3 text-sm">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  className="hover:text-maroon"
                  href={`/portfolio/${category.slug}`}
                >
                  {category.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-[#e6e6e6]">
        <div className="site-grid flex flex-col gap-3 py-5 text-[0.72rem] leading-relaxed text-muted md:flex-row md:items-center md:justify-between">
          <p>
            Sample redesign only. Not affiliated with {site.name}. Source facts
            drawn from{" "}
            <a className="underline hover:text-navy" href={site.liveSite}>
              commonwealthltd.net
            </a>
            .
          </p>
          <p>Preview. Noindex. For discussion with Kyle Holmbeck.</p>
        </div>
      </div>
    </footer>
  );
}
