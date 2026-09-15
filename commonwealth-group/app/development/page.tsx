import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { developmentCopy } from "@/lib/services";

export const metadata: Metadata = {
  title: "Development",
};

export default function DevelopmentPage() {
  return (
    <article className="bg-white">
      <div className="site-grid grid gap-12 py-14 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-12">
          <PageHeader title={developmentCopy.title}>
            <p className="mt-6 max-w-3xl text-[1.1rem] leading-8 text-ink">
              {developmentCopy.intro}
            </p>
          </PageHeader>
        </div>
        <div className="space-y-5 text-[1.05rem] leading-8 text-ink lg:col-span-7">
          {developmentCopy.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <aside className="lg:col-span-5">
          <h2 className="font-serif text-2xl text-navy">
            {developmentCopy.itemsTitle}
          </h2>
          <ul className="mt-6 space-y-3">
            {developmentCopy.items.map((item) => (
              <li key={item} className="border-b border-navy/10 pb-3 leading-7">
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </article>
  );
}
