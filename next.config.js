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
        source: '/sitemap_products_1.xml',
        destination: '/sitemap.xml',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig