import Link from 'next/link';
import site from '@/site.config';

export default function Footer() {
  const o = site.office;
  return (
    <footer className="bg-ink text-white/80 text-[0.85rem]">
      <div className="mx-auto max-w-measure px-5 py-10 grid gap-8 sm:grid-cols-3">
        <div>
          <p className="m-0 text-white font-display text-[1rem] font-semibold">
            {o.legalName}
          </p>
          <p className="m-0 mt-2">
            {o.street}
            <br />
            {o.town}, {o.state} {o.zip}
          </p>
          <p className="m-0 mt-2">
            <a href={o.phoneHref} className="underline">
              {o.phone}
            </a>
            <br />
            <a href={`mailto:${o.email}`} className="underline">
              {o.email}
            </a>
          </p>
          <p className="m-0 mt-2 text-white/70">
            Text {o.textNumbers[0]} or {o.textNumbers[1]}
          </p>
          {o.hours ? <p className="m-0 mt-2 text-white/60">{o.hours}</p> : null}
        </div>

        <div>
          <p className="m-0 text-white/60 text-[0.78rem]">Insurance</p>
          <p className="m-0 mt-2 flex flex-col gap-1">
            <Link href="/auto-insurance" className="underline">Auto</Link>
            <Link href="/home-insurance" className="underline">Home</Link>
            <Link href="/business-insurance" className="underline">Business</Link>
            <Link href="/quote" className="underline">Start a quote</Link>
          </p>
        </div>

        <div>
          <p className="m-0 text-white/60 text-[0.78rem]">Agency</p>
          <p className="m-0 mt-2 flex flex-col gap-1">
            <Link href="/about" className="underline">About</Link>
            <Link href="/team" className="underline">Team</Link>
            <Link href="/contact" className="underline">Contact</Link>
            <Link href="/privacy-policy" className="underline">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="underline">Terms &amp; Conditions</Link>
            <a href={site.clientCenterUrl} className="underline" rel="noopener">
              Client Center
            </a>
            {site.social.map((s) => (
              <a key={s.url} href={s.url} className="underline" rel="noopener">
                {s.label}
              </a>
            ))}
          </p>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto max-w-measure px-5 py-4 text-white/55 text-[0.8rem]">
          Copyright 2026 {o.legalName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
