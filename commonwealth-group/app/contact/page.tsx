import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-navy/10 bg-ivory">
        <div className="site-grid py-12 md:py-16">
          <p className="eyebrow">Wilmington office</p>
          <h1 className="mt-3 max-w-3xl font-serif text-3xl text-navy md:text-5xl">
            Request information
          </h1>
          <p className="mt-4 max-w-2xl leading-7 text-muted">
            Email {site.email} or call {site.phoneDisplay}.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="site-grid grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">The Commonwealth Group, LLC</p>
            <h2 className="mt-3 font-serif text-3xl text-navy">
              {site.address.line1}
              <br />
              {site.address.line2}
            </h2>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="eyebrow">Telephone</dt>
                <dd className="mt-2">
                  <a
                    className="font-serif text-3xl text-navy hover:text-maroon"
                    href={site.phoneHref}
                  >
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Email</dt>
                <dd className="mt-2">
                  <a
                    className="text-lg text-navy underline decoration-maroon/40 underline-offset-4 hover:decoration-maroon"
                    href={`mailto:${site.email}`}
                  >
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Headquarters</dt>
                <dd className="mt-2 leading-7 text-muted">
                  The Commonwealth Building
                  <br />
                  Historic Harlan and Hollingsworth headquarters
                  <br />
                  Wilmington Riverfront
                </dd>
              </div>
            </dl>
          </div>
          <div className="lg:col-span-7 border border-navy/10 bg-paper p-6 md:p-8">
            <p className="eyebrow">Write the team</p>
            <h2 className="mt-3 mb-8 font-serif text-3xl text-navy">
              Tell us about the assignment.
            </h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
