"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Wordmark } from "@/components/Wordmark";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function isActive(item: (typeof nav)[number]) {
    if (item.match?.length) {
      return item.match.some((path) => pathname === path || pathname.startsWith(`${path}/`));
    }
    return item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
  }

  return (
    <>
      <header
        className={`site-header${scrolled ? " is-scrolled" : ""}`}
        style={{
          backgroundColor: scrolled
            ? "rgba(246, 243, 238, 0.55)"
            : "rgba(246, 243, 238, 0.58)",
          backdropFilter: scrolled ? "blur(24px)" : "blur(22px)",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "blur(22px)",
        }}
      >
        <div className="site-header-bar">
          <Link href="/" aria-label={site.shortName} className="site-lockup">
            <span className="hidden md:block">
              <Wordmark />
            </span>
            <span className="md:hidden">
              <Wordmark compact />
            </span>
          </Link>

          <nav className="site-nav" aria-label="Primary">
            {nav.map((item) => {
              const active = isActive(item);
              if (item.children?.length) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      type="button"
                      className="nav-link inline-flex items-center gap-1 text-ink/80 hover:text-ink"
                      data-active={active}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                      onClick={() => setServicesOpen((value) => !value)}
                    >
                      {item.label}
                      <span aria-hidden="true" className="text-[0.6rem]">
                        ▾
                      </span>
                    </button>
                    {servicesOpen ? (
                      <div className="absolute left-0 top-full z-30 min-w-[17rem] border border-navy/10 bg-white py-2 shadow-sm">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2.5 text-[0.9rem] text-ink/80 hover:bg-ivory hover:text-navy"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
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
          </nav>

          <button
            type="button"
            className="ml-auto inline-flex items-center gap-2 border border-ink/20 px-3 py-2 text-[0.8rem] tracking-[0.12em] uppercase lg:hidden"
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            Menu
          </button>
        </div>
      </header>

      {open ? (
        <div
          id="site-menu"
          className="fixed inset-0 z-50 overflow-y-auto bg-ivory text-ink lg:hidden"
        >
          <div className="site-grid flex items-center justify-between py-2.5">
            <Link href="/" aria-label={site.shortName}>
              <Wordmark compact />
            </Link>
            <button
              type="button"
              className="border border-ink/20 px-3 py-2 text-[0.8rem] tracking-[0.12em] uppercase"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              Close
            </button>
          </div>
          <nav className="site-grid pb-16 pt-4" aria-label="Mobile">
            {nav.map((item) => (
              <div key={item.label} className="border-b border-maroon/15">
                <Link
                  href={item.href}
                  className="block py-4 font-serif text-2xl text-navy"
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block pb-3 pl-1 text-[0.95rem] text-muted"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
          </nav>
        </div>
      ) : null}
    </>
  );
}
