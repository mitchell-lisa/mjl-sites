import type { ClientMark as ClientMarkData } from "@/lib/site";

type ClientMarkProps = {
  client: ClientMarkData;
  compact?: boolean;
};

export function ClientMark({ client, compact = false }: ClientMarkProps) {
  const inner = client.src ? (
    // Published collage crop or official mark. Plain img so SVG and PNG share one path.
    // eslint-disable-next-line @next/next/no-img-element
    <img src={client.src} alt="" className="client-mark-img" />
  ) : (
    <span className="client-mark-name">{client.name}</span>
  );

  const boxClass = compact ? "client-mark-cell is-marquee" : "client-mark-cell";

  if (client.href && !compact) {
    return (
      <a
        href={client.href}
        target="_blank"
        rel="noopener noreferrer"
        className={boxClass}
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
