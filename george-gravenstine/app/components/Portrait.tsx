import Image from 'next/image';
import type { Person } from '@/site.config';

// Portraits are served at the size their source file actually supports.
// George's file is 190px, so 96 and 112 CSS pixels are the ceiling.
// Anyone without a usable photograph gets an initials plate rather than a
// grey silhouette, so a missing picture reads as deliberate.
export default function Portrait({
  person,
  className = 'w-16 h-16',
  initialsClass = 'text-[1.1rem]'
}: {
  person: Person;
  className?: string;
  initialsClass?: string;
}) {
  const initials = person.name
    .split(' ')
    .map((w) => w[0])
    .join('');

  if (person.portrait) {
    return (
      <Image
        src={person.portrait}
        alt={`${person.name}, ${person.role.toLowerCase()}`}
        width={224}
        height={224}
        className={`shrink-0 border border-rail object-cover ${className}`}
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className={`shrink-0 border border-blue bg-band flex items-center justify-center font-display font-semibold text-blue ${className} ${initialsClass}`}
    >
      {initials}
    </span>
  );
}
