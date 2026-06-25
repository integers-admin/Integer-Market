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




// src/app/(site)/cancellation-policy/page.jsx
import CancellationPolicy from '../../../views/legal/CancellationPolicy'
import Script from 'next/script'

export const metadata = {
  title: 'Cancellation Policy',
  description: "Learn about Integer Market's cancellation policy for market research report purchases. Simple, transparent terms designed to protect every customer.",
  alternates: {
    canonical: 'https://integermarket.com/cancellation-policy',
  },
  robots: {
    index: true,
    follow: false,
  },
}

export default function CancellationPolicyPage() {
  return (
    <>
      {/* WebPage + Breadcrumb Schema */}
      <Script
        id="cancellation-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Cancellation Policy | Integer Market",
            "description": "Learn about Integer Market's cancellation policy for market research report purchases. Simple, transparent terms designed to protect every customer.",
            "url": "https://integermarket.com/cancellation-policy",
            "isPartOf": {
              "@type": "WebSite",
              "name": "Integer Market",
              "url": "https://integermarket.com"
            },
            "about": {
              "@type": "Thing",
              "name": "Cancellation Policy"
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
                  "name": "Cancellation Policy"
                }
              ]
            }
          })
        }}
      />

      <CancellationPolicy />
    </>
  )
}