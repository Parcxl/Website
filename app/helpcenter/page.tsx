'use client';

import Image from "next/image";
import React, { useState } from "react";
import { Search, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Helpcenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Ultra Fancy Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Multiple animated gradient layers */}
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 via-transparent to-cyan-900/30 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-pink-900/20 via-transparent to-blue-800/20 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-800/25 via-transparent to-purple-800/25 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large floating orbs */}
          <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/4 right-10 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-br from-indigo-400/20 to-cyan-500/20 rounded-full blur-3xl animate-float-reverse" style={{animationDelay: '4s'}}></div>
          <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-gradient-to-br from-pink-400/20 to-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '6s'}}></div>
          
          {/* Medium floating orbs */}
          <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-gradient-to-br from-blue-300/15 to-indigo-400/15 rounded-full blur-2xl animate-float-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/3 right-1/3 w-56 h-56 bg-gradient-to-br from-purple-300/15 to-pink-400/15 rounded-full blur-2xl animate-float" style={{animationDelay: '3s'}}></div>
          
          {/* Small floating particles */}
          <div className="absolute top-20 left-1/2 w-32 h-32 bg-gradient-to-br from-cyan-300/10 to-blue-400/10 rounded-full blur-xl animate-float" style={{animationDelay: '5s'}}></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-pink-300/10 to-purple-400/10 rounded-full blur-xl animate-float-slow" style={{animationDelay: '7s'}}></div>
        </div>

        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'grid-move 20s linear infinite'
          }}></div>
        </div>

        {/* Floating sparkles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-60 animate-sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Header */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-xl z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <Image
                src="/sendwise-logo.png" 
                alt="Sendwise" 
                width={140} 
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <Link 
              href="/"
              className="text-white/80 hover:text-white transition-colors font-medium"
            >
              Terug naar website
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content - Centered Search */}
      <main className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-full border border-white/20 shadow-lg mb-12">
            <Sparkles className="text-white" size={20} />
            <span className="text-white text-sm font-semibold">Sendwise Helpcenter</span>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 text-white leading-tight">
            Hoe kunnen we je <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">helpen</span>?
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-16 max-w-3xl mx-auto leading-relaxed">
            Zoek in onze kennisbank, lees handleidingen of vind snel antwoord op je vraag
          </p>

          {/* Central Search Bar */}
          <div className="max-w-3xl mx-auto">
            <div className={`relative transition-all duration-500 ${isSearchFocused ? 'scale-105' : 'scale-100'}`}>
              {/* Search Bar Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full blur-lg transition-opacity duration-500 ${isSearchFocused ? 'opacity-50' : 'opacity-20'}`}></div>
              
              {/* Search Bar Container */}
              <div className="relative bg-white/10 backdrop-blur-2xl rounded-full border border-white/20 shadow-2xl overflow-hidden">
                <div className="flex items-center">
                  <Search className="absolute left-6 text-white/60" size={24} />
                  <input
                    type="text"
                    placeholder="Zoek naar artikelen, handleidingen of veelgestelde vragen..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    className="w-full pl-16 pr-6 py-6 bg-transparent text-white placeholder-white/60 text-lg focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Search Suggestions */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {[
              'Account aanmaken',
              'Verzendingen tracken',
              'API integratie',
              'Facturen bekijken',
              'Tarieven opvragen'
            ].map((suggestion, index) => (
              <button
                key={index}
                onClick={() => setSearchQuery(suggestion)}
                className="px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40">
        <Link
          href="mailto:info@sendwise.nl"
          className="group bg-white/10 backdrop-blur-xl rounded-full p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
          title="Email Support"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </Link>
        
        <Link
          href="tel:+31619156123"
          className="group bg-white/10 backdrop-blur-xl rounded-full p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
          title="Bel Support"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </Link>
      </div>
    </div>
  );
}