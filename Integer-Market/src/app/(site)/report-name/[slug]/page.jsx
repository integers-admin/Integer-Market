// import ReportDetail from '../../../../views/ReportDetail'
// import { reports } from '../../../../data/reports'

// export async function generateMetadata({ params }) {
//   const { slug } = await params
//   const report = reports.find((r) => r.slug === slug)

//   if (!report) {
//     return {
//       title: 'Report Not Found',
//       description: 'The requested market research report could not be found.',
//     }
//   }

//   return {
//     title: report.title,
//     description: report.description || `In-depth market research report on ${report.title}. Get comprehensive analysis, market size, growth forecasts, and competitive landscape.`,
//     alternates: {
//       canonical: `https://integermarket.com/report-name/${slug}`,
//     },
//     openGraph: {
//       title: `${report.title} | Integer Market`,
//       description: report.description || `Comprehensive market analysis for ${report.title}.`,
//       url: `https://integermarket.com/report-name/${slug}`,
//       type: 'article',
//     },
//   }
// }

// export default function ReportDetailPage() {
//   return <ReportDetail />
// }

//  "use client";

//  import { useParams } from "next/navigation";
//  import ReportDetail from "../../../../views/ReportDetail";
//  import { useEffect, useState } from "react";
//  import axios from "axios";

//  export default function ReportDetailPage() {
//    const params = useParams();
//    const { slug } = params;

//    const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

//    const [amount, setAmount] = useState("");
//    const [reportId, setReportId] = useState("");
//    const [reportPages, setReportPages] = useState("");
//    const [reportCovers, setReportCovers] = useState([]);
//    const [reportSupports, setReportSupports] = useState([]);
//    const [tableContent, setTableContent] = useState([]);
//    const [imgPath, setImgPath] = useState(null);
//    const [title, setTitle] = useState("");
//    const [subTitle, setSubTitle] = useState("");
//    const [seoKeywords, setSeoKeywords] = useState([]);
//    const [pdfPath, setPdfPath] = useState(null);
//    const [publishDate, setPublishDate] = useState("");
//    const [marketSize, setMarketSize] = useState("");
//    const [cagrData, setCagrData] = useState("");
//    const [coverageDurationYears, setCoverageDurationYears] = useState(0);
//    const [subIndustry, setSubIndustry] = useState("");
//    const [seoSlug, setSeoSlug] = useState("");
//    const [primaryTopic, setPrimaryTopic] = useState("");

//    const getReportDetailPageData = async () => {
//      try {
//        let response = await axios.get(`${BASE_URL}/reports/${slug}/full`);
//        if (response?.status === 200) {
//          setAmount(response?.data?.price_info?.amount_cents);
//          setReportId(response?.data?.price_info?.report_unique_id);
//          setPublishDate(response?.data?.price_info?.publish_date);
//         setReportPages(response?.data?.price_info?.page_count);
//          setReportCovers(response?.data?.scope?.[0]?.values || []);
//          setReportSupports(response?.data?.scope?.[1]?.values || []);
//          setTableContent(response?.data?.sections || []);
//          setImgPath(response?.data?.price_info?.image_path || null);
//          setTitle(response?.data?.price_info?.title);
//         setMarketSize(response?.data?.price_info?.market_size);
//          setCagrData(response?.data?.price_info?.cagr);
//          setCoverageDurationYears(
//            response?.data?.price_info?.coverage_duration_years,
//          );
//          setSubTitle(response?.data?.price_info?.subtitle);
//          setPdfPath(response?.data?.price_info?.pdf_url || null);
//          setSubIndustry(response?.data?.price_info?.sub_industry);
//          const keywords =
//            response?.data?.price_info?.seo_keywords?.split(",") || [];
//          setSeoKeywords(keywords);
//          setSeoSlug(response?.data?.price_info?.seo_slug);
//          setPrimaryTopic(response?.data?.price_info?.primary_topic);
//        }
//      } catch (err) {
//        console.log("Something went wrong");
//      }
//    };

