// import CancellationPolicy from '../../../views/legal/CancellationPolicy'

// export const metadata = {
//   title: 'Cancellation Policy',
//   description: "Learn about Integer Market's cancellation policy for market research report purchases. Simple, transparent terms designed to protect every customer.",
//   alternates: {
//     canonical: 'https://integermarket.com/cancellation-policy',
//   },
//   robots: {
//     index: true,
//     follow: false,
//   },
// }

// export default function CancellationPolicyPage() {
//   return <CancellationPolicy />
// }




// import CancellationPolicy from '../../../views/legal/CancellationPolicy'
// import Script from 'next/script'

// export const metadata = {
//   title: 'Cancellation Policy',
//   description: "Learn about Integer Market's cancellation policy for market research report purchases. Simple, transparent terms designed to protect every customer.",
//   alternates: {
//     canonical: 'https://integermarket.com/cancellation-policy',
//   },
//   robots: {
//     index: true,
//     follow: false,
//   },
// }

// export default function CancellationPolicyPage() {
//   return (
//     <>
//       <Script
//         id="cancellation-schema"
//         type="application/ld+json"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "WebPage",
//             "name": "Cancellation Policy | Integer Market",
//             "description": "Learn about Integer Market's cancellation policy for market research report purchases. Simple, transparent terms designed to protect every customer.",
//             "url": "https://integermarket.com/cancellation-policy",
//             "isPartOf": {
//               "@type": "WebSite",
//               "name": "Integer Market",
//               "url": "https://integermarket.com"
//             },
//             "about": {
//               "@type": "Thing",
//               "name": "Cancellation Policy"
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
//                   "name": "Cancellation Policy"
//                 }
//               ]
//             }
//           })
//         }}
//       />

//       <CancellationPolicy />
//     </>
//   )
// }


// src/app/(site)/cancellation-policy/page.jsx
import CancellationPolicy from '../../../views/legal/CancellationPolicy'
import Script from 'next/script'

export const metadata = {
  title: 'Cancellation Policy | Integer Market',
  description: "Learn about Integer Market's cancellation policy for market research report purchases. Simple, transparent terms designed to protect every customer.",
  alternates: {
    canonical: 'https://integermarket.com/cancellation-policy',
  },
  robots: {
    index: true,
    follow: false,
  },
  openGraph: {
    title: 'Cancellation Policy | Integer Market',
    description: "Learn about Integer Market's cancellation policy for market research report purchases. Simple, transparent terms designed to protect every customer.",
    url: 'https://integermarket.com/cancellation-policy',
    type: 'website',
    siteName: 'Integer Market',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@integermarket',
    creator: '@integermarket',
    title: 'Cancellation Policy | Integer Market',
    description: "Learn about Integer Market's cancellation policy for market research report purchases.",
  },
}

export default function CancellationPolicyPage() {
  const baseUrl = 'https://integermarket.com'

  const webpageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'Cancellation Policy | Integer Market',
    'description': "Learn about Integer Market's cancellation policy for market research report purchases. Simple, transparent terms designed to protect every customer.",
    'url': `${baseUrl}/cancellation-policy`,
    'isPartOf': {
      '@type': 'WebSite',
      'name': 'Integer Market',
      'url': baseUrl,
    },
    'about': {
      '@type': 'Thing',
      'name': 'Cancellation Policy',
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
          'name': 'Cancellation Policy',
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
        id="cancellation-policy-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webpageSchema),
        }}
      />

      <Script
        id="cancellation-policy-breadcrumb-schema"
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
                'name': 'Cancellation Policy',
              },
            ],
          }),
        }}
      />

      <CancellationPolicy />
    </>
  )
}