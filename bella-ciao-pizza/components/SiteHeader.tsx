"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { LogoMark } from "@/components/LogoMark";
import { MobileMenu } from "@/components/MobileMenu";
import { nav, site } from "@/lib/site-config";

export function SiteHeader() {
  const pathname = usePathname();
  const [stuck, setStuck] = useState(false);
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === pathname;
  const close = useCallback(() => setOpenPath(null), []);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`on-dark sticky top-0 z-40 border-b bg-ink text-cream transition-[border-color,box-shadow] duration-200 ${
        stuck ? "border-gold/30 shadow-[0_10px_30px_rgba(0,0,0,0.28)]" : "border-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-page items-center justify-between gap-4 px-4 sm:px-6 ${
          stuck ? "py-1.5" : "py-2.5"
        }`}
      >
        <Link href="/" className="flex min-h-11 items-center" aria-label="Bella Ciao Pizza, home">
          <LogoMark
            alt=""
            className={stuck ? "h-11 w-auto sm:h-12" : "h-14 w-auto sm:h-16"}
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href || (item.href.startsWith("/events") && pathname === "/events" && item.label === "Events");
            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-[0.78rem] font-semibold uppercase tracking-[0.16em] ${
                  active ? "text-gold" : "text-cream/80 hover:text-gold"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={site.instagramUrl}
            className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-cream/80 hover:text-gold"
            rel="noopener noreferrer"
            target="_blank"
          >
            Instagram
          </a>
          <a
            href={site.phoneHref}
            className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-gold"
          >
            Call
          </a>
          <Link href="/book" className="btn btn-light">
            Book the truck
          </Link>
        </div>

        <button
          type="button"
          className="btn btn-line min-h-11 px-4 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpenPath(pathname)}
        >
          Menu
        </button>
      </div>
      <MobileMenu open={open} onClose={close} />
    </header>
  );
}
