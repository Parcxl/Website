import { Metadata } from 'next';
import BlogContent from './BlogContent';

export const metadata: Metadata = {
  title: 'Boost je webshop met Sendwise | Slim & efficiënt verzenden',
  description: 'Verhoog je efficiëntie en klanttevredenheid met Sendwise. Ontdek hoe je sneller, slimmer en goedkoper kunt verzenden voor je webshop.',
  keywords: 'webshop boost, Sendwise, efficiënt verzenden, logistiek optimaliseren, webshop groei, verzendsoftware',
  openGraph: {
    title: 'Boost je webshop met Sendwise | Slim & efficiënt verzenden',
    description: 'Verhoog je efficiëntie en klanttevredenheid met Sendwise.',
    type: 'article',
    publishedTime: '2025-01-27T00:00:00.000Z',
    authors: ['Sendwise Team'],
  },
};

export default function BoostWebshopSendwise() {
  return <BlogContent />;
}
