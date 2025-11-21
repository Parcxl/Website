'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Clock, User, Calendar, CheckCircle2, X, ArrowRight, Sparkles, Package, Zap, Shield, BarChart3, Users, Globe } from 'lucide-react';
import { useState } from 'react';
import AccountSignupModal from '../../../components/AccountSignupModal';

export default function BlogContent() {
  const [showSignupModal, setShowSignupModal] = useState(false);

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
            <button
              onClick={() => setShowSignupModal(true)}
              className="bg-[#0066ff] text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors font-medium"
            >
              Gratis uitproberen
            </button>
          </div>
        </div>
      </nav>

      {/* Article Content */}
      <article className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-none">
          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Waarom webshops kiezen voor Sendwise
            </h1>
            
            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>Sendwise Team</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>27 januari 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>7 min lezen</span>
              </div>
            </div>

            {/* Article Image */}
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-[#0066ff]/10 to-blue-600/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 flex items-center justify-center mx-auto mb-4">
                    <Image
                      src="/icoon-met-blauwe-overlay-kopie.png"
                      alt="Waarom Sendwise"
                      width={80}
                      height={80}
                      className="w-auto h-auto max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800">Waarom Sendwise</h2>
                </div>
              </div>
            </div>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            {/* Introductie */}
            <section className="mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Verzending is een cruciaal onderdeel van elke webshop. Het gaat niet alleen om het afleveren van een pakketje, maar ook om snelheid, betrouwbaarheid en kostenbeheersing.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Veel webshops staan voor de keuze: zelf alles regelen, een standaard vervoerder gebruiken, of werken met een gespecialiseerd platform zoals Sendwise. In dit artikel leggen we uit waarom steeds meer webshops kiezen voor Sendwise en welke voordelen dit oplevert.
              </p>
            </section>

            {/* Redenen */}
            <section className="mb-12">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Reden 1 */}
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Package className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Alles-in-één platform voor verzenden</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Sendwise biedt een compleet platform waar je alle verzendactiviteiten centraal kunt regelen. Van het aanmaken van verzendlabels tot het volgen van pakketten en het berekenen van de beste tarieven, alles gebeurt op één plek. Dit voorkomt versnippering van systemen en bespaart tijd en fouten.
                  </p>
                </div>

                {/* Reden 2 */}
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Globe className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Eenvoudige integratie met populaire webshops</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Een groot voordeel van Sendwise is de directe koppeling met platforms zoals Shopify en WooCommerce. Bestellingen komen automatisch binnen, labels worden eenvoudig gegenereerd en updates worden direct doorgestuurd naar klanten. Hierdoor hoef je minder handmatig werk te doen en blijft je logistiek overzichtelijk.
                  </p>
                </div>

                {/* Reden 3 */}
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Kostenbesparing zonder abonnementskosten</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Veel verzendoplossingen werken met vaste abonnementskosten, ongeacht het aantal zendingen. Sendwise rekent alleen voor wat je daadwerkelijk verzendt. Dit maakt het bijzonder aantrekkelijk voor zowel kleine als groeiende webshops. Door bulkverzendingen en slimme tarieven kun je de verzendkosten verder optimaliseren.
                  </p>
                </div>

                {/* Reden 4 */}
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Shield className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Flexibele verzendopties en vervoerders</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Niet elke bestelling is hetzelfde. Soms wil je snelheid, soms goedkoop verzenden. Sendwise geeft toegang tot meerdere vervoerders en verzendopties, zodat je altijd de beste keuze voor jouw webshop kunt maken.
                  </p>
                </div>

                {/* Reden 5 */}
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Efficiëntie en schaalbaarheid</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Met Sendwise kunnen webshops honderden tot duizenden bestellingen efficiënt verwerken. Bulklabels, automatische tracking en een overzichtelijk dashboard maken het eenvoudig om te schalen zonder extra personeel of handmatig werk.
                  </p>
                </div>

                {/* Reden 6 */}
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Verbeterde klanttevredenheid</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Trackinginformatie wordt automatisch gedeeld met klanten. Vertragingen en fouten worden sneller zichtbaar en opgelost. Dit leidt tot een betere klantervaring en een hogere kans op herhaalaankopen.
                  </p>
                </div>
              </div>
            </section>

            {/* Data en inzicht */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-[#0066ff]/10 to-blue-600/20 rounded-2xl p-8 border border-[#0066ff]/20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Data en inzicht</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Sendwise biedt inzicht in verzendstatistieken, retouren en kosten. Zo kun je je logistiek verbeteren, trends herkennen en strategische keuzes maken op basis van real-time data.
                </p>
              </div>
            </section>

            {/* Conclusie */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-[#0066ff]/10 to-blue-600/20 rounded-2xl p-8 border border-[#0066ff]/20">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusie</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Webshops kiezen voor Sendwise omdat het platform tijd, geld en moeite bespaart, flexibiliteit biedt en de klanttevredenheid verhoogt. Het is een complete oplossing die meegaat met jouw groei en tegelijkertijd de verzendprocessen stroomlijnt. Met Sendwise regel je alles op één plek, zonder abonnementskosten en met maximale controle.
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-3xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Overtuigd? Start vandaag nog!</h3>
              <p className="text-blue-100 mb-6">Ontdek zelf waarom steeds meer webshops kiezen voor Sendwise.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setShowSignupModal(true)}
                  className="bg-white text-[#0066ff] px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
                >
                  Gratis proberen
                </button>
                <Link
                  href="/"
                  className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 hover:border-white/50 transition-all hover:scale-105"
                >
                  Meer informatie
                </Link>
              </div>
            </section>
          </div>
        </div>
      </article>

      {/* Account Signup Modal - Reusable Component */}
      <AccountSignupModal 
        isOpen={showSignupModal} 
        onClose={() => setShowSignupModal(false)} 
      />
        {/* Modal content - same as other blogs */}

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
