import { serviceArea } from "@/lib/site-config";

export function ServiceArea({ variant = "detail" }: { variant?: "detail" | "footer" | "hero" }) {
  if (variant === "hero") {
    if (!(serviceArea.showUnconfirmedLine && !serviceArea.confirmed)) return null;
    return <p>{serviceArea.heroLine}</p>;
  }

  if (variant === "footer") {
    return <p>{serviceArea.publicLabel}</p>;
  }

  if (!serviceArea.confirmed && serviceArea.showUnconfirmedLine) {
    return <p className="max-w-xl text-lg leading-relaxed text-mute">{serviceArea.detail}</p>;
  }

  return <p className="text-lg text-mute">{serviceArea.publicLabel}</p>;
}
