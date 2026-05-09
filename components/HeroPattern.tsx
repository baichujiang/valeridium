/** Abstract grid pattern for hero sections — no stock imagery. */
export function HeroPattern() {
  const step = 40;
  const coords: { x: number; y: number }[] = [];
  for (let x = 0; x <= 360; x += step) {
    for (let y = 0; y <= 360; y += step) {
      coords.push({ x: x + 20, y: y + 20 });
    }
  }

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.35]"
      aria-hidden
    >
      <svg
        className="absolute -right-8 -top-8 h-[420px] w-[420px] text-accent/20 sm:right-0 sm:top-0"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="hero-g" x1="0" y1="0" x2="400" y2="400">
            <stop stopColor="currentColor" stopOpacity="0.5" />
            <stop offset="1" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="400" height="400" fill="url(#hero-g)" />
        {coords.map(({ x, y }) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="1.5" className="fill-accent/40" />
        ))}
        <path
          d="M40 320 Q200 80 360 200"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-accent/30"
          fill="none"
        />
        <path
          d="M60 360 Q220 120 380 240"
          stroke="currentColor"
          strokeWidth="1"
          className="text-accent/20"
          fill="none"
        />
      </svg>
    </div>
  );
}
