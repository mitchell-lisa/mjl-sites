import Link from "next/link";
import { site } from "@/lib/site-config";

export function MobileActionBar() {
  return (
    <nav
      className="on-dark fixed inset-x-0 bottom-0 z-40 grid grid-cols-[1fr_1fr_1.4fr] border-t border-cream/15 bg-ink pb-[env(safe-area-inset-bottom)] text-cream md:hidden"
      aria-label="Quick actions"
    >
      <a href={site.phoneHref} className="flex min-h-14 items-center justify-center text-xs font-semibold uppercase tracking-[0.14em]">
        Call
      </a>
      <Link href="/pies" className="flex min-h-14 items-center justify-center border-l border-cream/15 text-xs font-semibold uppercase tracking-[0.14em]">
        Pies
      </Link>
      <Link href="/book" className="flex min-h-14 items-center justify-center bg-cream text-xs font-semibold uppercase tracking-[0.14em] text-ink">
        Book
      </Link>
    </nav>
  );
}
