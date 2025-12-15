import React from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const LocoTrails: React.FC = () => {
  return (
    <>
      <SEO
        title="LocoTrails - Custom Platform | DesignWithKarthick"
        description="Experiential travel platform built with Next.js, TypeScript, and Supabase. Features curated adventures, surprise trips, and custom admin panel for seamless trip management."
        canonical="https://yourwebsite.com/projects/locotrails"
        ogImage="/assets/locotrails.jpg"
        keywords="travel platform, nextjs travel website, custom admin panel, supabase development"
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
              Custom Platform
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              LocoTrails
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
              An experiential travel platform focused on immersive, "unscripted" journeys rather than standard tourist packages.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-12">
            {['Next.js', 'TypeScript', 'Supabase', 'Custom Admin Panel'].map(tag => (
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
                  LocoTrails is a cutting-edge travel platform that reimagines how people experience destinations. Moving away from conventional tourism, the platform focuses on creating authentic, immersive journeys that connect travelers with local culture and hidden gems.
                </p>
                <p>
                  The platform features curated Small Group Adventures for approximately 12 people, ensuring intimate and personalized experiences. For the adventurous, they offer unique Surprise Trips where the destination remains a mystery, tailored based on user preferences.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2"></span>
                  <span><strong>Curated Adventures:</strong> Small group trips (12 people) to domestic and international destinations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2"></span>
                  <span><strong>Surprise Trips:</strong> Mystery destinations based on traveler preferences</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2"></span>
                  <span><strong>Custom Admin Panel:</strong> Comprehensive dashboard for trip management and bookings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2"></span>
                  <span><strong>Social Impact:</strong> 10% of margins fund vacations for underprivileged children</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full mt-2"></span>
                  <span><strong>Boutique Stays:</strong> Carefully selected accommodations for authentic experiences</span>
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
              href="https://locotrails.com/"
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
              src="https://locotrails.com/"
              title="LocoTrails Website Preview"
              className="w-full h-[600px] md:h-[800px] border-0"
              loading="lazy"
            />
          </div>

          {/* Preview Description */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Design Approach</h3>
            <p className="text-gray-600 leading-relaxed">
              The design emphasizes adventure and exploration with vibrant imagery and an intuitive booking flow.
              The custom admin panel allows the LocoTrails team to manage trips, bookings, and customer interactions
              seamlessly. Built with Next.js for optimal performance and Supabase for real-time data management,
              the platform delivers a smooth user experience across all devices.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to build your custom platform?
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

export default LocoTrails;
