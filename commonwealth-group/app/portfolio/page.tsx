import type { Metadata } from "next";
import Link from "next/link";
import { PropertyCard } from "@/components/PropertyCard";
import { categories } from "@/lib/categories";
import { getPropertiesByCategory } from "@/lib/properties";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-ivory">
        <div className="site-grid border-l-4 border-maroon py-12 md:py-16">
          <div className="pl-6 md:pl-8">
            <h1 className="max-w-3xl font-serif text-4xl text-navy md:text-5xl">
              Portfolio
            </h1>
            <p className="mt-4 max-w-2xl leading-7 text-muted">
              Office, industrial, multifamily, residential, family business, and
              natural resources, as published on commonwealthltd.net.
            </p>
          </div>
        </div>
      </section>

      <section className="sticky top-16 z-20 border-y border-navy/10 bg-white md:top-[4.25rem]">
        <div className="site-grid flex gap-2 overflow-x-auto py-3">
          {categories.map((category) => (
            <a
              key={category.slug}
              href={`#${category.slug}`}
              className="shrink-0 border border-navy/10 px-3 py-2 text-[0.7rem] font-semibold tracking-[0.14em] uppercase text-navy hover:border-maroon hover:text-maroon"
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
    </>
  );
}
