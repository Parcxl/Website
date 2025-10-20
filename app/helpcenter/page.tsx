'use client';

import React, { useState } from "react";
import { Search } from "lucide-react";

export default function Helpcenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Ultra Fancy Sendwise Moving Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-100">
        {/* Main animated gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff]/20 via-blue-400/30 to-indigo-300/40 animate-gradient-shift"></div>
        
        {/* Secondary animated gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-200/30 via-[#0066ff]/25 to-blue-300/35 animate-gradient-shift-reverse" style={{animationDelay: '2s'}}></div>
        
        {/* Tertiary animated gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-bl from-blue-300/25 via-indigo-200/30 to-[#0066ff]/20 animate-gradient-shift-slow" style={{animationDelay: '4s'}}></div>

        {/* Glassmorphic overlay with subtle patterns */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/20 backdrop-blur-sm"></div>
        
        {/* Subtle animated shimmer */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
        </div>
      </div>

      {/* Central Search Bar */}
      <div className="relative z-10 w-full max-w-2xl px-8">
        <div className={`relative transition-all duration-700 ${isSearchFocused ? 'scale-105' : 'scale-100'}`}>
          {/* Search Bar Outer Glow */}
          <div className={`absolute -inset-2 bg-gradient-to-r from-[#0066ff]/30 via-[#0066ff]/40 to-[#0066ff]/30 rounded-full blur-xl transition-opacity duration-700 ${isSearchFocused ? 'opacity-70' : 'opacity-40'}`}></div>
          
          {/* Search Bar Container */}
          <div className="relative bg-white/80 backdrop-blur-2xl rounded-full border border-[#0066ff]/20 shadow-2xl overflow-hidden">
            <div className="flex items-center">
              <Search className="absolute left-6 text-[#0066ff]/70" size={24} />
              <input
                type="text"
                placeholder="Zoek naar artikelen, handleidingen of veelgestelde vragen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="w-full pl-16 pr-8 py-6 bg-transparent text-gray-800 placeholder-gray-500 text-xl focus:outline-none font-medium"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}