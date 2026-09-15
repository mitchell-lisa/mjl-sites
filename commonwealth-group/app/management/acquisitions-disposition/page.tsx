import type { Metadata } from "next";
import Link from "next/link";
import { ContactCta } from "@/components/ContactCta";
import { PageIntro } from "@/components/PageIntro";
import { ServiceList } from "@/components/ServiceList";
import { acquisitionsCopy } from "@/lib/services";

export const metadata: Metadata = {
  title: "Acquisitions and Disposition",
};

export default function AcquisitionsDispositionPage() {
  return (
    <>
      <PageIntro eyebrow="Management" title={acquisitionsCopy.title}>
        <p>{acquisitionsCopy.intro}</p>
      </PageIntro>

      <section className="py-16 md:py-20">
        <div className="site-grid grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-5 text-[1.05rem] leading-8 text-ink">
            {acquisitionsCopy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <Link href="/management" className="inline-block text-maroon hover:underline">
              Management
            </Link>
          </div>
          <div className="lg:col-span-5">
            <ServiceList
              title={acquisitionsCopy.itemsTitle}
              items={acquisitionsCopy.items}
            />
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
