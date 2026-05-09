/**
 * Valeridium wordmark icon — geometric “V” (two facets), no external assets.
 */
export function LogoMark({
  className = "",
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "onDark";
}) {
  const isDark = variant === "onDark";

  const leftFill = isDark ? "#cbd5e1" : "#7dd3fc";
  const rightFill = isDark ? "#38bdf8" : "#2563eb";

  return (
    <span
      className={[
        "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg",
        isDark
          ? "bg-white/[0.06] ring-1 ring-white/10"
          : "bg-slate-950/50 shadow-lg shadow-sky-500/15 ring-1 ring-white/10 backdrop-blur-sm",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-hidden
    >
      <svg
        width={22}
        height={22}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="translate-y-px"
      >
        {/* Left facet */}
        <path
          d="M8 10L16 25L16 15.5L10.5 10H8Z"
          fill={leftFill}
          fillOpacity={isDark ? 0.95 : 1}
        />
        {/* Right facet */}
        <path
          d="M24 10H21.5L16 15.5L16 25L24 10Z"
          fill={rightFill}
        />
        {/* Top plane */}
        <path
          d="M10.5 10L16 15.5L21.5 10H10.5Z"
          fill={isDark ? "#f8fafc" : "#bae6fd"}
          fillOpacity={isDark ? 0.14 : 0.4}
        />
      </svg>
    </span>
  );
}
