/** Decorative browser-style frame — abstract, no client branding. */
export function HeroVisual() {
  return (
    <div
      className="relative hidden lg:block lg:w-full lg:max-w-md xl:max-w-lg"
      aria-hidden
    >
      <div className="rounded-2xl border border-border bg-surface p-1 shadow-[var(--card-shadow-hover)] ring-1 ring-black/[0.03]">
        <div className="flex items-center gap-1.5 border-b border-border bg-muted/5 px-3 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-2 flex-1 truncate rounded-md bg-background px-2 py-1 text-center text-[10px] text-muted-light">
            digital workspace
          </span>
        </div>
        <div className="space-y-3 p-4">
          <div className="h-2 w-3/4 rounded bg-accent/15" />
          <div className="h-2 w-1/2 rounded bg-muted-light/25" />
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="h-16 rounded-lg bg-gradient-to-br from-accent-subtle to-background ring-1 ring-border" />
            <div className="h-16 rounded-lg bg-gradient-to-br from-muted-light/10 to-background ring-1 ring-border" />
          </div>
          <div className="space-y-2 pt-1">
            <div className="h-1.5 w-full rounded bg-muted-light/20" />
            <div className="h-1.5 w-5/6 rounded bg-muted-light/15" />
            <div className="h-1.5 w-4/6 rounded bg-muted-light/15" />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-4 -left-4 -z-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
      <div className="absolute -right-6 -top-6 -z-10 h-40 w-40 rounded-full bg-accent/5 blur-3xl" />
    </div>
  );
}
