import type { Metadata } from "next";
import Link from "next/link";
import { acquisitionsCopy } from "@/lib/services";

export const metadata: Metadata = {
  title: "Acquisitions and Disposition",
};

export default function AcquisitionsDispositionPage() {
  return (
    <article className="bg-paper">
      <div className="site-grid py-14 md:py-20">
        <p className="text-sm text-muted">
          <Link href="/management" className="hover:text-navy">
            Management
          </Link>
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl text-navy md:text-5xl">
          {acquisitionsCopy.title}
        </h1>
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
