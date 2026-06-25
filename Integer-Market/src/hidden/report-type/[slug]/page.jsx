// import ReportTypePage from '../../../../views/ReportTypePage'
// import { reportTypes } from '../../../../data/reportTypes'

// export const revalidate = 3600  // ISR: revalidate every hour

// export async function generateMetadata({ params }) {
//   const { slug } = await params
//   const reportType = reportTypes.find((r) => r.slug === slug)

//   if (!reportType) {
//     return {
//       title: 'Report Types',
//       description: 'Browse market research reports by type.',
//     }
//   }

//   return {
//     title: `${reportType.name} Reports`,
//     description: reportType.description,
//     alternates: {
//       canonical: `https://integermarket.com/report-type/${slug}`,
//     },
//     openGraph: {
//       title: `${reportType.name} Reports | Integer Market`,
//       description: reportType.description,
//       url: `https://integermarket.com/report-type/${slug}`,
//     },
//   }
// }

// export default function ReportTypePageRoute() {
//   return <ReportTypePage />
// }





import ReportTypePage from '../../../views/ReportTypePage'
import { reportTypes } from '../../../data/reportTypes'
import Script from 'next/script'

export const revalidate = 3600;

export async function generateMetadata({ params }) {
  const { slug } = await params
  console.log("report slug: ",slug);
  const reportType = reportTypes.find((r) => r.slug === slug)

  console.log("report-type: ",reportType);

  if (!reportType) {
    return {
      title: 'Report Types',
      description: 'Browse market research reports by type.',
    }
  }

  return {
    title: `${reportType.name} Reports`,
    description: reportType.description,
    alternates: {
      canonical: `https://integermarket.com/report-type/${slug}`,
    },
    openGraph: {
      title: `${reportType.name} Reports | Integer Market`,
      description: reportType.description,
      url: `https://integermarket.com/report-type/${slug}`,
    },
  }
}

export default async function ReportTypePageRoute({ params }) {
  const { slug } = await params
  const reportType = reportTypes.find((r) => r.slug === slug)

  if (!reportType) {
    return <ReportTypePage />
  }

  const combinedSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${reportType.name} Reports`,
    "description": reportType.description || `Browse ${reportType.name} market research reports.`,
    "url": `https://integermarket.com/report-type/${slug}`,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Integer Market",
      "url": "https://integermarket.com"
    },
    "about": {
      "@type": "Thing",
      "name": reportType.name
    },
    "breadcrumb": {
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
          "name": "Reports",
          "item": "https://integermarket.com/report"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": reportType.name
        }
      ]
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": (reportType?.reports || []).map((report, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": report.title || `Report ${index + 1}`,
        "url": `https://integermarket.com/report-name/${report.slug || report.id}`
      }))
    }
  }

  return (
    <>
      <Script
        id={`report-type-schema-${slug}`}
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(combinedSchema)
        }}
      />

      <ReportTypePage />
    </>
  )
}