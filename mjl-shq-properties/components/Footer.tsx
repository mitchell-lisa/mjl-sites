import Image from "next/image";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-ink text-white">
      <div className="site-grid grid gap-10 py-14 md:grid-cols-12 md:py-16">
        <div className="md:col-span-5">
          <Image
            src="/brand/logo.png"
            alt={site.legalName}
            width={220}
            height={72}
            className="h-12 w-auto"
          />
          <p className="mt-6 max-w-sm text-[0.98rem] leading-7 text-white/72">
            Family-owned real estate investment and general contracting in{" "}
            {site.region} since {site.founded}.
          </p>
          <p className="mt-6 text-sm leading-7">
            <a className="text-teal hover:underline" href={site.phoneHref}>
              {site.phoneDisplay}
            </a>
            <br />
            <a className="text-teal hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow text-teal">On this preview</p>
          <ul className="mt-4 space-y-3 text-sm text-white/78">
            {nav.map((item) => (
              <li key={item.href}>
                <a className="hover:text-teal" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow text-teal">Follow</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a className="hover:text-teal" href={site.facebook} rel="noreferrer" target="_blank">
                Facebook
              </a>
            </li>
            <li>
              <a className="hover:text-teal" href={site.instagram} rel="noreferrer" target="_blank">
                Instagram
              </a>
            </li>
            <li>
              <a className="hover:text-teal" href={site.youtube} rel="noreferrer" target="_blank">
                YouTube
              </a>
            </li>
            <li>
              <a className="hover:text-teal" href={site.hblUrl} rel="noreferrer" target="_blank">
                {site.hblName}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="site-grid flex flex-col gap-3 py-5 text-[0.72rem] leading-relaxed text-white/55 md:flex-row md:items-center md:justify-between">
          <p>
            {site.previewNotice} Source facts drawn from{" "}
            <a className="underline hover:text-white" href={site.liveSite}>
              shqproperties.com
            </a>
            .
          </p>
          <p>Preview. Noindex. For Mitchell to share with a warm lead.</p>
        </div>
      </div>
    </footer>
  );
}
