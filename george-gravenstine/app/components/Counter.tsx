"use client";

import { useState } from 'react';
import Link from 'next/link';
import site from '@/site.config';

// The comparative quoting portal and mobile quote actions remain unavailable
// until the visitor has acknowledged the agency SMS disclosure.
export default function Counter() {
  const [smsConsent, setSmsConsent] = useState(false);

  return (
    <div className="border-2 border-blue">
      <h2 className="bg-blue text-white font-display text-[1.15rem] font-semibold m-0 px-4 py-3">
        Quote your car or your house
      </h2>

      <div className="px-4 py-4">
        <p className="text-[0.95rem] leading-relaxed text-ink/90 m-0">
          The agency&apos;s own comparative quoting system. {site.quote.minutes}
        </p>

        <label className="mt-4 flex items-start gap-3 text-[0.9rem] leading-relaxed text-ink/90">
          <input
            type="checkbox"
            name="sms_consent"
            required
            checked={smsConsent}
            onChange={(event) => setSmsConsent(event.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 accent-blue"
          />
          <span>
            By checking this box, you agree to receive SMS messages from George
            Insurance Agency related to marketing and customer care. You may reply
            STOP to opt out at any time. Reply to HELP to 609-304-0031 for
            assistance. Messages and data rates may apply. Message frequency will
            vary.
            <br />
            Learn more on our{' '}
            <Link href="/privacy-policy" className="text-blue underline">Privacy Policy</Link>{' '}
            Page and{' '}
            <Link href="/terms-and-conditions" className="text-blue underline">Terms &amp; Conditions</Link>.
          </span>
        </label>

        {smsConsent ? (
          <>
            <div className="mt-4 flex flex-col sm:hidden gap-3">
              <a
                href={site.quote.autoUrl}
                className="block bg-blue text-white text-center text-[15px] font-medium px-5 py-3.5"
              >
                Quote my car
              </a>
              <a
                href={site.quote.homeUrl}
                className="block border border-blue text-blue text-center text-[15px] font-medium px-5 py-3.5"
              >
                Quote my house
              </a>
              <p className="m-0 text-[0.85rem] text-mute">
                Or call the office on{' '}
                <a href={site.office.phoneHref} className="text-blue underline">
                  {site.office.phone}
                </a>{' '}
                and it can be run with you on the phone.
              </p>
            </div>

            <p className="mt-4 mb-0 hidden sm:flex flex-wrap gap-x-5 gap-y-2 text-[0.9rem]">
              <a href={site.quote.autoUrl} className="text-blue underline">
                Open the auto form on its own
              </a>
              <a href={site.quote.homeUrl} className="text-blue underline">
                Open the home form on its own
              </a>
            </p>

            <iframe
              src={site.quote.url}
              title="Insurance quoting portal, George Gravenstine Agency"
              loading="lazy"
              className="mt-4 hidden sm:block w-full h-[760px] border-0 border-t border-rail"
            />
          </>
        ) : (
          <p className="mt-4 mb-0 text-[0.9rem] text-mute">
            Check the box above to access the quote options.
          </p>
        )}
      </div>
    </div>
  );
}
