import { Suspense } from 'react'
import Reports from '../../../views/Reports'

export const metadata = {
  title: 'Buy Market Research Reports Online',
  description: 'Buy market research reports online. Industry analysis, market size, forecasts & trends across pharma, nutraceuticals, consumer goods, health , wellness, beauty & personal care.',
  alternates: {
    canonical: 'https://integermarket.com/report',
  },
  openGraph: {
    title: 'Buy Market Research Reports Online',
    description: 'Buy market research reports online. Industry analysis, market size, forecasts & trends across pharma, nutraceuticals, consumer goods, health , wellness, beauty & personal care.',
    url: 'https://integermarket.com/report',
  },
}

export default function ReportsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-surface" />}>
      <Reports />
    </Suspense>
  )
}
