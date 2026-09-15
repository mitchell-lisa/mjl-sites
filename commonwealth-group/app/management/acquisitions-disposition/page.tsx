import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { acquisitionsCopy } from "@/lib/services";

export const metadata: Metadata = {
  title: "Acquisitions and Disposition",
};

export default function AcquisitionsDispositionPage() {
  return (
    <article className="bg-paper">
      <div className="site-grid py-14 md:py-20">
        <PageHeader
          kicker={
            <Link href="/management" className="hover:text-navy">
              Management
            </Link>
          }
          title={acquisitionsCopy.title}
        />
        <div className="mt-8 max-w-3xl space-y-5 text-[1.08rem] leading-8 text-ink">
          <p>{acquisitionsCopy.intro}</p>
          {acquisitionsCopy.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ol className="mt-12 max-w-xl space-y-4">
          {acquisitionsCopy.items.map((item, index) => (
            <li key={item} className="flex gap-5">
              <span className="font-serif text-2xl text-maroon">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="pt-1 leading-7">{item}</span>
            </li>
          ))}
        </ol>
      </div>
    </article>
  );
}
