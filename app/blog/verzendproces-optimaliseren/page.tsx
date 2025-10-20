import { Metadata } from 'next';
import BlogContent from './BlogContent';

export const metadata: Metadata = {
  title: '5 tips om je webshop verzendproces te optimaliseren | Sendwise',
  description: 'Ontdek praktische tips om sneller, efficiënter en goedkoper te verzenden vanuit je webshop. Met Sendwise maak je verzenden eenvoudig en schaalbaar.',
  keywords: 'verzendproces optimaliseren, webshop tips, verzendsoftware, logistiek verbeteren, Sendwise, efficiënt verzenden',
  openGraph: {
    title: '5 tips om je webshop verzendproces te optimaliseren | Sendwise',
    description: 'Ontdek praktische tips om sneller, efficiënter en goedkoper te verzenden vanuit je webshop.',
    type: 'article',
    publishedTime: '2025-01-27T00:00:00.000Z',
    authors: ['Sendwise Team'],
  },
};

export default function VerzendprocesOptimaliseren() {
  return <BlogContent />;
}
