export function ServiceList({
  title,
  items,
}: {
  title: string;
  items: readonly string[];
}) {
  return (
    <div className="border border-navy/10 bg-paper p-7">
      <p className="eyebrow">{title}</p>
      <ul className="mt-5 columns-1 gap-x-10 sm:columns-2">
        {items.map((item) => (
          <li
            key={item}
            className="mb-3 flex break-inside-avoid gap-3 text-[0.98rem] leading-7 text-ink"
          >
            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 bg-maroon" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
