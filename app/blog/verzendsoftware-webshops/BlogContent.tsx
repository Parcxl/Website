'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Clock, User, Calendar, CheckCircle2, X, ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function BlogContent() {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [signupStep, setSignupStep] = useState(1);
  
  // Form state
  const [formData, setFormData] = useState({
    bedrijfsnaam: '',
    kvk: '',
    website: '',
    voornaam: '',
    achternaam: '',
    email: '',
    telefoon: ''
  });
  const [submittedData, setSubmittedData] = useState({
    voornaam: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmittedData({ voornaam: formData.voornaam, email: formData.email });
      setSignupStep(2);
      setSubmitSuccess(true);
    } catch (error) {
      setSubmitError('Er is iets misgegaan. Probeer het opnieuw.');
    } finally {
      setIsSubmitting(false);
    }
  };

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

      {/* Signup/Account Aanvraag Page */}
      <div 
        className={`fixed inset-0 z-[100] bg-gradient-to-br from-blue-50 via-white to-indigo-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          showSignupModal ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-300/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-indigo-300/20 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-cyan-300/20 rounded-full blur-3xl animate-float-reverse"></div>
        </div>

        {/* Close button - Fixed top left */}
        <button
          onClick={() => setShowSignupModal(false)}
          className="fixed top-8 left-8 w-14 h-14 bg-white/80 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg z-10 group border border-gray-200/50"
        >
          <ArrowRight className="text-gray-600 group-hover:text-[#0066ff] rotate-180" size={24} />
        </button>

        {/* Content */}
        <div className="relative h-full overflow-y-auto">
          <div className="min-h-full flex items-center justify-center px-4 py-20">
            <div className="max-w-7xl w-full">
              {/* Header - Two Column Layout on Desktop */}
              <div className="mb-12">
                {/* Mobile: Stacked Layout */}
                <div className="md:hidden text-center mb-12">
                  <div 
                    className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-5 py-2.5 rounded-full border border-blue-200/50 mb-8 shadow-sm"
                    style={{
                      animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards',
                      opacity: 0
                    }}
                  >
                    <Sparkles className="text-[#0066ff]" size={20} />
                    <span className="text-[#0066ff] text-sm font-semibold">Direct starten</span>
                  </div>
                  <h1 
                    className="text-5xl font-bold mb-6"
                    style={{
                      animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards',
                      opacity: 0
                    }}
                  >
                    Start vandaag nog <span className="text-gradient">gratis</span>
                  </h1>
                  <p 
                    className="text-xl text-gray-600 mb-8"
                    style={{
                      animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards',
                      opacity: 0
                    }}
                  >
                    Maak direct je account aan. Wij nemen binnen 24 uur contact op om je verzendtarieven te bespreken.
                  </p>

                  {/* USP Points */}
                  <div 
                    className="flex flex-wrap justify-center gap-4 mb-8"
                    style={{
                      animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards',
                      opacity: 0
                    }}
                  >
                    <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50">
                      <CheckCircle2 className="text-green-500" size={18} />
                      <span className="text-sm font-medium text-gray-700">Geen abonnementskosten</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50">
                      <CheckCircle2 className="text-green-500" size={18} />
                      <span className="text-sm font-medium text-gray-700">Beste tarieven</span>
                    </div>
                  </div>

                  {/* Hero Image */}
                  <div 
                    className="relative"
                    style={{
                      animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards',
                      opacity: 0
                    }}
                  >
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#0066ff]/20 to-blue-600/20 rounded-3xl blur-2xl"></div>
                    <div className="relative">
                      <Image
                        src="https://wclkrgejvcuglowsrefl.supabase.co/storage/v1/object/public/Sendwise/foto%20sendwise.png"
                        alt="Sendwise Platform"
                        width={800}
                        height={450}
                        className="rounded-3xl shadow-2xl border-4 border-white/50"
                      />
                    </div>
                  </div>
                </div>

                {/* Desktop: Two Column Layout */}
                <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
                  {/* Left Column: Text Content */}
                  <div>
                    <div 
                      className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-5 py-2.5 rounded-full border border-blue-200/50 mb-8 shadow-sm"
                      style={{
                        animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards',
                        opacity: 0
                      }}
                    >
                      <Sparkles className="text-[#0066ff]" size={20} />
                      <span className="text-[#0066ff] text-sm font-semibold">Direct starten</span>
                    </div>
                    <h1 
                      className="text-5xl lg:text-6xl font-bold mb-6"
                      style={{
                        animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards',
                        opacity: 0
                      }}
                    >
                      Start vandaag nog <span className="text-gradient">gratis</span>
                    </h1>
                    <p 
                      className="text-xl text-gray-600 mb-8"
                      style={{
                        animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards',
                        opacity: 0
                      }}
                    >
                      Maak direct je account aan. Wij nemen binnen 24 uur contact op om je verzendtarieven te bespreken.
                    </p>

                    {/* USP Points */}
                    <div 
                      className="flex flex-wrap gap-4 mb-8"
                      style={{
                        animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards',
                        opacity: 0
                      }}
                    >
                      <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50">
                        <CheckCircle2 className="text-green-500" size={18} />
                        <span className="text-sm font-medium text-gray-700">Geen abonnementskosten</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50">
                        <CheckCircle2 className="text-green-500" size={18} />
                        <span className="text-sm font-medium text-gray-700">Beste tarieven</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Hero Image */}
                  <div 
                    className="relative"
                    style={{
                      animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards',
                      opacity: 0
                    }}
                  >
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#0066ff]/20 to-blue-600/20 rounded-3xl blur-2xl"></div>
                    <div className="relative">
                      <Image
                        src="https://wclkrgejvcuglowsrefl.supabase.co/storage/v1/object/public/Sendwise/foto%20sendwise.png"
                        alt="Sendwise Platform"
                        width={800}
                        height={450}
                        className="rounded-3xl shadow-2xl border-4 border-white/50"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Section */}
              <div className="max-w-4xl mx-auto">
                {signupStep === 1 ? (
                  <div 
                    className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/50 shadow-xl"
                    style={{
                      animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.35s forwards',
                      opacity: 0
                    }}
                  >
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Bedrijfsinformatie */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="bedrijfsnaam" className="block text-sm font-medium text-gray-700 mb-2">
                            Bedrijfsnaam *
                          </label>
                          <input
                            type="text"
                            id="bedrijfsnaam"
                            name="bedrijfsnaam"
                            value={formData.bedrijfsnaam}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0066ff] focus:border-transparent transition-colors"
                            placeholder="Jouw bedrijfsnaam"
                          />
                        </div>
                        <div>
                          <label htmlFor="kvk" className="block text-sm font-medium text-gray-700 mb-2">
                            KVK nummer *
                          </label>
                          <input
                            type="text"
                            id="kvk"
                            name="kvk"
                            value={formData.kvk}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0066ff] focus:border-transparent transition-colors"
                            placeholder="12345678"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                          Website
                        </label>
                        <input
                          type="url"
                          id="website"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0066ff] focus:border-transparent transition-colors"
                          placeholder="https://jouwwebshop.nl"
                        />
                      </div>

                      {/* Persoonlijke informatie */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="voornaam" className="block text-sm font-medium text-gray-700 mb-2">
                            Voornaam *
                          </label>
                          <input
                            type="text"
                            id="voornaam"
                            name="voornaam"
                            value={formData.voornaam}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0066ff] focus:border-transparent transition-colors"
                            placeholder="Jouw voornaam"
                          />
                        </div>
                        <div>
                          <label htmlFor="achternaam" className="block text-sm font-medium text-gray-700 mb-2">
                            Achternaam *
                          </label>
                          <input
                            type="text"
                            id="achternaam"
                            name="achternaam"
                            value={formData.achternaam}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0066ff] focus:border-transparent transition-colors"
                            placeholder="Jouw achternaam"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            E-mailadres *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0066ff] focus:border-transparent transition-colors"
                            placeholder="jouw@email.nl"
                          />
                        </div>
                        <div>
                          <label htmlFor="telefoon" className="block text-sm font-medium text-gray-700 mb-2">
                            Telefoonnummer *
                          </label>
                          <input
                            type="tel"
                            id="telefoon"
                            name="telefoon"
                            value={formData.telefoon}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0066ff] focus:border-transparent transition-colors"
                            placeholder="+31 6 12345678"
                          />
                        </div>
                      </div>

                      {submitError && (
                        <div className="text-red-600 text-sm bg-red-50 p-4 rounded-xl border border-red-200">
                          {submitError}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-[#0066ff] to-blue-600 text-white py-4 rounded-xl hover:shadow-2xl transition-all hover:scale-105 font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Account aanmaken...
                          </>
                        ) : (
                          <>
                            Account aanmaken
                            <ArrowRight size={20} />
                          </>
                        )}
                      </button>

                      <p className="text-xs text-gray-500 text-center">
                        Door een account aan te maken ga je akkoord met onze{' '}
                        <a href="#" className="text-[#0066ff] hover:underline">algemene voorwaarden</a> en{' '}
                        <a href="#" className="text-[#0066ff] hover:underline">privacybeleid</a>.
                      </p>
                    </form>
                  </div>
                ) : (
                  <div 
                    className="bg-white/60 backdrop-blur-xl rounded-3xl p-12 border border-gray-200/50 shadow-xl text-center"
                    style={{
                      animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.35s forwards',
                      opacity: 0
                    }}
                  >
                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 className="text-green-600" size={48} />
                    </div>
                    
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Welkom bij Sendwise!</h2>
                    
                    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                      Bedankt voor je aanmelding, <strong>{submittedData.voornaam || 'daar'}</strong>! 
                      We hebben een bevestigingsmail gestuurd naar <strong>{submittedData.email || 'jouw e-mailadres'}</strong>.
                    </p>

                    <p className="text-lg text-gray-700 mb-8">
                      Ons team neemt binnen 24 uur contact met je op om je verzendtarieven te bespreken en je account te activeren.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button
                        onClick={() => {
                          setShowSignupModal(false);
                          setSignupStep(1);
                          setFormData({
                            bedrijfsnaam: '',
                            kvk: '',
                            website: '',
                            voornaam: '',
                            achternaam: '',
                            email: '',
                            telefoon: ''
                          });
                        }}
                        className="bg-gradient-to-r from-[#0066ff] to-blue-600 text-white px-8 py-3 rounded-full hover:shadow-2xl transition-all hover:scale-105 font-semibold inline-flex items-center gap-3"
                      >
                        Naar dashboard
                        <ArrowRight size={20} />
                      </button>
                      
                      <button
                        onClick={() => setShowSignupModal(false)}
                        className="bg-white/80 backdrop-blur-xl border-2 border-[#0066ff]/30 text-gray-700 px-8 py-3 rounded-full hover:border-[#0066ff] hover:bg-white transition-all font-semibold"
                      >
                        Sluiten
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

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
