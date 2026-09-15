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

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 text-ink backdrop-blur-md">
        <div className="border-b border-maroon/15">
          <div className="site-grid flex items-center justify-between gap-4 py-2.5 md:py-3">
            <Link href="/" aria-label={site.shortName} className="min-w-0">
              <span className="hidden sm:block">
                <Wordmark />
              </span>
              <span className="sm:hidden">
                <Wordmark compact />
              </span>
            </Link>

            <div className="flex items-center gap-3">
              <a
                href={site.phoneHref}
                className="hidden text-sm text-navy hover:text-maroon md:inline"
              >
                {site.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="btn btn-maroon max-md:!hidden md:inline-flex"
              >
                Request information
              </Link>
              <button
                type="button"
                className="grid h-11 w-11 place-items-center border border-ink/20 xl:hidden"
                aria-expanded={open}
                aria-controls="mobile-nav"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((value) => !value)}
              >
                <span className="sr-only">Menu</span>
                <span className="relative block h-3.5 w-5">
                  <span
                    className={`absolute left-0 h-px w-5 bg-ink transition ${
                      open ? "top-1.5 rotate-45" : "top-0"
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-1.5 h-px w-5 bg-ink transition ${
                      open ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute left-0 h-px w-5 bg-ink transition ${
                      open ? "top-1.5 -rotate-45" : "top-3"
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>

        <nav
          className="hidden border-b border-maroon/10 xl:block"
          aria-label="Primary"
        >
          <div className="site-grid flex flex-wrap items-center gap-x-6 gap-y-2 py-2.5">
            {nav.map((item) => {
              const active = isActive(item.href);
              if (item.children?.length) {
                return (
                  <div key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      data-active={active}
                      className="nav-link inline-flex items-center gap-1 text-ink/80 hover:text-ink"
                    >
                      {item.label}
                      <span aria-hidden="true" className="text-[0.65rem]">
                        ▾
                      </span>
                    </Link>
                    <div className="invisible absolute left-0 top-full z-30 min-w-[240px] border border-navy/10 bg-white py-2 opacity-0 shadow-sm group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-ink/80 hover:bg-ivory hover:text-navy"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-active={active}
                  className="nav-link text-ink/80 hover:text-ink"
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </header>

      {open ? (
        <div
          id="mobile-nav"
          className="fixed inset-0 z-50 overflow-y-auto bg-ivory px-5 py-5 text-ink xl:hidden"
        >
          <div className="flex items-center justify-between">
            <Link href="/" onClick={closeMenu} aria-label={site.shortName}>
              <Wordmark compact />
            </Link>
            <button
              type="button"
              className="grid h-11 w-11 place-items-center border border-ink/20"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              <span className="relative block h-3.5 w-5">
                <span className="absolute left-0 top-1.5 h-px w-5 rotate-45 bg-ink" />
                <span className="absolute left-0 top-1.5 h-px w-5 -rotate-45 bg-ink" />
              </span>
            </button>
          </div>
          <nav className="mt-10 flex flex-col" aria-label="Mobile">
            {nav.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className="block border-b border-maroon/15 py-4 text-base"
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={closeMenu}
                    className="block border-b border-maroon/10 py-3 pl-5 text-sm text-muted"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
            <a href={site.phoneHref} className="btn btn-maroon mt-8">
              Call {site.phoneDisplay}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="btn btn-outline mt-3"
            >
              {site.email}
            </a>
            <Link
              href="/contact"
              onClick={closeMenu}
              className="btn btn-outline mt-3"
            >
              Request information
            </Link>
          </nav>
        </div>
      ) : null}
    </>
  );
}
