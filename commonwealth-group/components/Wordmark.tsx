import Image from "next/image";

type WordmarkProps = {
  compact?: boolean;
  plate?: boolean;
};

export function Wordmark({ compact = false, plate = false }: WordmarkProps) {
  return (
    <span
      className={`inline-flex bg-white ${
        plate ? "p-1.5 shadow-[0_0_0_1px_rgba(20,20,20,0.06)]" : ""
      }`}
    >
      <Image
        src="/brand/logo.png"
        alt="The Commonwealth Group"
        width={254}
        height={88}
        className={compact ? "h-9 w-auto" : "h-10 w-auto sm:h-11 md:h-12"}
        priority
      />
    </span>
  );
}
