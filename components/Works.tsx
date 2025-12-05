import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  url: string;
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
  },
  {
    id: 2,
    title: 'ARREDS Green Energy',
    category: 'Standard Website',
    description: 'An agri-tech platform empowering rural farmers through sustainable energy solutions including Solar Powered Irrigation Systems, Biogas Units, and organic farming training with integrated fintech credit support.',
    image: '/assets/ArredsGe.jpg',
    tags: ['Next.js', 'TypeScript'],
    url: '/projects/arreds-green-energy',
  },
  {
    id: 3,
    title: 'Sree Raaja Ganapathy Oil Mill',
    category: 'E-Commerce Store',
    description: 'Premium traditional cold-pressed (Chekku) cooking oil manufacturer specializing in Coconut, Groundnut, and Gingelly oils. Emphasizes purity, health benefits, and traditional extraction methods to preserve natural nutrients.',
    image: '/assets/SreeRaajaGanapathyOilMill.jpg',
    tags: ['Next.js', 'Firebase', 'TypeScript'],
    url: '/projects/sree-raaja-ganapathy-oil-mill',
  }
];

const Works: React.FC = () => {
  return (
    <section id="work" className="relative py-24 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-brand-green"></span>
              <span className="text-brand-green font-bold tracking-widest uppercase text-xs">My Works</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Selected projects that <br />
              <span className="text-gray-400 font-serif italic">define brands.</span>
            </h2>
          </div>
          
          <Link to="/our-work" className="hidden md:inline-flex items-center gap-2 text-sm font-bold text-gray-900 uppercase tracking-wider hover:text-brand-green transition-colors group">
            View All Projects
            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-brand-green group-hover:text-white transition-all">
               <ArrowRight size={14} />
            </div>
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {projects.map((project) => (
            <Link key={project.id} to={project.url} className="group cursor-pointer">
              {/* Image Card */}
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100 mb-6 shadow-sm">
                <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/10 transition-all duration-500 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Floating Action Button */}
                <div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-gray-900 hover:bg-brand-green hover:text-white transition-colors">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-green transition-colors">{project.title}</h3>
                    <p className="text-sm font-medium text-gray-500 mt-1">{project.category}</p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 md:hidden flex justify-center">
            <Link to="/our-work" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-medium text-sm shadow-lg">
                View All Projects
                <ArrowRight size={16} />
            </Link>
        </div>

      </div>
    </section>
  );
};

export default Works;