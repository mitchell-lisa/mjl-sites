"use client";

import Link from "next/link";
import { useEffect, useId, useRef } from "react";
import { nav, site } from "@/lib/site-config";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const root = ref.current;
    if (!root) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;

    const focusable = () =>
      Array.from(
        root.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );

    focusable()[0]?.focus();

    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusable();
      if (items.length === 0) return;
      const firstItem = items[0];
      const lastItem = items[items.length - 1];
      if (event.shiftKey && document.activeElement === firstItem) {
        event.preventDefault();
        lastItem.focus();
      } else if (!event.shiftKey && document.activeElement === lastItem) {
        event.preventDefault();
        firstItem.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={ref}
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="on-dark fixed inset-0 z-50 flex flex-col bg-ink text-cream"
    >
      <div className="flex items-center justify-between px-5 py-4">
        <p id={titleId} className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
          Menu
        </p>
        <button type="button" className="btn btn-line min-h-11 px-4" onClick={onClose}>
          Close
        </button>
      </div>
      <nav className="flex flex-1 flex-col justify-center gap-2 px-5" aria-label="Mobile">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="border-b border-cream/15 py-3 font-display text-4xl"
            onClick={onClose}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="grid gap-3 px-5 pb-8">
        <a href={site.instagramUrl} className="text-sm text-gold" rel="noopener noreferrer" target="_blank">
          {site.instagramHandle}
        </a>
        <a href={site.phoneHref} className="btn btn-line">
          Call {site.phoneDisplay}
        </a>
        <Link href="/book" className="btn btn-light" onClick={onClose}>
          Book the truck
        </Link>
      </div>
    </div>
  );
}
