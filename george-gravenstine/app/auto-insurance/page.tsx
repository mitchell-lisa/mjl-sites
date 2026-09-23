import type { Metadata } from 'next';
import Link from 'next/link';
import site from '@/site.config';
import Closing from '../components/Closing';

export const metadata: Metadata = {
  title: 'Auto insurance in Moorestown, NJ',
  description:
    'Car insurance quoted across several companies at once by an independent agency at 119 N Church Street, Moorestown, New Jersey.'
};

export default function Page() {
  return (
    <>
      <section className="mx-auto max-w-measure px-5 pt-10 pb-10">
        <h1 className="font-display text-[1.7rem] sm:text-[2.15rem] leading-[1.12] font-bold text-ink m-0">
          Auto insurance in Moorestown, New Jersey.
        </h1>
        <p className="mt-5 text-[1rem] leading-relaxed text-ink/90 max-w-[46ch]">
          The agency is independent, so your car is not quoted by one company and
          sold to you off one shelf. Comparative quotes come from{' '}
          {site.carriers[0]}, {site.carriers[1]}, {site.carriers[2]} and{' '}
          {site.carriers[3]}, in {site.serviceArea}.
        </p>
        <p className="mt-4 text-[1rem] leading-relaxed text-ink/90 max-w-[46ch]">
          The comparison can be run here, or by the office with you on the
          phone. {site.quote.minutes}
        </p>
        <p className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a
            href={site.quote.autoUrl}
            className="bg-blue text-white text-[15px] font-medium px-5 py-3 hover:bg-bluedeep"
          >
            Quote my car
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
          Policies, ID cards, documents and contact changes are in the{' '}
          <a href={site.clientCenterUrl} className="text-blue underline" rel="noopener">
            Client Center
          </a>
          , which is open whether or not the office is. For anything it will not
          do, call {site.office.phone}.
        </p>
        <p className="mt-4 text-[0.95rem]">
          <Link href="/home-insurance" className="text-blue underline">
            Home insurance
          </Link>{' '}
          runs the same way, and the two are usually quoted together.
        </p>
      </section>

      <Closing />
    </>
  );
}
