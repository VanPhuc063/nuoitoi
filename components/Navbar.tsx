import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee } from 'lucide-react';
import { NavItem } from '../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'Tại Sao?', href: '#why' },
  { label: 'So Sánh', href: '#compare' },
  { label: 'Chi Tiêu', href: '#usage' },
  { label: 'Donate', href: '#donate' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="text-3xl animate-bounce">🌱</span>
          <span className="font-bold text-xl md:text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
            NUÔI TÔI
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="text-gray-700 font-medium hover:text-primary transition-colors relative group"
            >
              {item.label === 'Donate' ? (
                <span className="bg-gradient-to-r from-primary to-red-400 text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all flex items-center gap-2">
                  <Coffee size={18} />
                  DONATE
                </span>
              ) : (
                <>
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all group-hover:w-full"></span>
                </>
              )}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white/98 backdrop-blur-xl z-40 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center gap-8 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '0', height: '100vh' }}
      >
        <button 
          className="absolute top-6 right-6 text-gray-500 hover:text-red-500"
          onClick={() => setIsOpen(false)}
        >
          <X size={32} />
        </button>
        
        {NAV_ITEMS.map((item) => (
          <button
            key={item.label}
            onClick={() => scrollToSection(item.href)}
            className={`text-2xl font-bold ${
              item.label === 'Donate' 
                ? 'text-primary bg-red-50 px-8 py-3 rounded-2xl' 
                : 'text-gray-800'
            }`}
          >
            {item.label}
          </button>
        ))}
        
        <div className="mt-8 text-sm text-gray-400">
          Hãy nuôi tôi, đừng ngại! 🍜
        </div>
      </div>
    </nav>
  );
};