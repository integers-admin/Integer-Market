import Dashboard from '../../../views/dashboard/Dashboard'

// Never statically generate: requires user authentication
export const dynamic = 'force-dynamic'

export const metadata = {
  title: 'My Dashboard',
  description: 'Access your purchased market research reports and manage your Integer Market account.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function DashboardPage() {
  return <Dashboard />
}
