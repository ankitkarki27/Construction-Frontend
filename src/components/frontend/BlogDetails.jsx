import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiUrl, fileUrl } from '../common/http';
import Banner from '../common/Banner';
import Footer from '../common/Footer';
import { Clock, Calendar, Tag, ChevronRight } from 'lucide-react';

const BlogDetails = () => {
  const {slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDetails = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${apiUrl}blogs/${slug}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setBlog(result.data);
      } catch (error) {
        console.error('Error fetching blog details:', error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogDetails();
  }, [slug]);

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="text-center">
          <div className="inline-block h-12 w-12 border-4 border-t-blue-500 border-blue-100 rounded-full animate-spin mb-4"></div>
          <p className="text-xl text-gray-700">Loading blog details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-500 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Error Loading Blog</h2>
            <p className="text-gray-600 mb-6">{error}</p>
            <a href="/blogs" className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors duration-300">
              Return to Blogs
            </a>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-100 text-yellow-500 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Blog Not Found</h2>
            <p className="text-gray-600 mb-6">We couldn't find the blog you're looking for.</p>
            <a href="/blogs" className="inline-flex items-center px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors duration-300">
              Browse Blogs
            </a>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <Banner title={blog.title} 
      // breadcrumb={`home/blogs/ ${blog.slug}`}
       />
      
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center text-sm text-gray-500">
            <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
            <ChevronRight className="mx-2 h-4 w-4" />
            <a href="/blogs" className="hover:text-blue-600 transition-colors">Blogs</a>
            <ChevronRight className="mx-2 h-4 w-4" />
            <span className="text-gray-700 font-medium">{blog.title}</span>
          </div>
          
          <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-5xl mx-auto">
            <div className="relative h-96 overflow-hidden">
              <img
                src={`${fileUrl}uploads/blogs/small/${blog.image}`}
                alt={`${blog.title} blog`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h1 className="text-4xl font-bold text-white mb-2">{blog.title}</h1>
                <div className="flex items-center space-x-4 text-white">
                <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">
                    Author: {blog.author}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">
                    Updated: {blog.updated_at ? formatDate(blog.updated_at) : "N/A"}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Tag className="h-4 w-4 mr-2" />
                    <span className="text-sm">Construction</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              {/* Blog Overview */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <p className="text-gray-700 leading-relaxed">{blog.short_desc}</p>
                </div>
              </div>
              
              {/* Blog Content */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Blog Details</h2>
                <div className="text-gray-700 leading-relaxed space-y-4">
                  {blog.content.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
              
              {/* CTA Section */}
              <div className="mt-12 bg-gray-50 p-6 rounded-lg border border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Interested in this blog?</h3>
                    <p className="text-gray-600 mt-1">Contact us today for a free consultation .</p>
                  </div>
                  <a 
                    href="/contacts" 
                    className="mt-4 md:mt-0 inline-flex items-center px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors duration-300"
                  >
                   Contact Us
                    <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Related Blogs (Optional) */}
          <div className="mt-16 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Blogs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <a 
                  key={item}
                  href="/blogs/sample-blog" 
                  className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow duration-300 flex items-center group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-500 mr-4">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800 group-hover:text-blue-500 transition-colors">Related Blog {item}</h3>
                    <p className="text-sm text-gray-500">Brief description of the blog</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default BlogDetails;