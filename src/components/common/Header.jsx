import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AlignJustify,Phone,X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event) => {
      if (!event.target.closest('.side-nav') && !event.target.closest('.nav-toggle')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    });

    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Close nav on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blogs' },
    { name: 'Contact', path: '/contacts' },
  ];

  return (
    <header className="sticky top-0 z-[50] bg-transparent">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="font-bold text-2xl">
            <img
              src="/logo.png"
              alt="Company Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <a href="tel:+1234567890" className="text-white p-2">
            <Phone />
            </a>

            {/* Hamburger Toggle */}
            <button
              className="nav-toggle text-white cursor-pointer p-2 focus:outline-none"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
            >
              <AlignJustify/>

            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Sidebar */}
      <div
        className={`side-nav fixed top-0 bottom-0 right-0 w-64 max-w-full bg-gray-900 text-white shadow-xl transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close */}
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white p-2 hover:bg-white/10 rounded-full transition"
            >
               <X />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 px-4 pb-4">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="block px-4 py-3 hover:bg-blue-600/20 rounded-md transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="p-4 border-t border-gray-700">
            <Link
              to="/contacts"
              className="block w-full py-3 text-center rounded-md font-medium bg-white/20 hover:bg-white/30 transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
