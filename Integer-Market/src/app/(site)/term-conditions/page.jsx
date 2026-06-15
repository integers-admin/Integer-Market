import TermsConditions from '../../../views/legal/TermsConditions'

export const metadata = {
  title: 'Terms & conditions',
  description: 'Review the Terms & Conditions for purchasing market research reports from Integer Market. Understand permitted usage, licensing, and your rights as a buyer.',
  alternates: {
    canonical: 'https://integermarket.com/term-conditions',
  },
  robots: {
    index: true,
    follow: false,
  },
}

export default function TermsConditionsPage() {
  return <TermsConditions />
}
