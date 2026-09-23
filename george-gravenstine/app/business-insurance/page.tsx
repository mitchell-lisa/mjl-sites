import type { Metadata } from 'next';
import site from '@/site.config';
import Closing from '../components/Closing';

export const metadata: Metadata = {
  title: 'Business insurance in Moorestown, NJ',
  description:
    'General liability, property, commercial auto and workers compensation for locally owned businesses, from an independent agency in Moorestown, New Jersey.'
};

export default function Page() {
  return (
    <>
      <section className="mx-auto max-w-measure px-5 pt-10 pb-10">
        <h1 className="font-display text-[1.7rem] sm:text-[2.15rem] leading-[1.12] font-bold text-ink m-0">
          Business insurance for locally owned companies.
        </h1>
        <p className="mt-5 font-display text-[1.25rem] sm:text-[1.5rem] leading-snug font-semibold text-ink m-0 max-w-[34ch]">
          {site.ownWords[0]}
        </p>
        <p className="mt-3 m-0 text-[0.82rem] text-mute">
          {site.owner.name}, owner
        </p>
        <p className="mt-5 text-[1rem] leading-relaxed text-ink/90 max-w-[46ch]">
          Commercial work is the part of that career the agency has done longest.
        </p>
        <p className="mt-4 text-[1rem] leading-relaxed text-ink/90 max-w-[46ch]">
          Commercial coverage depends on what a business actually does, so it
          begins with a conversation rather than a form.
        </p>
      </section>

      <section className="mx-auto max-w-measure px-5 pb-12">
        <h2 className="font-display text-[1.3rem] sm:text-[1.45rem] font-semibold text-ink m-0 pb-2 border-b-2 border-blue tracking-[-0.01em]">
          What the agency writes on the commercial side
        </h2>
        <ul className="mt-4 m-0 p-0 list-none">
          {site.commercial.map((c) => (
            <li
              key={c}
              className="border-b border-rail py-3 font-display text-[1.1rem] font-semibold text-ink"
            >
              {c}
            </li>
          ))}
        </ul>
        <p className="mt-5 text-[0.97rem] leading-relaxed text-ink/85 max-w-[46ch]">
          Written in {site.serviceArea}. Call the office on{' '}
          <a href={site.office.phoneHref} className="text-blue underline">
            {site.office.phone}
          </a>{' '}
          or email{' '}
          <a href={`mailto:${site.office.email}`} className="text-blue underline">
            {site.office.email}
          </a>
          .
        </p>
      </section>

      <Closing line="Commercial coverage starts with a conversation." />
    </>
  );
}
