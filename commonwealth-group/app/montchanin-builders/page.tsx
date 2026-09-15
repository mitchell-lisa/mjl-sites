import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getGallery, getPropertyMedia } from "@/lib/media";
import { getProperty, properties, propertyHref } from "@/lib/properties";
import { montchaninCommunitySlugs } from "@/lib/services";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Montchanin Builders",
};

export default function MontchaninBuildersPage() {
  const communities = montchaninCommunitySlugs
    .map((slug) => properties.find((property) => property.slug === slug))
    .filter((property): property is NonNullable<typeof property> => Boolean(property));
  const homesites = getProperty("residential", "montchanin-builders-homesites");
  const communityPhotos = communities.flatMap((property) =>
    getGallery(property.slug).slice(0, 4).map((src) => ({
      src,
      name: property.name,
      href: propertyHref(property),
    })),
  );

  return (
    <>
      <section className="bg-ivory">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone md:aspect-[21/9] md:max-h-[500px]">
          <Image
            src="/images/portfolio/darley-green/hero.jpg"
            alt="Darley Green, associated with Montchanin Builders"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="site-grid grid gap-10 border-l-4 border-maroon py-12 md:grid-cols-12">
          <div className="pl-6 md:col-span-7 md:pl-8">
            <h1 className="font-serif text-4xl text-navy md:text-5xl">
              Montchanin Builders
            </h1>
          </div>
          <div className="pl-6 md:col-span-5 md:pl-0">
            <p className="text-[1.05rem] leading-8 text-ink">
              In 2010, members of The Commonwealth Group partnered with industry
              veteran Anthony Ruggio to form Montchanin Builders in order to
              execute on the various residential opportunities within The
              Commonwealth portfolio.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="site-grid max-w-3xl">
          <p className="leading-8 text-ink">
            To learn more about the various residential projects within the
            portfolio, visit{" "}
            <a
              className="text-maroon hover:underline"
              href={site.montchaninSite}
              rel="noreferrer"
              target="_blank"
            >
              montchaninbuilders.net
            </a>
            . Move-in ready homes are listed separately.
          </p>
          <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            <a
              href={site.montchaninMoveIn}
              className="text-maroon hover:underline"
              rel="noreferrer"
              target="_blank"
            >
              Move-in ready
            </a>
            {homesites ? (
              <Link href={propertyHref(homesites)} className="hover:text-maroon">
                Available homesites
              </Link>
            ) : null}
            <Link href="/portfolio/residential" className="hover:text-maroon">
              Residential portfolio
            </Link>
          </p>
        </div>
      </section>

      <section className="border-t border-navy/10 bg-ivory py-14">
        <div className="site-grid">
          <h2 className="font-serif text-2xl text-navy">
            Homesites and communities
          </h2>
          <p className="mt-3 max-w-2xl leading-7 text-muted">
            Photographs from Darley Green, The Town of Whitehall, and Montchanin
            Builders available homesites, as published on commonwealthltd.net.
          </p>
          <div className="mt-10 grid gap-10 md:grid-cols-3">
            {communities.map((property) => {
              const media = getPropertyMedia(property.slug);
              if (!media) return null;
              return (
                <article key={property.slug}>
                  <Link href={propertyHref(property)}>
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone photo-frame">
                      <Image
                        src={media.hero}
                        alt={property.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="mt-4 font-serif text-2xl text-navy">
                      {property.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {property.summary}
                    </p>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:pb-20">
        <div className="site-grid">
          <h2 className="font-serif text-2xl text-navy">From the listings</h2>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {communityPhotos.map((photo) => (
              <Link
                key={photo.src}
                href={photo.href}
                className="relative aspect-[4/3] overflow-hidden bg-stone photo-frame"
              >
                <Image
                  src={photo.src}
                  alt={photo.name}
                  fill
                  className="object-cover"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
