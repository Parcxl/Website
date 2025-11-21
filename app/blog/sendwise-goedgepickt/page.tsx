import { Metadata } from 'next';
import BlogContent from './BlogContent';

export const metadata: Metadata = {
  title: 'Sendwise met Goedgepickt verbinden | Integratie handleiding',
  description: 'Leer hoe je Sendwise eenvoudig kunt verbinden met Goedgepickt voor geautomatiseerde orderverwerking en verzending. Stap-voor-stap handleiding.',
  keywords: 'Sendwise, Goedgepickt, integratie, orderverwerking, verzending, webshop, e-commerce',
  openGraph: {
    title: 'Sendwise met Goedgepickt verbinden | Integratie handleiding',
    description: 'Leer hoe je Sendwise eenvoudig kunt verbinden met Goedgepickt voor geautomatiseerde orderverwerking en verzending.',
    type: 'article',
    publishedTime: '2025-01-27T00:00:00.000Z',
    authors: ['Sendwise Team'],
  },
};

export default function SendwiseGoedgepickt() {
  return <BlogContent />;
}

