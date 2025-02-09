import React from 'react'

import Header from '../common/Header';

const Banner = ({ title, breadcrumb }) => {
  return (
    <div className="relative w-full h-[500px]">
      <img
        src="/hero.png"
        alt="Construction Site"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 to-gray-900/30"></div>
      <div className="absolute top-0 left-0 w-full">
        <Header />
      </div>
      
      {/* Banner Content */}
      <div className="absolute inset-0 flex flex-col items-start justify-end text-white px-8 py-2">
        <div className="ml-4 mb-4">
          <h1 className="text-4xl font-bold mb-2 uppercase">{title}</h1>
          <p className="text-xl  uppercase">{breadcrumb}</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
