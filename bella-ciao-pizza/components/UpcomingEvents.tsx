import { formatEventDate, splitEvents } from "@/lib/events";
import { site } from "@/lib/site-config";

export function UpcomingEvents({ showPast = false }: { showPast?: boolean }) {
  const { upcoming, past } = splitEvents();

  return (
    <section id="upcoming" className="border-y border-ink/10 bg-flour">
      <div className="mx-auto max-w-page px-5 py-16 sm:px-8 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
          Where we are firing next
        </p>
        <h2 className="mt-3 font-display text-4xl font-medium sm:text-5xl">Find the truck</h2>
        {upcoming.length === 0 ? (
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-mute">
            No dates are posted yet. Follow{" "}
            <a
              href={site.instagramUrl}
              className="font-semibold text-ink underline decoration-gold decoration-2 underline-offset-4"
              rel="noopener noreferrer"
              target="_blank"
            >
              {site.instagramHandle}
            </a>{" "}
            to see where the oven is firing next.
          </p>
        ) : (
          <EventList items={upcoming} />
        )}
        {showPast && past.length > 0 ? (
          <div className="mt-12">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-deep">
              Recently fired
            </h3>
            <EventList items={past} />
          </div>
        ) : null}
      </div>
    </section>
  );
}

function EventList({
  items,
}: {
  items: ReturnType<typeof splitEvents>["upcoming"];
}) {
  return (
    <ul className="mt-6 divide-y divide-ink/15 border-y border-ink/15">
      {items.map((item) => (
        <li key={`${item.date}-${item.event}`} className="grid gap-1 py-4 sm:grid-cols-[11rem_1fr_auto] sm:items-baseline sm:gap-6">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-gold-deep">
            {formatEventDate(item.date)}
          </p>
          <div>
            <p className="font-display text-2xl">{item.event}</p>
            <p className="text-sm text-mute">
              {item.city} · {item.time}
            </p>
          </div>
          {item.link ? (
            <a
              href={item.link}
              className="text-sm font-semibold uppercase tracking-[0.12em] underline decoration-gold underline-offset-4"
              rel="noopener noreferrer"
              target="_blank"
            >
              Source
            </a>
          ) : null}
        </li>
      ))}
    </ul>
  );
}
