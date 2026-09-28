import { isPreview, previewCopy } from "@/lib/site-config";

export function PreviewBanner() {
  if (!isPreview) return null;

  return (
    <div className="bg-ink px-4 py-2 text-center text-[0.72rem] leading-relaxed tracking-[0.04em] text-cream md:text-[0.78rem]">
      {previewCopy.banner}
    </div>
  );
}
