import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPropertyMedia } from "@/lib/media";
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

  return (
    <>
      <section className="bg-white">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone md:aspect-[21/9] md:max-h-[480px]">
          <Image
            src="/images/portfolio/darley-green/hero.jpg"
            alt="Darley Green, associated with Montchanin Builders"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="site-grid py-10 md:py-12">
          <h1 className="font-serif text-4xl text-navy md:text-5xl">
            Montchanin Builders
          </h1>
        </div>
      </section>

      <section className="bg-white py-14 md:py-16">
        <div className="site-grid max-w-3xl">
          <p className="text-[1.08rem] leading-8 text-ink">
            In 2010, members of The Commonwealth Group partnered with industry
            veteran Anthony Ruggio to form Montchanin Builders in order to
            execute on the various residential opportunities within The
            Commonwealth portfolio.
          </p>
          <p className="mt-5 leading-8 text-ink">
            Residential projects in the portfolio are described at{" "}
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

      <section className="border-t border-navy/10 pb-20 pt-4">
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
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone">
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
    </>
  );
}
