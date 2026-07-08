import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const ebgaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-ebgaramond",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.travelbycarta.com"),
  title: {
    default: "Carta · The expert who impresses you with care",
    template: "%s | Carta",
  },
  description:
    "I'm a travel advisor. Every client gets a trip hub with their restaurants, hotels, and contacts on their phone. And they get me, directly.",
  applicationName: "Carta",
  authors: [{ name: "Gabe Rozavski", url: "https://www.travelbycarta.com/about" }],
  creator: "Gabe Rozavski",
  publisher: "Travel By Carta LLC",
  category: "travel",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/brand/logo_mark_navy_on_ivory_64px.png",
    apple: "/icons/apple-touch-icon.png",
  },
  openGraph: {
    title: "Carta · The expert who impresses you with care",
    description:
      "A travel advisor who builds a trip hub for every client. Your restaurants, your hotels, your schedule, my personal notes. On your phone. And you get me, directly.",
    siteName: "Carta",
    type: "website",
    url: "https://www.travelbycarta.com",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Carta · The expert who impresses you with care",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carta · The expert who impresses you with care",
    description:
      "A travel advisor who builds a trip hub for every client. Built around you, not the average traveler.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Carta",
  legalName: "Travel By Carta LLC",
  url: "https://www.travelbycarta.com",
  logo: "https://www.travelbycarta.com/brand/logo_mark_gold_on_navy_512px.png",
  slogan: "The expert who impresses you with care",
  description:
    "A travel advisory built around you. Every client gets a trip hub with their reservations, restaurants, and documents on their phone, and a direct line to their advisor.",
  email: "gabe@travelbycarta.com",
  telephone: "+1-323-854-1678",
  founder: {
    "@type": "Person",
    name: "Gabe Rozavski",
  },
  memberOf: {
    "@type": "Organization",
    name: "WorldVia Travel Group",
  },
  areaServed: "Worldwide",
  sameAs: ["https://www.travelbycarta.com"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ebgaramond.variable} ${inter.variable}`}>
      <body className="font-body">
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
