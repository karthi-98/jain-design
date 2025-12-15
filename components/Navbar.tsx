import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Instagram, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // WhatsApp Icon Component
  const WhatsAppIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );

  const navLinks = [
    { label: 'Work', href: '#work', isRoute: false },
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
      {/* Top Bar */}
      <div className="fixed top-0 left-0 right-0 z-[51] bg-gray-900 text-white border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-6 py-2.5 flex items-center justify-between">
          {/* Contact Number */}
          <div className="flex items-center gap-3">
            <Phone size={18} className="text-brand-green" />
            <a href="tel:+918838143550" className="text-sm md:text-base font-medium hover:text-brand-green transition-colors">
              +91 8838143550
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 md:gap-5">
            <a
              href="https://www.instagram.com/designwithkarthick/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-green transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:designwithkarthick@gmail.com"
              className="hover:text-brand-green transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://wa.me/918838143550"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-green transition-colors"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className="fixed top-[45px] left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all duration-300"
      >
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 relative z-[70]"
          >
            <span className="font-bold tracking-tight text-gray-900">DesignWithKarthick</span>
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
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/918838143550"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-brand-green text-white text-sm font-medium rounded-full hover:bg-brand-green/90 transition-colors shadow-lg shadow-brand-green/20"
            >
              <WhatsAppIcon size={16} />
              WhatsApp
            </a>
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
              <span className="font-bold tracking-tight text-gray-900">DesignWithKarthick</span>
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
                <p className="text-sm text-gray-400">© 2025 DesignWithKarthick</p>
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