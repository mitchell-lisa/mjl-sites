type WordmarkProps = {
  inverted?: boolean;
  compact?: boolean;
};

export function Wordmark({ inverted = false, compact = false }: WordmarkProps) {
  const color = inverted ? "text-ivory" : "text-navy";
  const rule = inverted ? "bg-bronze-bright/80" : "bg-bronze";

  return (
    <span className={`flex items-center gap-3 ${color}`}>
      <span
        aria-hidden="true"
        className={`grid h-10 w-10 place-items-center border ${
          inverted ? "border-bronze-bright/70" : "border-bronze/70"
        }`}
      >
        <svg viewBox="0 0 40 40" className="h-7 w-7" fill="none">
          <path
            d="M11 28V12h8.2c4.4 0 7.2 2.6 7.2 6.5 0 3.8-2.8 6.4-7.2 6.4H16.4V28H11Zm5.4-7.3h2.6c1.9 0 3-1 3-2.7s-1.1-2.7-3-2.7h-2.6v5.4Z"
            className={inverted ? "fill-ivory" : "fill-navy"}
          />
          <rect
            x="6"
            y="6"
            width="28"
            height="28"
            className={inverted ? "stroke-bronze-bright" : "stroke-bronze"}
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
