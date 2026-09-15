import Link from "next/link";
import { Wordmark } from "@/components/Wordmark";
import { categories } from "@/lib/categories";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-ivory">
      <div className="site-grid grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <Wordmark plate />
          <p className="mt-6 max-w-sm text-[0.95rem] leading-7 text-stone/85">
            A fully integrated real estate company. Development, leasing, and
            management in the Mid-Atlantic since {site.founded}.
          </p>
          <p className="mt-6 text-sm leading-7 text-stone/75">
            {site.address.line1}
            <br />
            {site.address.line2}
            <br />
            <a className="text-maroon-soft hover:underline" href={site.phoneHref}>
              {site.phoneDisplay}
            </a>
            <br />
            <a
              className="text-maroon-soft hover:underline"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-maroon-soft">Explore</p>
          <ul className="mt-4 space-y-3 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-maroon-soft" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow text-maroon-soft">Asset types</p>
          <ul className="mt-4 space-y-3 text-sm">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link
                  className="hover:text-maroon-soft"
                  href={`/portfolio/${category.slug}`}
                >
                  {category.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="site-grid flex flex-col gap-3 py-5 text-[0.72rem] leading-relaxed text-stone/60 md:flex-row md:items-center md:justify-between">
          <p>
            Sample redesign only. Not affiliated with {site.name}. Source facts
            drawn from{" "}
            <a className="underline hover:text-ivory" href={site.liveSite}>
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
