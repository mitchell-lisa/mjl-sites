import Link from 'next/link';
import site from '@/site.config';

export default function Closing({ line }: { line?: string }) {
  const o = site.office;
  return (
    <section className="bg-blue text-white on-blue">
      <div className="mx-auto max-w-measure px-5 py-10">
        <p className="m-0 text-[0.9rem] text-white/85">
          {line ?? `The office is open ${o.hours}.`}
        </p>
        <p className="m-0 mt-2">
          <a
            href={o.phoneHref}
            className="font-display text-[2rem] sm:text-[2.6rem] leading-none font-bold text-white no-underline"
          >
            {o.phone}
          </a>
        </p>
        <p className="m-0 mt-3 text-[0.95rem] text-white/90">
          You can also text us at{' '}
          <a href={`sms:+1${o.textNumbers[0].replace(/[^0-9]/g, '')}`} className="text-white underline">
            {o.textNumbers[0]}
          </a>{' '}
          or{' '}
          <a href={`sms:+1${o.textNumbers[1].replace(/[^0-9]/g, '')}`} className="text-white underline">
            {o.textNumbers[1]}
          </a>
          .
        </p>
        <p className="m-0 mt-3 text-[0.95rem]">
          <Link href="/quote" className="text-white underline">
            Or start a quote online
          </Link>
        </p>
      </div>
    </section>
  );
}
