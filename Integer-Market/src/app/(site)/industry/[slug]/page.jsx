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

"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import IndustryPage from "../../../../views/IndustryPage";

export default function IndustryPageRoute() {
  const { slug } = useParams();

  const [industryReports, setIndustryReports] = useState(null);
  const [loading, setLoading] = useState(true);

  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const getIndustryReportsData = async () => {
      try {
        setLoading(true);

        const token = localStorage.getItem("token");

        const response = await axios.get(
          `${BASE_URL}/industry/reports?industry=${slug}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        // console.log("getIndustryReportsData response:", response);
        if (response?.status === 200) {
          setIndustryReports(response?.data);
        }
      } catch (error) {
        console.log("Something went wrong:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      getIndustryReportsData();
    }
  }, [slug]);

  useEffect(() => {
    if (!industryReports?.name) return;

    document.title = `${industryReports.name} | Market Research Reports`;

    const description = industryReports?.description
      ? `${industryReports.description} Browse ${
          industryReports.total || 0
        }+ reports for actionable market intelligence.`
      : "Browse market research reports by industry.";

    let metaDescription = document.querySelector('meta[name="description"]');

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    metaDescription.content = description;

    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = `https://integermarket.com/industry/${slug}`;
  }, [industryReports, slug]);

  return <IndustryPage industryReports={industryReports} loading={loading} />;
}
