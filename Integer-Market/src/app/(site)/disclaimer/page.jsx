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


// src/app/(site)/disclaimer/page.jsx
import Disclaimer from '../../../views/legal/Disclaimer'
import Script from 'next/script'

export const metadata = {
  title: 'Disclaimer',
  description: 'Read the Integer Market Disclaimer on the accuracy and intended use of our market research reports. Data is provided for informational purposes to support business research',
  alternates: {
    canonical: 'https://integermarket.com/disclaimer',
  },
  robots: {
    index: true,
    follow: false,
  },
}

export default function DisclaimerPage() {
  return (
    <>
      {/* WebPage + Breadcrumb Schema */}
      <Script
        id="disclaimer-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Disclaimer | Integer Market",
            "description": "Read the Integer Market Disclaimer on the accuracy and intended use of our market research reports.",
            "url": "https://integermarket.com/disclaimer",
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
                  "name": "Disclaimer"
                }
              ]
            }
          })
        }}
      />

      <Disclaimer />
    </>
  )
}