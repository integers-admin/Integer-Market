'use client'
export default function Badge({ children, variant = 'primary', size = 'sm', className = '' }) {
  const variants = {
    primary:  'bg-primary/15 text-primary border border-primary/25',
    navy:     'bg-slate-100 text-slate-700 border border-slate-200',
    surface:  'bg-slate-100 text-slate-600 border border-slate-200',
    white:    'bg-white/15 text-white border border-white/25',
    success:  'bg-emerald-50 text-emerald-700 border border-emerald-200',
    amber:    'bg-amber-50 text-amber-700 border border-amber-200',
  }

  const sizes = {
    xs: 'px-2 py-0.5 text-[11px] font-medium',
    sm: 'px-2.5 py-1 text-xs font-medium',
    md: 'px-3 py-1.5 text-sm font-medium',
  }

  return (
    <span className={`inline-flex items-center rounded-full ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  )
}
