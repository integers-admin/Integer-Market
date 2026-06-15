import Disclaimer from '../../../views/legal/Disclaimer'

export const metadata = {
  title: 'Disclaimer',
  description: 'Read the Integer Market Disclaimer on the accuracy and intended use of our market research reports. Data is provided for informational purposes to support business research',
  alternates: {
    canonical: 'https://integermarket.com/disclaimer',
  },
  robots: {
    index: true,
    follow: false,
  },
}

export default function DisclaimerPage() {
  return <Disclaimer />
}
