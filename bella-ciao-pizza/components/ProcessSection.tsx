import Image from "next/image";
import { photos } from "@/lib/photos";

const steps = [
  {
    number: "01",
    title: "Stretch",
    copy: "Dough is stretched to order, at the truck, while people watch.",
    photo: photos.oven,
    position: "object-[center_70%]",
    alt: "A pie on the peel, stretched and ready for the oven",
  },
  {
    number: "02",
    title: "Top",
    copy: "Pies are assembled in front of the guests. Sauce, cheese, and whatever that pie carries.",
    photo: photos.zingaro,
    position: "object-[center_45%]",
    alt: "Close crop of a Zingaro pie with tomatoes, basil, and mozzarella",
  },
  {
    number: "03",
    title: "Fire",
    copy: "The wood oven does the baking. The mouth of the oven stays bright.",
    photo: photos.oven,
    position: "object-[center_18%]",
    alt: "Wood-fired pie in front of the glowing oven",
  },
  {
    number: "04",
    title: "Serve",
    copy: "Hot pies come out and people gather around the truck.",
    photo: photos.volcano,
    position: "object-[center_40%]",
    alt: "Finished Volcano pie, ready to serve",
  },
] as const;

export function ProcessSection() {
  return (
    <section className="bg-ink text-cream on-dark" aria-labelledby="process-title">
      <div className="mx-auto max-w-page px-5 py-16 sm:px-8 lg:py-24">
        <h2 id="process-title" className="font-display text-4xl font-medium uppercase leading-none tracking-[0.04em] sm:text-6xl">
          Flour. Fire. Pizza.
        </h2>
        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.number}>
              <figure className="relative aspect-[4/5] bg-ink">
                <Image
                  src={step.photo.src}
                  alt={step.alt}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                  className={`object-cover ${step.position}`}
                />
              </figure>
              <p className="mt-4 text-xs font-semibold tracking-[0.18em] text-gold">{step.number}</p>
              <h3 className="mt-1 font-display text-3xl font-medium">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#e7e0d6]">{step.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
