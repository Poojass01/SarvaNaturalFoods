const siteUrl = 'https://sarvanaturalfoods.com'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}