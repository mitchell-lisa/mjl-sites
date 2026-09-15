import Image from "next/image";
import Link from "next/link";
import { ContactCta } from "@/components/ContactCta";
import { PropertyCard } from "@/components/PropertyCard";
import { categories } from "@/lib/categories";
import { getFeaturedProperties } from "@/lib/properties";
import { clients, serviceNav, site } from "@/lib/site";
import { leaders } from "@/lib/team";

export default function HomePage() {
  const featured = getFeaturedProperties().slice(0, 6);

  return (
    <>
      <section className="bg-ivory">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone md:aspect-[21/9] md:max-h-[520px]">
          <Image
            src="/images/renaissance-centre.jpg"
            alt="The Renaissance Centre in Wilmington, from the Commonwealth office portfolio"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="site-grid py-10 md:py-14">
          <p className="eyebrow">Wilmington, Delaware · Since {site.founded}</p>
          <h1 className="mt-3 max-w-3xl font-serif text-3xl leading-tight text-navy md:text-5xl">
            A fully integrated and diversified real estate company
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted md:text-lg">
            The Commonwealth Group, LLC and its associated entities have been
            actively engaged in development, leasing, and management services in
            the Mid-Atlantic since {site.founded}.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link href="/available-properties" className="btn btn-maroon">
              Available Properties
            </Link>
            <a href={site.phoneHref} className="text-[0.95rem] text-navy hover:text-maroon">
              {site.phoneDisplay}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-[0.95rem] text-navy hover:text-maroon"
            >
              {site.email}
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-navy/10 bg-paper py-12 md:py-16">
        <div className="site-grid">
          <p className="eyebrow">Services</p>
          <h2 className="mt-2 font-serif text-2xl text-navy md:text-3xl">
            Development, leasing, and management
          </h2>
          <div className="mt-8 grid gap-px border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-4">
            {serviceNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-ivory p-6 hover:bg-paper"
              >
                <h3 className="font-serif text-xl text-navy">{item.label}</h3>
                <p className="mt-2 text-sm text-maroon">Open page →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-navy/10 bg-ivory py-12 md:py-16">
        <div className="site-grid">
          <p className="eyebrow">Portfolio</p>
          <h2 className="mt-2 font-serif text-2xl text-navy md:text-3xl">
            Office, multifamily, residential, industrial, and family business
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/portfolio/${category.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden border border-navy/10 bg-stone">
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

      <section className="border-t border-navy/10 bg-paper py-12 md:py-16">
        <div className="site-grid grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">About the firm</p>
            <h2 className="mt-2 font-serif text-2xl text-navy md:text-3xl">
              Development, leasing, and management since {site.founded}
            </h2>
          </div>
          <div className="md:col-span-8 space-y-4 text-[1.02rem] leading-8 text-ink">
            <p>
              The Commonwealth Group, LLC and its associated entities have been
              engaged in real estate development, leasing, and management
              services since {site.founded}. After work in mining and oil and
              gas, founder and CEO Brock J. Vinton launched Commonwealth
              Management Corporation to manage local real estate portfolios.
            </p>
            <p>
              The firm is a fully integrated real estate company with projects
              throughout the Mid-Atlantic and Colorado. Published material
              describes an owner-manager approach, with an in-house asset
              management team.
            </p>
            <Link href="/about" className="inline-block text-maroon hover:underline">
              About us
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-navy/10 bg-ivory py-12 md:py-16">
        <div className="site-grid">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Selected properties</p>
              <h2 className="mt-2 font-serif text-2xl text-navy md:text-3xl">
                From the current portfolio
              </h2>
            </div>
            <Link href="/portfolio" className="text-maroon hover:underline">
              All properties
            </Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featured.map((property) => (
              <PropertyCard key={property.slug} property={property} featured />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-navy/10 bg-paper py-12 md:py-16">
        <div className="site-grid grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow">Residential construction</p>
            <h2 className="mt-2 font-serif text-2xl text-navy md:text-3xl">
              Montchanin Builders
            </h2>
            <p className="mt-4 leading-7 text-ink">
              In 2010, members of The Commonwealth Group partnered with industry
              veteran Anthony Ruggio to form Montchanin Builders in order to
              execute on the various residential opportunities within The
              Commonwealth portfolio.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/montchanin-builders" className="btn btn-maroon">
                Montchanin Builders
              </Link>
              <a
                href={site.montchaninMoveIn}
                className="btn btn-outline"
                rel="noreferrer"
                target="_blank"
              >
                Move-in ready
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden border border-navy/10 md:col-span-7">
            <Image
              src="/images/portfolio/darley-green/hero.jpg"
              alt="Darley Green, from the Commonwealth residential listing"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-navy/10 bg-ivory py-12 md:py-16">
        <div className="site-grid">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Our Clients</p>
              <h2 className="mt-2 font-serif text-2xl text-navy md:text-3xl">
                Companies named on the current site
              </h2>
            </div>
            <Link href="/clients" className="text-maroon hover:underline">
              Full list
            </Link>
          </div>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[1.02rem] text-navy">
            {clients.map((client) => (
              <li key={client}>{client}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-navy/10 bg-paper py-12 md:py-16">
        <div className="site-grid">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Management team</p>
              <h2 className="mt-2 font-serif text-2xl text-navy md:text-3xl">
                Leadership
              </h2>
            </div>
            <Link href="/leadership" className="text-maroon hover:underline">
              Biographies
            </Link>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 md:grid-cols-5">
            {leaders.map((leader) => (
              <Link
                key={leader.slug}
                href={`/leadership#${leader.slug}`}
                className="block border border-navy/10 bg-ivory"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-stone">
                  <Image
                    src={leader.photo}
                    alt={leader.photoAlt}
                    fill
                    className="object-cover object-top"
                    sizes="220px"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg leading-tight text-navy">
                    {leader.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{leader.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
