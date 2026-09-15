import type { Metadata } from "next";
import { clients } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Clients",
};

export default function ClientsPage() {
  return (
    <section className="bg-ivory">
      <div className="site-grid py-14 md:py-20">
        <div className="max-w-3xl">
          <h1 className="font-serif text-4xl text-navy md:text-5xl">Our Clients</h1>
          <p className="mt-6 text-[1.08rem] leading-8 text-ink">
            The Commonwealth Group prides itself on being a client oriented
            business. Throughout its history the firm has partnered with or
            provided services for hundreds of companies, including those named
            on the current site.
          </p>
          <p className="mt-4 leading-8 text-muted">
            We are proud to support businesses in and around the tri-state area
            as well as our newest business ventures in the Mid-West. The live
            clients page does not publish logos.
          </p>
        </div>
        <ol className="mt-14 columns-1 gap-x-16 sm:columns-2 lg:columns-3">
          {clients.map((client, index) => (
            <li
              key={client}
              className="mb-4 break-inside-avoid border-t border-navy/15 pt-3 font-serif text-xl text-navy"
            >
              <span className="mr-3 text-sm text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              {client}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
