'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Clock, User, Calendar, CheckCircle2, X, ArrowRight, Sparkles, Rocket, Zap, Target, TrendingUp, Users, Globe, BarChart3 } from 'lucide-react';
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
              Boost je webshop met Sendwise – sneller, slimmer en goedkoper verzenden
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
                      alt="Boost je webshop"
                      width={80}
                      height={80}
                      className="w-auto h-auto max-h-full max-w-full object-contain"
                    />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800">Boost je webshop</h2>
                </div>
              </div>
            </div>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            {/* Introductie */}
            <section className="mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Als ondernemer wil je dat je webshop soepel draait, van bestelling tot levering. Logistiek kan echter complex en tijdrovend zijn, vooral als je met meerdere vervoerders werkt of veel bestellingen hebt.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Hier komt Sendwise in beeld: een slimme verzendoplossing die je helpt sneller, slimmer en goedkoper te verzenden.
              </p>
            </section>

            {/* Voordelen */}
            <section className="mb-12">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Voordeel 1 */}
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Rocket className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Eén platform, alle verzendprocessen</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Sendwise biedt een geïntegreerd platform waarmee je al je verzendingen op één plek regelt. Labels printen, trackinginformatie delen, verzendkosten berekenen – het kan allemaal via één dashboard. Dit maakt je logistiek overzichtelijker en vermindert fouten.
                  </p>
                </div>

                {/* Voordeel 2 */}
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Globe className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Slimme integratie met je webshop</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Koppelingen met Shopify en WooCommerce zorgen dat bestellingen automatisch worden verwerkt. Geen handmatig werk meer, geen dubbele administratie, gewoon een gestroomlijnd proces van bestelling tot levering.
                  </p>
                </div>

                {/* Voordeel 3 */}
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Target className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Bespaar tijd én geld</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#0066ff] rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Geen abonnementskosten: je betaalt alleen voor wat je daadwerkelijk verzendt.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#0066ff] rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Bulklabels: verwerk meerdere bestellingen tegelijk.</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#0066ff] rounded-full mt-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Slimme tarieven: kies altijd de voordeligste vervoerder of verzendoptie.</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-4">
                    Door efficiënter te werken, kun je je richten op wat echt telt: je webshop laten groeien.
                  </p>
                </div>

                {/* Voordeel 4 */}
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Flexibiliteit voor elke bestelling</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Of je nu kleine pakketjes of grote bestellingen verzendt, Sendwise biedt flexibele opties. Snelle levering, standaard verzending of internationale verzending – alles is mogelijk via één platform.
                  </p>
                </div>

                {/* Voordeel 5 */}
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Users className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Verhoog klanttevredenheid</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Automatische trackingupdates zorgen dat klanten altijd op de hoogte zijn van hun bestelling. Minder vragen aan de klantenservice, minder frustratie en hogere tevredenheid. Tevreden klanten kopen vaker terug en bevelen je webshop aan.
                  </p>
                </div>

                {/* Voordeel 6 */}
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="text-white" size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">Schaalbaar voor groei</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Of je nu 50 of 5000 bestellingen per maand hebt, Sendwise groeit met je mee. Geen extra personeel nodig, geen ingewikkelde processen: alles blijft overzichtelijk en efficiënt.
                  </p>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-[#0066ff]/10 to-blue-600/20 rounded-2xl p-8 border border-[#0066ff]/20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Rocket className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">Start vandaag nog</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Wil je je webshop logistiek naar een hoger niveau tillen? Met Sendwise regel je alles vanaf één plek, bespaar je op kosten en werk je efficiënter. Begin vandaag nog en ervaar zelf hoe eenvoudig en voordelig verzenden kan zijn.
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-3xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to boost your webshop?</h3>
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

      {/* Signup Modal - Same as other blogs */}
      <div 
        className={`fixed inset-0 z-[100] bg-gradient-to-br from-blue-50 via-white to-indigo-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          showSignupModal ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        {/* Modal content - same as other blogs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-300/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-indigo-300/20 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-cyan-300/20 rounded-full blur-3xl animate-float-reverse"></div>
        </div>

        <button
          onClick={() => setShowSignupModal(false)}
          className="fixed top-8 left-8 w-14 h-14 bg-white/80 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg z-10 group border border-gray-200/50"
        >
          <ArrowRight className="text-gray-600 group-hover:text-[#0066ff] rotate-180" size={24} />
        </button>

        <div className="relative h-full overflow-y-auto">
          <div className="min-h-full flex items-center justify-center px-4 py-20">
            <div className="max-w-7xl w-full">
              <div className="mb-12">
                <div className="md:hidden text-center mb-12">
                  <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-5 py-2.5 rounded-full border border-blue-200/50 mb-8 shadow-sm">
                    <Sparkles className="text-[#0066ff]" size={20} />
                    <span className="text-[#0066ff] text-sm font-semibold">Direct starten</span>
                  </div>
                  <h1 className="text-5xl font-bold mb-6">
                    Start vandaag nog <span className="text-gradient">gratis</span>
                  </h1>
                  <p className="text-xl text-gray-600 mb-8">
                    Maak direct je account aan. Wij nemen binnen 24 uur contact op om je verzendtarieven te bespreken.
                  </p>
                </div>

                <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-5 py-2.5 rounded-full border border-blue-200/50 mb-8 shadow-sm">
                      <Sparkles className="text-[#0066ff]" size={20} />
                      <span className="text-[#0066ff] text-sm font-semibold">Direct starten</span>
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                      Start vandaag nog <span className="text-gradient">gratis</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8">
                      Maak direct je account aan. Wij nemen binnen 24 uur contact op om je verzendtarieven te bespreken.
                    </p>
                  </div>

                  <div className="relative">
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

              <div className="max-w-4xl mx-auto">
                {signupStep === 1 ? (
                  <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/50 shadow-xl">
                    <form onSubmit={handleSubmit} className="space-y-6">
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
                  <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-12 border border-gray-200/50 shadow-xl text-center">
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