//    useEffect(() => {
//      if (!slug) return;
//      getReportDetailPageData();
//    }, [slug]);
//    useEffect(() => {
//      if (!title) return;

//      document.title = `${title} | Market Research Report`;

//      const description = subTitle
//        ? subTitle
//        : `Get detailed insights on ${title}, including market size, CAGR, industry trends, competitive landscape, and future outlook.`;

//      // Meta Description
//      let metaDescription = document.querySelector('meta[name="description"]');

//      if (!metaDescription) {
//       metaDescription = document.createElement("meta");
//        metaDescription.name = "description";
//       document.head.appendChild(metaDescription);
//      }

//      metaDescription.content = description;

//      // Canonical
//      let canonical = document.querySelector('link[rel="canonical"]');

//      if (!canonical) {
//        canonical = document.createElement("link");
//        canonical.rel = "canonical";
//        document.head.appendChild(canonical);
//      }

//      canonical.href = `https://integermarket.com/report-name/${slug}`;
//    }, [title, subTitle, slug]);

//    return (
//      <ReportDetail
//        amount={amount}
//        imgPath={imgPath}
//        title={title}
//        subTitle={subTitle}
//        reportPages={reportPages}
//        publishDate={publishDate}
//        reportId={reportId}
//        reportCovers={reportCovers}
//        reportSupports={reportSupports}
//        marketSize={marketSize}
//        cagrData={cagrData}
//        coverageDurationYears={coverageDurationYears}
//        tableContent={tableContent}
//        seoKeywords={seoKeywords}
//        pdfPath={pdfPath}
//        subIndustry={subIndustry}
//        seoSlug={seoSlug}
//        primaryTopic={primaryTopic}
//      />
//    );
//  }

// import ReportDetail from "../../../../views/ReportDetail";
// import { notFound } from "next/navigation";
// import { cookies } from "next/headers";

// const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// async function getReportDetail(slug) {
//   if (!slug) return null;

//   try {
//     const cookieStore = await cookies();
//     const token = cookieStore.get("token")?.value;

//     const res = await fetch(
//       `${BASE_URL}/reports/${encodeURIComponent(slug)}/full`,
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

//     if (!res.ok) {
//       console.log(
//         `Report API Error: ${res.status} ${res.statusText}`
//       );
//       return null;
//     }

//     const data = await res.json();

//     if (!data) {
//       return null;
//     }

//     return data;
//   } catch (error) {
//     console.error("Report fetch failed:", error);
//     return null;
//   }
// }

// export async function generateMetadata({ params }) {
//   const { slug } = await params;

//   const data = await getReportDetail(slug);

//   if (!data?.price_info) {
//     return {
//       title: "Report Not Found",
//       description:
//         "The requested market research report could not be found.",
//       robots: {
//         index: false,
//         follow: false,
//       },
//     };
//   }

//   const priceInfo = data.price_info;

//   const title =
//     priceInfo?.seo_title?.trim() || "Market Research Report";

//   const subTitle = priceInfo?.seo_description?.trim() || "";

//   return {
//     title: `${title} | Market Research Report`,
//     description:
//       subTitle ||
//       `Get detailed insights on ${title}, including market size, CAGR, industry trends, competitive landscape, and future outlook.`,

//     alternates: {
//       canonical: `https://integermarket.com/report-name/${slug}`,
//     },

//     openGraph: {
//       title: `${title} | Market Research Report`,
//       description:
//         subTitle ||
//         `Comprehensive market analysis for ${title}.`,
//       url: `https://integermarket.com/report-name/${slug}`,
//       type: "article",
//     },

//     twitter: {
//       card: "summary_large_image",
//       title: `${title} | Market Research Report`,
//       description:
//         subTitle ||
//         `Comprehensive market analysis for ${title}.`,
//     },
//   };
// }

// export default async function ReportDetailPage({ params }) {
//   const { slug } = await params;

