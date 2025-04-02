import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" sticky top-0 z-50">
        
      <div className="container mx-auto px-0 py-3">
      <nav className="flex justify-between items-center p-4">
  <div className="flex items-center">
    <a href="/" className="text-2xl font-bold text-white">
      <img
        src="/logo.png"
        alt="Service Title"
        className="h-14 w-auto object-contain"
      />
    </a>
  </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 text-white items-center">
            <a href="/" className="relative text-white text-lg no-underline after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
             > Home
            </a>

            <a href="about" 
            className="relative text-white text-lg no-underline after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
              About
            </a>
            <a href="services" 
            className="relative text-white text-lg no-underline after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
              Services
            </a>
          
            <a href="projects" 
           className="relative text-white text-lg no-underline after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"> 
            Projects
            </a>
            <a href="blogs" 
             className="relative text-white text-lg no-underline after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">  
            Blogs
            </a>
            <a href="contacts" 
             className="relative text-white text-lg no-underline after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">  
             Contact Us
            </a>
            
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>  
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-red-400 shadow-lg">
            <div className="flex flex-col space-y-3 p-4">
              <a href="/" className="py-2 border-b no-underline">
                Home
              </a>
              <a href="about" className="py-2 border-b">
                About
              </a>
              <a href="services" className="py-2 border-b">
                Services
              </a>
              <a href="projects" className="py-2 border-b">
                Projects
              </a>
              
              <a
                href="#contact"
                className="bg-blue-400 text-white px-4 py-2 rounded-full text-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
