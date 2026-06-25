// import Disclaimer from '../../../views/legal/Disclaimer'

// export const metadata = {
//   title: 'Disclaimer',
//   description: 'Read the Integer Market Disclaimer on the accuracy and intended use of our market research reports. Data is provided for informational purposes to support business research',
//   alternates: {
//     canonical: 'https://integermarket.com/disclaimer',
//   },
//   robots: {
//     index: true,
//     follow: false,
//   },
// }

// export default function DisclaimerPage() {
//   return <Disclaimer />
// }



// import Disclaimer from '../../../views/legal/Disclaimer'
// import Script from 'next/script'

// export const metadata = {
//   title: 'Disclaimer',
//   description: 'Read the Integer Market Disclaimer on the accuracy and intended use of our market research reports. Data is provided for informational purposes to support business research',
//   alternates: {
//     canonical: 'https://integermarket.com/disclaimer',
//   },
//   robots: {
//     index: true,
//     follow: false,
//   },
// }

// export default function DisclaimerPage() {
//   return (
//     <>
//       <Script
//         id="disclaimer-schema"
//         type="application/ld+json"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "WebPage",
//             "name": "Disclaimer | Integer Market",
//             "description": "Read the Integer Market Disclaimer on the accuracy and intended use of our market research reports.",
//             "url": "https://integermarket.com/disclaimer",
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
//                   "name": "Disclaimer"
//                 }
//               ]
//             }
//           })
//         }}
//       />

//       <Disclaimer />
//     </>
//   )
// }


// src/app/(site)/disclaimer/page.jsx
import Disclaimer from '../../../views/legal/Disclaimer'
import Script from 'next/script'

export const metadata = {
  title: 'Disclaimer | Integer Market',
  description: 'Read the Integer Market Disclaimer on the accuracy and intended use of our market research reports. Data is provided for informational purposes to support business research',
  alternates: {
    canonical: 'https://integermarket.com/disclaimer',
  },
  robots: {
    index: true,
    follow: false,
  },
  openGraph: {
    title: 'Disclaimer | Integer Market',
    description: 'Read the Integer Market Disclaimer on the accuracy and intended use of our market research reports. Data is provided for informational purposes to support business research',
    url: 'https://integermarket.com/disclaimer',
    type: 'website',
    siteName: 'Integer Market',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@integermarket',
    creator: '@integermarket',
    title: 'Disclaimer | Integer Market',
    description: 'Read the Integer Market Disclaimer on the accuracy and intended use of our market research reports.',
  },
}

export default function DisclaimerPage() {
  const baseUrl = 'https://integermarket.com'

  const webpageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'Disclaimer | Integer Market',
    'description': 'Read the Integer Market Disclaimer on the accuracy and intended use of our market research reports. Data is provided for informational purposes to support business research',
    'url': `${baseUrl}/disclaimer`,
    'isPartOf': {
      '@type': 'WebSite',
      'name': 'Integer Market',
      'url': baseUrl,
    },
    'about': {
      '@type': 'Thing',
      'name': 'Disclaimer',
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
          'name': 'Disclaimer',
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

  return (
    <>
      <Script
        id="disclaimer-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webpageSchema),
        }}
      />
      
      <Script
        id="disclaimer-breadcrumb-schema"
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
                'name': 'Disclaimer',
              },
            ],
          }),
        }}
      />

      <Disclaimer />
    </>
  )
}