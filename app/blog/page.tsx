import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog & Artikelen | Sendwise',
  description: 'Lees onze artikelen over e-commerce, verzending en logistiek. Tips, handleidingen en best practices voor webshop eigenaren.',
};

const blogPosts = [
  {
    id: 'sendwise-goedgepickt',
    title: 'Sendwise met Goedgepickt verbinden: Complete handleiding',
    excerpt: 'Leer hoe je Sendwise eenvoudig kunt verbinden met Goedgepickt voor geautomatiseerde orderverwerking en verzending.',
    date: '2025-01-27',
    readTime: '6 min',
    author: 'Sendwise Team',
    category: 'Integratie',
    image: '/sendwise-logo.png'
  },
  {
    id: 'verzendsoftware-webshops',
    title: 'Zo werkt slimme verzendsoftware voor webshops – en waarom het loont',
    excerpt: 'Ontdek hoe verzendsoftware je webshop efficiënter maakt, kosten bespaart en klanttevredenheid verhoogt.',
    date: '2025-01-27',
    readTime: '5 min',
    author: 'Sendwise Team',
    category: 'Verzending',
    image: '/sendwise-logo.png'
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50/90 via-white/95 to-indigo-50/90">
      {/* Header */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Image
                src="/sendwise-logo.png" 
                alt="Sendwise" 
                width={140} 
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <div className="flex items-center gap-4">
              <Link 
                href="/helpcenter"
                className="text-gray-600 hover:text-[#0066ff] transition-colors font-medium"
              >
                Helpcenter
              </Link>
              <Link 
                href="/"
                className="text-gray-600 hover:text-[#0066ff] transition-colors font-medium"
              >
                Website
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            href="/helpcenter" 
            className="inline-flex items-center gap-2 text-[#0066ff] hover:text-blue-700 transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Terug naar Helpcenter
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blog & <span className="text-gradient">Artikelen</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tips, handleidingen en best practices voor webshop eigenaren. Leer alles over e-commerce, verzending en logistiek.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white/60 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-200/50 hover:border-[#0066ff]/50 hover:shadow-xl transition-all group">
              <Link href={`/blog/${post.id}`}>
                <div className="relative h-48 bg-gradient-to-br from-[#0066ff]/10 to-blue-600/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#0066ff] rounded-xl flex items-center justify-center">
                      <Image
                        src={post.image}
                        alt="Sendwise"
                        width={40}
                        height={12}
                        className="brightness-0 invert"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-[#0066ff]/10 text-[#0066ff] px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0066ff] transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{new Date(post.date).toLocaleDateString('nl-NL')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 py-12 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-float-slow"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="/">
              <Image
                src="/sendwise-logo.png" 
                alt="Sendwise" 
                width={140} 
                height={40}
                className="h-10 w-auto mx-auto mb-4 brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-sm">
              © 2025 Sendwise. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
