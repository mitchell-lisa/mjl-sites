import Image from "next/image";

type MontchaninLogoProps = {
  className?: string;
};

export function MontchaninLogo({ className = "" }: MontchaninLogoProps) {
  return (
    <Image
      src="/brand/montchanin-logo.png"
      alt="Montchanin Builders"
      width={382}
      height={140}
      unoptimized
      className={`h-auto w-[220px] max-w-full md:w-[260px] ${className}`}
    />
  );
}
