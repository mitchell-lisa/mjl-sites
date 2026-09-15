import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PropertyCard } from "@/components/PropertyCard";
import { categories } from "@/lib/categories";
import { getPropertiesByCategory } from "@/lib/properties";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy text-ivory">
        <Image
          src="/images/architecture.jpg"
          alt="Atmospheric photograph of a commercial skyline"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-navy/70" />
        <div className="site-grid relative py-20 md:py-28">
          <p className="eyebrow text-bronze-bright">Development portfolio</p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl md:text-6xl">
            Properties by asset type.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone/88">
            Every name below appears on the current Commonwealth site. Where a
            live listing page published size, tenants, or a description, that
            detail is carried forward. Where a page is missing or thin, the
            property is listed without invented figures.
          </p>
        </div>
      </section>

      <section className="sticky top-[73px] z-20 border-b border-navy/10 bg-ivory/95 backdrop-blur">
        <div className="site-grid flex gap-2 overflow-x-auto py-3">
          {categories.map((category) => (
            <a
              key={category.slug}
              href={`#${category.slug}`}
              className="shrink-0 border border-navy/10 px-3 py-2 text-[0.7rem] font-semibold tracking-[0.14em] uppercase text-navy hover:border-bronze hover:text-bronze-deep"
            >
              {category.shortLabel}
            </a>
          ))}
        </div>
      </section>

      {categories.map((category) => {
        const list = getPropertiesByCategory(category.slug);
        return (
          <section
            key={category.slug}
            id={category.slug}
            className="scroll-mt-36 border-b border-navy/8 py-16 md:py-20"
          >
            <div className="site-grid">
              <div className="grid gap-8 md:grid-cols-12 md:items-end">
                <div className="md:col-span-7">
                  <p className="eyebrow">{String(list.length).padStart(2, "0")} properties</p>
                  <h2 className="mt-3 font-serif text-4xl text-navy">
                    {category.label}
                  </h2>
                  <p className="mt-4 max-w-2xl leading-7 text-muted">
                    {category.summary}
                  </p>
                </div>
                <div className="md:col-span-5 md:text-right">
                  <Link
                    href={`/portfolio/${category.slug}`}
                    className="btn btn-outline"
                  >
                    Open {category.shortLabel.toLowerCase()}
                  </Link>
                </div>
              </div>
              <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {list.map((property) => (
                  <PropertyCard key={property.slug} property={property} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-navy py-16 text-ivory">
        <div className="site-grid flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-bronze-bright">Leasing and management</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">
              Ask about availability or a project.
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn btn-bronze">
              Request information
            </Link>
            <a href={site.phoneHref} className="btn btn-ghost">
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
