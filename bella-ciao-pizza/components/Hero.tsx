import Image from "next/image";
import Link from "next/link";
import { photos } from "@/lib/photos";
import { serviceArea } from "@/lib/site-config";

export function Hero() {
  const showArea = serviceArea.showUnconfirmedLine && !serviceArea.confirmed;

  return (
    <section className="on-dark bg-ink text-cream">
      <div className="mx-auto grid max-w-page lg:min-h-[calc(100vh-5.5rem)] lg:grid-cols-[minmax(20rem,0.92fr)_1.08fr]">
        <div className="order-2 flex flex-col justify-end px-5 py-10 sm:px-8 lg:order-1 lg:justify-center lg:py-16 lg:pl-10">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-gold sm:text-xs">
            Mobile wood-fired pizza · New Jersey
          </p>
          <h1 className="mt-4 max-w-[12ch] font-display text-[2.7rem] font-medium uppercase leading-[0.92] tracking-[0.01em] sm:text-6xl lg:text-[4.4rem]">
            Wood-fired pizza that comes to you.
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-[#e7e0d6]">
            Private parties, weddings, corporate events, festivals and anything worth firing up the oven for.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link href="/book" className="btn btn-light">
              Book Bella Ciao
            </Link>
            <Link href="/pies" className="btn btn-line">
              See the pies
            </Link>
          </div>
          {showArea ? (
            <p className="mt-6 text-sm text-[#ddd4c6]">{serviceArea.heroLine}</p>
          ) : null}
        </div>
        <figure className="relative order-1 min-h-[22rem] sm:min-h-[28rem] lg:order-2 lg:min-h-full">
          <Image
            src={photos.oven.src}
            alt={photos.oven.alt}
            fill
            priority
            sizes="(min-width: 1024px) 54vw, 100vw"
            className="object-cover object-[center_42%]"
          />
        </figure>
      </div>
    </section>
  );
}
