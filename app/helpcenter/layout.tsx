import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Helpcenter - Sendwise",
  description: "Vind antwoorden op veelgestelde vragen, handleidingen en tips voor het optimaliseren van je verzendproces met Sendwise.",
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
