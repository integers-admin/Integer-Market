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





// import { Suspense } from 'react'
// import Reports from '../../../views/Reports'
// import Script from 'next/script'

// export const metadata = {
//   title: 'Buy Market Research Reports Online',
//   description: 'Buy market research reports online. Industry analysis, market size, forecasts & trends across pharma, nutraceuticals, consumer goods, health, wellness, beauty & personal care.',
//   alternates: {
//     canonical: 'https://integermarket.com/report',
//   },
//   openGraph: {
//     title: 'Buy Market Research Reports Online',
//     description: 'Buy market research reports online. Industry analysis, market size, forecasts & trends across pharma, nutraceuticals, consumer goods, health, wellness, beauty & personal care.',
//     url: 'https://integermarket.com/report',
//   },
// }

// export default function ReportsPage() {
//   return (
//     <>
//       <Script
//         id="reports-page-schema"
//         type="application/ld+json"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "WebPage",
//             "name": "Buy Market Research Reports Online",
//             "description": "Buy market research reports online. Industry analysis, market size, forecasts & trends across pharma, nutraceuticals, consumer goods, health, wellness, beauty & personal care.",
//             "url": "https://integermarket.com/report",
//             "isPartOf": {
//               "@type": "WebSite",
//               "name": "Integer Market",
//               "url": "https://integermarket.com"
//             },
//             "breadcrumb": {
//               "@type": "BreadcrumbList",
//               "itemListElement": [
//                 {
//                   "@type": "ListItem",
//                   "position": 1,
//                   "name": "Home",
//                   "item": "https://integermarket.com"
//                 },
//                 {
//                   "@type": "ListItem",
//                   "position": 2,
//                   "name": "Reports"
//                 }
//               ]
//             }
//           })
//         }}
//       />

//       <Suspense fallback={<div className="min-h-screen bg-surface" />}>
//         <Reports />
//       </Suspense>
//     </>
//   )
// }



// src/app/(site)/report/page.jsx
import { Suspense } from 'react'
import Reports from '../../../views/Reports'
import Script from 'next/script'

export const metadata = {
  title: 'Buy Market Research Reports Online | Integer Market',
  description: 'Buy market research reports online. Industry analysis, market size, forecasts & trends across pharma, nutraceuticals, consumer goods, health, wellness, beauty & personal care.',
  alternates: {
    canonical: 'https://integermarket.com/report',
  },
  openGraph: {
    title: 'Buy Market Research Reports Online | Integer Market',
    description: 'Buy market research reports online. Industry analysis, market size, forecasts & trends across pharma, nutraceuticals, consumer goods, health, wellness, beauty & personal care.',
    url: 'https://integermarket.com/report',
    type: 'website',
    siteName: 'Integer Market',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@integermarket',
    creator: '@integermarket',
    title: 'Buy Market Research Reports Online',
    description: 'Buy market research reports online. Industry analysis, market size, forecasts & trends across pharma, nutraceuticals, consumer goods, health, wellness, beauty & personal care.',
  },
  keywords: [
    'buy market research reports',
    'industry analysis',
    'market size',
    'forecasts',
    'trends',
    'pharma market research',
    'nutraceuticals market research',
    'consumer goods market research',
  ],
}

export default function ReportsPage() {
  const baseUrl = 'https://integermarket.com'

  const webpageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'Buy Market Research Reports Online | Integer Market',
    'description': 'Buy market research reports online. Industry analysis, market size, forecasts & trends across pharma, nutraceuticals, consumer goods, health, wellness, beauty & personal care.',
    'url': `${baseUrl}/report`,
    'isPartOf': {
      '@type': 'WebSite',
      'name': 'Integer Market',
      'url': baseUrl,
    },
    'about': {
      '@type': 'Thing',
      'name': 'Market Research Reports',
    },
    'inLanguage': 'en-US',
    'dateModified': new Date().toISOString().split('T')[0],
    'breadcrumb': {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': baseUrl,
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Reports',
        },
      ],
    },
    'mainEntity': {
      '@type': 'Organization',
      'name': 'Integer Market',
      'legalName': 'Integers Insights Private Limited',
      'url': baseUrl,
      'logo': `${baseUrl}/assets/logo.png`,
      'email': 'info@integermarket.com',
      'telephone': '+91 8976993084',
      'address': {
        '@type': 'PostalAddress',
        'addressCountry': 'IN',
        'addressLocality': 'Mumbai',
        'addressRegion': 'Maharashtra',
        'postalCode': '400102',
      },
      'sameAs': [
        'https://www.linkedin.com/company/integersinsights',
        'https://x.com/integers71866',
        'https://www.facebook.com/IntegerMarket',
        'https://www.instagram.com/integers.insights',
      ],
    },
  }

  const collectionPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    'name': 'Buy Market Research Reports Online | Integer Market',
    'description': 'Buy market research reports online. Industry analysis, market size, forecasts & trends across pharma, nutraceuticals, consumer goods, health, wellness, beauty & personal care.',
    'url': `${baseUrl}/report`,
    'isPartOf': {
      '@type': 'WebSite',
      'name': 'Integer Market',
      'url': baseUrl,
    },
    'about': {
      '@type': 'Thing',
      'name': 'Market Research Reports',
    },
    'inLanguage': 'en-US',
    'mainEntity': {
      '@type': 'ItemList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Pharmaceutical Market Research Reports',
          'url': `${baseUrl}/industry/pharmaceutical`,
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Nutraceuticals Market Research Reports',
          'url': `${baseUrl}/industry/nutraceuticals`,
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': 'Consumer Goods Market Research Reports',
          'url': `${baseUrl}/industry/consumer-goods`,
        },
        {
          '@type': 'ListItem',
          'position': 4,
          'name': 'Health & Wellness Market Research Reports',
          'url': `${baseUrl}/industry/health-wellness`,
        },
        {
          '@type': 'ListItem',
          'position': 5,
          'name': 'Beauty & Personal Care Market Research Reports',
          'url': `${baseUrl}/industry/beauty-personal-care`,
        },
        {
          '@type': 'ListItem',
          'position': 6,
          'name': 'Chemicals Market Research Reports',
          'url': `${baseUrl}/industry/chemicals`,
        },
      ],
    },
  }

  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [webpageSchema, collectionPageSchema],
  }

  return (
    <>
      <Script
        id="reports-page-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(combinedSchema),
        }}
      />

      <Script
        id="reports-breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            'itemListElement': [
              {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': baseUrl,
              },
              {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Reports',
              },
            ],
          }),
        }}
      />

      <Suspense fallback={<div className="min-h-screen bg-surface" />}>
        <Reports />
      </Suspense>
    </>
  )
}