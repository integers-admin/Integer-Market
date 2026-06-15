export const useCases = [
  {
    id: 1,
    slug: 'competitor-benchmarking',
    name: 'Competitor Benchmarking',
    icon: 'Target',
    description: 'Understand exactly where you stand vs. the competition with granular market share, pricing, and strategy data.',
    benefits: ['Identify competitive gaps and white spaces', 'Benchmark pricing and margin structures', 'Discover untapped market opportunities', 'Monitor competitor product and strategy moves'],
    audiences: ['Strategy Teams', 'Product Management', 'Business Development'],
  },
  {
    id: 2,
    slug: 'investor-board-presentations',
    name: 'Investor & Board Presentations',
    icon: 'Presentation',
    description: 'Back your investment thesis and board presentations with credible, third-party market data and industry intelligence.',
    benefits: ['Market size and TAM validation', 'Growth trajectory and CAGR data', 'Industry credibility and due diligence', 'Competitive landscape for pitches'],
    audiences: ['C-Suite Executives', 'Investor Relations', 'Strategy Teams'],
  },
  {
    id: 3,
    slug: 'market-entry-country',
    name: 'Market Entry by Country',
    icon: 'MapPin',
    description: 'Evaluate new country markets with demand data, regulatory overview, competitive assessment, and entry strategy recommendations.',
    benefits: ['Country-level demand sizing', 'Regulatory and compliance overview', 'Local competitive landscape', 'Distribution channel mapping'],
    audiences: ['International Business', 'Export Teams', 'Business Development'],
  },
  {
    id: 4,
    slug: 'new-product-launch',
    name: 'New Product Launch',
    icon: 'Rocket',
    description: 'Validate product-market fit, identify optimal positioning, and benchmark pricing before committing to a new product launch.',
    benefits: ['Market opportunity sizing', 'Consumer need and gap identification', 'Price point validation', 'Competitive positioning strategy'],
    audiences: ['Product Management', 'R&D Teams', 'Marketing'],
  },
  {
    id: 5,
    slug: 'pricing-strategy',
    name: 'Pricing Strategy',
    icon: 'Tag',
    description: 'Set optimal pricing with market benchmarks, consumer willingness-to-pay data, and comprehensive competitor price analysis.',
    benefits: ['Market pricing benchmarks by segment', 'Price elasticity and WTP insights', 'Channel-specific pricing strategy', 'Margin optimization framework'],
    audiences: ['Finance', 'Product Management', 'Sales Teams'],
  },
]

export function getUseCaseBySlug(slug) {
  return useCases.find(u => u.slug === slug)
}
