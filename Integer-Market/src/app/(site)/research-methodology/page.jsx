// import ResearchMethodology from '../../../views/ResearchMethodology'

// export const metadata = {
//   title: 'Research Methodology',
//   description: 'Explore the research methodology behind Integer Market reports - covering primary and secondary data collection, market validation, and industry-specific analysis frameworks.',
//   alternates: {
//     canonical: 'https://integermarket.com/research-methodology',
//   },
//   openGraph: {
//     title: 'Research Methodology',
//     description: 'Explore the research methodology behind Integer Market reports - covering primary and secondary data collection, market validation, and industry-specific analysis frameworks.',
//     url: 'https://integermarket.com/research-methodology',
//   },
// }

// export default function ResearchMethodologyPage() {
//   return <ResearchMethodology />
// }






import ResearchMethodology from '../../../views/ResearchMethodology'
import Script from 'next/script'

export const metadata = {
  title: 'Research Methodology',
  description: 'Explore the research methodology behind Integer Market reports - covering primary and secondary data collection, market validation, and industry-specific analysis frameworks.',
  alternates: {
    canonical: 'https://integermarket.com/research-methodology',
  },
  openGraph: {
    title: 'Research Methodology',
    description: 'Explore the research methodology behind Integer Market reports - covering primary and secondary data collection, market validation, and industry-specific analysis frameworks.',
    url: 'https://integermarket.com/research-methodology',
  },
}

export default function ResearchMethodologyPage() {
  return (
    <>
      <Script
        id="methodology-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Research Methodology | Integer Market",
            "description": "Explore the research methodology behind Integer Market reports - covering primary and secondary data collection, market validation, and industry-specific analysis frameworks.",
            "url": "https://integermarket.com/research-methodology",
            "isPartOf": {
              "@type": "WebSite",
              "name": "Integer Market",
              "url": "https://integermarket.com"
            },
            "about": {
              "@type": "Thing",
              "name": "Research Methodology"
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
                  "name": "Research Methodology"
                }
              ]
            }
          })
        }}
      />

      <ResearchMethodology />
    </>
  )
}