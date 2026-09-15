import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <section className="bg-white">
      <div className="site-grid grid gap-16 py-14 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-5">
          <h1 className="font-serif text-4xl text-navy md:text-5xl">Contact</h1>
          <p className="mt-6 font-serif text-3xl leading-snug text-navy">
            {site.address.line1}
            <br />
            {site.address.line2}
          </p>
          <p className="mt-8">
            <a
              className="font-serif text-3xl text-navy hover:text-maroon"
              href={site.phoneHref}
            >
              {site.phoneDisplay}
            </a>
          </p>
          <p className="mt-3">
            <a
              className="text-lg text-maroon hover:underline"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </p>
          <p className="mt-8 max-w-sm leading-7 text-muted">
            The Commonwealth Building. Historic Harlan and Hollingsworth
            headquarters on the Wilmington Riverfront.
          </p>
        </div>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
