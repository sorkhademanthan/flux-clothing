import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import SiteNavbar from "@/components/site/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FLUX - Where Style Is Fluid",
  description: "Limited-run streetwear that unlocks exclusive digital content, communities, and experiences. Every piece is a portal.",
  keywords: ["streetwear", "fashion", "phygital", "NFT fashion", "limited edition", "Mumbai streetwear", "sustainable fashion", "GenZ fashion"],
  authors: [{ name: "FLUX" }],
  creator: "FLUX",
  publisher: "FLUX",
  metadataBase: new URL('https://flux-streetwear.com'),
  openGraph: {
    title: "FLUX - Where Style Is Fluid",
    description: "Limited-run streetwear that unlocks exclusive digital content, communities, and experiences. Every piece is a portal.",
    url: "https://flux-streetwear.com",
    siteName: "FLUX",
    images: [
      {
        url: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "FLUX Streetwear - Phygital Fashion Revolution",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FLUX - Where Style Is Fluid",
    description: "Limited-run streetwear that unlocks exclusive digital content, communities, and experiences.",
    images: ["https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1200&q=80"],
    creator: "@flux_official",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0D0D0D] text-white min-h-screen`}
      >
        <SiteNavbar />
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
