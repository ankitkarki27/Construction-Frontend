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
        className="w-full h-full object-cover brightness-90"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/30"></div>
      
      {/* Header */}
      <div className="absolute top-0 left-0 w-full">
        <Header />
      </div>

      {/* Banner Content */}
      <div className="absolute inset-0 flex flex-col items-start justify-end text-white px-16 py-6">
        <div className="ml-4 mb-6">
          <h1 className="text-4xl font-extrabold mb-2 uppercase tracking-wide">
            {title}
          </h1>
          <p className="text-lg text-gray-200 uppercase">{breadcrumb}</p>
        </div>
        {/* Home Icon */}
        <Link to="/" className="absolute top-60 right-18 text-white bg-black/60 p-3 rounded-full hover:bg-white hover:text-black transition-all">
                <Home size={18} />
              </Link>

      </div>
      
      
    </div>
  );
};

export default Banner;
