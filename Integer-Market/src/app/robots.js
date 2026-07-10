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
    sitemap: 'https://www.integermarket.com/sitemap.xml',
    host: 'https://www.integermarket.com',
  }
}
