export function PageIntro({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="border-b border-ink/10 bg-flour">
      <div className="mx-auto max-w-page px-5 py-12 sm:px-8 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl font-display text-4xl font-medium leading-[1.02] text-ink sm:text-6xl">
          {title}
        </h1>
        {lede ? <p className="mt-4 max-w-xl text-lg leading-relaxed text-mute">{lede}</p> : null}
      </div>
    </header>
  );
}
