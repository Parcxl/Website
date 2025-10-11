import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sendwise Helpcenter - Handleidingen & Support | Verzendsoftware Hulp",
  description: "Vind handleidingen, FAQ's en support voor Sendwise verzendsoftware. Leer hoe je PostNL, DHL en andere verzendpartners koppelt. Gratis hulp bij je webshop verzending.",
  keywords: "Sendwise help, verzendsoftware handleiding, PostNL koppeling, DHL integratie, webshop verzending hulp, e-commerce support, verzendplatform uitleg",
  openGraph: {
    title: "Sendwise Helpcenter - Verzendsoftware Support",
    description: "Vind antwoorden op veelgestelde vragen, handleidingen en tips voor het optimaliseren van je verzendproces met Sendwise.",
    url: "https://helpcenter.sendwise.nl",
    siteName: "Sendwise Helpcenter",
    type: "website",
    locale: "nl_NL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sendwise Helpcenter - Verzendsoftware Hulp",
    description: "Handleidingen en support voor Sendwise verzendsoftware. Leer hoe je je webshop verzending optimaliseert.",
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
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function HelpcenterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
