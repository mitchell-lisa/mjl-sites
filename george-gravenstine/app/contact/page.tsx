import type { Metadata } from 'next';
import site from '@/site.config';
import Closing from '../components/Closing';

export const metadata: Metadata = {
  title: 'Contact and directions',
  description:
    'George Gravenstine Agency, 119 N Church Street, Moorestown, NJ 08057. Open Monday to Friday, 9am to 5pm. Call 609-430-8275.'
};

export default function Page() {
  const o = site.office;
  const address = `${o.street}, ${o.town}, ${o.state} ${o.zip}`;
  return (
    <>
      <section className="mx-auto max-w-measure px-5 pt-10 pb-8">
        <h1 className="font-display text-[1.7rem] sm:text-[2.15rem] leading-[1.12] font-bold text-ink m-0">
          The office.
        </h1>
        <dl className="m-0 mt-6 text-[0.97rem]">
          <div className="flex gap-4 border-b border-rail py-3">
            <dt className="w-24 shrink-0 text-mute">Address</dt>
            <dd className="m-0">{address}</dd>
          </div>
          {o.hours ? (
            <div className="flex gap-4 border-b border-rail py-3">
              <dt className="w-24 shrink-0 text-mute">Hours</dt>
              <dd className="m-0">{o.hours}</dd>
            </div>
          ) : null}
          <div className="flex gap-4 border-b border-rail py-3">
            <dt className="w-24 shrink-0 text-mute">Phone</dt>
            <dd className="m-0">
              <a href={o.phoneHref} className="text-blue underline">
                {o.phone}
              </a>
            </dd>
          </div>
          <div className="flex gap-4 border-b border-rail py-3">
            <dt className="w-24 shrink-0 text-mute">Text</dt>
            <dd className="m-0">
              {o.textNumbers.map((t, i) => (
                <span key={t}>
                  {i > 0 ? ' or ' : ''}
                  <a href={`sms:+1${t.replace(/[^0-9]/g, '')}`} className="text-blue underline">
                    {t}
                  </a>
                </span>
              ))}
            </dd>
          </div>
          <div className="flex gap-4 border-b border-rail py-3">
            <dt className="w-24 shrink-0 text-mute">Email</dt>
            <dd className="m-0">
              <a href={`mailto:${o.email}`} className="text-blue underline">
                {o.email}
              </a>
            </dd>
          </div>
          <div className="flex gap-4 border-b border-rail py-3">
            <dt className="w-24 shrink-0 text-mute">Clients</dt>
            <dd className="m-0">
              <a href={site.clientCenterUrl} className="text-blue underline" rel="noopener">
                Client Center
              </a>
            </dd>
          </div>
        </dl>
        <p className="mt-5 text-[0.97rem] text-ink/85 max-w-[46ch]">
          You can text us at {o.textNumbers[0]} or {o.textNumbers[1]} if that is
          easier than calling.
        </p>
        <p className="mt-4 text-[0.95rem]">
          <a href={o.directionsUrl} className="text-blue underline" rel="noopener">
            Directions to {o.street}
          </a>
        </p>
        <iframe
          src={o.mapEmbedUrl}
          title={`Map of ${address}`}
          loading="lazy"
          className="mt-4 block w-full h-[320px] border border-rail"
        />
      </section>

      <Closing />
    </>
  );
}