//   const data = await getReportDetail(slug);

//   if (!data?.price_info) {
//     notFound();
//   }

//   const priceInfo = data?.price_info ?? {};
//   const scope = Array.isArray(data?.scope) ? data.scope : [];
//   const sections = Array.isArray(data?.sections)
//     ? data.sections
//     : [];

//   const reportCovers = scope?.[0]?.values ?? [];
//   const reportSupports = scope?.[1]?.values ?? [];

//   return (
//     <ReportDetail
//       amount={priceInfo?.amount_cents ?? ""}
//       reportId={priceInfo?.report_unique_id ?? ""}
//       publishDate={priceInfo?.publish_date ?? ""}
//       reportPages={priceInfo?.page_count ?? ""}
//       reportCovers={reportCovers}
//       reportSupports={reportSupports}
//       tableContent={sections}
//       imgPath={priceInfo?.image_path ?? null}
//       title={priceInfo?.title ?? ""}
//       subTitle={priceInfo?.subtitle ?? ""}
//       seoKeywords={
//         typeof priceInfo?.seo_keywords === "string"
//           ? priceInfo.seo_keywords
//               .split(",")
//               .map((item) => item.trim())
//               .filter(Boolean)
//           : []
//       }
//       pdfPath={priceInfo?.pdf_url ?? null}
//       marketSize={priceInfo?.market_size ?? ""}
//       cagrData={priceInfo?.cagr ?? ""}
//       coverageDurationYears={
//         priceInfo?.coverage_duration_years ?? 0
//       }
//       subIndustry={priceInfo?.sub_industry ?? ""}
//       seoSlug={priceInfo?.seo_slug ?? ""}
//       primaryTopic={priceInfo?.primary_topic ?? ""}
//     />
//   );
// }

// import ReportDetail from "../../../../views/ReportDetail";
// import { notFound } from "next/navigation";
// import { cookies } from "next/headers";
// import Script from "next/script";

// const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// async function getReportDetail(slug) {
//   if (!slug) return null;

//   try {
//     const cookieStore = await cookies();
//     const token = cookieStore.get("token")?.value;

//     const res = await fetch(
//       `${BASE_URL}/reports/${encodeURIComponent(slug)}/full`,
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

//     if (!res.ok) {
//       console.log(`Report API Error: ${res.status} ${res.statusText}`);
//       return null;
//     }

//     const data = await res.json();

//     if (!data) {
//       return null;
//     }

//     return data;
//   } catch (error) {
//     console.error("Report fetch failed:", error);
//     return null;
//   }
// }

// export async function generateMetadata({ params }) {
//   const { slug } = await params;

//   const data = await getReportDetail(slug);

//   if (!data?.price_info) {
//     return {
//       title: "Report Not Found",
//       description: "The requested market research report could not be found.",
//       robots: {
//         index: false,
//         follow: false,
//       },
//     };
//   }

//   const priceInfo = data.price_info;

//   const title = priceInfo?.seo_title?.trim() || "Market Research Report";

//   const subTitle = priceInfo?.seo_description?.trim() || "";

//   return {
//     title: `${title} | Market Research Report`,
//     description:
//       subTitle ||
//       `Get detailed insights on ${title}, including market size, CAGR, industry trends, competitive landscape, and future outlook.`,

//     alternates: {
//       canonical: `https://integermarket.com/report-name/${slug}`,
//     },

//     openGraph: {
//       title: `${title} | Market Research Report`,
//       description: subTitle || `Comprehensive market analysis for ${title}.`,
//       url: `https://integermarket.com/report-name/${slug}`,
//       type: "article",
//     },

//     twitter: {
//       card: "summary_large_image",
//       title: `${title} | Market Research Report`,
//       description: subTitle || `Comprehensive market analysis for ${title}.`,
//     },
//   };
// }

// export default async function ReportDetailPage({ params }) {
//   const { slug } = await params;

//   const data = await getReportDetail(slug);

