import type { Metadata } from "next";
import { ContactCta } from "@/components/ContactCta";
import { PageIntro } from "@/components/PageIntro";
import { ServiceList } from "@/components/ServiceList";
import { developmentCopy } from "@/lib/services";

export const metadata: Metadata = {
  title: "Development",
};

export default function DevelopmentPage() {
  return (
    <>
      <PageIntro eyebrow="Services" title={developmentCopy.title}>
        <p>{developmentCopy.intro}</p>
      </PageIntro>

      <section className="py-16 md:py-20">
        <div className="site-grid grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7 space-y-5 text-[1.05rem] leading-8 text-ink">
            {developmentCopy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="lg:col-span-5">
            <ServiceList
              title={developmentCopy.itemsTitle}
              items={developmentCopy.items}
            />
          </div>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
