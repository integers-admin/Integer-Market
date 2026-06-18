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

"use client";

import { useParams } from "next/navigation";
import ReportDetail from "../../../../views/ReportDetail";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ReportDetailPage() {
  const params = useParams();
  const { slug } = params;

  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  const [amount, setAmount] = useState("");
  const [reportId, setReportId] = useState("");
  const [reportPages, setReportPages] = useState("");
  const [reportCovers, setReportCovers] = useState([]);
  const [reportSupports, setReportSupports] = useState([]);
  const [tableContent, setTableContent] = useState([]);
  const [imgPath, setImgPath] = useState(null);
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [seoKeywords, setSeoKeywords] = useState([]);
  const [pdfPath, setPdfPath] = useState(null);
  const [publishDate, setPublishDate] = useState("");
  const [marketSize, setMarketSize] = useState("");
  const [cagrData, setCagrData] = useState("");
  const [coverageDurationYears, setCoverageDurationYears] = useState(0);
  const [subIndustry, setSubIndustry] = useState("");
  const [seoSlug, setSeoSlug] = useState("");
  const [primaryTopic, setPrimaryTopic] = useState("");

  const getReportDetailPageData = async () => {
    try {
      let response = await axios.get(`${BASE_URL}/reports/${slug}/full`);
      if (response?.status === 200) {
        setAmount(response?.data?.price_info?.amount_cents);
        setReportId(response?.data?.price_info?.report_unique_id);
        setPublishDate(response?.data?.price_info?.publish_date);
        setReportPages(response?.data?.price_info?.page_count);
        setReportCovers(response?.data?.scope?.[0]?.values || []);
        setReportSupports(response?.data?.scope?.[1]?.values || []);
        setTableContent(response?.data?.sections || []);
        setImgPath(response?.data?.price_info?.image_path || null);
        setTitle(response?.data?.price_info?.title);
        setMarketSize(response?.data?.price_info?.market_size);
        setCagrData(response?.data?.price_info?.cagr);
        setCoverageDurationYears(
          response?.data?.price_info?.coverage_duration_years,
        );
        setSubTitle(response?.data?.price_info?.subtitle);
        setPdfPath(response?.data?.price_info?.pdf_url || null);
        setSubIndustry(response?.data?.price_info?.sub_industry);
        const keywords =
          response?.data?.price_info?.seo_keywords?.split(",") || [];
        setSeoKeywords(keywords);
        setSeoSlug(response?.data?.price_info?.seo_slug);
        setPrimaryTopic(response?.data?.price_info?.primary_topic);
      }
    } catch (err) {
      console.log("Something went wrong");
    }
  };

  useEffect(() => {
    if (!slug) return;
    getReportDetailPageData();
  }, [slug]);

  useEffect(() => {
    if (!title) return;

    document.title = `${title} | Market Research Report`;

    const description = subTitle
      ? subTitle
      : `Get detailed insights on ${title}, including market size, CAGR, industry trends, competitive landscape, and future outlook.`;

    // Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    metaDescription.content = description;

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = `https://integermarket.com/report-name/${slug}`;
  }, [title, subTitle, slug]);

  return (
    <ReportDetail
      amount={amount}
      imgPath={imgPath}
      title={title}
      subTitle={subTitle}
      reportPages={reportPages}
      publishDate={publishDate}
      reportId={reportId}
      reportCovers={reportCovers}
      reportSupports={reportSupports}
      marketSize={marketSize}
      cagrData={cagrData}
      coverageDurationYears={coverageDurationYears}
      tableContent={tableContent}
      seoKeywords={seoKeywords}
      pdfPath={pdfPath}
      subIndustry={subIndustry}
      seoSlug={seoSlug}
      primaryTopic={primaryTopic}
    />
  );
}
