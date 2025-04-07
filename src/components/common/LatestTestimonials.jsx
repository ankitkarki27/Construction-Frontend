import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { apiUrl, fileUrl } from './http';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LatestTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchLatestTestimonials = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(apiUrl + 'latest-testimonials?limit=6');
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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <section id="latest-testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What Our Clients Say</h2>
          <p className="text-gray-600 text-lg mt-2 max-w-2xl mx-auto">
            Discover real stories from our valued clients who experienced our excellence.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center py-16">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        ) : (
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4">
                <div className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 h-full flex flex-col justify-between">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={`${fileUrl}uploads/testimonials/small/${testimonial.image}`}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border border-gray-200"
                    />
                    <div>
                      <h4 className="text-md font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.designation}{testimonial.company ? `, ${testimonial.company}` : ''}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm italic leading-relaxed">
                    “{testimonial.testimonial}”
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default LatestTestimonials;
