export function LegalTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="font-display text-[1.7rem] sm:text-[2.15rem] leading-[1.12] font-bold text-ink m-0">
      {children}
    </h1>
  );
}

export function LegalSection({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-8">
      <h2 className="font-display text-[1.3rem] sm:text-[1.45rem] font-semibold text-ink m-0 pb-2 border-b-2 border-blue tracking-[-0.01em]">
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-[0.97rem] leading-relaxed text-ink/90 max-w-[65ch]">
        {children}
      </div>
    </section>
  );
}

export function LegalList({ items }: { items: string[] }) {
  return (
    <ul className="m-0 pl-5 list-disc space-y-1">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

const MAPS = 'https://maps.app.goo.gl/ohesVfSyZKMEH64E6';

export function MailingAddress() {
  return (
    <strong>
      <a href={MAPS} className="text-blue underline" rel="noopener" target="_blank">
        119 N Church Street
        <br />
        Moorestown, NJ, 08057
      </a>
    </strong>
  );
}

export function AgencyContact() {
  return (
    <p className="m-0">
      <strong>George Insurance Agency LLC</strong>
      <br />
      <MailingAddress />
      <br />
      <strong>Phone:</strong> (609) 430-8275
      <br />
      <strong>Email:</strong>{' '}
      <a href="mailto:George@GeorgeInsurance.Agency" className="text-blue underline">
        George@GeorgeInsurance.Agency
      </a>
    </p>
  );
}
