import type { Metadata } from "next";
import Image from "next/image";
import { MontchaninLogo } from "@/components/MontchaninLogo";
import { cropClass } from "@/lib/crops";
import {
  montchanin,
  montchaninCommunities,
  montchaninGallery,
} from "@/lib/montchanin";

export const metadata: Metadata = {
  title: "Montchanin Builders",
};

export default function MontchaninBuildersPage() {
  return (
    <div className="bg-white text-mont-ink">
      <section className="relative isolate min-h-[56vh] overflow-hidden bg-[#e7e7e4] md:min-h-[64vh]">
        <Image
          src="/images/montchanin/kennett-drone.jpg"
          alt="Kennett Pointe community, from montchaninbuilders.net"
          fill
          priority
          className={`object-cover ${cropClass("/images/montchanin/kennett-drone.jpg")}`}
        />
        <div className="absolute inset-x-0 bottom-0">
          <div className="site-grid pb-7 md:pb-10">
            <div className="max-w-md bg-white px-6 py-6 md:px-8 md:py-7">
              <MontchaninLogo />
              <p className="mt-5 text-[0.95rem] leading-7 text-mont-ink">
                {montchanin.tagline}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="site-grid grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-[1.05rem] leading-8">{montchanin.partnership}</p>
            <p className="mt-5 leading-8">
              Communities, homesites, and move-in ready homes are published on{" "}
              <a
                className="mont-link"
                href={montchanin.site}
                rel="noreferrer"
                target="_blank"
              >
                montchaninbuilders.net
              </a>
              .
            </p>
          </div>
          <div className="md:col-span-5">
            <p className="text-[0.72rem] tracking-[0.16em] uppercase text-mont-green-deep">
              Montchanin sales
            </p>
            <p className="mt-3 font-serif text-3xl text-mont-ink">
              <a className="hover:text-mont-green-deep" href={montchanin.phoneHref}>
                {montchanin.phoneDisplay}
              </a>
            </p>
            <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              <a
                className="mont-link"
                href={montchanin.moveInReady}
                rel="noreferrer"
                target="_blank"
              >
                Move-in ready
              </a>
              <a
                className="mont-link"
                href={`${montchanin.site}/communities/`}
                rel="noreferrer"
                target="_blank"
              >
                Our communities
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[#e6e6e6] bg-[#fcfcfc] py-14">
        <div className="site-grid">
          <h2 className="font-serif text-3xl text-mont-ink">Communities</h2>
          <p className="mt-3 max-w-2xl leading-7 text-[#5c5c5c]">
            Names, status, and photographs are taken from montchaninbuilders.net.
          </p>
          <div className="mt-10 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {montchaninCommunities.map((community) => (
              <article key={community.name}>
                <a href={community.href} rel="noreferrer" target="_blank">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#e7e7e4] photo-frame">
                    <Image
                      src={community.image}
                      alt={community.name}
                      fill
                      className={`object-cover ${cropClass(community.image)}`}
                    />
                  </div>
                  <p className="mt-4 text-[0.68rem] tracking-[0.16em] uppercase text-mont-green-deep">
                    {community.status}
                    {community.location ? ` · ${community.location}` : ""}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl text-mont-ink">
                    {community.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#5c5c5c]">
                    {community.summary}
                  </p>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:pb-20">
        <div className="site-grid">
          <h2 className="font-serif text-3xl text-mont-ink">From their site</h2>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3">
            {montchaninGallery.map((photo) => (
              <div
                key={photo.src}
                className="relative aspect-[4/3] overflow-hidden bg-[#e7e7e4] photo-frame"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className={`object-cover ${cropClass(photo.src)}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
