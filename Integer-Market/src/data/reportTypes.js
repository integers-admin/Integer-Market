export const reportTypes = [
  {
    id: 1, slug: 'competitive-landscape', name: 'Competitive Landscape', icon: 'BarChart3',
    description: 'In-depth analysis of key players, market share, strategies, and competitive positioning.',
    detail: 'Understand exactly who your competitors are, how they are positioned, what their strengths are, and where market share gaps exist. Includes company profiles, SWOT analysis, and strategic recommendations.',
  },
  {
    id: 2, slug: 'consumer-usage-insights', name: 'Consumer Usage Insights', icon: 'Users',
    description: 'Consumer surveys, usage patterns, purchase behavior, and demand driver research.',
    detail: 'Primary and secondary consumer research revealing who buys, why they buy, how they use the product, and what drives switching behavior. Includes demographic breakdowns and willingness-to-pay analysis.',
  },
  {
    id: 3, slug: 'import-export-trade', name: 'Import/Export Trade', icon: 'Globe2',
    description: 'Trade flow analysis, HS code data, top exporters/importers, and pricing by origin.',
    detail: 'Detailed customs data and trade intelligence showing global import-export flows, price-per-unit benchmarks by origin country, leading exporters/importers, and year-on-year trade trends.',
  },
  {
    id: 4, slug: 'innovation-trends', name: 'Innovation Trends', icon: 'Lightbulb',
    description: 'Emerging technologies, new product launches, patent analysis, and R&D pipeline.',
    detail: 'Stay ahead of the curve with patent landscape analysis, new product launch tracking, emerging delivery formats, clinical pipeline reviews, and technology roadmap assessments.',
  },
  {
    id: 5, slug: 'market-intelligence-reports', name: 'Market Intelligence', icon: 'Brain',
    description: 'Comprehensive 360° market analysis combining multiple research methodologies.',
    detail: 'Our most comprehensive report type covering market size, competitive landscape, trade flows, consumer insights, pricing, and regulatory environment in a single cohesive intelligence report.',
  },
  {
    id: 6, slug: 'market-size-forecast', name: 'Market Size & Forecast', icon: 'TrendingUp',
    description: 'Historical market sizing, growth projections, and 5-year demand forecasts.',
    detail: 'Rigorous bottom-up and top-down market sizing with historical data, current estimates, and 5–7 year CAGR forecasts segmented by geography, application, form, and end-use industry.',
  },
  {
    id: 7, slug: 'pricing-cost-analysis', name: 'Pricing & Cost Analysis', icon: 'DollarSign',
    description: 'Pricing benchmarks, cost structure analysis, margin assessment, and pricing strategy.',
    detail: 'Granular pricing data across the value chain from raw materials to consumer shelf price. Includes cost structure breakdowns, margin analysis by segment, and strategic pricing recommendations.',
  },
  {
    id: 8, slug: 'regulatory-environment', name: 'Regulatory Environment', icon: 'Scale',
    description: 'Regulatory frameworks, compliance requirements, and approval timelines by country.',
    detail: 'Country-by-country regulatory status covering approved uses, registration requirements, maximum permitted levels, labeling regulations, and upcoming regulatory changes that affect market access.',
  },
]

export function getReportTypeBySlug(slug) {
  return reportTypes.find(t => t.slug === slug)
}