//   if (!data?.price_info) {
//     notFound();
//   }

//   const priceInfo = data?.price_info ?? {};
//   const scope = Array.isArray(data?.scope) ? data.scope : [];
//   const sections = Array.isArray(data?.sections) ? data.sections : [];

//   const reportCovers = scope?.[0]?.values ?? [];
//   const reportSupports = scope?.[1]?.values ?? [];

//   const reportTitle = priceInfo?.title || "Market Research Report";
//   const reportDescription = priceInfo?.seo_description || priceInfo?.subtitle || "";
//   const reportPrice = priceInfo?.amount_cents ? (parseFloat(priceInfo.amount_cents)).toString() : "0";

//   const combinedSchema = {
//     "@context": "https://schema.org",
//     "@graph": [
//       {
//         "@type": "Product",
//         "name": reportTitle,
//         "description": reportDescription,
//         "image": priceInfo?.image_path || "https://integermarket.com/assets/default-report.jpg",
//         "sku": priceInfo?.report_unique_id,
//         "brand": {
//           "@type": "Brand",
//           "name": "Integer Market"
//         },
//         "offers": {
//           "@type": "Offer",
//           "price": reportPrice,
//           "priceCurrency": "USD",
//           "priceValidUntil": "2026-12-31",
//           "availability": "https://schema.org/InStock",
//           "url": `https://integermarket.com/report-name/${slug}`
//         },
//         "aggregateRating": {
//           "@type": "AggregateRating",
//           "ratingValue": "4.5",
//           "ratingCount": "100"
//         },
//         "additionalProperty": [
//           {
//             "@type": "PropertyValue",
//             "name": "Pages",
//             "value": priceInfo?.page_count || "250"
//           },
//           {
//             "@type": "PropertyValue",
//             "name": "Published Date",
//             "value": priceInfo?.publish_date || new Date().toISOString().split('T')[0]
//           },
//           {
//             "@type": "PropertyValue",
//             "name": "Category",
//             "value": priceInfo?.sub_industry || "Market Research"
//           }
//         ]
//       },
//       {
//         "@type": "BreadcrumbList",
//         "itemListElement": [
//           {
//             "@type": "ListItem",
//             "position": 1,
//             "name": "Home",
//             "item": "https://integermarket.com"
//           },
//           {
//             "@type": "ListItem",
//             "position": 2,
//             "name": "Reports",
//             "item": "https://integermarket.com/report"
//           },
//           ...(priceInfo?.sub_industry ? [{
//             "@type": "ListItem",
//             "position": 3,
//             "name": priceInfo.sub_industry,
//             "item": `https://integermarket.com/industry/${priceInfo.sub_industry.toLowerCase().replace(/\s+/g, '-')}`
//           }] : []),
//           {
//             "@type": "ListItem",
//             "position": priceInfo?.sub_industry ? 4 : 3,
//             "name": reportTitle
//           }
//         ]
//       },
//       {
//         "@type": "WebPage",
//         "name": `${reportTitle} | Market Research Report`,
//         "description": reportDescription || `Comprehensive market analysis for ${reportTitle}.`,
//         "url": `https://integermarket.com/report-name/${slug}`,
//         "isPartOf": {
//           "@type": "WebSite",
//           "name": "Integer Market",
//           "url": "https://integermarket.com"
//         },
//         "about": {
//           "@type": "Thing",
//           "name": priceInfo?.sub_industry || "Market Research"
//         }
//       }
//     ]
//   };

//   return (
//     <>
//       <Script
//         id={`report-schema-${slug}`}
//         type="application/ld+json"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: JSON.stringify(combinedSchema)
//         }}
//       />

