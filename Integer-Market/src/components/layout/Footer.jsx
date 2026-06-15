'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Twitter, ArrowRight, ShieldCheck, Lock, Building2, FileCheck, BadgeCheck, ExternalLink, Sparkles,Instagram,Youtube } from 'lucide-react'
import Logo from '../ui/Logo'
import { useState } from 'react'

const links = {
  Reports: [
    { label: 'All Reports', to: '/report' },
    { label: 'Research Methodology', to: '/research-methodology' },
    { label: 'Our Researchers', to: '/our-researchers' },
  ],
  Industries: [
    { label: 'Consumer Goods', to: '/industry/consumer-goods' },
    { label: 'Health & Wellness', to: '/industry/health-wellness' },
    { label: 'Ingredients & Materials', to: '/industry/ingredients-materials' },
    { label: 'Future Updates', to: '/industry/future-updates' },
    { label: 'View All', to: '/report' },
  ],
  Company: [
    { label: 'About Us', to: '/about-us' },
    { label: 'Contact', to: '/contact' },
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Terms & Conditions', to: '/term-conditions' },
    { label: 'Cancellation Policy', to: '/cancellation-policy' },
    { label: 'Disclaimer', to: '/disclaimer' },
  ],
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleNewsletter = (e) => {
    e.preventDefault()
    if (email) { setSubmitted(true); setEmail('') }
  }

  return (
    <footer className="bg-slate-50 border-t border-slate-200" role="contentinfo">
      {/* Newsletter bar */}
      <div className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Stay ahead of the market</h2>
              <p className="text-sm text-slate-500 mt-1">Get the latest research alerts and industry intelligence in your inbox.</p>
            </div>
            {submitted ? (
              <p className="text-primary font-medium text-sm">Thanks for subscribing!</p>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-3 w-full md:w-auto" aria-label="Newsletter signup">
                <label htmlFor="footer-email" className="sr-only">Email address</label>
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 md:w-64 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-primary transition-colors"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-xl hover:bg-primary-dark transition-colors cursor-pointer"
                >
                  Subscribe
                  <ArrowRight size={14} aria-hidden="true" />
                </motion.button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* ── Compliance / Trust strip ─────────────────────────── */}
      <div className="border-b border-slate-200 py-4 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {[
              { icon: ShieldCheck, label: 'GDPR Compliant' },
              { icon: Lock,        label: 'SSL / TLS Secured' },
              { icon: Building2,   label: 'Registered Company' },
              { icon: FileCheck,   label: 'Data Privacy Maintained' },
              { icon: BadgeCheck,  label: 'Verified Research Data' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-1.5 text-xs text-slate-500">
                <Icon size={13} className="text-primary flex-shrink-0" aria-hidden="true" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-6">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" aria-label="Integer Market home">
              <Logo className="h-9 w-auto mb-4" />
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-xs">
              Actionable market intelligence across pharma, nutraceuticals, chemicals, and 13 more industries. Trusted by 20,000+ companies globally.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="mailto:info@integermarket.com"
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-primary transition-colors"
                aria-label="Email us"
              >
                <Mail size={15} aria-hidden="true" />
                info@integermarket.com
              </a>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://www.youtube.com/@integers.insights"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Integer Market on LinkedIn"
                className="p-2 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-primary hover:border-primary/30 transition-colors"
              >
                <Youtube size={16} aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/integers.insights/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Integer Market on LinkedIn"
                className="p-2 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-primary hover:border-primary/30 transition-colors"
              >
                <Instagram size={16} aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/company/integersinsights"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Integer Market on LinkedIn"
                className="p-2 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-primary hover:border-primary/30 transition-colors"
              >
                <Linkedin size={16} aria-hidden="true" />
              </a>
              <a
                href="https://x.com/integers71866"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Integer Market on X (Twitter)"
                className="p-2 rounded-lg bg-white border border-slate-200 text-slate-500 hover:text-primary hover:border-primary/30 transition-colors"
              >
                <Twitter size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* ReportInShort promo card - compact single column */}
          <div className="lg:col-span-1">
            <a
              href="https://reportinshort.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 p-4 rounded-2xl bg-gradient-to-br from-primary/8 via-primary/5 to-transparent border border-primary/20 hover:border-primary/40 hover:shadow-md transition-all duration-300 h-full"
              aria-label="Visit ReportInShort - Data in a glance (opens in new tab)"
            >
              <div className="flex items-center gap-2">
                <div className="size-8 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-300">
                  <Sparkles size={14} className="text-white" aria-hidden="true" />
                </div>
                <span className="text-sm font-bold text-slate-900">ReportInShort</span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Get 5 market snapshots free on trial, then unlock more.
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:underline mt-auto">
                Quick insights <ArrowRight size={10} aria-hidden="true" />
              </span>
            </a>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">{group}</h3>
              <ul className="space-y-2.5" role="list">
                {items.map(item => (
                  <li key={item.to}>
                    <Link
                      href={item.to}
                      className="text-sm text-slate-600 hover:text-slate-900 transition-colors duration-150"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <p className="text-xs text-slate-500 font-medium">
              &copy; {new Date().getFullYear()} Integers Insights Private Limited. All rights reserved.
            </p>
            <p className="text-xs text-slate-400 mt-0.5">
              Trading as <span className="font-medium">Integer Market</span> · Market intelligence for global decision-makers.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <Link href="/privacy-policy" className="hover:text-slate-600 transition-colors">Privacy</Link>
            <Link href="/term-conditions" className="hover:text-slate-600 transition-colors">Terms</Link>
            <Link href="/disclaimer" className="hover:text-slate-600 transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
