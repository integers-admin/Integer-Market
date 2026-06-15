import Signup from '../../../views/auth/Signup'

export const metadata = {
  title: 'Sign Up',
  description: 'Create your Integer Market account to access 1,200+ market research reports across 15+ industries.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function SignupPage() {
  return <Signup />
}
