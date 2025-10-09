"use client";

import Image from "next/image";
import { Brain } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [showSend, setShowSend] = useState(false);
  const [showBrain, setShowBrain] = useState(false);
  const [hideBrain, setHideBrain] = useState(false);
  const [showKite, setShowKite] = useState(false);

  useEffect(() => {
    // "Send" slides in first
    const sendTimer = setTimeout(() => {
      setShowSend(true);
    }, 200);

    // Brain slides in after Send
    const brainTimer = setTimeout(() => {
      setShowBrain(true);
    }, 800);

    // Brain flies out and Kite flies in
    const kiteTimer = setTimeout(() => {
      setHideBrain(true);
      setShowKite(true);
    }, 2000);

    return () => {
      clearTimeout(sendTimer);
      clearTimeout(brainTimer);
      clearTimeout(kiteTimer);
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

        @keyframes flyOutUp {
          0% {
            transform: translate(0, 0);
            opacity: 1;
          }
          100% {
            transform: translate(80px, -400px);
            opacity: 0;
          }
        }

        @keyframes kiteFlightIn {
          0% {
            transform: translate(-250px, 250px) rotate(-15deg);
            opacity: 0;
          }
          50% {
            transform: translate(-80px, 80px) rotate(5deg);
            opacity: 1;
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 1;
          }
        }

        .slide-in-left {
          animation: slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .slide-in-right {
          animation: slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .fly-out-up {
          animation: flyOutUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .kite-flight-in {
          animation: kiteFlightIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
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

            {/* Brain icon - slides from right, then flies out */}
            <div className="relative ml-8">
              <div className={`relative ${!showBrain ? 'opacity-0' : ''} ${showBrain && !hideBrain ? 'slide-in-right' : ''} ${hideBrain ? 'fly-out-up' : ''}`}>
                <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl scale-150"></div>
                <Brain 
                  className="relative text-white drop-shadow-2xl" 
                  size={200}
                  strokeWidth={1.5}
                />
              </div>

              {/* Kite icon - flies in from bottom left */}
              <div className={`absolute inset-0 ${showKite ? 'kite-flight-in' : 'opacity-0'}`}>
                <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl scale-150"></div>
                <Image
                  src="/kite-icon.png"
                  alt="Kite"
                  width={240}
                  height={240}
                  className="relative drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
