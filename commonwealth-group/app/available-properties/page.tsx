import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { cropClass } from "@/lib/crops";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Available Properties",
};

export default function AvailablePropertiesPage() {
  return (
    <section className="bg-ivory">
      <div className="site-grid grid gap-12 py-14 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-6">
          <PageHeader kicker="Wilmington office" title="Available Properties" />
          <p className="mt-6 max-w-lg text-[1.08rem] leading-8 text-ink">
            The published Commonwealth page does not list vacant units. It asks
            visitors to call or email the Wilmington office to discuss a project
            or find available space.
          </p>
          <p className="mt-4 max-w-lg leading-8 text-muted">
            Headquarters remains The Commonwealth Building, 300 Water Street,
            on the Wilmington Riverfront.
          </p>
          <p className="mt-10 border-l-4 border-maroon pl-5 font-serif text-4xl text-navy">
            <a href={site.phoneHref} className="hover:text-maroon">
              {site.phoneDisplay}
            </a>
          </p>
          <p className="mt-4 pl-5">
            <a
              href={`mailto:${site.email}`}
              className="text-[1.05rem] text-maroon hover:underline"
            >
              {site.email}
            </a>
          </p>
          <ul className="mt-12 space-y-3 border-t border-navy/10 pt-8 text-[1.02rem]">
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
            <li>
              <Link href="/contact" className="hover:text-maroon">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="relative min-h-[360px] bg-stone photo-frame lg:col-span-6">
          <Image
            src="/images/commonwealth-building-hq.jpg"
            alt="The Commonwealth Building at 300 Water Street"
            fill
            className={`object-cover ${cropClass("/images/commonwealth-building-hq.jpg")}`}
            priority
          />
        </div>
      </div>
    </section>
  );
}
