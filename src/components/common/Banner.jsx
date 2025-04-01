import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import Header from '../common/Header';

const Banner = ({ title, breadcrumb }) => {
  return (
    <div className="relative w-full h-[350px] overflow-hidden">
      <img
        src="/3.png"
        alt="Construction Site"
        className="w-full h-full object-cover brightness-75 transition-transform duration-700 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"></div>
      
      {/* Header */}
      <div className="absolute top-0 left-0 w-full z-10">
        <Header />
      </div>

      {/* Banner Content */}
      <div className="absolute inset-0 flex flex-col items-start justify-end text-white px-15 py-8">
        <div className="ml-4 mb-8">
          <h1 className="text-2xl font-extrabold mb-3 uppercase tracking-wide text-shadow-sm">
            {title}
          </h1>
          <div className="flex items-center">
            {/* <div className="h-1 w-16 bg-blue-400 mr-4"></div> */}
            <p className="text-lg text-gray-100 uppercase tracking-wider">{breadcrumb}</p>
          </div>
        </div>
        
        {/* Home Icon - Updated */}
        <Link 
          to="/" 
          className="absolute top-60 right-6 text-white bg-black/500 hover:bg-blue-500 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-300 shadow-lg"
        >
          <Home size={18} strokeWidth={2.5} />
          <span className="font-medium">Home</span>
        </Link>
      </div>
    </div>
  );
};

export default Banner;