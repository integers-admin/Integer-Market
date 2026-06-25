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




import AboutUs from '../../../views/AboutUs'
import Script from 'next/script'

export const metadata = {
  title: 'About Us | Market Research Reports Provider | Integer Market',
  description: 'Integer Market is a trusted market research reports store specialising in ingredients, technologies, and global industry analysis. We help businesses, investors, and researchers.',
  alternates: {
    canonical: 'https://integermarket.com/about-us',
  },
  openGraph: {
    title: 'About Us | Market Research Reports Provider | Integer Market',
    description: 'Integer Market is a trusted market research reports store specialising in ingredients, technologies, and global industry analysis. We help businesses, investors, and researchers.',
    url: 'https://integermarket.com/about-us',
  },
}

export default function AboutUsPage() {
  return (
    <>
      <Script
        id="about-us-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Us | Market Research Reports Provider | Integer Market",
            "description": "Integer Market is a trusted market research reports store specialising in ingredients, technologies, and global industry analysis. We help businesses, investors, and researchers.",
            "url": "https://integermarket.com/about-us",
            "isPartOf": {
              "@type": "WebSite",
              "name": "Integer Market",
              "url": "https://integermarket.com"
            },
            "about": {
              "@type": "Thing",
              "name": "Market Research Reports Provider"
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
                  "name": "About Us"
                }
              ]
            }
          })
        }}
      />

      <AboutUs />
    </>
  )
}