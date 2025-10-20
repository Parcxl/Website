'use client';

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ArrowRight, Zap, Target, TrendingDown, Shield, Clock, Truck, Mail, BarChart3, CheckCircle, CheckCircle2, Sparkles } from "lucide-react";

export default function ConnectPage() {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [signupStep, setSignupStep] = useState(1);
  const [formData, setFormData] = useState({
    bedrijfsnaam: '',
    kvk: '',
    website: '',
    voornaam: '',
    achternaam: '',
    email: '',
    telefoon: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submittedData, setSubmittedData] = useState<{voornaam?: string; email?: string}>({});
  const [showOverlay, setShowOverlay] = useState(false);
  const [logoTransforms, setLogoTransforms] = useState({
    topLeft: { rotateX: 0, rotateY: 0, translateZ: 0 },
    topRight: { rotateX: 0, rotateY: 0, translateZ: 0 },
    bottomLeft: { rotateX: 0, rotateY: 0, translateZ: 0 },
    bottomRight: { rotateX: 0, rotateY: 0, translateZ: 0 },
  });
  const [showConnectIcon, setShowConnectIcon] = useState(false);
  const [showConnectionLines, setShowConnectionLines] = useState(false);
  const [showDataParticles, setShowDataParticles] = useState(false);
  const [particleKey, setParticleKey] = useState(0);
  const [centerPos, setCenterPos] = useState({ xPercent: 50, yPercent: 50 });
  const [iconScale, setIconScale] = useState(1);

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

  // 3D Perspective Scroll Effect for Connect Extra Cards
  React.useEffect(() => {
    const cards = document.querySelectorAll('.connect-extra-card') as NodeListOf<HTMLElement>;
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
        
        // Calculate perspective transforms with different intensities per card
        const intensity = Math.abs(clampedProgress);
        const direction = clampedProgress > 0 ? 1 : -1;
        
        // Different rotation amounts for each card for variety
        let rotateX, rotateY, translateZ, scale;
        
        if (index === 0) {
          // Left card - rotate to the left
          rotateX = clampedProgress * 20;
          rotateY = -intensity * 25; // Negative for left rotation
          translateZ = intensity * 30;
          scale = 1 - intensity * 0.05;
        } else if (index === 1) {
          // Middle card - rotate downward
          rotateX = intensity * 25; // Positive for downward rotation
          rotateY = 0; // No Y rotation for middle
          translateZ = intensity * 40;
          scale = 1 - intensity * 0.05;
        } else {
          // Right card - rotate to the right
          rotateX = clampedProgress * 20;
          rotateY = intensity * 25; // Positive for right rotation
          translateZ = intensity * 50;
          scale = 1 - intensity * 0.05;
        }
        
        // Apply transform with hardware acceleration
        card.style.transition = 'none';
        card.style.transform = 
          `translate3d(0, 0, ${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
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

  // Form handlers for signup modal
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('/api/account-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Er is iets misgegaan bij het aanmaken van je account');
      }

      setSubmittedData({
        voornaam: formData.voornaam,
        email: formData.email
      });
      setSubmitSuccess(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Er is iets misgegaan');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Show overlay after 2 seconds
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // 3D Perspective scroll effect for individual logos + icon scale
  React.useEffect(() => {
    const handleScroll = () => {
      const networkSection = document.querySelector('.network-visualization');
      if (networkSection) {
        const rect = networkSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate if element is in viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
          // Calculate scroll progress (0 to 1)
          const scrollProgress = Math.max(0, Math.min(1, 
            (windowHeight - rect.top) / (windowHeight + rect.height)
          ));
          
          // Apply different 3D transforms for each logo based on position
          const intensity = (scrollProgress - 0.5) * 2; // -1 to 1
          
          setLogoTransforms({
            topLeft: {
              rotateX: intensity * -15,
              rotateY: intensity * -15,
              translateZ: Math.abs(intensity) * 50,
            },
            topRight: {
              rotateX: intensity * -15,
              rotateY: intensity * 15,
              translateZ: Math.abs(intensity) * 50,
            },
            bottomLeft: {
              rotateX: intensity * 15,
              rotateY: intensity * -15,
              translateZ: Math.abs(intensity) * 50,
            },
            bottomRight: {
              rotateX: intensity * 15,
              rotateY: intensity * 15,
              translateZ: Math.abs(intensity) * 50,
            },
          });

          // Icon scale animation - grows as you scroll down
          const scaleProgress = Math.max(0, Math.min(1, scrollProgress));
          const newScale = 1 + (scaleProgress * 0.5); // Scale from 1 to 1.5
          setIconScale(newScale);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compute exact visual center of the icon to end particle animations exactly at that point
  React.useEffect(() => {
    const computeCenter = () => {
      const container = document.querySelector('.network-visualization') as HTMLElement | null;
      const centerEl = document.querySelector('.connect-center') as HTMLElement | null;
      if (!container || !centerEl) return;
      const cRect = container.getBoundingClientRect();
      const iRect = centerEl.getBoundingClientRect();
      const centerX = ((iRect.left + iRect.width / 2 - cRect.left) / cRect.width) * 100;
      const centerY = ((iRect.top + iRect.height / 2 - cRect.top) / cRect.height) * 100;
      setCenterPos({ xPercent: centerX, yPercent: centerY });
    };
    computeCenter();
    window.addEventListener('resize', computeCenter);
    window.addEventListener('scroll', computeCenter, { passive: true });
    return () => {
      window.removeEventListener('resize', computeCenter);
      window.removeEventListener('scroll', computeCenter);
    };
  }, []);

  // Connect icon animation after 3 seconds when section is visible
  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    let particleInterval: NodeJS.Timeout;
    
    const checkVisibility = () => {
      const networkSection = document.querySelector('.network-visualization');
      if (networkSection) {
        const rect = networkSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Check if section is in viewport
        if (rect.top < windowHeight && rect.bottom > 0) {
          console.log('Network section is visible, starting 3s timer');
          timer = setTimeout(() => {
            console.log('Timer finished, showing icon');
            // Start with blur effect
            setShowConnectIcon(true);
            
            // Show connection lines after icon animation completes
            setTimeout(() => {
              console.log('Showing connection lines');
              setShowConnectionLines(true);
              
              // Show data particles after lines animation completes
              setTimeout(() => {
                setShowDataParticles(true);
                
                // Start continuous particle generation every 0.5 seconds
                particleInterval = setInterval(() => {
                  console.log('Creating new particles');
                  setParticleKey(prev => prev + 1);
                }, 500);
                
                // Store interval for cleanup (no timeout - runs indefinitely)
              }, 1600); // Wait for lines animation to complete
            }, 600); // Wait for icon animation to complete
          }, 3000);
        } else {
          console.log('Network section not visible');
          if (timer) clearTimeout(timer);
          if (particleInterval) clearInterval(particleInterval);
        }
      }
    };

    // Check on scroll
    window.addEventListener('scroll', checkVisibility, { passive: true });
    checkVisibility(); // Initial check

    return () => {
      window.removeEventListener('scroll', checkVisibility);
      if (timer) clearTimeout(timer);
      if (particleInterval) clearInterval(particleInterval);
    };
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
       <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0065ff]/20 via-[#0065ff]/10 to-[#0065ff]/30 animate-gradient-bg">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#0065ff]/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-20 right-0 w-80 h-80 bg-[#0065ff]/20 rounded-full blur-3xl animate-float-slow animation-delay-200"></div>
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-[#0065ff]/25 rounded-full blur-3xl animate-float-reverse animation-delay-400"></div>
        </div>
        
        {/* Backdrop blur overlay */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-md -z-10"></div>

        {/* Main Content */}
        <div className="relative z-10 text-center">
          {/* Connect with gradient */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none" style={{ marginTop: '6rem' }}>
            <span 
              className="bg-gradient-to-r from-[#0064ff] via-[#0064ff]/80 to-[#0064ff]/60 bg-clip-text text-transparent animate-gradient drop-shadow-2xl"
              style={{
                backgroundSize: '200% 200%',
                animation: 'gradient 3s ease infinite',
                filter: 'drop-shadow(0 0 20px rgba(0, 100, 255, 0.3))'
              }}
            >
              Connect
            </span>
          </h1>
        </div>

        {/* Overlay that appears 2 seconds after page load */}
        {showOverlay && (
          <div className="absolute inset-0 pointer-events-none">
            <div 
              className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/5 to-indigo-500/10 opacity-0 transition-opacity duration-1000"
              style={{ 
                zIndex: 1,
                opacity: showOverlay ? 1 : 0
              }}
            ></div>
          </div>
        )}

      </section>

      {/* Hero Section - Same as Homepage */}
      <section className="relative pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-100/60 via-cyan-50/60 to-indigo-100/60">
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
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                De <span className="text-gradient">nieuwe</span> manier van verzenden
              </h1>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-full border border-blue-200/50 shadow-sm">
                  <Zap className="text-[#0066ff]" size={18} />
                  <span className="text-gray-700 text-sm font-medium">Slimmer</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-full border border-blue-200/50 shadow-sm">
                  <TrendingDown className="text-[#0066ff]" size={18} />
                  <span className="text-gray-700 text-sm font-medium">Goedkoper</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-3 rounded-full border border-blue-200/50 shadow-sm">
                  <Clock className="text-[#0066ff]" size={18} />
                  <span className="text-gray-700 text-sm font-medium">Sneller</span>
                </div>
              </div>

            </div>

            <div className="relative animate-slide-in-right">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white/60 backdrop-blur-md p-6 rounded-3xl border border-white/50 shadow-2xl">
                <Image
                  src="/connect-buurt.png" 
                  alt="Sendwise Connect Dashboard" 
                  width={600} 
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
                
                {/* Animated line from center to floating cloud */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* SVG Line */}
                  <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 20 }}>
                    <defs>
                      <linearGradient id="connectLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0066ff" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
                        <stop offset="100%" stopColor="#0066ff" stopOpacity="0.8" />
                      </linearGradient>
                      <filter id="connectLineGlow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge> 
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <path
                      d="M 300 200 Q 220 160 140 140"
                      stroke="url(#connectLineGradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      filter="url(#connectLineGlow)"
                      className="animate-draw-hero-line hidden"
                      strokeDasharray="16"
                      strokeDashoffset="16"
                    />
                  </svg>
                  
                  {/* Floating Cloud */}
                  <div 
                    className="absolute animate-float-cloud hidden md:block"
                    style={{ 
                      left: '180px', 
                      top: '110px',
                      zIndex: 30
                    }}
                  >
                    <div className="relative">
                      {/* Cloud Background */}
                      <div className="bg-white/90 backdrop-blur-md rounded-xl px-3 py-2 shadow-xl border border-white/50">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-xs font-semibold text-gray-800">Connect actief</span>
                        </div>
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
                      <div className="bg-white/90 backdrop-blur-md rounded-xl px-2 py-1.5 shadow-xl border border-white/50">
                        <div className="flex items-center gap-1">
                          <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-[10px] font-semibold text-gray-800">Connect actief</span>
                        </div>
                      </div>
                      
                      {/* Cloud Tail */}
                      <div 
                        className="absolute bg-white/90 backdrop-blur-md w-1.5 h-1.5 transform rotate-45 -bottom-0.5 right-3 border-l border-b border-white/50"
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
      </section>

      {/* What is Connect Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50/60 via-cyan-50/60 to-indigo-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Wat is <span className="text-gradient">Connect</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Met Connect maken we verzenden een stuk efficiënter. Onze intelligente methode kiest automatisch de beste vervoerder en bespaart op kosten door slimme logistieke oplossingen.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#0066ff] to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Meerdere vervoerders</h3>
                    <p className="text-gray-600">
                      We werken met PostNL, DHL, DPD en meer. Voor elke zending vergelijken we alle vervoerders en kiezen de beste.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#0066ff] to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingDown className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Besparen op kosten</h3>
                    <p className="text-gray-600">
                      We rijden in bulk naar buurlanden en dragen direct over aan lokale vervoerders. Dit voorkomt dubbele verzending en bespaart veel geld.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#0066ff] to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Automatisch kiezen</h3>
                    <p className="text-gray-600">
                      Connect kiest automatisch de goedkoopste en beste vervoerder voor elke zending. Jij hoeft niks te doen.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
                <div className="space-y-6">
                  <div className="text-center">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Hoe werkt Connect?</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-blue-50/50 rounded-lg">
                      <div className="w-8 h-8 bg-[#0066ff] rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                      <span className="text-gray-700">Jij maakt een zending aan</span>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-blue-50/50 rounded-lg">
                      <div className="w-8 h-8 bg-[#0066ff] rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                      <span className="text-gray-700">Connect analyseert alle opties</span>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-blue-50/50 rounded-lg">
                      <div className="w-8 h-8 bg-[#0066ff] rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                      <span className="text-gray-700">Beste vervoerder wordt gekozen</span>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-green-50/50 rounded-lg">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">✓</div>
                      <span className="text-gray-700">Zending wordt verzonden</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Connect Extra's Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50/60 via-cyan-50/60 to-indigo-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Connect <span className="text-gradient">extra's</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exclusieve functies die alleen beschikbaar zijn voor Connect gebruikers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="connect-extra-card group relative cursor-pointer" style={{transformStyle: 'preserve-3d', willChange: 'transform, opacity'}}>
              <div className="text-center p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#0066ff] to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <Truck className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">Pickup Service</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    Werk altijd met dezelfde pickup service, ongeacht de vervoerder. Automatische ophaling op kantoor of thuis.
                  </p>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 via-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            <div className="connect-extra-card group relative cursor-pointer" style={{transformStyle: 'preserve-3d', willChange: 'transform, opacity'}}>
              <div className="text-center p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-green-500/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#0066ff] to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">Branded Tracking</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    Klanten volgen hun pakket via jouw eigen tracking pagina in jouw huisstijl, ongeacht de vervoerder.
                  </p>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/0 via-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>

            <div className="connect-extra-card group relative cursor-pointer" style={{transformStyle: 'preserve-3d', willChange: 'transform, opacity'}}>
              <div className="text-center p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating particles */}
                <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#0066ff] to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">Branded Emails</h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    Alle e-mail updates komen van jouw merk in jouw huisstijl, ongeacht de vervoerder.
                  </p>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-200/50 shadow-sm">
              <CheckCircle className="text-[#0066ff]" size={20} />
              <span className="text-[#0066ff] font-semibold">Consistente ervaring voor jouw klanten</span>
            </div>
          </div>
        </div>
      </section>

      {/* Connect Network Section with 3D Perspective */}
      <section className="py-32 bg-gradient-to-br from-white via-blue-50/20 to-indigo-50/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Het <span className="text-gradient">Connect</span> netwerk
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We werken samen met de beste vervoerders om jouw pakketten optimaal te verzenden
            </p>
          </div>

          {/* 3D Perspective Container */}
          <div className="perspective-container relative" style={{perspective: '2000px'}}>
            <div 
              className="network-visualization relative mx-auto max-w-4xl h-[500px]"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Center Icon/Text - Connect Netwerk */}
              <div className="connect-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative">
                  {/* Text */}
                  <h3 
                    className={`text-5xl md:text-7xl font-bold text-gradient text-center transition-all duration-700 ease-in-out ${
                      showConnectIcon ? 'opacity-0 scale-75 blur-sm' : 'opacity-100 scale-100 blur-0'
                    }`}
                  >
                    Connect<br/>Netwerk
                  </h3>
                  
                   {/* Icon */}
                   <div 
                     className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-in-out ${
                       showConnectIcon ? 'opacity-100 blur-0' : 'opacity-0 scale-75 blur-sm'
                     }`}
                   >
                     <Image
                       src="/connect-icon.png"
                       alt="Connect Icon"
                       width={120}
                       height={120}
                       className="w-30 h-30 mx-auto"
                       style={{
                         transform: `scale(${showConnectIcon ? iconScale : 0.8})`,
                         transition: 'transform 0.1s ease-out'
                       }}
                     />
                   </div>
                </div>
              </div>

              {/* Logo in Top Left Corner */}
              <div 
                className="absolute top-0 left-0 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center transition-all duration-700 ease-out hover:scale-110" 
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateX(${logoTransforms.topLeft.rotateX}deg) rotateY(${logoTransforms.topLeft.rotateY}deg) translateZ(${logoTransforms.topLeft.translateZ}px)`,
                }}
              >
                <Image
                  src="/dpd.png"
                  alt="DPD"
                  width={160}
                  height={80}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>

              {/* Logo in Top Right Corner */}
              <div 
                className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center transition-all duration-700 ease-out hover:scale-110" 
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateX(${logoTransforms.topRight.rotateX}deg) rotateY(${logoTransforms.topRight.rotateY}deg) translateZ(${logoTransforms.topRight.translateZ}px)`,
                }}
              >
                <Image
                  src="/gls.png"
                  alt="GLS"
                  width={160}
                  height={80}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>

              {/* Logo in Bottom Left Corner */}
              <div 
                className="absolute bottom-0 left-0 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center transition-all duration-700 ease-out hover:scale-110" 
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateX(${logoTransforms.bottomLeft.rotateX}deg) rotateY(${logoTransforms.bottomLeft.rotateY}deg) translateZ(${logoTransforms.bottomLeft.translateZ}px)`,
                }}
              >
                <Image
                  src="/cirro.png"
                  alt="CIRRO"
                  width={160}
                  height={80}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>

              {/* Logo in Bottom Right Corner */}
              <div 
                className="absolute bottom-0 right-0 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center transition-all duration-700 ease-out hover:scale-110" 
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateX(${logoTransforms.bottomRight.rotateX}deg) rotateY(${logoTransforms.bottomRight.rotateY}deg) translateZ(${logoTransforms.bottomRight.translateZ}px)`,
                }}
              >
                <Image
                  src="/dhl.png"
                  alt="DHL"
                  width={160}
                  height={80}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />
              </div>

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 5 }}>
                <defs>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Line from center to Top Left (DPD) */}
                <line
                  x1="50%"
                  y1="50%"
                  x2="10%"
                  y2="10%"
                  stroke="#25a5ff"
                  strokeWidth="3"
                  filter="url(#glow)"
                  style={{
                    strokeDasharray: showConnectionLines ? "1000" : "0 1000",
                    strokeDashoffset: showConnectionLines ? "0" : "1000",
                    opacity: showConnectionLines ? 1 : 0,
                    transition: 'all 1.5s ease-out',
                  }}
                />
                
                {/* Line from center to Top Right (GLS) */}
                <line
                  x1="50%"
                  y1="50%"
                  x2="90%"
                  y2="10%"
                  stroke="#25a5ff"
                  strokeWidth="3"
                  filter="url(#glow)"
                  style={{
                    strokeDasharray: showConnectionLines ? "1000" : "0 1000",
                    strokeDashoffset: showConnectionLines ? "0" : "1000",
                    opacity: showConnectionLines ? 1 : 0,
                    transition: 'all 1.5s ease-out',
                  }}
                />
                
                {/* Line from center to Bottom Left (CIRRO) */}
                <line
                  x1="50%"
                  y1="50%"
                  x2="10%"
                  y2="90%"
                  stroke="#25a5ff"
                  strokeWidth="3"
                  filter="url(#glow)"
                  style={{
                    strokeDasharray: showConnectionLines ? "1000" : "0 1000",
                    strokeDashoffset: showConnectionLines ? "0" : "1000",
                    opacity: showConnectionLines ? 1 : 0,
                    transition: 'all 1.5s ease-out',
                  }}
                />
                
                {/* Line from center to Bottom Right (DHL) */}
                <line
                  x1="50%"
                  y1="50%"
                  x2="90%"
                  y2="90%"
                  stroke="#25a5ff"
                  strokeWidth="3"
                  filter="url(#glow)"
                  style={{
                    strokeDasharray: showConnectionLines ? "1000" : "0 1000",
                    strokeDashoffset: showConnectionLines ? "0" : "1000",
                    opacity: showConnectionLines ? 1 : 0,
                    transition: 'all 1.5s ease-out',
                  }}
                />
              </svg>

              {/* Blue Particles - Moving to Center (only after lines) */}
              {showDataParticles && (
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    zIndex: 50,
                    ['--cx' as any]: `${centerPos.xPercent}%`,
                    ['--cy' as any]: `${centerPos.yPercent}%`,
                  }}
                >
                  {/* Animated blue particles from logo positions */}
                  <div 
                    key={`particle-tl-${particleKey}`}
                    className="absolute w-4 h-4 bg-[#25a5ff] rounded-full"
                    style={{ left: '10%', top: '10%', boxShadow: '0 0 10px #25a5ff', animation: 'moveToCenterTL 3s ease-in-out forwards' }}
                  />
                  <div 
                    key={`particle-tr-${particleKey}`}
                    className="absolute w-4 h-4 bg-[#25a5ff] rounded-full"
                    style={{ left: '90%', top: '10%', boxShadow: '0 0 10px #25a5ff', animation: 'moveToCenterTR 3s ease-in-out forwards' }}
                  />
                  <div 
                    key={`particle-bl-${particleKey}`}
                    className="absolute w-4 h-4 bg-[#25a5ff] rounded-full"
                    style={{ left: '10%', top: '90%', boxShadow: '0 0 10px #25a5ff', animation: 'moveToCenterBL 3s ease-in-out forwards' }}
                  />
                  <div 
                    key={`particle-br-${particleKey}`}
                    className="absolute w-4 h-4 bg-[#25a5ff] rounded-full"
                    style={{ left: '90%', top: '90%', boxShadow: '0 0 10px #25a5ff', animation: 'moveToCenterBR 3s ease-in-out forwards' }}
                  />
                </div>
              )}

              {/* Floating glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#0066ff]/20 via-purple-500/20 to-pink-500/20 blur-3xl -z-10 opacity-50"></div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-2 bg-blue-50/80 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-200/50 shadow-sm">
              <CheckCircle className="text-[#0066ff]" size={20} />
              <span className="text-[#0066ff] font-semibold">Betrouwbare partners voor optimale verzending</span>
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
             Sluit je aan bij honderden bedrijven die al profiteren van Sendwise Connect
            </p>
           <div className="flex justify-center">
            <button 
              onClick={() => setShowSignupModal(true)}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0066ff] font-semibold rounded-full hover:scale-105 transition-transform duration-300 shadow-xl"
            >
              Gratis proberen
              <ArrowRight className="ml-2" size={20} />
            </button>
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

      {/* Signup/Account Aanvraag Modal */}
      {showSignupModal && (
        <div 
          className="fixed inset-0 z-[100] bg-gradient-to-br from-blue-50 via-white to-indigo-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] translate-x-0 opacity-100"
        >
          {/* Animated background blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-300/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-indigo-300/20 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-cyan-300/20 rounded-full blur-3xl animate-float-reverse"></div>
          </div>

          {/* Close button - Fixed top left */}
          <button
            onClick={() => setShowSignupModal(false)}
            className="fixed top-8 left-8 w-14 h-14 bg-white/80 backdrop-blur-xl rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-300 shadow-lg z-10 group border border-gray-200/50"
          >
            <ArrowRight className="text-gray-600 group-hover:text-[#0066ff] rotate-180" size={24} />
          </button>

          {/* Content */}
          <div className="relative h-full overflow-y-auto">
            <div className="min-h-full flex items-center justify-center px-4 py-20">
              <div className="max-w-7xl w-full">
                {/* Header - Two Column Layout on Desktop */}
                <div className="mb-12">
                  {/* Mobile: Stacked Layout */}
                  <div className="md:hidden text-center mb-12">
                    <div 
                      className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-5 py-2.5 rounded-full border border-blue-200/50 mb-8 shadow-sm"
                      style={{
                        animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards',
                        opacity: 0
                      }}
                    >
                      <Sparkles className="text-[#0066ff]" size={20} />
                      <span className="text-[#0066ff] text-sm font-semibold">Direct starten</span>
                    </div>
                    <h1 
                      className="text-5xl font-bold mb-6"
                      style={{
                        animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards',
                        opacity: 0
                      }}
                    >
                      Start vandaag nog <span className="text-gradient">gratis</span>
                    </h1>
                    <p 
                      className="text-xl text-gray-600 mb-8"
                      style={{
                        animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards',
                        opacity: 0
                      }}
                    >
                      Maak direct je account aan. Wij nemen binnen 24 uur contact op om je verzendtarieven te bespreken.
                    </p>

                    {/* USP Points */}
                    <div 
                      className="flex flex-wrap justify-center gap-4 mb-8"
                      style={{
                        animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards',
                        opacity: 0
                      }}
                    >
                      <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50">
                        <CheckCircle2 className="text-green-500" size={18} />
                        <span className="text-sm font-medium text-gray-700">Geen abonnementskosten</span>
                      </div>
                      <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50">
                        <CheckCircle2 className="text-green-500" size={18} />
                        <span className="text-sm font-medium text-gray-700">Beste tarieven</span>
                      </div>
                    </div>

                    {/* Hero Image */}
                    <div 
                      className="relative"
                      style={{
                        animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards',
                        opacity: 0
                      }}
                    >
                      <div className="absolute -inset-4 bg-gradient-to-r from-[#0066ff]/20 to-blue-600/20 rounded-3xl blur-2xl"></div>
                      <div className="relative">
                        <Image
                          src="https://wclkrgejvcuglowsrefl.supabase.co/storage/v1/object/public/Sendwise/foto%20sendwise.png"
                          alt="Sendwise Platform"
                          width={800}
                          height={450}
                          className="rounded-3xl shadow-2xl border-4 border-white/50"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Desktop: Two Column Layout */}
                  <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Text Content */}
                    <div>
                      <div 
                        className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-5 py-2.5 rounded-full border border-blue-200/50 mb-8 shadow-sm"
                        style={{
                          animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards',
                          opacity: 0
                        }}
                      >
                        <Sparkles className="text-[#0066ff]" size={20} />
                        <span className="text-[#0066ff] text-sm font-semibold">Direct starten</span>
                      </div>
                      <h1 
                        className="text-5xl lg:text-6xl font-bold mb-6"
                        style={{
                          animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards',
                          opacity: 0
                        }}
                      >
                        Start vandaag nog <span className="text-gradient">gratis</span>
                      </h1>
                      <p 
                        className="text-xl text-gray-600 mb-8"
                        style={{
                          animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards',
                          opacity: 0
                        }}
                      >
                        Maak direct je account aan. Wij nemen binnen 24 uur contact op om je verzendtarieven te bespreken.
                      </p>

                      {/* USP Points */}
                      <div 
                        className="flex flex-wrap gap-4"
                        style={{
                          animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.25s forwards',
                          opacity: 0
                        }}
                      >
                        <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50">
                          <CheckCircle2 className="text-green-500" size={18} />
                          <span className="text-sm font-medium text-gray-700">Geen abonnementskosten</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/50">
                          <CheckCircle2 className="text-green-500" size={18} />
                          <span className="text-sm font-medium text-gray-700">Beste tarieven</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Hero Image */}
                    <div 
                      className="relative"
                      style={{
                        animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards',
                        opacity: 0
                      }}
                    >
                      <div className="absolute -inset-4 bg-gradient-to-r from-[#0066ff]/20 to-blue-600/20 rounded-3xl blur-2xl"></div>
                      <div className="relative">
                        <Image
                          src="https://wclkrgejvcuglowsrefl.supabase.co/storage/v1/object/public/Sendwise/foto%20sendwise.png"
                          alt="Sendwise Platform"
                          width={800}
                          height={450}
                          className="rounded-3xl shadow-2xl border-4 border-white/50 w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Account Request Form */}
                <div 
                  className="max-w-3xl mx-auto bg-white/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-200/50 shadow-xl"
                  style={{
                    animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.35s forwards',
                    opacity: 0
                  }}
                >
                  {/* Success Message */}
                  {submitSuccess ? (
                    <div className="text-center py-12 relative overflow-hidden">
                      <div className="relative z-10">
                        <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce-in shadow-2xl">
                          <CheckCircle2 className="text-white" size={56} />
                        </div>
                        
                        <div className="mb-4">
                          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
                            Welkom bij <span className="text-gradient">Sendwise</span>!
                          </h2>
                        </div>

                        <div className="max-w-2xl mx-auto mb-8">
                          <p className="text-2xl text-gray-700 mb-4">
                            Hey <span className="font-semibold text-[#0066ff]">{submittedData.voornaam || 'daar'}</span>,
                          </p>
                          <p className="text-xl text-gray-600 leading-relaxed">
                            Binnen 24 uur nemen we contact met je op om jouw persoonlijke verzendtarieven door te spreken. 
                            Dan maken we het samen officieel en kun je direct aan de slag!
                          </p>
                        </div>

                        <p className="text-sm text-gray-500 mt-8">
                          Je ontvangt een bevestiging op <span className="font-medium">{submittedData.email || 'jouw e-mailadres'}</span>
                        </p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-3xl font-bold text-gray-900 mb-6">Account aanmaken</h2>
                      <p className="text-gray-600 mb-8">
                        Maak je account aan en binnen 24 uur bespreken we de tarieven en activeren wij je account.
                      </p>

                      {/* Error Message */}
                      {submitError && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                          <p className="text-red-600 text-sm">{submitError}</p>
                        </div>
                      )}

                      {/* Progress Steps */}
                      <div className="flex items-center justify-center mb-12">
                        <div className="flex items-center gap-4">
                          {/* Step 1 */}
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                              signupStep === 1 
                                ? 'bg-gradient-to-r from-[#0066ff] to-blue-600 text-white shadow-lg' 
                                : signupStep > 1
                                ? 'bg-green-500 text-white'
                                : 'bg-gray-200 text-gray-500'
                            }`}>
                              {signupStep > 1 ? <CheckCircle2 size={20} /> : '1'}
                            </div>
                            <span className={`font-medium hidden sm:block ${
                              signupStep === 1 ? 'text-[#0066ff]' : signupStep > 1 ? 'text-green-500' : 'text-gray-500'
                            }`}>
                              Bedrijfsgegevens
                            </span>
                          </div>

                          {/* Divider */}
                          <div className={`w-12 sm:w-20 h-0.5 ${
                            signupStep > 1 ? 'bg-green-500' : 'bg-gray-200'
                          }`}></div>

                          {/* Step 2 */}
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                              signupStep === 2 
                                ? 'bg-gradient-to-r from-[#0066ff] to-blue-600 text-white shadow-lg' 
                                : 'bg-gray-200 text-gray-500'
                            }`}>
                              2
                            </div>
                            <span className={`font-medium hidden sm:block ${
                              signupStep === 2 ? 'text-[#0066ff]' : 'text-gray-500'
                            }`}>
                              Contactpersoon
                            </span>
                          </div>
                        </div>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Step 1: Bedrijfsgegevens */}
                        {signupStep === 1 && (
                          <div>
                            <div className="space-y-6">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  Bedrijfsnaam *
                                </label>
                                <input
                                  type="text"
                                  name="bedrijfsnaam"
                                  value={formData.bedrijfsnaam}
                                  onChange={handleInputChange}
                                  required
                                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0066ff] focus:ring-2 focus:ring-[#0066ff]/20 outline-none transition-all bg-white/80"
                                  placeholder="Jouw Bedrijf B.V."
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  KvK-nummer *
                                </label>
                                <input
                                  type="text"
                                  name="kvk"
                                  value={formData.kvk}
                                  onChange={handleInputChange}
                                  required
                                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0066ff] focus:ring-2 focus:ring-[#0066ff]/20 outline-none transition-all bg-white/80"
                                  placeholder="12345678"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  Website *
                                </label>
                                <input
                                  type="url"
                                  name="website"
                                  value={formData.website}
                                  onChange={handleInputChange}
                                  required
                                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0066ff] focus:ring-2 focus:ring-[#0066ff]/20 outline-none transition-all bg-white/80"
                                  placeholder="https://jouwwebshop.nl"
                                />
                              </div>
                            </div>

                            {/* Navigation Button */}
                            <div className="pt-6">
                              <button
                                type="button"
                                onClick={() => setSignupStep(2)}
                                className="w-full bg-gradient-to-r from-[#0066ff] to-blue-600 text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all hover:scale-[1.02] font-semibold inline-flex items-center justify-center gap-3 text-lg shadow-xl"
                              >
                                Volgende stap
                                <ArrowRight size={22} />
                              </button>
                            </div>
                          </div>
                        )}

                        {/* Step 2: Contactpersoon */}
                        {signupStep === 2 && (
                          <div>
                            <div className="space-y-6">
                              <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Voornaam *
                                  </label>
                                  <input
                                    type="text"
                                    name="voornaam"
                                    value={formData.voornaam}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0066ff] focus:ring-2 focus:ring-[#0066ff]/20 outline-none transition-all bg-white/80"
                                    placeholder="Jan"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Achternaam *
                                  </label>
                                  <input
                                    type="text"
                                    name="achternaam"
                                    value={formData.achternaam}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0066ff] focus:ring-2 focus:ring-[#0066ff]/20 outline-none transition-all bg-white/80"
                                    placeholder="Jansen"
                                  />
                                </div>
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  E-mailadres *
                                </label>
                                <input
                                  type="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleInputChange}
                                  required
                                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0066ff] focus:ring-2 focus:ring-[#0066ff]/20 outline-none transition-all bg-white/80"
                                  placeholder="jan@jouwbedrijf.nl"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  Telefoonnummer *
                                </label>
                                <input
                                  type="tel"
                                  name="telefoon"
                                  value={formData.telefoon}
                                  onChange={handleInputChange}
                                  required
                                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#0066ff] focus:ring-2 focus:ring-[#0066ff]/20 outline-none transition-all bg-white/80"
                                  placeholder="+31 6 12345678"
                                />
                              </div>
                            </div>

                            {/* Navigation Buttons */}
                            <div className="pt-6 flex gap-4">
                              <button
                                type="button"
                                onClick={() => setSignupStep(1)}
                                disabled={isSubmitting}
                                className="flex-1 bg-white border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl hover:border-[#0066ff] hover:text-[#0066ff] transition-all font-semibold inline-flex items-center justify-center gap-3 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                              >
                                <ArrowRight size={22} className="rotate-180" />
                                Vorige
                              </button>
                              <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 bg-gradient-to-r from-[#0066ff] to-blue-600 text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all hover:scale-[1.02] font-semibold inline-flex items-center justify-center gap-3 text-lg shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                              >
                                {isSubmitting ? 'Bezig met aanmaken...' : 'Account aanmaken'}
                                {!isSubmitting && <ArrowRight size={22} />}
                              </button>
                            </div>
                            <p className="text-sm text-gray-500 text-center mt-4">
                              We nemen binnen 24 uur contact op om tarieven te bespreken
                            </p>
                          </div>
                        )}
                      </form>
                    </>
                  )}
                </div>

                {/* Footer Note */}
                <div 
                  className="text-center mt-12"
                  style={{
                    animation: 'slideInFromRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards',
                    opacity: 0
                  }}
                >
                  <p className="text-gray-600">
                    Vragen? Neem direct contact op via{' '}
                    <a href="mailto:info@sendwise.nl" className="text-[#0066ff] hover:underline font-semibold">
                      info@sendwise.nl
                    </a>{' '}
                    of{' '}
                    <a href="tel:+31619156123" className="text-[#0066ff] hover:underline font-semibold">
                      +31 6 19156123
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}