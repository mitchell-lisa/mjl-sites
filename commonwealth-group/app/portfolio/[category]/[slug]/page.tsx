import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPropertyMedia } from "@/lib/media";
import {
  getCategoryLabel,
  getProperty,
  properties,
} from "@/lib/properties";
import { site } from "@/lib/site";

type PageProps = {
  params: Promise<{ category: string; slug: string }>;
};

export function generateStaticParams() {
  return properties.map((property) => ({
    category: property.category,
    slug: property.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const property = getProperty(category, slug);
  return {
    title: property?.name ?? "Property",
  };
}

export default async function PropertyPage({ params }: PageProps) {
  const { category, slug } = await params;
  const property = getProperty(category, slug);
  if (!property) notFound();

  const media = getPropertyMedia(property.slug);

  return (
    <>
      <section className="bg-navy text-ivory">
        <div className="site-grid py-16 md:py-24">
          <p className="eyebrow text-maroon-soft">
            <Link href="/portfolio" className="hover:text-ivory">
              Portfolio
            </Link>
            {" / "}
            <Link
              href={`/portfolio/${property.category}`}
              className="hover:text-ivory"
            >
              {getCategoryLabel(property.category)}
            </Link>
          </p>
          <h1 className="mt-4 max-w-4xl font-serif text-4xl md:text-6xl">
            {property.name}
          </h1>
          {property.location ? (
            <p className="mt-5 text-lg text-stone/85">{property.location}</p>
          ) : null}
          <p className="mt-5 max-w-2xl text-lg leading-8 text-stone/80">
            {property.summary}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn btn-maroon">
              Inquire about this property
            </Link>
            <a href={site.phoneHref} className="btn btn-ghost">
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {property.specs?.length ? (
        <section className="border-b border-navy/8 bg-paper">
          <div className="site-grid grid grid-cols-2 gap-6 py-10 md:grid-cols-5">
            {property.specs.map((spec) => (
              <div key={spec.label}>
                <p className="eyebrow">{spec.label}</p>
                <p className="mt-2 font-serif text-2xl text-navy">{spec.value}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="py-16 md:py-20">
        <div className="site-grid grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {media ? (
              <div className="mb-10 grid gap-3">
                <div className="relative aspect-[16/10] overflow-hidden bg-stone">
                  <Image
                    src={media.hero}
                    alt={property.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {media.gallery.length ? (
                  <div className="grid grid-cols-2 gap-3">
                    {media.gallery.map((src) => (
                      <div
                        key={src}
                        className="relative aspect-[4/3] overflow-hidden bg-stone"
                      >
                        <Image
                          src={src}
                          alt=""
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                ) : null}
                <p className="text-[0.72rem] leading-5 text-muted">
                  Photographs published on{" "}
                  <a className="underline hover:text-navy" href={media.page}>
                    the live listing
                  </a>
                  .
                </p>
              </div>
            ) : null}
            {(property.description ?? []).map((paragraph) => (
              <p key={paragraph} className="mb-5 text-[1.05rem] leading-8 text-ink">
                {paragraph}
              </p>
            ))}
            {!property.description ? (
              <p className="text-[1.05rem] leading-8 text-ink">
                This property appears on the live Commonwealth portfolio. A
                dedicated listing page was missing or incomplete on the current
                WordPress site, so this sample does not invent additional
                specifications.
              </p>
            ) : null}
            {(property.notes ?? []).map((note) => (
              <p key={note} className="mt-4 text-sm leading-7 text-muted">
                {note}
              </p>
            ))}
          </div>
          <aside className="lg:col-span-5">
            <div className="border border-navy/10 bg-paper p-7">
              <p className="eyebrow">Leasing and management</p>
              <h2 className="mt-3 font-serif text-3xl text-navy">
                Speak with the team
              </h2>
              <p className="mt-4 leading-7 text-muted">
                Kevin M. Quinn is listed as Director of Leasing and Management.
                General inquiries published on the current site go to{" "}
                {site.email}.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Link href="/contact" className="btn btn-navy">
                  Request information
                </Link>
                <a href={`mailto:${site.email}`} className="btn btn-outline">
                  Email {site.email}
                </a>
              </div>
              <p className="mt-6 text-sm leading-6 text-muted">
                Source page:{" "}
                <a
                  className="underline hover:text-navy"
                  href={`${site.liveSite}${property.sourcePath}`}
                >
                  {property.sourcePath}
                </a>
              </p>
            </div>

            {property.amenities?.length ? (
              <div className="mt-5 border border-navy/10 bg-ivory p-7">
                <p className="eyebrow">Amenities published on the live site</p>
                <ul className="mt-4 space-y-3 text-[0.98rem] leading-7 text-ink">
                  {property.amenities.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-maroon" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {property.tenants?.length ? (
              <div className="mt-5 border border-navy/10 bg-ivory p-7">
                <p className="eyebrow">Tenants listed on the live site</p>
                <ul className="mt-4 space-y-2 text-[0.98rem] text-ink">
                  {property.tenants.map((tenant) => (
                    <li key={tenant}>{tenant}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>
        </div>
      </section>
    </>
  );
}
