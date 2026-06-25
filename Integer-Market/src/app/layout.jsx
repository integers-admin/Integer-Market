// import ToastProvider from "../components/ui/ToastProvider";
// import "./globals.css";
// import { Providers } from "./providers";

// import Script from "next/script";

// export const metadata = {
//   metadataBase: new URL("https://integermarket.com"),
//   title: {
//     default: "Integer Market | Global Market Research Reports",
//     template: "%s | Integer Market",
//   },
//   description:
//     "Actionable market intelligence across pharma, nutraceuticals, chemicals, herbal extracts and 12 more industries. 1,200+ research reports trusted by 5,000+ global decision-makers.",
//   keywords: [
//     "market research",
//     "pharmaceutical market",
//     "nutraceuticals",
//     "market intelligence",
//     "industry reports",
//     "market analysis",
//   ],
//   authors: [{ name: "Integer Market Research Team" }],
//   creator: "Integer Market",
//   publisher: "Integers Insights Private Limited",
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://integermarket.com",
//     siteName: "Integer Market",
//     title: "Integer Market | Global Market Research Reports",
//     description:
//       "Actionable market intelligence across pharma, nutraceuticals, chemicals & more. 1,200+ reports trusted by 5,000+ global decision-makers in 85+ countries.",
//     images: [
//       {
//         url: "/assets/og-default.png",
//         width: 1200,
//         height: 630,
//         alt: "Integer Market - Global Market Research Platform",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     site: "@integermarket",
//     creator: "@integermarket",
//     title: "Integer Market | Global Market Research Reports",
//     description:
//       "Actionable market intelligence across pharma, nutraceuticals & chemicals.",
//     images: ["/assets/og-default.png"],
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   alternates: {
//     canonical: "https://integermarket.com",
//   },
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link
//           rel="preconnect"
//           href="https://fonts.gstatic.com"
//           crossOrigin="anonymous"
//         />
//       </head>
//       <body>
//         <Script id="gtm" strategy="afterInteractive">
//           {`
//       (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//       new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//       j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//       'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//       })(window,document,'script','dataLayer','GTM-55CN3LGK');
//     `}
//         </Script>

//         <noscript>
//           <iframe
//             src="https://www.googletagmanager.com/ns.html?id=GTM-55CN3LGK"
//             height="0"
//             width="0"
//             style={{ display: "none", visibility: "hidden" }}
//           />
//         </noscript>
//         <a href="#main-content" className="skip-link">
//           Skip to main content
//         </a>

//         <Providers>{children}</Providers>
//         <ToastProvider />
//       </body>
//     </html>
//   );
// }






// // src/app/layout.jsx
// import ToastProvider from "../components/ui/ToastProvider";
// import "./globals.css";
// import { Providers } from "./providers";

// import Script from "next/script";

// export const metadata = {
//   metadataBase: new URL("https://integermarket.com"),
//   title: {
//     default: "Integer Market | Global Market Research Reports",
//     template: "%s | Integer Market",
//   },
//   description:
//     "Actionable market intelligence across pharma, nutraceuticals, chemicals, herbal extracts and 12 more industries. 1,200+ research reports trusted by 5,000+ global decision-makers.",
//   keywords: [
//     "market research",
//     "pharmaceutical market",
//     "nutraceuticals",
//     "market intelligence",
//     "industry reports",
//     "market analysis",
//   ],
//   authors: [{ name: "Integer Market Research Team" }],
//   creator: "Integer Market",
//   publisher: "Integers Insights Private Limited",
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: "https://integermarket.com",
//     siteName: "Integer Market",
//     title: "Integer Market | Global Market Research Reports",
//     description:
//       "Actionable market intelligence across pharma, nutraceuticals, chemicals & more. 1,200+ reports trusted by 5,000+ global decision-makers in 85+ countries.",
//     images: [
//       {
//         url: "/assets/logo.svg",
//         width: 1200,
//         height: 630,
//         alt: "Integer Market - Global Market Research Platform",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     site: "@integermarket",
//     creator: "@integermarket",
//     title: "Integer Market | Global Market Research Reports",
//     description:
//       "Actionable market intelligence across pharma, nutraceuticals & chemicals.",
//     images: ["/assets/logo.svg"],
//   },
//   robots: {
//     index: true,
//     follow: true,
//     googleBot: {
//       index: true,
//       follow: true,
//       "max-video-preview": -1,
//       "max-image-preview": "large",
//       "max-snippet": -1,
//     },
//   },
//   alternates: {
//     canonical: "https://integermarket.com",
//   },
// };

// export default function RootLayout({ children }) {
 
//   const baseUrl = "https://integermarket.com";

//   return (
//     <html lang="en">
//       <head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link
//           rel="preconnect"
//           href="https://fonts.gstatic.com"
//           crossOrigin="anonymous"
//         />

//         {/*  SCHEMA 1: Organization Schema - For Knowledge Panel */}
//         <Script
//           id="organization-schema"
//           type="application/ld+json"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "Organization",
//               "name": "Integer Market",
//               "url": baseUrl,
//               "logo": `${baseUrl}/assets/logo.png`,
//               "description": "Actionable market intelligence across pharma, nutraceuticals, chemicals, herbal extracts and 12 more industries. 1,200+ research reports trusted by 5,000+ global decision-makers.",
//               "email": "info@integermarket.com",
//               "telephone": "+91 8976993084",
//               "foundingDate": "2026",
//               "numberOfEmployees": {
//                 "@type": "QuantitativeValue",
//                 "value": "50"
//               },
//               "sameAs": [
//                 "https://www.linkedin.com/company/integersinsights",
//                 "https://x.com/integers71866",
//                 "https://www.facebook.com/integers.insights"
//               ],
//               "address": {
//                 "@type": "PostalAddress",
//                 "addressCountry": "IN",
//                 "addressLocality": "Mumbai",
//                 "addressRegion": "Maharashtra",
//                 "postalCode": "400102"
//               },
//               "contactPoint": {
//                 "@type": "ContactPoint",
//                 "telephone": "+91 8976993084",
//                 "contactType": "sales",
//                 "availableLanguage": ["English"],
//                 "email": "info@integermarket.com",
//                 "hoursAvailable": {
//                   "@type": "OpeningHoursSpecification",
//                   "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
//                   "opens": "09:00",
//                   "closes": "18:00",
//                   "timeZone": "Asia/Kolkata"
//                 }
//               }
//             })
//           }}
//         />

//         {/*  SCHEMA 2: Website Schema - For Site Search */}
//         <Script
//           id="website-schema"
//           type="application/ld+json"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "WebSite",
//               "name": "Integer Market",
//               "url": baseUrl,
//               "description": "Actionable market intelligence across pharma, nutraceuticals, chemicals, herbal extracts and 12 more industries. 1,200+ research reports trusted by 5,000+ global decision-makers.",
//               "inLanguage": "en-US",
//               "potentialAction": {
//                 "@type": "SearchAction",
//                 "target": {
//                   "@type": "EntryPoint",
//                   "urlTemplate": `${baseUrl}/search?q={search_term_string}`
//                 },
//                 "query-input": "required name=search_term_string"
//               },
//               "about": [
//                 {
//                   "@type": "Thing",
//                   "name": "Market Research"
//                 },
//                 {
//                   "@type": "Thing",
//                   "name": "Pharmaceutical Market Research"
//                 },
//                 {
//                   "@type": "Thing",
//                   "name": "Nutraceuticals Market Research"
//                 },
//                 {
//                   "@type": "Thing",
//                   "name": "Chemicals Market Research"
//                 }
//               ]
//             })
//           }}
//         />

//         {/*  SCHEMA 3: LocalBusiness Schema */}
//         <Script
//           id="localbusiness-schema"
//           type="application/ld+json"
//           strategy="afterInteractive"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify({
//               "@context": "https://schema.org",
//               "@type": "LocalBusiness",
//               "name": "Integer Market",
//               "image": `${baseUrl}/assets/logo.png`,
//               "@id": baseUrl,
//               "url": baseUrl,
//               "telephone": "+91 8976993084",
//               "email": "info@integermarket.com",
//               "address": {
//                 "@type": "PostalAddress",
//                 "addressCountry": "IN",
//                 "addressLocality": "Mumbai",
//                 "addressRegion": "Maharashtra",
//                 "postalCode": "400102"
//               },
//               "openingHoursSpecification": {
//                 "@type": "OpeningHoursSpecification",
//                 "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
//                 "opens": "09:00",
//                 "closes": "18:00",
//                 "timeZone": "Asia/Kolkata"
//               },
//               "sameAs": [
//                 "https://www.linkedin.com/company/integersinsights",
//                 "https://x.com/integers71866"
//               ]
//             })
//           }}
//         />
//       </head>
//       <body>
//         <Script id="gtm" strategy="afterInteractive">
//           {`
//             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//             })(window,document,'script','dataLayer','GTM-55CN3LGK');
//           `}
//         </Script>

//         <noscript>
//           <iframe
//             src="https://www.googletagmanager.com/ns.html?id=GTM-55CN3LGK"
//             height="0"
//             width="0"
//             style={{ display: "none", visibility: "hidden" }}
//           />
//         </noscript>

//         <a href="#main-content" className="skip-link">
//           Skip to main content
//         </a>

//         <Providers>{children}</Providers>
//         <ToastProvider />
//       </body>
//     </html>
//   );
// }





// src/app/layout.jsx
import ToastProvider from "../components/ui/ToastProvider";
import "./globals.css";
import { Providers } from "./providers";

import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://integermarket.com"),
  title: {
    default: "Integer Market | Global Market Research Reports",
    // template: "%s | Integer Market",
  },
  description:
    "Actionable market intelligence across pharma, nutraceuticals, chemicals, herbal extracts and 12 more industries. 1,200+ research reports trusted by 5,000+ global decision-makers.",
  keywords: [
    "market research",
    "pharmaceutical market",
    "nutraceuticals",
    "market intelligence",
    "industry reports",
    "market analysis",
  ],
  authors: [{ name: "Integer Market Research Team" }],
  creator: "Integer Market",
  publisher: "Integers Insights Private Limited",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://integermarket.com",
    siteName: "Integer Market",
    title: "Integer Market | Global Market Research Reports",
    description:
      "Actionable market intelligence across pharma, nutraceuticals, chemicals & more. 1,200+ reports trusted by 5,000+ global decision-makers in 85+ countries.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@integermarket",
    creator: "@integermarket",
    title: "Integer Market | Global Market Research Reports",
    description:
      "Actionable market intelligence across pharma, nutraceuticals & chemicals.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://integermarket.com",
  },
};

