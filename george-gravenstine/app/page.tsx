import Link from 'next/link';
import site from '@/site.config';
import Closing from './components/Closing';
import Portrait from './components/Portrait';

export default function Home() {
  const o = site.office;
  return (
    <>
      {/* split opening: the words on the left, the two doors on the right */}
      <section className="mx-auto max-w-measure px-5 pt-10 pb-10">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 sm:items-start">
          <div>
            <h1 className="font-display text-[1.8rem] sm:text-[2.45rem] leading-[1.1] font-bold text-ink m-0">
              Independent auto, home and business insurance in Moorestown.
            </h1>
            <div className="mt-5 h-[3px] w-16 bg-blue" />
            <p className="mt-5 text-[1.02rem] leading-relaxed text-ink/90">
              {site.ownWords[0]}
            </p>
            <p className="mt-3 text-[0.97rem] leading-relaxed text-mute">
              The agency writes personal and commercial coverage in{' '}
              {site.serviceArea}, comparing several companies on every quote, from
              an office on Church Street rather than a call center.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <Link
              href="/quote"
              className="block border-2 border-blue bg-blue text-white px-5 py-5 hover:bg-bluedeep"
            >
              <span className="font-display text-[1.2rem] font-semibold block">
                Personal insurance
              </span>
              <span className="block mt-1 text-[0.9rem] text-white/85">
                Your car and your house, quoted in one pass. Start it here.
              </span>
            </Link>
            <Link
              href="/business-insurance"
              className="block border-2 border-blue px-5 py-5 hover:bg-band"
            >
              <span className="font-display text-[1.2rem] font-semibold block text-ink">
                Business insurance
              </span>
              <span className="block mt-1 text-[0.9rem] text-mute">
                General liability, property, commercial auto and workers&apos;
                compensation.
              </span>
            </Link>
            <p className="m-0 text-[0.9rem] text-mute">
              Or call the office on{' '}
              <a href={o.phoneHref} className="text-blue underline">
                {o.phone}
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* the quote block links out to /quote: the live portal autofocuses its first
          field, which drags the whole page past the opening if it loads here */}
      <section className="mx-auto max-w-measure px-5 pb-12">
        <div className="border-t-2 border-blue bg-band px-5 py-6">
          <h2 className="font-display text-[1.3rem] sm:text-[1.45rem] font-semibold text-ink m-0">
            Quote your car or your house
          </h2>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-ink/85 max-w-[48ch]">
            The agency&apos;s own comparative quoting system, run on this site.{' '}
            {site.quote.minutes}
          </p>
          <p className="mt-4 mb-0 flex flex-wrap gap-3">
            <Link
              href="/quote"
              className="bg-blue text-white text-[15px] font-medium px-5 py-3 hover:bg-bluedeep"
            >
              Start a quote
            </Link>
            <a
              href={site.clientCenterUrl}
              rel="noopener"
              className="border border-blue text-blue text-[15px] font-medium px-5 py-3 hover:bg-white"
            >
              Client Center
            </a>
          </p>
          <p className="mt-4 mb-0 text-[0.9rem] text-mute">
            Existing clients: policies, ID cards and documents are in the Client
            Center. If your login will not work, call the office on {o.phone}.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-measure px-5 pb-12">
        <h2 className="font-display text-[1.35rem] sm:text-[1.5rem] font-semibold text-ink m-0 pb-2 border-b-2 border-blue tracking-[-0.01em]">
          What the agency writes
        </h2>
        <dl className="m-0 sm:grid sm:grid-cols-3 sm:gap-x-8 sm:border-t sm:border-rail">
          {site.lines.map((l, i) => (
            <div key={l.name} className="border-b border-rail py-4 sm:border-b-0 sm:pt-5">
              <dt className="font-display text-[1.2rem] font-semibold text-ink">
                <Link
                  href={
                    ['/auto-insurance', '/home-insurance', '/business-insurance'][i]
                  }
                  className="text-ink hover:text-blue"
                >
                  {l.name}
                </Link>
              </dt>
              <dd className="m-0 mt-1 text-[0.97rem] leading-relaxed text-ink/85">
                {l.blurb}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-[0.97rem] leading-relaxed text-ink/85">
          Being independent means the quote is not written by one company.
          Comparative quotes come from {site.carriers[0]}, {site.carriers[1]},{' '}
          {site.carriers[2]} and {site.carriers[3]}, in {site.serviceArea}.
        </p>
      </section>

      <section className="bg-band border-y-2 border-green">
        <div className="mx-auto max-w-measure px-5 py-12">
          <p className="m-0 text-[0.78rem] text-green font-medium">In Moorestown</p>
          <p className="mt-3 font-display text-[1.4rem] sm:text-[1.7rem] leading-snug font-semibold text-ink m-0 max-w-[30ch]">
            {site.ownWords[1]}
          </p>
          <p className="mt-3 m-0 text-[0.82rem] text-mute">
            {site.owner.name}, owner
          </p>
          <p className="mt-4 text-[0.97rem] leading-relaxed text-ink/85 max-w-[46ch]">
            {site.owner.yearsInTrade} years in property and casualty insurance,
            most of them in this town, and a record of service in it.
          </p>
          <p className="mt-4 text-[0.95rem]">
            <Link href="/about" className="text-blue underline">
              The full record
            </Link>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-measure px-5 py-12">
        <h2 className="font-display text-[1.35rem] sm:text-[1.5rem] font-semibold text-ink m-0 pb-2 border-b-2 border-blue tracking-[-0.01em]">
          The people in the office
        </h2>
        <dl className="m-0">
          {site.people.map((p) => (
            <div
              key={p.email}
              className="border-b border-rail py-4 flex items-center gap-4"
            >
              <Portrait person={p} className="w-14 h-14 sm:w-16 sm:h-16" initialsClass="text-[1rem]" />
              <div className="min-w-0 flex-1 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <dt className="font-display text-[1.15rem] font-semibold text-ink">
                  {p.name}
                  <span className="block font-body text-[0.85rem] font-normal text-mute">
                    {p.role}
                  </span>
                </dt>
                <dd className="m-0 text-[0.9rem]">
                  <a href={`mailto:${p.email}`} className="text-blue underline">
                    {p.email}
                  </a>
                </dd>
              </div>
            </div>
          ))}
        </dl>
        <p className="mt-4 text-[0.92rem] text-mute">
          Three people in one office. The person who answers the phone is the
          person who handles the policy.{' '}
          <Link href="/team" className="text-blue underline">
            More about the team
          </Link>
        </p>
      </section>

      <Closing />
    </>
  );
}
