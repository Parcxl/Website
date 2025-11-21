'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Clock, User, Calendar, CheckCircle2, ArrowRight, Sparkles, Plug, Settings, Zap, ArrowLeft } from 'lucide-react';
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
              Sendwise met Goedgepickt verbinden: Complete handleiding
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

            {/* Banner Image with Logos */}
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <Image
                  src="/banner-goedgepickt.png"
                  alt="Sendwise en Goedgepickt integratie"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Dark overlay for better contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/40"></div>
              </div>
              
              {/* Logos Container */}
              <div className="relative h-full flex items-center justify-center">
                <div className="flex items-center gap-8 md:gap-12">
                  {/* Goedgepickt Logo */}
                  <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                    <Image
                      src="/goedgepickt-logo.png"
                      alt="Goedgepickt"
                      width={120}
                      height={120}
                      className="w-auto h-auto max-h-full max-w-full object-contain"
                    />
                  </div>
                  
                  {/* Plus Icon */}
                  <div className="text-white">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                      <span className="text-2xl md:text-3xl font-bold">+</span>
                    </div>
                  </div>
                  
                  {/* Sendwise Logo */}
                  <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                    <Image
                      src="/sendwise-icon-blue.png"
                      alt="Sendwise"
                      width={120}
                      height={120}
                      className="w-auto h-auto max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            {/* Introductie */}
            <section className="mb-12">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Goedgepickt is een krachtig orderverwerkingssysteem dat veel webshops gebruiken voor het beheren van voorraad, orders en verzending. Door Sendwise te verbinden met Goedgepickt, kun je het beste van beide werelden combineren: geavanceerde orderverwerking en efficiënte verzending.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                In deze handleiding leggen we stap voor stap uit hoe je de integratie tussen Sendwise en Goedgepickt instelt, zodat je orders automatisch worden verwerkt en verzendlabels eenvoudig worden aangemaakt.
              </p>
            </section>

            {/* Voordelen */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Waarom Sendwise met Goedgepickt verbinden?</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Zap className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Geautomatiseerde workflow</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Orders uit Goedgepickt worden automatisch doorgestuurd naar Sendwise, waardoor je handmatig werk elimineert en fouten voorkomt.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Settings className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Centraal beheer</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Beheer al je verzendingen vanuit één platform, terwijl Goedgepickt je orderverwerking en voorraad blijft beheren.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Plug className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Eenvoudige integratie</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    De koppeling tussen Sendwise en Goedgepickt is eenvoudig in te stellen en werkt direct na de configuratie.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Betere tracking</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Trackinginformatie wordt automatisch gesynchroniseerd tussen beide systemen, zodat je altijd op de hoogte bent van de status.
                  </p>
                </div>
              </div>
            </section>

            {/* Stap-voor-stap handleiding */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Stap-voor-stap handleiding</h2>
              
              <div className="space-y-8">
                {/* Stap 1 */}
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Account aanmaken bij Sendwise</h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Als je nog geen Sendwise account hebt, maak dan eerst een account aan. Dit is gratis en duurt slechts een paar minuten.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-[#0066ff] mt-1 flex-shrink-0" size={18} />
                          <span>Ga naar de Sendwise website en klik op "Gratis uitproberen"</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-[#0066ff] mt-1 flex-shrink-0" size={18} />
                          <span>Vul je bedrijfsgegevens in en maak je account aan</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-[#0066ff] mt-1 flex-shrink-0" size={18} />
                          <span>Bevestig je e-mailadres en log in op je dashboard</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Stap 2 */}
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">API-verbinding instellen in Goedgepickt</h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        In je Goedgepickt account moet je de API-verbinding met Sendwise instellen. Dit doe je via de instellingen van Goedgepickt.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-[#0066ff] mt-1 flex-shrink-0" size={18} />
                          <span>Log in op je Goedgepickt account</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-[#0066ff] mt-1 flex-shrink-0" size={18} />
                          <span>Ga naar "Instellingen" en selecteer "Integraties" of "API"</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-[#0066ff] mt-1 flex-shrink-0" size={18} />
                          <span>Zoek naar "Sendwise" in de lijst met beschikbare integraties</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-[#0066ff] mt-1 flex-shrink-0" size={18} />
                          <span>Klik op "Activeren" of "Verbinden"</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Stap 3 */}
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">API-sleutel ophalen uit Sendwise</h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Om de verbinding te voltooien, heb je een API-sleutel nodig uit je Sendwise account.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-[#0066ff] mt-1 flex-shrink-0" size={18} />
                          <span>Log in op je Sendwise dashboard</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-[#0066ff] mt-1 flex-shrink-0" size={18} />
                          <span>Ga naar "Instellingen" → "API & Integraties"</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-[#0066ff] mt-1 flex-shrink-0" size={18} />
                          <span>Kopieer je API-sleutel (of genereer een nieuwe als je die nog niet hebt)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-[#0066ff] mt-1 flex-shrink-0" size={18} />
                          <span>Plak deze API-sleutel in het veld in Goedgepickt</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Stap 4 */}
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Verbindingsinstellingen configureren</h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Configureer de instellingen voor de automatische synchronisatie tussen Goedgepickt en Sendwise.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-[#0066ff] mt-1 flex-shrink-0" size={18} />
                          <span>Kies welke orderstatussen automatisch naar Sendwise moeten worden gestuurd</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-[#0066ff] mt-1 flex-shrink-0" size={18} />
                          <span>Stel in of trackinginformatie automatisch terug moet worden gesynchroniseerd</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-[#0066ff] mt-1 flex-shrink-0" size={18} />
                          <span>Configureer standaard verzendinstellingen (vervoerder, service, etc.)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-[#0066ff] mt-1 flex-shrink-0" size={18} />
                          <span>Sla de instellingen op en test de verbinding</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Stap 5 */}
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Testen en activeren</h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Voordat je de integratie volledig activeert, is het verstandig om eerst een testorder te verzenden.
                      </p>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-[#0066ff] mt-1 flex-shrink-0" size={18} />
                          <span>Maak een testorder aan in Goedgepickt</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-[#0066ff] mt-1 flex-shrink-0" size={18} />
                          <span>Controleer of de order correct in Sendwise verschijnt</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-[#0066ff] mt-1 flex-shrink-0" size={18} />
                          <span>Maak een verzendlabel aan en controleer of alles correct werkt</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="text-[#0066ff] mt-1 flex-shrink-0" size={18} />
                          <span>Als alles goed werkt, activeer dan de automatische synchronisatie</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Tips en best practices */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tips en best practices</h2>
              <div className="bg-gradient-to-br from-[#0066ff]/10 to-blue-600/20 rounded-2xl p-8 border border-[#0066ff]/20">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#0066ff] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-gray-900">Houd je API-sleutel veilig:</strong>
                      <span className="text-gray-700"> Deel je API-sleutel nooit met anderen en bewaar deze op een veilige plek.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#0066ff] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-gray-900">Test regelmatig:</strong>
                      <span className="text-gray-700"> Controleer periodiek of de synchronisatie nog goed werkt, vooral na updates van Goedgepickt of Sendwise.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#0066ff] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-gray-900">Monitor je eerste orders:</strong>
                      <span className="text-gray-700"> Houd de eerste paar orders na het activeren goed in de gaten om te zorgen dat alles correct werkt.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#0066ff] mt-1 flex-shrink-0" size={20} />
                    <div>
                      <strong className="text-gray-900">Gebruik webhooks:</strong>
                      <span className="text-gray-700"> Zorg ervoor dat webhooks correct zijn ingesteld voor real-time synchronisatie tussen beide systemen.</span>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Veelgestelde vragen */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Veelgestelde vragen</h2>
              <div className="space-y-6">
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Werkt de integratie in beide richtingen?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ja, de integratie werkt in beide richtingen. Orders worden van Goedgepickt naar Sendwise gestuurd, en trackinginformatie wordt automatisch teruggesynchroniseerd naar Goedgepickt.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Kosten de integratie extra?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Nee, de integratie tussen Sendwise en Goedgepickt is volledig gratis. Je betaalt alleen voor de verzendingen die je daadwerkelijk verstuurt via Sendwise.
                  </p>
                </div>

                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Wat als ik problemen heb met de integratie?</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Neem contact op met het Sendwise supportteam. We helpen je graag verder met het oplossen van eventuele problemen met de integratie.
                  </p>
                </div>
              </div>
            </section>

            {/* Conclusie */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-[#0066ff]/10 to-blue-600/20 rounded-2xl p-8 border border-[#0066ff]/20">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusie</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Door Sendwise te verbinden met Goedgepickt, creëer je een krachtige combinatie die je orderverwerking en verzending volledig automatiseert. Dit bespaart niet alleen tijd, maar voorkomt ook fouten en zorgt voor een betere klantbeleving.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Volg de stappen in deze handleiding en je hebt binnen een paar minuten een werkende integratie tussen beide systemen. Heb je vragen of loop je ergens tegenaan? Neem gerust contact met ons op!
                </p>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-3xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Klaar om te starten?</h3>
              <p className="text-blue-100 mb-6">Maak vandaag nog je Sendwise account aan en verbind het met Goedgepickt.</p>
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

