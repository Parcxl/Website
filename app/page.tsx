"use client";

import Image from "next/image";
import { Brain } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [showSend, setShowSend] = useState(false);
  const [showBrain, setShowBrain] = useState(false);

  useEffect(() => {
    // "Send" slides in first
    const sendTimer = setTimeout(() => {
      setShowSend(true);
    }, 200);

    // Brain slides in after Send
    const brainTimer = setTimeout(() => {
      setShowBrain(true);
    }, 800);

    // Auto-scroll to next section after animation completes
    const scrollTimer = setTimeout(() => {
      const nextSection = document.getElementById('next-section');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 2500); // After both animations complete (800ms + some delay)

    return () => {
      clearTimeout(sendTimer);
      clearTimeout(brainTimer);
      clearTimeout(scrollTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0066ff] via-[#0052cc] to-[#003d99] overflow-hidden">
      <style jsx global>{`
        @keyframes slideInLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .slide-in-left {
          animation: slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .slide-in-right {
          animation: slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-md z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Image 
                src="/sendwise-logo.png" 
                alt="Sendwise" 
                width={140} 
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button className="bg-white text-[#0066ff] px-6 py-2 rounded-full hover:bg-gray-100 transition-all font-medium">
                Start Nu
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Animation */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl animate-pulse animation-delay-400"></div>
        </div>

        <div className="relative max-w-7xl mx-auto w-full">
          <div className="flex items-center justify-center min-h-[60vh]">
            {/* Send text - slides from left */}
            <div className="relative">
              <h1 className={`text-8xl md:text-[12rem] lg:text-[16rem] font-bold text-white leading-none ${showSend ? 'slide-in-left' : 'opacity-0'}`}>
                Send
              </h1>
            </div>

            {/* Brain icon - slides from right */}
            <div className="relative ml-8">
              <div className={`relative ${showBrain ? 'slide-in-right' : 'opacity-0'}`}>
                <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl scale-150"></div>
                <Brain 
                  className="relative text-white drop-shadow-2xl" 
                  size={200}
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Section - White with content */}
      <section id="next-section" className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Verzenden is nog nooit zo <span className="text-[#0066ff]">slim</span> geweest
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Met Sendwise automatiseer je je hele verzendproces. Van label printen tot track & trace, 
                alles in één platform. Bespaar tijd en geld met slimme integraties.
              </p>
              <button className="bg-[#0066ff] text-white px-8 py-4 rounded-full hover:bg-[#0052cc] transition-all hover:shadow-xl text-lg font-medium">
                Ontdek Sendwise
              </button>
            </div>

            {/* Right side - Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0066ff]/10 to-transparent rounded-3xl blur-3xl"></div>
              <Image 
                src="/sendwise-photo.png" 
                alt="Sendwise Platform" 
                width={600} 
                height={400}
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
