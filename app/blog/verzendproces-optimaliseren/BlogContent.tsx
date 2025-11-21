'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Clock, User, Calendar, CheckCircle2, X, ArrowRight, Sparkles, Lightbulb, Target, Zap, TrendingUp, Users } from 'lucide-react';
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
              5 slimme tips om je verzendproces als webshop te optimaliseren
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
                <span>6 min lezen</span>
              </div>
            </div>

            {/* Article Image */}
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-[#0066ff]/10 to-blue-600/20">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 flex items-center justify-center mx-auto mb-4">
                    <Image
                      src="/icoon-met-blauwe-overlay-kopie.png"
                      alt="Verzendproces optimaliseren"
                      width={80}
                      height={80}
                      className="w-auto h-auto max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800">Verzendproces optimaliseren</h2>
                </div>
              </div>
            </div>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            {/* Introductie */}
            <section className="mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Voor veel webshopondernemers is verzending een tijdrovende en soms frustrerende klus. Fouten in adressen, vertragingen en hoge verzendkosten kunnen het verschil maken tussen een tevreden klant en een negatieve review.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Gelukkig zijn er manieren om je verzendproces te optimaliseren. Hier zijn vijf praktische tips waarmee je je logistiek slimmer en efficiënter kunt organiseren — inclusief hoe Sendwise je daarbij kan helpen.
              </p>
            </section>

            {/* Tips */}
            <section className="mb-12">
              <div className="space-y-8">
                {/* Tip 1 */}
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Kies de juiste geïntegreerde verzendsoftware</h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Een van de grootste tijdverspillers is handmatig werken met losse systemen. Kies daarom een platform dat integreert met je webshop.
                      </p>
                      <div className="bg-blue-50/50 rounded-xl p-4 border-l-4 border-[#0066ff]">
                        <p className="text-gray-700">
                          <strong>Sendwise tip:</strong> Sendwise koppelt bijvoorbeeld direct met Shopify en WooCommerce, waardoor bestellingen automatisch binnenkomen en labels met één klik worden aangemaakt. Dit bespaart tijd en voorkomt fouten.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tip 2 */}
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Werk met transparante tarieven</h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Veel webshops betalen te veel door vaste abonnementskosten of verborgen tarieven bij verzendpartners.
                      </p>
                      <div className="bg-blue-50/50 rounded-xl p-4 border-l-4 border-[#0066ff]">
                        <p className="text-gray-700">
                          <strong>Sendwise tip:</strong> Bij Sendwise heb je geen abonnementskosten en kun je eenvoudig een tarief op maat afspreken. Zo weet je altijd waar je aan toe bent en kun je goedkoper verzenden.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tip 3 */}
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Maak gebruik van bulklabels</h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Heb je meerdere bestellingen tegelijk? Maak gebruik van bulklabels. Dit bespaart niet alleen tijd, maar voorkomt ook dat je per ongeluk verkeerde labels print.
                      </p>
                      <div className="bg-blue-50/50 rounded-xl p-4 border-l-4 border-[#0066ff]">
                        <p className="text-gray-700">
                          <strong>Sendwise tip:</strong> Met Sendwise kun je in enkele klikken honderden labels tegelijk aanmaken.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tip 4 */}
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">4</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Houd realtime inzicht in je verzendingen</h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Niets is vervelender dan klanten die vragen waar hun pakket blijft. Met een dashboard dat realtime updates geeft, kun je eenvoudig zien welke bestellingen onderweg zijn.
                      </p>
                      <div className="bg-blue-50/50 rounded-xl p-4 border-l-4 border-[#0066ff]">
                        <p className="text-gray-700">
                          <strong>Sendwise tip:</strong> Sendwise biedt zo'n dashboard, inclusief trackinginformatie die automatisch naar klanten wordt gestuurd.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tip 5 */}
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">5</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Communiceer duidelijk met je klanten</h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Verzendinformatie is een belangrijk onderdeel van klanttevredenheid. Laat klanten weten wanneer hun pakket verzonden is, hoe laat het aankomt en wat ze kunnen doen bij vertraging.
                      </p>
                      <div className="bg-blue-50/50 rounded-xl p-4 border-l-4 border-[#0066ff]">
                        <p className="text-gray-700">
                          <strong>Sendwise tip:</strong> Automatische notificaties vanuit Sendwise maken dit eenvoudig en schelen je veel telefoontjes en e-mails.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusie */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-[#0066ff]/10 to-blue-600/20 rounded-2xl p-8 border border-[#0066ff]/20">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusie</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Een efficiënt verzendproces betekent minder fouten, lagere kosten en meer tevreden klanten. Met een slimme combinatie van verzendsoftware, transparante tarieven en bulklabels kun je jouw logistiek aanzienlijk verbeteren. Sendwise helpt je bij al deze stappen, zodat je je kunt focussen op wat écht telt: je webshop laten groeien.
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-3xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Klaar om je verzendproces te optimaliseren?</h3>
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
        {/* Modal content - same as other blog */}

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
