import Image from "next/image";
import Link from "next/link";
import { cropClass } from "@/lib/crops";
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

export function PropertyCard({ property }: PropertyCardProps) {
  const media = getPropertyMedia(property.slug);

  return (
    <article>
      {media ? (
        <Link
          href={propertyHref(property)}
          className="relative block aspect-[16/10] overflow-hidden bg-stone photo-frame photo-zoom"
        >
          <Image
            src={media.hero}
            alt={property.name}
            fill
            className={`object-cover ${cropClass(media.hero)}`}
            sizes="(min-width: 1280px) 360px, (min-width: 768px) 45vw, 100vw"
          />
        </Link>
      ) : null}
      <div className="pt-4">
        <p className="eyebrow">
          {getCategoryLabel(property.category)}
          {property.location ? ` · ${property.location.split(",")[0]}` : ""}
        </p>
        <h3 className="mt-2 font-serif text-[1.35rem] leading-tight text-navy">
          <Link href={propertyHref(property)} className="hover:text-maroon">
            {property.name}
          </Link>
        </h3>
      </div>
    </article>
  );
}
