import Image from "next/image";
import Link from "next/link";
import { PizzaRow } from "@/components/PizzaRow";
import { pies } from "@/lib/menu";
import { photos } from "@/lib/photos";
import { dietary, lines } from "@/lib/site-config";

export function PizzaMenu({
  variant = "full",
}: {
  variant?: "full" | "preview";
}) {
  const items = variant === "preview" ? pies.slice(0, 4) : pies;

  return (
    <section className="border-y border-ink/10 bg-paper" id="pies">
      <div className="mx-auto grid max-w-page gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.72fr)] lg:py-24">
        <div>
          {variant === "preview" ? (
            <>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
                The pies
              </p>
              <h2 className="mt-3 max-w-[14ch] font-display text-4xl font-medium leading-[1.02] sm:text-6xl">
                {lines.sicily}
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-mute">
                Each name on the board is a town in Sicily. These are the pies we fire.
              </p>
            </>
          ) : (
            <h2 className="font-display text-3xl font-medium sm:text-4xl">From the board</h2>
          )}
          <ol className="mt-8">
            {items.map((pie) => (
              <PizzaRow key={pie.name} pie={pie} />
            ))}
          </ol>
          {variant === "preview" ? (
            <Link href="/pies" className="btn btn-line-dark mt-8">
              All 13 pies
            </Link>
          ) : (
            <div className="mt-8 max-w-xl border-t border-ink/15 pt-5 text-sm leading-relaxed text-mute">
              {dietary.statements.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p className="mt-2">{dietary.caution}</p>
            </div>
          )}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:content-start">
          <figure className="bg-flour">
            <Image
              src={photos.zingaro.src}
              alt={photos.zingaro.alt}
              width={photos.zingaro.width}
              height={photos.zingaro.height}
              sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 100vw"
              className="h-auto w-full object-cover"
            />
            <figcaption className="px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
              01 Zingaro
            </figcaption>
          </figure>
          {variant === "full" ? (
            <figure className="bg-flour sm:mt-10 lg:mt-0">
              <Image
                src={photos.volcano.src}
                alt={photos.volcano.alt}
                width={photos.volcano.width}
                height={photos.volcano.height}
                sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 100vw"
                className="aspect-[4/5] h-auto w-full object-cover object-[center_30%]"
              />
              <figcaption className="px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold-deep">
                13 Volcano
              </figcaption>
            </figure>
          ) : null}
        </div>
      </div>
    </section>
  );
}
