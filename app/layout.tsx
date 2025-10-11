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
  title: "Sendwise - Gratis Verzendsoftware voor Webshops | PostNL, DHL & Meer",
  description: "Verzendsoftware zonder abonnementskosten voor Nederlandse webshops. Koppel PostNL, DHL, CIRRO & Connect. Bespaar tot 50% op verzendkosten. Gratis proberen!",
  keywords: "verzendsoftware, webshop verzending, PostNL, DHL, gratis verzendplatform, Nederlandse webshops, verzendkosten besparen, e-commerce verzending",
  openGraph: {
    title: "Sendwise - Gratis Verzendsoftware voor Webshops",
    description: "Het slimste verzendplatform voor webshops in Nederland. Bespaar tijd, geld en verhoog de klanttevredenheid. Geen abonnementskosten, altijd de beste tarieven.",
    url: "https://www.sendwise.nl",
    siteName: "Sendwise",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sendwise - Gratis Verzendsoftware voor Webshops",
    description: "Bespaar tot 50% op verzendkosten met onze gratis verzendsoftware. Koppel PostNL, DHL en meer verzendpartners.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
