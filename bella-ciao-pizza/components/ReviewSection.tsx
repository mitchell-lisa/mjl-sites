import { reviews } from "@/lib/site-config";

export function ReviewSection() {
  if (!reviews.show || reviews.items.length === 0) return null;

  return (
    <section className="mx-auto max-w-page px-5 py-16 sm:px-8" aria-labelledby="reviews-title">
      <h2 id="reviews-title" className="font-display text-4xl font-medium sm:text-5xl">
        What guests wrote
      </h2>
      <ul className="mt-8 grid gap-6 lg:grid-cols-3">
        {reviews.items.map((review) => (
          <li key={`${review.name}-${review.quote}`} className="border-t border-ink/15 pt-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
              {review.name} · {review.platform} · {review.stars} stars
            </p>
            <blockquote className="mt-3 text-lg leading-relaxed text-ink">
              “{review.quote}”
            </blockquote>
            {review.url ? (
              <a href={review.url} className="mt-3 inline-block text-sm underline" rel="noopener noreferrer" target="_blank">
                Read the review
              </a>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
