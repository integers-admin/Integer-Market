import ForgotPassword from '../../../views/auth/ForgotPassword'

export const metadata = {
  title: 'Forgot Password',
  description: 'Reset your Integer Market account password securely. Enter your email address to receive password reset instructions.',
  alternates: {
    canonical: 'https://integermarket.com/forgot-password',
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function ForgotPasswordPage() {
  return <ForgotPassword />
}
