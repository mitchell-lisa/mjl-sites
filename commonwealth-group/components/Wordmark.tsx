type WordmarkProps = {
  compact?: boolean;
};

export function Wordmark({ compact = false }: WordmarkProps) {
  const width = compact ? 190 : 254;
  const height = compact ? 71 : 88;

  return (
    <img
      src="/brand/logo.png"
      alt="The Commonwealth Group"
      width={width}
      height={height}
      decoding="async"
      className={
        compact
          ? "block h-[71px] w-[190px] max-w-none"
          : "block h-[71px] w-[190px] max-w-none md:h-[88px] md:w-[254px]"
      }
    />
  );
}
