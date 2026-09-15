import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { leaders } from "@/lib/team";

export const metadata: Metadata = {
  title: "Leadership",
};

export default function LeadershipPage() {
  return (
    <section className="bg-ivory">
      <div className="site-grid py-14 md:py-16">
        <PageHeader title="Leadership">
          <p className="mt-4 max-w-xl leading-8 text-muted">
            Management team portraits and biographies as published on
            commonwealthltd.net.
          </p>
        </PageHeader>
      </div>
      <div className="site-grid pb-20">
        {leaders.map((leader) => (
          <article
            key={leader.slug}
            id={leader.slug}
            className="grid scroll-mt-28 gap-10 border-t border-navy/10 py-12 md:grid-cols-12"
          >
            <div className="md:col-span-4">
              <div className="relative aspect-[4/5] max-w-[300px] overflow-hidden bg-stone photo-frame">
                <Image
                  src={leader.photo}
                  alt={leader.photoAlt}
                  fill
                  className="object-cover object-top"
                  sizes="300px"
                />
              </div>
            </div>
            <div className="md:col-span-8">
              <h2 className="font-serif text-3xl text-navy">{leader.name}</h2>
              <p className="mt-2 text-maroon">{leader.title}</p>
              <div className="mt-6 space-y-4 text-[1.05rem] leading-8 text-ink">
                {leader.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
