import UseCasePage from '../../../views/UseCasePage'
import { useCases } from '../../../data/useCases'

export const revalidate = 3600  // ISR: revalidate every hour

export async function generateMetadata({ params }) {
  const { slug } = await params
  const useCase = useCases.find((u) => u.slug === slug)

  if (!useCase) {
    return {
      title: 'Use Cases',
      description: 'Browse market research reports by use case.',
    }
  }

  return {
    title: `${useCase.name} - Market Research Reports`,
    description: useCase.description,
    alternates: {
      canonical: `https://integermarket.com/usecase/${slug}`,
    },
    openGraph: {
      title: `${useCase.name} | Integer Market`,
      description: useCase.description,
      url: `https://integermarket.com/usecase/${slug}`,
    },
  }
}

export default function UseCasePageRoute() {
  return <UseCasePage />
}
