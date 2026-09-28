import Link from "next/link";

export function StoryIntro() {
  return (
    <section className="mx-auto grid max-w-page gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:py-24">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
          The oven comes to you
        </p>
        <h2 className="mt-3 max-w-[16ch] font-display text-4xl font-medium leading-[1.02] text-ink sm:text-6xl">
          The truck arrives. The fire starts. The pies are made in front of everyone.
        </h2>
      </div>
      <div>
        <p className="stamp">Sicilian street fire</p>
        <p className="mt-6 text-lg leading-relaxed text-mute">
          Bella Ciao is a family wood-fired pizzeria on wheels. It goes where the party is. Guests watch the dough get stretched, the pies get topped, and hot pies keep coming out of the oven.
        </p>
        <p className="mt-4 leading-relaxed text-mute">
          Private parties, weddings, corporate events, festivals, and pop-ups. The truck is the center of the gathering.
        </p>
        <Link href="/book" className="btn btn-dark mt-7">
          Tell us about your event
        </Link>
      </div>
    </section>
  );
}
