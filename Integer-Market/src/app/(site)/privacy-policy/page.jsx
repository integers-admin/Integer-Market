// import PrivacyPolicy from '../../../views/legal/PrivacyPolicy'

// export const metadata = {
//   title: 'Privacy Policy',
//   description: "Read Integer Market's Privacy Policy to understand how we collect, store, and protect your personal data when you browse or purchase market research reports.",
//   alternates: {
//     canonical: 'https://integermarket.com/privacy-policy',
//   },
//   robots: {
//     index: true,
//     follow: false,
//   },
// }

// export default function PrivacyPolicyPage() {
//   return <PrivacyPolicy />
// }




// import PrivacyPolicy from '../../../views/legal/PrivacyPolicy'
// import Script from 'next/script'

// export const metadata = {
//   title: 'Privacy Policy',
//   description: "Read Integer Market's Privacy Policy to understand how we collect, store, and protect your personal data when you browse or purchase market research reports.",
//   alternates: {
//     canonical: 'https://integermarket.com/privacy-policy',
//   },
//   robots: {
//     index: true,
//     follow: false,
//   },
// }

// export default function PrivacyPolicyPage() {
//   return (
//     <>
//       <Script
//         id="privacy-policy-schema"
//         type="application/ld+json"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "WebPage",
//             "name": "Privacy Policy | Integer Market",
//             "description": "Read Integer Market's Privacy Policy to understand how we collect, store, and protect your personal data.",
//             "url": "https://integermarket.com/privacy-policy",
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
//                   "name": "Privacy Policy"
//                 }
//               ]
//             }
//           })
//         }}
//       />

//       <PrivacyPolicy />
//     </>
//   )
// }



// src/app/(site)/privacy-policy/page.jsx
import PrivacyPolicy from '../../../views/legal/PrivacyPolicy'
import Script from 'next/script'

export const metadata = {
  title: 'Privacy Policy | Integer Market',
  description: "Read Integer Market's Privacy Policy to understand how we collect, store, and protect your personal data when you browse or purchase market research reports.",
  alternates: {
    canonical: 'https://integermarket.com/privacy-policy',
  },
  robots: {
    index: true,
    follow: false,
  },
  openGraph: {
    title: 'Privacy Policy | Integer Market',
    description: "Read Integer Market's Privacy Policy to understand how we collect, store, and protect your personal data when you browse or purchase market research reports.",
    url: 'https://integermarket.com/privacy-policy',
    type: 'website',
    siteName: 'Integer Market',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@integermarket',
    creator: '@integermarket',
    title: 'Privacy Policy | Integer Market',
    description: "Read Integer Market's Privacy Policy to understand how we collect, store, and protect your personal data.",
  },
}

export default function PrivacyPolicyPage() {
  const baseUrl = 'https://integermarket.com'

  const webpageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'Privacy Policy | Integer Market',
    'description': "Read Integer Market's Privacy Policy to understand how we collect, store, and protect your personal data when you browse or purchase market research reports.",
    'url': `${baseUrl}/privacy-policy`,
    'isPartOf': {
      '@type': 'WebSite',
      'name': 'Integer Market',
      'url': baseUrl,
    },
    'about': {
      '@type': 'Thing',
      'name': 'Privacy Policy',
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
          'name': 'Privacy Policy',
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
        id="privacy-policy-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webpageSchema),
        }}
      />

      <Script
        id="privacy-policy-breadcrumb-schema"
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
                'name': 'Privacy Policy',
              },
            ],
          }),
        }}
      />

      <PrivacyPolicy />
    </>
  )
}