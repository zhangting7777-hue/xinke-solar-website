import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })

export const metadata: Metadata = {
  title: {
    default: 'XKNE Solar | Precision Engineered Solar Mounting Systems',
    template: '%s | XKNE Solar',
  },
  description:
    'Roof mount, ground mount and carport solar mounting systems. Engineered in China, certified to international standards, delivered worldwide with full technical support.',
  keywords: [
    'solar mounting systems',
    'solar racking',
    'roof mount solar',
    'ground mount solar',
    'solar carport',
    'PV mounting manufacturer',
  ],
  openGraph: {
    type: 'website',
    siteName: 'XKNE Solar',
    title: 'XKNE Solar | Precision Engineered Solar Mounting Systems',
    description:
      'Roof mount, ground mount and carport solar mounting systems, certified to international standards.',
  },
  robots: { index: true, follow: true },
}

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'XKNE Solar',
  description:
    'Manufacturer of precision engineered solar mounting systems: roof mount, ground mount, carport and accessories.',
  foundingDate: '2012',
  areaServed: 'Worldwide',
  knowsAbout: ['Solar mounting systems', 'PV racking', 'Solar carport', 'Ground mount solar'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="bg-white text-slate-800 antialiased">{children}</body>
    </html>
  )
}
