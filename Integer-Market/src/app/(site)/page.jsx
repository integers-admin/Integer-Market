// import Home from '../../views/Home'

// export const metadata = {
//   title: 'Market Research Reports & Global Industry Analysis',
//   description: 'Integer Market offers market research reports on ingredients, products, and technologies across food & drink, pharma, nutraceuticals, chemicals, and more. Make smarter business decisions with trusted global industry insights.',
//   alternates: {
//     canonical: 'https://integermarket.com',
//   },
// }

// export default function HomePage() {
//   return <Home />
// }




import Home from '../../views/Home'
import Script from 'next/script'

export const metadata = {
  title: 'Market Research Reports & Global Industry Analysis',
  description: 'Integer Market offers market research reports on ingredients, products, and technologies across food & drink, pharma, nutraceuticals, chemicals, and more. Make smarter business decisions with trusted global industry insights.',
  alternates: {
    canonical: 'https://integermarket.com',
  },
}

export default function HomePage() {
  return (
    <>
      <Script
        id="homepage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Market Research Reports & Global Industry Analysis",
            "description": "Integer Market offers market research reports on ingredients, products, and technologies across food & drink, pharma, nutraceuticals, chemicals, and more.",
            "url": "https://integermarket.com",
            "isPartOf": {
              "@type": "WebSite",
              "name": "Integer Market",
              "url": "https://integermarket.com"
            }
          })
        }}
      />

      <Home />
    </>
  )
}