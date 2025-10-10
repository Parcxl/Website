import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Helpcenter - Sendwise",
  description: "Vind antwoorden op veelgestelde vragen, handleidingen en tips voor het optimaliseren van je verzendproces met Sendwise.",
};

export default function HelpcenterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
