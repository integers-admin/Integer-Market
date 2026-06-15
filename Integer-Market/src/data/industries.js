export const industries = [
  { id: 1,  slug: 'agriculture',           name: 'Agriculture',              icon: 'Wheat',           description: 'Agrochemicals, crop inputs, seeds, and agri-biotech market intelligence.',              reportCount: 48,  color: '#22c55e' },
  { id: 2,  slug: 'amino-acids',           name: 'Amino Acids',              icon: 'Dna',             description: 'Essential & non-essential amino acid markets for nutrition, pharma, and feed.',          reportCount: 32,  color: '#8b5cf6' },
  { id: 3,  slug: 'beauty-personal-care',  name: 'Beauty & Personal Care',   icon: 'Sparkles',        description: 'Cosmetics, skincare, haircare ingredients and finished product market analysis.',         reportCount: 65,  color: '#ec4899' },
  { id: 4,  slug: 'chemicals',             name: 'Chemicals',                icon: 'FlaskConical',    description: 'Specialty chemicals, fine chemicals, and industrial chemical sector reports.',             reportCount: 89,  color: '#f59e0b' },
  { id: 5,  slug: 'consumer-goods',        name: 'Consumer Goods',           icon: 'ShoppingBag',     description: 'FMCG, household products, and consumer packaged goods market intelligence.',              reportCount: 54,  color: '#06b6d4' },
  { id: 6,  slug: 'food-drink',            name: 'Food & Drink',             icon: 'UtensilsCrossed', description: 'Functional foods, beverages, food ingredients, and food safety market reports.',           reportCount: 112, color: '#f97316' },
  { id: 7,  slug: 'functional-ingredients',name: 'Functional Ingredients',   icon: 'Atom',            description: 'Active ingredients for health, performance, and functional food applications.',            reportCount: 78,  color: '#14b8a6' },
  { id: 8,  slug: 'future-updates',        name: 'Future Updates',           icon: 'Rss',             description: 'Upcoming market research topics and emerging industry trend reports.',                     reportCount: 12,  color: '#6366f1' },
  { id: 9,  slug: 'health-wellness',       name: 'Health & Wellness',        icon: 'Heart',           description: 'Preventive health, wellness supplements, and healthy lifestyle market reports.',            reportCount: 95,  color: '#ef4444' },
  { id: 10, slug: 'herbal-extracts',       name: 'Herbal Extracts',          icon: 'Leaf',            description: 'Botanical extracts, standardized phytochemicals, and Ayurvedic market intelligence.',     reportCount: 67,  color: '#84cc16' },
  { id: 11, slug: 'household',             name: 'Household',                icon: 'Home',            description: 'Cleaning products, home care chemicals, and household goods market analysis.',             reportCount: 38,  color: '#0ea5e9' },
  { id: 12, slug: 'ingredients-materials', name: 'Ingredients & Materials',  icon: 'Layers',          description: 'Raw materials, excipients, industrial ingredients, and material science reports.',         reportCount: 83,  color: '#78716c' },
  { id: 13, slug: 'medical-nutrition',     name: 'Medical Nutrition',        icon: 'Pill',            description: 'Clinical nutrition, enteral/parenteral nutrition, and medical food market reports.',       reportCount: 41,  color: '#0891b2' },
  { id: 14, slug: 'nutraceuticals',        name: 'Nutraceuticals',           icon: 'Beaker',          description: 'Dietary supplements, functional foods, and nutraceutical ingredient market intelligence.',  reportCount: 134, color: '#e27c60' },
  { id: 15, slug: 'pharmaceuticals',       name: 'Pharmaceuticals',          icon: 'Stethoscope',     description: 'API, generics, finished drug formulations, and pharma sector market analysis.',            reportCount: 156, color: '#2563eb' },
  { id: 16, slug: 'vitamins-minerals',     name: 'Vitamins & Minerals',      icon: 'Droplets',        description: 'Vitamin and mineral supplement market trends, pricing, and trade intelligence.',            reportCount: 72,  color: '#d946ef' },
]

/**
 * Top-level category groups shown in the Industries nav dropdown.
 * Each category has its own page at /industry/[slug] AND lists subcategories.
 */
export const industryCategories = [
  {
    slug: 'consumer-goods',
    name: 'Consumer Goods',
    icon: 'ShoppingBag',
    color: '#06b6d4',
    description: 'FMCG, household products, and consumer packaged goods market intelligence.',
    subcategories: ['food-drink', 'beauty-personal-care', 'household'],
  },
  {
    slug: 'health-wellness',
    name: 'Health & Wellness',
    icon: 'Heart',
    color: '#ef4444',
    description: 'Preventive health, wellness supplements, and healthy lifestyle market reports.',
    subcategories: ['pharmaceuticals', 'nutraceuticals', 'medical-nutrition'],
  },
  {
    slug: 'ingredients-materials',
    name: 'Ingredients & Materials',
    icon: 'Layers',
    color: '#78716c',
    description: 'Raw materials, excipients, industrial ingredients, and material science reports.',
    subcategories: ['vitamins-minerals', 'amino-acids', 'herbal-extracts', 'functional-ingredients'],
  },
  {
    slug: 'future-updates',
    name: 'Future Updates',
    icon: 'Rss',
    color: '#6366f1',
    description: 'Upcoming market research topics and emerging industry trend reports.',
    subcategories: ['chemicals', 'agriculture'],
  },
]

export function getIndustryBySlug(slug) {
  // Check subcategory industries first, then category entries
  return industries.find(i => i.slug === slug)
    ?? industryCategories.find(c => c.slug === slug)
}
