import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Standard Website',
      description: 'Perfect for small businesses and portfolios looking to establish a strong digital presence.',
      priceRange: '₹12,000 - ₹15,000',
      features: [
        '5-7 Pages Responsive Design',
        'Contact Form Integration',
        'Social Media Integration',
        'Basic SEO Optimization',
        '1 Month Free Support',
        'Fast Loading Speed'
      ],
      popular: false
    },
    {
      name: 'E-commerce Store',
      description: 'Full-featured online stores designed to convert visitors into loyal customers.',
      priceRange: '₹25,000 - ₹30,000',
      features: [
        'Everything in Standard',
        'Product Management System',
        'Payment Gateway Integration',
        'Cart & Checkout Functionality',
        'Admin Dashboard for Orders',
        'Inventory Management'
      ],
      popular: true
    },
    {
      name: 'Custom Platform',
      description: 'Complex web applications with dedicated admin panels for complete business control.',
      priceRange: '₹45,000 - ₹50,000',
      features: [
        'Custom Web Application',
        'Advanced Admin Panel',
        'User Authentication',
        'Database Integration',
        'Real-time Analytics',
        'API Development & Integration'
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="relative py-24 bg-gray-50 border-t border-gray-200 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/20">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
            <span className="text-brand-green font-bold tracking-widest uppercase text-xs">Pricing</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
            Transparent investment for <br />
            <span className="text-gray-400 font-serif italic">maximum value.</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Choose the package that fits your business needs. No hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col p-8 rounded-3xl transition-all duration-300 ${
                plan.popular 
                  ? 'bg-white shadow-xl ring-2 ring-brand-green scale-105 z-10' 
                  : 'bg-white shadow-sm hover:shadow-lg border border-gray-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-green text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed min-h-[48px]">{plan.description}</p>
              </div>

              <div className="mb-8 p-4 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Starting Range</p>
                <p className="text-2xl font-bold text-gray-900">{plan.priceRange}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm text-gray-700">
                    <div className={`mt-0.5 min-w-[18px] h-[18px] rounded-full flex items-center justify-center ${plan.popular ? 'bg-brand-green text-white' : 'bg-gray-200 text-gray-500'}`}>
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className={`w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                  plan.popular 
                    ? 'bg-brand-green text-white shadow-lg shadow-brand-green/30 hover:bg-[#3d7026]' 
                    : 'bg-gray-900 text-white hover:bg-gray-800'
                }`}
              >
                Get Started
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
             <p className="text-sm text-gray-500">Need a custom quote? <a href="#contact" className="text-brand-green font-bold hover:underline">Contact us</a> for a tailored solution.</p>
        </div>

      </div>
    </section>
  );
};

export default Pricing;