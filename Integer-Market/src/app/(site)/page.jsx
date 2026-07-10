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

// import Home from '../../views/Home'
// import Script from 'next/script'

// export const metadata = {
//   title: 'Market Research Reports & Global Industry Analysis',
//   description: 'Integer Market offers market research reports on ingredients, products, and technologies across food & drink, pharma, nutraceuticals, chemicals, and more. Make smarter business decisions with trusted global industry insights.',
//   alternates: {
//     canonical: 'https://integermarket.com',
//   },
// }

// export default function HomePage() {
//   return (
//     <>
//       <Script
//         id="homepage-schema"
//         type="application/ld+json"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "WebPage",
//             "name": "Market Research Reports & Global Industry Analysis",
//             "description": "Integer Market offers market research reports on ingredients, products, and technologies across food & drink, pharma, nutraceuticals, chemicals, and more.",
//             "url": "https://integermarket.com",
//             "isPartOf": {
//               "@type": "WebSite",
//               "name": "Integer Market",
//               "url": "https://integermarket.com"
//             }
//           })
//         }}
//       />

//       <Home />
//     </>
//   )
// }

// src/app/(site)/page.jsx
import { Suspense } from "react";
import Home from "../../views/Home";
import Script from "next/script";

export const metadata = {
  title: "Market Research Reports & Global Industry Analysis | Integer Market",
  description:
    "Integer Market offers market research reports on ingredients, products, and technologies across food & drink, pharma, nutraceuticals, chemicals, and more. Make smarter business decisions with trusted global industry insights.",
  alternates: {
    canonical: "https://www.integermarket.com",
  },
  openGraph: {
    title:
      "Market Research Reports & Global Industry Analysis | Integer Market",
    description:
      "Integer Market offers market research reports on ingredients, products, and technologies across food & drink, pharma, nutraceuticals, chemicals, and more.",
    url: "https://www.integermarket.com",
    type: "website",
    siteName: "Integer Market",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@integermarket",
    creator: "@integermarket",
    title:
      "Market Research Reports & Global Industry Analysis | Integer Market",
    description:
      "Integer Market offers market research reports on ingredients, products, and technologies across food & drink, pharma, nutraceuticals, chemicals, and more.",
  },
  keywords: [
    "market research reports",
    "global industry analysis",
    "pharma market research",
    "nutraceuticals market",
    "chemicals market",
    "food and drink market",
    "business intelligence",
    "market insights",
  ],
};

export default function HomePage() {
  const baseUrl = "https://www.integermarket.com";
  const currentDate = new Date().toISOString().split("T")[0];

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Market Research Reports & Global Industry Analysis | Integer Market",
    description:
      "Integer Market offers market research reports on ingredients, products, and technologies across food & drink, pharma, nutraceuticals, chemicals, and more. Make smarter business decisions with trusted global industry insights.",
    url: baseUrl,
    isPartOf: {
      "@type": "WebSite",
      name: "Integer Market",
      url: baseUrl,
    },
    about: {
      "@type": "Thing",
      name: "Market Research Reports",
    },
    inLanguage: "en-US",
    dateModified: currentDate,
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Integer Market",
    legalName: "Integers Insights Private Limited",
    url: baseUrl,
    logo: `${baseUrl}/assets/logo.png`,
    description:
      "Integer Market offers market research reports on ingredients, products, and technologies across food & drink, pharma, nutraceuticals, chemicals, and more. Make smarter business decisions with trusted global industry insights.",
    email: "info@integermarket.com",
    telephone: "+91 8976993084",
    foundingDate: "2026",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "50",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400102",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91 8976993084",
      contactType: "sales",
      availableLanguage: ["English", "Hindi"],
      email: "info@integermarket.com",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
        timeZone: "Asia/Kolkata",
      },
    },
    sameAs: [
      "https://www.linkedin.com/company/integersinsights",
      "https://x.com/integers71866",
      "https://www.facebook.com/IntegerMarket",
      "https://www.instagram.com/integers.insights",
    ],
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [webpageSchema, organizationSchema],
  };

  return (
    <>
      <Script
        id="homepage-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(combinedSchema),
        }}
      />

      <Script
        id="homepage-breadcrumb-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: baseUrl,
              },
            ],
          }),
        }}
      />

      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            Loading...
          </div>
        }
      >
        <Home />
      </Suspense>
    </>
  );
}
