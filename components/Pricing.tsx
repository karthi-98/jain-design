import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: 'Standard Website',
      description: 'Perfect for small businesses and portfolios looking to establish a strong digital presence.',
      priceRange: '₹12,000 - ₹15,000',
      delivery: '3-4 days',
      features: [
        '5-7 Pages',
        'Responsive Design',
        'Custom Domain',
        'SSL Certificate',
        '1 Month Support with limited revisions',
        'Basic SEO Optimization',
        'Unlimited revisions in the development period',
        '1 Contact Form integration',
        'Social Media Integration'
      ],
      popular: false
    },
    {
      name: 'E-commerce Website',
      description: 'Full-featured online stores designed to convert visitors into loyal customers.',
      priceRange: '₹30,000 - ₹40,000',
      delivery: '1-2 weeks',
      features: [
        'All features of Standard Website',
        'Online Payment Gateway',
        'Product Management',
        'Order Management',
        'Cart & Checkout functionality',
        'Admin Dashboard for orders',
        'Inventory Management',
        'User Authentication',
        'Custom Code or Shopify',
        'Unlimited revisions in the development period'
      ],
      popular: false
    },
    {
      name: 'Customised Website',
      description: 'Complex web applications with dedicated admin panels for complete business control.',
      priceRange: '₹45,000 - ₹50,000',
      delivery: '1-2 weeks',
      features: [
        'All features of Standard Website',
        'Advanced Admin Panel',
        'Change Images and Text easily',
        'Templates for different pages and Posts',
        'User Authentication',
        'Custom Database',
        'Role based Access Control',
        'Unlimited revisions in the development period'
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
              className="relative flex flex-col p-8 rounded-3xl transition-all duration-300 bg-white shadow-sm hover:shadow-lg border border-gray-100"
            >

              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed min-h-[48px]">{plan.description}</p>
              </div>

              <div className="mb-8 p-4 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">Starting Range</p>
                <p className="text-2xl font-bold text-gray-900">{plan.priceRange}</p>
                <p className="text-xs text-gray-500 mt-2">⏱️ Delivery: {plan.delivery}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm text-gray-700">
                    <div className="mt-0.5 min-w-[18px] h-[18px] rounded-full flex items-center justify-center bg-brand-green text-white">
                      <Check size={10} strokeWidth={3} />
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all bg-gray-900 text-white hover:bg-gray-800"
              >
                Get Started
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>


        {/* Extra Services & Notes */}
        <div className="mt-16 space-y-8">
          {/* Extra Services */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-brand-green">+</span> Extra Services
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <Check size={16} className="text-brand-green min-w-[16px]" />
                <span>Google Analytics Integration <span className="font-bold text-gray-900">(₹1,000)</span></span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <Check size={16} className="text-brand-green min-w-[16px]" />
                <span>Revision after project handover based on complexity <span className="font-bold text-gray-900">(~₹1,500 per revision)</span></span>
              </div>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-gray-900 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-brand-green">ℹ️</span> Important Notes
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-brand-green mt-1">•</span>
                <span>We are <strong className="text-white">not developing websites in WORDPRESS</strong> and not using any WORDPRESS themes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-green mt-1">•</span>
                <span>All website designs are developed using <strong className="text-white">custom code - NextJS, ReactJS only</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-green mt-1">•</span>
                <span>Website hosting is <strong className="text-white">free for 6 months</strong>, then ₹2,000 per year</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-green mt-1">•</span>
                <span>Domain name is charged separately</span>
              </li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="text-center">
            <p className="text-sm text-gray-500">Need a custom quote? <a href="#contact" className="text-brand-green font-bold hover:underline">Contact us</a> for a tailored solution.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;