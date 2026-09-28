import { lines } from "@/lib/site-config";

export function ExperienceStrip() {
  return (
    <section className="border-b border-ink/10 bg-flour" aria-label="What Bella Ciao does">
      <ul className="mx-auto flex max-w-page flex-wrap items-center gap-x-0 px-5 py-4 sm:px-8">
        {lines.experience.map((item, index) => (
          <li key={item} className="flex items-center">
            {index > 0 ? (
              <span aria-hidden className="mx-3 h-3 w-px bg-ink/25 sm:mx-4" />
            ) : null}
            <span className="py-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-ink">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
