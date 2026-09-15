import Image from "next/image";
import Link from "next/link";
import { cropClass } from "@/lib/crops";
import { HeroSlider } from "@/components/HeroSlider";
import { MontchaninLogo } from "@/components/MontchaninLogo";
import { PhotoTile } from "@/components/PhotoTile";
import { categories } from "@/lib/categories";
import { montchanin } from "@/lib/montchanin";
import { getHomeShowcase } from "@/lib/properties";
import { site } from "@/lib/site";
import { leaders } from "@/lib/team";

export default function HomePage() {
  const selected = getHomeShowcase();

  return (
    <>
      <HeroSlider>
        <div className="absolute inset-x-0 bottom-14 z-10 md:bottom-16">
          <div className="site-grid">
            <div
              className="hero-plate lockup-frame max-w-xl px-6 py-6 md:px-8 md:py-7"
              style={{
                backgroundColor: "#f6f3ee",
                backdropFilter: "none",
                WebkitBackdropFilter: "none",
              }}
            >
              <p className="eyebrow">Mid-Atlantic · since {site.founded}</p>
              <h1 className="mt-2 font-serif text-[2rem] leading-[1.1] text-navy md:text-[2.7rem]">
                A fully integrated and diversified real estate company
              </h1>
              <p className="mt-4 max-w-md text-[0.98rem] leading-7 text-ink">
                Development, leasing, and management since {site.founded}.
              </p>
              <p className="mt-5">
                <Link href="/portfolio" className="text-maroon hover:underline">
                  Development portfolio
                </Link>
              </p>
            </div>
          </div>
        </div>
      </HeroSlider>

      <section className="bg-white py-14 md:py-16">
        <div className="site-grid">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-serif text-[1.75rem] text-navy md:text-3xl">
              Portfolio
            </h2>
            <Link href="/portfolio" className="text-sm text-maroon hover:underline">
              All properties
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/portfolio/${category.slug}`}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-stone photo-frame photo-zoom">
                  <Image
                    src={category.image}
                    alt={category.imageAlt}
                    fill
                    className={`object-cover ${cropClass(category.image)}`}
                  />
                </div>
                <h3 className="mt-3 font-serif text-[1.25rem] text-navy group-hover:text-maroon">
                  {category.label}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-navy/10 bg-ivory py-14 md:py-16">
        <div className="site-grid">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-serif text-[1.75rem] text-navy md:text-3xl">
              Selected properties
            </h2>
            <Link href="/portfolio" className="text-sm text-maroon hover:underline">
              Full portfolio
            </Link>
          </div>
          <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {selected.map((property) => (
              <PhotoTile key={property.slug} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-navy/10 bg-white">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[340px] bg-[#e7e7e4] md:min-h-[480px]">
            <Image
              src="/images/montchanin/kennett-pointe.jpg"
              alt="The Townes at Kennett Pointe, from montchaninbuilders.net"
              fill
              className={`object-cover ${cropClass("/images/montchanin/kennett-pointe.jpg")}`}
            />
          </div>
          <div className="flex flex-col justify-center bg-white px-8 py-14 md:px-14">
            <MontchaninLogo />
            <p className="mt-6 max-w-md text-[1.02rem] leading-8 text-mont-ink">
              {montchanin.partnership}
            </p>
            <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.95rem]">
              <Link href="/montchanin-builders" className="mont-link">
                Communities
              </Link>
              <a
                href={montchanin.moveInReady}
                className="mont-link"
                rel="noreferrer"
                target="_blank"
              >
                Move-in ready
              </a>
              <a
                href={montchanin.site}
                className="mont-link"
                rel="noreferrer"
                target="_blank"
              >
                montchaninbuilders.net
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-14 md:py-16">
        <div className="site-grid">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-serif text-[1.75rem] text-navy md:text-3xl">
              Leadership
            </h2>
            <Link href="/leadership" className="text-sm text-maroon hover:underline">
              Biographies
            </Link>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-5">
            {leaders.map((leader) => (
              <Link key={leader.slug} href={`/leadership#${leader.slug}`}>
                <div className="relative aspect-[4/5] overflow-hidden bg-stone photo-frame">
                  <Image
                    src={leader.photo}
                    alt={leader.photoAlt}
                    fill
                    className={`object-cover ${cropClass(leader.photo, "object-top")}`}
                    sizes="220px"
                  />
                </div>
                <h3 className="mt-3 font-serif text-[1.05rem] leading-snug text-navy">
                  {leader.name}
                </h3>
                <p className="mt-1 text-sm leading-6 text-muted">{leader.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
