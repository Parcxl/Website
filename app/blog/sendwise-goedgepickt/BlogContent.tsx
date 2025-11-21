'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Clock, User, Calendar, CheckCircle2, ArrowRight, Sparkles, Plug, Settings, Zap, ArrowLeft, Key, Clipboard, ExternalLink, FileText, Link2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import AccountSignupModal from '../../../components/AccountSignupModal';

export default function BlogContent() {
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastExiting, setToastExiting] = useState(false);

  const copyToClipboard = async (text: string, urlId: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedUrl(urlId);
      setShowToast(true);
      setToastExiting(false);
      setTimeout(() => {
        setToastExiting(true);
        setTimeout(() => {
          setCopiedUrl(null);
          setShowToast(false);
          setToastExiting(false);
        }, 400);
      }, 2600);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Enhanced 3D perspective scroll animation for logos - faster and less center movement
  useEffect(() => {
    let animationFrameId: number;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    // Track mouse movement for interactive 3D effect
    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const animate = () => {
      // Faster mouse tracking for snappier response
      mouseX += (targetMouseX - mouseX) * 0.25;
      mouseY += (targetMouseY - mouseY) * 0.25;

      const logos = document.querySelectorAll('.logo-perspective');
      
      logos.forEach((logo, index) => {
        const rect = logo.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight + 300 && rect.bottom > -300;
        
        if (isVisible) {
          // Calculate scroll-based position - reduced center movement
          const centerY = rect.top + rect.height / 2;
          const viewportCenter = window.innerHeight / 2;
          const scrollOffset = (centerY - viewportCenter) / viewportCenter;
          
          // Calculate scroll progress (0 to 1)
          const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
          
          // More dynamic intensity based on scroll position
          const intensity = Math.sin(scrollProgress * Math.PI);
          // Reduced scroll intensity to prevent too much center movement
          const scrollIntensity = Math.max(-0.8, Math.min(0.8, scrollOffset * 0.6));
          
          // Exaggerated rotation for each logo with much more 3D effect
          let rotateX = 0;
          let rotateY = 0;
          let rotateZ = 0;
          let translateZ = 0;
          
          if (index === 0) {
            // Goedgepickt logo - exaggerated left rotation, less scroll-based
            rotateY = -scrollIntensity * 35 - mouseX * 20;
            rotateX = scrollIntensity * 20 + mouseY * 15;
            rotateZ = scrollIntensity * 6;
            translateZ = intensity * 80 + Math.abs(mouseX) * 40;
          } else if (index === 1) {
            // Sendwise logo - exaggerated right rotation, less scroll-based
            rotateY = scrollIntensity * 35 + mouseX * 20;
            rotateX = scrollIntensity * 20 + mouseY * 15;
            rotateZ = -scrollIntensity * 6;
            translateZ = intensity * 80 + Math.abs(mouseX) * 40;
          }
          
          // Apply exaggerated 3D transform with stronger perspective
          (logo as HTMLElement).style.transform = `
            perspective(2000px) 
            rotateX(${rotateX}deg) 
            rotateY(${rotateY}deg) 
            rotateZ(${rotateZ}deg) 
            translateZ(${translateZ}px)
            scale(${1 + intensity * 0.15})
          `;
          
          // Add dramatic shadow based on rotation
          const shadowIntensity = Math.abs(rotateY) / 45;
          const shadowX = Math.sin(rotateY * Math.PI / 180) * 30;
          (logo as HTMLElement).style.filter = `drop-shadow(${shadowX}px ${15 + shadowIntensity * 30}px ${25 + shadowIntensity * 40}px rgba(0, 0, 0, ${0.3 + shadowIntensity * 0.3}))`;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Start animation loop
    animate();
    
    // Add event listeners
    window.addEventListener('scroll', () => {}, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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
            {/* Title with Fancy Gradient Overlay */}
            <div className="relative mb-8">
              {/* Animated background blobs */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
                <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-300/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-300/20 rounded-full blur-3xl animate-float-slow"></div>
                <div className="absolute bottom-0 left-1/3 w-[250px] h-[250px] bg-cyan-300/20 rounded-full blur-3xl animate-float-reverse"></div>
              </div>
              
              {/* Title Overlay */}
              <div className="relative bg-gradient-to-br from-blue-50/90 via-white/95 to-indigo-50/90 backdrop-blur-xl rounded-3xl px-8 md:px-12 py-8 md:py-10 shadow-2xl border border-white/50">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center leading-tight">
                  Verbind Sendwise met Goedgepickt
                </h1>
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
              
              {/* Glassy Overlay over Banner */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/8 to-transparent backdrop-blur-sm border border-white/25 rounded-2xl">
                {/* Glass Reflection Effect */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  {/* Top highlight reflection */}
                  <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/30 via-white/10 to-transparent"></div>
                  {/* Side reflections */}
                  <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-white/15 to-transparent"></div>
                  <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/15 to-transparent"></div>
                </div>
              </div>
              
              {/* Logos Container */}
              <div className="relative h-full flex items-center justify-center z-10">
                <div className="flex items-center gap-8 md:gap-12">
                  {/* Goedgepickt Logo */}
                  <div className="logo-perspective relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center rounded-2xl p-4 transition-transform duration-300">
                    <div className="relative inline-block" style={{ filter: 'contrast(1.15) brightness(0.95) saturate(1.1)' }}>
                      <Image
                        src="/goedgepickt-logo.png"
                        alt="Goedgepickt"
                        width={120}
                        height={120}
                        className="w-auto h-auto max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                  
                  {/* Plus Icon */}
                  <div className="text-white">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center relative">
                      <span className="relative z-10 text-2xl md:text-3xl font-bold">+</span>
                      {/* Subtle glassy overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/12 via-white/8 to-white/4 backdrop-blur-sm border-2 border-white/20 rounded-full pointer-events-none">
                        {/* Subtle reflection */}
                        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-b from-white/25 to-transparent rounded-t-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Sendwise Logo */}
                  <div className="logo-perspective relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center rounded-2xl p-4 transition-transform duration-300">
                    <div className="relative inline-block" style={{ filter: 'contrast(1.15) brightness(0.95) saturate(1.1)' }}>
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
            </div>

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
          </header>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            {/* Introductie */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-blue-100/50 shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Inleiding</h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  In deze handleiding lees je hoe je Goedgepickt koppelt met Sendwise. De koppeling werkt via een API-key en zorgt ervoor dat je vanuit Goedgepickt zendingen kunt aanmaken in Sendwise.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed mt-6">
                  We laten stap-voor-stap zien waar je de API-key in Sendwise vindt, hoe je deze toevoegt in Goedgepickt en hoe je controleert dat de verbinding actief is. Zodra dit is ingesteld, kun je Sendwise als vervoerder gebruiken binnen je bestaande Goedgepickt-workflow.
                </p>
              </div>
            </section>

            {/* Stap-voor-stap handleiding */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Stap-voor-stap handleiding</h2>
              
              <div className="space-y-8">
                {/* Stap 1: Navigeren naar verzendproviders */}
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-2xl shadow-lg">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Navigeer naar verzendproviders</h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Begin in Goedgepickt door naar de instellingen te gaan waar je de verzendprovider kunt toevoegen.
                      </p>
                      
                      {/* Screenshot met annotatie */}
                      <div className="mb-6 rounded-xl overflow-hidden border-2 border-gray-200 shadow-lg relative">
                        <Image
                          src="/goedgepickt-stap-1.png"
                          alt="Goedgepickt sidebar met Instellingen"
                          width={1200}
                          height={800}
                          className="w-full h-auto"
                          style={{ filter: 'contrast(1.1) brightness(1.02)' }}
                        />
                        {/* Annotatie overlay */}
                        <div className="absolute inset-0 pointer-events-none">
                          {/* Schuine bewegende pijl naar "Koppel verzendprovider" knop */}
                          <div 
                            className="absolute"
                            style={{
                              top: '20%',
                              left: '78%',
                              animation: 'bounce-arrow-diagonal 2s ease-in-out infinite'
                            }}
                          >
                            <ArrowRight 
                              className="text-[#0066ff]" 
                              size={40}
                              style={{
                                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                              }}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50/50 rounded-xl p-6 border border-blue-200/50">
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-[#0066ff] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white text-xs font-bold">1</span>
                            </div>
                            <span>Ga in de <strong>sidebar links</strong> naar <strong>Instellingen</strong></span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-[#0066ff] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white text-xs font-bold">2</span>
                            </div>
                            <span>Klik op de <strong>Verzendproviders</strong> card</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-[#0066ff] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white text-xs font-bold">3</span>
                            </div>
                            <span>Klik op <strong>Koppel verzendprovider</strong></span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stap 2: Custom Shipping Provider selecteren */}
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-2xl shadow-lg">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Selecteer Custom Shipping Provider</h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Kies voor de Custom Shipping Provider optie om Sendwise handmatig te configureren.
                      </p>
                      
                      {/* Screenshot met annotatie */}
                      <div className="mb-6 rounded-xl overflow-hidden border-2 border-gray-200 shadow-lg relative">
                        <Image
                          src="/goedgepickt-stap-2.png"
                          alt="Verzendprovider toevoegen modal"
                          width={1200}
                          height={800}
                          className="w-full h-auto"
                          style={{ filter: 'contrast(1.1) brightness(1.02)' }}
                        />
                        {/* Annotatie overlay */}
                        <div className="absolute inset-0 pointer-events-none">
                          {/* Bewegende pijl */}
                          <div 
                            className="absolute"
                            style={{
                              top: '65%',
                              left: '28%',
                              animation: 'bounce-arrow 2s ease-in-out infinite'
                            }}
                          >
                            <ArrowRight 
                              className="text-[#0066ff]" 
                              size={40}
                              style={{
                                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))'
                              }}
                            />
                          </div>
                          {/* Blauwe rechthoek rond Custom Shipping Provider */}
                          <div 
                            className="absolute border-2 border-[#0066ff] rounded-lg shadow-lg"
                            style={{
                              top: '62.3%',
                              right: '3%',
                              width: '63%',
                              height: '10%',
                              boxShadow: '0 0 0 2px rgba(0, 102, 255, 0.3), 0 0 10px rgba(0, 102, 255, 0.2)'
                            }}
                          >
                            <div className="absolute -top-6 left-0 bg-[#0066ff] text-white px-3 py-1 rounded text-sm font-semibold whitespace-nowrap">
                              Custom Shipping Provider
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-[#0066ff]/10 to-blue-600/20 rounded-xl p-6 border border-[#0066ff]/20">
                        <div className="flex items-center gap-3 mb-4">
                          <Settings className="text-[#0066ff]" size={24} />
                          <h4 className="font-semibold text-gray-900">Bij verzendprovider toevoegen:</h4>
                        </div>
                        <p className="text-gray-700">
                          Klik op <strong>Custom Shipping Provider</strong>. Onderaan verschijnt er een formulier met 16 invulvelden.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stap 3: API Key ophalen uit Sendwise */}
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-2xl shadow-lg">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">API Key ophalen uit Sendwise</h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Voordat je het formulier invult, heb je eerst een API key nodig uit je Sendwise dashboard.
                      </p>

                      {/* Screenshot */}
                      <div className="mb-6 rounded-xl overflow-hidden border-2 border-gray-200 shadow-lg">
                        <Image
                          src="/goedgepickt-stap-3.png"
                          alt="Sendwise dashboard - Integraties pagina"
                          width={1200}
                          height={800}
                          className="w-full h-auto"
                          style={{ filter: 'contrast(1.1) brightness(1.02)' }}
                        />
                      </div>

                      <div className="bg-blue-50/50 rounded-xl p-6 border border-blue-200/50 mb-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Key className="text-[#0066ff]" size={24} />
                          <h4 className="font-semibold text-gray-900">API Key ophalen:</h4>
                        </div>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-start gap-3">
                            <ArrowRight className="text-[#0066ff] mt-1 flex-shrink-0" size={18} />
                            <span>Ga naar het <strong>Sendwise dashboard</strong></span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="text-[#0066ff] mt-1 flex-shrink-0" size={18} />
                            <span>Klik in de sidebar op <strong>Integraties</strong></span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="text-[#0066ff] mt-1 flex-shrink-0" size={18} />
                            <span>Klik rechtsboven op <strong>Koppelen</strong></span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="text-[#0066ff] mt-1 flex-shrink-0" size={18} />
                            <span>Zoek en klik op de <strong>Goedgepickt integratie</strong></span>
                          </li>
                        </ul>
                      </div>

                      {/* Screenshot met knipperend puntje */}
                      <div className="mb-6 rounded-xl overflow-hidden border-2 border-gray-200 shadow-lg relative">
                        <Image
                          src="/goedgepickt-stap-4.png"
                          alt="Goedgepickt setup modal"
                          width={1200}
                          height={800}
                          className="w-full h-auto"
                          style={{ filter: 'contrast(1.1) brightness(1.02)' }}
                        />
                        {/* Knipperend blauw puntjes */}
                        <div className="absolute inset-0 pointer-events-none">
                          <div 
                            className="absolute w-2 h-2 bg-[#0066ff] rounded-full shadow-lg"
                            style={{
                              top: '8.5%',
                              left: '30%',
                              animation: 'pulse-dot 2.5s ease-in-out infinite',
                              boxShadow: '0 0 0 2px rgba(0, 102, 255, 0.3), 0 0 6px rgba(0, 102, 255, 0.5)'
                            }}
                          />
                          <div 
                            className="absolute w-2 h-2 bg-[#0066ff] rounded-full shadow-lg"
                            style={{
                              top: '19.3%',
                              left: '30%',
                              animation: 'pulse-dot 2.5s ease-in-out infinite',
                              boxShadow: '0 0 0 2px rgba(0, 102, 255, 0.3), 0 0 6px rgba(0, 102, 255, 0.5)'
                            }}
                          />
                          <div 
                            className="absolute w-2 h-2 bg-[#0066ff] rounded-full shadow-lg"
                            style={{
                              top: '24.8%',
                              left: '30%',
                              animation: 'pulse-dot 2.5s ease-in-out infinite',
                              boxShadow: '0 0 0 2px rgba(0, 102, 255, 0.3), 0 0 6px rgba(0, 102, 255, 0.5)'
                            }}
                          />
                          <div 
                            className="absolute w-2 h-2 bg-[#0066ff] rounded-full shadow-lg"
                            style={{
                              top: '30.3%',
                              left: '30%',
                              animation: 'pulse-dot 2.5s ease-in-out infinite',
                              boxShadow: '0 0 0 2px rgba(0, 102, 255, 0.3), 0 0 6px rgba(0, 102, 255, 0.5)'
                            }}
                          />
                          <div 
                            className="absolute w-2 h-2 bg-[#0066ff] rounded-full shadow-lg"
                            style={{
                              top: '35.8%',
                              left: '30%',
                              animation: 'pulse-dot 2.5s ease-in-out infinite',
                              boxShadow: '0 0 0 2px rgba(0, 102, 255, 0.3), 0 0 6px rgba(0, 102, 255, 0.5)'
                            }}
                          />
                          <div 
                            className="absolute w-2 h-2 bg-[#0066ff] rounded-full shadow-lg"
                            style={{
                              top: '41.3%',
                              left: '30%',
                              animation: 'pulse-dot 2.5s ease-in-out infinite',
                              boxShadow: '0 0 0 2px rgba(0, 102, 255, 0.3), 0 0 6px rgba(0, 102, 255, 0.5)'
                            }}
                          />
                          <div 
                            className="absolute w-2 h-2 bg-[#0066ff] rounded-full shadow-lg"
                            style={{
                              top: '46.5%',
                              left: '30%',
                              animation: 'pulse-dot 2.5s ease-in-out infinite',
                              boxShadow: '0 0 0 2px rgba(0, 102, 255, 0.3), 0 0 6px rgba(0, 102, 255, 0.5)'
                            }}
                          />
                          <div 
                            className="absolute w-2 h-2 bg-[#0066ff] rounded-full shadow-lg"
                            style={{
                              top: '52%',
                              left: '30%',
                              animation: 'pulse-dot 2.5s ease-in-out infinite',
                              boxShadow: '0 0 0 2px rgba(0, 102, 255, 0.3), 0 0 6px rgba(0, 102, 255, 0.5)'
                            }}
                          />
                          <div 
                            className="absolute w-2 h-2 bg-[#0066ff] rounded-full shadow-lg"
                            style={{
                              top: '59%',
                              left: '30%',
                              animation: 'pulse-dot 2.5s ease-in-out infinite',
                              boxShadow: '0 0 0 2px rgba(0, 102, 255, 0.3), 0 0 6px rgba(0, 102, 255, 0.5)'
                            }}
                          />
                          <div 
                            className="absolute w-2 h-2 bg-[#0066ff] rounded-full shadow-lg"
                            style={{
                              top: '64.5%',
                              left: '30%',
                              animation: 'pulse-dot 2.5s ease-in-out infinite',
                              boxShadow: '0 0 0 2px rgba(0, 102, 255, 0.3), 0 0 6px rgba(0, 102, 255, 0.5)'
                            }}
                          />
                          <div 
                            className="absolute w-2 h-2 bg-[#0066ff] rounded-full shadow-lg"
                            style={{
                              top: '81.5%',
                              left: '30%',
                              animation: 'pulse-dot 2.5s ease-in-out infinite',
                              boxShadow: '0 0 0 2px rgba(0, 102, 255, 0.3), 0 0 6px rgba(0, 102, 255, 0.5)'
                            }}
                          />
                          <div 
                            className="absolute w-2 h-2 bg-[#0066ff] rounded-full shadow-lg"
                            style={{
                              top: '85.5%',
                              left: '17%',
                              animation: 'pulse-dot 2.5s ease-in-out infinite',
                              boxShadow: '0 0 0 2px rgba(0, 102, 255, 0.3), 0 0 6px rgba(0, 102, 255, 0.5)'
                            }}
                          />
                          <div 
                            className="absolute w-2 h-2 bg-[#0066ff] rounded-full shadow-lg"
                            style={{
                              top: '91%',
                              left: '17%',
                              animation: 'pulse-dot 2.5s ease-in-out infinite',
                              boxShadow: '0 0 0 2px rgba(0, 102, 255, 0.3), 0 0 6px rgba(0, 102, 255, 0.5)'
                            }}
                          />
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200/50">
                        <div className="flex items-center gap-3 mb-4">
                          <CheckCircle2 className="text-green-600" size={24} />
                          <h4 className="font-semibold text-gray-900">In de Goedgepickt setup modal:</h4>
                        </div>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={18} />
                            <span><strong>Integratie naam:</strong> Vul een herkenbare naam in (bijv. "Goedgepickt Productie")</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={18} />
                            <span><strong>API Key:</strong> Klik op <strong>Generate</strong> om een nieuwe API key te genereren</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={18} />
                            <span><strong className="text-red-600">⚠️ Belangrijk:</strong> Bewaar deze API key op een veilige plek!</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={18} />
                            <span>Klik op <strong>Integratie opslaan</strong></span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stap 4: Formulier invullen */}
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-2xl shadow-lg">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Formulier invullen</h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Vul nu alle benodigde velden in het formulier in. Hieronder vind je een overzicht van alle velden.
                      </p>

                      {/* Formulier velden tabel */}
                      <div className="overflow-x-auto mb-6">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="bg-gradient-to-r from-[#0066ff]/10 to-blue-600/10">
                              <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Veld</th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Waarde</th>
                              <th className="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-900">Opmerking</th>
                            </tr>
                          </thead>
                          <tbody className="bg-white">
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">URL</td>
                              <td className="border border-gray-300 px-4 py-3">
                                <div className="flex items-center gap-2">
                                  <code className="bg-gray-100 px-2 py-1 rounded text-sm flex-1">https://api.sendwise.nl/shipments</code>
                                  <button
                                    onClick={() => copyToClipboard('https://api.sendwise.nl/shipments', 'shipments')}
                                    className={`relative p-2 rounded-lg transition-all duration-300 ${
                                      copiedUrl === 'shipments' 
                                        ? 'bg-green-100 text-green-600 scale-110' 
                                        : 'bg-[#0066ff]/10 hover:bg-[#0066ff]/20 text-[#0066ff] hover:scale-105'
                                    }`}
                                    title="Kopieer URL"
                                  >
                                    {copiedUrl === 'shipments' ? (
                                      <CheckCircle2 className="animate-pulse" size={20} />
                                    ) : (
                                      <Clipboard className="transition-transform hover:rotate-12" size={20} />
                                    )}
                                  </button>
                                </div>
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-700">Sendwise endpoint URL</td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">API autorisatie</td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-500 italic">Leeg laten</td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-700">Niet invullen</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">API geheim</td>
                              <td className="border border-gray-300 px-4 py-3">
                                <div className="flex items-center gap-2">
                                  <Key className="text-[#0066ff]" size={16} />
                                  <span className="text-gray-700">API key uit Sendwise</span>
                                </div>
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-700">De API key die je in stap 3 hebt gegenereerd</td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Naam afzender</td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-700">Je bedrijfsnaam</td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-700">Komt op het label te staan</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Adres</td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-700">Afzender straat</td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-700">Straatnaam zonder nummer</td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Huisnummer afzender</td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-700">Huisnummer + toevoeging</td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-700">Bijv. "123A"</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Postcode</td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-700">Afzend postcode</td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-700">Bijv. "1234AB"</td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Plaats</td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-700">Plaatsnaam</td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-700">Stad waar je gevestigd bent</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Landcode</td>
                              <td className="border border-gray-300 px-4 py-3">
                                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-medium">Nederland</span>
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-700">Sendwise doet alleen zendingen vanuit NL</td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">E-mail</td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-700">Je e-mailadres</td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-700">Voor notificaties</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Verzendmethode</td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-500 italic">Leeg laten</td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-700">Instellen we later</td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Servicepunten URL</td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-500 italic">Leeg laten</td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-700">Nog niet beschikbaar</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Voorvoegsel referentietekst</td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-700">Je eigen voorvoegsel</td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-700">Bijv. "SW-" voor "SW-12345"</td>
                            </tr>
                            <tr className="bg-gray-50">
                              <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Naam</td>
                              <td className="border border-gray-300 px-4 py-3">
                                <span className="bg-[#0066ff]/10 text-[#0066ff] px-2 py-1 rounded font-medium">Sendwise</span>
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-700">Of een andere herkenbare naam</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">Actief</td>
                              <td className="border border-gray-300 px-4 py-3">
                                <div className="flex items-center gap-2">
                                  <CheckCircle2 className="text-green-600" size={18} />
                                  <span className="text-gray-700">Aangevinkt</span>
                                </div>
                              </td>
                              <td className="border border-gray-300 px-4 py-3 text-gray-700">Standaard al geselecteerd</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="bg-gradient-to-br from-[#0066ff]/10 to-blue-600/20 rounded-xl p-6 border border-[#0066ff]/20">
                        <div className="flex items-center gap-3 mb-2">
                          <CheckCircle2 className="text-[#0066ff]" size={24} />
                          <h4 className="font-semibold text-gray-900">Klaar met invullen?</h4>
                        </div>
                        <p className="text-gray-700">Klik op <strong>Verzendprovider koppelen</strong> om Sendwise toe te voegen.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stap 5: Verzendprovider bewerken */}
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-2xl shadow-lg">
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Verzendprovider bewerken</h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Na het koppelen kom je op de verzendprovider bewerken pagina. Hier moeten we nog een paar belangrijke instellingen configureren.
                      </p>

                      {/* Screenshots - 2 naast elkaar */}
                      <div className="mb-6 grid md:grid-cols-2 gap-4">
                        <div className="rounded-xl overflow-hidden border-2 border-gray-200 shadow-lg">
                          <Image
                            src="/goedgepickt-stap-5a.png"
                            alt="Verzendprovider bewerken pagina - deel 1"
                            width={800}
                            height={600}
                            className="w-full h-auto"
                            style={{ filter: 'contrast(1.1) brightness(1.02)' }}
                          />
                        </div>
                        <div className="rounded-xl overflow-hidden border-2 border-gray-200 shadow-lg">
                          <Image
                            src="/goedgepickt-stap-5b.png"
                            alt="Verzendprovider bewerken pagina - deel 2"
                            width={800}
                            height={600}
                            className="w-full h-auto"
                            style={{ filter: 'contrast(1.1) brightness(1.02)' }}
                          />
                        </div>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div className="bg-blue-50/50 rounded-xl p-6 border border-blue-200/50">
                          <div className="flex items-center gap-3 mb-3">
                            <Settings className="text-[#0066ff]" size={20} />
                            <h4 className="font-semibold text-gray-900">Standaard non-EU pakketinhoud</h4>
                          </div>
                          <p className="text-gray-700">Kies voor: <strong>Commerciële goederen</strong></p>
                        </div>

                        <div className="bg-blue-50/50 rounded-xl p-6 border border-blue-200/50">
                          <div className="flex items-center gap-3 mb-3">
                            <Settings className="text-[#0066ff]" size={20} />
                            <h4 className="font-semibold text-gray-900">Producten zonder bestelregel-prijs</h4>
                          </div>
                          <p className="text-gray-700">Kies voor: <strong>Gebruik standaard bedrag van €1,00</strong></p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border border-purple-200/50 mb-6">
                        <div className="flex items-center gap-3 mb-4">
                          <Zap className="text-purple-600" size={24} />
                          <h4 className="font-semibold text-gray-900">Dynamische verzendmethoden</h4>
                        </div>
                        <div className="space-y-3 text-gray-700">
                          <p>Ga naar <strong>Verzendmethoden</strong> en zet het schuifje <strong>"Dynamische verzendmethoden gebruiken"</strong> aan.</p>
                          <p className="text-sm text-gray-600">💡 Dit zorgt ervoor dat Goedgepickt automatisch alle verzendmethodes via onze API ophaalt, zodat je ze niet handmatig hoeft toe te voegen.</p>
                        </div>
                      </div>

                      <div className="bg-green-50/50 rounded-xl p-6 border border-green-200/50">
                        <div className="flex items-center gap-3 mb-3">
                          <Link2 className="text-green-600" size={20} />
                          <h4 className="font-semibold text-gray-900">Dynamische verzendmethoden URL</h4>
                        </div>
                        <p className="text-gray-700 mb-2">Vul de volgende URL in:</p>
                        <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-green-300">
                          <code className="flex-1 text-sm font-mono">https://api.sendwise.nl/shipping-methods</code>
                          <button
                            onClick={() => copyToClipboard('https://api.sendwise.nl/shipping-methods', 'shipping-methods')}
                            className={`relative p-2 rounded-lg transition-all duration-300 ${
                              copiedUrl === 'shipping-methods' 
                                ? 'bg-green-100 text-green-600 scale-110' 
                                : 'bg-[#0066ff]/10 hover:bg-[#0066ff]/20 text-[#0066ff] hover:scale-105'
                            }`}
                            title="Kopieer URL"
                          >
                            {copiedUrl === 'shipping-methods' ? (
                              <CheckCircle2 className="animate-pulse" size={20} />
                            ) : (
                              <Clipboard className="transition-transform hover:rotate-12" size={20} />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stap 6: Webshop koppelen en opslaan */}
                <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/50 shadow-lg">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 text-white font-bold text-2xl shadow-lg">
                      6
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">Webshop koppelen en opslaan</h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-4">
                        Als laatste stap koppel je Sendwise aan je webshop en sla je alle instellingen op.
                      </p>

                      {/* Screenshot */}
                      <div className="mb-6 rounded-xl overflow-hidden border-2 border-gray-200 shadow-lg">
                        <Image
                          src="/goedgepickt-stap-6.png"
                          alt="Webshop koppelen sectie"
                          width={1200}
                          height={800}
                          className="w-full h-auto"
                          style={{ filter: 'contrast(1.1) brightness(1.02)' }}
                        />
                      </div>

                      <div className="bg-blue-50/50 rounded-xl p-6 border border-blue-200/50 mb-6">
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-start gap-3">
                            <ArrowRight className="text-[#0066ff] mt-1 flex-shrink-0" size={18} />
                            <span>Ga naar <strong>Webshop</strong></span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="text-[#0066ff] mt-1 flex-shrink-0" size={18} />
                            <span>Klik op <strong>Koppelen aan webshop</strong></span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="text-[#0066ff] mt-1 flex-shrink-0" size={18} />
                            <span>Voeg de betreffende webshop toe die je wilt koppelen</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <ArrowRight className="text-[#0066ff] mt-1 flex-shrink-0" size={18} />
                            <span>Klik op <strong>Opslaan</strong></span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border-2 border-green-300/50">
                        <div className="flex items-center gap-3 mb-3">
                          <CheckCircle2 className="text-green-600" size={28} />
                          <h4 className="font-bold text-gray-900 text-xl">Klaar!</h4>
                        </div>
                        <p className="text-gray-700 text-lg">
                          Klik onderaan de pagina op <strong>Opslaan</strong> en je hebt Sendwise succesvol gekoppeld aan Goedgepickt! 🎉
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

      {/* Account Signup Modal - Reusable Component */}
      <AccountSignupModal 
        isOpen={showSignupModal} 
        onClose={() => setShowSignupModal(false)} 
      />

      {/* Toast Notification */}
      {showToast && (
        <div className={`fixed bottom-8 right-8 z-[200] transition-all duration-400 ${
          toastExiting ? 'animate-slide-out-right' : 'animate-slide-up'
        }`}>
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 border border-green-400/50">
            <div className="bg-white/20 rounded-full p-1.5">
              <CheckCircle2 size={20} className="animate-bounce" />
            </div>
            <div>
              <p className="font-semibold">Gekopieerd!</p>
              <p className="text-sm text-green-100">URL is naar klembord gekopieerd</p>
            </div>
          </div>
        </div>
      )}

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

