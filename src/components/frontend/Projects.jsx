import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Banner from '../common/Banner';

const Projects = () => {
  return (
<>

    <Banner 
        title="Blogs & Articles" 
        breadcrumb="home / blogs" 
      />


      <section id="services" className="py-16 bg-gray-50">
  <div className="container mx-auto px-2">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
      <p className="text-lg text-gray-600 max-w-xl mx-auto">
        Delivering comprehensive construction solutions to your unique project requirements
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    <div className="group relative">
        <div className="relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl h-[400px]">
          <img
            src="/hero.png"
            alt="Service Title"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/60 to-transparent flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0 transition-all duration-500">
            {/* Content Container */}
            <div className="transform translate-y-8 group-hover:translate-y-0 transition-all duration-300 delay-150">
              <h3 className="text-xl font-semibold text-white mb-3">Service Title</h3>
              <p className="text-gray-200 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                Comprehensive construction management services that ensure your project is completed on time, within budget, and to the highest quality standards.
              </p>
              <a
                href="#"
                className="inline-flex items-center bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors duration-300 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-300"
              >
                Explore Service
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="group relative">
        <div className="relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl h-[400px]">
          <img
            src="/hero.png"
            alt="Service Title"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/60 to-transparent flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0 transition-all duration-500">
            {/* Content Container */}
            <div className="transform translate-y-8 group-hover:translate-y-0 transition-all duration-300 delay-150">
              <h3 className="text-xl font-semibold text-white mb-3">Service Title</h3>
              <p className="text-gray-200 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                Comprehensive construction management services that ensure your project is completed on time, within budget, and to the highest quality standards.
              </p>
              <a
                href="#"
                className="inline-flex items-center bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors duration-300 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-300"
              >
                Explore Service
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="group relative">
        <div className="relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl h-[400px]">
          <img
            src="/hero.png"
            alt="Service Title"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/60 to-transparent flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0 transition-all duration-500">
            {/* Content Container */}
            <div className="transform translate-y-8 group-hover:translate-y-0 transition-all duration-300 delay-150">
              <h3 className="text-xl font-semibold text-white mb-3">Service Title</h3>
              <p className="text-gray-200 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                Comprehensive construction management services that ensure your project is completed on time, within budget, and to the highest quality standards.
              </p>
              <a
                href="#"
                className="inline-flex items-center bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-colors duration-300 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-300"
              >
                Explore Service
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
     
    </div>

    
    </div>
    <a href="#services"className="border-2 border-white/30 text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:border-white/60 inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  View More
                </a>
    </section>

      <Footer />
      </>
  );
};

export default Projects