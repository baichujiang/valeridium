export function LogoMark({
  className = "",
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "onDark";
}) {
  const base =
    variant === "onDark"
      ? "bg-white/10 text-white ring-1 ring-white/15 shadow-none"
      : "bg-accent text-white shadow-sm";
  return (
    <span
      className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${base} ${className}`}
      aria-hidden
    >
      V
    </span>
  );
}
