import Image from "next/image";
import Link from "next/link";
import { PhotoTile } from "@/components/PhotoTile";
import { categories } from "@/lib/categories";
import { getHomeShowcase } from "@/lib/properties";
import { site } from "@/lib/site";
import { leaders } from "@/lib/team";

export default function HomePage() {
  const selected = getHomeShowcase();

  return (
    <>
      <section className="relative isolate min-h-[78vh] w-full overflow-hidden bg-stone md:min-h-[86vh]">
        <Image
          src="/images/portfolio/renaissance-centre/04.jpg"
          alt="The Renaissance Centre street façade in Wilmington, from the Commonwealth office portfolio"
          fill
          priority
          className="object-cover object-[center_18%]"
          sizes="100vw"
        />
        <div className="absolute inset-x-0 bottom-0">
          <div className="site-grid pb-7 md:pb-10">
            <div className="max-w-xl border-[3px] border-maroon bg-ivory px-6 py-6 md:px-8 md:py-7">
              <p className="eyebrow">Mid-Atlantic · since {site.founded}</p>
              <h1 className="mt-2 font-serif text-[2rem] leading-[1.12] text-navy md:text-[2.65rem]">
                A fully integrated and diversified real estate company
              </h1>
              <p className="mt-4 max-w-md leading-7 text-ink">
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
      </section>

      <section className="border-t border-navy/10 bg-white py-14 md:py-18">
        <div className="site-grid">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-serif text-2xl text-navy md:text-3xl">
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
                <div className="relative aspect-[4/3] overflow-hidden bg-stone photo-frame">
                  <Image
                    src={category.image}
                    alt={category.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-3 font-serif text-xl text-navy group-hover:text-maroon">
                  {category.label}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-navy/10 bg-ivory py-14 md:py-18">
        <div className="site-grid">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-serif text-2xl text-navy md:text-3xl">
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

      <section className="border-t border-navy/10">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[320px] bg-stone md:min-h-[440px]">
            <Image
              src="/images/portfolio/darley-green/hero.jpg"
              alt="Darley Green, from the Commonwealth residential listing"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center bg-navy-deep px-8 py-14 text-ivory md:px-14">
            <p className="eyebrow text-maroon-soft">Residential</p>
            <h2 className="mt-3 font-serif text-3xl">Montchanin Builders</h2>
            <p className="mt-5 max-w-md leading-8 text-stone/90">
              In 2010, members of The Commonwealth Group partnered with industry
              veteran Anthony Ruggio to form Montchanin Builders in order to
              execute on the various residential opportunities within The
              Commonwealth portfolio.
            </p>
            <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              <Link href="/montchanin-builders" className="text-maroon-soft hover:underline">
                Homesites and communities
              </Link>
              <a
                href={site.montchaninMoveIn}
                className="text-maroon-soft hover:underline"
                rel="noreferrer"
                target="_blank"
              >
                Move-in ready
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-18">
        <div className="site-grid">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-serif text-2xl text-navy md:text-3xl">
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
                    className="object-cover object-top"
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
