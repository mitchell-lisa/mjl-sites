import type { Metadata } from 'next';
import Closing from '../components/Closing';
import { AgencyContact, LegalList, LegalSection, LegalTitle, MailingAddress } from '../components/Legal';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy Policy of George Insurance Agency LLC, effective September 1, 2026.'
};

export default function Page() {
  return (
    <>
      <article className="mx-auto max-w-measure px-5 pt-10 pb-12">
        <LegalTitle>Privacy Policy</LegalTitle>
        <p className="mt-5 text-[0.97rem] leading-relaxed text-ink/90 max-w-[65ch]">
          <strong>Effective Date: September 1, 2026</strong>
        </p>
        <p className="mt-4 text-[0.97rem] leading-relaxed text-ink/90 max-w-[65ch]">
          George Insurance Agency LLC (“we,” “us,” or “our”) respects your privacy and is
          committed to protecting the personal information you provide to us. This Privacy
          Policy explains what information we collect, how we collect and use it, how we
          protect and retain it, and how you can contact us regarding your information.
        </p>

        <LegalSection title="1. Personal Information We Collect">
          <p className="m-0">
            Depending on the services you request or the insurance applications we process,
            we may collect personal information including:
          </p>
          <LegalList
            items={[
              'Name',
              'Mailing address',
              'Telephone number',
              'Email address',
              'Banking and financial information',
              'Credit card information',
              'Driver’s license information',
              'Date of birth',
              'Federal identification numbers',
              'Social Security numbers',
              'Insurance-related information',
              'Other information necessary to provide insurance-related services'
            ]}
          />
          <p className="m-0">
            We collect only information that is reasonably necessary for our business and
            insurance-related services.
          </p>
        </LegalSection>

        <LegalSection title="2. How We Collect Personal Information">
          <p className="m-0">
            We may collect personal information directly from you through various
            communication methods, including:
          </p>
          <LegalList
            items={[
              'Telephone calls',
              'Email',
              'Text/SMS messages',
              'Written correspondence',
              'Information provided as part of an insurance application or quote'
            ]}
          />
        </LegalSection>

        <LegalSection title="3. How We Use Personal Information">
          <p className="m-0">
            We use the information we collect primarily to provide insurance-related
            services, including:
          </p>
          <LegalList
            items={[
              'Obtaining insurance quotes and ratings',
              'Applying for insurance coverage',
              'Communicating with customers regarding insurance services',
              'Processing and servicing insurance applications and policies',
              'Responding to customer questions and requests',
              'Performing other activities necessary to provide our services'
            ]}
          />
        </LegalSection>

        <LegalSection title="4. How We Store and Protect Personal Information">
          <p className="m-0">
            Customer information may be stored electronically in our Microsoft Outlook email
            system and within the EZLynx insurance management system.
          </p>
          <p className="m-0">
            We take reasonable administrative, technical, and organizational measures to
            protect personal information against unauthorized access, use, disclosure,
            alteration, or destruction. Access to customer information is limited to
            individuals who require the information to perform their job responsibilities or
            provide our services.
          </p>
          <p className="m-0">
            No method of electronic storage or transmission can be guaranteed to be
            completely secure.
          </p>
        </LegalSection>

        <LegalSection title="5. Information Retention">
          <p className="m-0">
            We may retain customer information indefinitely when necessary for our business
            operations, insurance services, legal obligations, regulatory requirements,
            recordkeeping, or other legitimate business purposes.
          </p>
          <p className="m-0">
            When information is no longer required to be retained, we may securely dispose
            of it in accordance with our applicable policies and legal requirements.
          </p>
        </LegalSection>

        <LegalSection title="6. Access, Correction, or Deletion of Personal Information">
          <p className="m-0">
            Customers may request access to, correction of, or deletion of their personal
            information, when applicable and subject to applicable legal, regulatory, and
            contractual requirements.
          </p>
          <p className="m-0">Requests should be submitted in writing by mail to:</p>
          <p className="m-0">
            <strong>George Insurance Agency LLC</strong>
            <br />
            <MailingAddress />
          </p>
          <p className="m-0">
            We may need to verify your identity before processing a request. Certain
            information may not be eligible for deletion or access where retention or
            disclosure is required or permitted by law, regulation, or our business
            obligations.
          </p>
        </LegalSection>

        <LegalSection title="7. Sharing of Personal Information">
          <p className="m-0">
            We do not sell, rent, or share customer personal information with third parties
            for marketing or promotional purposes.
          </p>
          <p className="m-0">
            Customer information is used only as necessary to provide and administer our
            services, including obtaining insurance quotes, providing ratings, and processing
            insurance applications. We may disclose information when required or permitted by
            applicable law, regulation, legal process, or to protect our rights, customers,
            and services.
          </p>
        </LegalSection>

        <LegalSection title="8. Cookies and Tracking Technologies">
          <p className="m-0">
            Our website may use cookies or similar technologies to support website
            functionality, security, performance, or other website-related purposes.
          </p>
          <p className="m-0">
            The use of cookies and tracking technologies may vary depending on the services
            and features available on our website. We do not currently use information
            collected through cookies for purposes unrelated to operating, maintaining, or
            improving our website unless otherwise disclosed.
          </p>
        </LegalSection>

        <LegalSection title="9. Privacy Questions and Requests">
          <p className="m-0">
            If you have questions about this Privacy Policy or how we handle your personal
            information, you may contact us at:
          </p>
          <AgencyContact />
          <p className="m-0">
            Privacy-related requests may also be submitted in writing by USPS to the mailing
            address listed above.
          </p>
        </LegalSection>

        <LegalSection title="10. SMS/Text Messaging">
          <p className="m-0">
            If you provide your telephone number and consent to receive text messages from
            us, we may use SMS messaging to communicate with you regarding our services,
            including insurance-related communications, customer service, quotes,
            applications, and other information related to your relationship with us.
          </p>
          <p className="m-0">
            <strong>Message and data rates may apply. Message frequency may vary.</strong>
          </p>
          <p className="m-0">
            Providing consent to receive SMS messages is not a condition of purchasing
            insurance or obtaining our services.
          </p>
          <h3 className="font-display text-[1.15rem] font-semibold text-ink m-0">
            How to Opt Out of SMS Messages
          </h3>
          <p className="m-0">
            You may opt out of receiving SMS messages from us at any time by replying{' '}
            <strong>STOP</strong> to a text message you receive from us.
          </p>
          <p className="m-0">
            After you send <strong>STOP</strong>, you may receive a confirmation message that
            you have been unsubscribed. You will no longer receive SMS messages from us
            unless you subsequently provide consent to receive them again.
          </p>
          <p className="m-0">
            If you need assistance with SMS communications, reply <strong>HELP</strong> to a
            message or contact us using the contact information provided in this Privacy
            Policy.
          </p>
          <p className="m-0">
            You may continue to receive non-SMS communications when necessary to provide
            services or as otherwise permitted by law.
          </p>
        </LegalSection>

        <LegalSection title="11. Changes to This Privacy Policy">
          <p className="m-0">
            We may update this Privacy Policy from time to time to reflect changes in our
            business practices, services, technology, or legal and regulatory requirements.
          </p>
          <p className="m-0">
            When changes are made, the updated Privacy Policy will be posted on our website
            with a revised effective date.
          </p>
        </LegalSection>

        <LegalSection title="Contact Us">
          <p className="m-0">
            If you have questions or concerns regarding this Privacy Policy or our handling
            of personal information, please contact:
          </p>
          <AgencyContact />
        </LegalSection>
      </article>
      <Closing />
    </>
  );
}
