type WordmarkProps = {
  inverted?: boolean;
  compact?: boolean;
};

export function Wordmark({ inverted = false, compact = false }: WordmarkProps) {
  const color = inverted ? "text-ivory" : "text-navy";
  const rule = inverted ? "bg-bronze-bright/80" : "bg-bronze";

  return (
    <span className={`flex items-center gap-3 ${color}`}>
      <span aria-hidden="true" className="grid h-10 w-10 place-items-center">
        <svg viewBox="0 0 40 40" className="h-10 w-10" fill="none">
          <rect
            x="3.5"
            y="3.5"
            width="33"
            height="33"
            className={inverted ? "stroke-bronze-bright" : "stroke-bronze"}
            strokeWidth="1"
          />
          <rect
            x="8"
            y="8"
            width="24"
            height="24"
            className={inverted ? "stroke-ivory/70" : "stroke-navy/70"}
            strokeWidth="1"
          />
        </svg>
      </span>
      <span className="leading-none">
        <span className="block font-serif text-[1.15rem] tracking-[0.04em]">
          The Commonwealth Group
        </span>
        {compact ? null : (
          <>
            <span className={`mt-1.5 mb-1 block h-px w-16 ${rule}`} />
            <span className="block text-[0.62rem] tracking-[0.22em] uppercase opacity-75">
              Est. 1973
            </span>
          </>
        )}
      </span>
    </span>
  );
}
