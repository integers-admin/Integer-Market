'use client'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Breadcrumb from '../components/ui/Breadcrumb'
import ScrollReveal from '../components/ui/ScrollReveal'
import ReportCard from '../components/ui/ReportCard'
import { getReportTypeBySlug, reportTypes } from '../data/reportTypes'
import { getReportsByType } from '../data/reports'
import { reportTypeBanners } from '../data/reportTypeBanners'
import { staggerContainer, fadeInUp } from '../lib/variants'

export default function ReportTypePage() {
  const { slug } = useParams()
  const type = getReportTypeBySlug(slug)
  const typeReports = getReportsByType(slug)
  const other = reportTypes.filter(t => t.slug !== slug)
  const bannerImg = reportTypeBanners[slug]

  if (!type) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Report type not found</h1>
          <Link href="/report" className="text-primary font-semibold">Browse all reports</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-surface">

      {/* ── Banner header with image ──────────────────────── */}
      <div className="relative overflow-hidden bg-slate-50" style={{ minHeight: '280px', paddingTop: '72px' }}>
        {/* Banner image - shown at natural colours, no dark overlay */}
        {bannerImg && (
          <img
            src={bannerImg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-25"
          />
        )}
        {/* Subtle light fade on the left so text stays readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Breadcrumb
            items={[
              { label: 'Reports', href: '/report' },
              { label: 'Report Types', href: '/report' },
              { label: type.name },
            ]}
            className="mb-6"
          />
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-primary border border-primary/20 bg-primary/8 mb-3">
            Report Type
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3 leading-tight">
            {type.name}
          </h1>
          <p className="text-slate-500 text-base max-w-2xl leading-relaxed">
            {type.detail}
          </p>
        </div>
      </div>

      {/* ── Reports grid ─────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {typeReports.length > 0 ? (
          <>
            <ScrollReveal>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Reports of This Type</h2>
            </ScrollReveal>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16"
            >
              {typeReports.map(r => (
                <motion.div key={r.id} variants={fadeInUp}>
                  <ReportCard report={r} />
                </motion.div>
              ))}
            </motion.div>
          </>
        ) : (
          <ScrollReveal>
            <div className="bg-white border border-slate-100 rounded-2xl p-12 text-center mb-16">
              <h2 className="text-xl font-semibold text-slate-900 mb-3">More Reports Coming</h2>
              <p className="text-slate-500 mb-6">
                We are expanding our {type.name} catalog. Contact us to request specific coverage.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
              >
                Request Coverage
              </Link>
            </div>
          </ScrollReveal>
        )}

        {/* Other report types - with banner images */}
        <ScrollReveal>
          <h2 className="text-xl font-bold text-slate-900 mb-5">Other Report Types</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {other.map(t => {
              const img = reportTypeBanners[t.slug]
              return (
                <Link
                  key={t.slug}
                  href={`/report-type/${t.slug}`}
                  className="relative overflow-hidden rounded-xl border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all duration-200 group aspect-video"
                >
                  {img ? (
                    <img
                      src={img}
                      alt={t.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-100" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  <span className="absolute bottom-0 left-0 right-0 px-3 py-2 text-xs font-semibold text-white leading-snug">
                    {t.name}
                  </span>
                </Link>
              )
            })}
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
