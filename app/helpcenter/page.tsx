'use client';

import React, { useState } from "react";
import { Search } from "lucide-react";

export default function Helpcenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Ultra Fancy Sendwise Moving Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff] via-blue-600 to-indigo-700">
        {/* Main animated gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff] via-blue-600 to-indigo-700 animate-gradient-shift"></div>
        
        {/* Secondary animated gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-700 via-[#0066ff] to-blue-500 animate-gradient-shift-reverse" style={{animationDelay: '2s'}}></div>
        
        {/* Tertiary animated gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-bl from-blue-500 via-indigo-600 to-[#0066ff] animate-gradient-shift-slow" style={{animationDelay: '4s'}}></div>

        {/* Glassmorphic overlay with subtle patterns */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 backdrop-blur-sm"></div>
        
        {/* Subtle animated shimmer */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
        </div>
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