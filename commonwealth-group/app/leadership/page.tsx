import type { Metadata } from "next";
import Link from "next/link";
import { leaders } from "@/lib/team";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Leadership",
};

export default function LeadershipPage() {
  return (
    <>
      <section className="bg-navy text-ivory">
        <div className="site-grid py-20 md:py-28">
          <p className="eyebrow text-bronze-bright">Management team</p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl md:text-6xl">
            Principals and operating leadership.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone/88">
            Biographies below follow the published management-team page. No
            portraits were invented for this sample.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="site-grid space-y-6">
          {leaders.map((leader) => (
            <article
              key={leader.slug}
              id={leader.slug}
              className="scroll-mt-32 border border-navy/10 bg-paper p-7 md:p-10"
            >
              <div className="grid gap-8 md:grid-cols-12">
                <div className="md:col-span-4">
                  <span className="grid h-16 w-16 place-items-center border border-bronze/60 font-serif text-2xl text-navy">
                    {leader.initials}
                  </span>
                  <h2 className="mt-5 font-serif text-3xl text-navy">
                    {leader.name}
                  </h2>
                  <p className="mt-2 text-sm tracking-[0.08em] uppercase text-bronze-deep">
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

      <section className="bg-navy-deep py-16 text-ivory">
        <div className="site-grid flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <p className="eyebrow text-bronze-bright">Direct line</p>
            <h2 className="mt-3 font-serif text-3xl md:text-4xl">
              General contact is {site.email}.
            </h2>
          </div>
          <Link href="/contact" className="btn btn-bronze">
            Request information
          </Link>
        </div>
      </section>
    </>
  );
}
