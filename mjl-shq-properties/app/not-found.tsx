import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-soft py-24 md:py-32">
      <div className="site-grid max-w-2xl">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-display text-4xl text-navy md:text-6xl">
          This page is not in the preview.
        </h1>
        <p className="mt-5 leading-8 text-muted">
          The SHQ Properties sample is a single-page remake. Use the home
          sections for story, buying, contracting, HBL, and contact.
        </p>
        <p className="mt-8">
          <Link href="/" className="btn btn-navy">
            Back to home
          </Link>
        </p>
      </div>
    </section>
  );
}
