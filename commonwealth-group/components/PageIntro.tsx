import type { ReactNode } from "react";

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-navy/10 bg-ivory">
      <div className="site-grid py-12 md:py-16">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-serif text-3xl text-navy md:text-5xl">
          {title}
        </h1>
        {children ? (
          <div className="mt-4 max-w-2xl space-y-4 leading-7 text-muted">
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}
