import CancellationPolicy from '../../../views/legal/CancellationPolicy'

export const metadata = {
  title: 'Cancellation Policy',
  description: "Learn about Integer Market's cancellation policy for market research report purchases. Simple, transparent terms designed to protect every customer.",
  alternates: {
    canonical: 'https://integermarket.com/cancellation-policy',
  },
  robots: {
    index: true,
    follow: false,
  },
}

export default function CancellationPolicyPage() {
  return <CancellationPolicy />
}
