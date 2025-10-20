import { Metadata } from 'next';
import BlogContent from './BlogContent';

export const metadata: Metadata = {
  title: 'Slimme verzendsoftware voor webshops | Sendwise',
  description: 'Ontdek hoe verzendsoftware je webshop efficiënter maakt, kosten bespaart en klanttevredenheid verhoogt. Leer waarom Sendwise de ideale partner is.',
  keywords: 'verzendsoftware, webshop, e-commerce, logistiek, Sendwise, verzending, labels, tracking',
  openGraph: {
    title: 'Slimme verzendsoftware voor webshops | Sendwise',
    description: 'Ontdek hoe verzendsoftware je webshop efficiënter maakt, kosten bespaart en klanttevredenheid verhoogt.',
    type: 'article',
    publishedTime: '2025-01-27T00:00:00.000Z',
    authors: ['Sendwise Team'],
  },
};

export default function VerzendsoftwareWebshops() {
  return <BlogContent />;
}