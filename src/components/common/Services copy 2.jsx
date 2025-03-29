import React, { useState, useEffect } from 'react';
import { apiUrl, fileUrl } from '../common/http';

const Services = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');
  const [categories, setCategories] = useState(['all']);

  const fetchAllServices = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${apiUrl}get-services`, {
        method: 'GET'
      });
      
      if (!response.ok) throw new Error('Failed to fetch services');
      
      const result = await response.json();
      
      if (result.status && Array.isArray(result.data)) {
        setServices(result.data);
        
        // Extract unique categories from services
        const uniqueCategories = ['all', ...new Set(result.data.map(service => service.category || 'uncategorized'))];
        setCategories(uniqueCategories);
      } else {
        console.error('Invalid response structure:', result);
      }
    } catch (error) {
      console.error("Error fetching services:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllServices();
  }, []);

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center mb-16">
          <span className="px-4 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-4">Our Expertise</span>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight text-center">Professional Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center leading-relaxed">
            Delivering exceptional construction solutions with precision and excellence for your unique project needs.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-4 hide-scrollbar">
          <div className="inline-flex bg-gray-100 p-1 rounded-xl">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
                  activeTab === category 
                    ? 'bg-white text-blue-700 shadow-md' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
              <div className="mt-4 text-gray-500 text-center">Loading services</div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-blue-600 mix-blend-multiply opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-10"></div>
                  <img
                    src={`${fileUrl}uploads/services/small/${service.image}`}
                    alt={service.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  {service.category && (
                    <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-blue-700 text-xs font-bold px-3 py-1 rounded-full z-20">
                      {service.category}
                    </span>
                  )}
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                    {service.short_desc}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <a
                      href={`/services/${service.id}`}
                      className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors duration-300"
                    >
                      Learn More
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                    <span className="flex items-center text-gray-400 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {service.duration || '1-2 weeks'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredServices.length === 0 && !isLoading && (
          <div className="text-center py-16 bg-gray-50 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M12 21a9 9 0 110-18 9 9 0 010 18z" />
            </svg>
            <h3 className="text-xl font-medium text-gray-700 mb-2">No services found</h3>
            <p className="text-gray-500">There are no services in this category yet.</p>
          </div>
        )}

        <div className="text-center mt-16">
          <div className="inline-flex items-center justify-center space-x-2 mb-8">
            <span className="w-3 h-3 bg-blue-300 rounded-full"></span>
            <span className="w-24 h-px bg-gray-300"></span>
            <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
            <span className="w-24 h-px bg-gray-300"></span>
            <span className="w-3 h-3 bg-blue-900 rounded-full"></span>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a 
              href="/all-services" 
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all duration-300 shadow-blue-200 shadow-lg hover:shadow-blue-300 hover:shadow-xl flex items-center justify-center"
            >
              View All Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="/contacts" 
              className="px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 font-medium rounded-xl border border-gray-200 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              Request Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;