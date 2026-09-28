import Image from "next/image";
import Link from "next/link";
import { EventType } from "@/components/EventType";
import { photos } from "@/lib/photos";
import { eventTypes, lines } from "@/lib/site-config";

export function EventsOverview() {
  return (
    <section className="mx-auto grid max-w-page gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(16rem,0.8fr)_minmax(0,1.1fr)] lg:items-start lg:py-24">
      <figure className="relative min-h-[24rem] bg-flour lg:sticky lg:top-28 lg:min-h-[36rem]">
        <Image
          src={photos.oven.src}
          alt="The wood oven fired up, with a pie waiting on the peel"
          fill
          sizes="(min-width: 1024px) 36vw, 100vw"
          className="object-cover object-[center_55%]"
        />
      </figure>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
          Events and catering
        </p>
        <h2 className="mt-3 font-display text-4xl font-medium leading-[1.02] sm:text-6xl">
          {lines.partyOven}
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-mute">
          Book the oven for the gathering. The truck shows up, the fire stays lit, and pies keep coming out.
        </p>
        <ul className="mt-8 border-b border-ink/15">
          {eventTypes.map((item, index) => (
            <EventType
              key={item.id}
              number={String(index + 1).padStart(2, "0")}
              label={item.label}
              copy={item.copy}
            />
          ))}
        </ul>
        <Link href="/book" className="btn btn-dark mt-8">
          Book the truck
        </Link>
      </div>
    </section>
  );
}
