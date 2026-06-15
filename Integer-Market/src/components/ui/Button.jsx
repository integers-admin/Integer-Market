'use client'
import { motion } from 'framer-motion'

export default function Button({
  children, variant = 'primary', size = 'md',
  className = '', disabled = false, loading = false,
  as: Tag = 'button', ...props
}) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary:  'bg-primary text-white hover:bg-primary-dark shadow-md hover:shadow-lg hover:shadow-primary/25',
    secondary:'bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200',
    outline:  'bg-transparent text-primary border border-primary/50 hover:bg-primary/10 hover:border-primary',
    ghost:    'bg-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100',
    white:    'bg-white text-slate-900 hover:bg-slate-50 shadow-md',
    danger:   'bg-red-500/15 text-red-600 border border-red-200 hover:bg-red-500/25',
  }

  const sizes = {
    sm:  'px-4 py-2 text-sm',
    md:  'px-6 py-2.5 text-sm',
    lg:  'px-8 py-3.5 text-base',
    xl:  'px-10 py-4 text-lg',
  }

  return (
    <motion.div
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      className="inline-block"
    >
      <Tag
        className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg className="animate-spin size-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
          </svg>
        )}
        {children}
      </Tag>
    </motion.div>
  )
}
