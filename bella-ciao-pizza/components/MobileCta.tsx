import { site } from "@/lib/site";

export function MobileCta() {
  return (
    <a
      href={site.phoneHref}
      className="fixed bottom-0 left-0 right-0 z-40 flex min-h-[52px] items-center justify-center bg-basil px-4 py-3 text-base font-semibold text-paper md:hidden"
    >
      Call {site.phoneDisplay}
    </a>
  );
}
