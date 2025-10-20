'use client';

import React, { useState } from "react";
import { Search } from "lucide-react";

export default function Helpcenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Ultra Fancy Sendwise Glassmorphic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff] via-blue-600 to-indigo-700">
        {/* Multiple animated glass layers */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0066ff]/20 via-transparent to-cyan-500/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/15 via-transparent to-indigo-600/15 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-transparent to-[#0066ff]/10 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Floating glass orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large floating glass orbs */}
          <div className="absolute top-10 left-10 w-96 h-96 bg-white/10 backdrop-blur-xl rounded-full animate-float"></div>
          <div className="absolute top-1/4 right-10 w-80 h-80 bg-white/8 backdrop-blur-xl rounded-full animate-float-slow" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-white/6 backdrop-blur-xl rounded-full animate-float-reverse" style={{animationDelay: '4s'}}></div>
          <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-white/12 backdrop-blur-xl rounded-full animate-float" style={{animationDelay: '6s'}}></div>
          
          {/* Medium floating glass orbs */}
          <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-white/5 backdrop-blur-xl rounded-full animate-float-slow" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/3 right-1/3 w-56 h-56 bg-white/7 backdrop-blur-xl rounded-full animate-float" style={{animationDelay: '3s'}}></div>
          
          {/* Small floating glass particles */}
          <div className="absolute top-20 left-1/2 w-32 h-32 bg-white/4 backdrop-blur-xl rounded-full animate-float" style={{animationDelay: '5s'}}></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/6 backdrop-blur-xl rounded-full animate-float-slow" style={{animationDelay: '7s'}}></div>
        </div>

        {/* Glassmorphic overlay patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 40%, rgba(255,255,255,0.05) 0%, transparent 50%)
            `,
            animation: 'glass-shimmer 8s ease-in-out infinite'
          }}></div>
        </div>

        {/* Subtle noise texture for glass effect */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Central Search Bar */}
      <div className="relative z-10 w-full max-w-2xl px-8">
        <div className={`relative transition-all duration-700 ${isSearchFocused ? 'scale-105' : 'scale-100'}`}>
          {/* Search Bar Outer Glow */}
          <div className={`absolute -inset-2 bg-gradient-to-r from-white/20 via-white/30 to-white/20 rounded-full blur-xl transition-opacity duration-700 ${isSearchFocused ? 'opacity-60' : 'opacity-30'}`}></div>
          
          {/* Search Bar Container */}
          <div className="relative bg-white/10 backdrop-blur-2xl rounded-full border border-white/20 shadow-2xl overflow-hidden">
            <div className="flex items-center">
              <Search className="absolute left-6 text-white/70" size={24} />
              <input
                type="text"
                placeholder="Zoek naar artikelen, handleidingen of veelgestelde vragen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="w-full pl-16 pr-8 py-6 bg-transparent text-white placeholder-white/60 text-xl focus:outline-none font-medium"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}