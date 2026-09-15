import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-rule bg-ink px-4 py-8 text-sm text-paper/70 sm:px-6">
      <div className="mx-auto flex max-w-page flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-semibold text-gold">{site.name}</p>
          <p className="mt-1">{site.address.display}</p>
          <p>
            <a href={site.phoneHref} className="underline">
              {site.phoneDisplay}
            </a>
            {" · "}
            <a href={site.emailHref} className="underline">
              {site.email}
            </a>
          </p>
        </div>
        <p className="max-w-sm text-xs leading-relaxed">
          Preview only. Not the official website. Built by MJL Collective. No
          forms on this preview.
        </p>
      </div>
    </footer>
  );
}
