export function LogoMark({
  className = "",
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "onDark";
}) {
  const base =
    variant === "onDark"
      ? "bg-white/[0.06] text-white ring-1 ring-white/10 shadow-none"
      : "bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow-lg shadow-sky-500/25 ring-1 ring-white/20";
  return (
    <span
      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${base} ${className}`}
      aria-hidden
    >
      V
    </span>
  );
}
