import React, { useEffect, useState } from 'react';
import { apiUrl, fileUrl } from './http';

const LatestTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchLatestTestimonials = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(apiUrl + 'latest-testimonials?limit=4', {
        method: 'GET',
      });
      const result = await response.json();
      if (result.data) {
        setTestimonials(result.data);
      }
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLatestTestimonials();
  }, []);

  return (
    <section id="latest-testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="flex flex-col items-center">
            <span className="px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-3">testimonialS</span>
            <h2 className="text-3xl font-bold text-gray-800 mb-3 text-center">Our Featured Testimonials</h2>
            <div className="w-20 h-1 bg-blue-500 mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center">
              Explore our high-quality construction testimonials delivered with excellence
            </p>
          </div>
        </div>

        {isLoading ? (
          <div className="py-12 flex justify-center">
            <div role="status" className="flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
              <span className="mt-3 text-gray-600">Loading testimonials...</span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                aria-label={`Testimonial from ${testimonial.name}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={`${fileUrl}uploads/testimonials/small/${testimonial.image}`}
                    alt={testimonial.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-0 left-0 m-3">
                    <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">
                      Featured
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {testimonial.designation}{testimonial.company ? `, ${testimonial.company}` : ''}
                  </p>
                  <p className="text-gray-600 text-sm flex-grow">{testimonial.testimonial}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestTestimonials;
