'use client'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react'
import * as Icons from 'lucide-react'
import Badge from '../components/ui/Badge'
import ScrollReveal from '../components/ui/ScrollReveal'
import ReportCard from '../components/ui/ReportCard'
import { getUseCaseBySlug, useCases } from '../data/useCases'
import { getReportsByUseCase } from '../data/reports'
import { staggerContainer, fadeInUp } from '../lib/variants'

function IconComponent({ name, size = 20 }) {
  const Icon = Icons[name]
  return Icon ? <Icon size={size} aria-hidden="true" /> : null
}

export default function UseCasePage() {
  const { slug } = useParams()
  const useCase = getUseCaseBySlug(slug)
  const useCaseReports = getReportsByUseCase(slug)
  const other = useCases.filter(u => u.slug !== slug)

  if (!useCase) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Use case not found</h1>
          <Link href="/report" className="text-primary font-semibold">Browse all reports</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-surface">
      <div className="bg-white border-b border-slate-100 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/report" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-primary transition-colors mb-6">
            <ArrowLeft size={16} aria-hidden="true" />
            All Reports
          </Link>
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-5">
                <div className="size-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <IconComponent name={useCase.icon} size={24} />
                </div>
                <Badge variant="white">Use Case</Badge>
              </div>
              <h1 className="text-4xl font-bold text-slate-900 mb-4">{useCase.name}</h1>
              <p className="text-slate-400 text-lg max-w-2xl mb-6">{useCase.description}</p>

              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-3">What you get:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2" role="list">
                  {useCase.benefits.map(b => (
                    <li key={b} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle size={14} className="text-primary flex-shrink-0" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl p-6 w-full lg:w-72 flex-shrink-0 shadow-sm">
              <p className="text-xs text-slate-500 mb-3">Who uses this research:</p>
              <div className="flex flex-wrap gap-2">
                {useCase.audiences.map(a => (
                  <Badge key={a} variant="surface" size="sm">{a}</Badge>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-slate-100">
                <Link href="/report" className="flex items-center justify-center gap-2 px-5 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors text-sm">
                  Browse Reports
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {useCaseReports.length > 0 ? (
          <>
            <ScrollReveal><h2 className="text-2xl font-bold text-slate-900 mb-6">Recommended Reports</h2></ScrollReveal>
            <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
              {useCaseReports.map(r => (
                <motion.div key={r.id} variants={fadeInUp}><ReportCard report={r} /></motion.div>
              ))}
            </motion.div>
          </>
        ) : (
          <ScrollReveal>
            <div className="bg-white border border-slate-100 rounded-2xl p-12 text-center mb-16">
              <h2 className="text-xl font-semibold text-slate-900 mb-3">Reports Coming Soon</h2>
              <p className="text-slate-500">We are curating the best reports for this use case.</p>
            </div>
          </ScrollReveal>
        )}

        <ScrollReveal>
          <h2 className="text-xl font-bold text-slate-900 mb-5">Other Use Cases</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {other.map(uc => (
              <Link key={uc.slug} href={`/usecase/${uc.slug}`}
                className="flex items-center gap-4 p-5 bg-white border border-slate-100 rounded-xl hover:border-primary/30 hover:shadow-md transition-all duration-200 group">
                <div className="size-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <IconComponent name={uc.icon} size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-800 group-hover:text-primary transition-colors">{uc.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5 truncate">{uc.description}</p>
                </div>
                <ArrowRight size={14} className="text-slate-300 group-hover:text-primary transition-colors flex-shrink-0" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
