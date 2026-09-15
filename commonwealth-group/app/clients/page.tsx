import type { Metadata } from "next";
import { ClientMark } from "@/components/ClientMark";
import { PageHeader } from "@/components/PageHeader";
import { clientMarks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Clients",
};

export default function ClientsPage() {
  const marquee = [...clientMarks, ...clientMarks];

  return (
    <section className="bg-ivory">
      <div className="site-grid py-14 md:py-20">
        <PageHeader title="Our Clients">
          <p className="mt-6 max-w-3xl text-[1.08rem] leading-8 text-ink">
            The Commonwealth Group is a client oriented business. Throughout our
            history we have partnered with or provided services for hundreds of
            companies in the Mid-Atlantic and the Mid-West.
          </p>
        </PageHeader>
      </div>

      <div className="client-marquee" aria-hidden="true">
        <div className="client-marquee-track">
          {marquee.map((client, index) => (
            <ClientMark
              key={`${client.name}-${index}`}
              client={{ ...client, href: undefined }}
              compact
            />
          ))}
        </div>
      </div>

      <div className="site-grid pb-16 pt-10 md:pb-24 md:pt-14">
        <ul className="client-logo-grid">
          {clientMarks.map((client) => (
            <li key={client.name}>
              <ClientMark client={client} />
            </li>
          ))}
        </ul>
        <p className="mt-6 text-center text-[0.78rem] leading-6 text-muted">
          Marks as published on the live Our Clients page.
        </p>
      </div>
    </section>
  );
}
