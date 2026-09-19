import { site } from "@/lib/site";

export function MobileCallBar() {
  return (
    <div className="callbar md:hidden" role="navigation" aria-label="Call SHQ">
      <a
        href={site.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 bg-teal py-3.5 font-display text-[0.78rem] font-bold tracking-[0.14em] text-navy-ink"
      >
        Call {site.phoneDisplay}
      </a>
      <a
        href={`mailto:${site.email}`}
        className="flex flex-1 items-center justify-center gap-2 bg-navy py-3.5 font-display text-[0.78rem] font-bold tracking-[0.14em] text-white"
      >
        Email SHQ
      </a>
    </div>
  );
}
