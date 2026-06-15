'use client'
// Generic skeleton shimmer building blocks
function SkeletonBox({ className = '' }) {
  return (
    <div className={`animate-pulse bg-slate-200 rounded-lg ${className}`} aria-hidden="true" />
  )
}

// Report Card skeleton
export function ReportCardSkeleton() {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm" aria-busy="true" aria-label="Loading report">
      <SkeletonBox className="h-4 w-20 mb-3 rounded-full" />
      <SkeletonBox className="h-4 w-full mb-1.5" />
      <SkeletonBox className="h-4 w-3/4 mb-4" />
      <div className="flex gap-2 mb-4">
        <SkeletonBox className="h-5 w-16 rounded-full" />
        <SkeletonBox className="h-5 w-16 rounded-full" />
      </div>
      <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
        <SkeletonBox className="h-6 w-16" />
        <SkeletonBox className="h-8 w-28 rounded-xl" />
      </div>
    </div>
  )
}

// Sidebar filter skeleton
export function FilterSkeleton() {
  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-5 space-y-5" aria-busy="true">
      <SkeletonBox className="h-5 w-24" />
      <div className="space-y-2.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <SkeletonBox className="size-4 rounded" />
            <SkeletonBox className="h-4 flex-1" />
          </div>
        ))}
      </div>
      <SkeletonBox className="h-px w-full" />
      <SkeletonBox className="h-5 w-20" />
      <div className="space-y-2.5">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <SkeletonBox className="size-4 rounded" />
            <SkeletonBox className="h-4 w-3/4" />
          </div>
        ))}
      </div>
    </div>
  )
}

// Table row skeleton
export function TableRowSkeleton({ cols = 4 }) {
  return (
    <div className="flex gap-4 py-3.5 border-b border-slate-100">
      {Array.from({ length: cols }).map((_, i) => (
        <SkeletonBox key={i} className={`h-4 ${i === 0 ? 'flex-[2]' : 'flex-1'}`} />
      ))}
    </div>
  )
}

// Generic line skeleton
export function LineSkeleton({ lines = 3, className = '' }) {
  return (
    <div className={`space-y-2 ${className}`} aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => (
        <SkeletonBox
          key={i}
          className={`h-4 ${i === lines - 1 ? 'w-3/4' : 'w-full'}`}
        />
      ))}
    </div>
  )
}

export default SkeletonBox
