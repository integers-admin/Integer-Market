import Contact from '../../../views/Contact'

export const metadata = {
  title: 'Contact | Get Help Finding Reports',
  description: "Need help finding the right market research report? Contact the Integer Market team for queries on reports, purchases, or custom research needs. We're here to help.",
  alternates: {
    canonical: 'https://integermarket.com/contact',
  },
  openGraph: {
    title: 'Contact | Get Help Finding Reports',
    description: "Need help finding the right market research report? Contact the Integer Market team for queries on reports, purchases, or custom research needs. We're here to help.",
    url: 'https://integermarket.com/contact',
  },
}

export default function ContactPage() {
  return <Contact />
}
