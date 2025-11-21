'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, User, Calendar, CheckCircle2, X, ArrowRight, Sparkles } from 'lucide-react';
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
              Zo werkt slimme verzendsoftware voor webshops – en waarom het loont
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
                <span>5 min lezen</span>
              </div>
            </div>

            {/* Article Image */}
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-[#0066ff]/10 to-blue-600/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 flex items-center justify-center mx-auto mb-4">
                    <Image
                      src="/icoon-met-blauwe-overlay-kopie.png"
                      alt="Verzendsoftware voor webshops"
                      width={80}
                      height={80}
                      className="w-auto h-auto max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800">Verzendsoftware voor webshops</h2>
                </div>
              </div>
            </div>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            {/* Introductie */}
            <section className="mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Als webshopondernemer weet je dat klanten niet alleen kijken naar je producten, maar ook naar hoe snel en betrouwbaar ze hun bestelling ontvangen. Toch wordt verzenden vaak gezien als een tijdrovende en complexe klus. Gelukkig kan slimme verzendsoftware uitkomst bieden.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                In dit artikel leggen we uit wat verzendsoftware doet, waarom het onmisbaar is voor moderne webshops en hoe je met Sendwise eenvoudig efficiënter en goedkoper kunt verzenden.
              </p>
            </section>

            {/* Wat is verzendsoftware */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Wat is verzendsoftware?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Verzendsoftware is een digitale tool die je helpt bij het beheren van het volledige verzendproces. In plaats van handmatig labels te maken, gegevens te kopiëren en verzendkosten te berekenen, regelt de software dit automatisch. Met een geïntegreerd systeem kun je:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#0066ff] rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-lg text-gray-700">Bestellingen importeren uit je webshop</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#0066ff] rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-lg text-gray-700">Verzendlabels aanmaken in bulk</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#0066ff] rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-lg text-gray-700">Verzendtarieven vergelijken en kiezen</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#0066ff] rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-lg text-gray-700">Trackinginformatie automatisch delen met klanten</span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed">
                Bij Sendwise kun je bijvoorbeeld eenvoudig meerdere vervoerders koppelen en je verzendingen direct volgen, zonder gedoe met losse systemen.
              </p>
            </section>

            {/* Belangrijkste functies */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Belangrijkste functies en voordelen</h2>
              
              <div className="space-y-8">
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Integratie met je webshopplatform</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Sendwise koppelt met populaire platforms zoals Shopify en WooCommerce. Dat betekent dat bestellingen automatisch binnenkomen, labels worden aangemaakt en je geen handmatig werk meer hebt.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Kosten besparen</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Verzendsoftware helpt je de beste tarieven te vinden. Sendwise biedt een uniek tariefsysteem zonder abonnementskosten, zodat je alleen betaalt voor wat je daadwerkelijk verzendt. Zo houd je kosten onder controle, zelfs als je groeit.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Efficiëntie en tijdwinst</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Door bulklabels te maken en het verzendproces te automatiseren, bespaar je uren per week. Minder handmatig werk betekent ook minder fouten en retourzendingen.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Klanttevredenheid verhogen</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Met trackinginformatie die automatisch naar klanten wordt gestuurd, blijft iedereen op de hoogte van de status van hun bestelling. Dit verhoogt het vertrouwen en zorgt voor positieve klantbeleving.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">5. Schaalbaarheid</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Of je nu 10 of 10.000 bestellingen per maand hebt, verzendsoftware groeit met je mee. Je kunt eenvoudig extra vervoerders toevoegen en je logistiek opschalen zonder extra overhead.
                  </p>
                </div>
              </div>
            </section>

            {/* Waarom loont het */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Waarom loont het voor webshops?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Kortom, verzendsoftware helpt je niet alleen bij operationele taken, maar heeft ook een direct effect op je bedrijfsresultaten:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-[#0066ff]/10 to-blue-600/20 rounded-2xl p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Kostenreductie</h4>
                  <p className="text-gray-700">Geen verborgen abonnementskosten, enkel betaal wat je verzendt.</p>
                </div>
                <div className="bg-gradient-to-br from-[#0066ff]/10 to-blue-600/20 rounded-2xl p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Tijdwinst</h4>
                  <p className="text-gray-700">Minder handmatig werk, meer focus op groei.</p>
                </div>
                <div className="bg-gradient-to-br from-[#0066ff]/10 to-blue-600/20 rounded-2xl p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Betere klantbeleving</h4>
                  <p className="text-gray-700">Betrouwbare levering en transparante tracking.</p>
                </div>
                <div className="bg-gradient-to-br from-[#0066ff]/10 to-blue-600/20 rounded-2xl p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Schaalbaarheid</h4>
                  <p className="text-gray-700">Je bent klaar voor groei zonder extra complicaties.</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Met Sendwise combineer je al deze voordelen in één platform. Het resultaat? Een soepel lopende webshop, lagere kosten en tevredener klanten.
              </p>
            </section>

            {/* Conclusie */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusie</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Verzendsoftware is geen luxe meer voor webshops; het is een strategisch hulpmiddel om efficiënter te werken, kosten te besparen en klanten tevreden te houden. Met Sendwise heb je een platform dat eenvoudig integreert, schaalbaar is en je helpt om je logistiek op het hoogste niveau te organiseren.
              </p>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-3xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Klaar om je verzending te optimaliseren?</h3>
              <p className="text-blue-100 mb-6">Start vandaag nog met Sendwise en ervaar de voordelen van slimme verzendsoftware.</p>
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
