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




import PrivacyPolicy from '../../../views/legal/PrivacyPolicy'
import Script from 'next/script'

export const metadata = {
  title: 'Privacy Policy',
  description: "Read Integer Market's Privacy Policy to understand how we collect, store, and protect your personal data when you browse or purchase market research reports.",
  alternates: {
    canonical: 'https://integermarket.com/privacy-policy',
  },
  robots: {
    index: true,
    follow: false,
  },
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Script
        id="privacy-policy-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy | Integer Market",
            "description": "Read Integer Market's Privacy Policy to understand how we collect, store, and protect your personal data.",
            "url": "https://integermarket.com/privacy-policy",
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
                  "name": "Privacy Policy"
                }
              ]
            }
          })
        }}
      />

      <PrivacyPolicy />
    </>
  )
}