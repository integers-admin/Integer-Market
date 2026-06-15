import ReportTypePage from '../../../../views/ReportTypePage'
import { reportTypes } from '../../../../data/reportTypes'

export const revalidate = 3600  // ISR: revalidate every hour

export async function generateMetadata({ params }) {
  const { slug } = await params
  const reportType = reportTypes.find((r) => r.slug === slug)

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

export default function ReportTypePageRoute() {
  return <ReportTypePage />
}
