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




import IndustryPage from "../../../../views/IndustryPage";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

async function getIndustryReports(slug) {
  if (!slug) return null;

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  console.log("token: ",token);

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

    console.log("industry data: ",data);

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
    title: `${name} | Market Research Reports`,
    description,

    alternates: {
      canonical: `https://integermarket.com/industry/${slug}`,
    },

    openGraph: {
      title: `${name} | Market Research Reports`,
      description,
      url: `https://integermarket.com/industry/${slug}`,
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `${name} | Market Research Reports`,
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

  return (
    <IndustryPage
      industryReports={industryReports}
      loading={false}
    />
  );
}