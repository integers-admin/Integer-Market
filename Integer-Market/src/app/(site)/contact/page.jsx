// import Contact from '../../../views/Contact'

// export const metadata = {
//   title: 'Contact | Get Help Finding Reports',
//   description: "Need help finding the right market research report? Contact the Integer Market team for queries on reports, purchases, or custom research needs. We're here to help.",
//   alternates: {
//     canonical: 'https://integermarket.com/contact',
//   },
//   openGraph: {
//     title: 'Contact | Get Help Finding Reports',
//     description: "Need help finding the right market research report? Contact the Integer Market team for queries on reports, purchases, or custom research needs. We're here to help.",
//     url: 'https://integermarket.com/contact',
//   },
// }

// export default function ContactPage() {
//   return <Contact />
// }




// import Contact from '../../../views/Contact'
// import Script from 'next/script'

// export const metadata = {
//   title: 'Contact | Get Help Finding Reports',
//   description: "Need help finding the right market research report? Contact the Integer Market team for queries on reports, purchases, or custom research needs. We're here to help.",
//   alternates: {
//     canonical: 'https://integermarket.com/contact',
//   },
//   openGraph: {
//     title: 'Contact | Get Help Finding Reports',
//     description: "Need help finding the right market research report? Contact the Integer Market team for queries on reports, purchases, or custom research needs. We're here to help.",
//     url: 'https://integermarket.com/contact',
//   },
// }

// export default function ContactPage() {
//   return (
//     <>
//       <Script
//         id="contact-page-schema"
//         type="application/ld+json"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "ContactPage",
//             "name": "Contact | Get Help Finding Reports",
//             "description": "Need help finding the right market research report? Contact the Integer Market team for queries on reports, purchases, or custom research needs.",
//             "url": "https://integermarket.com/contact",
//             "isPartOf": {
//               "@type": "WebSite",
//               "name": "Integer Market",
//               "url": "https://integermarket.com"
//             },
//             "mainEntity": {
//               "@type": "ContactPoint",
//               "telephone": "+91 8976993084",
//               "contactType": "sales",
//               "email": "info@integermarket.com"
//             }
//           })
//         }}
//       />

//       <Script
//         id="contact-breadcrumb-schema"
//         type="application/ld+json"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "BreadcrumbList",
//             "itemListElement": [
//               {
//                 "@type": "ListItem",
//                 "position": 1,
//                 "name": "Home",
//                 "item": "https://integermarket.com"
//               },
//               {
//                 "@type": "ListItem",
//                 "position": 2,
//                 "name": "Contact"
//               }
//             ]
//           })
//         }}
//       />

//       <Contact />
//     </>
//   )
// }


// src/app/(site)/contact/page.jsx
import Contact from '../../../views/Contact'
import Script from 'next/script'

export const metadata = {
  title: 'Contact | Get Help Finding Reports',
  description: "Need help finding the right market research report? Contact the Integer Market team for queries on reports, purchases, or custom research needs. We're here to help.",
  alternates: {
    canonical: 'https://www.integermarket.com/contact',
  },
  openGraph: {
    title: 'Contact | Get Help Finding Reports',
    description: "Need help finding the right market research report? Contact the Integer Market team for queries on reports, purchases, or custom research needs. We're here to help.",
    url: 'https://www.integermarket.com/contact',
    type: 'website',
    siteName: 'Integer Market',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@integermarket',
    creator: '@integermarket',
    title: 'Contact | Get Help Finding Reports',
    description: "Need help finding the right market research report? Contact the Integer Market team for queries on reports, purchases, or custom research needs.",
  },
  keywords: [
    'contact integer market',
    'market research support',
    'report purchase help',
    'custom research',
    'market intelligence queries',
  ],
}

export default function ContactPage() {
  const baseUrl = 'https://www.integermarket.com'

  const contactPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'name': 'Contact | Get Help Finding Reports',
    'description': "Need help finding the right market research report? Contact the Integer Market team for queries on reports, purchases, or custom research needs. We're here to help.",
    'url': `${baseUrl}/contact`,
    'isPartOf': {
      '@type': 'WebSite',
      'name': 'Integer Market',
      'url': baseUrl,
    },
    'about': {
      '@type': 'Thing',
      'name': 'Contact Support',
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
          'name': 'Contact',
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
      'contactPoint': [
        {
          '@type': 'ContactPoint',
          'telephone': '+91 8976993084',
          'contactType': 'sales',
          'availableLanguage': ['English', 'Hindi'],
          'email': 'info@integermarket.com',
          'hoursAvailable': {
            '@type': 'OpeningHoursSpecification',
            'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            'opens': '09:00',
            'closes': '18:00',
            'timeZone': 'Asia/Kolkata',
          },
        },
        {
          '@type': 'ContactPoint',
          'contactType': 'customer support',
          'availableLanguage': ['English', 'Hindi'],
          'email': 'support@integermarket.com',
        },
      ],
      'sameAs': [
        'https://www.linkedin.com/company/integersinsights',
        'https://x.com/integers71866',
        'https://www.facebook.com/IntegerMarket',
        'https://www.instagram.com/integers.insights',
      ],
    },
  }

  const webpageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': 'Contact | Get Help Finding Reports',
    'description': "Need help finding the right market research report? Contact the Integer Market team for queries on reports, purchases, or custom research needs.",
    'url': `${baseUrl}/contact`,
    'isPartOf': {
      '@type': 'WebSite',
      'name': 'Integer Market',
      'url': baseUrl,
    },
    'about': {
      '@type': 'Thing',
      'name': 'Contact Support',
    },
    'inLanguage': 'en-US',
    'dateModified': new Date().toISOString().split('T')[0],
  }

  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [contactPageSchema, webpageSchema],
  }

  return (
    <>
      <Script
        id="contact-page-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(combinedSchema),
        }}
      />

      <Script
        id="contact-breadcrumb-schema"
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
                'name': 'Contact',
              },
            ],
          }),
        }}
      />

      <Contact />
    </>
  )
}