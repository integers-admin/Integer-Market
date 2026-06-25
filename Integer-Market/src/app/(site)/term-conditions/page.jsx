// import TermsConditions from '../../../views/legal/TermsConditions'

// export const metadata = {
//   title: 'Terms & conditions',
//   description: 'Review the Terms & Conditions for purchasing market research reports from Integer Market. Understand permitted usage, licensing, and your rights as a buyer.',
//   alternates: {
//     canonical: 'https://integermarket.com/term-conditions',
//   },
//   robots: {
//     index: true,
//     follow: false,
//   },
// }

// export default function TermsConditionsPage() {
//   return <TermsConditions />
// }




// import TermsConditions from '../../../views/legal/TermsConditions'
// import Script from 'next/script'

// export const metadata = {
//   title: 'Terms & conditions',
//   description: 'Review the Terms & Conditions for purchasing market research reports from Integer Market. Understand permitted usage, licensing, and your rights as a buyer.',
//   alternates: {
//     canonical: 'https://integermarket.com/term-conditions',
//   },
//   robots: {
//     index: true,
//     follow: false,
//   },
// }

// export default function TermsConditionsPage() {
//   return (
//     <>
//       <Script
//         id="terms-schema"
//         type="application/ld+json"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "WebPage",
//             "name": "Terms & Conditions | Integer Market",
//             "description": "Review the Terms & Conditions for purchasing market research reports from Integer Market. Understand permitted usage, licensing, and your rights as a buyer.",
//             "url": "https://integermarket.com/term-conditions",
//             "isPartOf": {
//               "@type": "WebSite",
//               "name": "Integer Market",
//               "url": "https://integermarket.com"
//             },
//             "about": {
//               "@type": "Thing",
//               "name": "Terms and Conditions"
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
//                   "name": "Terms & Conditions"
//                 }
//               ]
//             }
//           })
//         }}
//       />

//       <TermsConditions />
//     </>
//   )
// }




// src/app/(site)/term-conditions/page.jsx
import TermsConditions from '../../../views/legal/TermsConditions'
import Script from 'next/script'

export const metadata = {
  title: 'Terms & Conditions | Integer Market',
  description: 'Review the Terms & Conditions for purchasing market research reports from Integer Market. Understand permitted usage, licensing, and your rights as a buyer.',
  alternates: {
    canonical: 'https://integermarket.com/term-conditions',
  },
  robots: {
    index: true,
    follow: false,
  },
  openGraph: {
    title: 'Terms & Conditions | Integer Market',
    description: 'Review the Terms & Conditions for purchasing market research reports from Integer Market. Understand permitted usage, licensing, and your rights as a buyer.',
    url: 'https://integermarket.com/term-conditions',
    type: 'website',
    siteName: 'Integer Market',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@integermarket',
    creator: '@integermarket',
    title: 'Terms & Conditions | Integer Market',
    description: 'Review the Terms & Conditions for purchasing market research reports from Integer Market.',
  },
}

export default function TermsConditionsPage() {
  const baseUrl = 'https://integermarket.com'

  const webpageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'Terms & Conditions | Integer Market',
    'description': 'Review the Terms & Conditions for purchasing market research reports from Integer Market. Understand permitted usage, licensing, and your rights as a buyer.',
    'url': `${baseUrl}/term-conditions`,
    'isPartOf': {
      '@type': 'WebSite',
      'name': 'Integer Market',
      'url': baseUrl,
    },
    'about': {
      '@type': 'Thing',
      'name': 'Terms and Conditions',
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
          'name': 'Terms & Conditions',
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
        id="terms-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(combinedSchema),
        }}
      />

      <Script
        id="terms-breadcrumb-schema"
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
                'name': 'Terms & Conditions',
              },
            ],
          }),
        }}
      />

      <TermsConditions />
    </>
  )
}