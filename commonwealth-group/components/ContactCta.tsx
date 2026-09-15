import Link from "next/link";
import { site } from "@/lib/site";

export function ContactCta({
  title = "For more information",
  note,
}: {
  title?: string;
  note?: string;
}) {
  return (
    <section className="border-t border-navy/10 bg-ivory py-12 md:py-16">
      <div className="site-grid">
        <p className="eyebrow">Contact</p>
        <h2 className="mt-2 max-w-xl font-serif text-2xl text-navy md:text-3xl">
          {title}
        </h2>
        <p className="mt-3 max-w-xl leading-7 text-muted">
          {note ??
            `Email ${site.email} or call the Wilmington office.`}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link href="/contact" className="btn btn-maroon">
            Request information
          </Link>
          <a
            href={site.phoneHref}
            className="text-[0.95rem] text-navy hover:text-maroon"
          >
            {site.phoneDisplay}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="text-[0.95rem] text-navy hover:text-maroon"
          >
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
