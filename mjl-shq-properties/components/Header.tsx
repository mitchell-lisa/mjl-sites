"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [menuTop, setMenuTop] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const scrollYRef = useRef(0);
  const lockedRef = useRef(false);

  useLayoutEffect(() => {
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
    measureSheetTop();

    window.addEventListener("resize", measureSheetTop);
    return () => {
      window.removeEventListener("resize", measureSheetTop);
      unlock();
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
      <header ref={headerRef} className="site-header">
        <div className="site-header-bar">
          <a href="#top" className="flex items-center" aria-label={site.name}>
            <Image
              src="/brand/logo.png"
              alt={site.legalName}
              width={220}
              height={72}
              className="h-11 w-auto md:h-12"
              priority
            />
          </a>

          <nav className="ml-auto hidden items-center gap-6 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
            <a href={site.phoneHref} className="btn btn-teal">
              Call {site.phoneDisplay}
            </a>
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:hidden">
            <a href={site.phoneHref} className="btn btn-teal px-3">
              Call
            </a>
            <button
              type="button"
              className="border border-white/25 px-3 py-2 font-display text-[0.72rem] tracking-[0.16em] uppercase"
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      {open && menuTop > 0 ? (
        <div id="site-menu" className="site-menu-sheet lg:hidden" style={{ top: menuTop }}>
          <nav className="site-grid pb-24 pt-6" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="block border-b border-white/10 py-4 font-display text-3xl text-white"
              >
                {item.label}
              </a>
            ))}
            <a href={site.phoneHref} className="btn btn-teal mt-8 w-full">
              Call {site.phoneDisplay}
            </a>
          </nav>
        </div>
      ) : null}
    </>
  );
}
