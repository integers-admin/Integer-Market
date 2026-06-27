// "use client"
// import IndustryPage from "../../../../views/IndustryPage";
// import { industries } from "../../../../data/industries";
// import { useEffect } from "react";

// export async function generateMetadata({ params }) {
//   const { slug } = await params;

//   const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

//   // const industry = industries.find((i) => i.slug === slug);

//   console.log("industry slug: ", slug);

//   if (!industry) {
//     return {
//       title: "Industry Reports",
//       description: "Browse market research reports by industry.",
//     };
//   }

//   return {
//     title: `${industry.name} Market Research Reports`,
//     description: `${industry.description} Browse ${industry.reportCount}+ reports for actionable market intelligence.`,
//     alternates: {
//       canonical: `https://integermarket.com/industry/${slug}`,
//     },
//     openGraph: {
//       title: `${industry.name} Market Research Reports | Integer Market`,
//       description: `${industry.description} ${industry.reportCount}+ reports available.`,
//       url: `https://integermarket.com/industry/${slug}`,
//     },
//   };
// }

// export default function IndustryPageRoute() {

//   const {slug} =

//   const getIndustryReportsData = async () => {
//   try {
//       const token = localStorage.getItem("token");
//       const response = await axios.get(`${BASE_URL}/industry/reports?industry=${slug}`,{
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   }
// );
//       console.log("getIndustryReportsData response:", response);

//       // if (response?.status === 200) {

//       //   return true;
//       // }
//     } catch (error) {
//       console.log("Something went wrong:");
//     }
// }

//   return <IndustryPage />;
// }

// // wo
// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import axios from "axios";
// import IndustryPage from "../../../../views/IndustryPage";

// export default function IndustryPageRoute() {
//   const { slug } = useParams();

//   const [industryReports, setIndustryReports] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

//   useEffect(() => {
//     const getIndustryReportsData = async () => {
//       try {
//         setLoading(true);

//         const token = localStorage.getItem("token");

//         const response = await axios.get(
//           `${BASE_URL}/industry/reports?industry=${slug}`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           },
//         );

//         console.log("getIndustryReportsData response:", response);
//         if (response?.status === 200) {
//           setIndustryReports(response?.data);
//         }
//       } catch (error) {
//         console.log("Something went wrong:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (slug) {
//       getIndustryReportsData();
//     }
//   }, [slug]);

//   useEffect(() => {
//     if (!industryReports?.name) return;

//     document.title = `${industryReports.name} | Market Research Reports`;

//     const description = industryReports?.description
//       ? `${industryReports.description} Browse ${
//           industryReports.total || 0
//         }+ reports for actionable market intelligence.`
//       : "Browse market research reports by industry.";

//     let metaDescription = document.querySelector('meta[name="description"]');

//     if (!metaDescription) {
//       metaDescription = document.createElement("meta");
//       metaDescription.name = "description";
//       document.head.appendChild(metaDescription);
//     }

//     metaDescription.content = description;

//     let canonical = document.querySelector('link[rel="canonical"]');

//     if (!canonical) {
//       canonical = document.createElement("link");
//       canonical.rel = "canonical";
//       document.head.appendChild(canonical);
//     }

//     canonical.href = `https://integermarket.com/industry/${slug}`;
//   }, [industryReports, slug]);

//   return <IndustryPage industryReports={industryReports} loading={loading} />;
// }




// import IndustryPage from "../../../../views/IndustryPage";
// import { notFound } from "next/navigation";
// import { cookies } from "next/headers";

// const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// async function getIndustryReports(slug) {
//   if (!slug) return null;

//   const cookieStore = await cookies();
//   const token = cookieStore.get("token")?.value;

//   try {
//     const response = await fetch(
//       `${BASE_URL}/industry/reports?industry=${encodeURIComponent(slug)}`,
//       {
//         cache: "no-store",
//          headers: {
//           Accept: "application/json",
//           ...(token && {
//             Authorization: `Bearer ${token}`,
//           }),
//         },
//       }
//     );

//     if (!response.ok) {
//       console.error(
//         `Industry API Error: ${response.status} ${response.statusText}`
//       );
//       return null;
//     }

//     const data = await response.json();

//     if (!data) {
//       return null;
//     }

//     return data;
//   } catch (error) {
//     console.error("Failed to fetch industry reports:", error);
//     return null;
//   }
// }

// export async function generateMetadata({ params }) {
//   const { slug } = await params;

//   const industryReports = await getIndustryReports(slug);

//   if (!industryReports) {
//     return {
//       title: "Industry Not Found",
//       description: "The requested industry could not be found.",
//       robots: {
//         index: false,
//         follow: false,
//       },
//     };
//   }

