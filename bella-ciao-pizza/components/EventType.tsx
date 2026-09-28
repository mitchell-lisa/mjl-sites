export function EventType({
  number,
  label,
  copy,
}: {
  number: string;
  label: string;
  copy: string;
}) {
  return (
    <li className="grid grid-cols-[3rem_1fr] gap-3 border-t border-ink/15 py-4">
      <span className="pt-1 text-xs font-semibold tracking-[0.16em] text-gold-deep">{number}</span>
      <div>
        <h3 className="font-display text-2xl font-medium sm:text-3xl">{label}</h3>
        <p className="mt-1 max-w-xl text-sm leading-relaxed text-mute">{copy}</p>
      </div>
    </li>
  );
}
