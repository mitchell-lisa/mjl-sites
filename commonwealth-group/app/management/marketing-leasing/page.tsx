import type { Metadata } from "next";
import Link from "next/link";
import { ContactCta } from "@/components/ContactCta";
import { PageIntro } from "@/components/PageIntro";
import { ServiceList } from "@/components/ServiceList";
import { marketingLeasingCopy } from "@/lib/services";

export const metadata: Metadata = {
  title: "Marketing and Leasing",
};

export default function MarketingLeasingPage() {
  return (
    <>
      <PageIntro eyebrow="Management" title={marketingLeasingCopy.title}>
        <p>{marketingLeasingCopy.intro}</p>
      </PageIntro>

      <section className="py-16 md:py-20">
        <div className="site-grid grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-5 text-[1.05rem] leading-8 text-ink">
            {marketingLeasingCopy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <Link href="/management" className="inline-block text-maroon hover:underline">
              Management
            </Link>
          </div>
          <div className="lg:col-span-5">
            <ServiceList
              title={marketingLeasingCopy.itemsTitle}
              items={marketingLeasingCopy.items}
            />
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
