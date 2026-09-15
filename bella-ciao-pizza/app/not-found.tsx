import Link from "next/link";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-measure px-4 py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold">
        {site.shortName}
      </p>
      <h1 className="mt-3 font-display text-3xl font-semibold text-ink">
        Page not found
      </h1>
      <p className="mt-3 text-mute">
        That page is not on this preview. Head back to the pies.
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex min-h-[44px] items-center bg-basil px-5 py-3 font-semibold text-paper"
      >
        Back to Bella Ciao
      </Link>
    </section>
  );
}
