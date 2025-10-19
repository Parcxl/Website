'use client';

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ArrowRight, Zap, Target, TrendingDown, Shield, Clock, Truck, Mail, BarChart3, CheckCircle } from "lucide-react";

export default function ConnectPage() {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showSignupModal, setShowSignupModal] = useState(false);

  // Header scroll effect with smooth transition
  React.useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setHeaderScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse tracking for header gradient
  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const header = document.querySelector('nav');
      if (header) {
        const rect = header.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Liquid Glass Navigation */}
      <nav className="fixed top-0 w-full z-50">
        <div 
          className="transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{
            marginTop: headerScrolled ? '1rem' : '0',
            marginLeft: headerScrolled ? '3rem' : '0',
            marginRight: headerScrolled ? '3rem' : '0',
          }}
        >
          <div 
            className="relative overflow-hidden transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
            style={{
              borderRadius: headerScrolled ? '9999px' : '0',
              boxShadow: headerScrolled 
                ? '0 25px 50px -12px rgba(0, 102, 255, 0.25), 0 0 0 1px rgba(0, 102, 255, 0.1)' 
                : 'none',
              borderBottom: headerScrolled ? 'none' : '1px solid rgb(243 244 246)',
              background: headerScrolled 
                ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0, 102, 255, 0.15) 0%, rgba(255, 255, 255, 0.95) 50%)`
                : `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0, 102, 255, 0.08) 0%, rgba(255, 255, 255, 0.8) 50%)`,
            }}
          >
            {/* Animated particles background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute w-2 h-2 bg-blue-400/30 rounded-full animate-float" style={{ top: '20%', left: '10%' }}></div>
              <div className="absolute w-1.5 h-1.5 bg-indigo-400/30 rounded-full animate-float-slow" style={{ top: '60%', left: '30%' }}></div>
              <div className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-float-reverse" style={{ top: '40%', right: '20%' }}></div>
              <div className="absolute w-1 h-1 bg-blue-500/40 rounded-full animate-float" style={{ top: '70%', right: '40%' }}></div>
            </div>

            {/* Glassmorphic backdrop */}
            <div 
              className="absolute inset-0 transition-all duration-[400ms]"
              style={{
                backdropFilter: `blur(${headerScrolled ? '40px' : '32px'})`,
              }}
            ></div>

            {/* Content */}
            <div 
              className="relative transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{
                height: headerScrolled ? '3.5rem' : '4rem',
                paddingLeft: headerScrolled ? '3rem' : '1.5rem',
                paddingRight: headerScrolled ? '3rem' : '1.5rem',
              }}
            >
              <div className="flex justify-center md:justify-between items-center h-full max-w-7xl mx-auto w-full">
                <Link href="/" className="flex items-center group">
                  <div className="relative">
                    {/* Glow effect behind logo */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Image
                      src="/sendwise-logo.png" 
                      alt="Sendwise" 
                      width={140} 
                      height={40}
                      className="relative transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                      style={{
                        height: headerScrolled ? '1.5rem' : '2rem',
                        width: 'auto',
                      }}
                    />
                  </div>
                </Link>
                
                <div className="hidden md:flex items-center">
                  <button 
                    onClick={() => setShowSignupModal(true)}
                    className="relative bg-gradient-to-r from-[#0066ff] to-blue-600 text-white px-6 py-2.5 rounded-full font-medium overflow-hidden group/btn transition-all duration-300 hover:scale-105"
                    onMouseEnter={(e) => {
                      const btn = e.currentTarget;
                      const rect = btn.getBoundingClientRect();
                      btn.style.transform = `scale(1.05) translateY(-2px)`;
                    }}
                    onMouseMove={(e) => {
                      const btn = e.currentTarget;
                      const rect = btn.getBoundingClientRect();
                      const x = e.clientX - rect.left;
                      const y = e.clientY - rect.top;
                      btn.style.setProperty('--mouse-x', `${x}px`);
                      btn.style.setProperty('--mouse-y', `${y}px`);
                    }}
                    onMouseLeave={(e) => {
                      const btn = e.currentTarget;
                      btn.style.transform = 'scale(1) translateY(0)';
                    }}
                  >
                    {/* Magnetic glow effect */}
                    <div 
                      className="absolute w-32 h-32 bg-white/30 rounded-full blur-2xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        left: 'var(--mouse-x, 50%)',
                        top: 'var(--mouse-y, 50%)',
                        transform: 'translate(-50%, -50%)'
                      }}
                    ></div>
                    
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    
                    <span className="relative flex items-center gap-2">
                      Direct starten
                      <ArrowRight className="group-hover/btn:translate-x-1 transition-transform" size={16} />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl top-1/4 left-1/4 animate-float"></div>
              <div className="absolute w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl bottom-1/4 right-1/4 animate-float-slow"></div>
              <div className="absolute w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl top-3/4 left-1/2 animate-float-reverse"></div>
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Datagedreven Verzending
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                Sendwise
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Connect
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              De slimste verzendmethode die automatisch de beste vervoerder kiest op basis van 
              <span className="text-blue-300 font-semibold"> locatie, kosten en dekking</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button 
                onClick={() => setShowSignupModal(true)}
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                Start met Connect
                <ArrowRight className="ml-2" size={20} />
              </button>
              <Link 
                href="#how-it-works"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300"
              >
                Ontdek hoe het werkt
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">15%</div>
                <div className="text-gray-400">Lagere verzendkosten</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.8%</div>
                <div className="text-gray-400">Leveringsbetrouwbaarheid</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400">Automatische optimalisatie</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Hoe werkt Connect?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Onze AI kiest automatisch de beste vervoerder voor elke zending
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Data Analyse</h3>
                <p className="text-gray-600">
                  We analyseren locatie, bestemming, kosten en dekking van alle vervoerders
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Beste Keuze</h3>
                <p className="text-gray-600">
                  Onze AI selecteert automatisch de meest efficiënte en voordelige optie
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Truck className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Automatische Verzending</h3>
                <p className="text-gray-600">
                  Je zending wordt automatisch bij de gekozen vervoerder aangemeld
                </p>
              </div>
            </div>

            {/* Visual Flow */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="text-center mb-8 md:mb-0">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h4 className="font-semibold text-gray-900">Zending Aanmaken</h4>
                  <p className="text-gray-600 text-sm">Upload je zending</p>
                </div>
                
                <div className="hidden md:block w-16 h-0.5 bg-blue-300"></div>
                
                <div className="text-center mb-8 md:mb-0">
                  <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h4 className="font-semibold text-gray-900">AI Analyse</h4>
                  <p className="text-gray-600 text-sm">Beste vervoerder kiezen</p>
                </div>
                
                <div className="hidden md:block w-16 h-0.5 bg-blue-300"></div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h4 className="font-semibold text-gray-900">Verzending</h4>
                  <p className="text-gray-600 text-sm">Automatisch verzenden</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Voordelen van Connect
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Exclusieve functies en de laagste tarieven voor Connect gebruikers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-6">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Pickup Service</h3>
                <p className="text-gray-600">
                  Automatische ophaling van je pakketten op kantoor of thuis
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Branded Tracking</h3>
                <p className="text-gray-600">
                  Klanten volgen hun pakket via jouw eigen tracking pagina
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg flex items-center justify-center mb-6">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Branded Emails</h3>
                <p className="text-gray-600">
                  Klanten ontvangen updates in jouw huisstijl
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-6">
                  <TrendingDown className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Laagste Tarieven</h3>
                <p className="text-gray-600">
                  Tot 40% goedkoper dan standaard verzendtarieven
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Efficiency Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Efficiënter Verzenden
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Connect voorkomt dubbele verzendingen en kiest altijd de meest directe route
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Directe Levering</h3>
                      <p className="text-gray-600">
                        Zendingen naar buurlanden gaan direct naar de bestemming, geen tussenstops
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Kostenoptimalisatie</h3>
                      <p className="text-gray-600">
                        Automatische keuze tussen bedrijf of particulier tarieven
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Dekkingsanalyse</h3>
                      <p className="text-gray-600">
                        Altijd de vervoerder met de beste dekking voor jouw bestemming
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Tijdsbesparing</h3>
                  <p className="text-gray-600 mb-6">
                    Geen handmatige keuze meer tussen vervoerders. Connect doet het automatisch.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-blue-600">-60%</div>
                      <div className="text-sm text-gray-600">Tijd per zending</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-green-600">+25%</div>
                      <div className="text-sm text-gray-600">Verzendvolume</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#0066ff] to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start vandaag met Connect
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Sluit je aan bij honderden bedrijven die al profiteren van intelligente verzending
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowSignupModal(true)}
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0066ff] font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-xl"
              >
                Gratis proberen
                <ArrowRight className="ml-2" size={20} />
              </button>
              <Link 
                href="/"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#0066ff] transition-colors duration-300"
              >
                Meer informatie
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 py-12 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl top-1/4 left-1/4 animate-float"></div>
          <div className="absolute w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl bottom-1/4 right-1/4 animate-float-slow"></div>
          <div className="absolute w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl top-3/4 left-1/2 animate-float-reverse"></div>
        </div>

        {/* Glassmorphic backdrop */}
        <div className="absolute inset-0 backdrop-blur-xl"></div>

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
            <p className="text-gray-400 text-sm mb-4">
              © 2025 Sendwise. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-400">
              <span>KVK: 98390376</span>
              <span>•</span>
              <span>Ondernemingsweg 66, 2404HN Alphen aan den Rijn</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}