import React, { useState, useEffect } from 'react';
import { apiUrl, fileUrl, token } from '../common/http';
// import { apiUrl, token } from '../../common/http';

const Services = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAllServices = async () => {
  try {
    setIsLoading(true);
    const response = await fetch(apiUrl + 'services',
       { 
        method: 'GET'
       });
    if (!response.ok) throw new Error('Failed to fetch services');
    
    const result = await response.json();
    console.log('Fetched Services:', result);

    if (result.status && Array.isArray(result.data)) {
      setServices(result.data);
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

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Delivering comprehensive construction solutions to your unique project requirements.
          </p>
        </div>

        {isLoading ? (
          <p className="text-center text-gray-700">Loading services...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="group relative">
                <div className="relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl h-[400px]">
                  <img
                 src={`${fileUrl}uploads/services/small/${service.image}`}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/60 to-transparent flex flex-col justify-end p-6 translate-y-full group-hover:translate-y-0 transition-all duration-500">
                    {/* Content Container */}
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-all duration-300 delay-150">
                      <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                      <p className="text-gray-200 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                      {service.short_desc}
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
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;