import type { Metadata } from "next";
import { ContactCta } from "@/components/ContactCta";
import { PageIntro } from "@/components/PageIntro";
import { clients } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Clients",
};

export default function ClientsPage() {
  return (
    <>
      <PageIntro eyebrow="Relationships" title="Our Clients">
        <p>
          The Commonwealth Group prides itself on being a client oriented
          business, looking to accommodate, understand and manage the needs of
          our customers and their services. Throughout The Commonwealth Group’s
          history, we have partnered with or provided services for hundreds of
          companies.
        </p>
        <p>
          We are proud to support businesses in and around the tri-state area as
          well as our newest business ventures in the Mid-West.
        </p>
      </PageIntro>

      <section className="py-16 md:py-20">
        <div className="site-grid">
          <p className="eyebrow">Named on the current site</p>
          <p className="mt-3 max-w-2xl leading-7 text-muted">
            Client names are published on commonwealthltd.net/clients/. The live
            page does not publish logos, so this sample does not invent them.
          </p>
          <ul className="mt-10 grid gap-px border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-4">
            {clients.map((client) => (
              <li
                key={client}
                className="bg-paper px-5 py-6 text-[1.02rem] leading-7 text-navy"
              >
                {client}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactCta title="Interested in learning more about our development and property management services?" />
    </>
  );
}
