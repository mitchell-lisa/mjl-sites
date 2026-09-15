"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Wordmark } from "@/components/Wordmark";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuTop, setMenuTop] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const scrollYRef = useRef(0);
  const lockedRef = useRef(false);

  useEffect(() => {
    const header = headerRef.current;
    const { body, documentElement } = document;

    function measureSheetTop() {
      const top = header ? Math.ceil(header.getBoundingClientRect().bottom) : 0;
      setMenuTop(top);
      documentElement.style.setProperty("--site-menu-top", `${top}px`);
    }

    function unlock() {
      if (!lockedRef.current) return;
      lockedRef.current = false;
      body.classList.remove("menu-open");
      documentElement.classList.remove("menu-open");
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.overflow = "";
      documentElement.style.overflow = "";
      documentElement.style.overscrollBehavior = "";
      documentElement.style.removeProperty("--site-menu-top");
      window.scrollTo(0, scrollYRef.current);
    }

    if (!open) {
      unlock();
      return undefined;
    }

    lockedRef.current = true;
    scrollYRef.current = window.scrollY;
    measureSheetTop();
    body.classList.add("menu-open");
    documentElement.classList.add("menu-open");
    body.style.position = "fixed";
    body.style.top = `-${scrollYRef.current}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";
    documentElement.style.overflow = "hidden";
    documentElement.style.overscrollBehavior = "none";
    // Re-measure after the iOS scroll lock so the sheet meets the real bar.
    measureSheetTop();

    window.addEventListener("resize", measureSheetTop);
    return () => {
      window.removeEventListener("resize", measureSheetTop);
      unlock();
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
        ref={headerRef}
        className={`site-header${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}
        style={{
          backgroundColor: open ? "#f6f3ee" : "rgba(246, 243, 238, 0.45)",
          backdropFilter: open ? "none" : "blur(28px)",
          WebkitBackdropFilter: open ? "none" : "blur(28px)",
          paddingTop: "env(safe-area-inset-top)",
        }}
      >
        <div className="site-header-bar">
          <Link href="/" aria-label={site.shortName} className="site-lockup">
            <Wordmark />
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
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      {open ? (
        <div
          id="site-menu"
          className="site-menu-sheet lg:hidden"
          style={{ top: menuTop }}
        >
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
