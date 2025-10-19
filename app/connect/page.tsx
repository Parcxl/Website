'use client';

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ArrowRight, Zap, Target, TrendingDown, Shield, Clock, Truck, Mail, BarChart3, CheckCircle, Sparkles } from "lucide-react";

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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-100/60 via-cyan-50/60 to-indigo-100/60">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300/50 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-20 right-0 w-80 h-80 bg-indigo-300/50 rounded-full blur-3xl animate-float-slow animation-delay-200"></div>
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-cyan-300/50 rounded-full blur-3xl animate-float-reverse animation-delay-400"></div>
        </div>
        
        {/* Backdrop blur overlay */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-md -z-10"></div>

        {/* Centered Connect Text */}
        <div className="relative z-10 text-center">
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-white leading-none select-none">
            <span className="relative inline-block animate-connect-shrink">
              {/* Main Text with Animation */}
              <span className="relative z-10 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent drop-shadow-2xl animate-text-gradient">
                CONNECT
              </span>
              
              {/* Glow Effect Behind with Animation */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 blur-xl opacity-60 animate-pulse animate-shadow-fade-out"></span>
              
              {/* Shimmer Effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-50 animate-shimmer"></span>
            </span>
          </h1>
        </div>

        {/* Road Line - Curved path around CONNECT text */}
        <div className="absolute inset-0 pointer-events-none">
          <svg 
            className="w-full h-full" 
            viewBox="0 0 100 100" 
            preserveAspectRatio="none"
            style={{ zIndex: 5 }}
          >
            <defs>
              <linearGradient id="roadGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#22d3ee" stopOpacity="1" />
                <stop offset="100%" stopColor="#818cf8" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            
            {/* Curved road path that goes around CONNECT text */}
            <path
              d="M -5 70 
                 C 15 60 25 65 35 75
                 C 45 85 55 90 65 95
                 C 75 100 85 105 105 110"
              stroke="url(#roadGradient)"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Waarom Connect?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exclusieve functies en de laagste tarieven voor Connect gebruikers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Pickup Service</h3>
              <p className="text-gray-600">
                Automatische ophaling van je pakketten op kantoor of thuis
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Branded Tracking</h3>
              <p className="text-gray-600">
                Klanten volgen hun pakket via jouw eigen tracking pagina
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-violet-50 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Branded Emails</h3>
              <p className="text-gray-600">
                Klanten ontvangen updates in jouw huisstijl
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingDown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Laagste Tarieven</h3>
              <p className="text-gray-600">
                Tot 40% goedkoper dan standaard verzendtarieven
              </p>
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