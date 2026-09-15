"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/Wordmark";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy/95 text-ivory backdrop-blur-md">
      <div className="site-grid flex items-center justify-between gap-4 py-3 md:py-4">
        <Link href="/" aria-label={site.shortName} className="min-w-0">
          <span className="hidden sm:block">
            <Wordmark inverted />
          </span>
          <span className="sm:hidden">
            <Wordmark inverted compact />
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                data-active={active}
                className="nav-link text-ivory/88 hover:text-ivory"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="btn btn-bronze max-md:!hidden md:inline-flex"
          >
            {site.phoneDisplay}
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center border border-ivory/25 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 h-px w-5 bg-ivory transition ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-5 bg-ivory transition ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-5 bg-ivory transition ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-50 overflow-y-auto bg-navy-deep px-5 py-5 lg:hidden"
        >
          <div className="flex items-center justify-between">
            <Link href="/" onClick={closeMenu} aria-label={site.shortName}>
              <Wordmark inverted compact />
            </Link>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center border border-ivory/25"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              <span className="relative block h-3.5 w-5">
                <span className="absolute left-0 top-1.5 h-px w-5 rotate-45 bg-ivory" />
                <span className="absolute left-0 top-1.5 h-px w-5 -rotate-45 bg-ivory" />
              </span>
            </button>
          </div>
          <nav className="mt-10 flex flex-col" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-white/10 py-4 text-base tracking-[0.16em] uppercase"
              >
                {item.label}
              </Link>
            ))}
            <a href={site.phoneHref} className="btn btn-bronze mt-8">
              Call {site.phoneDisplay}
            </a>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="btn btn-ghost mt-3"
            >
              Request information
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
