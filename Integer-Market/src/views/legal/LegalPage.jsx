'use client'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Badge from '../../components/ui/Badge'
import ScrollReveal from '../../components/ui/ScrollReveal'

export default function LegalPage({ title, lastUpdated, children }) {
  return (
    <div className="min-h-screen bg-surface">
      <div className="bg-white border-b border-slate-100 pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-primary transition-colors mb-6">
            <ArrowLeft size={16} aria-hidden="true" />
            Back to Home
          </Link>
          <ScrollReveal>
            <Badge variant="white" className="mb-4">Legal</Badge>
            <h1 className="text-4xl font-bold text-slate-900 mb-3">{title}</h1>
            {lastUpdated && <p className="text-slate-500 text-sm">Last updated: {lastUpdated}</p>}
          </ScrollReveal>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white border border-slate-100 rounded-2xl p-8 md:p-12 prose prose-slate max-w-none
          [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mt-8 [&_h2]:mb-3
          [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-slate-800 [&_h3]:mt-5 [&_h3]:mb-2
          [&_p]:text-slate-600 [&_p]:text-sm [&_p]:leading-relaxed [&_p]:mb-3
          [&_ul]:text-slate-600 [&_ul]:text-sm [&_ul]:space-y-1.5 [&_ul]:mb-4
          [&_li]:leading-relaxed
          [&_a]:text-primary [&_a]:no-underline [&_a]:hover:underline">
          {children}
        </div>
      </div>
    </div>
  )
}
