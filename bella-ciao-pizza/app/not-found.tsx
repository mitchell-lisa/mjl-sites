import Link from "next/link";
import { site } from "@/lib/site-config";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-xl px-5 py-20 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">{site.shortName}</p>
      <h1 className="mt-3 font-display text-5xl font-medium">Page not found</h1>
      <p className="mt-4 text-lg text-mute">That page is not on the site. The pies are.</p>
      <Link href="/" className="btn btn-dark mt-8">
        Back to Bella Ciao
      </Link>
    </section>
  );
}
