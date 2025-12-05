import React, { useEffect, useState } from 'react';
import { ArrowRight, Code, Zap, Layout } from 'lucide-react';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-white via-gray-50 to-brand-green/5 overflow-hidden pt-20 md:pt-0">

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Orbs with Animation */}
      <div
        className="absolute top-20 left-[10%] w-72 h-72 bg-brand-green/20 rounded-full blur-3xl pointer-events-none z-0"
        style={{ animation: 'float 8s ease-in-out infinite' }}
      />
      <div
        className="absolute bottom-32 right-[15%] w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none z-0"
        style={{ animation: 'float 10s ease-in-out infinite reverse' }}
      />
      <div
        className="absolute top-1/3 right-[5%] w-64 h-64 bg-purple-400/10 rounded-full blur-3xl pointer-events-none z-0"
        style={{ animation: 'float 6s ease-in-out infinite' }}
      />

      {/* Radial Gradient Overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, transparent 0%, transparent 50%, rgba(255, 255, 255, 0.5) 100%)'
        }}
      />

      {/* CSS Animation */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-25px) translateX(5px);
          }
        }
      `}</style>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex justify-center items-center">

        {/* Text Content */}
        <div className={`flex flex-col items-center text-center space-y-6 transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* Agency Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
                <span className="text-sm font-bold tracking-wider text-gray-900 uppercase">Jain Designs</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2 w-full">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 tracking-tight leading-[0.9]">
                    I'm <span className="text-brand-green">Karthick</span>
                </h1>
            </div>

            {/* Taglines / Description */}
            <div className="max-w-xl space-y-4">
                <h2 className="text-2xl md:text-3xl font-medium text-gray-800 leading-tight">
                    Building digital products that drive <span className="italic font-serif text-gray-500">real growth.</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                    I run a premium web development agency specializing in high-converting websites, custom applications, and seamless user experiences. We turn complex problems into elegant interfaces.
                </p>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
                <a 
                    href="#contact" 
                    className="group relative px-8 py-4 bg-gray-900 text-white rounded-full font-medium overflow-hidden shadow-lg shadow-gray-900/20 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                    <div className="absolute inset-0 w-full h-full bg-gray-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                    <span className="relative flex items-center gap-2">
                        Start a Project
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                </a>
                <a 
                    href="#work" 
                    className="px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-medium hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm"
                >
                    View Our Work
                </a>
            </div>

            {/* Trust/Services Tickers */}
            <div className="pt-8 flex flex-wrap justify-center items-center gap-6 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                <div className="flex items-center gap-2">
                    <Code className="w-4 h-4 text-brand-green" />
                    <span>Development</span>
                </div>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <div className="flex items-center gap-2">
                    <Layout className="w-4 h-4 text-brand-green" />
                    <span>Design</span>
                </div>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-brand-green" />
                    <span>Strategy</span>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;