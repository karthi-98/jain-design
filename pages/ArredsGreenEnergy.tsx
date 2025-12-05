import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const ArredsGreenEnergy: React.FC = () => {
  return (
    <>
      <SEO
        title="ARREDS Green Energy - Standard Website | Jain Designs"
        description="Agri-tech website empowering rural farmers with sustainable energy solutions. Built with Next.js and TypeScript for optimal performance and SEO."
        canonical="https://yourwebsite.com/projects/arreds-green-energy"
        ogImage="/assets/ArredsGe.jpg"
        keywords="agritech website, sustainable energy, nextjs website, corporate website"
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
              Standard Website
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              ARREDS Green Energy
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
              An agri-tech company dedicated to empowering rural farmers through sustainable energy solutions and organic farming practices.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-12">
            {['Next.js', 'TypeScript'].map(tag => (
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
                  ARREDS Green Energy is an innovative agri-tech company based in India, focused on transforming rural agriculture through sustainable energy solutions. The company bridges the gap between modern technology and traditional farming practices.
                </p>
                <p>
                  With a comprehensive ecosystem that includes renewable energy products, agricultural training, and financial support, ARREDS is committed to making sustainable farming accessible and profitable for rural communities.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Offerings</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2"></span>
                  <span><strong>Solar Irrigation Systems:</strong> Sustainable water management solutions for farms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2"></span>
                  <span><strong>Biogas Units:</strong> Renewable energy from agricultural waste</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2"></span>
                  <span><strong>Agro-Processing Tools:</strong> Energy-efficient equipment for crop processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2"></span>
                  <span><strong>Organic Farming Training:</strong> Educational programs for sustainable practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2"></span>
                  <span><strong>Fintech Support:</strong> Credit assistance through Arreds Fintech for technology adoption</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2"></span>
                  <span><strong>Vetiver Cultivation:</strong> Soil erosion prevention and essential oil production</span>
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
              href="https://www.arredsge.com/"
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
              src="https://www.arredsge.com/"
              title="ARREDS Green Energy Website Preview"
              className="w-full h-[600px] md:h-[800px] border-0"
              loading="lazy"
            />
          </div>

          {/* Preview Description */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Design Approach</h3>
            <p className="text-gray-600 leading-relaxed">
              The website showcases ARREDS' commitment to sustainability through clean, green design elements and
              clear information architecture. Built with Next.js and TypeScript, the site delivers fast performance
              and excellent SEO. The design focuses on educating visitors about sustainable farming solutions while
              highlighting the company's comprehensive ecosystem of products, training, and financial support.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need a professional website for your business?
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

export default ArredsGreenEnergy;
