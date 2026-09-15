import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { managementCopy } from "@/lib/services";

export const metadata: Metadata = {
  title: "Management",
};

export default function ManagementPage() {
  return (
    <article className="bg-ivory">
      <div className="site-grid py-14 md:py-20">
        <PageHeader title={managementCopy.title} />
        <div className="mt-8 max-w-3xl space-y-5 text-[1.08rem] leading-8 text-ink">
          <p>{managementCopy.intro}</p>
          {managementCopy.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <h2 className="mt-14 font-serif text-2xl text-navy">
          {managementCopy.itemsTitle}
        </h2>
        <ul className="mt-6 grid gap-x-12 gap-y-3 sm:grid-cols-2">
          {managementCopy.items.map((item) => (
            <li key={item} className="leading-7 text-ink">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-maroon">
          <Link href="/management/marketing-leasing" className="hover:underline">
            Marketing and Leasing
          </Link>
          <Link
            href="/management/acquisitions-disposition"
            className="hover:underline"
          >
            Acquisitions and Disposition
          </Link>
        </p>
      </div>
    </article>
  );
}
