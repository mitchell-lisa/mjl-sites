import Image from "next/image";
import Link from "next/link";
import { PropertyCard } from "@/components/PropertyCard";
import { categories } from "@/lib/categories";
import { getFeaturedProperties } from "@/lib/properties";
import { site } from "@/lib/site";
import { leaders } from "@/lib/team";

export default function HomePage() {
  const featured = getFeaturedProperties().slice(0, 3);

  return (
    <>
      <section className="bg-white">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone md:aspect-[2.4/1] md:max-h-[560px]">
          <Image
            src="/images/renaissance-centre.jpg"
            alt="The Renaissance Centre in Wilmington, from the Commonwealth office portfolio"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="site-grid grid gap-10 py-14 md:grid-cols-12 md:py-20">
          <div className="md:col-span-7">
            <h1 className="max-w-xl font-serif text-[2.15rem] leading-[1.15] text-navy md:text-5xl">
              A fully integrated and diversified real estate company
            </h1>
          </div>
          <div className="md:col-span-5 md:pt-2">
            <p className="max-w-md text-[1.05rem] leading-8 text-ink">
              The Commonwealth Group, LLC and its associated entities have been
              engaged in development, leasing, and management in the Mid-Atlantic
              since {site.founded}.
            </p>
            <p className="mt-6">
              <Link href="/portfolio" className="text-maroon hover:underline">
                Development portfolio
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-navy/10 py-14 md:py-20">
        <div className="site-grid">
          <h2 className="font-serif text-2xl text-navy md:text-3xl">Portfolio</h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((category) => (
              <Link key={category.slug} href={`/portfolio/${category.slug}`} className="group">
                <div className="relative aspect-[4/3] overflow-hidden bg-stone">
                  <Image
                    src={category.image}
                    alt={category.imageAlt}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-3 font-serif text-xl text-navy group-hover:text-maroon">
                  {category.shortLabel}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-navy/10 bg-white py-14 md:py-20">
        <div className="site-grid">
          <div className="flex items-end justify-between gap-4">
            <h2 className="font-serif text-2xl text-navy md:text-3xl">
              Selected properties
            </h2>
            <Link href="/portfolio" className="text-sm text-maroon hover:underline">
              All properties
            </Link>
          </div>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {featured.map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-navy/10">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[320px] bg-stone md:min-h-[420px]">
            <Image
              src="/images/portfolio/darley-green/hero.jpg"
              alt="Darley Green, from the Commonwealth residential listing"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center bg-navy-deep px-8 py-14 text-ivory md:px-14">
            <h2 className="font-serif text-3xl">Montchanin Builders</h2>
            <p className="mt-5 max-w-md leading-8 text-stone/90">
              In 2010, members of The Commonwealth Group partnered with Anthony
              Ruggio to form Montchanin Builders for residential work in the
              Commonwealth portfolio.
            </p>
            <p className="mt-6">
              <Link href="/montchanin-builders" className="text-maroon-soft hover:underline">
                Homesites and communities
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
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
                <div className="relative aspect-[4/5] overflow-hidden bg-stone">
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
