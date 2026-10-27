export const dynamic = 'force-dynamic'

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import GlobalLoader from '@/components/GlobalLoader'
import { buildRootMetadata, jsonLd, organizationJsonLd } from "@/lib/seo";



const baseMetadata: Metadata = {
  title: "Ministry of Trade, Commerce, and Investment",
  description: "The Ministry of Trade, Commerce, and Investment in Imo State is responsible for overseeing trade policies, market development, and investment promotion to ensure economic growth and development.",
};

export const metadata = buildRootMetadata(baseMetadata);


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(organizationJsonLd) }} />
        <GlobalLoader/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
