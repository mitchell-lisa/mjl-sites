import { site } from "@/lib/site";

export function PreviewBanner() {
  return (
    <div className="bg-ink px-4 py-2 text-center text-[0.72rem] leading-relaxed tracking-[0.04em] text-paper md:text-[0.78rem]">
      {site.previewNotice}
    </div>
  );
}
