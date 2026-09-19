import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import {
  contractorServices,
  projectPhotos,
  site,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[78vh] overflow-hidden bg-navy-ink text-white md:min-h-[88vh]">
        <Image
          src="/images/hero.jpeg"
          alt="Stone-and-siding South Jersey home with a two-car garage and balcony."
          fill
          priority
          className="object-cover object-[50%_42%]"
          sizes="100vw"
        />
        <div className="hero-wash absolute inset-0" />
        <div className="absolute inset-x-0 top-0 h-1.5 bg-teal" />
        <div className="relative z-10 flex min-h-[78vh] items-end pb-14 md:min-h-[88vh] md:items-center md:pb-0">
          <div className="site-grid w-full py-10">
            <div className="max-w-2xl">
              <p className="eyebrow text-teal">
                {site.region} · since {site.founded}
              </p>
              <h1 className="mt-3 font-display text-[3.1rem] leading-[0.92] md:text-[5.4rem]">
                {site.tagline}
              </h1>
              <p className="mt-5 max-w-xl text-[1.08rem] leading-8 text-white/88">
                Family-owned real estate investment and general contracting
                across {site.region}. Purchasing, renovating, building, and
                selling properties throughout the {site.market} market.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={site.phoneHref} className="btn btn-teal">
                  Call {site.phoneDisplay}
                </a>
                <a href="#we-buy" className="btn btn-ghost">
                  We buy properties
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="story"
        className="section-anchor relative overflow-hidden bg-soft py-16 md:py-24"
      >
        <div className="pointer-events-none absolute -right-8 top-8 hidden text-[11rem] leading-none text-navy/6 md:block">
          {site.founded}
        </div>
        <div className="site-grid grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow">Our story</p>
            <h2 className="mt-3 font-display text-[2.4rem] leading-[0.95] text-navy md:text-[3.4rem]">
              South Jersey family REI and GC
            </h2>
            <p className="year-mark mt-6 text-[4.5rem] text-teal md:text-[6rem]">
              {site.founded}
            </p>
            <p className="mt-4 text-[1.05rem] leading-8">{site.storyLead}</p>
            <p className="mt-4 text-[1.02rem] leading-8 text-ink/85">
              {site.storyBody}
            </p>
            <p className="mt-4 text-[1.02rem] leading-8 text-ink/85">
              {site.storyGc}
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden border-4 border-navy bg-mist">
              <Image
                src="/images/photo2.jpeg"
                alt={projectPhotos[1].alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 540px, 100vw"
              />
            </div>
            <p className="mt-3 text-sm text-muted">
              South Jersey property from the SHQ preview set.
            </p>
          </div>
        </div>
      </section>

      <section id="we-buy" className="section-anchor bg-navy py-16 text-white md:py-24">
        <div className="site-grid grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="eyebrow text-teal">Cash offer</p>
            <h2 className="mt-3 font-display text-[2.4rem] leading-[0.95] md:text-[3.6rem]">
              We buy properties
            </h2>
            <p className="mt-5 text-[1.2rem] leading-8 text-white/90">
              {site.weBuyLead}
            </p>
            <p className="mt-4 text-[1.05rem] leading-8 text-white/82">
              {site.weBuyOffer} {site.weBuyProcess}
            </p>
            <p className="mt-4 text-[0.98rem] leading-7 text-white/68">
              The live site names an eight-step cash offer process and does not
              publish the individual steps. Call or email SHQ for the current
              walkthrough.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.phoneHref} className="btn btn-teal">
                Get a cash conversation
              </a>
              <a href={`mailto:${site.email}`} className="btn btn-ghost">
                Email administration
              </a>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="relative min-h-[320px] overflow-hidden border-l-8 border-teal">
              <Image
                src="/images/photo3.jpeg"
                alt={projectPhotos[2].alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 540px, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contracting" className="section-anchor bg-mist py-16 md:py-24">
        <div className="site-grid">
          <p className="eyebrow">Contractor services</p>
          <h2 className="mt-3 max-w-3xl font-display text-[2.4rem] leading-[0.95] text-navy md:text-[3.4rem]">
            Flooring, trim, and tile
          </h2>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-8">
            {site.contractorLead}
          </p>
          <p className="mt-4 max-w-2xl text-[1.02rem] leading-8 text-ink/85">
            {site.contractorBody}
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {contractorServices.map((service, index) => (
              <article key={service.name} className="service-card p-7">
                <p className="font-display text-4xl text-teal">{`0${index + 1}`}</p>
                <h3 className="mt-4 font-display text-2xl text-navy">
                  {service.name}
                </h3>
                <p className="mt-3 leading-7 text-ink/80">{service.copy}</p>
              </article>
            ))}
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {projectPhotos.map((photo) => (
              <div key={photo.src} className="relative aspect-[4/3] overflow-hidden bg-soft">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 33vw, 100vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="hbl" className="section-anchor bg-navy-deep py-16 text-white md:py-20">
        <div className="site-grid grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="eyebrow text-teal">Sister company</p>
            <h2 className="mt-3 font-display text-[2.3rem] leading-[0.95] md:text-[3.1rem]">
              {site.hblName}
            </h2>
            <p className="mt-5 max-w-2xl text-[1.05rem] leading-8 text-white/82">
              {site.hblBody}
            </p>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <a
              href={site.hblUrl}
              className="btn btn-ghost"
              rel="noreferrer"
              target="_blank"
            >
              constructorahbl.com
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="section-anchor bg-paper py-16 md:py-24">
        <div className="site-grid grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Contact</p>
            <h2 className="mt-3 font-display text-[2.4rem] leading-[0.95] text-navy md:text-[3.4rem]">
              Talk with SHQ
            </h2>
            <p className="mt-6">
              <a
                className="font-display text-4xl text-navy hover:text-blue md:text-5xl"
                href={site.phoneHref}
              >
                {site.phoneDisplay}
              </a>
            </p>
            <p className="mt-4">
              <a
                className="text-lg text-blue hover:underline"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </p>
            <p className="mt-6 max-w-sm leading-7 text-muted">
              Southern New Jersey. New Jersey and Philadelphia market. Facts on
              this preview come from{" "}
              <a className="underline hover:text-navy" href={site.liveSite}>
                shqproperties.com
              </a>
              .
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              <a
                className="text-navy underline hover:text-blue"
                href={site.facebook}
                rel="noreferrer"
                target="_blank"
              >
                Facebook
              </a>
              <a
                className="text-navy underline hover:text-blue"
                href={site.instagram}
                rel="noreferrer"
                target="_blank"
              >
                Instagram
              </a>
            </div>
          </div>
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
