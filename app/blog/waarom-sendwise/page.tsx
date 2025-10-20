import { Metadata } from 'next';
import BlogContent from './BlogContent';

export const metadata: Metadata = {
  title: 'Waarom webshops kiezen voor Sendwise | Efficiënt & voordelig',
  description: 'Ontdek waarom Sendwise de ideale verzendpartner is voor webshops. Bespaar tijd, verlaag kosten en verbeter klanttevredenheid met slimme verzendsoftware.',
  keywords: 'waarom Sendwise, webshop verzending, verzendsoftware, logistiek partner, efficiënt verzenden, kostenbesparing',
  openGraph: {
    title: 'Waarom webshops kiezen voor Sendwise | Efficiënt & voordelig',
    description: 'Ontdek waarom Sendwise de ideale verzendpartner is voor webshops.',
    type: 'article',
    publishedTime: '2025-01-27T00:00:00.000Z',
    authors: ['Sendwise Team'],
  },
};

export default function WaaromSendwise() {
  return <BlogContent />;
}
