import { site } from "@/lib/site";

export function PreviewBanner() {
  return (
    <div className="bg-teal px-4 py-2 text-center text-[0.74rem] font-medium leading-relaxed text-navy-ink md:text-[0.8rem]">
      {site.previewNotice}
    </div>
  );
}
