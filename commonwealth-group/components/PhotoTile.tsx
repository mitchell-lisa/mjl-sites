import Image from "next/image";
import Link from "next/link";
import { getPropertyMedia } from "@/lib/media";
import {
  getCategoryLabel,
  propertyHref,
  type Property,
} from "@/lib/properties";

type PhotoTileProps = {
  property: Property;
};

export function PhotoTile({ property }: PhotoTileProps) {
  const media = getPropertyMedia(property.slug);
  if (!media) return null;

  return (
    <Link href={propertyHref(property)} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden bg-stone photo-frame photo-zoom">
        <Image
          src={media.hero}
          alt={property.name}
          fill
          className="object-cover"
          sizes="(min-width: 1280px) 280px, (min-width: 768px) 33vw, 100vw"
        />
      </div>
      <p className="mt-3 eyebrow">
        {getCategoryLabel(property.category)}
        {property.location ? ` · ${property.location.split(",")[0]}` : ""}
      </p>
      <h3 className="mt-1 font-serif text-[1.15rem] leading-snug text-navy group-hover:text-maroon">
        {property.name}
      </h3>
    </Link>
  );
}
