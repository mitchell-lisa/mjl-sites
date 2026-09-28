import Image from "next/image";
import { people } from "@/lib/site-config";

export function TeamSection() {
  if (people.length === 0) return null;

  return (
    <section className="border-t border-ink/10" aria-labelledby="team-title">
      <div className="mx-auto max-w-page px-5 py-16 sm:px-8">
        <h2 id="team-title" className="font-display text-4xl font-medium">
          The people
        </h2>
        <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {people.map((person) => (
            <li key={person.name}>
              {person.photo ? (
                <Image
                  src={person.photo}
                  alt={person.alt ?? person.name}
                  width={800}
                  height={1000}
                  className="aspect-[4/5] w-full object-cover"
                />
              ) : null}
              <p className="mt-3 font-display text-3xl">{person.name}</p>
              <p className="text-sm uppercase tracking-[0.14em] text-gold-deep">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
