import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

/**
 * Breadcrumb - usage:
 * <Breadcrumb items={[
 *   { label: 'Reports', href: '/report' },
 *   { label: 'Nutraceuticals', href: '/industry/nutraceuticals' },
 *   { label: 'Ashwagandha Market Analysis' }   ← last item: no href = current page
 * ]} />
 */
export default function Breadcrumb({ items = [], className = '', light = false }) {
  const baseText = light ? 'text-white/60' : 'text-slate-400'
  const hoverText = light ? 'hover:text-white' : 'hover:text-primary'
  const activeText = light ? 'text-white/90' : 'text-slate-700'
  const chevronColor = light ? 'text-white/30' : 'text-slate-300'

  return (
    <nav
      className={`flex items-center flex-wrap gap-1 text-xs ${baseText} ${className}`}
      aria-label="Breadcrumb"
    >
      <Link
href="/"
        className={`flex items-center gap-1 font-medium transition-colors duration-150 ${hoverText}`}
      >
        <Home size={11} aria-hidden="true" />
        Home
      </Link>

      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1">
          <ChevronRight size={11} className={chevronColor} aria-hidden="true" />
          {item.href ? (
            <Link
href={item.href}
              className={`font-medium transition-colors duration-150 ${hoverText}`}
            >
              {item.label}
            </Link>
          ) : (
            <span className={`font-medium truncate max-w-[240px] ${activeText}`}>
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  )
}
