import React, { useEffect, useState } from 'react';
import { apiUrl, fileUrl } from './http';

const LatestBlogs = () => {
  const [blogs, setblogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchLatestBlogs = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(apiUrl + 'latest-blogs?limit=3', {
        method: 'GET',
      });
      const result = await response.json();
      if (result.data) {
        setblogs(result.data);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchLatestBlogs();
  }, []);

  return (
    <section id="latest-blogs" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="flex flex-col items-center">
            <span className="px-4 py-1.5 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-3">blogS</span>
            <h2 className="text-3xl font-bold text-gray-800 mb-3 text-center">Our Featured blogs</h2>
            <div className="w-20 h-1 bg-blue-500 mb-4"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-center">
              Explore our high-quality construction blogs delivered with excellence
            </p>
          </div>
        </div>

        {isLoading ? (
          <div className="py-12 flex justify-center">
            <div role="status" className="flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
              <span className="mt-3 text-gray-600">Loading blogs...</span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {blogs.map((blog) => (
              <a 
                href={`/blogs/${blog.slug}`}
                key={blog.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                aria-label={`View details for ${blog.title}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={`${fileUrl}uploads/blogs/small/${blog.image}`}
                    alt={blog.title}
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
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm flex-grow">{blog.short_desc}</p>
                  
                  <div className="mt-auto inline-flex items-center text-blue-500 font-medium text-sm group">
                    View More
                    <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <a
            href="/blogs"
            className="inline-block px-8 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors duration-300 shadow-md"
            aria-label="Explore all construction blogs"
          >
            Explore All Blogs
          </a>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;