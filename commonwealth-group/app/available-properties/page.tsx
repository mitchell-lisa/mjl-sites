import type { Metadata } from "next";
import Link from "next/link";
import { ContactCta } from "@/components/ContactCta";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Available Properties",
};

export default function AvailablePropertiesPage() {
  return (
    <>
      <PageIntro eyebrow="Leasing" title="Available Properties">
        <p>
          Interested in learning more about our development and property
          management services? Contact us today. We are happy to discuss your
          project or help you find available properties.
        </p>
      </PageIntro>

      <section className="py-16 md:py-20">
        <div className="site-grid grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-4 text-[1.05rem] leading-8 text-ink">
            <p>
              The live Commonwealth site does not publish a current vacant-unit
              list on this page. Availability is handled directly by the
              Wilmington office.
            </p>
            <p>
              Call{" "}
              <a className="text-maroon hover:underline" href={site.phoneHref}>
                {site.phoneDisplay}
              </a>{" "}
              or email{" "}
              <a
                className="text-maroon hover:underline"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
              .
            </p>
          </div>
          <aside className="lg:col-span-5 space-y-3">
            <Link href="/portfolio" className="btn btn-navy w-full">
              Development portfolio
            </Link>
            <Link href="/portfolio/office" className="btn btn-outline w-full">
              Office space
            </Link>
            <a
              href={site.montchaninMoveIn}
              className="btn btn-outline w-full"
              rel="noreferrer"
              target="_blank"
            >
              Montchanin move-in ready
            </a>
            <Link href="/contact" className="btn btn-maroon w-full">
              Request information
            </Link>
          </aside>
        </div>
      </section>

      <ContactCta title="Call or email about availability" />
    </>
  );
}
