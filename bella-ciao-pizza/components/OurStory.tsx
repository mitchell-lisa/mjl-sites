import Image from "next/image";
import { photos } from "@/lib/photos";

export function OurStory() {
  return (
    <section className="mx-auto grid max-w-page gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,0.72fr)] lg:py-24">
      <div>
        <h2 className="font-display text-4xl font-medium leading-[1.02] sm:text-5xl">
          A mobile oven, with Sicilian names on the board.
        </h2>
        <div className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-mute">
          <p>
            Bella Ciao Pizza LLC fires pies from a wood oven on a truck. The oven comes to the event. Pies are made there, in front of the people who came to eat them.
          </p>
          <p>
            The board uses town names from Sicily. Palermo, Carini, Cefalu, Taormina, Trapani, and the others are pies, not a history lesson. Why those towns, and why the name Bella Ciao, is the owners’ story to tell.
          </p>
          <p>
            What is public is the truck, the fire, and the list of pies. Call or write when you want that oven at your gathering.
          </p>
        </div>
      </div>
      <figure className="bg-flour">
        <Image
          src={photos.oven.src}
          alt={photos.oven.alt}
          width={photos.oven.width}
          height={photos.oven.height}
          sizes="(min-width: 1024px) 30vw, 100vw"
          className="h-auto w-full object-cover"
        />
        <figcaption className="px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
          The oven at work
        </figcaption>
      </figure>
    </section>
  );
}
