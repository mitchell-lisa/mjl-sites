import type { Metadata } from 'next';
import Link from 'next/link';
import site from '@/site.config';
import Closing from '../components/Closing';

export const metadata: Metadata = {
  title: 'About the agency',
  description:
    'George Gravenstine has spent 38 years in property and casualty insurance and most of them in Moorestown. The agency, the record, and what independent means.'
};

export default function Page() {
  return (
    <>
      <section className="mx-auto max-w-measure px-5 pt-10 pb-8">
        <h1 className="font-display text-[1.7rem] sm:text-[2.15rem] leading-[1.12] font-bold text-ink m-0">
          About the agency.
        </h1>
        <p className="mt-5 font-display text-[1.3rem] sm:text-[1.6rem] leading-snug font-semibold text-ink max-w-[32ch]">
          {site.ownWords[0]}
        </p>
        <p className="mt-3 m-0 text-[0.82rem] text-mute">{site.owner.name}, owner</p>
        <p className="mt-6 text-[1rem] leading-relaxed text-ink/90 max-w-[46ch]">
          The agency works from a Victorian house on Church Street, in the center
          of the town it serves. Three people work there, and the name on the door
          is the name on the policy.
        </p>

        {site.office.streetViewEmbedUrl ? (
          <figure className="mt-8 m-0">
            <iframe
              src={site.office.streetViewEmbedUrl}
              title={`Street view of ${site.office.street}, ${site.office.town}`}
              loading="lazy"
              className="block w-full h-[280px] sm:h-[420px] border border-rail"
            />
            <figcaption className="mt-2 text-[0.8rem] text-mute">
              {site.office.street}, the green trimmed house. Street View imagery by
              Google.
            </figcaption>
          </figure>
        ) : null}
      </section>

      <section className="bg-band border-y-2 border-green">
        <div className="mx-auto max-w-measure px-5 py-12">
          <p className="m-0 text-[0.78rem] text-green font-medium">In Moorestown</p>
          <p className="mt-3 font-display text-[1.4rem] sm:text-[1.7rem] leading-snug font-semibold text-ink m-0 max-w-[30ch]">
            {site.ownWords[1]}
          </p>
          <p className="mt-3 m-0 text-[0.82rem] text-mute">{site.owner.name}, owner</p>
          <p className="mt-4 text-[0.97rem] leading-relaxed text-ink/85 max-w-[46ch]">
            Offices held.
          </p>
          <dl className="mt-6 m-0">
            {site.record.map((r) => (
              <div key={r.org} className="border-t border-green/25 py-3">
                <dt className="font-display text-[1.1rem] leading-snug font-semibold text-ink">
                  {r.org}
                </dt>
                <dd className="m-0 text-[0.85rem] text-mute">{r.role}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-measure px-5 py-12">
        <h2 className="font-display text-[1.3rem] sm:text-[1.45rem] font-semibold text-ink m-0 pb-2 border-b-2 border-blue tracking-[-0.01em]">
          What independent means here
        </h2>
        <p className="mt-4 text-[0.97rem] leading-relaxed text-ink/85 max-w-[46ch]">
          A captive agent has one company to sell you. This agency does not. Your
          car or your house is quoted against several at once, and the comparison
          is the product. Quotes come from {site.carriers[0]}, {site.carriers[1]},{' '}
          {site.carriers[2]} and {site.carriers[3]}, in {site.serviceArea}.
        </p>
        <p className="mt-4 text-[0.95rem]">
          <Link href="/team" className="text-blue underline">
            Meet the three people
          </Link>{' '}
          or{' '}
          <Link href="/quote" className="text-blue underline">
            start a quote
          </Link>
          .
        </p>
      </section>

      <Closing />
    </>
  );
}
