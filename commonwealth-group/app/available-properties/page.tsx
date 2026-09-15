import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Available Properties",
};

export default function AvailablePropertiesPage() {
  return (
    <section className="bg-white">
      <div className="site-grid grid gap-12 py-14 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-6">
          <h1 className="font-serif text-4xl leading-tight text-navy md:text-5xl">
            Available Properties
          </h1>
          <p className="mt-6 max-w-lg text-[1.08rem] leading-8 text-ink">
            The published Commonwealth site does not list vacant units here.
            Availability is handled by the Wilmington office.
          </p>
          <p className="mt-10 font-serif text-4xl text-navy">
            <a href={site.phoneHref} className="hover:text-maroon">
              {site.phoneDisplay}
            </a>
          </p>
          <p className="mt-3">
            <a
              href={`mailto:${site.email}`}
              className="text-[1.05rem] text-maroon hover:underline"
            >
              {site.email}
            </a>
          </p>
          <ul className="mt-12 space-y-3 text-[1.02rem]">
            <li>
              <Link href="/portfolio" className="hover:text-maroon">
                Development portfolio
              </Link>
            </li>
            <li>
              <Link href="/portfolio/office" className="hover:text-maroon">
                Office properties
              </Link>
            </li>
            <li>
              <a
                href={site.montchaninMoveIn}
                className="hover:text-maroon"
                rel="noreferrer"
                target="_blank"
              >
                Montchanin move-in ready
              </a>
            </li>
          </ul>
        </div>
        <div className="relative min-h-[320px] bg-stone lg:col-span-6">
          <Image
            src="/images/commonwealth-building-hq.jpg"
            alt="The Commonwealth Building at 300 Water Street"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
