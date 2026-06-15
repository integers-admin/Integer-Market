export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/dashboard',
          '/checkout',
          '/login',
          '/signup',
          '/api/',
        ],
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/dashboard', '/checkout', '/login', '/signup', '/api/'],
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
        disallow: ['/dashboard', '/checkout', '/login', '/signup', '/api/'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: ['/dashboard', '/checkout', '/login', '/signup', '/api/'],
      },
    ],
    sitemap: 'https://integermarket.com/sitemap.xml',
    host: 'https://integermarket.com',
  }
}
