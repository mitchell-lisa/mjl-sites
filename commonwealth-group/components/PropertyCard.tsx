import Image from "next/image";
import Link from "next/link";
import { getPropertyMedia } from "@/lib/media";
import {
  getCategoryLabel,
  propertyHref,
  type Property,
} from "@/lib/properties";

type PropertyCardProps = {
  property: Property;
  featured?: boolean;
};

export function PropertyCard({
  property,
  featured = false,
}: PropertyCardProps) {
  const media = getPropertyMedia(property.slug);

  return (
    <article
      className={`card-lift flex h-full flex-col overflow-hidden border border-navy/10 bg-paper ${
        featured ? "" : ""
      }`}
    >
      {media ? (
        <Link
          href={propertyHref(property)}
          className="relative block aspect-[16/10] overflow-hidden bg-stone"
        >
          <Image
            src={media.hero}
            alt={property.name}
            fill
            className="object-cover"
            sizes="(min-width: 1280px) 360px, (min-width: 768px) 45vw, 100vw"
          />
        </Link>
      ) : null}
      <div className={featured ? "flex flex-1 flex-col p-7 md:p-8" : "flex flex-1 flex-col p-6"}>
        <p className="eyebrow">
          {getCategoryLabel(property.category)}
          {property.location ? ` · ${property.location.split(",")[0]}` : ""}
        </p>
        <h3
          className={`mt-3 font-serif leading-tight text-navy ${
            featured ? "text-3xl" : "text-2xl"
          }`}
        >
          <Link href={propertyHref(property)} className="hover:text-maroon">
            {property.name}
          </Link>
        </h3>
        <p className="mt-4 flex-1 text-[0.98rem] leading-7 text-muted">
          {property.summary}
        </p>
        {property.specs?.length ? (
          <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
            {property.specs.slice(0, 4).map((spec) => (
              <div key={spec.label}>
                <dt className="text-[0.7rem] uppercase text-maroon">
                  {spec.label}
                </dt>
                <dd className="mt-1 text-navy">{spec.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
        <Link
          href={propertyHref(property)}
          className="mt-6 inline-flex items-center gap-2 text-sm text-maroon hover:underline"
        >
          View property
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
