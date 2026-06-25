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




// src/app/(site)/term-conditions/page.jsx
import TermsConditions from '../../../views/legal/TermsConditions'
import Script from 'next/script'

export const metadata = {
  title: 'Terms & conditions',
  description: 'Review the Terms & Conditions for purchasing market research reports from Integer Market. Understand permitted usage, licensing, and your rights as a buyer.',
  alternates: {
    canonical: 'https://integermarket.com/term-conditions',
  },
  robots: {
    index: true,
    follow: false,
  },
}

export default function TermsConditionsPage() {
  return (
    <>
      {/* WebPage + Breadcrumb Schema */}
      <Script
        id="terms-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms & Conditions | Integer Market",
            "description": "Review the Terms & Conditions for purchasing market research reports from Integer Market. Understand permitted usage, licensing, and your rights as a buyer.",
            "url": "https://integermarket.com/term-conditions",
            "isPartOf": {
              "@type": "WebSite",
              "name": "Integer Market",
              "url": "https://integermarket.com"
            },
            "about": {
              "@type": "Thing",
              "name": "Terms and Conditions"
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
                  "name": "Terms & Conditions"
                }
              ]
            }
          })
        }}
      />

      <TermsConditions />
    </>
  )
}