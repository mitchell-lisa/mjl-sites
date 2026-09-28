import type { Pie } from "@/lib/menu";

export function PizzaRow({ pie }: { pie: Pie }) {
  return (
    <li className="grid grid-cols-[2.6rem_1fr] gap-x-3 border-b border-ink/12 py-5 sm:grid-cols-[3.25rem_1fr] sm:gap-x-4">
      <span className="pt-3 font-body text-xs font-semibold tracking-[0.18em] text-gold-deep">
        {pie.number}
      </span>
      <div>
        <div className="flex items-center gap-4">
          <span aria-hidden className="hidden h-px w-10 shrink-0 bg-ink/30 sm:block" />
          <h3 className="font-display text-[2rem] font-medium leading-none tracking-tight text-ink sm:text-4xl">
            {pie.name}
          </h3>
        </div>
        {pie.note ? (
          <p className="mt-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-brick">
            {pie.note}
          </p>
        ) : null}
        <p className="mt-2 max-w-xl text-base leading-relaxed text-mute">
          {pie.ingredients.join(" · ")}
        </p>
      </div>
    </li>
  );
}
