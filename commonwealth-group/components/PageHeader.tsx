import type { ReactNode } from "react";

type PageHeaderProps = {
  kicker?: ReactNode;
  title: string;
  children?: ReactNode;
};

export function PageHeader({ kicker, title, children }: PageHeaderProps) {
  return (
    <header>
      <div className="h-px w-10 bg-maroon" aria-hidden="true" />
      {kicker ? <p className="mt-5 eyebrow">{kicker}</p> : null}
      <h1
        className={`${kicker ? "mt-3" : "mt-5"} max-w-3xl font-serif text-[2.35rem] leading-[1.08] text-navy md:text-[3.15rem]`}
      >
        {title}
      </h1>
      {children}
    </header>
  );
}
