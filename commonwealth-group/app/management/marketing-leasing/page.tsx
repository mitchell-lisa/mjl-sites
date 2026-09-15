import type { Metadata } from "next";
import Link from "next/link";
import { marketingLeasingCopy } from "@/lib/services";

export const metadata: Metadata = {
  title: "Marketing and Leasing",
};

export default function MarketingLeasingPage() {
  return (
    <article className="bg-white">
      <div className="site-grid py-14 md:py-20">
        <p className="text-sm text-muted">
          <Link href="/management" className="hover:text-navy">
            Management
          </Link>
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl text-navy md:text-5xl">
          {marketingLeasingCopy.title}
        </h1>
        <div className="mt-8 max-w-3xl space-y-5 text-[1.08rem] leading-8 text-ink">
          <p>{marketingLeasingCopy.intro}</p>
          {marketingLeasingCopy.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <ul className="mt-12 grid max-w-3xl gap-3 sm:grid-cols-2">
          {marketingLeasingCopy.items.map((item) => (
            <li key={item} className="border-l-2 border-maroon pl-4 leading-7">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
