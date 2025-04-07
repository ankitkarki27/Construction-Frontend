import React from 'react';

const About = () => {
  return (
    <section className="container mx-auto px-6 py-24 bg-whitesmoke">
      {/* Clean, modern title section */}
      <div className="text-center mb-16">
        <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-3">Who We Are</span>
        <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>    
      </div>

      <div className="flex flex-col md:flex-row-reverse items-center gap-12">
        {/* Larger image container with modern styling */}
        <div className="w-full md:w-3/5">
          <div className="relative h-full">
            {/* Main image - enlarged */}
            <div className="rounded-xl overflow-hidden shadow-lg h-full">
              <img 
                src="/hero2.png" 
                alt="Rainbow Construction Team" 
                className="w-full h-[500px] object-cover object-center"
              />
              {/* Professional overlay banner */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className="text-white font-medium tracking-wide">Building Excellence Since 2010</p>
              </div>
            </div>
            {/* Clean, subtle accent element */}
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-8 border-blue-600/20 rounded-xl -z-10"></div>
          </div>
        </div>
        
        {/* Content container */}
        <div className="w-full md:w-2/5 mt-12 md:mt-0">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-800 leading-tight">
              Building <span className="text-blue-600">Tomorrow's Infrastructure</span> With Today's Innovation
            </h3>
            
            <div className="text-gray-600 space-y-4">
              <p>
                Founded in 2010, Rainbow Construction has been at the forefront of innovative construction management and engineering. Our team of dedicated professionals brings together decades of industry experience and cutting-edge technological expertise.
              </p>
              <p>
                We specialize in transforming complex construction challenges into seamless, efficient projects. Our approach combines strategic planning, advanced technologies, and a commitment to sustainable building practices.
              </p>
            </div>
            
            {/* Modern key points with improved styling */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 pt-2">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                </div>
                <span className="text-gray-700 font-medium">Quality Craftsmanship</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                </div>
                <span className="text-gray-700 font-medium">Innovative Solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                </div>
                <span className="text-gray-700 font-medium">Timely Delivery</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                </div>
                <span className="text-gray-700 font-medium">Sustainable Practices</span>
              </div>
            </div>
            
            {/* Clean, professional CTA button */}
            <div className="pt-4">
              <a 
                href="/about" 
                className="inline-block px-8 py-3.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
              >
                Learn More About Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 inline-block" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;