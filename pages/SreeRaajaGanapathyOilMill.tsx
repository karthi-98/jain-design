import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const SreeRaajaGanapathyOilMill: React.FC = () => {
  return (
    <>
      <SEO
        title="Sree Raaja Ganapathy Oil Mill - E-Commerce Store | DesignWithKarthick"
        description="Premium e-commerce store for traditional cold-pressed cooking oils. Built with Next.js and Firebase featuring secure payments, inventory management, and order tracking."
        canonical="https://yourwebsite.com/projects/sree-raaja-ganapathy-oil-mill"
        ogImage="/assets/SreeRaajaGanapathyOilMill.jpg"
        keywords="ecommerce development, nextjs ecommerce, firebase store, online store development"
      />
      <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-brand-green transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Works
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <span className="inline-block px-4 py-1.5 bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-wider rounded-full mb-6">
              E-Commerce Store
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Sree Raaja Ganapathy Oil Mill
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
              A premium manufacturer specializing in traditionally extracted, cold-pressed cooking oils using the ancient Chekku method.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-12">
            {['Next.js', 'Firebase', 'TypeScript'].map(tag => (
              <span
                key={tag}
                className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Project Summary */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Sree Raaja Ganapathy Oil Mill represents the perfect blend of tradition and modern e-commerce.
                  They specialize in producing premium cooking oils using the traditional Chekku (cold-pressed) method,
                  which preserves the natural nutrients, aroma, and health benefits of the oils.
                </p>
                <p>
                  With a commitment to purity and quality, they offer a range of traditional cooking oils that cater
                  to health-conscious consumers who value authentic, chemical-free products made using time-honored methods.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Product Range</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2"></span>
                  <span><strong>Coconut Oil:</strong> Pure cold-pressed coconut oil for cooking and wellness</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2"></span>
                  <span><strong>Groundnut (Peanut) Oil:</strong> Traditional extraction for authentic flavor</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2"></span>
                  <span><strong>Gingelly (Sesame) Oil:</strong> Rich in nutrients and traditional taste</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2"></span>
                  <span><strong>Gingelly with Palm Jaggery:</strong> Unique blend offering health benefits and natural sweetness</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2"></span>
                  <span><strong>Chekku Method:</strong> Traditional cold-pressing to preserve nutrients and purity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Website Preview */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Website Preview</h2>
            <a
              href="https://sreeraajaganapathyoilmill.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-green hover:text-brand-green/80 transition-colors"
            >
              Visit Live Site
              <ExternalLink size={16} />
            </a>
          </div>

          {/* Live Website Iframe */}
          <div className="rounded-2xl overflow-hidden shadow-2xl mb-8 bg-white">
            <iframe
              src="https://sreeraajaganapathyoilmill.com/"
              title="Sree Raaja Ganapathy Oil Mill Website Preview"
              className="w-full h-[600px] md:h-[800px] border-0"
              loading="lazy"
            />
          </div>

          {/* Preview Description */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Design Approach</h3>
            <p className="text-gray-600 leading-relaxed">
              The e-commerce store emphasizes the traditional and authentic nature of the products through warm,
              earthy design elements and high-quality product photography. Built with Next.js and Firebase, the
              platform offers secure payment processing, inventory management, and order tracking. The design
              focuses on educating customers about the health benefits of cold-pressed oils while providing a
              seamless shopping experience with features like product filtering, customer reviews, and detailed
              product information.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to launch your e-commerce store?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Get in touch to discuss your project.
          </p>
          <Link
            to="/#contact"
            className="inline-block px-8 py-4 bg-brand-green text-white font-medium rounded-full hover:bg-brand-green/90 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </section>
      </div>
    </>
  );
};

export default SreeRaajaGanapathyOilMill;
