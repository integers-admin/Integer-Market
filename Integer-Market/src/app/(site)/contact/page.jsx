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




// src/app/(site)/contact/page.jsx
import Contact from '../../../views/Contact'
import Script from 'next/script'

export const metadata = {
  title: 'Contact | Get Help Finding Reports',
  description: "Need help finding the right market research report? Contact the Integer Market team for queries on reports, purchases, or custom research needs. We're here to help.",
  alternates: {
    canonical: 'https://integermarket.com/contact',
  },
  openGraph: {
    title: 'Contact | Get Help Finding Reports',
    description: "Need help finding the right market research report? Contact the Integer Market team for queries on reports, purchases, or custom research needs. We're here to help.",
    url: 'https://integermarket.com/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      {/* ContactPage Schema */}
      <Script
        id="contact-page-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact | Get Help Finding Reports",
            "description": "Need help finding the right market research report? Contact the Integer Market team for queries on reports, purchases, or custom research needs.",
            "url": "https://integermarket.com/contact",
            "isPartOf": {
              "@type": "WebSite",
              "name": "Integer Market",
              "url": "https://integermarket.com"
            },
            "mainEntity": {
              "@type": "ContactPoint",
              "telephone": "+91 8976993084",
              "contactType": "sales",
              "email": "info@integermarket.com"
            }
          })
        }}
      />

      {/* Breadcrumb Schema */}
      <Script
        id="contact-breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
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
                "name": "Contact"
              }
            ]
          })
        }}
      />

      <Contact />
    </>
  )
}