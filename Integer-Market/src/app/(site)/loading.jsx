/**
 * Instant loading skeleton for all (site) pages.
 *
 * Next.js shows this component the moment a link is clicked, while the
 * server is rendering the real page.  The Navbar and Footer render
 * immediately from the layout - this file only needs to fill <main>.
 *
 * The skeleton mimics a generic "hero + card grid" page shape so the
 * transition to the real page feels smooth rather than jarring.
 */
export default function SiteLoading() {
  return (
    <div className="animate-pulse">

      {/* ── Hero placeholder ─────────────────────────────────────── */}
      <div className="relative min-h-[56vh] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col justify-center overflow-hidden">
        {/* shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skeleton-shimmer" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-5">
          {/* Badge pill */}
          <div className="h-6 w-52 rounded-full bg-white/10" />
          {/* H1 lines */}
          <div className="h-10 w-3/4 rounded-xl bg-white/15 max-w-xl" />
          <div className="h-10 w-1/2 rounded-xl bg-white/10 max-w-sm" />
          {/* Sub text */}
          <div className="h-4 w-2/3 rounded bg-white/8 max-w-lg mt-2" />
          <div className="h-4 w-1/2 rounded bg-white/8 max-w-md" />
          {/* CTA bar */}
          <div className="flex gap-3 pt-2">
            <div className="h-12 w-40 rounded-2xl bg-primary/40" />
            <div className="h-12 w-36 rounded-2xl bg-white/10" />
          </div>
        </div>
      </div>

      {/* ── Stats bar ────────────────────────────────────────────── */}
      <div className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex items-center gap-4 px-6 lg:px-10 py-7">
                <div className="size-9 rounded-xl bg-slate-100" />
                <div className="space-y-1.5">
                  <div className="h-6 w-16 rounded bg-slate-200" />
                  <div className="h-3 w-24 rounded bg-slate-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Section heading + card grid ──────────────────────────── */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Section title */}
          <div className="space-y-3">
            <div className="h-3 w-24 rounded bg-primary/20" />
            <div className="h-8 w-64 rounded-xl bg-slate-200" />
            <div className="h-4 w-96 rounded bg-slate-100 max-w-full" />
          </div>

          {/* Card grid - 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white border border-slate-100 p-5 space-y-4"
              >
                <div className="flex items-center gap-2">
                  <div className="h-3 w-20 rounded bg-slate-100" />
                  <div className="h-3 w-1 rounded bg-slate-100" />
                  <div className="h-3 w-16 rounded bg-slate-100" />
                </div>
                <div className="space-y-2">
                  <div className="h-4 w-full rounded bg-slate-200" />
                  <div className="h-4 w-4/5 rounded bg-slate-200" />
                </div>
                <div className="h-3 w-full rounded bg-slate-100" />
                <div className="h-3 w-5/6 rounded bg-slate-100" />
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="h-7 w-14 rounded bg-slate-200" />
                  <div className="h-8 w-28 rounded-xl bg-primary/15" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
