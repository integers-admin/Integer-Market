export const useCases = [
  {
    id: 1,
    slug: 'competitor-benchmarking',
    name: 'Competitor Benchmarking',
    icon: 'Target',
    description: 'Competitor Analysis makes you understand exactly where you stand vs. the competition with granular market share, competitor pricing analysis, and competitor strategy analysis.',
    benefits: ['Identify competitive gaps and white spaces', 'Competitor pricing and margin structures', 'Discover untapped market opportunities', 'Monitor competitor product and strategy moves'],
    audiences: ['Strategy Teams', 'Product Management', 'Business Development'],
  },
  {
    id: 2,
    slug: 'investor-board-presentations',
    name: 'Investor & Board Presentations',
    icon: 'Presentation',
    description: 'Back your investment thesis and board presentations with credible, market research data and industry analysis.',
    benefits: ['Market size, TAM ', 'CAGR, market growth, market forecast', 'Industry analysis, market research', 'Competitive landscape for pitches'],
    audiences: ['C-Suite Executives', 'Investor Relations', 'Strategy Teams'],
  },
  {
    id: 3,
    slug: 'market-entry-country',
    name: 'Market Entry by Country',
    icon: 'MapPin',
    description: 'Evaluate new country markets with market demand data, regulatory landscape, competitive analysis, and a clear market entry strategy.',
    benefits: ['Size of market demand by country', 'Map regulations and the regulatory landscape', 'Assess the local competitive landscape', 'Distribution channel mapping'],
    audiences: ['International Business', 'Export Teams', 'Business Development'],
  },
  {
    id: 4,
    slug: 'new-product-launch',
    name: 'Product Launch strategy',
    icon: 'Rocket',
    description: 'Validate product-market fit, identify optimal positioning, and benchmark pricing before committing to a new product launch.',
    benefits: ['Market size & market opportunity', 'Market gap & consumer analysis', 'Pricing strategy & price analysis', 'Competitive positioning strategy'],
    audiences: ['Product Management', 'R&D Teams', 'Marketing'],
  },
  {
    id: 5,
    slug: 'pricing-strategy',
    name: 'Pricing Strategy',
    icon: 'Tag',
    description: 'Set optimal pricing with market benchmarks, consumer willingness-to-pay data, and comprehensive competitor price analysis.',
    benefits: ['Segmentmarket pricing & pricing benchmarks', 'Price elasticity & willingness to pay', 'Pricing strategy & pricing models', 'Margin optimization framework'],
    audiences: ['Finance', 'Product Management', 'Sales Teams'],
  },
]

export function getUseCaseBySlug(slug) {
  return useCases.find(u => u.slug === slug)
}
