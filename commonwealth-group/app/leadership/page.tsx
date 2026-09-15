import type { Metadata } from "next";
import Image from "next/image";
import { ContactCta } from "@/components/ContactCta";
import { PageIntro } from "@/components/PageIntro";
import { leaders } from "@/lib/team";

export const metadata: Metadata = {
  title: "Management Team",
};

export default function LeadershipPage() {
  return (
    <>
      <PageIntro eyebrow="Management team" title="Leadership">
        <p>
          Portraits and biographies follow the published management-team page.
          Headshots are the photographs used on commonwealthltd.net.
        </p>
      </PageIntro>

      <section className="py-16 md:py-20">
        <div className="site-grid space-y-8">
          {leaders.map((leader) => (
            <article
              key={leader.slug}
              id={leader.slug}
              className="scroll-mt-32 border border-navy/10 bg-paper p-6 md:p-10"
            >
              <div className="grid gap-8 md:grid-cols-12">
                <div className="md:col-span-4">
                  <div className="relative aspect-[4/5] max-w-[280px] overflow-hidden bg-stone">
                    <Image
                      src={leader.photo}
                      alt={leader.photoAlt}
                      fill
                      className="object-cover object-top"
                      sizes="280px"
                    />
                  </div>
                  <h2 className="mt-5 font-serif text-3xl text-navy">
                    {leader.name}
                  </h2>
                  <p className="mt-2 text-sm tracking-[0.08em] uppercase text-maroon">
                    {leader.title}
                  </p>
                </div>
                <div className="md:col-span-8 space-y-4 text-[1.02rem] leading-8 text-ink">
                  {leader.bio.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ContactCta />
    </>
  );
}
