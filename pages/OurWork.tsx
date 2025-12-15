import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import SEO from '../components/SEO';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  url: string;
  liveUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'LocoTrails',
    category: 'Custom Platform',
    description: 'An experiential travel platform focused on immersive, "unscripted" journeys with curated Small Group Adventures and Surprise Trips. Features a giving pledge where 10% of margins fund vacations for underprivileged children.',
    image: '/assets/locotrails.jpg',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Admin Panel'],
    url: '/projects/locotrails',
    liveUrl: 'https://locotrails.com/',
  },
  {
    id: 2,
    title: 'ARREDS Green Energy',
    category: 'Standard Website',
    description: 'An agri-tech platform empowering rural farmers through sustainable energy solutions including Solar Powered Irrigation Systems, Biogas Units, and organic farming training with integrated fintech credit support.',
    image: '/assets/ArredsGe.jpg',
    tags: ['Next.js', 'TypeScript'],
    url: '/projects/arreds-green-energy',
    liveUrl: 'https://www.arredsge.com/',
  },
  {
    id: 3,
    title: 'Sree Raaja Ganapathy Oil Mill',
    category: 'E-Commerce Store',
    description: 'Premium traditional cold-pressed (Chekku) cooking oil manufacturer specializing in Coconut, Groundnut, and Gingelly oils. Emphasizes purity, health benefits, and traditional extraction methods to preserve natural nutrients.',
    image: '/assets/SreeRaajaGanapathyOilMill.jpg',
    tags: ['Next.js', 'Firebase', 'TypeScript'],
    url: '/projects/sree-raaja-ganapathy-oil-mill',
    liveUrl: 'https://sreeraajaganapathyoilmill.com/',
  },
];

const OurWork: React.FC = () => {
  return (
    <>
      <SEO
        title="Our Work - Portfolio & Case Studies | DesignWithKarthick"
        description="Explore our portfolio of web design and development projects including custom platforms, e-commerce stores, and standard websites. See how we transform businesses digitally."
        canonical="https://yourwebsite.com/our-work"
        keywords="web design portfolio, web development projects, custom platform examples, ecommerce portfolio"
      />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 mb-6">
                <span className="h-px w-12 bg-brand-green"></span>
                <span className="text-brand-green font-bold tracking-widest uppercase text-sm">
                  Our Portfolio
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
                Work that <span className="text-brand-green">speaks</span> for itself
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
                From custom platforms to e-commerce solutions, we craft digital experiences
                that drive results. Each project is a testament to our commitment to excellence,
                innovation, and client success.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-6 border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-brand-green mb-2">3+</div>
                <div className="text-sm text-gray-600 font-medium">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-brand-green mb-2">100%</div>
                <div className="text-sm text-gray-600 font-medium">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-brand-green mb-2">3</div>
                <div className="text-sm text-gray-600 font-medium">Service Types</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-brand-green mb-2">24/7</div>
                <div className="text-sm text-gray-600 font-medium">Support Available</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-8 px-6 sticky top-0 bg-white/80 backdrop-blur-md z-40 border-b border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-4 overflow-x-auto">
              <button className="px-6 py-2.5 bg-brand-green text-white rounded-full font-medium text-sm whitespace-nowrap">
                All Projects
              </button>
              <button className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-full font-medium text-sm hover:bg-gray-200 transition-colors whitespace-nowrap">
                Custom Platform
              </button>
              <button className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-full font-medium text-sm hover:bg-gray-200 transition-colors whitespace-nowrap">
                E-Commerce
              </button>
              <button className="px-6 py-2.5 bg-gray-100 text-gray-700 rounded-full font-medium text-sm hover:bg-gray-200 transition-colors whitespace-nowrap">
                Standard Website
              </button>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-16 md:gap-20">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
                    index % 2 === 1 ? 'md:grid-flow-dense' : ''
                  }`}
                >
                  {/* Image */}
                  <Link
                    to={project.url}
                    className={`group relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                      index % 2 === 1 ? 'md:col-start-2' : ''
                    }`}
                  >
                    <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/10 transition-all duration-500 z-10" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />

                    {/* Floating Action Button */}
                    <div className="absolute bottom-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
                      <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl text-gray-900 hover:bg-brand-green hover:text-white transition-colors">
                        <ArrowUpRight size={24} />
                      </div>
                    </div>
                  </Link>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                    <div className="inline-block px-4 py-1.5 bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                      {project.category}
                    </div>

                    <Link to={project.url}>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 hover:text-brand-green transition-colors">
                        {project.title}
                      </h2>
                    </Link>

                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4">
                      <Link
                        to={project.url}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-brand-green text-white rounded-full font-medium text-sm hover:bg-brand-green/90 transition-colors shadow-lg"
                      >
                        View Case Study
                        <ArrowUpRight size={16} />
                      </Link>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-900 rounded-full font-medium text-sm hover:bg-gray-200 transition-colors"
                      >
                        Visit Live Site
                        <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to start your project?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life. From concept to launch,
              we're with you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/#contact"
                className="inline-block px-8 py-4 bg-brand-green text-white font-medium rounded-full hover:bg-brand-green/90 transition-colors"
              >
                Get In Touch
              </Link>
              <Link
                to="/#pricing"
                className="inline-block px-8 py-4 bg-white/10 text-white font-medium rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default OurWork;
