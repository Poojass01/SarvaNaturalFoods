import { Source_Sans_3, Fraunces } from 'next/font/google'
import './globals.css'

const sourceSans = Source_Sans_3({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-sans' })
const fraunces = Fraunces({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-display' })

export const metadata = {
  title: {
    default: 'Sarva Natural Foods — Pure A2 Bilona Cow Ghee | Buy Online',
    template: '%s | Sarva Natural Foods',
  },
  description:
    'Buy pure A2 bilona cow ghee from Sarva Natural Foods. 50+ years of dairy expertise. Traditional wood-fire method, native Gir & Kangeyam cows, FSSAI certified, glass jar packaging. Free pan-India delivery from Tirupur & Chennai.',
  keywords:
    'pure cow ghee, A2 ghee, bilona ghee, desi ghee, buy ghee online, Sarva Natural Foods, Sarva Natural Food, traditional ghee, wood churned ghee, native cow ghee, Gir cow ghee, Kangeyam cow ghee, FSSAI certified ghee, organic ghee India, ghee delivery India, ghee Chennai, ghee Tirupur, ghee Coimbatore, glass jar ghee, farm fresh ghee, immunity booster, healthy cooking oil, best ghee India',
  authors: [{ name: 'Sarva Natural Foods' }],
  creator: 'Sarva Natural Foods',
  publisher: 'Sarva Natural Foods',
  metadataBase: new URL('https://sarvanaturalfoods.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Sarva Natural Foods — Pure A2 Bilona Cow Ghee | 50+ Years of Dairy Tradition',
    description:
      'Buy pure A2 bilona cow ghee from Sarva Natural Foods. Handcrafted from native cows, slow-simmered over firewood, packed in glass jars. FSSAI certified. Pan-India delivery.',
    url: 'https://sarvanaturalfoods.com',
    siteName: 'Sarva Natural Foods',
    images: [
      {
        url: '/logo/logo.png',
        width: 1200,
        height: 630,
        alt: 'Sarva Natural Foods — Pure A2 Bilona Cow Ghee',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sarva Natural Foods — Pure A2 Bilona Cow Ghee | Buy Online',
    description: 'Pure A2 bilona cow ghee from native Gir & Kangeyam cows. FSSAI certified. Slow-simmered over firewood. Glass jar packaging. Pan-India delivery.',
    images: ['/logo/logo.png'],
  },
  icons: {
    icon: [
      { url: '/logo/logo.png', type: 'image/png' },
    ],
    apple: '/logo/logo.png',
    shortcut: '/logo/logo.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Sarva Natural Foods",
              "alternateName": "Sarva Natural Foods",
              "description": "Pure A2 bilona cow ghee handcrafted from native Gir & Kangeyam cows. 50+ years of dairy tradition. FSSAI certified, glass jar packaging, pan-India delivery.",
              "url": "https://sarvanaturalfoods.com",
              "telephone": "+91-86082-01333",
              "email": "sarvanaturalfoods@gmail.com",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "29, Somanur",
                  "addressLocality": "Tirupur",
                  "postalCode": "641668",
                  "addressRegion": "Tamil Nadu",
                  "addressCountry": "IN"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "67, 1st Main Rd, S.Kolathur",
                  "addressLocality": "Chennai",
                  "postalCode": "600117",
                  "addressRegion": "Tamil Nadu",
                  "addressCountry": "IN"
                }
              ],
              "openingHours": "Mo-Su 07:00-22:00",
              "priceRange": "₹₹",
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "foundingDate": "1975",
              "numberOfEmployees": "120+",
              "sameAs": [
                "https://www.instagram.com/sarvanaturalfoods",
                "https://www.facebook.com/sarvanaturalfoods"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Sarva Pure A2 Bilona Cow Ghee",
              "description": "Traditional bilona method ghee made from native Gir & Kangeyam cow milk. Slow-simmered over firewood for 8-10 hours. FSSAI certified. Packed in glass jars.",
              "brand": {
                "@type": "Brand",
                "name": "Sarva Natural Foods"
              },
              "image": "https://sarvanaturalfoods.com/logo/logo.png",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "150",
                "bestRating": "5",
                "worstRating": "1"
              },
              "review": {
                "@type": "Review",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "author": {
                  "@type": "Person",
                  "name": "Priya Sharma"
                },
                "reviewBody": "Best A2 ghee I have ever tasted. Pure aroma and golden color. Highly recommended!"
              },
              "offers": [
                {
                  "@type": "Offer",
                  "name": "500 ml Family Jar",
                  "price": "749",
                  "priceCurrency": "INR",
                  "availability": "https://schema.org/InStock",
                  "url": "https://sarvanaturalfoods.com/#products",
                  "priceValidUntil": "2026-12-31"
                },
                {
                  "@type": "Offer",
                  "name": "1 L Celebration Pack",
                  "price": "1399",
                  "priceCurrency": "INR",
                  "availability": "https://schema.org/InStock",
                  "url": "https://sarvanaturalfoods.com/#products",
                  "priceValidUntil": "2026-12-31"
                }
              ],
              "category": "Ghee",
              "material": "A2 Cow Milk",
              "countryOfOrigin": "IN"
            })
          }}
        />
      </head>
      <body className={`${sourceSans.className} ${sourceSans.variable} ${fraunces.variable} bg-[#fff7ea] text-[#2a1b08]`}>
        {children}
      </body>
    </html>
  )
}