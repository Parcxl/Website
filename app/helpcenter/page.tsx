'use client';

import Image from "next/image";
import React, { useState } from "react";
import { Search, Book, MessageCircle, Mail, ArrowRight, ChevronDown, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function Helpcenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openCategory, setOpenCategory] = useState<number | null>(null);

  const categories = [
    {
      title: "Aan de slag",
      icon: "🚀",
      articles: [
        "Account aanmaken",
        "Eerste verzending aanmaken",
        "Integratie koppelen",
        "API key genereren"
      ]
    },
    {
      title: "Verzendingen",
      icon: "📦",
      articles: [
        "Label printen",
        "Track & Trace opvragen",
        "Verzending annuleren",
        "Retourzending aanmaken"
      ]
    },
    {
      title: "Integraties",
      icon: "🔌",
      articles: [
        "WooCommerce installeren",
        "Shopify verbinden",
        "API documentatie",
        "Webhooks instellen"
      ]
    },
    {
      title: "Facturatie",
      icon: "💰",
      articles: [
        "Facturen inzien",
        "Betaalmethode wijzigen",
        "Tarieven bekijken",
        "Credit aanvragen"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="https://www.sendwise.nl" className="flex items-center">
              <Image
                src="/sendwise-logo.png" 
                alt="Sendwise" 
                width={140} 
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <Link 
              href="https://www.sendwise.nl"
              className="text-gray-600 hover:text-[#0066ff] transition-colors font-medium"
            >
              Terug naar website
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
                placeholder="Zoek naar artikelen, handleidingen of veelgestelde vragen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-200 focus:border-[#0066ff] focus:outline-none transition-colors bg-white/80 backdrop-blur-sm shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid md:grid-cols-3 gap-6">
          <a href="#categories" className="group bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 hover:border-[#0066ff]/50 hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Book className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Kennisbank</h3>
            <p className="text-gray-600 mb-4">Doorzoek onze uitgebreide collectie handleidingen en artikelen</p>
            <div className="flex items-center text-[#0066ff] font-medium">
              Bekijk artikelen
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </div>
          </a>

          <a href="https://api.sendwise.nl/docs/sendwise-orders" target="_blank" rel="noopener noreferrer" className="group bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 hover:border-[#0066ff]/50 hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">API Documentatie</h3>
            <p className="text-gray-600 mb-4">Technische documentatie voor ontwikkelaars en integraties</p>
            <div className="flex items-center text-[#0066ff] font-medium">
              Naar API docs
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </div>
          </a>

          <a href="mailto:info@sendwise.nl" className="group bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 hover:border-[#0066ff]/50 hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Contact Support</h3>
            <p className="text-gray-600 mb-4">Krijg persoonlijke hulp van ons support team</p>
            <div className="flex items-center text-[#0066ff] font-medium">
              Neem contact op
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </div>
          </a>
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-3xl font-bold text-center mb-4">Populaire categorieën</h2>
        <p className="text-gray-600 text-center mb-12">Vind snel antwoord op je vraag</p>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-white/60 backdrop-blur-xl rounded-2xl border border-gray-200/50 overflow-hidden">
              <button
                onClick={() => setOpenCategory(openCategory === index ? null : index)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-50/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                </div>
                <ChevronDown 
                  className={`text-gray-400 transition-transform ${openCategory === index ? 'rotate-180' : ''}`} 
                  size={24} 
                />
              </button>
              
              {openCategory === index && (
                <div className="px-6 pb-6 space-y-3 animate-fade-in">
                  {category.articles.map((article, articleIndex) => (
                    <a
                      key={articleIndex}
                      href="#"
                      className="flex items-center gap-3 text-gray-700 hover:text-[#0066ff] transition-colors group"
                    >
                      <CheckCircle2 className="text-[#0066ff] flex-shrink-0" size={18} />
                      <span className="group-hover:translate-x-1 transition-transform">{article}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
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
      <footer className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 py-12 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-float-slow"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Link href="https://www.sendwise.nl">
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

