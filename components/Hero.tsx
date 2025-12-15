import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const slides = [
    {
      title: "Modern Web Development",
      subtitle: "Fast, Responsive & Beautiful",
      description: "We craft high-performance websites using React, Next.js, and cutting-edge technologies that deliver exceptional user experiences and drive business growth.",
      svg: (
        <svg className="w-full h-full" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Laptop/Monitor */}
          <rect x="80" y="80" width="340" height="220" rx="8" fill="#1F2937" />
          <rect x="95" y="95" width="310" height="175" fill="#60C5A6" fillOpacity="0.1" />

          {/* Browser Window */}
          <rect x="110" y="110" width="280" height="25" rx="4" fill="#374151" />
          <circle cx="120" cy="122.5" r="4" fill="#EF4444" />
          <circle cx="135" cy="122.5" r="4" fill="#F59E0B" />
          <circle cx="150" cy="122.5" r="4" fill="#10B981" />

          {/* Code Lines */}
          <rect x="120" y="150" width="200" height="8" rx="4" fill="#60C5A6" fillOpacity="0.6" />
          <rect x="120" y="170" width="150" height="8" rx="4" fill="#60C5A6" fillOpacity="0.4" />
          <rect x="120" y="190" width="180" height="8" rx="4" fill="#60C5A6" fillOpacity="0.5" />
          <rect x="120" y="210" width="120" height="8" rx="4" fill="#60C5A6" fillOpacity="0.3" />

          {/* Floating Elements */}
          <circle cx="350" cy="170" r="30" fill="#60C5A6" fillOpacity="0.2">
            <animate attributeName="cy" values="170;160;170" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="380" cy="220" r="20" fill="#60C5A6" fillOpacity="0.15">
            <animate attributeName="cy" values="220;210;220" dur="2.5s" repeatCount="indefinite" />
          </circle>

          {/* Stand */}
          <rect x="220" y="300" width="60" height="8" rx="4" fill="#1F2937" />
          <rect x="180" y="308" width="140" height="4" rx="2" fill="#374151" />
        </svg>
      )
    },
    {
      title: "E-commerce Solutions",
      subtitle: "Convert Visitors into Customers",
      description: "Powerful online stores with seamless payment integration, inventory management, and optimized checkout flows that maximize your revenue and customer satisfaction.",
      svg: (
        <svg className="w-full h-full" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shopping Bag */}
          <path d="M150 150 L150 130 Q150 100 180 100 L320 100 Q350 100 350 130 L350 150" stroke="#60C5A6" strokeWidth="8" strokeLinecap="round" fill="none" />
          <rect x="130" y="150" width="240" height="180" rx="8" fill="#1F2937" />
          <rect x="145" y="165" width="210" height="150" fill="#60C5A6" fillOpacity="0.1" />

          {/* Shopping Items */}
          <rect x="165" y="185" width="60" height="60" rx="6" fill="#60C5A6" fillOpacity="0.3" />
          <rect x="245" y="185" width="60" height="60" rx="6" fill="#60C5A6" fillOpacity="0.4" />
          <rect x="165" y="260" width="60" height="40" rx="6" fill="#60C5A6" fillOpacity="0.25" />
          <rect x="245" y="260" width="60" height="40" rx="6" fill="#60C5A6" fillOpacity="0.35" />

          {/* Cart Icon */}
          <circle cx="400" cy="120" r="35" fill="#60C5A6" fillOpacity="0.2">
            <animate attributeName="r" values="35;38;35" dur="2s" repeatCount="indefinite" />
          </circle>
          <path d="M385 110 L390 110 L395 125 L410 125 M392 130 Q392 132 390 132 Q388 132 388 130 Q388 128 390 128 Q392 128 392 130 M405 130 Q405 132 403 132 Q401 132 401 130 Q401 128 403 128 Q405 128 405 130" stroke="#60C5A6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />

          {/* Credit Card */}
          <rect x="70" y="250" width="100" height="60" rx="6" fill="#374151">
            <animate attributeName="y" values="250;245;250" dur="3s" repeatCount="indefinite" />
          </rect>
          <rect x="80" y="265" width="30" height="20" rx="2" fill="#60C5A6" fillOpacity="0.4">
            <animate attributeName="y" values="265;260;265" dur="3s" repeatCount="indefinite" />
          </rect>
          <rect x="80" y="290" width="60" height="4" rx="2" fill="#60C5A6" fillOpacity="0.3">
            <animate attributeName="y" values="290;285;290" dur="3s" repeatCount="indefinite" />
          </rect>
        </svg>
      )
    },
    {
      title: "Custom Applications",
      subtitle: "Tailored Solutions for Your Business",
      description: "From admin panels to complex web applications, we build custom solutions that streamline your operations and give you complete control over your business.",
      svg: (
        <svg className="w-full h-full" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Dashboard Frame */}
          <rect x="80" y="80" width="340" height="240" rx="12" fill="#1F2937" />
          <rect x="95" y="95" width="310" height="210" fill="#60C5A6" fillOpacity="0.05" />

          {/* Top Bar */}
          <rect x="95" y="95" width="310" height="40" rx="8" fill="#374151" />
          <circle cx="115" cy="115" r="8" fill="#60C5A6" fillOpacity="0.4" />
          <circle cx="140" cy="115" r="8" fill="#60C5A6" fillOpacity="0.3" />
          <circle cx="165" cy="115" r="8" fill="#60C5A6" fillOpacity="0.35" />

          {/* Stats Cards */}
          <rect x="110" y="150" width="80" height="60" rx="6" fill="#60C5A6" fillOpacity="0.2" />
          <rect x="210" y="150" width="80" height="60" rx="6" fill="#60C5A6" fillOpacity="0.25" />
          <rect x="310" y="150" width="80" height="60" rx="6" fill="#60C5A6" fillOpacity="0.15" />

          {/* Chart Bars */}
          <rect x="110" y="250" width="25" height="40" rx="4" fill="#60C5A6" fillOpacity="0.4">
            <animate attributeName="height" values="40;50;40" dur="2s" repeatCount="indefinite" />
          </rect>
          <rect x="150" y="235" width="25" height="55" rx="4" fill="#60C5A6" fillOpacity="0.5">
            <animate attributeName="height" values="55;45;55" dur="2.2s" repeatCount="indefinite" />
          </rect>
          <rect x="190" y="240" width="25" height="50" rx="4" fill="#60C5A6" fillOpacity="0.45">
            <animate attributeName="height" values="50;60;50" dur="2.4s" repeatCount="indefinite" />
          </rect>
          <rect x="230" y="230" width="25" height="60" rx="4" fill="#60C5A6" fillOpacity="0.55">
            <animate attributeName="height" values="60;50;60" dur="2.1s" repeatCount="indefinite" />
          </rect>

          {/* Settings Icon */}
          <circle cx="360" y="260" r="25" fill="#60C5A6" fillOpacity="0.2">
            <animateTransform attributeName="transform" type="rotate" from="0 360 260" to="360 360 260" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="360" cy="260" r="15" fill="#1F2937" />
          <rect x="358" y="245" width="4" height="10" rx="2" fill="#60C5A6" fillOpacity="0.4">
            <animateTransform attributeName="transform" type="rotate" from="0 360 260" to="360 360 260" dur="4s" repeatCount="indefinite" />
          </rect>
        </svg>
      )
    },
    {
      title: "UI/UX Design",
      subtitle: "Beautiful & Intuitive Experiences",
      description: "User-centered design that combines aesthetics with functionality. We create interfaces that users love, ensuring every interaction is smooth, intuitive, and delightful.",
      svg: (
        <svg className="w-full h-full" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Mobile Phone Frame */}
          <rect x="180" y="60" width="180" height="320" rx="20" fill="#1F2937" />
          <rect x="195" y="80" width="150" height="280" rx="8" fill="#60C5A6" fillOpacity="0.05" />

          {/* Screen Content */}
          <circle cx="270" cy="130" r="35" fill="#60C5A6" fillOpacity="0.3">
            <animate attributeName="opacity" values="0.3;0.5;0.3" dur="2s" repeatCount="indefinite" />
          </circle>

          {/* Content Cards */}
          <rect x="210" y="180" width="120" height="15" rx="4" fill="#60C5A6" fillOpacity="0.4" />
          <rect x="210" y="205" width="90" height="10" rx="4" fill="#60C5A6" fillOpacity="0.25" />

          <rect x="210" y="235" width="120" height="15" rx="4" fill="#60C5A6" fillOpacity="0.35" />
          <rect x="210" y="260" width="100" height="10" rx="4" fill="#60C5A6" fillOpacity="0.2" />

          {/* Button */}
          <rect x="225" y="310" width="90" height="30" rx="15" fill="#60C5A6" fillOpacity="0.4">
            <animate attributeName="opacity" values="0.4;0.6;0.4" dur="1.5s" repeatCount="indefinite" />
          </rect>

          {/* Floating Design Elements */}
          <circle cx="130" cy="150" r="25" fill="#60C5A6" fillOpacity="0.15">
            <animate attributeName="cy" values="150;140;150" dur="3s" repeatCount="indefinite" />
          </circle>
          <rect x="390" y="180" width="40" height="40" rx="8" fill="#60C5A6" fillOpacity="0.2">
            <animate attributeName="y" values="180;170;180" dur="2.5s" repeatCount="indefinite" />
          </rect>

          {/* Pen Tool Icon */}
          <path d="M100 280 L120 260 L140 280 L120 300 Z" fill="#60C5A6" fillOpacity="0.3">
            <animateTransform attributeName="transform" type="rotate" from="0 120 280" to="15 120 280" dur="2s" repeatCount="indefinite" values="0 120 280; 15 120 280; 0 120 280" />
          </path>
        </svg>
      )
    },
    {
      title: "SEO & Performance",
      subtitle: "Rank Higher, Load Faster",
      description: "Lightning-fast websites optimized for search engines. We implement best practices for Core Web Vitals, technical SEO, and performance to ensure your site ranks high and loads instantly.",
      svg: (
        <svg className="w-full h-full" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Speedometer/Gauge */}
          <circle cx="250" cy="220" r="120" stroke="#374151" strokeWidth="15" fill="none" />
          <path d="M 130 220 A 120 120 0 0 1 370 220" stroke="#60C5A6" strokeWidth="15" fill="none" strokeLinecap="round">
            <animate attributeName="stroke-dasharray" values="0 377; 377 377" dur="2s" repeatCount="indefinite" />
          </path>

          {/* Needle */}
          <line x1="250" y1="220" x2="320" y2="160" stroke="#60C5A6" strokeWidth="4" strokeLinecap="round">
            <animateTransform attributeName="transform" type="rotate" from="0 250 220" to="90 250 220" dur="3s" repeatCount="indefinite" values="0 250 220; 90 250 220; 0 250 220" />
          </line>
          <circle cx="250" cy="220" r="12" fill="#60C5A6" />

          {/* Speed Indicators */}
          <text x="250" y="270" textAnchor="middle" fill="#60C5A6" fontSize="32" fontWeight="bold">100</text>
          <text x="250" y="295" textAnchor="middle" fill="#374151" fontSize="14">Performance</text>

          {/* Ranking Arrows */}
          <g transform="translate(100, 80)">
            <rect x="0" y="0" width="60" height="8" rx="4" fill="#60C5A6" fillOpacity="0.3" />
            <polygon points="65,4 75,0 75,8" fill="#60C5A6" fillOpacity="0.3">
              <animate attributeName="opacity" values="0.3;0.7;0.3" dur="1.5s" repeatCount="indefinite" />
            </polygon>
          </g>

          <g transform="translate(340, 100)">
            <rect x="0" y="0" width="50" height="8" rx="4" fill="#60C5A6" fillOpacity="0.4" />
            <polygon points="55,4 65,0 65,8" fill="#60C5A6" fillOpacity="0.4">
              <animate attributeName="opacity" values="0.4;0.8;0.4" dur="1.8s" repeatCount="indefinite" />
            </polygon>
          </g>

          {/* Search Icon */}
          <circle cx="380" cy="320" r="25" stroke="#60C5A6" strokeWidth="5" fill="none" fillOpacity="0.3" />
          <line x1="398" y1="338" x2="415" y2="355" stroke="#60C5A6" strokeWidth="5" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-white via-gray-50 to-brand-green/5 overflow-hidden pt-20 md:pt-0">

      {/* Enhanced Grid Pattern Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Main Grid */}
        <div className="absolute inset-0 opacity-[0.15]" style={{
          backgroundImage: `
            linear-gradient(to right, #e5e7eb 1px, transparent 1px),
            linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }} />

        {/* Secondary Fine Grid */}
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: `
            linear-gradient(to right, #d1d5db 1px, transparent 1px),
            linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }} />

        {/* Accent Grid Lines */}
        <div className="absolute inset-0 opacity-[0.2]" style={{
          backgroundImage: `
            linear-gradient(to right, #60C5A6 1px, transparent 1px),
            linear-gradient(to bottom, #60C5A6 1px, transparent 1px)
          `,
          backgroundSize: '160px 160px'
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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">

        {/* Slider Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Text Content */}
          <div className={`flex flex-col space-y-6 transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

            {/* Agency Label */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 shadow-sm w-fit">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
              <span className="text-sm font-bold tracking-wider text-gray-900 uppercase">DesignWithKarthick</span>
            </div>

            {/* Slider Content with Animation */}
            <div className="space-y-4 min-h-[300px] relative">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ${
                    currentSlide === index
                      ? 'opacity-100 translate-x-0'
                      : index < currentSlide
                        ? 'opacity-0 -translate-x-10 pointer-events-none'
                        : 'opacity-0 translate-x-10 pointer-events-none'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="inline-block px-3 py-1 bg-brand-green/10 text-brand-green text-sm font-bold rounded-full">
                      {slide.subtitle}
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                      {slide.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
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

            {/* Slider Navigation */}
            <div className="flex items-center gap-6 pt-4">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full bg-white border border-gray-200 hover:border-brand-green hover:text-brand-green transition-all shadow-sm"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots Navigation */}
              <div className="flex items-center gap-3">
                {[0, 1, 2, 3, 4].map((index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      currentSlide === index
                        ? 'w-8 h-2 bg-brand-green'
                        : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-2 rounded-full bg-white border border-gray-200 hover:border-brand-green hover:text-brand-green transition-all shadow-sm"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Side - SVG Illustration */}
          <div className={`relative transition-all duration-1000 delay-300 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative w-full h-[400px] lg:h-[500px]">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ${
                    currentSlide === index
                      ? 'opacity-100 scale-100'
                      : 'opacity-0 scale-95 pointer-events-none'
                  }`}
                >
                  {slide.svg}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
