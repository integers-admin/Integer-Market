'use client'
import { motion } from 'framer-motion'
import { Linkedin, BookOpen, Globe } from 'lucide-react'
import Badge from '../components/ui/Badge'
import ScrollReveal from '../components/ui/ScrollReveal'
import { staggerContainer, fadeInUp } from '../lib/variants'

const researchers = [
  { name: 'Dr. Ananya Mehta', title: 'Lead Researcher - Pharmaceuticals & APIs', expertise: ['Pharmaceutical APIs', 'Generic Drug Markets', 'Regulatory Affairs', 'Indian Pharma'], bio: 'Former senior analyst at IQVIA with 14 years tracking global pharmaceutical markets. PhD in Pharmaceutical Sciences from BITS Pilani.', reports: 142, linkedin: '#' },
  { name: 'Marcus R. Thornton', title: 'Senior Analyst - Nutraceuticals & Health', expertise: ['Nutraceuticals', 'Sports Nutrition', 'Probiotics', 'Consumer Health'], bio: 'Ex-Euromonitor consultant specializing in global supplement and functional food markets. MSc in Nutrition Science from Kings College London.', reports: 98, linkedin: '#' },
  { name: 'Dr. Wei Zhang', title: 'Principal Researcher - Chemicals & Materials', expertise: ['Specialty Chemicals', 'Fine Chemicals', 'Industrial Ingredients', 'China Market'], bio: '18 years in chemical market research across Asia-Pacific. Former BASF market intelligence team. PhD in Chemistry, Tsinghua University.', reports: 115, linkedin: '#' },
  { name: 'Priya Nair', title: 'Research Analyst - Herbal Extracts & Botanicals', expertise: ['Herbal Extracts', 'Ayurveda', 'Phytochemicals', 'Trade Intelligence'], bio: 'Specialist in botanical ingredient markets with focus on South Asian production hubs and global trade flows. MBA from IIM Ahmedabad.', reports: 76, linkedin: '#' },
  { name: 'Sophie Dubois', title: 'Analyst - Beauty & Personal Care', expertise: ['Cosmetic Ingredients', 'Beauty Trends', 'EU Cosmetics', 'Sustainability'], bio: 'Former L\'Oréal market researcher with deep expertise in cosmetic ingredient sourcing and European beauty market dynamics.', reports: 63, linkedin: '#' },
  { name: 'Dr. James Osei', title: 'Research Lead - Food & Nutrition Science', expertise: ['Food Ingredients', 'Functional Foods', 'Food Safety', 'Africa Markets'], bio: 'Expert in functional food ingredients and emerging market food systems. PhD in Food Science, University of Ghana. Formerly with FAO.', reports: 89, linkedin: '#' },
]

export default function OurResearchers() {
  return (
    <div className="min-h-screen bg-surface">
      <div className="bg-white border-b border-slate-100 pt-24 pb-16 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Badge variant="white" className="mb-5">Meet the Team</Badge>
            <h1 className="text-5xl font-extrabold text-slate-900 mb-4">Our Researchers</h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Our reports are authored by industry veterans with deep domain expertise - not generalist analysts. Every report is backed by primary research, expert interviews, and decades of market knowledge.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {researchers.map(r => (
            <motion.div key={r.name} variants={fadeInUp}>
              <div className="bg-white border border-slate-100 rounded-2xl p-6 h-full flex flex-col hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200">
                {/* Avatar */}
                <div className="flex items-start justify-between mb-4">
                  <div className="size-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20 flex items-center justify-center text-primary text-lg font-bold">
                    {r.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <a href={r.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${r.name} on LinkedIn`} className="text-slate-400 hover:text-primary transition-colors">
                    <Linkedin size={18} aria-hidden="true" />
                  </a>
                </div>

                <h2 className="text-base font-semibold text-slate-900 mb-0.5">{r.name}</h2>
                <p className="text-xs text-primary font-medium mb-3">{r.title}</p>
                <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">{r.bio}</p>

                {/* Expertise tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {r.expertise.map(e => (
                    <Badge key={e} variant="surface" size="xs">{e}</Badge>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100 text-xs text-slate-500">
                  <span className="flex items-center gap-1"><BookOpen size={12} className="text-primary" aria-hidden="true" />{r.reports} reports</span>
                  <span className="flex items-center gap-1"><Globe size={12} className="text-primary" aria-hidden="true" />Global coverage</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Join CTA */}
        <ScrollReveal className="mt-12 bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-10 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/3" aria-hidden="true" />
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white mb-3">Join Our Research Team</h2>
            <p className="text-white/70 mb-6 max-w-lg mx-auto">Are you a market research expert in pharma, nutraceuticals, or specialty chemicals? We're always looking for experienced analysts.</p>
            <a href="mailto:research@integermarket.com" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary font-semibold rounded-xl hover:bg-slate-50 transition-colors shadow-md">
              Get in Touch
            </a>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
