export const dynamic = 'force-dynamic'

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import GlobalLoader from '@/components/GlobalLoader'


// optimized metadata for seo
export const metadata: Metadata = {
  title: {
    default: 'Imo State Ministry of Trade, Commerce, and Investment',
    template: '%s | Imo State Ministry of Trade, Commerce, and Investment'
  },
  description: 'Official website of the Imo State Ministry of Trade, Commerce, and Investment - providing trade policies, market development, and investment promotion to ensure economic growth and development.',
  keywords: ['Imo State Trade', 'Ministry of Trade', 'Commerce Nigeria', 'Investment Imo'],
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://trade.im.gov.ng',
    siteName: 'Imo State Ministry of Trade, Commerce, and Investment',
    title: 'Imo State Ministry of Trade, Commerce, and Investment',
    description: 'Official website of the Imo State Ministry of Trade, Commerce, and Investment',
    images: [
      {
        url: 'https://trade.im.gov.ng/images/IMSG-Logo.svg',
        width: 1200,
        height: 630,
        alt: 'Imo State Ministry of Trade, Commerce, and Investment',
      }
    ],
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
    google: '_7c1t_i-UsjS1_BD_kE-vsXMUak-mgMUnIT91dEUEQ4',
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GlobalLoader/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
