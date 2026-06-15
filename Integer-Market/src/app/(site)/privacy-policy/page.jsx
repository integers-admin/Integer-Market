import PrivacyPolicy from '../../../views/legal/PrivacyPolicy'

export const metadata = {
  title: 'Privacy Policy',
  description: "Read Integer Market's Privacy Policy to understand how we collect, store, and protect your personal data when you browse or purchase market research reports.",
  alternates: {
    canonical: 'https://integermarket.com/privacy-policy',
  },
  robots: {
    index: true,
    follow: false,
  },
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />
}