//       <ReportDetail
//         amount={priceInfo?.amount_cents ?? ""}
//         reportId={priceInfo?.report_unique_id ?? ""}
//         publishDate={priceInfo?.publish_date ?? ""}
//         reportPages={priceInfo?.page_count ?? ""}
//         reportCovers={reportCovers}
//         reportSupports={reportSupports}
//         tableContent={sections}
//         imgPath={priceInfo?.image_path ?? null}
//         title={priceInfo?.title ?? ""}
//         subTitle={priceInfo?.subtitle ?? ""}
//         seoKeywords={
//           typeof priceInfo?.seo_keywords === "string"
//             ? priceInfo.seo_keywords
//                 .split(",")
//                 .map((item) => item.trim())
//                 .filter(Boolean)
//             : []
//         }
//         pdfPath={priceInfo?.pdf_url ?? null}
//         marketSize={priceInfo?.market_size ?? ""}
//         cagrData={priceInfo?.cagr ?? ""}
//         coverageDurationYears={priceInfo?.coverage_duration_years ?? 0}
//         subIndustry={priceInfo?.sub_industry ?? ""}
//         seoSlug={priceInfo?.seo_slug ?? ""}
//         primaryTopic={priceInfo?.primary_topic ?? ""}
//       />
//     </>
//   );
// }

// src/app/(site)/report-name/[slug]/page.jsx
import ReportDetail from "../../../../views/ReportDetail";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import Script from "next/script";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

