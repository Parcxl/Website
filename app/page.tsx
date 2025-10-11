'use client';

import Image from "next/image";
import React, { useState } from "react";
import { 
  ArrowRight, Package, Zap, Shield, BarChart3, 
  CheckCircle2, ChevronDown, Truck, Globe, 
  TrendingUp, Users, Clock, CreditCard, Sparkles,
  Box, Layers, Target, RefreshCw, X, Mail, Phone, MapPin
} from "lucide-react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSubscriptionVisible, setIsSubscriptionVisible] = useState(false);
  const [isBeltVisible, setIsBeltVisible] = useState(true);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showContactModal, setShowContactModal] = useState(false);
  const [footerMousePosition, setFooterMousePosition] = useState({ x: 50, y: 50 });

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

  // Mouse tracking for footer gradient
  React.useEffect(() => {
    const handleFooterMouseMove = (e: MouseEvent) => {
      const footer = document.querySelector('footer');
      if (footer) {
        const rect = footer.getBoundingClientRect();
        setFooterMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };
    window.addEventListener('mousemove', handleFooterMouseMove);
    return () => window.removeEventListener('mousemove', handleFooterMouseMove);
  }, []);

  // Scroll observer for subscription section
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsSubscriptionVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('subscription-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  // Scroll observer for conveyor belt - pause when not visible
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsBeltVisible(entry.isIntersecting);
        });
      },
      { threshold: 0 }
    );

    const belt = document.getElementById('conveyor-belt');
    if (belt) {
      observer.observe(belt);
    }

    return () => observer.disconnect();
  }, []);

  // Scroll observer for integration cards animations
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = document.querySelectorAll('.integration-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const integrationCards = document.querySelectorAll('.integration-card');
    integrationCards.forEach(card => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  // Infinite smooth auto-scroll carousel
  React.useEffect(() => {
    const carousel = document.querySelector('.integration-carousel');
    if (!carousel) return;

    let animationId: number;
    let isPaused = false;
    
    const scroll = () => {
      if (!isPaused && carousel) {
        carousel.scrollLeft += 1; // Smooth pixel-by-pixel scroll
        
        // Reset to start for infinite loop
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    // Pause on hover
    const handleMouseEnter = () => { isPaused = true; };
    const handleMouseLeave = () => { isPaused = false; };
    
    carousel.addEventListener('mouseenter', handleMouseEnter);
    carousel.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      carousel.removeEventListener('mouseenter', handleMouseEnter);
      carousel.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // 3D Perspective Scroll Effect for Software Screenshot
  React.useEffect(() => {
    const screenshot = document.querySelector('.software-screenshot') as HTMLElement;
    if (!screenshot) return;

    // Mobile detection
    const isMobile = window.innerWidth < 768;
    
    // Optimize element for hardware acceleration
    screenshot.style.willChange = 'transform';
    screenshot.style.backfaceVisibility = 'hidden';
    screenshot.style.perspective = '1000px';
    screenshot.style.transformStyle = 'preserve-3d';
    
    let rafId: number | null = null;
    let lastScrollTime = 0;
    let isScrolling = false;
    
    const handleScroll = () => {
      if (isMobile) {
        // On mobile, use throttled animation frames for smoother performance
        if (!isScrolling) {
          isScrolling = true;
          rafId = requestAnimationFrame(() => {
            updateTransform();
            isScrolling = false;
          });
        }
      } else {
        // Desktop: use the optimized version
        const now = performance.now();
        if (now - lastScrollTime < 16.67) return; // 60fps throttle
        lastScrollTime = now;
        
        if (rafId) {
          cancelAnimationFrame(rafId);
        }
        
        rafId = requestAnimationFrame(() => {
          updateTransform();
          rafId = null;
        });
      }
    };
    
    const updateTransform = () => {
      const rect = screenshot.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const screenCenter = windowHeight / 2;
      
      // Calculate scroll progress (-1 to 1, where 0 is center of screen)
      const scrollProgress = (elementCenter - screenCenter) / (windowHeight / 2);
      
      // Clamp between -1 and 1
      const clampedProgress = Math.max(-1, Math.min(1, scrollProgress));
      
      // Calculate perspective transforms
      const rotateX = clampedProgress * 25; // Rotate up to 25deg
      const rotateY = clampedProgress * 15; // Rotate up to 15deg
      const translateY = clampedProgress * -30; // Move up/down
      const scale = 1 - Math.abs(clampedProgress) * 0.1; // Scale down when off-center
      
      // Apply transform with hardware acceleration
      screenshot.style.transition = 'none';
      screenshot.style.transform = 
        `translate3d(0, ${translateY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
    };

    // Use passive scroll listener with different throttling for mobile
    window.addEventListener('scroll', handleScroll, { passive: true });
    updateTransform(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  // 3D Perspective Scroll Effect for USP Cards
  React.useEffect(() => {
    const cards = document.querySelectorAll('.usp-card') as NodeListOf<HTMLElement>;
    if (!cards.length) return;

    // Mobile detection
    const isMobile = window.innerWidth < 768;
    
    // Optimize all cards for hardware acceleration
    cards.forEach(card => {
      card.style.willChange = 'transform';
      card.style.backfaceVisibility = 'hidden';
      card.style.perspective = '1000px';
      card.style.transformStyle = 'preserve-3d';
    });
    
    let rafId: number | null = null;
    let lastScrollTime = 0;
    let isScrolling = false;
    
    const handleScroll = () => {
      if (isMobile) {
        // On mobile, use throttled animation frames for smoother performance
        if (!isScrolling) {
          isScrolling = true;
          rafId = requestAnimationFrame(() => {
            updateTransforms();
            isScrolling = false;
          });
        }
      } else {
        // Desktop: use the optimized version
        const now = performance.now();
        if (now - lastScrollTime < 16.67) return; // 60fps throttle
        lastScrollTime = now;
        
        if (rafId) {
          cancelAnimationFrame(rafId);
        }
        
        rafId = requestAnimationFrame(() => {
          updateTransforms();
          rafId = null;
        });
      }
    };
    
    const updateTransforms = () => {
      const windowHeight = window.innerHeight;
      const screenCenter = windowHeight / 2;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const elementCenter = rect.top + rect.height / 2;
        
        // Calculate scroll progress (-1 to 1, where 0 is center of screen)
        const scrollProgress = (elementCenter - screenCenter) / (windowHeight / 2);
        
        // Clamp between -1 and 1
        const clampedProgress = Math.max(-1, Math.min(1, scrollProgress));
        
        // Calculate perspective transforms
        const rotateX = clampedProgress * 25; // Rotate up to 25deg
        const rotateY = (index - 1) * 10 + clampedProgress * 15; // Different angle per card
        const translateY = clampedProgress * -30; // Move up/down
        const scale = 1 - Math.abs(clampedProgress) * 0.08; // Scale effect
        
        // Apply transform with hardware acceleration
        card.style.transition = 'box-shadow 0.5s, border-color 0.5s';
        card.style.transform = 
          `translate3d(0, ${translateY}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
      });
    };

    // Use passive scroll listener with different throttling for mobile
    window.addEventListener('scroll', handleScroll, { passive: true });
    updateTransforms(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
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
                <div className="flex items-center group">
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
                </div>
                
                <div className="hidden md:flex items-center">
                  <button 
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

      {/* Hero Section with Animated Background */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-100/60 via-cyan-50/60 to-indigo-100/60">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300/50 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-20 right-0 w-80 h-80 bg-indigo-300/50 rounded-full blur-3xl animate-float-slow animation-delay-200"></div>
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-cyan-300/50 rounded-full blur-3xl animate-float-reverse animation-delay-400"></div>
        </div>
        
        {/* Backdrop blur overlay */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-md -z-10"></div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200/50 shadow-sm">
                <Sparkles className="text-[#0066ff]" size={18} />
                <span className="text-[#0066ff] text-sm font-semibold">Slimmer verzenden voor webshops</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Verzenden was nog nooit zo <span className="text-gradient">goedkoop</span>
              </h1>
              
              <p className="text-sm text-gray-500 leading-relaxed max-w-xl">
                Voordelig verzenden zonder maandlasten en kleine lettertjes
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-gradient-to-r from-[#0066ff] to-blue-600 text-white px-8 py-3.5 rounded-full hover:shadow-2xl transition-all shadow-lg hover:scale-105 flex items-center justify-center group font-semibold">
                  Direct starten
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </button>
                <button 
                  onClick={() => setShowContactModal(true)}
                  className="bg-white/80 backdrop-blur-xl border-2 border-gray-200 text-gray-700 px-8 py-3.5 rounded-full hover:border-[#0066ff] hover:text-[#0066ff] transition-all font-semibold shadow-lg"
                >
                  Neem contact op
                </button>
              </div>

            </div>

            <div className="relative animate-slide-in-right">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/60 backdrop-blur-md p-6 rounded-3xl border border-white/50 shadow-2xl">
            <Image
                  src="/hero-image.png" 
                  alt="Sendwise Dashboard" 
                  width={600} 
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
                
                {/* Animated line from center to floating cloud */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* SVG Line */}
                  <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 20 }}>
                    <defs>
                      <linearGradient id="heroLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0066ff" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                        <stop offset="100%" stopColor="#0066ff" stopOpacity="0.8" />
                      </linearGradient>
                      <filter id="heroLineGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge> 
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <path
                      d="M 300 200 Q 220 160 140 140"
                      stroke="url(#heroLineGradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      filter="url(#heroLineGlow)"
                      className="animate-draw-hero-line hidden md:block"
                      strokeDasharray="16"
                      strokeDashoffset="16"
                    />
                  </svg>
                  
                  {/* Floating Cloud */}
                  <div 
                    className="absolute animate-float-cloud hidden md:block"
                    style={{ 
                      left: '70px', 
                      top: '110px',
                      zIndex: 30
                    }}
                  >
                    <div className="relative">
                      {/* Cloud Background */}
                      <div className="bg-white/90 backdrop-blur-md rounded-2xl px-4 py-3 shadow-xl border border-white/50">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm font-semibold text-gray-800">133 orders</span>
        </div>
                        <div className="text-xs text-gray-600 mt-1">verzonden</div>
                      </div>
                      
                      {/* Cloud Tail */}
                      <div 
                        className="absolute bg-white/90 backdrop-blur-md w-3 h-3 transform rotate-45 -bottom-1 right-6 border-l border-b border-white/50"
                        style={{ 
                          clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%)'
                        }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Mobile Floating Cloud */}
                  <div 
                    className="absolute animate-float-cloud md:hidden"
                    style={{ 
                      left: '170px', 
                      top: '50px',
                      zIndex: 30
                    }}
                  >
                    <div className="relative">
                      {/* Cloud Background */}
                      <div className="bg-white/90 backdrop-blur-md rounded-2xl px-3 py-2 shadow-xl border border-white/50">
                        <div className="flex items-center gap-1">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-xs font-semibold text-gray-800">133 orders</span>
                        </div>
                        <div className="text-[10px] text-gray-600 mt-0.5">verzonden</div>
                      </div>
                      
                      {/* Cloud Tail */}
                      <div 
                        className="absolute bg-white/90 backdrop-blur-md w-2 h-2 transform rotate-45 -bottom-0.5 right-4 border-l border-b border-white/50"
                        style={{ 
                          clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%)'
                        }}
                      ></div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conveyor Belt with Packages */}
        <div id="conveyor-belt" className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-b from-gray-700 to-gray-800 border-t border-gray-600 overflow-visible z-10">
          {/* Belt Surface */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 opacity-30"></div>
          
          {/* Belt Lines */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gray-900 opacity-40"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-900 opacity-60"></div>
          
          {/* Packages */}
          <div className="relative h-full">
            {/* Package 1 - Small brown box */}
            <div className="package-box package-box-delay-1 absolute bottom-2 -left-20" style={{ animationPlayState: isBeltVisible ? 'running' : 'paused' }}>
              <div className="relative" style={{ width: '35px', height: '28px' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-amber-700 to-amber-800 rounded-sm border-2 border-amber-900 shadow-lg">
                  <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-amber-400/40 -translate-y-1/2"></div>
                  <div className="absolute top-0 bottom-0 left-1/2 w-1.5 bg-amber-400/40 -translate-x-1/2"></div>
                </div>
                <div className="absolute -top-2 left-0 right-0 h-2 bg-gradient-to-b from-amber-600 to-amber-700 border-l border-r border-amber-900" 
                     style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)', transform: 'perspective(100px) rotateX(-45deg)', transformOrigin: 'bottom' }}>
                </div>
              </div>
            </div>

            {/* Package 2 - Medium orange box */}
            <div className="package-box package-box-delay-2 absolute bottom-2 -left-20" style={{ animationPlayState: isBeltVisible ? 'running' : 'paused' }}>
              <div className="relative" style={{ width: '45px', height: '36px' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-700 rounded-sm border-2 border-orange-900 shadow-lg">
                  <div className="absolute top-1/2 left-0 right-0 h-2 bg-yellow-400/40 -translate-y-1/2"></div>
                  <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-yellow-400/40 -translate-x-1/2"></div>
                  <div className="absolute bottom-1 right-1 text-[7px] text-red-600 font-bold bg-white/80 px-0.5 rounded">⚠</div>
                </div>
                <div className="absolute -top-2 left-0 right-0 h-2 bg-gradient-to-b from-orange-500 to-orange-600 border-l border-r border-orange-900" 
                     style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)', transform: 'perspective(100px) rotateX(-45deg)', transformOrigin: 'bottom' }}>
                </div>
              </div>
            </div>

            {/* Package 3 - Large dark brown box */}
            <div className="package-box package-box-delay-3 absolute bottom-2 -left-20" style={{ animationPlayState: isBeltVisible ? 'running' : 'paused' }}>
              <div className="relative" style={{ width: '50px', height: '38px' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-amber-800 to-amber-900 rounded-sm border-2 border-amber-950 shadow-lg">
                  <div className="absolute top-1/2 left-0 right-0 h-2 bg-amber-500/30 -translate-y-1/2"></div>
                  <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-amber-500/30 -translate-x-1/2"></div>
                </div>
                <div className="absolute -top-2 left-0 right-0 h-2 bg-gradient-to-b from-amber-700 to-amber-800 border-l border-r border-amber-950" 
                     style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)', transform: 'perspective(100px) rotateX(-45deg)', transformOrigin: 'bottom' }}>
                </div>
              </div>
            </div>

            {/* Package 4 - Tiny beige box */}
            <div className="package-box package-box-delay-4 absolute bottom-2 -left-20" style={{ animationPlayState: isBeltVisible ? 'running' : 'paused' }}>
              <div className="relative" style={{ width: '30px', height: '24px' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-700 to-yellow-800 rounded-sm border-2 border-yellow-900 shadow-lg">
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-yellow-400/50 -translate-y-1/2"></div>
                  <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-yellow-400/50 -translate-x-1/2"></div>
                </div>
                <div className="absolute -top-1.5 left-0 right-0 h-1.5 bg-gradient-to-b from-yellow-600 to-yellow-700 border-l border-r border-yellow-900" 
                     style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)', transform: 'perspective(100px) rotateX(-45deg)', transformOrigin: 'bottom' }}>
                </div>
              </div>
            </div>

            {/* Package 5 - Medium brown-orange box */}
            <div className="package-box package-box-delay-5 absolute bottom-2 -left-20" style={{ animationPlayState: isBeltVisible ? 'running' : 'paused' }}>
              <div className="relative" style={{ width: '42px', height: '34px' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-700 to-amber-800 rounded-sm border-2 border-orange-900 shadow-lg">
                  <div className="absolute top-1/2 left-0 right-0 h-2 bg-orange-400/40 -translate-y-1/2"></div>
                  <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-orange-400/40 -translate-x-1/2"></div>
                  <div className="absolute top-1 left-1 text-[6px] text-black/60 font-bold">📦</div>
                </div>
                <div className="absolute -top-2 left-0 right-0 h-2 bg-gradient-to-b from-orange-600 to-amber-700 border-l border-r border-orange-900" 
                     style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)', transform: 'perspective(100px) rotateX(-45deg)', transformOrigin: 'bottom' }}>
                </div>
              </div>
            </div>

            {/* Package 6 - Small cardboard box */}
            <div className="package-box package-box-delay-6 absolute bottom-2 -left-20" style={{ animationPlayState: isBeltVisible ? 'running' : 'paused' }}>
              <div className="relative" style={{ width: '38px', height: '30px' }}>
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-amber-700 rounded-sm border-2 border-amber-800 shadow-lg">
                  <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-amber-300/40 -translate-y-1/2"></div>
                  <div className="absolute top-0 bottom-0 left-1/2 w-1.5 bg-amber-300/40 -translate-x-1/2"></div>
                  <div className="absolute bottom-1 left-1 text-[7px] text-green-700 font-bold bg-white/80 px-0.5 rounded">✓</div>
                </div>
                <div className="absolute -top-2 left-0 right-0 h-2 bg-gradient-to-b from-amber-500 to-amber-600 border-l border-r border-amber-800" 
                     style={{ clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)', transform: 'perspective(100px) rotateX(-45deg)', transformOrigin: 'bottom' }}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* No Subscription Costs Section */}
      <section id="subscription-section" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Hoe wij helpen <span className="text-gradient">besparen</span>
            </h2>
            <p className="text-xl text-gray-600">Bij Sendwise verzend je als nooit tevoren</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Side - Subscription Costs */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-blue-100">
                <div className="w-10 h-10 bg-[#0066ff] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">
                  <span className="text-gradient">Abonnementskosten</span>
                </h3>
              </div>

              <div className="space-y-4 mt-6">
                {/* Sendcloud */}
                <div className={`relative rounded-2xl p-6 shadow-lg border border-gray-200 overflow-hidden bg-white transition-all duration-800 ${isSubscriptionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'}`} 
                     style={{ transitionDelay: isSubscriptionVisible ? '0.3s' : '0s' }}>
                  <div className={`absolute inset-0 bg-red-600/50 rounded-2xl transition-opacity duration-[2500ms] z-20 pointer-events-none ${isSubscriptionVisible ? 'opacity-100' : 'opacity-0'}`}
                       style={{ transitionDelay: isSubscriptionVisible ? '1.5s' : '0s' }}></div>
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-1.5">
                        <Image src="/sendcloud-logo.png" alt="Sendcloud" width={48} height={48} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <div className="font-bold text-lg text-gray-700">Sendcloud</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-gray-700">€312 - €7.668</div>
                      <div className="text-sm text-gray-500">per jaar</div>
                    </div>
                  </div>
                </div>

                {/* MyParcel */}
                <div className={`relative rounded-2xl p-6 shadow-lg border border-gray-200 overflow-hidden bg-white transition-all duration-800 ${isSubscriptionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'}`} 
                     style={{ transitionDelay: isSubscriptionVisible ? '0.6s' : '0s' }}>
                  <div className={`absolute inset-0 bg-red-600/50 rounded-2xl transition-opacity duration-[2500ms] z-20 pointer-events-none ${isSubscriptionVisible ? 'opacity-100' : 'opacity-0'}`}
                       style={{ transitionDelay: isSubscriptionVisible ? '1.8s' : '0s' }}></div>
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-1.5">
                        <Image src="/myparcel-logo.png" alt="MyParcel" width={48} height={48} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <div className="font-bold text-lg text-gray-700">MyParcel</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-gray-700">€0 - €1.500</div>
                      <div className="text-sm text-gray-500">per jaar</div>
                    </div>
                  </div>
                </div>

                {/* Innosend */}
                <div className={`relative rounded-2xl p-6 shadow-lg border border-gray-200 overflow-hidden bg-white transition-all duration-800 ${isSubscriptionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'}`} 
                     style={{ transitionDelay: isSubscriptionVisible ? '0.9s' : '0s' }}>
                  <div className={`absolute inset-0 bg-red-600/50 rounded-2xl transition-opacity duration-[2500ms] z-20 pointer-events-none ${isSubscriptionVisible ? 'opacity-100' : 'opacity-0'}`}
                       style={{ transitionDelay: isSubscriptionVisible ? '2.1s' : '0s' }}></div>
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-1.5">
                        <Image src="/innosend-logo.png" alt="Innosend" width={48} height={48} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <div className="font-bold text-lg text-gray-700">Innosend</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-gray-700">€0 - €1.800</div>
                      <div className="text-sm text-gray-500">per jaar</div>
                    </div>
                  </div>
                </div>

                {/* Sendy */}
                <div className={`relative rounded-2xl p-6 shadow-lg border border-gray-200 overflow-hidden bg-white transition-all duration-800 ${isSubscriptionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'}`} 
                     style={{ transitionDelay: isSubscriptionVisible ? '1.2s' : '0s' }}>
                  <div className={`absolute inset-0 bg-red-600/50 rounded-2xl transition-opacity duration-[2500ms] z-20 pointer-events-none ${isSubscriptionVisible ? 'opacity-100' : 'opacity-0'}`}
                       style={{ transitionDelay: isSubscriptionVisible ? '2.4s' : '0s' }}></div>
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-1.5">
                        <Image src="/sendy-logo.png" alt="Sendy" width={48} height={48} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <div className="font-bold text-lg text-gray-700">Sendy</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-gray-700">€0 - €2.280</div>
                      <div className="text-sm text-gray-500">per jaar</div>
                    </div>
                  </div>
                </div>

                {/* Sendwise - Winner */}
                <div className={`relative rounded-2xl p-6 shadow-2xl border-2 border-blue-200 overflow-hidden transition-all duration-800 ${isSubscriptionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'}`} 
                     style={{ transitionDelay: isSubscriptionVisible ? '5.5s' : '0s' }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50"></div>
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 flex items-center justify-center">
                        <Image src="/sendwise-icon.png" alt="Sendwise" width={64} height={64} className="w-full h-full object-contain" />
                      </div>
                      <div>
                        <div className="font-bold text-2xl text-gray-900">Sendwise</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-5xl font-bold text-[#0066ff]">€0</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Shipping Rates */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md border border-blue-100">
                <div className="w-10 h-10 bg-[#0066ff] text-white rounded-full flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">
                  <span className="text-gradient">Verzendtarieven</span>
                </h3>
              </div>

              {/* Custom Rates Info Box */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-4 border-2 border-[#0066ff]/20 mt-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#0066ff] rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">€</span>
                  </div>
                  <div>
                    <div className="font-bold text-lg text-gray-900 mb-1">Tarieven op maat</div>
                    <p className="text-xs text-gray-700 leading-relaxed font-semibold">
                      Bij Sendwise doen we geen staffels. We gaan in gesprek en komen samen tot een passend tarief.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {/* PostNL */}
                <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 flex items-center justify-center">
                      <Image src="/postnl-logo.webp" alt="PostNL" width={56} height={56} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <div className="font-bold text-lg text-gray-700">PostNL</div>
                    </div>
                  </div>
                </div>

                {/* DHL */}
                <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 flex items-center justify-center">
                      <Image src="/dhl-logo.svg" alt="DHL" width={56} height={56} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <div className="font-bold text-lg text-gray-700">DHL</div>
                    </div>
                  </div>
                </div>

                {/* CIRRO */}
                <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 flex items-center justify-center">
                      <Image src="/cirro-logo.png" alt="CIRRO" width={56} height={56} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <div className="font-bold text-lg text-gray-700">CIRRO</div>
                    </div>
                  </div>
                </div>

                {/* Connect */}
                <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 flex items-center justify-center">
                      <Image src="/connect-logo.png" alt="Connect" width={56} height={56} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <div className="font-bold text-lg text-gray-700">Connect</div>
                      <div className="text-sm text-gray-500">By Sendwise</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-12 relative overflow-hidden">
        {/* Fancy Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/40"></div>
        
        {/* Moving Background Blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#0066ff]/20 to-blue-400/20 rounded-full blur-3xl animate-float" style={{animationDelay: '0s', animationDuration: '20s'}}></div>
          <div className="absolute top-40 right-10 w-80 h-80 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-float" style={{animationDelay: '2s', animationDuration: '25s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-gradient-to-br from-cyan-400/20 to-[#0066ff]/15 rounded-full blur-3xl animate-float" style={{animationDelay: '4s', animationDuration: '22s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-br from-indigo-400/20 to-blue-500/15 rounded-full blur-3xl animate-float" style={{animationDelay: '1s', animationDuration: '18s'}}></div>
        </div>

        {/* Backdrop Blur Overlay */}
        <div className="absolute inset-0 backdrop-blur-[2px] pointer-events-none"></div>

        <div className="mb-16 text-center px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Koppel met <span className="text-gradient">alles</span>
          </h2>
          <p className="text-xl text-gray-600">Naadloze integratie met jouw favoriete platformen</p>
        </div>

          {/* Integrations Carousel */}
          <div className="relative z-10">
            {/* Carousel Container */}
            <div className="relative overflow-hidden">
              {/* Gradient Fade Left */}
              <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-blue-50/70 via-blue-50/40 via-blue-50/20 to-transparent z-10 pointer-events-none"></div>
              
              {/* Gradient Fade Right */}
              <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-blue-50/70 via-blue-50/40 via-blue-50/20 to-transparent z-10 pointer-events-none"></div>

              {/* Scrollable Cards */}
              <div className="integration-carousel flex gap-6 overflow-x-auto pb-8 scrollbar-hide relative z-0" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
       {/* WooCommerce - Most Popular */}
       <div className="group integration-card flex-shrink-0 w-80 snap-start transition-all duration-700 cursor-pointer">
                <div className="relative bg-gradient-to-br from-[#8d5eb9]/20 via-[#8d5eb9]/10 to-transparent backdrop-blur-xl rounded-3xl border border-[#8d5eb9]/30 hover:border-[#8d5eb9]/60 p-8 h-full overflow-hidden">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#8d5eb9]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#8d5eb9]/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <div className="text-center relative z-10">
                    <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
          <Image
                        src="https://wclkrgejvcuglowsrefl.supabase.co/storage/v1/object/public/integraties/woocommerce%20logo.png" 
                        alt="WooCommerce" 
                        width={70} 
                        height={70} 
                        className="w-16 h-16 object-contain mx-auto drop-shadow-lg" 
                      />
                    </div>
             <h3 className="text-2xl font-bold text-gray-900 mb-0 group-hover:text-[#8d5eb9] transition-colors duration-300">WooCommerce</h3>
                  </div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#8d5eb9]/0 via-[#8d5eb9]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

       {/* Shopify - Most Popular */}
       <div className="group integration-card flex-shrink-0 w-80 snap-start transition-all duration-700 cursor-pointer" style={{animationDelay: '100ms'}}>
                <div className="relative bg-gradient-to-br from-[#9fcc31]/20 via-[#9fcc31]/10 to-transparent backdrop-blur-xl rounded-3xl border border-[#9fcc31]/30 hover:border-[#9fcc31]/60 p-8 h-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#9fcc31]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#9fcc31]/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <div className="text-center relative z-10">
                    <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
          <Image
                        src="https://wclkrgejvcuglowsrefl.supabase.co/storage/v1/object/public/integraties/Shopify%20logo.png" 
                        alt="Shopify" 
                        width={70} 
                        height={70} 
                        className="w-16 h-16 object-contain mx-auto drop-shadow-lg" 
                      />
                    </div>
             <h3 className="text-2xl font-bold text-gray-900 mb-0 group-hover:text-[#9fcc31] transition-colors duration-300">Shopify</h3>
                  </div>
                  
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#9fcc31]/0 via-[#9fcc31]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

       {/* CCV - Most Popular */}
       <div className="group integration-card flex-shrink-0 w-80 snap-start transition-all duration-700 cursor-pointer" style={{animationDelay: '200ms'}}>
                <div className="relative bg-gradient-to-br from-[#0495fe]/20 via-[#0495fe]/10 to-transparent backdrop-blur-xl rounded-3xl border border-[#0495fe]/30 hover:border-[#0495fe]/60 p-8 h-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0495fe]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#0495fe]/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <div className="text-center relative z-10">
                    <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Image 
                        src="https://wclkrgejvcuglowsrefl.supabase.co/storage/v1/object/public/integraties/CCV-icon.svg" 
                        alt="CCV" 
                        width={70} 
                        height={70} 
                        className="w-16 h-16 object-contain mx-auto drop-shadow-lg" 
                      />
                    </div>
             <h3 className="text-2xl font-bold text-gray-900 mb-0 group-hover:text-[#0495fe] transition-colors duration-300">CCV</h3>
                  </div>
                  
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0495fe]/0 via-[#0495fe]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

       {/* Bol.com */}
       <div className="group integration-card flex-shrink-0 w-80 snap-start transition-all duration-700 cursor-pointer" style={{animationDelay: '300ms'}}>
                <div className="relative bg-gradient-to-br from-[#021da4]/20 via-[#021da4]/10 to-transparent backdrop-blur-xl rounded-3xl border border-[#021da4]/30 hover:border-[#021da4]/60 p-8 h-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#021da4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#021da4]/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <div className="text-center relative z-10">
                    <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Image 
                        src="https://wclkrgejvcuglowsrefl.supabase.co/storage/v1/object/public/integraties/bol.webp" 
                        alt="Bol.com" 
                        width={70} 
                        height={70} 
                        className="w-16 h-16 object-contain mx-auto drop-shadow-lg" 
                      />
                    </div>
             <h3 className="text-2xl font-bold text-gray-900 mb-0 group-hover:text-[#021da4] transition-colors duration-300">Bol.com</h3>
                  </div>
                  
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#021da4]/0 via-[#021da4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

       {/* Magento */}
       <div className="group integration-card flex-shrink-0 w-80 snap-start transition-all duration-700 cursor-pointer" style={{animationDelay: '400ms'}}>
                <div className="relative bg-gradient-to-br from-[#ff6000]/20 via-[#ff6000]/10 to-transparent backdrop-blur-xl rounded-3xl border border-[#ff6000]/30 hover:border-[#ff6000]/60 p-8 h-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#ff6000]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#ff6000]/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <div className="text-center relative z-10">
                    <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Image 
                        src="https://wclkrgejvcuglowsrefl.supabase.co/storage/v1/object/public/integraties/magento.jpg" 
                        alt="Magento" 
                        width={70} 
                        height={70} 
                        className="w-16 h-16 object-contain mx-auto drop-shadow-lg" 
                      />
                    </div>
             <h3 className="text-2xl font-bold text-gray-900 mb-0 group-hover:text-[#ff6000] transition-colors duration-300">Magento</h3>
                  </div>
                  
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#ff6000]/0 via-[#ff6000]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

       {/* Ecwid */}
       <div className="group integration-card flex-shrink-0 w-80 snap-start transition-all duration-700 cursor-pointer" style={{animationDelay: '500ms'}}>
                <div className="relative bg-gradient-to-br from-[#facc02]/20 via-[#facc02]/10 to-transparent backdrop-blur-xl rounded-3xl border border-[#facc02]/30 hover:border-[#facc02]/60 p-8 h-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#facc02]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#facc02]/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <div className="text-center relative z-10">
                    <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Image 
                        src="https://wclkrgejvcuglowsrefl.supabase.co/storage/v1/object/public/integraties/ecwid-parcxl.png" 
                        alt="Ecwid" 
                        width={70} 
                        height={70} 
                        className="w-16 h-16 object-contain mx-auto drop-shadow-lg" 
                      />
                    </div>
             <h3 className="text-2xl font-bold text-gray-900 mb-0 group-hover:text-[#facc02] transition-colors duration-300">Ecwid</h3>
                  </div>
                  
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#facc02]/0 via-[#facc02]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

       {/* Lightspeed */}
       <div className="group integration-card flex-shrink-0 w-80 snap-start transition-all duration-700 cursor-pointer" style={{animationDelay: '600ms'}}>
                <div className="relative bg-gradient-to-br from-[#f34b4d]/20 via-[#f34b4d]/10 to-transparent backdrop-blur-xl rounded-3xl border border-[#f34b4d]/30 hover:border-[#f34b4d]/60 p-8 h-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#f34b4d]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#f34b4d]/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <div className="text-center relative z-10">
                    <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
          <Image
                        src="https://wclkrgejvcuglowsrefl.supabase.co/storage/v1/object/public/integraties/lightspeed.png" 
                        alt="Lightspeed" 
                        width={70} 
                        height={70} 
                        className="w-16 h-16 object-contain mx-auto drop-shadow-lg" 
                      />
                    </div>
             <h3 className="text-2xl font-bold text-gray-900 mb-0 group-hover:text-[#f34b4d] transition-colors duration-300">Lightspeed</h3>
                  </div>
                  
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#f34b4d]/0 via-[#f34b4d]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

       {/* MijnWebwinkel */}
       <div className="group integration-card flex-shrink-0 w-80 snap-start transition-all duration-700 cursor-pointer" style={{animationDelay: '700ms'}}>
         <div className="relative bg-gradient-to-br from-[#6ee67c]/20 via-[#6ee67c]/10 to-transparent backdrop-blur-xl rounded-3xl border border-[#6ee67c]/30 hover:border-[#6ee67c]/60 p-8 h-full overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-br from-[#6ee67c]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
           <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#6ee67c]/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
           
           <div className="text-center relative z-10">
             <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
               <Image 
                 src="https://wclkrgejvcuglowsrefl.supabase.co/storage/v1/object/public/integraties/mijnwebwinkel.png" 
                 alt="MijnWebwinkel" 
                 width={70} 
                 height={70} 
                 className="w-16 h-16 object-contain mx-auto drop-shadow-lg" 
               />
             </div>
             <h3 className="text-2xl font-bold text-gray-900 mb-0 group-hover:text-[#6ee67c] transition-colors duration-300">MijnWebwinkel</h3>
           </div>
           
           <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#6ee67c]/0 via-[#6ee67c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
         </div>
       </div>

       {/* Wix */}
       <div className="group integration-card flex-shrink-0 w-80 snap-start transition-all duration-700 cursor-pointer" style={{animationDelay: '800ms'}}>
         <div className="relative bg-gradient-to-br from-[#000000]/20 via-[#000000]/10 to-transparent backdrop-blur-xl rounded-3xl border border-gray-300 hover:border-gray-600 p-8 h-full overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
           <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-gray-900/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
           
           <div className="text-center relative z-10">
             <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
               <Image 
                 src="https://wclkrgejvcuglowsrefl.supabase.co/storage/v1/object/public/integraties/wix.png" 
                 alt="Wix" 
                 width={70} 
                 height={70} 
                 className="w-16 h-16 object-contain mx-auto drop-shadow-lg" 
               />
             </div>
             <h3 className="text-2xl font-bold text-gray-900 mb-0 group-hover:text-black transition-colors duration-300">Wix</h3>
           </div>
           
           <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gray-900/0 via-gray-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
         </div>
       </div>

       {/* Prestashop */}
       <div className="group integration-card flex-shrink-0 w-80 snap-start transition-all duration-700 cursor-pointer" style={{animationDelay: '900ms'}}>
         <div className="relative bg-gradient-to-br from-[#a6e1ef]/20 via-[#a6e1ef]/10 to-transparent backdrop-blur-xl rounded-3xl border border-[#a6e1ef]/30 hover:border-[#a6e1ef]/60 p-8 h-full overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-br from-[#a6e1ef]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
           <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#a6e1ef]/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
           
           <div className="text-center relative z-10">
             <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
          <Image
                 src="https://wclkrgejvcuglowsrefl.supabase.co/storage/v1/object/public/integraties/Prestashop.png" 
                 alt="Prestashop" 
                 width={70} 
                 height={70} 
                 className="w-16 h-16 object-contain mx-auto drop-shadow-lg" 
               />
             </div>
             <h3 className="text-2xl font-bold text-gray-900 mb-0 group-hover:text-[#a6e1ef] transition-colors duration-300">Prestashop</h3>
           </div>
           
           <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#a6e1ef]/0 via-[#a6e1ef]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
         </div>
       </div>

       {/* DUPLICATE SET FOR INFINITE SCROLL */}
       {/* WooCommerce - Duplicate */}
       <div className="group flex-shrink-0 w-80 transition-all duration-700 cursor-pointer">
         <div className="relative bg-gradient-to-br from-[#8d5eb9]/20 via-[#8d5eb9]/10 to-transparent backdrop-blur-xl rounded-3xl border border-[#8d5eb9]/30 hover:border-[#8d5eb9]/60 p-8 h-full overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-br from-[#8d5eb9]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
           <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#8d5eb9]/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
           <div className="text-center relative z-10">
             <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
               <Image src="https://wclkrgejvcuglowsrefl.supabase.co/storage/v1/object/public/integraties/woocommerce%20logo.png" alt="WooCommerce" width={70} height={70} className="w-16 h-16 object-contain mx-auto drop-shadow-lg" />
             </div>
             <h3 className="text-2xl font-bold text-gray-900 mb-0 group-hover:text-[#8d5eb9] transition-colors duration-300">WooCommerce</h3>
           </div>
           <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#8d5eb9]/0 via-[#8d5eb9]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
         </div>
       </div>

       {/* Shopify - Duplicate */}
       <div className="group flex-shrink-0 w-80 transition-all duration-700 cursor-pointer">
         <div className="relative bg-gradient-to-br from-[#9fcc31]/20 via-[#9fcc31]/10 to-transparent backdrop-blur-xl rounded-3xl border border-[#9fcc31]/30 hover:border-[#9fcc31]/60 p-8 h-full overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-br from-[#9fcc31]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
           <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#9fcc31]/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
           <div className="text-center relative z-10">
             <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
               <Image src="https://wclkrgejvcuglowsrefl.supabase.co/storage/v1/object/public/integraties/Shopify%20logo.png" alt="Shopify" width={70} height={70} className="w-16 h-16 object-contain mx-auto drop-shadow-lg" />
             </div>
             <h3 className="text-2xl font-bold text-gray-900 mb-0 group-hover:text-[#9fcc31] transition-colors duration-300">Shopify</h3>
           </div>
           <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#9fcc31]/0 via-[#9fcc31]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
         </div>
       </div>

       {/* CCV - Duplicate */}
       <div className="group flex-shrink-0 w-80 transition-all duration-700 cursor-pointer">
         <div className="relative bg-gradient-to-br from-[#0495fe]/20 via-[#0495fe]/10 to-transparent backdrop-blur-xl rounded-3xl border border-[#0495fe]/30 hover:border-[#0495fe]/60 p-8 h-full overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-br from-[#0495fe]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
           <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#0495fe]/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
           <div className="text-center relative z-10">
             <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
               <Image src="https://wclkrgejvcuglowsrefl.supabase.co/storage/v1/object/public/integraties/CCV-icon.svg" alt="CCV" width={70} height={70} className="w-16 h-16 object-contain mx-auto drop-shadow-lg" />
             </div>
             <h3 className="text-2xl font-bold text-gray-900 mb-0 group-hover:text-[#0495fe] transition-colors duration-300">CCV</h3>
           </div>
           <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0495fe]/0 via-[#0495fe]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
         </div>
       </div>

       {/* Bol.com - Duplicate */}
       <div className="group flex-shrink-0 w-80 transition-all duration-700 cursor-pointer">
         <div className="relative bg-gradient-to-br from-[#021da4]/20 via-[#021da4]/10 to-transparent backdrop-blur-xl rounded-3xl border border-[#021da4]/30 hover:border-[#021da4]/60 p-8 h-full overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-br from-[#021da4]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
           <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#021da4]/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
           <div className="text-center relative z-10">
             <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
               <Image src="https://wclkrgejvcuglowsrefl.supabase.co/storage/v1/object/public/integraties/bol.webp" alt="Bol.com" width={70} height={70} className="w-16 h-16 object-contain mx-auto drop-shadow-lg" />
             </div>
             <h3 className="text-2xl font-bold text-gray-900 mb-0 group-hover:text-[#021da4] transition-colors duration-300">Bol.com</h3>
           </div>
           <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#021da4]/0 via-[#021da4]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
         </div>
       </div>

       {/* Magento - Duplicate */}
       <div className="group flex-shrink-0 w-80 transition-all duration-700 cursor-pointer">
         <div className="relative bg-gradient-to-br from-[#ff6000]/20 via-[#ff6000]/10 to-transparent backdrop-blur-xl rounded-3xl border border-[#ff6000]/30 hover:border-[#ff6000]/60 p-8 h-full overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-br from-[#ff6000]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
           <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#ff6000]/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
           <div className="text-center relative z-10">
             <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
               <Image src="https://wclkrgejvcuglowsrefl.supabase.co/storage/v1/object/public/integraties/magento.jpg" alt="Magento" width={70} height={70} className="w-16 h-16 object-contain mx-auto drop-shadow-lg" />
             </div>
             <h3 className="text-2xl font-bold text-gray-900 mb-0 group-hover:text-[#ff6000] transition-colors duration-300">Magento</h3>
           </div>
           <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#ff6000]/0 via-[#ff6000]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
         </div>
       </div>

       {/* Ecwid - Duplicate */}
       <div className="group flex-shrink-0 w-80 transition-all duration-700 cursor-pointer">
         <div className="relative bg-gradient-to-br from-[#facc02]/20 via-[#facc02]/10 to-transparent backdrop-blur-xl rounded-3xl border border-[#facc02]/30 hover:border-[#facc02]/60 p-8 h-full overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-br from-[#facc02]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
           <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#facc02]/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
           <div className="text-center relative z-10">
             <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
               <Image src="https://wclkrgejvcuglowsrefl.supabase.co/storage/v1/object/public/integraties/ecwid-parcxl.png" alt="Ecwid" width={70} height={70} className="w-16 h-16 object-contain mx-auto drop-shadow-lg" />
             </div>
             <h3 className="text-2xl font-bold text-gray-900 mb-0 group-hover:text-[#facc02] transition-colors duration-300">Ecwid</h3>
           </div>
           <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#facc02]/0 via-[#facc02]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
         </div>
       </div>

       {/* Lightspeed - Duplicate */}
       <div className="group flex-shrink-0 w-80 transition-all duration-700 cursor-pointer">
         <div className="relative bg-gradient-to-br from-[#f34b4d]/20 via-[#f34b4d]/10 to-transparent backdrop-blur-xl rounded-3xl border border-[#f34b4d]/30 hover:border-[#f34b4d]/60 p-8 h-full overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-br from-[#f34b4d]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
           <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#f34b4d]/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
           <div className="text-center relative z-10">
             <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
               <Image src="https://wclkrgejvcuglowsrefl.supabase.co/storage/v1/object/public/integraties/lightspeed.png" alt="Lightspeed" width={70} height={70} className="w-16 h-16 object-contain mx-auto drop-shadow-lg" />
             </div>
             <h3 className="text-2xl font-bold text-gray-900 mb-0 group-hover:text-[#f34b4d] transition-colors duration-300">Lightspeed</h3>
           </div>
           <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#f34b4d]/0 via-[#f34b4d]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
         </div>
       </div>

       {/* MijnWebwinkel - Duplicate */}
       <div className="group flex-shrink-0 w-80 transition-all duration-700 cursor-pointer">
         <div className="relative bg-gradient-to-br from-[#6ee67c]/20 via-[#6ee67c]/10 to-transparent backdrop-blur-xl rounded-3xl border border-[#6ee67c]/30 hover:border-[#6ee67c]/60 p-8 h-full overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-br from-[#6ee67c]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
           <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#6ee67c]/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
           <div className="text-center relative z-10">
             <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
               <Image src="https://wclkrgejvcuglowsrefl.supabase.co/storage/v1/object/public/integraties/mijnwebwinkel.png" alt="MijnWebwinkel" width={70} height={70} className="w-16 h-16 object-contain mx-auto drop-shadow-lg" />
             </div>
             <h3 className="text-2xl font-bold text-gray-900 mb-0 group-hover:text-[#6ee67c] transition-colors duration-300">MijnWebwinkel</h3>
           </div>
           <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#6ee67c]/0 via-[#6ee67c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
         </div>
       </div>

       {/* Wix - Duplicate */}
       <div className="group flex-shrink-0 w-80 transition-all duration-700 cursor-pointer">
         <div className="relative bg-gradient-to-br from-[#000000]/20 via-[#000000]/10 to-transparent backdrop-blur-xl rounded-3xl border border-gray-300 hover:border-gray-600 p-8 h-full overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-br from-gray-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
           <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-gray-900/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
           <div className="text-center relative z-10">
             <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
               <Image src="https://wclkrgejvcuglowsrefl.supabase.co/storage/v1/object/public/integraties/wix.png" alt="Wix" width={70} height={70} className="w-16 h-16 object-contain mx-auto drop-shadow-lg" />
             </div>
             <h3 className="text-2xl font-bold text-gray-900 mb-0 group-hover:text-black transition-colors duration-300">Wix</h3>
           </div>
           <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gray-900/0 via-gray-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
         </div>
       </div>

       {/* Prestashop - Duplicate */}
       <div className="group flex-shrink-0 w-80 transition-all duration-700 cursor-pointer">
         <div className="relative bg-gradient-to-br from-[#a6e1ef]/20 via-[#a6e1ef]/10 to-transparent backdrop-blur-xl rounded-3xl border border-[#a6e1ef]/30 hover:border-[#a6e1ef]/60 p-8 h-full overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-br from-[#a6e1ef]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
           <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#a6e1ef]/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
           <div className="text-center relative z-10">
             <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
               <Image src="https://wclkrgejvcuglowsrefl.supabase.co/storage/v1/object/public/integraties/Prestashop.png" alt="Prestashop" width={70} height={70} className="w-16 h-16 object-contain mx-auto drop-shadow-lg" />
             </div>
             <h3 className="text-2xl font-bold text-gray-900 mb-0 group-hover:text-[#a6e1ef] transition-colors duration-300">Prestashop</h3>
           </div>
           <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#a6e1ef]/0 via-[#a6e1ef]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
         </div>
       </div>
              </div>
            </div>
          </div>

          {/* Shipping Partners Road */}
          <div className="relative mt-32 h-16 bg-gradient-to-b from-gray-600 via-gray-700 to-gray-800 overflow-visible mb-20 border-t-2 border-gray-500 border-b-4 border-gray-900">
            {/* Road texture - asphalt lines */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-yellow-400/80 to-transparent" style={{
                boxShadow: '0 0 4px rgba(255,200,0,0.5)',
              }}></div>
            </div>

            {/* Moving packages container */}
            <div className="absolute inset-0 flex items-center">
              {/* Package 1 - PostNL */}
              <div className="package-box absolute bottom-2 -left-48" style={{animationDelay: '0s'}}>
                <div className="relative w-40 h-32 bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 rounded-md shadow-2xl transform-gpu border border-orange-200" style={{
                  boxShadow: '0 20px 60px rgba(0,0,0,0.3), 0 8px 16px rgba(0,0,0,0.2), inset -2px -2px 8px rgba(0,0,0,0.1), inset 2px 2px 8px rgba(255,255,255,0.5)',
                  transform: 'perspective(800px) rotateY(-18deg) rotateX(6deg)',
                }}>
                  {/* Cardboard texture overlay */}
                  <div className="absolute inset-0 opacity-10 rounded-md" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
                  }}></div>

                  {/* Package tape - horizontal */}
                  <div className="absolute top-1/2 left-0 right-0 h-5 transform -translate-y-1/2" style={{
                    background: 'linear-gradient(to bottom, rgba(255,200,100,0.9), rgba(255,180,80,0.85))',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)',
                  }}></div>
                  
                  {/* Package tape - vertical */}
                  <div className="absolute top-0 bottom-0 left-1/2 w-5 transform -translate-x-1/2" style={{
                    background: 'linear-gradient(to right, rgba(255,200,100,0.9), rgba(255,180,80,0.85))',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2), inset 1px 0 0 rgba(255,255,255,0.3)',
                  }}></div>
                  
                  {/* Logo sticker */}
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="bg-white/95 rounded-lg p-3 shadow-xl border border-orange-200/50 transform rotate-2" style={{
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.8)',
                    }}>
                      <Image 
                        src="https://wclkrgejvcuglowsrefl.supabase.co/storage/v1/object/public/logos/Postnl-icon.webp" 
                        alt="PostNL" 
                        width={70} 
                        height={70} 
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                  </div>

                  {/* Shadows for 3D depth */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-r from-black/10 to-transparent"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-l from-black/25 via-black/15 to-transparent rounded-r-md"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-black/20 via-black/10 to-transparent rounded-b-md"></div>
                </div>
              </div>

              {/* Package 2 - DHL */}
              <div className="package-box absolute bottom-2 -left-48" style={{animationDelay: '4s'}}>
                <div className="relative w-40 h-32 bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 rounded-md shadow-2xl transform-gpu border border-yellow-200" style={{
                  boxShadow: '0 20px 60px rgba(0,0,0,0.3), 0 8px 16px rgba(0,0,0,0.2), inset -2px -2px 8px rgba(0,0,0,0.1), inset 2px 2px 8px rgba(255,255,255,0.5)',
                  transform: 'perspective(800px) rotateY(-18deg) rotateX(6deg)',
                }}>
                  {/* Cardboard texture overlay */}
                  <div className="absolute inset-0 opacity-10 rounded-md" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
                  }}></div>

                  {/* Package tape - horizontal */}
                  <div className="absolute top-1/2 left-0 right-0 h-5 transform -translate-y-1/2" style={{
                    background: 'linear-gradient(to bottom, rgba(255,215,0,0.9), rgba(255,195,0,0.85))',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)',
                  }}></div>
                  
                  {/* Package tape - vertical */}
                  <div className="absolute top-0 bottom-0 left-1/2 w-5 transform -translate-x-1/2" style={{
                    background: 'linear-gradient(to right, rgba(255,215,0,0.9), rgba(255,195,0,0.85))',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2), inset 1px 0 0 rgba(255,255,255,0.3)',
                  }}></div>
                  
                  {/* Logo sticker */}
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="bg-white/95 rounded-lg p-3 shadow-xl border border-yellow-200/50 transform -rotate-2" style={{
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.8)',
                    }}>
                      <Image 
                        src="https://wclkrgejvcuglowsrefl.supabase.co/storage/v1/object/public/logos/sendwise-dhl.svg" 
                        alt="DHL" 
                        width={70} 
                        height={70} 
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                  </div>

                  {/* Shadows for 3D depth */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-r from-black/10 to-transparent"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-l from-black/25 via-black/15 to-transparent rounded-r-md"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-black/20 via-black/10 to-transparent rounded-b-md"></div>
                </div>
              </div>

              {/* Package 3 - CIRRO */}
              <div className="package-box absolute bottom-2 -left-48" style={{animationDelay: '8s'}}>
                <div className="relative w-40 h-32 bg-gradient-to-br from-sky-50 via-sky-100 to-sky-200 rounded-md shadow-2xl transform-gpu border border-sky-200" style={{
                  boxShadow: '0 20px 60px rgba(0,0,0,0.3), 0 8px 16px rgba(0,0,0,0.2), inset -2px -2px 8px rgba(0,0,0,0.1), inset 2px 2px 8px rgba(255,255,255,0.5)',
                  transform: 'perspective(800px) rotateY(-18deg) rotateX(6deg)',
                }}>
                  {/* Cardboard texture overlay */}
                  <div className="absolute inset-0 opacity-10 rounded-md" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
                  }}></div>

                  {/* Package tape - horizontal */}
                  <div className="absolute top-1/2 left-0 right-0 h-5 transform -translate-y-1/2" style={{
                    background: 'linear-gradient(to bottom, rgba(100,180,255,0.9), rgba(80,160,235,0.85))',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)',
                  }}></div>
                  
                  {/* Package tape - vertical */}
                  <div className="absolute top-0 bottom-0 left-1/2 w-5 transform -translate-x-1/2" style={{
                    background: 'linear-gradient(to right, rgba(100,180,255,0.9), rgba(80,160,235,0.85))',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2), inset 1px 0 0 rgba(255,255,255,0.3)',
                  }}></div>
                  
                  {/* Logo sticker */}
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="bg-white/95 rounded-lg p-3 shadow-xl border border-sky-200/50 transform rotate-1" style={{
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.8)',
                    }}>
                      <Image 
                        src="https://wclkrgejvcuglowsrefl.supabase.co/storage/v1/object/public/logos/cirro.png" 
                        alt="CIRRO" 
                        width={70} 
                        height={70} 
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                  </div>

                  {/* Shadows for 3D depth */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-r from-black/10 to-transparent"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-l from-black/25 via-black/15 to-transparent rounded-r-md"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-black/20 via-black/10 to-transparent rounded-b-md"></div>
                </div>
              </div>

              {/* Package 4 - Connect */}
              <div className="package-box absolute bottom-2 -left-48" style={{animationDelay: '12s'}}>
                <div className="relative w-40 h-32 bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200 rounded-md shadow-2xl transform-gpu border border-indigo-200" style={{
                  boxShadow: '0 20px 60px rgba(0,0,0,0.3), 0 8px 16px rgba(0,0,0,0.2), inset -2px -2px 8px rgba(0,0,0,0.1), inset 2px 2px 8px rgba(255,255,255,0.5)',
                  transform: 'perspective(800px) rotateY(-18deg) rotateX(6deg)',
                }}>
                  {/* Cardboard texture overlay */}
                  <div className="absolute inset-0 opacity-10 rounded-md" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
                  }}></div>

                  {/* Package tape - horizontal */}
                  <div className="absolute top-1/2 left-0 right-0 h-5 transform -translate-y-1/2" style={{
                    background: 'linear-gradient(to bottom, rgba(130,120,255,0.9), rgba(110,100,235,0.85))',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)',
                  }}></div>
                  
                  {/* Package tape - vertical */}
                  <div className="absolute top-0 bottom-0 left-1/2 w-5 transform -translate-x-1/2" style={{
                    background: 'linear-gradient(to right, rgba(130,120,255,0.9), rgba(110,100,235,0.85))',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2), inset 1px 0 0 rgba(255,255,255,0.3)',
                  }}></div>
                  
                  {/* Logo sticker */}
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="bg-white/95 rounded-lg p-3 shadow-xl border border-indigo-200/50 transform -rotate-3" style={{
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.8)',
                    }}>
                      <Image 
                        src="https://wclkrgejvcuglowsrefl.supabase.co/storage/v1/object/public/logos/sendwise%20connect%20transparant.png" 
                        alt="Connect" 
                        width={70} 
                        height={70} 
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                  </div>

                  {/* Shadows for 3D depth */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-r from-black/10 to-transparent"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-l from-black/25 via-black/15 to-transparent rounded-r-md"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-black/20 via-black/10 to-transparent rounded-b-md"></div>
                </div>
              </div>

              {/* Duplicate packages for smooth infinite loop */}
              {/* Package 5 - PostNL (duplicate) */}
              <div className="package-box absolute bottom-2 -left-48" style={{animationDelay: '16s'}}>
                <div className="relative w-40 h-32 bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 rounded-md shadow-2xl transform-gpu border border-orange-200" style={{
                  boxShadow: '0 20px 60px rgba(0,0,0,0.3), 0 8px 16px rgba(0,0,0,0.2), inset -2px -2px 8px rgba(0,0,0,0.1), inset 2px 2px 8px rgba(255,255,255,0.5)',
                  transform: 'perspective(800px) rotateY(-18deg) rotateX(6deg)',
                }}>
                  {/* Cardboard texture overlay */}
                  <div className="absolute inset-0 opacity-10 rounded-md" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
                  }}></div>

                  {/* Package tape - horizontal with realistic texture */}
                  <div className="absolute top-1/2 left-0 right-0 h-5 transform -translate-y-1/2" style={{
                    background: 'linear-gradient(to bottom, rgba(255,200,100,0.9), rgba(255,180,80,0.85))',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)',
                  }}></div>
                  
                  {/* Package tape - vertical with realistic texture */}
                  <div className="absolute top-0 bottom-0 left-1/2 w-5 transform -translate-x-1/2" style={{
                    background: 'linear-gradient(to right, rgba(255,200,100,0.9), rgba(255,180,80,0.85))',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2), inset 1px 0 0 rgba(255,255,255,0.3)',
                  }}></div>
                  
                  {/* Logo sticker on package */}
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="bg-white/95 rounded-lg p-3 shadow-xl border border-orange-200/50 transform rotate-2" style={{
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.8)',
                    }}>
                      <Image 
                        src="https://wclkrgejvcuglowsrefl.supabase.co/storage/v1/object/public/logos/Postnl-icon.webp" 
                        alt="PostNL" 
                        width={70} 
                        height={70} 
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                  </div>

                  {/* Top edge highlight */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                  
                  {/* Left edge shadow */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-r from-black/10 to-transparent"></div>
                  
                  {/* Right edge shadow for 3D depth */}
                  <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-l from-black/25 via-black/15 to-transparent rounded-r-md"></div>
                  
                  {/* Bottom edge shadow */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-black/20 via-black/10 to-transparent rounded-b-md"></div>
                </div>
              </div>

              {/* Package 6 - DHL (duplicate) */}
              <div className="package-box absolute bottom-2 -left-48" style={{animationDelay: '20s'}}>
                <div className="relative w-40 h-32 bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 rounded-md shadow-2xl transform-gpu border border-yellow-200" style={{
                  boxShadow: '0 20px 60px rgba(0,0,0,0.3), 0 8px 16px rgba(0,0,0,0.2), inset -2px -2px 8px rgba(0,0,0,0.1), inset 2px 2px 8px rgba(255,255,255,0.5)',
                  transform: 'perspective(800px) rotateY(-18deg) rotateX(6deg)',
                }}>
                  {/* Cardboard texture overlay */}
                  <div className="absolute inset-0 opacity-10 rounded-md" style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
                  }}></div>

                  {/* Package tape - horizontal with realistic texture */}
                  <div className="absolute top-1/2 left-0 right-0 h-5 transform -translate-y-1/2" style={{
                    background: 'linear-gradient(to bottom, rgba(255,215,0,0.9), rgba(255,195,0,0.85))',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.3)',
                  }}></div>
                  
                  {/* Package tape - vertical with realistic texture */}
                  <div className="absolute top-0 bottom-0 left-1/2 w-5 transform -translate-x-1/2" style={{
                    background: 'linear-gradient(to right, rgba(255,215,0,0.9), rgba(255,195,0,0.85))',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2), inset 1px 0 0 rgba(255,255,255,0.3)',
                  }}></div>
                  
                  {/* Logo sticker on package */}
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="bg-white/95 rounded-lg p-3 shadow-xl border border-yellow-200/50 transform -rotate-2" style={{
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.8)',
                    }}>
                      <Image 
                        src="https://wclkrgejvcuglowsrefl.supabase.co/storage/v1/object/public/logos/sendwise-dhl.svg" 
                        alt="DHL" 
                        width={70} 
                        height={70} 
                        className="w-16 h-16 object-contain"
                      />
                    </div>
                  </div>

                  {/* Top edge highlight */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                  
                  {/* Left edge shadow */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-r from-black/10 to-transparent"></div>
                  
                  {/* Right edge shadow for 3D depth */}
                  <div className="absolute right-0 top-0 bottom-0 w-2 bg-gradient-to-l from-black/25 via-black/15 to-transparent rounded-r-md"></div>
                  
                  {/* Bottom edge shadow */}
                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-black/20 via-black/10 to-transparent rounded-b-md"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center px-4 relative z-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-3 rounded-full border border-blue-200 shadow-md">
              <Layers className="text-[#0066ff]" size={20} />
              <span className="text-gray-700 font-medium">Mis je een integratie? We bouwen hem voor je!</span>
            </div>
          </div>
        </section>

      {/* Slimme Software Section with 3D Perspective Scroll Effect */}
      <section className="py-32 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Slimme <span className="text-gradient">software</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Beheer al je verzendingen met onze gebruiksvriendelijke software
            </p>
          </div>

          {/* 3D Perspective Screenshot Container */}
          <div className="perspective-container relative" style={{perspective: '2000px'}}>
            <div 
              className="software-screenshot relative mx-auto max-w-6xl transition-transform duration-700 ease-out"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-200/50" style={{
                boxShadow: '0 50px 100px rgba(0,0,0,0.3), 0 20px 50px rgba(0,0,0,0.2)',
              }}>
          <Image
                  src="https://website.parcxl.nl/wp-content/uploads/2025/10/Scherm­afbeelding-2025-10-10-om-16.13.20.png" 
                  alt="Sendwise Software Dashboard" 
                  width={1200} 
                  height={800} 
                  className="w-full h-auto"
                  priority
                />
                
                {/* Shine effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none"></div>
              </div>

              {/* Floating glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#0066ff]/20 via-purple-500/20 to-pink-500/20 blur-3xl -z-10 opacity-50"></div>
            </div>
          </div>

          {/* Feature Detail Section */}
          <div className="mt-32 grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold">
                Alles-in-één <span className="text-gradient">verzendsoftware</span>
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Met Sendwise heb je alle verzendtools die je nodig hebt in één simpel platform. Geen slotjes, geen verborgen kosten en geen ingewikkelde menu's. Je koppelt je webshop in minuten, maakt eenvoudig bulklabels aan en krijgt realtime inzicht in je verzendingen.
              </p>

              {/* Feature highlights */}
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 group/badge">
                    {/* Animated rotating gradient background */}
                    <div className="absolute inset-0 rounded-xl overflow-hidden">
                      <div className="absolute inset-0 opacity-30 animate-spin-slow" style={{
                        background: 'conic-gradient(from 0deg, #0066ff, #8b5cf6, #ec4899, #0066ff)',
                        animationDuration: '6s',
                      }}></div>
                    </div>
                    
                    {/* Main badge with glassmorphism */}
                    <div className="relative w-full h-full bg-gradient-to-br from-white via-blue-50/80 to-indigo-50/60 backdrop-blur-xl rounded-xl flex items-center justify-center border border-[#0066ff]/20 shadow-xl transition-all duration-500 group-hover/badge:scale-110 group-hover/badge:shadow-2xl">
                      <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#0066ff] via-indigo-600 to-purple-600 font-bold text-2xl">#1</span>
                    </div>
                    
                    {/* Pulsing glow rings */}
                    <div className="absolute -inset-1.5 rounded-xl opacity-40 group-hover/badge:opacity-60 transition-opacity duration-500" style={{
                      background: 'radial-gradient(circle, rgba(0,102,255,0.3) 0%, transparent 70%)',
                      animation: 'pulse 3s ease-in-out infinite',
                    }}></div>
                    
                    {/* Second glow ring with delay */}
                    <div className="absolute -inset-2.5 rounded-xl opacity-20 group-hover/badge:opacity-40 transition-opacity duration-500" style={{
                      background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)',
                      animation: 'pulse 3s ease-in-out infinite 0.5s',
                    }}></div>
                  </div>
                  <span className="text-gray-700 font-medium text-lg">Nummer #1 voor webshops in Nederland</span>
                </div>
              </div>
            </div>

            {/* Right: Screenshot */}
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-200/50 transition-all duration-500 group-hover:shadow-3xl group-hover:scale-[1.02]" style={{
                boxShadow: '0 30px 70px rgba(0,0,0,0.25), 0 10px 30px rgba(0,0,0,0.15)',
              }}>
                <Image 
                  src="https://website.parcxl.nl/wp-content/uploads/2025/10/Scherm­afbeelding-2025-10-10-om-16.28.46.png" 
                  alt="Sendwise Bulk Label Creation" 
                  width={800} 
                  height={600} 
                  className="w-full h-auto"
                />
                
                {/* Shine effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none"></div>
              </div>

              {/* Floating glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#0066ff]/15 via-indigo-500/15 to-purple-500/15 blur-2xl -z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Waarom Sendwise - USP's */}
      <section id="features" className="py-32 relative overflow-hidden">
        {/* Fancy animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/40"></div>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-br from-[#0066ff]/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 -right-40 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-pink-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Waarom <span className="text-gradient">Sendwise</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Verzenden zoals het hoort: eerlijk, transparant en voordelig
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto" style={{perspective: '2000px', perspectiveOrigin: 'center center'}}>
            {/* USP 1 - Geen kleine lettertjes */}
            <div className="usp-card group relative cursor-pointer" style={{transformStyle: 'preserve-3d', willChange: 'transform, opacity'}}>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-10 border border-[#0066ff]/20 hover:border-[#0066ff]/40 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0066ff]/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-[#0066ff]/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0066ff] to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[#0066ff] transition-colors duration-300">
                    Geen kleine lettertjes
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Wat je ziet is wat je krijgt. Geen verborgen voorwaarden, geen verrassingen achteraf.
                  </p>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#0066ff]/0 via-[#0066ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* USP 2 - Geen abonnementskosten */}
            <div className="usp-card group relative cursor-pointer" style={{transformStyle: 'preserve-3d', willChange: 'transform, opacity'}}>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-10 border border-green-500/20 hover:border-green-500/40 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-green-500/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-green-600 transition-colors duration-300">
                    Geen abonnementskosten
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    €0 per maand. Betaal alleen voor wat je verstuurt. Geen vast contract, geen verplichtingen.
                  </p>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500/0 via-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            {/* USP 3 - Beste tarieven */}
            <div className="usp-card group relative cursor-pointer" style={{transformStyle: 'preserve-3d', willChange: 'transform, opacity'}}>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-10 border border-purple-500/20 hover:border-purple-500/40 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-600 transition-colors duration-300">
                    De beste tarieven
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Onze tarieven zijn altijd custom. We gaan in gesprek en komen samen tot een passend tarief.
                  </p>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-500/0 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        {/* Light gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-indigo-50/60 to-purple-50/70"></div>
        
        {/* Moving background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-[#0066ff]/20 to-blue-400/20 rounded-full blur-3xl animate-float" style={{animationDuration: '25s'}}></div>
          <div className="absolute top-1/3 right-10 w-80 h-80 bg-gradient-to-br from-purple-400/15 to-pink-400/15 rounded-full blur-3xl animate-float" style={{animationDuration: '30s', animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-gradient-to-br from-indigo-400/20 to-cyan-400/15 rounded-full blur-3xl animate-float" style={{animationDuration: '28s', animationDelay: '4s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-pink-400/15 to-purple-500/15 rounded-full blur-3xl animate-float" style={{animationDuration: '22s', animationDelay: '1s'}}></div>
        </div>

        {/* Backdrop blur overlay */}
        <div className="absolute inset-0 backdrop-blur-[3px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-xl px-6 py-3 rounded-full mb-8 border border-[#0066ff]/20 shadow-lg">
            <Target className="text-[#0066ff]" size={18} />
            <span className="text-gray-700 text-sm font-semibold">Altijd gratis • Geen abonnementskosten</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Klaar om <span className="text-gradient">wise</span> te verzenden?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Bespaar duizenden euro's per jaar met Sendwise
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-gradient-to-r from-[#0066ff] to-blue-600 text-white px-8 py-3.5 rounded-full hover:shadow-2xl transition-all shadow-lg hover:scale-105 flex items-center justify-center group font-semibold">
              Direct starten
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </button>
            <button 
              onClick={() => setShowContactModal(true)}
              className="bg-white/80 backdrop-blur-xl border-2 border-[#0066ff]/30 text-gray-700 px-8 py-3.5 rounded-full hover:border-[#0066ff] hover:bg-white transition-all font-semibold shadow-lg"
            >
              Neem contact op
            </button>
          </div>

          <p className="mt-8 text-gray-500 text-sm">Geen verplichtingen • Persoonlijke ondersteuning • Direct aan de slag</p>

          {/* Contact info */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="mailto:info@sendwise.nl" className="flex items-center gap-2 text-gray-700 hover:text-[#0066ff] transition-colors group">
              <div className="w-10 h-10 bg-white/80 backdrop-blur-xl rounded-full flex items-center justify-center border border-[#0066ff]/20 group-hover:border-[#0066ff]/40 transition-all shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="font-medium">info@sendwise.nl</span>
            </a>

            <a href="tel:+31619156123" className="flex items-center gap-2 text-gray-700 hover:text-[#0066ff] transition-colors group">
              <div className="w-10 h-10 bg-white/80 backdrop-blur-xl rounded-full flex items-center justify-center border border-[#0066ff]/20 group-hover:border-[#0066ff]/40 transition-all shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="font-medium">+31 6 19156123</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Page */}
      <div 
        className={`fixed inset-0 z-[100] bg-gradient-to-br from-blue-50 via-white to-indigo-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          showContactModal ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-300/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-indigo-300/20 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-cyan-300/20 rounded-full blur-3xl animate-float-reverse"></div>
        </div>

        {/* Close button - Fixed top left */}
        <button
          onClick={() => setShowContactModal(false)}
          className="fixed top-8 left-8 w-14 h-14 bg-white/80 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg z-10 group border border-gray-200/50"
        >
          <ArrowRight className="text-gray-600 group-hover:text-[#0066ff] rotate-180" size={24} />
        </button>

        {/* Content */}
        <div className="relative h-full overflow-y-auto">
          <div className="min-h-full flex items-center justify-center px-4 py-20">
            <div className="max-w-5xl w-full">
              {/* Header */}
              <div className="text-center mb-16">
                <div 
                  className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-5 py-2.5 rounded-full border border-blue-200/50 mb-8 shadow-sm"
                  style={{
                    animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards',
                    opacity: 0
                  }}
                >
                  <Sparkles className="text-[#0066ff]" size={20} />
                  <span className="text-[#0066ff] text-sm font-semibold">Neem contact op</span>
                </div>
                <h1 
                  className="text-6xl md:text-7xl font-bold mb-6"
                  style={{
                    animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards',
                    opacity: 0
                  }}
                >
                  Laten we <span className="text-gradient">samen</span> starten
                </h1>
                <p 
                  className="text-xl text-gray-600 max-w-2xl mx-auto"
                  style={{
                    animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards',
                    opacity: 0
                  }}
                >
                  Heb je vragen of wil je direct aan de slag? Neem contact met ons op en ontdek hoe Sendwise jouw verzendproces transformeert.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Email Card */}
                <a 
                  href="mailto:info@sendwise.nl"
                  className="group relative bg-white/60 backdrop-blur-xl rounded-3xl p-10 hover:bg-white transition-all duration-300 border border-gray-200/50 hover:border-[#0066ff]/50 hover:shadow-2xl overflow-hidden"
                  style={{
                    animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards',
                    opacity: 0
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xl">
                      <Mail className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Email ons</h3>
                    <p className="text-gray-600 mb-4">
                      Stuur ons een email en we reageren binnen 24 uur
                    </p>
                    <p className="text-[#0066ff] font-semibold text-lg group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                      info@sendwise.nl
                      <ArrowRight size={20} />
                    </p>
                  </div>
                </a>

                {/* Phone Card */}
                <a 
                  href="tel:+31619156123"
                  className="group relative bg-white/60 backdrop-blur-xl rounded-3xl p-10 hover:bg-white transition-all duration-300 border border-gray-200/50 hover:border-[#0066ff]/50 hover:shadow-2xl overflow-hidden"
                  style={{
                    animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards',
                    opacity: 0
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#0066ff] to-blue-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xl">
                      <Phone className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Bel ons</h3>
                    <p className="text-gray-600 mb-4">
                      Direct persoonlijk contact met ons team
                    </p>
                    <p className="text-[#0066ff] font-semibold text-lg group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                      +31 6 19156123
                      <ArrowRight size={20} />
                    </p>
                  </div>
                </a>
              </div>

              {/* CTA Section */}
              <div 
                className="text-center pt-12 border-t border-gray-200/50"
                style={{
                  animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.35s forwards',
                  opacity: 0
                }}
              >
                <p className="text-lg text-gray-600 mb-6">
                  Direct aan de slag zonder contact?
                </p>
                <button className="bg-gradient-to-r from-[#0066ff] to-blue-600 text-white px-10 py-4 rounded-full hover:shadow-2xl transition-all hover:scale-105 font-semibold inline-flex items-center gap-3 text-lg shadow-xl">
                  Start nu gratis
                  <ArrowRight size={22} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative py-16 overflow-hidden">
        {/* Base gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950"></div>

        {/* Mouse-tracking radial gradient */}
        <div 
          className="absolute inset-0 opacity-40 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle 600px at ${footerMousePosition.x}% ${footerMousePosition.y}%, rgba(0, 102, 255, 0.3) 0%, transparent 80%)`
          }}
        ></div>

        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl animate-float-reverse"></div>
        </div>

        {/* Glassmorphic overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent backdrop-blur-sm"></div>

        {/* Content */}
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              <div className="col-span-2">
          <Image
                  src="/sendwise-logo.png" 
                  alt="Sendwise" 
                  width={140} 
                  height={40}
                  className="h-10 w-auto mb-6 brightness-0 invert"
                />
                <p className="text-gray-300 max-w-md leading-relaxed mb-6">
                  Het slimste verzendplatform voor webshops in Nederland. Bespaar tijd, geld en verhoog de klanttevredenheid.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-white mb-4 text-lg">Informatie</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="https://api.sendwise.nl/docs/sendwise-orders" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#0066ff] transition-colors">Orders API</a>
                  </li>
                  <li>
                    <a href="https://helpcenter.sendwise.nl" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#0066ff] transition-colors">Helpcenter</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-700/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2025 Sendwise. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <a href="#" className="text-gray-300 hover:text-[#0066ff] transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-300 hover:text-[#0066ff] transition-colors">Algemene Voorwaarden</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
