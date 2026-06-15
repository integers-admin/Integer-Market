'use client'
import { motion } from 'framer-motion'
import { Globe, Users, Database, BarChart3, CheckSquare, Cpu, Shield, Zap } from 'lucide-react'
import Badge from '../components/ui/Badge'
import ScrollReveal from '../components/ui/ScrollReveal'
import { staggerContainer, fadeInUp } from '../lib/variants'

const steps = [
  {
    icon: Globe,
    num: '01',
    title: 'Multi-Source Data Collection',
    body: 'Our researchers identify and draw from a wide range of publicly available and licensed data sources - government trade databases (UN Comtrade, ITC), regulatory filings, company annual reports, industry association publications, customs records from 30+ countries, academic journals, clinical studies, and curated news sources. We cast a wide net so no significant data point is missed.',
  },
  {
    icon: Cpu,
    num: '02',
    title: 'Technology-Assisted Data Aggregation',
    body: 'To handle the volume and breadth of data across hundreds of sources, our team uses advanced AI-assisted tools - including intelligent data aggregation pipelines - to compile, cross-reference, and de-duplicate information efficiently. This technology layer helps us process in hours what would take weeks manually, while our researchers remain in control of what goes in.',
  },
  {
    icon: Users,
    num: '03',
    title: 'Analyst Review & Validation',
    body: 'Every aggregated dataset is reviewed by a domain expert before being used in any report. Our analysts - with backgrounds in pharmacology, chemistry, trade economics, and consumer research - verify figures against primary sources, flag inconsistencies, and apply domain knowledge that no automated tool can replicate. The final narrative, interpretation, and conclusions are always analyst-authored.',
  },
  {
    icon: Database,
    num: '04',
    title: 'Trade Data & Primary Intelligence',
    body: 'We layer HS-code-level customs data (import/export volumes, unit prices, supplier origins) with direct outreach to industry participants - manufacturers, distributors, formulation companies - to validate pricing benchmarks and supply chain dynamics. This primary intelligence is what separates our reports from purely desk-research compilations.',
  },
  {
    icon: BarChart3,
    num: '05',
    title: 'Market Modelling & Forecasting',
    body: 'Our analysts build bottom-up and top-down market size models, triangulating across multiple data streams. Forecasts are grounded in macro indicators (GDP, population trends, regulatory shifts), category-specific demand drivers, and validated consumption data - not extrapolated from a single data point.',
  },
  {
    icon: CheckSquare,
    num: '06',
    title: 'Peer Review & Publication',
    body: 'Before publication, every report goes through an internal peer review for methodological consistency, citation accuracy, and narrative clarity. Published reports are monitored post-release - subscribers receive alerts when significant market events trigger a data update.',
  },
]

const standards = [
  {
    title: 'Transparent Data Sourcing',
    body: 'Every major data point includes source citations. We are clear about which figures come from primary research, which from secondary databases, and which are analyst estimates.',
  },
  {
    title: 'Technology-Enhanced, Not Replaced',
    body: 'We use AI tools to aggregate and structure data faster - not to generate conclusions. Every insight, recommendation, and forecast is the work of a human domain expert.',
  },
  {
    title: 'Conflict-of-Interest Policy',
    body: 'Our researchers have no financial stake in the companies or markets they cover. The research agenda is driven by client demand and market relevance - not advertiser relationships.',
  },
  {
    title: 'Accuracy Commitment',
    body: 'If a significant methodological error is identified after publication, affected clients are notified and provided corrected versions at no charge. We stand behind every report we publish.',
  },
]

const sources = [
  'UN Comtrade & ITC Trade Data',
  'FDA, EMA, FSSAI regulatory databases',
  'WHO & national health statistics',
  'Company annual reports & SEC filings',
  'Industry association publications',
  'Academic journals & clinical studies',
  'National customs databases (30+ countries)',
  'Licensed market intelligence databases',
  'Direct manufacturer & supplier outreach',
  'Proprietary expert interview network',
]

export default function ResearchMethodology() {
  return (
    <div className="min-h-screen bg-surface">

      {/* Hero */}
      <div className="bg-white border-b border-slate-100 pt-24 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Badge variant="white" className="mb-5">How We Research</Badge>
            <h1 className="text-5xl font-extrabold text-slate-900 mb-4">Our Research Methodology</h1>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Our reports are built by combining broad multi-source data collection with technology-assisted aggregation and expert human analysis - giving you intelligence that is both comprehensive and trustworthy.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* How we work - honest explainer banner */}
      <div className="bg-primary/5 border-y border-primary/15 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="size-14 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0 shadow-md">
                <Zap size={24} className="text-white" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-base font-bold text-slate-900 mb-1">How our reports are made</h2>
                <p className="text-sm text-slate-600 leading-relaxed max-w-3xl">
                  Our researchers collect data from hundreds of verified web sources - trade databases, regulatory filings, company reports, and more. We use AI-assisted tools to aggregate and cross-reference this data efficiently. Our domain experts then validate every data point, build the analysis, and write the final report. <strong className="text-slate-800">Technology accelerates the process; human expertise shapes the intelligence.</strong>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Process steps */}
        <ScrollReveal className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Our 6-Stage Research Process</h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm">From raw data across the web to a publication-ready market report.</p>
        </ScrollReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={staggerContainer}
          className="space-y-5 mb-20"
        >
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div key={step.num} variants={fadeInUp}>
                <div className="bg-white border border-slate-100 rounded-2xl p-6 flex gap-6 hover:border-primary/20 hover:shadow-md transition-all duration-200">
                  <div className="flex flex-col items-center gap-2 flex-shrink-0">
                    <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-300">{step.num}</span>
                    {i < steps.length - 1 && (
                      <div className="w-px flex-1 bg-slate-100 min-h-4" aria-hidden="true" />
                    )}
                  </div>
                  <div className="pt-1">
                    <h3 className="text-base font-semibold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Data sources */}
        <ScrollReveal className="mb-16">
          <div className="bg-white border border-slate-100 rounded-2xl p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-2">Data Sources We Use</h2>
            <p className="text-sm text-slate-400 mb-5">Drawn from publicly available databases, licensed data providers, and direct primary research.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {sources.map(source => (
                <div key={source} className="flex items-center gap-2 text-sm text-slate-700">
                  <div className="size-1.5 rounded-full bg-primary flex-shrink-0" aria-hidden="true" />
                  {source}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Quality standards */}
        <ScrollReveal className="text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900">Our Quality Standards</h2>
        </ScrollReveal>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16"
        >
          {standards.map(({ title, body }) => (
            <motion.div key={title} variants={fadeInUp} className="bg-white border border-slate-100 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <Shield size={16} className="text-primary" aria-hidden="true" />
                <h3 className="text-sm font-semibold text-slate-800">{title}</h3>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
