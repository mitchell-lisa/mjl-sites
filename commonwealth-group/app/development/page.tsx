import type { Metadata } from "next";
import { developmentCopy } from "@/lib/services";

export const metadata: Metadata = {
  title: "Development",
};

export default function DevelopmentPage() {
  return (
    <article className="bg-white">
      <div className="site-grid grid gap-12 py-14 lg:grid-cols-12 lg:py-20">
        <header className="border-l-4 border-maroon pl-6 lg:col-span-12 md:pl-8">
          <h1 className="font-serif text-4xl text-navy md:text-5xl">
            {developmentCopy.title}
          </h1>
          <p className="mt-6 max-w-3xl text-[1.1rem] leading-8 text-ink">
            {developmentCopy.intro}
          </p>
        </header>
        <div className="space-y-5 text-[1.05rem] leading-8 text-ink lg:col-span-7">
          {developmentCopy.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <aside className="lg:col-span-5">
          <h2 className="font-serif text-2xl text-navy">
            {developmentCopy.itemsTitle}
          </h2>
          <ol className="mt-6 space-y-3">
            {developmentCopy.items.map((item, index) => (
              <li key={item} className="flex gap-4 border-b border-navy/10 pb-3">
                <span className="w-8 shrink-0 font-serif text-maroon">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="leading-7">{item}</span>
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </article>
  );
}
