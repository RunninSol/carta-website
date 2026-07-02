import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
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
  metadataBase: new URL("https://travelbycarta.com"),
  title: {
    default: "Carta · Travel, precisely made",
    template: "%s | Carta",
  },
  description:
    "Carta is a travel advisory built around you. Every client gets a trip hub with their restaurants, hotels, and contacts on their phone. And they get me, directly.",
  keywords: [
    "travel advisor",
    "personal travel concierge",
    "custom itinerary",
    "private travel agent",
    "trip planning service",
    "travel specialist",
    "personal travel guide",
    "trip hub",
  ],
  openGraph: {
    title: "Carta · Travel, precisely made",
    description:
      "A travel advisor who builds a trip hub for every client. Your restaurants, your hotels, your schedule, my personal notes. On your phone. And you get me, directly.",
    siteName: "Carta",
    type: "website",
    url: "https://travelbycarta.com",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Carta · Travel, precisely made",
    description:
      "A travel advisor who builds a trip hub for every client. Built around you, not the average traveler.",
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
  url: "https://travelbycarta.com",
  logo: "https://travelbycarta.com/brand/logo_mark_gold_on_navy_512px.png",
  slogan: "Travel, precisely made",
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
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
