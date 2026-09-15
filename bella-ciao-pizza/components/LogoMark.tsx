import Image from "next/image";

type LogoMarkProps = {
  className?: string;
  priority?: boolean;
  alt?: string;
};

export function LogoMark({
  className = "h-16 w-auto sm:h-20",
  priority = false,
  alt = "Bella Ciao Pizza",
}: LogoMarkProps) {
  return (
    <Image
      src="/logo.png"
      alt={alt}
      width={321}
      height={258}
      priority={priority}
      unoptimized
      placeholder="empty"
      className={`bg-transparent ${className}`.trim()}
      style={{ backgroundColor: "transparent" }}
    />
  );
}
