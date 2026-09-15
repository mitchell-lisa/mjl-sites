import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/PageHeader";
import { clients } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Clients",
};

export default function ClientsPage() {
  return (
    <section className="bg-ivory">
      <div className="site-grid py-14 md:py-20">
        <PageHeader title="Our Clients">
          <p className="mt-6 text-[1.08rem] leading-8 text-ink">
            The Commonwealth Group prides itself on being a client oriented
            business, looking to accommodate, understand and manage the needs of
            our customers and their services. Throughout The Commonwealth
            Group’s history, we have partnered with or provided services for
            hundreds of companies including American Express, DuPont, Computer
            Science Corporation, Applied Extrusion Technologies, Dade Behring,
            Wesley College, Christiana Care, Chester County Hospital, Penn
            Hospital, Discover Card, AIG, Amtrak, Alstom, McCarter and English,
            Deloitte and the State of Delaware.
          </p>
          <p className="mt-4 leading-8 text-ink">
            We are proud to support businesses in and around the tri-state area
            as well as our newest business ventures in the Mid-West.
          </p>
        </PageHeader>

        <figure className="lockup-frame mt-12 p-4 md:p-8">
          <Image
            src="/images/clients/341.png"
            alt="Client marks published on the Commonwealth Our Clients page, including American Express, DuPont, CSC, Dade Behring, Wesley College, Christiana Care, AIG, Alstom, and McCarter and English"
            width={642}
            height={300}
            className="mx-auto h-auto w-full max-w-4xl"
            unoptimized
            priority
          />
          <figcaption className="mt-4 text-center text-[0.78rem] leading-6 text-muted">
            Marks as published on the live Our Clients page.
          </figcaption>
        </figure>

        <ul className="mt-14 grid gap-x-12 gap-y-0 sm:grid-cols-2 lg:grid-cols-4">
          {clients.map((client) => (
            <li
              key={client}
              className="border-t border-maroon/25 py-4 font-serif text-[1.15rem] leading-snug text-navy"
            >
              {client}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
