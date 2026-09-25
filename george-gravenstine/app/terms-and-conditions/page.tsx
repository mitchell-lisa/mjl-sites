import type { Metadata } from 'next';
import { pageUrl } from '@/site.config';
import Closing from '../components/Closing';
import { LegalList, LegalSection, LegalTitle } from '../components/Legal';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'SMS Terms & Conditions for George Insurance Agency.',
  alternates: { canonical: pageUrl('/terms-and-conditions') },
  openGraph: { url: pageUrl('/terms-and-conditions') }
};

export default function Page() {
  return (
    <>
      <article className="mx-auto max-w-measure px-5 pt-10 pb-12">
        <LegalTitle>Terms &amp; Conditions</LegalTitle>

        <LegalSection title="SMS Terms & Conditions">
          <p className="m-0">
            By providing your mobile phone number and opting in to receive text messages
            from George Insurance Agency, you agree to receive SMS messages regarding your
            insurance policies, claims, appointments, quotes, customer service, and other
            requested communications.
          </p>
          <p className="m-0">
            The information (Phone Numbers) obtained as part of the SMS consent process will
            not be shared with third parties for marketing purposes.
          </p>
        </LegalSection>

        <LegalSection title="Types of SMS messages">
          <p className="m-0">
            If you opt in to receive text messages from George Insurance Agency, we may send
            you messages regarding:
          </p>
          <LegalList
            items={[
              'Insurance quotes',
              'Policy updates',
              'Claims assistance',
              'Appointment reminders',
              'Requests for documents or photos',
              'Customer service communications'
            ]}
          />
        </LegalSection>

        <LegalSection title="Opt in method">
          <p className="m-0">
            You may opt in to receive SMS messages from George Insurance Agency by filling
            out a website form or verbally through a conversation.
          </p>
          <p className="m-0">
            <strong>Message frequency may vary</strong> based on your interactions with our
            agency.
          </p>
          <p className="m-0">
            <strong>Message and data rates may apply</strong> depending on your mobile
            carrier.
          </p>
          <p className="m-0">
            You may opt out at any time by replying <strong>STOP</strong> to any message.
          </p>
          <p className="m-0">
            For assistance, reply <strong>HELP</strong> or contact George Insurance Agency
            directly.
          </p>
        </LegalSection>
      </article>
      <Closing />
    </>
  );
}
