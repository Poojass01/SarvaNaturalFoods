/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  async redirects() {
    return [
      {
        source: '/products/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/collections/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/cart',
        destination: '/',
        permanent: true,
      },
      {
        source: '/search',
        destination: '/',
        permanent: true,
      },
      {
        source: '/policies/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/pages/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blogs/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/sitemap_products_1.xml',
        destination: '/sitemap.xml',
        permanent: true,
      },
      {
        source: '/sitemap_pages_1.xml',
        destination: '/sitemap.xml',
        permanent: true,
      },
      {
        source: '/sitemap_collections_1.xml',
        destination: '/sitemap.xml',
        permanent: true,
      },
      {
        source: '/sitemap_blogs_1.xml',
        destination: '/sitemap.xml',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig