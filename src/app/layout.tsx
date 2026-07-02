import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://xinkesolar.com'),
  title: {
    default: 'Xinke Solar - Professional Solar Mounting System Manufacturer',
    template: '%s | Xinke Solar',
  },
  description: 'Leading manufacturer of solar mounting solutions with 12GW annual capacity. Roof mounts, ground mounts, carports, tracking systems, and components. Exporting to 100+ countries worldwide.',
  keywords: [
    'solar mounting system',
    'solar mounting manufacturer',
    'solar brackets',
    'PV mounting',
    'solar rail',
    'ground screw',
    'solar carport',
    'tracking system',
    'roof mount',
    'ground mount',
    'China solar supplier',
    'OEM solar mounting',
    'solar panel mounting',
    'Xinke Solar',
  ],
  authors: [{ name: 'Xinke Solar' }],
  creator: 'Xinke Solar',
  publisher: 'Xinke Solar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://xinkesolar.com',
    siteName: 'Xinke Solar',
    title: 'Xinke Solar - Professional Solar Mounting System Manufacturer',
    description: 'Leading manufacturer of solar mounting solutions with 12GW annual capacity. Exporting to 100+ countries worldwide.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Xinke Solar Mounting Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xinke Solar - Professional Solar Mounting System Manufacturer',
    description: 'Leading manufacturer of solar mounting solutions with 12GW annual capacity.',
    images: ['https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80'],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
