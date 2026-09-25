import type { Metadata } from 'next';
import site, { pageUrl } from '@/site.config';
import Closing from '../components/Closing';
import Portrait from '../components/Portrait';

export const metadata: Metadata = {
  title: 'Our team',
  description:
    'The three people at the George Gravenstine Agency in Moorestown, New Jersey, and how to reach each of them directly.',
  alternates: { canonical: pageUrl('/team') },
  openGraph: { url: pageUrl('/team') }
};

export default function Page() {
  return (
    <>
      <section className="mx-auto max-w-measure px-5 pt-10 pb-10">
        <h1 className="font-display text-[1.7rem] sm:text-[2.15rem] leading-[1.12] font-bold text-ink m-0">
          Our team.
        </h1>
        <p className="mt-5 text-[1rem] leading-relaxed text-ink/90 max-w-[46ch]">
          Three people, one office, one number. Each of them can be reached
          directly.
        </p>
      </section>

      <section className="mx-auto max-w-measure px-5 pb-12">
        <dl className="m-0">
          {site.people.map((p) => (
            <div key={p.email} className="border-t border-rail py-6 flex gap-5">
              <Portrait person={p} className="w-20 h-20 sm:w-28 sm:h-28" initialsClass="text-[1.5rem]" />
              <div className="min-w-0">
              <dt className="font-display text-[1.3rem] font-semibold text-ink">
                {p.name}
                {p.name === site.owner.name && site.owner.designation ? (
                  <span className="font-body text-[0.8rem] font-normal text-mute">
                    {' '}
                    {site.owner.designation}
                  </span>
                ) : null}
              </dt>
              <dd className="m-0 mt-1 text-[0.9rem] text-mute">{p.role}</dd>
              <dd className="m-0 mt-2 text-[0.85rem] sm:text-[0.95rem]">
                <a href={`mailto:${p.email}`} className="text-blue underline">
                  {p.email}
                </a>
                {p.phone ? (
                  <>
                    {' '}
                    <span className="text-mute">or</span>{' '}
                    <a href={site.office.phoneHref} className="text-blue underline">
                      {p.phone}
                    </a>
                  </>
                ) : null}
              </dd>
              </div>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-[0.95rem] text-ink/85 max-w-[46ch]">
          The office is at {site.office.street} in {site.office.town} and is open{' '}
          {site.office.hours}. You can text us at {site.office.textNumbers[0]} or{' '}
          {site.office.textNumbers[1]}.
        </p>
      </section>

      <Closing />
    </>
  );
}
