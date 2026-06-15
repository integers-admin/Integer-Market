import { reports } from '../data/reports'
import { industries } from '../data/industries'
import { reportTypes } from '../data/reportTypes'
import { useCases } from '../data/useCases'

const BASE_URL = 'https://integermarket.com'

export default function sitemap() {
  const now = new Date().toISOString()

  // Static pages
  const staticPages = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE_URL}/report`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE_URL}/about-us`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/our-researchers`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/research-methodology`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/term-conditions`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/cancellation-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/disclaimer`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]

  // Report detail pages
  const reportPages = reports.map((report) => ({
    url: `${BASE_URL}/report-name/${report.slug}`,
    lastModified: report.publishDate ? new Date(report.publishDate).toISOString() : now,
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  // Industry pages
  const industryPages = industries.map((industry) => ({
    url: `${BASE_URL}/industry/${industry.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.75,
  }))

  // Report type pages
  const reportTypePages = reportTypes.map((rt) => ({
    url: `${BASE_URL}/report-type/${rt.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.65,
  }))

  // Use case pages
  const useCasePages = useCases.map((uc) => ({
    url: `${BASE_URL}/usecase/${uc.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.65,
  }))

  return [
    ...staticPages,
    ...reportPages,
    ...industryPages,
    ...reportTypePages,
    ...useCasePages,
  ]
}
