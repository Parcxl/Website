'use client';

import Image from "next/image";
import { useState } from "react";
import { 
  ArrowRight, Package, Zap, Shield, BarChart3, 
  CheckCircle2, ChevronDown, Truck, Globe, 
  TrendingUp, Users, Clock, CreditCard, Sparkles,
  Box, Layers, Target, RefreshCw
} from "lucide-react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [packages, setPackages] = useState(250);

  const savings = Math.round(packages * 1.2 * 12);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
        <Image
                src="/sendwise-logo.png" 
                alt="Sendwise" 
                width={140} 
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-[#0066ff] transition-colors font-medium">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-[#0066ff] transition-colors font-medium">Prijzen</a>
              <a href="#integraties" className="text-gray-600 hover:text-[#0066ff] transition-colors font-medium">Integraties</a>
              <button className="bg-[#0066ff] text-white px-6 py-2.5 rounded-full hover:bg-[#0052cc] transition-all hover:shadow-lg hover:shadow-blue-500/50 font-medium">
                Start Gratis
              </button>
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
                <span className="text-[#0066ff] text-sm font-semibold">Slimmer verzenden voor MKB</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Verzenden was nog nooit zo <span className="text-gradient">goedkoop</span>
              </h1>
              
              <p className="text-sm text-gray-500 leading-relaxed max-w-xl">
                Voordelig verzenden zonder maandlasten
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#0066ff] text-white px-8 py-4 rounded-full hover:bg-[#0052cc] transition-all hover:shadow-xl hover:shadow-blue-500/50 flex items-center justify-center group font-semibold text-lg">
                  Direct starten
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <button className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full hover:border-[#0066ff] hover:text-[#0066ff] transition-all font-semibold text-lg backdrop-blur-sm">
                  Neem contact op
                </button>
              </div>

              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 border-2 border-white"></div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 font-medium">500+ tevreden bedrijven</p>
                </div>
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
              </div>
            </div>
          </div>
        </div>

        {/* Conveyor Belt with Packages */}
        <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-b from-gray-700 to-gray-800 border-t border-gray-600 overflow-visible z-10">
          {/* Belt Surface */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 opacity-30"></div>
          
          {/* Belt Lines */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gray-900 opacity-40"></div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-900 opacity-60"></div>
          
          {/* Packages */}
          <div className="relative h-full">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={`package-box package-box-delay-${i} absolute top-1/2 -translate-y-1/2`}>
                <div className="relative" style={{ width: '40px', height: '32px' }}>
                  {/* Box Front Face */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-700 to-amber-800 rounded-sm border-2 border-amber-900 shadow-lg">
                    {/* Tape */}
                    <div className="absolute top-1/2 left-0 right-0 h-2 bg-amber-400/40 -translate-y-1/2"></div>
                    <div className="absolute top-0 bottom-0 left-1/2 w-2 bg-amber-400/40 -translate-x-1/2"></div>
                    
                    {/* Fragile Icon */}
                    <div className="absolute bottom-1 right-1 text-[8px] text-red-600 font-bold bg-white/80 px-1 rounded">
                      ⚠
                    </div>
                  </div>
                  
                  {/* Box Top Face (3D effect) */}
                  <div className="absolute -top-2 left-0 right-0 h-2 bg-gradient-to-b from-amber-600 to-amber-700 border-l border-r border-amber-900" 
                       style={{ 
                         clipPath: 'polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)',
                         transform: 'perspective(100px) rotateX(-45deg)',
                         transformOrigin: 'bottom'
                       }}>
                  </div>
                  
                  {/* Box Right Face (3D effect) */}
                  <div className="absolute top-0 -right-2 w-2 h-full bg-gradient-to-l from-amber-900 to-amber-800"
                       style={{
                         clipPath: 'polygon(0% 10%, 100% 0%, 100% 90%, 0% 100%)',
                         transform: 'perspective(100px) rotateY(45deg)',
                         transformOrigin: 'left'
                       }}>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Savings Calculator */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Bereken jouw <span className="text-gradient">besparing</span>
              </h2>
              <p className="text-xl text-gray-600">Zie direct hoeveel je kan besparen met Sendwise</p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
              <div className="space-y-8">
                <div>
                  <label className="text-lg font-semibold text-gray-700 mb-4 block">
                    Hoeveel pakketten verstuur je per maand?
                  </label>
                  <input 
                    type="range" 
                    min="50" 
                    max="5000" 
                    step="50"
                    value={packages}
                    onChange={(e) => setPackages(Number(e.target.value))}
                    className="w-full h-3 bg-blue-100 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#0066ff] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-500">
                    <span>50</span>
                    <span className="text-2xl font-bold text-[#0066ff]">{packages}</span>
                    <span>5000</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 pt-6">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 text-center border border-blue-100">
                    <div className="text-sm text-gray-600 mb-2">Besparing per maand</div>
                    <div className="text-4xl font-bold text-[#0066ff]">€{Math.round(packages * 1.2)}</div>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 text-center border border-indigo-100">
                    <div className="text-sm text-gray-600 mb-2">Besparing per jaar</div>
                    <div className="text-4xl font-bold text-[#0066ff]">€{savings.toLocaleString()}</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center border border-green-100">
                    <div className="text-sm text-gray-600 mb-2">Tijd bespaard</div>
                    <div className="text-4xl font-bold text-green-600">{Math.round(packages / 10)}u</div>
                  </div>
                </div>

                <button className="w-full bg-[#0066ff] text-white py-5 rounded-full hover:bg-[#0052cc] transition-all hover:shadow-xl hover:shadow-blue-500/50 font-bold text-lg">
                  Start Nu en Bespaar €{savings.toLocaleString()} Per Jaar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Features Grid */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Waarom <span className="text-gradient">Sendwise</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alles wat je nodig hebt om professioneel te verzenden, gebundeld in één krachtig platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Supersnel", desc: "Labels printen in 1 klik", color: "from-yellow-400 to-orange-500" },
              { icon: TrendingUp, title: "40% Goedkoper", desc: "Scherpe tarieven bij alle vervoerders", color: "from-green-400 to-emerald-500" },
              { icon: Shield, title: "100% Betrouwbaar", desc: "Enterprise-grade beveiliging", color: "from-blue-400 to-indigo-500" },
              { icon: RefreshCw, title: "Auto-sync", desc: "Koppel met je webshop", color: "from-purple-400 to-pink-500" },
              { icon: BarChart3, title: "Live Analytics", desc: "Real-time inzichten", color: "from-cyan-400 to-blue-500" },
              { icon: Users, title: "Multi-user", desc: "Werk samen met je team", color: "from-indigo-400 to-purple-500" },
              { icon: Globe, title: "Wereldwijd", desc: "Verzend naar 200+ landen", color: "from-pink-400 to-rose-500" },
              { icon: Clock, title: "24/7 Support", desc: "Altijd hulp beschikbaar", color: "from-amber-400 to-yellow-500" }
            ].map((feature, idx) => (
              <div key={idx} className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300 {feature.color}"></div>
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#0066ff] transition-colors">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Process Flow */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl animate-float"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Van order tot <span className="text-gradient">bezorging</span> in 3 stappen
            </h2>
            <p className="text-xl text-gray-600">Zo simpel werkt Sendwise</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                step: "01", 
                title: "Importeer Orders", 
                desc: "Automatische sync met je webshop of upload handmatig",
                icon: Box
              },
              { 
                step: "02", 
                title: "Kies Vervoerder", 
                desc: "Vergelijk tarieven en selecteer de beste optie",
                icon: Truck
              },
              { 
                step: "03", 
                title: "Print & Verstuur", 
                desc: "Label printen en klant krijgt automatisch track & trace",
                icon: Package
              }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-[#0066ff] to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg rotate-3 group-hover:rotate-6 transition-transform">
                    {item.step}
                  </div>
                  <div className="mt-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <item.icon className="text-[#0066ff]" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                {idx < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-8 text-[#0066ff] z-10">
                    <ArrowRight size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Showcase */}
      <section id="integraties" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Integreer met <span className="text-gradient">alles</span>
            </h2>
            <p className="text-xl text-gray-600">Direct koppelen met je favoriete platformen</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                { name: "WooCommerce", desc: "Automatische order sync" },
                { name: "Shopify", desc: "Real-time integratie" },
                { name: "Magento", desc: "Bulk processing" },
                { name: "Custom API", desc: "Bouw je eigen koppeling" }
              ].map((integration, idx) => (
                <div key={idx} className="flex items-center gap-4 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <Layers className="text-[#0066ff]" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{integration.name}</h3>
                    <p className="text-gray-600 text-sm">{integration.desc}</p>
                  </div>
                  <CheckCircle2 className="text-green-500" size={24} />
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-white rounded-3xl p-8 border border-gray-200 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                    <span className="font-semibold">PostNL</span>
                    <span className="text-green-600 font-bold">Actief</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl">
                    <span className="font-semibold">DHL</span>
                    <span className="text-green-600 font-bold">Actief</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
                    <span className="font-semibold">DPD</span>
                    <span className="text-green-600 font-bold">Actief</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl">
                    <span className="font-semibold">GLS</span>
                    <span className="text-green-600 font-bold">Actief</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Stats */}
      <section className="py-20 bg-gradient-to-br from-[#0066ff] to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-3xl animate-float-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Actieve Bedrijven" },
              { value: "100K+", label: "Verzendingen/maand" },
              { value: "€2.1M", label: "Totaal Bespaard" },
              { value: "4.9/5", label: "Klanttevredenheid" }
            ].map((stat, idx) => (
              <div key={idx} className="group hover:scale-110 transition-transform duration-300">
                <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-blue-100 text-lg font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Simpele, eerlijke <span className="text-gradient">prijzen</span>
            </h2>
            <p className="text-xl text-gray-600">Geen verborgen kosten. Betaal alleen voor wat je gebruikt.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Starter",
                price: "Gratis",
                desc: "Perfect om te beginnen",
                features: [
                  "Tot 50 verzendingen/maand",
                  "Alle vervoerders",
                  "Basis support",
                  "Track & Trace"
                ],
                cta: "Start Gratis",
                popular: false
              },
              {
                name: "Professional",
                price: "€49",
                desc: "Voor groeiende bedrijven",
                features: [
                  "Onbeperkt verzendingen",
                  "Alle vervoerders",
                  "Priority support",
                  "API toegang",
                  "Multi-user",
                  "Geavanceerde analytics"
                ],
                cta: "Start Nu",
                popular: true
              },
              {
                name: "Enterprise",
                price: "Custom",
                desc: "Voor grote organisaties",
                features: [
                  "Alles van Professional",
                  "Dedicated account manager",
                  "Custom integraties",
                  "SLA garantie",
                  "White-label optie"
                ],
                cta: "Neem Contact Op",
                popular: false
              }
            ].map((plan, idx) => (
              <div key={idx} className={`relative rounded-3xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-[#0066ff] bg-gradient-to-br from-blue-50 to-indigo-50 shadow-2xl' 
                  : 'border-gray-200 bg-white hover:border-[#0066ff]/50'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#0066ff] to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                    Meest Populair
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.desc}</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-[#0066ff]">{plan.price}</span>
                  {plan.price !== "Gratis" && plan.price !== "Custom" && (
                    <span className="text-gray-600">/maand</span>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2">
                      <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-full font-bold transition-all ${
                  plan.popular
                    ? 'bg-[#0066ff] text-white hover:bg-[#0052cc] shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 text-gray-700 hover:bg-[#0066ff] hover:text-white'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Veelgestelde <span className="text-gradient">vragen</span>
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Hoe lang duurt de setup?",
                a: "Je kunt binnen 5 minuten beginnen met verzenden. Koppel je webshop, selecteer vervoerders en je bent klaar!"
              },
              {
                q: "Kan ik mijn huidige vervoerders behouden?",
                a: "Ja! Sendwise werkt met alle grote vervoerders: PostNL, DHL, DPD, GLS en meer. Vergelijk tarieven en kies wat het beste past."
              },
              {
                q: "Wat gebeurt er na de gratis periode?",
                a: "Je kunt blijven gebruiken op het gratis plan (tot 50 verzendingen/maand) of upgraden naar Professional voor onbeperkte verzendingen."
              },
              {
                q: "Krijg ik support als ik vast loop?",
                a: "Absoluut! We bieden chat, email en telefoon support. Professional klanten krijgen priority support."
              },
              {
                q: "Kan ik API toegang krijgen?",
                a: "Ja, het Professional plan bevat volledige API toegang om Sendwise te integreren met je eigen systemen."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-lg text-left">{faq.q}</span>
                  <ChevronDown 
                    className={`text-[#0066ff] transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} 
                    size={24} 
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-48' : 'max-h-0'}`}>
                  <p className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-br from-[#0066ff] via-indigo-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-float-slow"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <Target className="text-white" size={18} />
            <span className="text-white text-sm font-semibold">Sluit je aan bij 500+ bedrijven</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Klaar om <span className="text-blue-200">wise</span> te verzenden?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Start vandaag nog gratis en ontdek waarom bedrijven overstappen naar Sendwise
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#0066ff] px-10 py-5 rounded-full hover:bg-gray-100 transition-all shadow-2xl hover:shadow-white/50 flex items-center justify-center group font-bold text-lg">
              Start 30 Dagen Gratis
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="border-2 border-white text-white px-10 py-5 rounded-full hover:bg-white/10 transition-all font-bold text-lg backdrop-blur-sm">
              Plan een Demo
            </button>
          </div>

          <p className="mt-8 text-blue-200 text-sm">Geen creditcard nodig • Gratis support • Opzeggen wanneer je wilt</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16">
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
              <p className="text-gray-400 max-w-md leading-relaxed mb-6">
                Het slimste verzendplatform voor MKB in Nederland. Bespaar tijd, geld en verhoog de klanttevredenheid.
              </p>
              <div className="flex gap-4">
                {['LinkedIn', 'Twitter', 'Instagram'].map((social) => (
                  <a key={social} href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#0066ff] transition-colors">
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 bg-white rounded-full"></div>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4 text-lg">Product</h4>
              <ul className="space-y-3">
                {['Features', 'Prijzen', 'Integraties', 'API Docs'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 text-lg">Bedrijf</h4>
              <ul className="space-y-3">
                {['Over ons', 'Careers', 'Contact', 'Support'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Sendwise. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
