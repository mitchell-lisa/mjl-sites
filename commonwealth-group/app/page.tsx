import Image from "next/image";
import Link from "next/link";
import { PropertyCard } from "@/components/PropertyCard";
import { categories } from "@/lib/categories";
import { getFeaturedProperties } from "@/lib/properties";
import { leaders } from "@/lib/team";
import { site } from "@/lib/site";

export default function HomePage() {
  const featured = getFeaturedProperties().slice(0, 6);

  return (
    <>
      <section className="relative isolate min-h-[88vh] overflow-hidden bg-navy-deep text-ivory">
        <Image
          src="/images/hero.jpg"
          alt="Atmospheric photograph of a brick commercial building, used as category imagery only"
          fill
          priority
          className="object-cover object-center opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/40 via-navy/65 to-navy-deep" />
        <div className="grain absolute inset-0" />
        <div className="site-grid relative flex min-h-[88vh] flex-col justify-end pb-16 pt-28 md:pb-24">
          <p className="eyebrow text-bronze-bright">
            Wilmington · Mid-Atlantic · Since {site.founded}
          </p>
          <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-[1.08] md:text-6xl lg:text-7xl">
            A fully integrated real estate company, built for the long hold.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone/90 md:text-xl">
            Extensive experience in ownership, leasing, management, and
            development since {site.founded}. Office, multifamily, residential,
            industrial, and family-business assets across the Mid-Atlantic.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/portfolio" className="btn btn-bronze">
              View the portfolio
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Request information
            </Link>
            <a href={site.phoneHref} className="btn btn-ghost">
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="bg-ivory py-16 md:py-24">
        <div className="site-grid">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Asset types</p>
              <h2 className="mt-3 max-w-xl font-serif text-4xl text-navy md:text-5xl">
                Five disciplines, one operating platform.
              </h2>
            </div>
            <p className="max-w-md text-[1.02rem] leading-7 text-muted">
              The current site organizes the portfolio by office, multifamily
              and mixed use, residential, industrial, and family business.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/portfolio/${category.slug}`}
                className="card-lift group relative min-h-[240px] overflow-hidden border border-navy/10 bg-navy"
              >
                <Image
                  src={category.image}
                  alt={category.imageAlt}
                  fill
                  className="object-cover opacity-50 transition duration-500 group-hover:scale-105 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy/40 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-5 text-ivory">
                  <p className="eyebrow text-bronze-bright">Portfolio</p>
                  <h3 className="mt-2 font-serif text-2xl leading-tight">
                    {category.shortLabel}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-ivory">
        <div className="site-grid grid gap-12 py-16 md:grid-cols-12 md:py-24">
          <div className="md:col-span-5">
            <p className="eyebrow text-bronze-bright">Since {site.founded}</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              Owner-operator discipline, Mid-Atlantic focus.
            </h2>
          </div>
          <div className="md:col-span-7 space-y-5 text-[1.05rem] leading-8 text-stone/88">
            <p>
              The Commonwealth Group, LLC and its associated entities have been
              engaged in development, leasing, and management since{" "}
              {site.founded}. After work in mining and oil and gas, founder and
              CEO Brock J. Vinton launched Commonwealth Management Corporation
              to manage local real estate portfolios. The firm is now a fully
              integrated company with projects throughout the Mid-Atlantic and
              Colorado.
            </p>
            <p>
              The published About page describes an entrepreneurial approach
              balanced against calculated risk mitigation, with an in-house
              asset management team and a stated preference for the
              owner-manager model over third-party work alone.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[0.72rem] font-semibold tracking-[0.16em] uppercase text-bronze-bright hover:text-ivory"
            >
              Read the firm story
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <div className="site-grid">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Selected properties</p>
              <h2 className="mt-3 font-serif text-4xl text-navy md:text-5xl">
                Work that is published, not invented.
              </h2>
            </div>
            <Link href="/portfolio" className="btn btn-outline">
              All properties
            </Link>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {featured.map((property) => (
              <PropertyCard key={property.slug} property={property} featured />
            ))}
          </div>
          <p className="mt-8 text-sm leading-6 text-muted">
            Property names, locations, and figures are taken from the live
            Commonwealth site. Photographs on this sample are atmospheric
            category images, not photographs of specific Commonwealth buildings.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-16 md:py-24">
        <div className="site-grid grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow">From the current site</p>
            <h2 className="mt-3 font-serif text-4xl text-navy">Darley Green</h2>
          </div>
          <blockquote className="md:col-span-8">
            <p className="font-serif text-2xl leading-snug text-navy md:text-3xl">
              “Darley Green is the definition of modern living. It has an open
              floor plan that comfortably accommodated 60 impressed guests for
              my house warming party. Amy and Whitney took me from concept to
              completion of my fabulous abode.”
            </p>
            <footer className="mt-6 text-sm tracking-[0.08em] uppercase text-muted">
              Milton D., homeowner. Published on commonwealthltd.net.
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="border-y border-navy/8 bg-stone/50 py-16 md:py-24">
        <div className="site-grid">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow">Leadership</p>
              <h2 className="mt-3 font-serif text-4xl text-navy md:text-5xl">
                The operating team.
              </h2>
            </div>
            <Link href="/leadership" className="btn btn-outline">
              Full biographies
            </Link>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-5">
            {leaders.map((leader) => (
              <Link
                key={leader.slug}
                href="/leadership"
                className="card-lift border border-navy/10 bg-paper p-5"
              >
                <span className="grid h-12 w-12 place-items-center border border-bronze/50 font-serif text-lg text-navy">
                  {leader.initials}
                </span>
                <h3 className="mt-5 font-serif text-xl leading-tight text-navy">
                  {leader.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{leader.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-deep py-16 text-ivory md:py-20">
        <div className="site-grid flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-bronze-bright">Discuss a project</p>
            <h2 className="mt-3 font-serif text-4xl md:text-5xl">
              Available space, development, or management.
            </h2>
            <p className="mt-4 max-w-xl text-stone/80">
              Contact Don Robitzer at {site.email}, or call the Wilmington
              office.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link href="/contact" className="btn btn-bronze">
              Request information
            </Link>
            <a href={site.phoneHref} className="btn btn-ghost">
              {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