//   const name = industryReports?.name || "Industry Reports";

//   const description = industryReports?.description
//     ? `${industryReports.description} Browse ${
//         industryReports.total || 0
//       }+ reports for actionable market intelligence.`
//     : "Browse market research reports by industry.";

//   return {
//     title: `${name} | Market Research Reports`,
//     description,

//     alternates: {
//       canonical: `https://integermarket.com/industry/${slug}`,
//     },

//     openGraph: {
//       title: `${name} | Market Research Reports`,
//       description,
//       url: `https://integermarket.com/industry/${slug}`,
//       type: "website",
//     },

//     twitter: {
//       card: "summary_large_image",
//       title: `${name} | Market Research Reports`,
//       description,
//     },
//   };
// }

// export default async function IndustryPageRoute({ params }) {
//   const { slug } = await params;

//   const industryReports = await getIndustryReports(slug);

//   if (!industryReports) {
//     notFound();
//   }

//   return (
//     <IndustryPage
//       industryReports={industryReports}
//       loading={false}
//     />
//   );
// }




// import IndustryPage from "../../../../views/IndustryPage";
// import { notFound } from "next/navigation";
// import { cookies } from "next/headers";
// import Script from "next/script";

// const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// async function getIndustryReports(slug) {
//   if (!slug) return null;

//   const cookieStore = await cookies();
//   const token = cookieStore.get("token")?.value;

//   try {
//     const response = await fetch(
//       `${BASE_URL}/industry/reports?industry=${encodeURIComponent(slug)}`,
//       {
//         cache: "no-store",
//         headers: {
//           Accept: "application/json",
//           ...(token && {
//             Authorization: `Bearer ${token}`,
//           }),
//         },
//       }
//     );

//     if (!response.ok) {
//       console.error(
//         `Industry API Error: ${response.status} ${response.statusText}`
//       );
//       return null;
//     }

//     const data = await response.json();

//     if (!data) {
//       return null;
//     }

//     return data;
//   } catch (error) {
//     console.error("Failed to fetch industry reports:", error);
//     return null;
//   }
// }

// export async function generateMetadata({ params }) {
//   const { slug } = await params;

//   const industryReports = await getIndustryReports(slug);

//   if (!industryReports) {
//     return {
//       title: "Industry Not Found",
//       description: "The requested industry could not be found.",
//       robots: {
//         index: false,
//         follow: false,
//       },
//     };
//   }

//   const name = industryReports?.name || "Industry Reports";

//   const description = industryReports?.description
//     ? `${industryReports.description} Browse ${
//         industryReports.total || 0
//       }+ reports for actionable market intelligence.`
//     : "Browse market research reports by industry.";

//   return {
//     title: `${name} | Market Research Reports`,
//     description,

//     alternates: {
//       canonical: `https://integermarket.com/industry/${slug}`,
//     },

//     openGraph: {
//       title: `${name} | Market Research Reports`,
//       description,
//       url: `https://integermarket.com/industry/${slug}`,
//       type: "website",
//     },

//     twitter: {
//       card: "summary_large_image",
//       title: `${name} | Market Research Reports`,
//       description,
//     },
//   };
// }

// export default async function IndustryPageRoute({ params }) {
//   const { slug } = await params;

//   const industryReports = await getIndustryReports(slug);

//   console.log("industryReports: ",industryReports);

//   if (!industryReports) {
//     notFound();
//   }

//   const industryName = industryReports?.name || slug;

//   return (
//     <>
//       <Script
//         id={`industry-schema-${slug}`}
//         type="application/ld+json"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify({
//             "@context": "https://schema.org",
//             "@type": "CollectionPage",
//             "name": `${industryName} Market Research Reports`,
//             "description": industryReports?.description || `Browse market research reports for ${industryName}`,
//             "url": `https://integermarket.com/industry/${slug}`,
//             "isPartOf": {
//               "@type": "WebSite",
//               "name": "Integer Market",
//               "url": "https://integermarket.com"
//             },
//             "about": {
//               "@type": "Thing",
//               "name": industryName
//             },
//             "breadcrumb": {
//               "@type": "BreadcrumbList",
//               "itemListElement": [
//                 {
//                   "@type": "ListItem",
//                   "position": 1,
//                   "name": "Home",
//                   "item": "https://integermarket.com"
//                 },
//                 {
//                   "@type": "ListItem",
//                   "position": 2,
//                   "name": "Industries",
//                   "item": "https://integermarket.com/industries"
//                 },
//                 {
//                   "@type": "ListItem",
//                   "position": 3,
//                   "name": industryName
//                 }
//               ]
//             },
//             "mainEntity": {
//               "@type": "ItemList",
//               "itemListElement": (industryReports?.reports || []).map((report, index) => ({
//                 "@type": "ListItem",
//                 "position": index + 1,
//                 "name": report.title || `Report ${index + 1}`,
//                 "url": `https://integermarket.com/report-name/${report.seo_slug || report.report_id}`
//               }))
//             }
//           })
//         }}
//       />

