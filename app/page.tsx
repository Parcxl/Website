import Image from "next/image";

export default function Home() {
  const integrations = [
    { name: "PostNL", color: "bg-orange-500" },
    { name: "DHL", color: "bg-yellow-500" },
    { name: "DPD", color: "bg-red-500" },
    { name: "GLS", color: "bg-blue-600" },
    { name: "UPS", color: "bg-amber-700" },
    { name: "WooCommerce", color: "bg-purple-600" },
    { name: "Shopify", color: "bg-green-600" },
    { name: "Magento", color: "bg-orange-600" },
  ];

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
              <a href="#features" className="text-gray-600 hover:text-[#0066ff] transition-colors font-light">Features</a>
              <a href="#prijzen" className="text-gray-600 hover:text-[#0066ff] transition-colors font-light">Prijzen</a>
              <a href="#contact" className="text-gray-600 hover:text-[#0066ff] transition-colors font-light">Contact</a>
              <button className="bg-[#0066ff] text-white px-6 py-2.5 rounded-full hover:bg-[#0052cc] transition-all hover:shadow-lg hover:shadow-blue-500/50 font-medium">
                Start Nu
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          {/* Animated Gradient Orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-[#0066ff]/30 to-blue-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-indigo-400/30 to-[#0066ff]/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-200"></div>
          <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-300/20 to-[#0066ff]/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-400"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center space-y-16">
            {/* Text Content */}
            <div className="space-y-8 max-w-4xl mx-auto">
              <div className="space-y-6">
                <h1 className="text-7xl md:text-8xl font-bold leading-tight tracking-tight">
                  Verzenden,<br />
                  <span className="text-gradient">maar dan slim</span>
                </h1>
                <p className="text-2xl md:text-3xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
                  Koppel alle verzenders. Eén platform. Bespaar tot 40%.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-[#0066ff] text-white px-10 py-5 rounded-full hover:bg-[#0052cc] transition-all hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 text-lg font-medium">
                  Start Gratis
                </button>
                <button className="border-2 border-[#0066ff] text-[#0066ff] px-10 py-5 rounded-full hover:bg-blue-50 transition-all hover:scale-105 text-lg font-medium">
                  Bekijk Demo
                </button>
              </div>
            </div>

            {/* Orbiting Integration Icons */}
            <div className="relative w-full max-w-2xl mx-auto h-[500px] flex items-center justify-center">
              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="relative">
                  <div className="w-32 h-32 bg-gradient-to-br from-[#0066ff] to-[#0052cc] rounded-3xl shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                    <span className="text-white text-4xl font-bold">S</span>
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-[#0066ff]/30 rounded-3xl blur-2xl animate-pulse"></div>
                </div>
              </div>

              {/* Orbiting Icons */}
              <div className="absolute inset-0 animate-spin-slow">
                {integrations.map((integration, index) => {
                  const angle = (index * 360) / integrations.length;
                  const radius = 180;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;
                  
                  return (
                    <div
                      key={integration.name}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      style={{
                        transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
                      }}
                    >
                      <div className="animate-spin-reverse">
                        <div className={`w-20 h-20 ${integration.color} rounded-2xl shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center backdrop-blur-sm bg-opacity-90`}>
                          <span className="text-white text-xs font-bold text-center px-2">
                            {integration.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Orbiting Ring */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[400px] h-[400px] border-2 border-dashed border-[#0066ff]/20 rounded-full"></div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-12 pt-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-gradient mb-2">500+</div>
                <div className="text-sm text-gray-600 font-light">Tevreden bedrijven</div>
              </div>
              <div className="hidden sm:block h-16 w-px bg-gray-300"></div>
              <div className="text-center">
                <div className="text-5xl font-bold text-gradient mb-2">100K+</div>
                <div className="text-sm text-gray-600 font-light">Pakketten per maand</div>
              </div>
              <div className="hidden sm:block h-16 w-px bg-gray-300"></div>
              <div className="text-center">
                <div className="text-5xl font-bold text-gradient mb-2">40%</div>
                <div className="text-sm text-gray-600 font-light">Gemiddelde besparing</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
