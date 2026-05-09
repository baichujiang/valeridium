/** Glass-style UI mock — dark, product-site aesthetic. */
export function HeroVisual() {
  return (
    <div
      className="relative hidden lg:block lg:w-full lg:max-w-md xl:max-w-lg"
      aria-hidden
    >
      <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-1 shadow-[var(--card-shadow-hover)] backdrop-blur-sm ring-1 ring-white/[0.04]">
        <div className="flex items-center gap-1.5 border-b border-white/[0.06] bg-white/[0.02] px-3 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />
          <span className="ml-2 flex-1 truncate rounded-md bg-white/[0.04] px-2 py-1 text-center text-[10px] text-muted">
            workspace.valeridium
          </span>
        </div>
        <div className="space-y-3 p-4">
          <div className="h-2 w-3/4 rounded bg-gradient-to-r from-sky-400/40 to-transparent" />
          <div className="h-2 w-1/2 rounded bg-white/10" />
          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="h-16 rounded-lg bg-gradient-to-br from-sky-500/20 to-blue-600/10 ring-1 ring-white/[0.06]" />
            <div className="h-16 rounded-lg bg-gradient-to-br from-white/[0.06] to-transparent ring-1 ring-white/[0.06]" />
          </div>
          <div className="space-y-2 pt-1">
            <div className="h-1.5 w-full rounded bg-white/[0.08]" />
            <div className="h-1.5 w-5/6 rounded bg-white/[0.06]" />
            <div className="h-1.5 w-4/6 rounded bg-white/[0.05]" />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-6 -left-6 -z-10 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute -right-8 -top-8 -z-10 h-48 w-48 rounded-full bg-blue-600/15 blur-3xl" />
    </div>
  );
}