async function getReportDetail(slug) {
  if (!slug) return null;

  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("1w8YJdmwOhRZylWbmcHX")?.value;

    const res = await fetch(
      `${BASE_URL}/reports/${encodeURIComponent(slug)}/full`,
      {
        cache: "no-store",
        headers: {
          Accept: "application/json",
          ...(token && {
            Authorization: `Bearer ${token}`,
          }),
        },
      },
    );

    if (!res.ok) {
      console.log(`Report API Error: ${res.status} ${res.statusText}`);
      return null;
    }

    const data = await res.json();

    if (!data) {
      return null;
    }

    return data;
  } catch (error) {
    console.error("Report fetch failed:", error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const data = await getReportDetail(slug);

  if (!data?.price_info) {
    return {
      title: "Report Not Found",
      description: "The requested market research report could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const priceInfo = data.price_info;

  const title = priceInfo?.seo_title?.trim() || "Market Research Report";

  const subTitle = priceInfo?.seo_description?.trim() || "";

  return {
    title: `${title}`,
    description:
      subTitle ||
      `Get detailed insights on ${title}, including market size, CAGR, industry trends, competitive landscape, and future outlook.`,

    alternates: {
      canonical: `https://integermarket.com/report-name/${slug}`,
    },

    openGraph: {
      title: `${title}`,
      description: subTitle || `Comprehensive market analysis for ${title}.`,
      url: `https://integermarket.com/report-name/${slug}`,
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: `${title}`,
      description: subTitle || `Comprehensive market analysis for ${title}.`,
    },
  };
}

export default async function ReportDetailPage({ params }) {
  const { slug } = await params;

  const data = await getReportDetail(slug);

  if (!data?.price_info) {
    notFound();
  }

  const priceInfo = data?.price_info ?? {};
  const scope = Array.isArray(data?.scope) ? data.scope : [];
  const sections = Array.isArray(data?.sections) ? data.sections : [];

  const reportCovers = scope?.[0]?.values ?? [];
  const reportSupports = scope?.[1]?.values ?? [];

  const reportTitle = priceInfo?.title || "Market Research Report";
  const reportDescription =
    priceInfo?.seo_description || priceInfo?.subtitle || "";
  const reportPrice = priceInfo?.amount_cents
    ? priceInfo.amount_cents.toString()
    : "0";
  const baseUrl = "https://integermarket.com";

  const productSchema = {
    "@type": "Product",
    name: reportTitle,
    description: reportDescription,
    image: priceInfo?.image_path || `${baseUrl}/assets/default-report.jpg`,
    sku: priceInfo?.report_unique_id || `IMR-${slug.toUpperCase()}`,
    brand: {
      "@type": "Brand",
      name: "Integer Market",
    },
    offers: {
      "@type": "Offer",
      price: reportPrice,
      priceCurrency: "USD",
      priceValidUntil: "2026-12-31",
      availability: "https://schema.org/InStock",
      url: `${baseUrl}/report-name/${slug}`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.5",
      ratingCount: "100",
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Pages",
        value: priceInfo?.page_count || "250",
      },
      {
        "@type": "PropertyValue",
        name: "Published Date",
        value:
          priceInfo?.publish_date || new Date().toISOString().split("T")[0],
      },
      {
        "@type": "PropertyValue",
        name: "Category",
        value: priceInfo?.sub_industry || "Market Research",
      },
      {
        "@type": "PropertyValue",
        name: "Market Size",
        value: priceInfo?.market_size || "N/A",
      },
      {
        "@type": "PropertyValue",
        name: "CAGR",
        value: priceInfo?.cagr || "N/A",
      },
    ],
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/report-name/${slug}`,
    },
  };

  const breadcrumbItems = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: baseUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Reports",
      item: `${baseUrl}/report`,
    },
  ];

  if (priceInfo?.sub_industry) {
    breadcrumbItems.push({
      "@type": "ListItem",
      position: 3,
      name: priceInfo.sub_industry,
      item: `${baseUrl}/industry/${priceInfo.sub_industry.toLowerCase().replace(/\s+/g, "-")}`,
    });
  }

  breadcrumbItems.push({
    "@type": "ListItem",
    position: breadcrumbItems.length + 1,
    name: reportTitle,
  });

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems,
  };

  const webpageSchema = {
    "@type": "WebPage",
    name: `${reportTitle} | Market Research Report`,
    description:
      reportDescription || `Comprehensive market analysis for ${reportTitle}.`,
    url: `${baseUrl}/report-name/${slug}`,
    isPartOf: {
      "@type": "WebSite",
      name: "Integer Market",
      url: baseUrl,
    },
    about: {
      "@type": "Thing",
      name: priceInfo?.sub_industry || "Market Research",
    },
    inLanguage: "en-US",
    dateModified: new Date().toISOString().split("T")[0],
    breadcrumb: breadcrumbSchema,
  };

  const organizationSchema = {
    "@type": "Organization",
    name: "Integer Market",
    legalName: "Integers Insights Private Limited",
    url: baseUrl,
    logo: `${baseUrl}/assets/logo.png`,
    email: "info@integermarket.com",
    telephone: "+91 8976993084",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400102",
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
    "@graph": [
      productSchema,
      breadcrumbSchema,
      webpageSchema,
      organizationSchema,
    ],
  };

  return (
    <>
      <Script
        id={`report-schema-${slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(combinedSchema),
        }}
      />

      <Script
        id={`report-breadcrumb-schema-${slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <ReportDetail
        amount={priceInfo?.amount_cents ?? ""}
        reportId={priceInfo?.report_unique_id ?? ""}
        publishDate={priceInfo?.publish_date ?? ""}
        reportPages={priceInfo?.page_count ?? ""}
        reportCovers={reportCovers}
        reportSupports={reportSupports}
        tableContent={sections}
        imgPath={priceInfo?.image_path ?? null}
        title={priceInfo?.title ?? ""}
        subTitle={priceInfo?.subtitle ?? ""}
        seoKeywords={
          typeof priceInfo?.seo_keywords === "string"
            ? priceInfo.seo_keywords
                .split(",")
                .map((item) => item.trim())
                .filter(Boolean)
            : []
        }
        pdfPath={priceInfo?.pdf_url ?? null}
        marketSize={priceInfo?.market_size ?? ""}
        cagrData={priceInfo?.cagr ?? ""}
        coverageDurationYears={priceInfo?.coverage_duration_years ?? 0}
        subIndustry={priceInfo?.sub_industry ?? ""}
        seoSlug={priceInfo?.seo_slug ?? ""}
        primaryTopic={priceInfo?.primary_topic ?? ""}
      />
    </>
  );
}
