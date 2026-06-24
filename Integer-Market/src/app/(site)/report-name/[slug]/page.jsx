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





import ReportDetail from "../../../../views/ReportDetail";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

async function getReportDetail(slug) {
  if (!slug) return null;

  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

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
      }
    );

    if (!res.ok) {
      console.log(
        `Report API Error: ${res.status} ${res.statusText}`
      );
      return null;
    }

    const data = await res.json();

    console.log("report data: ",data);

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
      description:
        "The requested market research report could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const priceInfo = data.price_info;

  const title =
    priceInfo?.seo_title?.trim() || "Market Research Report";

  const subTitle = priceInfo?.seo_description?.trim() || "";

  return {
    title: `${title} | Market Research Report`,
    description:
      subTitle ||
      `Get detailed insights on ${title}, including market size, CAGR, industry trends, competitive landscape, and future outlook.`,

    alternates: {
      canonical: `https://integermarket.com/report-name/${slug}`,
    },

    openGraph: {
      title: `${title} | Market Research Report`,
      description:
        subTitle ||
        `Comprehensive market analysis for ${title}.`,
      url: `https://integermarket.com/report-name/${slug}`,
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: `${title} | Market Research Report`,
      description:
        subTitle ||
        `Comprehensive market analysis for ${title}.`,
    },
  };
}

export default async function ReportDetailPage({ params }) {
  const { slug } = await params;

  const data = await getReportDetail(slug);

  if (!data?.price_info) {
    notFound();
  }

  console.log("data?.price_info: ",typeof(data?.price_info));

  const priceInfo = data?.price_info ?? {};
  const scope = Array.isArray(data?.scope) ? data.scope : [];
  const sections = Array.isArray(data?.sections)
    ? data.sections
    : [];

  const reportCovers = scope?.[0]?.values ?? [];
  const reportSupports = scope?.[1]?.values ?? [];

  return (
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
      coverageDurationYears={
        priceInfo?.coverage_duration_years ?? 0
      }
      subIndustry={priceInfo?.sub_industry ?? ""}
      seoSlug={priceInfo?.seo_slug ?? ""}
      primaryTopic={priceInfo?.primary_topic ?? ""}
    />
  );
}