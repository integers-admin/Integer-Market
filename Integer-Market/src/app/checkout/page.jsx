import Checkout from '../../views/Checkout'

export const metadata = {
  title: 'Checkout',
  description: 'Complete your market research report purchase securely.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function CheckoutPage() {
  return <Checkout />
}
