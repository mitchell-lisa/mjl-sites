"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

export function MobileCta() {
  const pathname = usePathname();
  if (pathname === "/contact") return null;

  return (
    <div className="sticky bottom-0 z-30 border-t border-navy/10 bg-ivory/95 px-4 py-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a href={site.phoneHref} className="btn btn-outline">
          Call
        </a>
        <Link href="/contact" className="btn btn-navy">
          Inquire
        </Link>
      </div>
    </div>
  );
}
