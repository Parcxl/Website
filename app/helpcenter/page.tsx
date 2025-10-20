'use client';

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Search, Sparkles, Book, MessageCircle, Mail, ArrowRight, ChevronDown, CheckCircle2 } from "lucide-react";

export default function Helpcenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  // Zoekbare content - alleen bestaande blogs en artikelen
  const searchableContent = [
    {
      id: 'verzendsoftware-blog',
      title: 'Verzendsoftware voor webshops - Hoe het werkt en waarom het loont',
      description: 'Ontdek hoe verzendsoftware je webshop efficiënter maakt, kosten bespaart en klanttevredenheid verhoogt.',
      type: 'blog',
      url: 'https://sendwise.nl/blog/verzendsoftware-webshops',
      keywords: ['verzendsoftware', 'webshop', 'e-commerce', 'logistiek', 'automatisering', 'kosten besparen', 'verzending', 'labels', 'tracking']
    },
    {
      id: 'verzendproces-optimaliseren',
      title: '5 slimme tips om je verzendproces als webshop te optimaliseren',
      description: 'Praktische tips om sneller, efficiënter en goedkoper te verzenden vanuit je webshop.',
      type: 'blog',
      url: 'https://sendwise.nl/blog/verzendproces-optimaliseren',
      keywords: ['verzendproces', 'optimaliseren', 'tips', 'webshop', 'efficiënt', 'bulklabels', 'transparante tarieven', 'verzendsoftware', 'logistiek']
    },
    {
      id: 'waarom-sendwise',
      title: 'Waarom webshops kiezen voor Sendwise',
      description: 'Ontdek waarom Sendwise de ideale verzendpartner is voor webshops.',
      type: 'blog',
      url: 'https://sendwise.nl/blog/waarom-sendwise',
      keywords: ['waarom Sendwise', 'verzendpartner', 'webshop', 'efficiënt', 'voordelig', 'integratie', 'kostenbesparing', 'verzendsoftware', 'logistiek']
    },
    {
      id: 'boost-webshop-sendwise',
      title: 'Boost je webshop met Sendwise – sneller, slimmer en goedkoper verzenden',
      description: 'Verhoog je efficiëntie en klanttevredenheid met Sendwise.',
      type: 'blog',
      url: 'https://sendwise.nl/blog/boost-webshop-sendwise',
      keywords: ['boost', 'webshop', 'Sendwise', 'slimmer', 'goedkoper', 'efficiëntie', 'klanttevredenheid', 'verzendsoftware', 'logistiek']
    }
  ];

  const quickActions = [
    {
      title: "Kennisbank",
      icon: Book,
      description: "Doorzoek onze uitgebreide collectie handleidingen en artikelen",
      dropdown: [
        "Verzendsoftware voor webshops - Hoe het werkt en waarom het loont",
        "5 slimme tips om je verzendproces als webshop te optimaliseren",
        "Waarom webshops kiezen voor Sendwise",
        "Boost je webshop met Sendwise – sneller, slimmer en goedkoper verzenden"
      ]
    },
    {
      title: "API Documentatie",
      icon: MessageCircle,
      description: "Technische documentatie voor ontwikkelaars en integraties",
      dropdown: [
        "Orders API: https://api.sendwise.nl/docs/sendwise-orders",
        "Authentication & API keys",
        "Webhooks instellen",
        "Rate limits en best practices"
      ]
    },
    {
      title: "Contact Support",
      icon: Mail,
      description: "Krijg persoonlijke hulp van ons support team",
      dropdown: [
        "Email: info@sendwise.nl",
        "Telefoon: +31 619 156 123",
        "WhatsApp: +31 619 156 123",
        "Live chat (werkdagen 9:00-17:00)"
      ]
    }
  ];

  // Search function
  const handleSearch = (query: string) => {
    if (query.trim().length < 2) {
      setSearchResults([]);
      setShowSearchResults(false);
      return;
    }

    const results = searchableContent.filter(item => {
      const searchTerms = query.toLowerCase().split(' ');
      const searchText = `${item.title} ${item.description} ${item.keywords.join(' ')}`.toLowerCase();
      
      // Check if ALL search terms are found in the item
      return searchTerms.every(term => searchText.includes(term));
    });

    setSearchResults(results);
    setShowSearchResults(true);
  };

  // Reset search function
  const resetSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setShowSearchResults(false);
    setIsSearchActive(false);
  };

  // Perspective scroll animation for helpcenter cards
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.helpcenter-card');
      
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
          const intensity = Math.sin(scrollProgress * Math.PI);
          
          // Different rotation for each card
          let rotateX = 0;
          let rotateY = 0;
          
          if (index === 0) {
            // Left card - rotate left
            rotateY = -intensity * 15;
          } else if (index === 1) {
            // Middle card - rotate down
            rotateX = intensity * 15;
          } else if (index === 2) {
            // Right card - rotate right
            rotateY = intensity * 15;
          }
          
          (card as HTMLElement).style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${intensity * 20}px)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Escape key handler for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchActive) {
        resetSearch();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchActive]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Ultra Fancy Smooth Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white/95 to-indigo-50/90">
        {/* Multiple smooth gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0066ff]/8 via-transparent to-cyan-300/12 backdrop-blur-sm"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-indigo-200/10 via-transparent to-blue-300/15 backdrop-blur-md"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent backdrop-blur-lg"></div>
        
        {/* Floating smooth orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large smooth floating orbs */}
          <div className="absolute top-10 left-10 w-96 h-96 bg-white/15 backdrop-blur-xl rounded-full animate-float"></div>
          <div className="absolute top-1/4 right-10 w-80 h-80 bg-blue-100/20 backdrop-blur-xl rounded-full animate-float-slow" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-indigo-100/18 backdrop-blur-xl rounded-full animate-float-reverse" style={{animationDelay: '4s'}}></div>
          <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-cyan-100/25 backdrop-blur-xl rounded-full animate-float" style={{animationDelay: '6s'}}></div>
          
          {/* Medium smooth floating orbs */}
          <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-white/12 backdrop-blur-xl rounded-full animate-float-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/3 right-1/3 w-56 h-56 bg-blue-50/18 backdrop-blur-xl rounded-full animate-float" style={{animationDelay: '3s'}}></div>
          
          {/* Small smooth floating particles */}
          <div className="absolute top-20 left-1/2 w-32 h-32 bg-indigo-50/15 backdrop-blur-xl rounded-full animate-float" style={{animationDelay: '5s'}}></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-50/12 backdrop-blur-xl rounded-full animate-float-slow" style={{animationDelay: '7s'}}></div>
        </div>

        {/* Smooth glassmorphic overlay patterns */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(255,255,255,0.4) 0%, transparent 60%),
              radial-gradient(circle at 80% 20%, rgba(255,255,255,0.3) 0%, transparent 60%),
              radial-gradient(circle at 40% 40%, rgba(255,255,255,0.2) 0%, transparent 60%)
            `,
            animation: 'details-shimmer 15s ease-in-out infinite'
          }}></div>
        </div>

        {/* Smooth noise texture for glass effect */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
      {/* Header */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-[70] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="https://sendwise.nl" className="flex items-center">
              <Image
                src="/sendwise-logo.png" 
                alt="Sendwise" 
                width={140} 
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
            <div className="flex items-center gap-4">
              <Link 
                href="https://sendwise.nl/blog"
                className="text-gray-600 hover:text-[#0066ff] transition-colors font-medium"
              >
                Blog
              </Link>
              <Link 
                href="https://sendwise.nl"
                className="text-gray-600 hover:text-[#0066ff] transition-colors font-medium"
              >
                Website
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`relative pt-32 px-4 sm:px-6 lg:px-8 overflow-hidden transition-all duration-700 ease-in-out ${
        isSearchActive ? 'pb-96' : 'pb-20'
      }`}>
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-20 right-0 w-80 h-80 bg-indigo-300/30 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-cyan-300/30 rounded-full blur-3xl animate-float-reverse"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200/50 shadow-sm mb-8">
            <Book className="text-[#0066ff]" size={18} />
            <span className="text-[#0066ff] text-sm font-semibold">Sendwise Helpcenter</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Hoe kunnen we je <span className="text-gradient">helpen</span>?
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Zoek in onze kennisbank, lees handleidingen of neem direct contact op met ons support team
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Zoek naar artikelen, handleidingen of blogs..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  handleSearch(e.target.value);
                }}
                onFocus={() => {
                  setIsSearchFocused(true);
                  setIsSearchActive(true);
                }}
                onBlur={() => {
                  setIsSearchFocused(false);
                  // Delay hiding results to allow clicking on them
                  setTimeout(() => {
                    setShowSearchResults(false);
                    setIsSearchActive(false);
                  }, 200);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Escape') {
                    resetSearch();
                  }
                }}
                className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-200 focus:border-[#0066ff] focus:outline-none transition-colors bg-white/80 backdrop-blur-sm shadow-lg"
              />
              
              {/* Search Placeholder when active but no results */}
              {isSearchActive && searchQuery.trim().length < 2 && (
                <div className="absolute top-full left-0 right-0 mt-3 bg-white/98 backdrop-blur-2xl rounded-3xl border border-gray-200/60 shadow-2xl z-[60] p-6 animate-in slide-in-from-top-2 duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-[#0066ff]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Search className="text-[#0066ff]" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Begin met zoeken</h3>
                    <p className="text-gray-600 mb-4">Typ je zoekterm in om artikelen, handleidingen en blogs te vinden</p>
                    <div className="text-sm text-gray-500">
                      <p>💡 Probeer bijvoorbeeld:</p>
                      <p className="mt-2 font-medium text-[#0066ff]">"verzendsoftware" • "webshop" • "logistiek"</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Search Results Dropdown */}
              {showSearchResults && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-3 bg-white/98 backdrop-blur-2xl rounded-3xl border border-gray-200/60 shadow-2xl z-[60] max-h-80 overflow-y-auto animate-in slide-in-from-top-2 duration-300">
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-base font-semibold text-gray-800">Zoekresultaten</h3>
                      <button
                        onClick={resetSearch}
                        className="text-sm text-gray-500 hover:text-[#0066ff] transition-all duration-200 hover:scale-105"
                        onMouseDown={(e) => e.preventDefault()}
                      >
                        ✕
                      </button>
                    </div>
                    <div className="space-y-2">
                      {searchResults.map((result, index) => (
                        <Link
                          key={result.id}
                          href={result.url}
                          target={result.url.includes('http') ? '_blank' : '_self'}
                          rel={result.url.includes('http') ? 'noopener noreferrer' : ''}
                          className="flex items-center gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-[#0066ff]/5 hover:to-blue-50/50 transition-all duration-300 group hover:shadow-md border border-transparent hover:border-[#0066ff]/20"
                          onClick={() => {
                            resetSearch();
                          }}
                        >
                          <div className="w-8 h-8 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                            {result.type === 'blog' && <Book size={16} className="text-white" />}
                            {result.type === 'guide' && <Book size={16} className="text-white" />}
                            {result.type === 'faq' && <MessageCircle size={16} className="text-white" />}
                            {result.type === 'api' && <MessageCircle size={16} className="text-white" />}
                            {result.type === 'contact' && <Mail size={16} className="text-white" />}
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#0066ff] transition-colors leading-tight">
                              {result.title}
                            </h4>
                          </div>
                          <span className="text-xs text-gray-400 group-hover:text-[#0066ff] transition-colors">→</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {/* No Results */}
              {showSearchResults && searchResults.length === 0 && searchQuery.trim().length >= 2 && (
                <div className="absolute top-full left-0 right-0 mt-3 bg-white/98 backdrop-blur-2xl rounded-3xl border border-gray-200/60 shadow-2xl z-[60] p-6 animate-in slide-in-from-top-2 duration-300">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Search className="text-gray-400" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">Geen resultaten gevonden</h3>
                    <p className="text-gray-600 mb-4">We kunnen geen resultaten vinden voor "<span className="font-medium">{searchQuery}</span>"</p>
                    <div className="text-sm text-gray-500 mb-6">
                      <p>💡 Probeer andere zoektermen zoals:</p>
                      <p className="mt-1 font-medium">"verzendsoftware", "webshop", "logistiek"</p>
                    </div>
                    <button
                      onClick={resetSearch}
                      className="inline-flex items-center px-4 py-2 bg-[#0066ff] text-white rounded-xl hover:bg-blue-700 transition-all duration-200 hover:scale-105 font-medium"
                      onMouseDown={(e) => e.preventDefault()}
                    >
                      Opnieuw zoeken
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions with Dropdown */}
      <section className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 transition-all duration-700 ease-in-out ${
        isSearchActive ? 'opacity-0 translate-y-8 scale-95 pointer-events-none' : 'opacity-100 translate-y-0 scale-100'
      }`}>
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {quickActions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <div 
                key={index} 
                className="helpcenter-card bg-white/60 backdrop-blur-xl rounded-2xl border border-gray-200/50 hover:border-[#0066ff]/50 hover:shadow-xl transition-all cursor-pointer"
                onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{action.title}</h3>
                  <p className="text-gray-600 mb-4">{action.description}</p>
                  <div className="flex items-center text-[#0066ff] font-medium">
                    <ChevronDown 
                      className={`ml-auto transition-transform ${openDropdown === index ? 'rotate-180' : ''}`} 
                      size={18} 
                    />
                  </div>
                </div>
                
                {openDropdown === index && (
                  <div className="px-6 pb-6 animate-fade-in" onClick={(e) => e.stopPropagation()}>
                    <div className="border-t border-gray-200/50 pt-4 space-y-3">
                      {action.dropdown.map((item, itemIndex) => {
                        let href = '#';
                        let target = '_self';
                        let rel = '';
                        
                        if (item.includes('http')) {
                          href = item.split(': ')[1];
                          target = '_blank';
                          rel = 'noopener noreferrer';
                        } else if (item.includes('Verzendsoftware voor webshops')) {
                          href = '/blog/verzendsoftware-webshops';
                        }
                        
                        return (
                          <a
                            key={itemIndex}
                            href={href}
                            target={target}
                            rel={rel}
                            className="block bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:border-[#0066ff]/50 hover:shadow-md transition-all group cursor-pointer"
                          >
                            <div className="flex items-start gap-3">
                              <CheckCircle2 className="text-[#0066ff] flex-shrink-0 mt-0.5" size={16} />
                              <span className="text-sm text-gray-700 group-hover:text-[#0066ff] transition-colors">{item}</span>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>


      {/* Contact CTA */}
      <section className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 transition-all duration-700 ease-in-out delay-100 ${
        isSearchActive ? 'opacity-0 translate-y-8 scale-95 pointer-events-none' : 'opacity-100 translate-y-0 scale-100'
      }`}>
        <div className="relative bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-3xl p-12 text-center overflow-hidden">
          {/* Animated blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl animate-float-slow"></div>
          </div>

          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Kun je het antwoord niet vinden?
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Ons support team staat voor je klaar om je te helpen
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@sendwise.nl"
                className="bg-white text-[#0066ff] px-8 py-4 rounded-full hover:shadow-2xl transition-all hover:scale-105 font-semibold inline-flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Email ons
              </a>
              <a
                href="tel:+31619156123"
                className="bg-white/20 backdrop-blur-xl text-white border-2 border-white/30 px-8 py-4 rounded-full hover:bg-white/30 transition-all font-semibold"
              >
                Bel ons
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 py-12 overflow-hidden transition-all duration-700 ease-in-out delay-200 ${
        isSearchActive ? 'opacity-0 translate-y-8 scale-95 pointer-events-none' : 'opacity-100 translate-y-0 scale-100'
      }`}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-float-slow"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="https://sendwise.nl">
              <Image
                src="/sendwise-logo.png" 
                alt="Sendwise" 
                width={140} 
                height={40}
                className="h-10 w-auto mx-auto mb-4 brightness-0 invert"
                priority
              />
            </Link>
            <p className="text-gray-400 text-sm">
              © 2025 Sendwise. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}