import type { Metadata } from 'next';
import Link from 'next/link';
import site from '@/site.config';
import Closing from '../components/Closing';

export const metadata: Metadata = {
  title: 'Home insurance in Moorestown, NJ',
  description:
    'Homeowners insurance quoted across several companies at once by an independent agency on Church Street in Moorestown, New Jersey.'
};

export default function Page() {
  return (
    <>
      <section className="mx-auto max-w-measure px-5 pt-10 pb-10">
        <h1 className="font-display text-[1.7rem] sm:text-[2.15rem] leading-[1.12] font-bold text-ink m-0">
          Home insurance in Moorestown, New Jersey.
        </h1>
        <p className="mt-5 text-[1rem] leading-relaxed text-ink/90 max-w-[46ch]">
          Older houses do not price the same way from one company to the next,
          and this town has a great many of them. An independent agency puts the
          property in front of several companies at once rather than one. Comparative quotes come from {site.carriers[0]},{' '}
          {site.carriers[1]}, {site.carriers[2]} and {site.carriers[3]}, in{' '}
          {site.serviceArea}.
        </p>
        <p className="mt-4 text-[1rem] leading-relaxed text-ink/90 max-w-[46ch]">
          The house and the vehicles are usually quoted in the same pass.
        </p>
        <p className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href={site.quote.homeUrl}
            className="bg-blue text-white text-[15px] font-medium px-5 py-3 hover:bg-bluedeep"
          >
            Quote my house
          </a>
          <a href={site.office.phoneHref} className="text-[15px] text-blue underline">
            Or call {site.office.phone}
          </a>
        </p>
      </section>

      <section className="mx-auto max-w-measure px-5 pb-12">
        <h2 className="font-display text-[1.3rem] sm:text-[1.45rem] font-semibold text-ink m-0 pb-2 border-b-2 border-blue tracking-[-0.01em]">
          Once you are a client
        </h2>
        <p className="mt-4 text-[0.97rem] leading-relaxed text-ink/85 max-w-[46ch]">
          Policies, documents and contact changes live in the{' '}
          <a href={site.clientCenterUrl} className="text-blue underline" rel="noopener">
            Client Center
          </a>
          . For anything that needs a person, the office is open{' '}
          {site.office.hours}.
        </p>
        <p className="mt-4 text-[0.95rem]">
          <Link href="/auto-insurance" className="text-blue underline">
            Auto insurance
          </Link>{' '}
          is quoted the same way.
        </p>
      </section>

      <Closing />
    </>
  );
}
