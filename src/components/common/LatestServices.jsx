import React, { useEffect, useState } from 'react';
import { apiUrl, fileUrl } from './http';

const LatestServices = () => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchLatestServices = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(apiUrl + 'latest-services?limit=3', {
        method: 'GET',
      });
      const result = await response.json();
      if (result.data) {
        setServices(result.data);
      }
    } catch (error) {
      console.error("Error fetching services:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLatestServices();
  }, []);

  return (
    <section id="latest-services" className="py-20 px-0 bg-white">
      <div className="container mx-auto px-1">
        <div className="mb-12">
          <div className="flex flex-col items-center">
            <div className="w-16 h-1 bg-blue-500 mb-4"></div>
            <h2 className="text-3xl font-bold text-gray-800 mb-3 text-center">Our Featured Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center">
              Discover our most popular construction solutions designed to meet your project needs
            </p>
          </div>
        </div>

        {isLoading ? (
          <div className="py-12 flex justify-center">
            <div role="status" className="flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
              <span className="mt-3 text-gray-600">Loading services...</span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className="bg-white border border-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={`${fileUrl}uploads/services/small/${service.image}`}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-0 left-0 m-3">
                    <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-1">{service.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">{service.short_desc}</p>
                  
                  <a
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-blue-500 hover:text-blue-700 font-medium text-sm group"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Read More
                    <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <a
            href="/services"
            className="inline-block px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300 shadow-md"
            aria-label="Explore all construction services"
          >
            Explore All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestServices;