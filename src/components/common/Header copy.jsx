import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect (keeping track of scroll position but not changing background)
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isOpen) return;
    
    const handleClickOutside = (event) => {
      if (!event.target.closest('nav')) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 transition-all duration-300 bg-transparent">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="/" className="font-bold text-2xl">
              <img
                src="/logo.png"
                alt="Company Logo"
                className="h-12 w-auto object-contain"
              />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact'].map((item) => (
              <a
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="relative font-medium text-base text-white hover:text-blue-200 transition-colors duration-300 after:absolute after:left-0 after:bottom-[-4px] after:h-0.5 after:w-0 after:bg-current after:transition-all hover:after:w-full"
              >
                {item}
              </a>
            ))}
            
            {/* <a
              href="/contact"
              className="px-6 py-2 rounded-full font-medium bg-white/20 text-white backdrop-blur-sm hover:bg-white/30 transition-all duration-300"
            >
            Book Your Appointment
            </a> */}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className="p-2 rounded-md focus:outline-none text-white"
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu - Slide Down */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-gray-900/90 backdrop-blur-md text-white ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-1 pb-4">
            {['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact'].map((item) => (
              <a
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="px-4 py-3 hover:bg-blue-600/10 rounded-md transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="pt-2 px-4">
              <a
                href="/contact"
                className="block w-full py-3 text-center rounded-md font-medium bg-white/20 text-white hover:bg-white/30"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;