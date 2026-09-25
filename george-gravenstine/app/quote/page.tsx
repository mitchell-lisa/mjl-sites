import type { Metadata } from 'next';
import site, { pageUrl } from '@/site.config';
import Counter from '../components/Counter';
import Closing from '../components/Closing';

export const metadata: Metadata = {
  title: 'Start an insurance quote',
  description:
    'Run a real auto or home insurance quote through the agency own comparative quoting system, or call the office in Moorestown on 609-430-8275.',
  alternates: { canonical: pageUrl('/quote') },
  openGraph: { url: pageUrl('/quote') }
};

export default function Page() {
  return (
    <>
      <section className="mx-auto max-w-measure px-5 pt-10 pb-6">
        <h1 className="font-display text-[1.7rem] sm:text-[2.15rem] leading-[1.12] font-bold text-ink m-0">
          Start a quote.
        </h1>
        <p className="mt-5 text-[1rem] leading-relaxed text-ink/90 max-w-[46ch]">
          This is the agency&apos;s own comparative quoting system rather than a
          lead form, and it runs on this page.{' '}
          {site.quote.minutes}
        </p>
        <p className="mt-4 text-[1rem] leading-relaxed text-ink/90 max-w-[46ch]">
          Auto and home can be quoted in the same pass. Commercial coverage is
          quoted by the office on{' '}
          <a href={site.office.phoneHref} className="text-blue underline">
            {site.office.phone}
          </a>
          .
        </p>
      </section>

      <section className="mx-auto max-w-measure px-5 pb-12">
        <Counter />
        <p className="mt-4 text-[0.92rem] text-mute">
          Already insured here? Policies, ID cards and documents are in the{' '}
          <a href={site.clientCenterUrl} className="text-blue underline" rel="noopener">
            Client Center
          </a>
          . If your login will not work, call the office.
        </p>
      </section>

      <Closing line="The office is open Monday to Friday, 9am to 5pm." />
    </>
  );
}