//       <IndustryPage
//         industryReports={industryReports}
//         loading={false}
//       />
//     </>
//   );
// }



// src/app/(site)/industry/[slug]/page.jsx
import IndustryPage from "../../../../views/IndustryPage";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import Script from "next/script";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

async function getIndustryReports(slug) {
  if (!slug) return null;

  const cookieStore = await cookies();
  const token = cookieStore.get("1w8YJdmwOhRZylWbmcHX")?.value;

  try {
    const response = await fetch(
      `${BASE_URL}/industry/reports?industry=${encodeURIComponent(slug)}`,
      {
        cache: "no-store",
        headers: {
          Accept: "application/json",
          ...(token && {
            Authorization: `Bearer ${token}`,
          }),
        },
      }
    );

    if (!response.ok) {
      console.error(
        `Industry API Error: ${response.status} ${response.statusText}`
      );
      return null;
    }

    const data = await response.json();

    if (!data) {
      return null;
    }

    return data;
  } catch (error) {
    console.error("Failed to fetch industry reports:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const industryReports = await getIndustryReports(slug);

  if (!industryReports) {
    return {
      title: "Industry Not Found",
      description: "The requested industry could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const name = industryReports?.name || "Industry Reports";

  const description = industryReports?.description
    ? `${industryReports.description} Browse ${
        industryReports.total || 0
      }+ reports for actionable market intelligence.`
    : "Browse market research reports by industry.";

  return {
    title: `${name}`,
    description,

    alternates: {
      canonical: `https://integermarket.com/industry/${slug}`,
    },

    openGraph: {
      title: `${name}`,
      description,
      url: `https://integermarket.com/industry/${slug}`,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `${name}`,
      description,
    },
  };
}

export default async function IndustryPageRoute({ params }) {
  const { slug } = await params;

  const industryReports = await getIndustryReports(slug);

  if (!industryReports) {
    notFound();
  }

  const industryName = industryReports?.name || slug;
  const baseUrl = "https://integermarket.com";

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${industryName}`,
    "description": industryReports?.description || `Browse market research reports for ${industryName}`,
    "url": `${baseUrl}/industry/${slug}`,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Integer Market",
      "url": baseUrl,
    },
    "about": {
      "@type": "Thing",
      "name": industryName,
    },
    "inLanguage": "en-US",
    "dateModified": new Date().toISOString().split('T')[0],
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": baseUrl,
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Industries",
          "item": `${baseUrl}/industries`,
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": industryName,
        },
      ],
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": (industryReports?.reports || []).map((report, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": report.title || `Report ${index + 1}`,
        "url": `${baseUrl}/report-name/${report.seo_slug || report.report_id}`,
      })),
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/industry/${slug}`,
    },
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": `${industryName} Market Research Reports`,
    "description": industryReports?.description || `Browse market research reports for ${industryName}`,
    "url": `${baseUrl}/industry/${slug}`,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Integer Market",
      "url": baseUrl,
    },
    "about": {
      "@type": "Thing",
      "name": industryName,
    },
    "inLanguage": "en-US",
    "dateModified": new Date().toISOString().split('T')[0],
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": baseUrl,
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Industries",
          "item": `${baseUrl}/industries`,
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": industryName,
        },
      ],
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Integer Market",
    "legalName": "Integers Insights Private Limited",
    "url": baseUrl,
    "logo": `${baseUrl}/assets/logo.png`,
    "email": "info@integermarket.com",
    "telephone": "+91 8976993084",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400102",
    },
    "sameAs": [
      "https://www.linkedin.com/company/integersinsights",
      "https://x.com/integers71866",
      "https://www.facebook.com/IntegerMarket",
      "https://www.instagram.com/integers.insights",
    ],
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [collectionPageSchema, webpageSchema, organizationSchema],
  };

  return (
    <>
      <Script
        id={`industry-schema-${slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(combinedSchema),
        }}
      />

      <Script
        id={`industry-breadcrumb-schema-${slug}`}
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
                "item": baseUrl,
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Industries",
                "item": `${baseUrl}/industries`,
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": industryName,
              },
            ],
          }),
        }}
      />

      <IndustryPage industryReports={industryReports} />
    </>
  );
}