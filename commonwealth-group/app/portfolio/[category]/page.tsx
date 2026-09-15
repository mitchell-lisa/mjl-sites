import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PropertyCard } from "@/components/PropertyCard";
import { categories, getCategory } from "@/lib/categories";
import { getPropertiesByCategory } from "@/lib/properties";
import { site } from "@/lib/site";

type PageProps = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategory(slug);
  return {
    title: category ? category.label : "Portfolio",
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category: slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const list = getPropertiesByCategory(category.slug);

  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy text-ivory">
        <Image
          src={category.image}
          alt={category.imageAlt}
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy/80 to-navy/55" />
        <div className="site-grid relative py-20 md:py-28">
          <p className="eyebrow text-bronze-bright">
            <Link href="/portfolio" className="hover:text-ivory">
              Portfolio
            </Link>{" "}
            / {category.label}
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl md:text-6xl">
            {category.label}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone/88">
            {category.summary}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="site-grid">
          <div className="mb-8 flex flex-wrap gap-2">
            {categories.map((item) => (
              <Link
                key={item.slug}
                href={`/portfolio/${item.slug}`}
                className={`border px-3 py-2 text-[0.7rem] font-semibold tracking-[0.14em] uppercase ${
                  item.slug === category.slug
                    ? "border-navy bg-navy text-ivory"
                    : "border-navy/10 text-navy hover:border-bronze"
                }`}
              >
                {item.shortLabel}
              </Link>
            ))}
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {list.map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-14 text-ivory">
        <div className="site-grid flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h2 className="font-serif text-3xl">Discuss this asset class.</h2>
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
