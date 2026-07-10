// import ResearchMethodology from '../../../views/ResearchMethodology'

// export const metadata = {
//   title: 'Research Methodology',
//   description: 'Explore the research methodology behind Integer Market reports - covering primary and secondary data collection, market validation, and industry-specific analysis frameworks.',
//   alternates: {
//     canonical: 'https://integermarket.com/research-methodology',
//   },
//   openGraph: {
//     title: 'Research Methodology',
//     description: 'Explore the research methodology behind Integer Market reports - covering primary and secondary data collection, market validation, and industry-specific analysis frameworks.',
//     url: 'https://integermarket.com/research-methodology',
//   },
// }

// export default function ResearchMethodologyPage() {
//   return <ResearchMethodology />
// }






// import ResearchMethodology from '../../../views/ResearchMethodology'
// import Script from 'next/script'

// export const metadata = {
//   title: 'Research Methodology',
//   description: 'Explore the research methodology behind Integer Market reports - covering primary and secondary data collection, market validation, and industry-specific analysis frameworks.',
//   alternates: {
//     canonical: 'https://integermarket.com/research-methodology',
//   },
//   openGraph: {
//     title: 'Research Methodology',
//     description: 'Explore the research methodology behind Integer Market reports - covering primary and secondary data collection, market validation, and industry-specific analysis frameworks.',
//     url: 'https://integermarket.com/research-methodology',
//   },
// }

// export default function ResearchMethodologyPage() {
//   return (
//     <>
//       <Script
//         id="methodology-schema"
//         type="application/ld+json"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "WebPage",
//             "name": "Research Methodology | Integer Market",
//             "description": "Explore the research methodology behind Integer Market reports - covering primary and secondary data collection, market validation, and industry-specific analysis frameworks.",
//             "url": "https://integermarket.com/research-methodology",
//             "isPartOf": {
//               "@type": "WebSite",
//               "name": "Integer Market",
//               "url": "https://integermarket.com"
//             },
//             "about": {
//               "@type": "Thing",
//               "name": "Research Methodology"
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
//                   "name": "Research Methodology"
//                 }
//               ]
//             }
//           })
//         }}
//       />

//       <ResearchMethodology />
//     </>
//   )
// }



// src/app/(site)/research-methodology/page.jsx
import ResearchMethodology from '../../../views/ResearchMethodology'
import Script from 'next/script'

export const metadata = {
  title: 'Research Methodology | Integer Market',
  description: 'Explore the research methodology behind Integer Market reports - covering primary and secondary data collection, market validation, and industry-specific analysis frameworks.',
  alternates: {
    canonical: 'https://www.integermarket.com/research-methodology',
  },
  openGraph: {
    title: 'Research Methodology | Integer Market',
    description: 'Explore the research methodology behind Integer Market reports - covering primary and secondary data collection, market validation, and industry-specific analysis frameworks.',
    url: 'https://www.integermarket.com/research-methodology',
    type: 'website',
    siteName: 'Integer Market',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@integermarket',
    creator: '@integermarket',
    title: 'Research Methodology | Integer Market',
    description: 'Explore the research methodology behind Integer Market reports - covering primary and secondary data collection, market validation, and industry-specific analysis frameworks.',
  },
}

export default function ResearchMethodologyPage() {
  const baseUrl = 'https://www.integermarket.com'

  const webpageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'Research Methodology | Integer Market',
    'description': 'Explore the research methodology behind Integer Market reports - covering primary and secondary data collection, market validation, and industry-specific analysis frameworks.',
    'url': `${baseUrl}/research-methodology`,
    'isPartOf': {
      '@type': 'WebSite',
      'name': 'Integer Market',
      'url': baseUrl,
    },
    'about': {
      '@type': 'Thing',
      'name': 'Research Methodology',
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
          'name': 'Research Methodology',
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

  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [webpageSchema],
  }

  return (
    <>
      <Script
        id="methodology-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(combinedSchema),
        }}
      />

      <Script
        id="methodology-breadcrumb-schema"
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
                'name': 'Research Methodology',
              },
            ],
          }),
        }}
      />

      <ResearchMethodology />
    </>
  )
}