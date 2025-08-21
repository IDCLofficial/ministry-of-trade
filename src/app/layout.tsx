export const dynamic = 'force-dynamic'

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import GlobalLoader from '@/components/GlobalLoader'



export const metadata: Metadata = {
  title: "Ministry of Trade, Commerce, and Investment",
  description: "The Ministry of Trade, Commerce, and Investment in Imo State is responsible for overseeing trade policies, market development, and investment promotion to ensure economic growth and development.",
};

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
