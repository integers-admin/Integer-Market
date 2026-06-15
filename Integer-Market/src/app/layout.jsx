import ToastProvider from '../components/ui/ToastProvider'
import './globals.css'
import { Providers } from './providers'

export const metadata = {
  metadataBase: new URL('https://integermarket.com'),
  title: {
    default: 'Integer Market | Global Market Research Reports',
    template: '%s | Integer Market',
  },
  description: 'Actionable market intelligence across pharma, nutraceuticals, chemicals, herbal extracts and 12 more industries. 1,200+ research reports trusted by 5,000+ global decision-makers.',
  keywords: ['market research', 'pharmaceutical market', 'nutraceuticals', 'market intelligence', 'industry reports', 'market analysis'],
  authors: [{ name: 'Integer Market Research Team' }],
  creator: 'Integer Market',
  publisher: 'Integers Insights Private Limited',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://integermarket.com',
    siteName: 'Integer Market',
    title: 'Integer Market | Global Market Research Reports',
    description: 'Actionable market intelligence across pharma, nutraceuticals, chemicals & more. 1,200+ reports trusted by 5,000+ global decision-makers in 85+ countries.',
    images: [
      {
        url: '/assets/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Integer Market - Global Market Research Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@integermarket',
    creator: '@integermarket',
    title: 'Integer Market | Global Market Research Reports',
    description: 'Actionable market intelligence across pharma, nutraceuticals & chemicals.',
    images: ['/assets/og-default.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://integermarket.com',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <Providers>
          {children}
          
        </Providers>
        <ToastProvider />
      </body>
    </html>
  )
}
