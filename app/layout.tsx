import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Our First Anniversary",
  description:
    "A heartfelt digital love letter and celebration of our first year together. A collection of memories, reasons why I love you, and a special surprise message just for you. Here's to many more years of love and happiness.",

  openGraph: {
    title: "Our First Anniversary",
    description: "A heartfelt celebration of our first year together, Sanjida.",
    url: "https://anniversary-website-livid.vercel.app/",
    siteName: "Our First Anniversary",
    images: [
      {
        url: "/assets/hero/hero.png",
        width: 1200,
        height: 630,
        alt: "Our First Anniversary - Shanto & Sanjida",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our First Anniversary",
    description: "A digital celebration of our journey together.",
    images: ["/assets/hero/hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
