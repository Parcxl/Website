import Image from "next/image";

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
              <a href="#prijzen" className="text-gray-600 hover:text-[#0066ff] transition-colors">Prijzen</a>
              <a href="#contact" className="text-gray-600 hover:text-[#0066ff] transition-colors">Contact</a>
              <button className="bg-[#0066ff] text-white px-6 py-2 rounded-full hover:bg-[#0052cc] transition-all hover:shadow-lg hover:shadow-blue-500/50">
                Start Nu
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50">
          {/* Animated Blobs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#0066ff]/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-200"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#0066ff]/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-400"></div>
          
          {/* Backdrop Blur Overlay */}
          <div className="absolute inset-0 backdrop-blur-[100px]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                  Verzenden,<br />
                  <span className="text-gradient">maar dan slim</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 font-light max-w-lg">
                  Bespaar tot 40% op verzendkosten en verstuur sneller dan ooit. 
                  Perfect voor groeiende webshops in Nederland.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#0066ff] text-white px-8 py-4 rounded-full hover:bg-[#0052cc] transition-all hover:shadow-xl hover:shadow-blue-500/50 text-lg font-medium">
                  Start Gratis
                </button>
                <button className="border-2 border-[#0066ff] text-[#0066ff] px-8 py-4 rounded-full hover:bg-blue-50 transition-all text-lg font-medium">
                  Bekijk Demo
                </button>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8 pt-8">
                <div>
                  <div className="text-4xl font-bold text-[#0066ff]">500+</div>
                  <div className="text-sm text-gray-600 font-light">Bedrijven</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <div className="text-4xl font-bold text-[#0066ff]">100K+</div>
                  <div className="text-sm text-gray-600 font-light">Pakketten/maand</div>
                </div>
                <div className="h-12 w-px bg-gray-300"></div>
                <div>
                  <div className="text-4xl font-bold text-[#0066ff]">40%</div>
                  <div className="text-sm text-gray-600 font-light">Besparing</div>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="relative">
                <Image 
                  src="/hero-image.png" 
                  alt="Sendwise Dashboard" 
                  width={600} 
                  height={600}
                  className="w-full h-auto rounded-3xl shadow-2xl"
                  priority
                />
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#0066ff]/20 to-blue-400/20 rounded-3xl blur-2xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
