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
          <defs>
            <linearGradient id="monitorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1F2937" />
              <stop offset="100%" stopColor="#111827" />
            </linearGradient>
            <linearGradient id="screenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
            <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60C5A6" />
              <stop offset="100%" stopColor="#34D399" />
            </linearGradient>
            <filter id="shadow1" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.25"/>
            </filter>
          </defs>

          {/* Monitor Frame */}
          <rect x="65" y="55" width="370" height="240" rx="16" fill="url(#monitorGrad)" filter="url(#shadow1)" />
          <rect x="75" y="65" width="350" height="220" rx="12" fill="url(#screenGrad)" />

          {/* Browser Chrome */}
          <rect x="85" y="75" width="330" height="32" rx="6" fill="#374151" />
          <circle cx="102" cy="91" r="5" fill="#EF4444" />
          <circle cx="120" cy="91" r="5" fill="#FBBF24" />
          <circle cx="138" cy="91" r="5" fill="#34D399" />
          <rect x="160" y="85" width="180" height="12" rx="6" fill="#1F2937" />

          {/* Code Editor Content */}
          <rect x="85" y="115" width="100" height="170" fill="#111827" />
          <rect x="95" y="125" width="60" height="6" rx="3" fill="#4B5563" />
          <rect x="95" y="140" width="45" height="6" rx="3" fill="#4B5563" />
          <rect x="95" y="155" width="70" height="6" rx="3" fill="#4B5563" />
          <rect x="95" y="170" width="50" height="6" rx="3" fill="#4B5563" />
          <rect x="95" y="185" width="65" height="6" rx="3" fill="#4B5563" />

          {/* Main Code Area */}
          <rect x="185" y="115" width="230" height="170" fill="#0f172a" />
          <rect x="200" y="130" width="120" height="8" rx="4" fill="#60C5A6" />
          <rect x="200" y="148" width="180" height="8" rx="4" fill="#818CF8" fillOpacity="0.7" />
          <rect x="220" y="166" width="140" height="8" rx="4" fill="#FBBF24" fillOpacity="0.6" />
          <rect x="220" y="184" width="100" height="8" rx="4" fill="#60C5A6" fillOpacity="0.8" />
          <rect x="220" y="202" width="160" height="8" rx="4" fill="#F472B6" fillOpacity="0.6" />
          <rect x="200" y="220" width="80" height="8" rx="4" fill="#60C5A6" fillOpacity="0.5" />
          <rect x="200" y="238" width="130" height="8" rx="4" fill="#818CF8" fillOpacity="0.5" />
          <rect x="200" y="256" width="90" height="8" rx="4" fill="#60C5A6" fillOpacity="0.6" />

          {/* Stand */}
          <path d="M220 295 L280 295 L290 320 L210 320 Z" fill="url(#monitorGrad)" />
          <ellipse cx="250" cy="325" rx="70" ry="8" fill="#374151" />

          {/* Decorative Elements */}
          <circle cx="420" cy="120" r="35" fill="#60C5A6" fillOpacity="0.1" stroke="#60C5A6" strokeWidth="2" strokeOpacity="0.3" />
          <circle cx="420" cy="120" r="20" fill="#60C5A6" fillOpacity="0.15" />
          <path d="M412 120 L420 112 L428 120 L420 128 Z" fill="#60C5A6" fillOpacity="0.6" />

          <rect x="50" y="180" width="50" height="50" rx="8" fill="#60C5A6" fillOpacity="0.08" stroke="#60C5A6" strokeWidth="1.5" strokeOpacity="0.2" />
          <path d="M65 205 L75 195 L85 205" stroke="#60C5A6" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5" />

          <circle cx="440" cy="280" r="25" fill="#818CF8" fillOpacity="0.1" stroke="#818CF8" strokeWidth="1.5" strokeOpacity="0.3" />
        </svg>
      )
    },
    {
      title: "E-commerce Solutions",
      subtitle: "Convert Visitors into Customers",
      description: "Powerful online stores with seamless payment integration, inventory management, and optimized checkout flows that maximize your revenue and customer satisfaction.",
      svg: (
        <svg className="w-full h-full" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="bagGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1F2937" />
              <stop offset="100%" stopColor="#111827" />
            </linearGradient>
            <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#374151" />
              <stop offset="100%" stopColor="#1F2937" />
            </linearGradient>
            <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60C5A6" />
              <stop offset="100%" stopColor="#34D399" />
            </linearGradient>
            <filter id="shadow2" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#000" floodOpacity="0.2"/>
            </filter>
          </defs>

          {/* Main Shopping Bag */}
          <rect x="120" y="100" width="260" height="220" rx="12" fill="url(#bagGrad)" filter="url(#shadow2)" />

          {/* Bag Handle */}
          <path d="M180 100 L180 75 Q180 50 210 50 L290 50 Q320 50 320 75 L320 100" stroke="url(#greenGrad)" strokeWidth="8" strokeLinecap="round" fill="none" />

          {/* Inner Content Area */}
          <rect x="135" y="115" width="230" height="190" rx="8" fill="#0f172a" />

          {/* Product Cards */}
          <rect x="150" y="130" width="95" height="80" rx="8" fill="#1F2937" />
          <rect x="155" y="135" width="85" height="50" rx="4" fill="#60C5A6" fillOpacity="0.15" />
          <rect x="155" y="190" width="50" height="6" rx="3" fill="#60C5A6" fillOpacity="0.4" />
          <rect x="155" y="200" width="35" height="5" rx="2" fill="#4B5563" />

          <rect x="255" y="130" width="95" height="80" rx="8" fill="#1F2937" />
          <rect x="260" y="135" width="85" height="50" rx="4" fill="#818CF8" fillOpacity="0.15" />
          <rect x="260" y="190" width="50" height="6" rx="3" fill="#818CF8" fillOpacity="0.4" />
          <rect x="260" y="200" width="35" height="5" rx="2" fill="#4B5563" />

          <rect x="150" y="220" width="95" height="70" rx="8" fill="#1F2937" />
          <rect x="155" y="225" width="85" height="40" rx="4" fill="#FBBF24" fillOpacity="0.15" />
          <rect x="155" y="270" width="50" height="6" rx="3" fill="#FBBF24" fillOpacity="0.4" />
          <rect x="155" y="280" width="35" height="5" rx="2" fill="#4B5563" />

          <rect x="255" y="220" width="95" height="70" rx="8" fill="#1F2937" />
          <rect x="260" y="225" width="85" height="40" rx="4" fill="#F472B6" fillOpacity="0.15" />
          <rect x="260" y="270" width="50" height="6" rx="3" fill="#F472B6" fillOpacity="0.4" />
          <rect x="260" y="280" width="35" height="5" rx="2" fill="#4B5563" />

          {/* Credit Card */}
          <g transform="translate(55, 220)">
            <rect x="0" y="0" width="110" height="70" rx="10" fill="url(#cardGrad)" filter="url(#shadow2)" />
            <rect x="10" y="15" width="35" height="25" rx="4" fill="#60C5A6" fillOpacity="0.4" />
            <rect x="10" y="50" width="70" height="6" rx="3" fill="#4B5563" />
            <circle cx="85" cy="55" r="8" fill="#60C5A6" fillOpacity="0.3" />
            <circle cx="95" cy="55" r="8" fill="#60C5A6" fillOpacity="0.2" />
          </g>

          {/* Cart Badge */}
          <circle cx="410" cy="90" r="40" fill="#60C5A6" fillOpacity="0.1" stroke="#60C5A6" strokeWidth="2" strokeOpacity="0.3" />
          <circle cx="410" cy="90" r="28" fill="#60C5A6" fillOpacity="0.15" />
          <path d="M395 85 L400 85 L402 75 L420 75 L418 90 L405 90 M404 95 A3 3 0 1 1 404 94.99 M415 95 A3 3 0 1 1 415 94.99" stroke="#60C5A6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="422" cy="72" r="8" fill="#EF4444" />
          <text x="422" y="76" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">3</text>

          {/* Decorative Elements */}
          <circle cx="420" cy="280" r="30" fill="#818CF8" fillOpacity="0.08" stroke="#818CF8" strokeWidth="1.5" strokeOpacity="0.2" />
          <rect x="60" y="130" width="40" height="40" rx="8" fill="#FBBF24" fillOpacity="0.08" stroke="#FBBF24" strokeWidth="1.5" strokeOpacity="0.2" />
        </svg>
      )
    },
    {
      title: "Custom Applications",
      subtitle: "Tailored Solutions for Your Business",
      description: "From admin panels to complex web applications, we build custom solutions that streamline your operations and give you complete control over your business.",
      svg: (
        <svg className="w-full h-full" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="dashGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1F2937" />
              <stop offset="100%" stopColor="#111827" />
            </linearGradient>
            <linearGradient id="chartGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#60C5A6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#34D399" stopOpacity="0.8" />
            </linearGradient>
            <filter id="shadow3" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.25"/>
            </filter>
          </defs>

          {/* Main Dashboard Frame */}
          <rect x="60" y="50" width="380" height="270" rx="16" fill="url(#dashGrad)" filter="url(#shadow3)" />

          {/* Sidebar */}
          <rect x="70" y="60" width="70" height="250" rx="10" fill="#0f172a" />
          <circle cx="105" cy="90" r="15" fill="#60C5A6" fillOpacity="0.2" />
          <rect x="98" y="85" width="14" height="10" rx="2" fill="#60C5A6" fillOpacity="0.6" />
          <rect x="85" y="120" width="40" height="6" rx="3" fill="#60C5A6" fillOpacity="0.4" />
          <rect x="85" y="140" width="35" height="6" rx="3" fill="#4B5563" />
          <rect x="85" y="160" width="40" height="6" rx="3" fill="#4B5563" />
          <rect x="85" y="180" width="30" height="6" rx="3" fill="#4B5563" />
          <rect x="85" y="200" width="38" height="6" rx="3" fill="#4B5563" />

          {/* Main Content Area */}
          <rect x="150" y="60" width="280" height="250" rx="10" fill="#0f172a" />

          {/* Stats Row */}
          <rect x="165" y="75" width="80" height="55" rx="8" fill="#1F2937" />
          <rect x="175" y="85" width="30" height="6" rx="3" fill="#4B5563" />
          <text x="175" y="115" fill="#60C5A6" fontSize="16" fontWeight="bold">2,847</text>

          <rect x="255" y="75" width="80" height="55" rx="8" fill="#1F2937" />
          <rect x="265" y="85" width="35" height="6" rx="3" fill="#4B5563" />
          <text x="265" y="115" fill="#818CF8" fontSize="16" fontWeight="bold">$12.4k</text>

          <rect x="345" y="75" width="75" height="55" rx="8" fill="#1F2937" />
          <rect x="355" y="85" width="28" height="6" rx="3" fill="#4B5563" />
          <text x="355" y="115" fill="#FBBF24" fontSize="16" fontWeight="bold">98.2%</text>

          {/* Chart Area */}
          <rect x="165" y="145" width="170" height="150" rx="8" fill="#1F2937" />
          <rect x="175" y="155" width="60" height="6" rx="3" fill="#4B5563" />

          {/* Bar Chart */}
          <rect x="180" y="250" width="18" height="35" rx="3" fill="url(#chartGrad)" />
          <rect x="205" y="220" width="18" height="65" rx="3" fill="url(#chartGrad)" />
          <rect x="230" y="235" width="18" height="50" rx="3" fill="url(#chartGrad)" />
          <rect x="255" y="200" width="18" height="85" rx="3" fill="url(#chartGrad)" />
          <rect x="280" y="225" width="18" height="60" rx="3" fill="url(#chartGrad)" />
          <rect x="305" y="210" width="18" height="75" rx="3" fill="url(#chartGrad)" />

          {/* Right Panel */}
          <rect x="345" y="145" width="75" height="150" rx="8" fill="#1F2937" />
          <circle cx="382" cy="190" r="25" stroke="#60C5A6" strokeWidth="4" fill="none" strokeOpacity="0.3" />
          <path d="M382 165 A25 25 0 1 1 357 190" stroke="#60C5A6" strokeWidth="4" fill="none" strokeLinecap="round" />
          <text x="382" y="195" textAnchor="middle" fill="#60C5A6" fontSize="12" fontWeight="bold">76%</text>
          <rect x="355" y="230" width="55" height="5" rx="2" fill="#4B5563" />
          <rect x="355" y="245" width="45" height="5" rx="2" fill="#4B5563" />
          <rect x="355" y="260" width="50" height="5" rx="2" fill="#4B5563" />
          <rect x="355" y="275" width="40" height="5" rx="2" fill="#4B5563" />

          {/* Decorative Elements */}
          <circle cx="460" cy="100" r="30" fill="#60C5A6" fillOpacity="0.08" stroke="#60C5A6" strokeWidth="1.5" strokeOpacity="0.2" />
          <circle cx="460" cy="100" r="18" fill="#60C5A6" fillOpacity="0.1" />

          <rect x="30" y="150" width="45" height="45" rx="10" fill="#818CF8" fillOpacity="0.08" stroke="#818CF8" strokeWidth="1.5" strokeOpacity="0.2" />

          <circle cx="450" cy="300" r="25" fill="#FBBF24" fillOpacity="0.08" stroke="#FBBF24" strokeWidth="1.5" strokeOpacity="0.2" />
        </svg>
      )
    },
    {
      title: "UI/UX Design",
      subtitle: "Beautiful & Intuitive Experiences",
      description: "User-centered design that combines aesthetics with functionality. We create interfaces that users love, ensuring every interaction is smooth, intuitive, and delightful.",
      svg: (
        <svg className="w-full h-full" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="phoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1F2937" />
              <stop offset="100%" stopColor="#111827" />
            </linearGradient>
            <linearGradient id="uiGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60C5A6" />
              <stop offset="100%" stopColor="#34D399" />
            </linearGradient>
            <filter id="shadow4" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="10" stdDeviation="15" floodColor="#000" floodOpacity="0.3"/>
            </filter>
            <filter id="shadowSmall" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.15"/>
            </filter>
          </defs>

          {/* Phone Frame */}
          <rect x="165" y="35" width="170" height="330" rx="24" fill="url(#phoneGrad)" filter="url(#shadow4)" />
          <rect x="175" y="50" width="150" height="300" rx="16" fill="#0f172a" />

          {/* Status Bar */}
          <rect x="200" y="55" width="40" height="4" rx="2" fill="#374151" />
          <circle cx="300" cy="57" r="3" fill="#374151" />

          {/* App Header */}
          <rect x="185" y="70" width="130" height="35" rx="8" fill="#1F2937" />
          <circle cx="200" cy="87" r="10" fill="#60C5A6" fillOpacity="0.3" />
          <rect x="218" y="82" width="50" height="5" rx="2" fill="#60C5A6" fillOpacity="0.5" />
          <rect x="218" y="92" width="35" height="4" rx="2" fill="#4B5563" />

          {/* Hero Image Area */}
          <rect x="185" y="115" width="130" height="70" rx="8" fill="#1F2937" />
          <rect x="190" y="120" width="120" height="60" rx="6" fill="url(#uiGreenGrad)" fillOpacity="0.2" />
          <circle cx="250" cy="150" r="15" fill="#60C5A6" fillOpacity="0.4" />
          <path d="M245 150 L253 145 L253 155 Z" fill="white" fillOpacity="0.8" />

          {/* Content Cards */}
          <rect x="185" y="195" width="60" height="50" rx="6" fill="#1F2937" />
          <rect x="190" y="200" width="50" height="25" rx="4" fill="#818CF8" fillOpacity="0.2" />
          <rect x="190" y="230" width="35" height="4" rx="2" fill="#4B5563" />
          <rect x="190" y="238" width="25" height="3" rx="1" fill="#4B5563" />

          <rect x="255" y="195" width="60" height="50" rx="6" fill="#1F2937" />
          <rect x="260" y="200" width="50" height="25" rx="4" fill="#FBBF24" fillOpacity="0.2" />
          <rect x="260" y="230" width="35" height="4" rx="2" fill="#4B5563" />
          <rect x="260" y="238" width="25" height="3" rx="1" fill="#4B5563" />

          {/* List Items */}
          <rect x="185" y="255" width="130" height="30" rx="6" fill="#1F2937" />
          <circle cx="200" cy="270" r="8" fill="#60C5A6" fillOpacity="0.3" />
          <rect x="215" y="265" width="60" height="4" rx="2" fill="#4B5563" />
          <rect x="215" y="273" width="40" height="3" rx="1" fill="#374151" />

          <rect x="185" y="292" width="130" height="30" rx="6" fill="#1F2937" />
          <circle cx="200" cy="307" r="8" fill="#F472B6" fillOpacity="0.3" />
          <rect x="215" y="302" width="55" height="4" rx="2" fill="#4B5563" />
          <rect x="215" y="310" width="45" height="3" rx="1" fill="#374151" />

          {/* Bottom Nav */}
          <rect x="185" y="330" width="130" height="15" rx="4" fill="#1F2937" />
          <circle cx="210" cy="337" r="4" fill="#60C5A6" fillOpacity="0.5" />
          <circle cx="250" cy="337" r="4" fill="#4B5563" />
          <circle cx="290" cy="337" r="4" fill="#4B5563" />

          {/* Floating Design Tools */}
          <g transform="translate(70, 100)" filter="url(#shadowSmall)">
            <rect x="0" y="0" width="60" height="60" rx="12" fill="#1F2937" />
            <rect x="10" y="10" width="40" height="40" rx="6" fill="#0f172a" />
            <circle cx="30" cy="25" r="8" fill="#60C5A6" fillOpacity="0.4" />
            <rect x="18" y="38" width="24" height="4" rx="2" fill="#60C5A6" fillOpacity="0.3" />
          </g>

          <g transform="translate(370, 140)" filter="url(#shadowSmall)">
            <rect x="0" y="0" width="70" height="70" rx="14" fill="#1F2937" />
            <rect x="10" y="10" width="50" height="50" rx="8" fill="#0f172a" />
            {/* Color Palette */}
            <circle cx="25" cy="30" r="8" fill="#60C5A6" fillOpacity="0.6" />
            <circle cx="45" cy="30" r="8" fill="#818CF8" fillOpacity="0.6" />
            <circle cx="35" cy="48" r="8" fill="#FBBF24" fillOpacity="0.6" />
          </g>

          {/* Pen Tool */}
          <g transform="translate(85, 250)" filter="url(#shadowSmall)">
            <rect x="0" y="0" width="50" height="50" rx="10" fill="#1F2937" />
            <path d="M15 35 L25 15 L35 35 Z" fill="none" stroke="#60C5A6" strokeWidth="2" strokeLinejoin="round" />
            <circle cx="25" cy="28" r="3" fill="#60C5A6" fillOpacity="0.5" />
          </g>

          {/* Cursor Tool */}
          <g transform="translate(380, 260)" filter="url(#shadowSmall)">
            <rect x="0" y="0" width="50" height="50" rx="10" fill="#1F2937" />
            <path d="M18 15 L18 35 L25 30 L32 38 L35 35 L28 27 L33 27 Z" fill="#60C5A6" fillOpacity="0.6" />
          </g>

          {/* Decorative Elements */}
          <circle cx="60" cy="70" r="20" fill="#60C5A6" fillOpacity="0.08" stroke="#60C5A6" strokeWidth="1.5" strokeOpacity="0.2" />
          <circle cx="440" cy="80" r="25" fill="#818CF8" fillOpacity="0.08" stroke="#818CF8" strokeWidth="1.5" strokeOpacity="0.2" />
          <rect x="420" cy="340" width="35" height="35" rx="8" fill="#F472B6" fillOpacity="0.08" stroke="#F472B6" strokeWidth="1.5" strokeOpacity="0.2" />
        </svg>
      )
    },
    {
      title: "SEO & Performance",
      subtitle: "Rank Higher, Load Faster",
      description: "Lightning-fast websites optimized for search engines. We implement best practices for Core Web Vitals, technical SEO, and performance to ensure your site ranks high and loads instantly.",
      svg: (
        <svg className="w-full h-full" viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EF4444" />
              <stop offset="50%" stopColor="#FBBF24" />
              <stop offset="100%" stopColor="#34D399" />
            </linearGradient>
            <linearGradient id="seoGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60C5A6" />
              <stop offset="100%" stopColor="#34D399" />
            </linearGradient>
            <linearGradient id="panelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1F2937" />
              <stop offset="100%" stopColor="#111827" />
            </linearGradient>
            <filter id="shadow5" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.25"/>
            </filter>
            <filter id="glowGreen" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur"/>
              <feMerge>
                <feMergeNode in="blur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Main Gauge Background */}
          <circle cx="250" cy="200" r="130" fill="url(#panelGrad)" filter="url(#shadow5)" />
          <circle cx="250" cy="200" r="115" fill="#0f172a" />

          {/* Gauge Track */}
          <path d="M 135 200 A 115 115 0 0 1 365 200" stroke="#1F2937" strokeWidth="20" fill="none" strokeLinecap="round" />

          {/* Gauge Progress */}
          <path d="M 135 200 A 115 115 0 0 1 365 200" stroke="url(#gaugeGrad)" strokeWidth="20" fill="none" strokeLinecap="round" strokeDasharray="361" strokeDashoffset="36" />

          {/* Tick Marks */}
          <g stroke="#4B5563" strokeWidth="2">
            <line x1="145" y1="200" x2="160" y2="200" />
            <line x1="170" y1="130" x2="180" y2="142" />
            <line x1="250" y1="95" x2="250" y2="110" />
            <line x1="330" y1="130" x2="320" y2="142" />
            <line x1="355" y1="200" x2="340" y2="200" />
          </g>

          {/* Needle */}
          <g filter="url(#glowGreen)">
            <line x1="250" y1="200" x2="330" y2="130" stroke="#60C5A6" strokeWidth="4" strokeLinecap="round" />
          </g>
          <circle cx="250" cy="200" r="18" fill="#1F2937" stroke="#60C5A6" strokeWidth="3" />
          <circle cx="250" cy="200" r="8" fill="#60C5A6" />

          {/* Score Display */}
          <text x="250" y="260" textAnchor="middle" fill="#60C5A6" fontSize="42" fontWeight="bold">100</text>
          <text x="250" y="285" textAnchor="middle" fill="#6B7280" fontSize="14" fontWeight="500">Performance Score</text>

          {/* Stats Panels */}
          <g transform="translate(50, 280)" filter="url(#shadow5)">
            <rect x="0" y="0" width="90" height="65" rx="10" fill="url(#panelGrad)" />
            <rect x="10" y="10" width="70" height="45" rx="6" fill="#0f172a" />
            <text x="45" y="35" textAnchor="middle" fill="#34D399" fontSize="18" fontWeight="bold">98</text>
            <text x="45" y="48" textAnchor="middle" fill="#6B7280" fontSize="9">SEO</text>
          </g>

          <g transform="translate(360, 280)" filter="url(#shadow5)">
            <rect x="0" y="0" width="90" height="65" rx="10" fill="url(#panelGrad)" />
            <rect x="10" y="10" width="70" height="45" rx="6" fill="#0f172a" />
            <text x="45" y="35" textAnchor="middle" fill="#FBBF24" fontSize="18" fontWeight="bold">95</text>
            <text x="45" y="48" textAnchor="middle" fill="#6B7280" fontSize="9">Best Practices</text>
          </g>

          {/* Search Icon */}
          <g transform="translate(60, 80)" filter="url(#shadow5)">
            <rect x="0" y="0" width="70" height="70" rx="14" fill="url(#panelGrad)" />
            <circle cx="32" cy="32" r="18" stroke="#60C5A6" strokeWidth="3" fill="none" />
            <line x1="44" y1="44" x2="55" y2="55" stroke="#60C5A6" strokeWidth="3" strokeLinecap="round" />
          </g>

          {/* Rocket Icon */}
          <g transform="translate(370, 70)" filter="url(#shadow5)">
            <rect x="0" y="0" width="70" height="70" rx="14" fill="url(#panelGrad)" />
            <path d="M35 20 L35 35 L45 50 L35 45 L25 50 L35 35 Z" fill="#60C5A6" fillOpacity="0.8" />
            <circle cx="35" cy="28" r="5" fill="#1F2937" stroke="#60C5A6" strokeWidth="1.5" />
            <path d="M28 48 L25 55 M42 48 L45 55" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Decorative Graph Lines */}
          <g transform="translate(420, 180)">
            <rect x="0" y="0" width="60" height="45" rx="8" fill="url(#panelGrad)" filter="url(#shadow5)" />
            <polyline points="10,30 20,25 30,20 40,15 50,10" stroke="#60C5A6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="50" cy="10" r="3" fill="#60C5A6" />
          </g>

          {/* Decorative Elements */}
          <circle cx="30" cy="200" r="20" fill="#60C5A6" fillOpacity="0.08" stroke="#60C5A6" strokeWidth="1.5" strokeOpacity="0.2" />
          <circle cx="470" cy="250" r="25" fill="#818CF8" fillOpacity="0.08" stroke="#818CF8" strokeWidth="1.5" strokeOpacity="0.2" />
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
    <section className="relative w-full min-h-screen flex items-center bg-gradient-to-br from-white via-gray-50 to-brand-green/5 overflow-hidden pt-32 sm:pt-32 md:pt-36 lg:pt-24 pb-12 sm:pb-16 md:pb-20 lg:pb-0">

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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Slider Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">

          {/* Left Side - Text Content */}
          <div className={`flex flex-col space-y-4 sm:space-y-6 transition-all duration-1000 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

            {/* Agency Label */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white border border-gray-100 shadow-sm w-fit">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
              <span className="text-xs sm:text-sm font-bold tracking-wider text-gray-900 uppercase">DesignWithKarthick</span>
            </div>

            {/* Slider Content with Animation */}
            <div className="space-y-4 min-h-[280px] sm:min-h-[320px] md:min-h-[300px] relative">
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
                  <div className="space-y-3 sm:space-y-4">
                    <div className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 bg-brand-green/10 text-brand-green text-xs sm:text-sm font-bold rounded-full">
                      {slide.subtitle}
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 tracking-tight leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                      {slide.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
              <a
                href="#contact"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white rounded-full font-medium overflow-hidden shadow-lg shadow-gray-900/20 hover:shadow-xl transition-all hover:-translate-y-1 text-center"
              >
                <div className="absolute inset-0 w-full h-full bg-gray-800 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                <span className="relative flex items-center justify-center gap-2">
                  Start a Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <a
                href="#work"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-900 border border-gray-200 rounded-full font-medium hover:border-gray-300 hover:bg-gray-50 transition-all shadow-sm text-center"
              >
                View Our Work
              </a>
            </div>

            {/* Slider Navigation */}
            <div className="flex items-center gap-4 sm:gap-6 pt-2 sm:pt-4">
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
            <div className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px]">
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
