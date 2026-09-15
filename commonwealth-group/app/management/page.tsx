import type { Metadata } from "next";
import Link from "next/link";
import { ContactCta } from "@/components/ContactCta";
import { PageIntro } from "@/components/PageIntro";
import { ServiceList } from "@/components/ServiceList";
import { managementCopy } from "@/lib/services";
import { serviceNav } from "@/lib/site";

export const metadata: Metadata = {
  title: "Management",
};

export default function ManagementPage() {
  return (
    <>
      <PageIntro eyebrow="Services" title={managementCopy.title}>
        <p>{managementCopy.intro}</p>
      </PageIntro>

      <section className="py-16 md:py-20">
        <div className="site-grid grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-5 text-[1.05rem] leading-8 text-ink">
            {managementCopy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              {serviceNav
                .filter((item) => item.href !== "/management")
                .map((item) => (
                  <Link key={item.href} href={item.href} className="btn btn-outline">
                    {item.label}
                  </Link>
                ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <ServiceList
              title={managementCopy.itemsTitle}
              items={managementCopy.items}
            />
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
