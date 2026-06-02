"use client";

type MarqueeProps = {
  items: readonly string[];
  separator?: string;
  className?: string;
  speed?: "slow" | "normal";
  ariaHidden?: boolean;
};

export function Marquee({
  items,
  separator = " • ",
  className = "",
  speed = "normal",
  ariaHidden = false,
}: MarqueeProps) {
  const text = items.join(separator);
  const duration = speed === "slow" ? "40s" : "28s";

  return (
    <div
      className={`marquee-root overflow-hidden whitespace-nowrap ${className}`}
      aria-hidden={ariaHidden || undefined}
    >
      <div
        className="marquee-track inline-flex min-w-full"
        style={{ "--marquee-duration": duration } as React.CSSProperties}
      >
        <span className="marquee-segment shrink-0 px-4">{text}</span>
        <span className="marquee-segment shrink-0 px-4" aria-hidden="true">
          {text}
        </span>
      </div>
    </div>
  );
}
