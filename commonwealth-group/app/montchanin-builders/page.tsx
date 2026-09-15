import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContactCta } from "@/components/ContactCta";
import { PageIntro } from "@/components/PageIntro";
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
  const homesiteMedia = getPropertyMedia("montchanin-builders-homesites");

  return (
    <>
      <PageIntro eyebrow="Residential construction" title="Montchanin Builders">
        <p>
          In 2010, members of The Commonwealth Group partnered with industry
          veteran Anthony Ruggio to form Montchanin Builders in order to
          execute on the various residential opportunities within The
          Commonwealth portfolio.
        </p>
      </PageIntro>

      <section className="py-16 md:py-20">
        <div className="site-grid grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-5 text-[1.05rem] leading-8 text-ink">
            <p>
              To learn more about the various residential projects within the
              portfolio please visit{" "}
              <a
                className="text-maroon hover:underline"
                href={site.montchaninSite}
                rel="noreferrer"
                target="_blank"
              >
                montchaninbuilders.net
              </a>
              .
            </p>
            <p>
              Move-in ready homes are listed on the Montchanin Builders site.
              Available homesites are also published in the Commonwealth
              residential portfolio.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={site.montchaninMoveIn}
                className="btn btn-maroon"
                rel="noreferrer"
                target="_blank"
              >
                Move-in ready homes
              </a>
              {homesites ? (
                <Link href={propertyHref(homesites)} className="btn btn-outline">
                  Available homesites
                </Link>
              ) : null}
              <Link href="/portfolio/residential" className="btn btn-outline">
                Residential portfolio
              </Link>
            </div>
          </div>
          <aside className="lg:col-span-5">
            {homesiteMedia ? (
              <div className="relative aspect-[4/3] overflow-hidden border border-navy/10 bg-stone">
                <Image
                  src={homesiteMedia.hero}
                  alt="Montchanin Builders available homesites"
                  fill
                  className="object-cover"
                />
              </div>
            ) : null}
          </aside>
        </div>
      </section>

      <section className="border-t border-navy/10 bg-paper py-16 md:py-20">
        <div className="site-grid">
          <p className="eyebrow">From the residential portfolio</p>
          <h2 className="mt-2 max-w-2xl font-serif text-2xl text-navy md:text-3xl">
            Homesites and communities
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-muted">
            Photographs from Darley Green, The Town of Whitehall, and Montchanin
            Builders available homesites, as published on commonwealthltd.net.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {communities.map((property) => {
              const media = getPropertyMedia(property.slug);
              if (!media) return null;
              const photos = [media.hero, ...media.gallery].slice(0, 4);
              return (
                <article key={property.slug} className="border border-navy/10 bg-ivory">
                  <Link href={propertyHref(property)} className="block">
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone">
                      <Image
                        src={media.hero}
                        alt={property.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-serif text-xl text-navy">{property.name}</h3>
                      <p className="mt-2 text-sm leading-6 text-muted">
                        {property.summary}
                      </p>
                    </div>
                  </Link>
                  {photos.length > 1 ? (
                    <div className="grid grid-cols-3 gap-px border-t border-navy/10 bg-navy/10">
                      {photos.slice(1).map((src) => (
                        <div key={src} className="relative aspect-square bg-stone">
                          <Image src={src} alt="" fill className="object-cover" />
                        </div>
                      ))}
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCta title="Ask about homesites and move-in ready homes" />
    </>
  );
}
