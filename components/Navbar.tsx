import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Work', href: '/our-work', isRoute: true },
    { label: 'Pricing', href: '#pricing', isRoute: false },
    { label: 'Contact', href: '#contact', isRoute: false },
  ];

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    // Small timeout to allow the body overflow style to reset before scrolling
    setTimeout(() => {
      if (href === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <>
      <header 
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300"
      >
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 relative z-[70]"
          >
            <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center text-white font-bold text-sm">
              J
            </div>
            <span className="font-bold tracking-tight text-gray-900 hidden sm:block">JAIN DESIGNS</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.isRoute ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-medium text-gray-600 hover:text-brand-green transition-colors flex items-center gap-1 group"
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0" />
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-sm font-medium text-gray-600 hover:text-brand-green transition-colors flex items-center gap-1 group"
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0" />
                </a>
              )
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, '#contact')}
              className="hidden md:inline-flex px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors shadow-lg shadow-gray-900/10"
            >
              Get a Quote
            </a>
            
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 text-gray-800 hover:text-brand-green transition-colors"
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed inset-0 z-[60] flex justify-end md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-gray-900/20 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Drawer Panel */}
        <div 
          className={`relative w-[85%] max-w-md h-full bg-white shadow-2xl flex flex-col p-8 transform transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header inside drawer */}
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center text-white font-bold text-sm">
                J
              </div>
              <span className="font-bold tracking-tight text-gray-900">JAIN DESIGNS</span>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-gray-500 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-100"
              aria-label="Close Menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Links with Stagger Animation */}
          <nav className="flex flex-col gap-6">
            {navLinks.map((link, index) => (
              link.isRoute ? (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ transitionDelay: `${index * 75}ms` }}
                  className={`text-2xl font-bold text-gray-900 hover:text-brand-green transition-all duration-500 transform ${
                    isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  style={{ transitionDelay: `${index * 75}ms` }}
                  className={`text-2xl font-bold text-gray-900 hover:text-brand-green transition-all duration-500 transform ${
                    isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>

          {/* Footer inside drawer */}
          <div 
            className={`mt-auto transition-all duration-700 delay-300 ${
               isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
             <a 
               href="#contact" 
               onClick={(e) => handleScroll(e, '#contact')} 
               className="w-full block bg-brand-green text-white text-center py-4 rounded-xl font-bold text-lg shadow-lg shadow-brand-green/20 mb-6 active:scale-95 transition-transform"
             >
               Get a Quote
             </a>
             <div className="text-center">
                <p className="text-sm text-gray-400">© 2025 Jain Designs</p>
                <div className="flex justify-center gap-4 mt-4 text-gray-400">
                  <a href="#" className="hover:text-brand-green text-xs">Privacy</a>
                  <a href="#" className="hover:text-brand-green text-xs">Terms</a>
                </div>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;