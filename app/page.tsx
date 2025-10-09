import Image from "next/image";
import { ArrowRight, Package, TrendingDown, Zap, Shield, BarChart3, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
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
              <a href="#features" className="text-gray-600 hover:text-[#0066ff] transition-colors">Features</a>
              <a href="#voordelen" className="text-gray-600 hover:text-[#0066ff] transition-colors">Voordelen</a>
              <a href="#contact" className="text-gray-600 hover:text-[#0066ff] transition-colors">Contact</a>
              <button className="bg-[#0066ff] text-white px-6 py-2 rounded-full hover:bg-[#0052cc] transition-all hover:shadow-lg hover:shadow-blue-500/50">
                Start Nu
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <span className="bg-blue-50 text-[#0066ff] px-4 py-2 rounded-full text-sm font-medium">
                  ✨ Slimmer verzenden voor MKB in Nederland
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="text-gradient">Send</span> pakketjes.<br />
                <span className="text-gradient">Wise</span>ly.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Verzend efficiënter en bespaar tot 40% op verzendkosten. 
                Sendwise maakt verzenden simpel voor kleine en middelgrote bedrijven.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#0066ff] text-white px-8 py-4 rounded-full hover:bg-[#0052cc] transition-all hover:shadow-xl hover:shadow-blue-500/50 flex items-center justify-center group">
                  Gratis Proberen
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <button className="border-2 border-[#0066ff] text-[#0066ff] px-8 py-4 rounded-full hover:bg-blue-50 transition-all">
                  Plan een Demo
                </button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0066ff]">500+</div>
                  <div className="text-sm text-gray-600">Bedrijven</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0066ff]">100K+</div>
                  <div className="text-sm text-gray-600">Verzendingen/maand</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#0066ff]">40%</div>
                  <div className="text-sm text-gray-600">Kostenbesparing</div>
                </div>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0066ff]/20 to-transparent rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl">
                <div className="bg-white rounded-2xl p-6 shadow-xl space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Vandaag verzonden</span>
                    <Package className="text-[#0066ff]" size={24} />
                  </div>
                  <div className="text-4xl font-bold text-gray-900">1,247</div>
                  <div className="flex items-center text-green-600">
                    <TrendingDown size={16} />
                    <span className="text-sm ml-1">€2,340 bespaard deze week</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Alles wat je nodig hebt om <span className="text-gradient">slim te verzenden</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Één platform, alle vervoerders. Automatiseer je verzendproces en focus op wat echt belangrijk is: jouw bedrijf laten groeien.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0066ff] transition-colors">
                <Zap className="text-[#0066ff] group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Supersnel verzenden</h3>
              <p className="text-gray-600 leading-relaxed">
                Print labels in één klik. Koppel met je webshop en automatiseer je hele verzendproces.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0066ff] transition-colors">
                <TrendingDown className="text-[#0066ff] group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Lagere verzendkosten</h3>
              <p className="text-gray-600 leading-relaxed">
                Bespaar tot 40% door onze scherpe tarieven bij PostNL, DHL, DPD en meer.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0066ff] transition-colors">
                <Shield className="text-[#0066ff] group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">100% Betrouwbaar</h3>
              <p className="text-gray-600 leading-relaxed">
                Track & trace, automatische updates en directe support. Jouw klanten blijven altijd op de hoogte.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0066ff] transition-colors">
                <BarChart3 className="text-[#0066ff] group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Inzichtelijk dashboard</h3>
              <p className="text-gray-600 leading-relaxed">
                Bekijk al je verzendingen, kosten en statistieken in één overzichtelijk dashboard.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0066ff] transition-colors">
                <Package className="text-[#0066ff] group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Alle vervoerders</h3>
              <p className="text-gray-600 leading-relaxed">
                PostNL, DHL, DPD, GLS en meer. Vergelijk tarieven en kies de beste optie voor elke zending.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl hover:shadow-xl transition-shadow border border-gray-100 group">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0066ff] transition-colors">
                <CheckCircle2 className="text-[#0066ff] group-hover:text-white transition-colors" size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Eenvoudige integratie</h3>
              <p className="text-gray-600 leading-relaxed">
                Koppel met WooCommerce, Shopify, Magento en meer. Start binnen 5 minuten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="voordelen" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Waarom kiezen 500+ bedrijven voor <span className="text-gradient">Sendwise</span>?
              </h2>
              <div className="space-y-4">
                {[
                  "Geen abonnementskosten - betaal alleen per verzending",
                  "Gratis support via chat, mail en telefoon",
                  "Automatische koppeling met je webshop",
                  "Scherpe tarieven bij alle grote vervoerders",
                  "Live track & trace voor jou en je klanten",
                  "Start vandaag nog - geen setup kosten"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-[#0066ff] mt-1 flex-shrink-0" size={24} />
                    <span className="text-lg text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#0066ff] to-[#0052cc] p-12 rounded-3xl text-white">
              <div className="space-y-8">
                <h3 className="text-3xl font-bold">Begin nu met besparen</h3>
                <div className="space-y-6">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                    <div className="text-sm opacity-90 mb-2">Gemiddelde besparing per maand</div>
                    <div className="text-4xl font-bold">€840</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                    <div className="text-sm opacity-90 mb-2">Tijd bespaard per week</div>
                    <div className="text-4xl font-bold">12 uur</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                    <div className="text-sm opacity-90 mb-2">Klanttevredenheid</div>
                    <div className="text-4xl font-bold">4.8/5.0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Klaar om <span className="text-gradient">wise</span> te gaan verzenden?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Sluit je aan bij honderden tevreden bedrijven die al besparen op verzendkosten.
            Start vandaag nog - geen creditcard vereist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#0066ff] text-white px-8 py-4 rounded-full hover:bg-[#0052cc] transition-all hover:shadow-xl hover:shadow-blue-500/50 flex items-center justify-center group text-lg font-medium">
              Probeer Gratis
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="border-2 border-[#0066ff] text-[#0066ff] px-8 py-4 rounded-full hover:bg-blue-50 transition-all text-lg font-medium">
              Neem Contact Op
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
            <Image
                src="/sendwise-logo.png" 
                alt="Sendwise" 
                width={140} 
                height={40}
                className="h-10 w-auto mb-4 brightness-0 invert"
              />
              <p className="text-gray-400 max-w-md">
                Slimmer verzenden voor MKB in Nederland. Bespaar tijd en geld met ons verzendplatform.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Prijzen</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integraties</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Bedrijf</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Over ons</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Sendwise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
