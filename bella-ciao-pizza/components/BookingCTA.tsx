import Link from "next/link";
import { site } from "@/lib/site-config";

export function BookingCTA() {
  return (
    <section className="on-dark bg-ink text-cream">
      <div className="mx-auto flex max-w-page flex-col gap-6 px-5 py-16 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:py-20">
        <div>
          <h2 className="font-display text-4xl font-medium leading-[0.95] sm:text-6xl">
            Tell us the date.
          </h2>
          <p className="mt-4 max-w-md text-lg text-[#e7e0d6]">
            The town, the guest count, and a number where we can reach you.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/book" className="btn btn-light">
            Book the truck
          </Link>
          <a href={site.phoneHref} className="btn btn-line">
            Call {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
