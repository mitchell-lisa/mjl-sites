import type { ClientMark as ClientMarkData } from "@/lib/site";

type ClientMarkProps = {
  client: ClientMarkData;
  compact?: boolean;
};

export function ClientMark({ client, compact = false }: ClientMarkProps) {
  const inner = client.src ? (
    // Published collage crop or official mark. Plain img so SVG and PNG share one path.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={client.src}
      alt=""
      className={
        compact
          ? "h-10 w-auto max-w-[10rem] object-contain md:h-11"
          : "max-h-16 w-auto max-w-[13rem] object-contain"
      }
    />
  ) : (
    <span
      className={`font-serif text-navy ${
        compact
          ? "max-w-[10rem] text-center text-[0.72rem] leading-snug"
          : "max-w-[12rem] text-center text-[0.82rem] leading-snug md:text-[0.9rem]"
      }`}
    >
      {client.name}
    </span>
  );

  const boxClass = compact
    ? "inline-flex h-16 items-center justify-center px-6"
    : "flex h-full min-h-[7.5rem] items-center justify-center px-5 py-6";

  if (client.href) {
    return (
      <a
        href={client.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${boxClass} text-ink transition-opacity hover:opacity-80`}
        aria-label={`${client.name} (opens official site)`}
      >
        {inner}
      </a>
    );
  }

  return (
    <div className={boxClass} aria-label={client.name}>
      {inner}
    </div>
  );
}
