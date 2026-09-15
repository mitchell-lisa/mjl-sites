import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
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
        <div className="site-grid py-12 md:py-16">
          <PageHeader title="Portfolio">
            <p className="mt-5 max-w-2xl leading-7 text-muted">
              Office, industrial, multifamily, residential, family business, and
              natural resources, as published on commonwealthltd.net.
            </p>
          </PageHeader>
        </div>
      </section>

      <section
        className="portfolio-filter"
        style={{
          backgroundColor: "rgba(255, 253, 249, 0.52)",
          backdropFilter: "blur(22px)",
          WebkitBackdropFilter: "blur(22px)",
        }}
      >
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
            className="portfolio-section border-b border-navy/8 py-16 md:py-20"
          >
            <div className="site-grid">
              <div className="grid gap-8 md:grid-cols-12 md:items-end">
                <div className="md:col-span-7">
                  <h2 className="font-serif text-4xl text-navy">
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
