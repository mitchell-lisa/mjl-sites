import Image from "next/image";

type WordmarkProps = {
  compact?: boolean;
  onDark?: boolean;
};

export function Wordmark({ compact = false, onDark = false }: WordmarkProps) {
  const box = compact
    ? "h-8 w-auto max-w-[148px]"
    : "h-8 w-auto max-w-[168px] sm:h-9 sm:max-w-[184px]";

  if (onDark) {
    return (
      <img
        src="/brand/wordmark-on-dark.svg"
        alt="The Commonwealth Group"
        width={254}
        height={88}
        className={box}
      />
    );
  }

  return (
    <Image
      src="/brand/logo.png"
      alt="The Commonwealth Group"
      width={254}
      height={88}
      unoptimized
      priority
      className={box}
    />
  );
}
