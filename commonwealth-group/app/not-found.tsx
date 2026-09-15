import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-ivory py-24 md:py-32">
      <div className="site-grid max-w-2xl">
        <p className="eyebrow">404</p>
        <h1 className="mt-4 font-serif text-4xl text-navy md:text-5xl">
          This page is not in the sample.
        </h1>
        <p className="mt-5 leading-8 text-muted">
          The live Commonwealth About page currently returns a WordPress error.
          If you were looking for the firm story, it is restored here.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className="btn btn-navy">
            Home
          </Link>
          <Link href="/about" className="btn btn-outline">
            About
          </Link>
          <Link href="/portfolio" className="btn btn-outline">
            Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
