import Image from "next/image";

type WordmarkProps = {
  compact?: boolean;
};

export function Wordmark({ compact = false }: WordmarkProps) {
  return (
    <Image
      src="/brand/logo.png"
      alt="The Commonwealth Group"
      width={254}
      height={88}
      className={
        compact
          ? "h-8 w-auto"
          : "h-10 w-auto sm:h-[2.65rem] md:h-11"
      }
      priority
    />
  );
}
