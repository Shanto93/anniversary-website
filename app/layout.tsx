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
  metadataBase: new URL("https://anniversary-website-livid.vercel.app/"),

  title: "Our First Anniversary",
  description:
    "A heartfelt digital love letter for Sanjida. Celebrating 365 days of us.",

  openGraph: {
    title: "Our First Anniversary",
    description: "A celebration of our journey together, Sanjida. ❤️",
    url: "/",
    siteName: "Our First Anniversary",
    images: [
      {
        url: "/assets/hero/hero.png",
        width: 1200,
        height: 630,
        alt: "Shanto & Sanjida Anniversary",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
