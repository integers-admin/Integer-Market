// import AboutUs from '../../../views/AboutUs'

// export const metadata = {
//   title: 'About Us | Market Research Reports Provider | Integer Market',
//   description: 'Integer Market is a trusted market research reports store specialising in ingredients, technologies, and global industry analysis. We help businesses, investors, and researchers.',
//   alternates: {
//     canonical: 'https://integermarket.com/about-us',
//   },
//   openGraph: {
//     title: 'About Us | Market Research Reports Provider | Integer Market',
//     description: 'Integer Market is a trusted market research reports store specialising in ingredients, technologies, and global industry analysis. We help businesses, investors, and researchers.',
//     url: 'https://integermarket.com/about-us',
//   },
// }

// export default function AboutUsPage() {
//   return <AboutUs />
// }




// import AboutUs from '../../../views/AboutUs'
// import Script from 'next/script'

// export const metadata = {
//   title: 'About Us | Market Research Reports Provider | Integer Market',
//   description: 'Integer Market is a trusted market research reports store specialising in ingredients, technologies, and global industry analysis. We help businesses, investors, and researchers.',
//   alternates: {
//     canonical: 'https://integermarket.com/about-us',
//   },
//   openGraph: {
//     title: 'About Us | Market Research Reports Provider | Integer Market',
//     description: 'Integer Market is a trusted market research reports store specialising in ingredients, technologies, and global industry analysis. We help businesses, investors, and researchers.',
//     url: 'https://integermarket.com/about-us',
//   },
// }

// export default function AboutUsPage() {
//   return (
//     <>
//       <Script
//         id="about-us-schema"
//         type="application/ld+json"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "AboutPage",
//             "name": "About Us | Market Research Reports Provider | Integer Market",
//             "description": "Integer Market is a trusted market research reports store specialising in ingredients, technologies, and global industry analysis. We help businesses, investors, and researchers.",
//             "url": "https://integermarket.com/about-us",
//             "isPartOf": {
//               "@type": "WebSite",
//               "name": "Integer Market",
//               "url": "https://integermarket.com"
//             },
//             "about": {
//               "@type": "Thing",
//               "name": "Market Research Reports Provider"
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
//                   "name": "About Us"
//                 }
//               ]
//             }
//           })
//         }}
//       />

//       <AboutUs />
//     </>
//   )
// }





// src/app/(site)/about-us/page.jsx
import AboutUs from '../../../views/AboutUs'
import Script from 'next/script'

export const metadata = {
  title: 'About Us | Market Research Reports Provider | Integer Market',
  description: 'Integer Market is a trusted market research reports store specialising in ingredients, technologies, and global industry analysis. We help businesses, investors, and researchers.',
  alternates: {
    canonical: 'https://www.integermarket.com/about-us',
  },
  openGraph: {
    title: 'About Us | Market Research Reports Provider | Integer Market',
    description: 'Integer Market is a trusted market research reports store specialising in ingredients, technologies, and global industry analysis. We help businesses, investors, and researchers.',
    url: 'https://www.integermarket.com/about-us',
    type: 'website',
    siteName: 'Integer Market',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@integermarket',
    creator: '@integermarket',
    title: 'About Us | Market Research Reports Provider | Integer Market',
    description: 'Integer Market is a trusted market research reports store specialising in ingredients, technologies, and global industry analysis.',
  },
  keywords: [
    'about integer market',
    'market research company',
    'industry analysis provider',
    'business intelligence',
    'market research reports',
    'global market insights',
  ],
}

export default function AboutUsPage() {
  const baseUrl = 'https://www.integermarket.com'

  const aboutPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    'name': 'About Us | Market Research Reports Provider | Integer Market',
    'description': 'Integer Market is a trusted market research reports store specialising in ingredients, technologies, and global industry analysis. We help businesses, investors, and researchers.',
    'url': `${baseUrl}/about-us`,
    'isPartOf': {
      '@type': 'WebSite',
      'name': 'Integer Market',
      'url': baseUrl,
    },
    'about': {
      '@type': 'Thing',
      'name': 'Market Research Reports Provider',
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
          'name': 'About Us',
        },
      ],
    },
    'mainEntity': {
      '@type': 'Organization',
      'name': 'Integer Market',
      'legalName': 'Integers Insights Private Limited',
      'description': 'Integer Market is a global market research platform providing actionable intelligence across 12+ industries. Trusted by 5,000+ decision-makers in 85+ countries.',
      'url': baseUrl,
      'logo': `${baseUrl}/assets/logo.png`,
      'email': 'info@integermarket.com',
      'telephone': '+91 8976993084',
      'foundingDate': '2026',
      'numberOfEmployees': {
        '@type': 'QuantitativeValue',
        'value': '50',
      },
      'address': {
        '@type': 'PostalAddress',
        'addressCountry': 'IN',
        'addressLocality': 'Mumbai',
        'addressRegion': 'Maharashtra',
        'postalCode': '400102',
      },
      'contactPoint': {
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
    'name': 'About Us | Market Research Reports Provider | Integer Market',
    'description': 'Integer Market is a trusted market research reports store specialising in ingredients, technologies, and global industry analysis.',
    'url': `${baseUrl}/about-us`,
    'isPartOf': {
      '@type': 'WebSite',
      'name': 'Integer Market',
      'url': baseUrl,
    },
    'about': {
      '@type': 'Thing',
      'name': 'Market Research Reports Provider',
    },
    'inLanguage': 'en-US',
    'dateModified': new Date().toISOString().split('T')[0],
  }

 
  const combinedSchema = {
    '@context': 'https://schema.org',
    '@graph': [aboutPageSchema, webpageSchema],
  }

  return (
    <>
      <Script
        id="about-us-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(combinedSchema),
        }}
      />

      <Script
        id="about-us-breadcrumb-schema"
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
                'name': 'About Us',
              },
            ],
          }),
        }}
      />

      <AboutUs />
    </>
  )
}