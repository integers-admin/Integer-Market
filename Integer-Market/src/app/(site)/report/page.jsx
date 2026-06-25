// import { Suspense } from 'react'
// import Reports from '../../../views/Reports'

// export const metadata = {
//   title: 'Buy Market Research Reports Online',
//   description: 'Buy market research reports online. Industry analysis, market size, forecasts & trends across pharma, nutraceuticals, consumer goods, health , wellness, beauty & personal care.',
//   alternates: {
//     canonical: 'https://integermarket.com/report',
//   },
//   openGraph: {
//     title: 'Buy Market Research Reports Online',
//     description: 'Buy market research reports online. Industry analysis, market size, forecasts & trends across pharma, nutraceuticals, consumer goods, health , wellness, beauty & personal care.',
//     url: 'https://integermarket.com/report',
//   },
// }

// export default function ReportsPage() {
//   return (
//     <Suspense fallback={<div className="min-h-screen bg-surface" />}>
//       <Reports />
//     </Suspense>
//   )
// }





import { Suspense } from 'react'
import Reports from '../../../views/Reports'
import Script from 'next/script'

export const metadata = {
  title: 'Buy Market Research Reports Online',
  description: 'Buy market research reports online. Industry analysis, market size, forecasts & trends across pharma, nutraceuticals, consumer goods, health, wellness, beauty & personal care.',
  alternates: {
    canonical: 'https://integermarket.com/report',
  },
  openGraph: {
    title: 'Buy Market Research Reports Online',
    description: 'Buy market research reports online. Industry analysis, market size, forecasts & trends across pharma, nutraceuticals, consumer goods, health, wellness, beauty & personal care.',
    url: 'https://integermarket.com/report',
  },
}

export default function ReportsPage() {
  return (
    <>
      <Script
        id="reports-page-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Buy Market Research Reports Online",
            "description": "Buy market research reports online. Industry analysis, market size, forecasts & trends across pharma, nutraceuticals, consumer goods, health, wellness, beauty & personal care.",
            "url": "https://integermarket.com/report",
            "isPartOf": {
              "@type": "WebSite",
              "name": "Integer Market",
              "url": "https://integermarket.com"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://integermarket.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Reports"
                }
              ]
            }
          })
        }}
      />

      <Suspense fallback={<div className="min-h-screen bg-surface" />}>
        <Reports />
      </Suspense>
    </>
  )
}