import Link from "next/link";
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
  return (
    <article
      className={`card-lift flex h-full flex-col border border-navy/10 bg-paper ${
        featured ? "p-7 md:p-8" : "p-6"
      }`}
    >
      <p className="eyebrow">
        {getCategoryLabel(property.category)}
        {property.location ? ` · ${property.location.split(",")[0]}` : ""}
      </p>
      <h3
        className={`mt-3 font-serif leading-tight text-navy ${
          featured ? "text-3xl" : "text-2xl"
        }`}
      >
        <Link href={propertyHref(property)} className="hover:text-bronze-deep">
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
              <dt className="text-[0.68rem] tracking-[0.14em] uppercase text-bronze-deep">
                {spec.label}
              </dt>
              <dd className="mt-1 text-navy">{spec.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
      <Link
        href={propertyHref(property)}
        className="mt-6 inline-flex items-center gap-2 text-[0.72rem] font-semibold tracking-[0.16em] uppercase text-navy hover:text-bronze-deep"
      >
        View property
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
