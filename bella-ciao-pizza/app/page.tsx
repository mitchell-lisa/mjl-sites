import Image from "next/image";
import { LogoMark } from "@/components/LogoMark";
import { eventCards, ovenPies, pies, reviews } from "@/lib/content";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: site.name,
  description:
    "Mobile wood-fired pizza truck for private events and catering in Dayton and South Brunswick, New Jersey.",
  telephone: "+17323093034",
  email: site.email,
  url: site.previewUrl,
  image: `${site.previewUrl}/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.line1,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
  },
  servesCuisine: ["Pizza", "Italian"],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-b border-rule bg-ink">
        <div className="mx-auto grid max-w-page lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <figure className="relative min-h-[20rem] bg-ink sm:min-h-[26rem]">
            <Image
              src="/photos/hero-oven.jpg"
              alt="Wood-fired pie on a peel in front of the oven"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-center"
            />
          </figure>
          <div className="flex flex-col justify-center px-4 py-8 sm:px-8 sm:py-12">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
              {site.tagline} · {site.city}
            </p>
            <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-paper sm:text-4xl lg:text-[2.85rem]">
              Wood-fired pizza that comes to you.
            </h1>
            <p className="mt-4 max-w-measure text-lg leading-relaxed text-paper/80">
              Private events and catering from a mobile wood-fired oven.{" "}
              {site.region}.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href={site.phoneHref}
                className="inline-flex min-h-[44px] items-center bg-basil px-5 py-3 text-base font-semibold text-paper"
              >
                Book the truck · {site.phoneDisplay}
              </a>
              <a
                href="#menu"
                className="inline-flex min-h-[44px] items-center font-semibold text-gold underline decoration-gold/40 underline-offset-4"
              >
                See the Sicilian pies
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="border-b border-rule bg-dough px-4 py-10 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-page">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            Sicilian towns on the board
          </h2>
          <p className="mt-2 max-w-measure text-mute">
            Specialty pies named for towns across Sicily. Call {site.phoneDisplay}{" "}
            to book the truck.
          </p>
          <ul className="mt-6 columns-1 gap-x-10 sm:columns-2 lg:columns-3">
            {pies.map((pie) => (
              <li
                key={pie.name}
                className="mb-3 break-inside-avoid border-b border-rule pb-2.5"
              >
                <p className="font-display text-lg font-semibold text-ink">
                  {pie.name}
                </p>
                <p className="mt-1 text-sm leading-relaxed text-mute">
                  {pie.toppings}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="events" className="mx-auto max-w-page px-4 py-10 sm:px-6 sm:py-12">
        <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
          Events, catering, and the oven on the road
        </h2>
        <p className="mt-2 max-w-measure text-mute">
          Private events, catering, and more. Call to book your event.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {eventCards.map((card) => (
            <li
              key={card.title}
              className="border-l-4 border-basil bg-mist px-4 py-3.5 text-ink"
            >
              <p className="font-semibold">{card.title}</p>
              <p className="mt-1 text-sm text-mute">{card.copy}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {ovenPies.map((photo) => (
            <figure key={photo.src} className="overflow-hidden bg-paper">
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                className="h-auto w-full object-cover"
              />
              <figcaption className="px-1 pt-2 text-sm font-medium text-ink">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="reviews" className="border-y border-rule bg-mist/50 px-4 py-10 sm:px-6 sm:py-12">
        <div className="mx-auto max-w-page">
          <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            What guests wrote
          </h2>
          <ul className="mt-6 grid gap-3 lg:grid-cols-3">
            {reviews.map((review) => (
              <li
                key={`${review.when}-${review.quote}`}
                className="border border-rule bg-paper px-5 py-4"
              >
                <p className="text-sm font-semibold uppercase tracking-wide text-basil">
                  Guest · {review.when}
                </p>
                <p className="mt-2 text-base leading-relaxed text-ink">
                  “{review.quote}”
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-page px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              About the truck
            </h2>
            <p className="mt-3 max-w-measure text-lg leading-relaxed text-mute">
              {site.name} is a mobile wood-fired pizza truck based in Dayton, NJ.
              The oven travels to private events, festivals, and catering jobs
              across Central Jersey.
            </p>
            <p className="mt-3 max-w-measure text-mute">
              Homemade dough, a crisp undercarriage, and Sicilian-named pies.
              Vegan and gluten-free options when you ask ahead. The truck books
              by call and event. Confirm your date by phone.
            </p>
          </div>
          <aside className="bg-ink p-6 text-paper">
            <LogoMark
              alt="Bella Ciao Pizza"
              className="mx-auto h-32 w-auto"
            />
            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between gap-4 border-b border-paper/15 pb-2">
                <dt className="text-paper/60">Phone</dt>
                <dd>
                  <a
                    href={site.phoneHref}
                    className="font-semibold text-gold underline decoration-gold/30 underline-offset-4"
                  >
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-paper/15 pb-2">
                <dt className="text-paper/60">Email</dt>
                <dd>
                  <a
                    href={site.emailHref}
                    className="font-semibold text-gold underline decoration-gold/30 underline-offset-4"
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-paper/15 pb-2">
                <dt className="text-paper/60">Base</dt>
                <dd className="text-right">
                  <a
                    href={site.mapsUrl}
                    className="underline decoration-paper/30 underline-offset-4"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {site.address.display}
                  </a>
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-paper/60">Instagram</dt>
                <dd>
                  <a
                    href={site.instagramUrl}
                    className="font-semibold text-gold underline decoration-gold/30 underline-offset-4"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {site.instagramHandle}
                  </a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="bg-basil px-4 py-10 text-paper sm:px-6">
        <div className="mx-auto max-w-wide text-center">
          <p className="font-display text-2xl font-semibold sm:text-3xl">
            Ready for wood-fired pies at your next gathering?
          </p>
          <a
            href={site.phoneHref}
            className="mt-6 inline-flex min-h-[44px] items-center bg-ink px-6 py-3 text-lg font-semibold text-gold"
          >
            Call {site.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}