export default function RootLayout({ children }) {
  const baseUrl = "https://integermarket.com";

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Integer Market",
              "url": baseUrl,
              "logo": `${baseUrl}/assets/logo.png`,
              "description": "Actionable market intelligence across pharma, nutraceuticals, chemicals, herbal extracts and 12 more industries. 1,200+ research reports trusted by 5,000+ global decision-makers.",
              "email": "info@integermarket.com",
              "telephone": "+91 8976993084",
              "foundingDate": "2026",
              "numberOfEmployees": {
                "@type": "QuantitativeValue",
                "value": "50",
              },
              "sameAs": [
                "https://www.linkedin.com/company/integersinsights",
                "https://x.com/integers71866",
                "https://www.facebook.com/IntegerMarket",
                "https://www.instagram.com/integers.insights",
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "postalCode": "400102",
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 8976993084",
                "contactType": "sales",
                "availableLanguage": ["English", "Hindi"],
                "email": "info@integermarket.com",
                "hoursAvailable": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  "opens": "09:00",
                  "closes": "18:00",
                  "timeZone": "Asia/Kolkata",
                },
              },
            }),
          }}
        />

        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Integer Market",
              "url": baseUrl,
              "description":
                "Actionable market intelligence across pharma, nutraceuticals, chemicals, herbal extracts and 12 more industries. 1,200+ research reports trusted by 5,000+ global decision-makers.",
              "inLanguage": "en-US",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": `${baseUrl}/search?q={search_term_string}`,
                },
                "query-input": "required name=search_term_string",
              },
              "about": [
                {
                  "@type": "Thing",
                  "name": "Market Research",
                },
                {
                  "@type": "Thing",
                  "name": "Pharmaceutical Market Research",
                },
                {
                  "@type": "Thing",
                  "name": "Nutraceuticals Market Research",
                },
                {
                  "@type": "Thing",
                  "name": "Chemicals Market Research",
                },
              ],
            }),
          }}
        />

        <Script
          id="localbusiness-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Integer Market",
              "image": `${baseUrl}/assets/logo.png`,
              "@id": baseUrl,
              "url": baseUrl,
              "telephone": "+91 8976993084",
              "email": "info@integermarket.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN",
                "addressLocality": "Mumbai",
                "addressRegion": "Maharashtra",
                "postalCode": "400102",
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                "opens": "09:00",
                "closes": "18:00",
                "timeZone": "Asia/Kolkata",
              },
              "sameAs": [
                "https://www.linkedin.com/company/integersinsights",
                "https://x.com/integers71866",
                "https://www.facebook.com/IntegerMarket",
                "https://www.instagram.com/integers.insights",
              ],
            }),
          }}
        />
      </head>
      <body>
        
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-55CN3LGK');
          `}
        </Script>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-55CN3LGK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <Providers>{children}</Providers>
        <ToastProvider />
      </body>
    </html>
  );
}