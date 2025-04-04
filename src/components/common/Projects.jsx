import React, { useState, useEffect } from 'react';
import { apiUrl, fileUrl } from './http';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const fetchAllProjects = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${apiUrl}get-projects`, {
        method: 'GET'
      });
      
      if (!response.ok) throw new Error('Failed to fetch projexts');
      
      const result = await response.json();
      
      if (result.status && Array.isArray(result.data)) {
        setProjects(result.data);
      } else {
        console.error('Invalid response structure:', result);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllProjects();
  }, []);

  // Filter Projects based on search term
  const filteredProjects = projects.filter(service => 
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.short_desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Our projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl">
            Find the right construction projects for your project needs.
          </p>
        </div>

        {/* User controls */}
        <div className="mb-8 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          {/* Search box */}
          <div className="relative max-w-md w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search projects"
            />
            {searchTerm && (
              <button
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setSearchTerm('')}
                aria-label="Clear search"
              >
                <svg className="h-5 w-5 text-gray-400 hover:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* View mode toggle */}
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">View:</span>
            <div className="bg-gray-100 rounded-lg p-1 flex">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
                aria-label="Grid view"
                aria-pressed={viewMode === 'grid'}
              >
                <svg className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
                aria-label="List view"
                aria-pressed={viewMode === 'list'}
              >
                <svg className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mb-6 text-sm text-gray-500">
          {!isLoading && (
            <p>Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
              {searchTerm && ` matching "${searchTerm}"`}
            </p>
          )}
        </div>

        {isLoading ? (
          <div className="py-12 flex justify-center">
            <div role="status" className="flex flex-col items-center">
              <div className="w-12 h-12 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
              <span className="mt-3 text-gray-600">Loading projects...</span>
            </div>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 12H4M8 16l-4-4 4-4" />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">No Projects found</h3>
            <p className="mt-1 text-gray-500">Try adjusting your search terms or browse all projects.</p>
            <button 
              onClick={() => setSearchTerm('')}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Clear Search
            </button>
          </div>
        ) : (
          <>
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
                    <div className="relative h-52">
                      <img
                        src={`${fileUrl}uploads/projects/small/${project.image}`}
                        alt={`${project.title} project`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{project.short_desc}</p>
                      <a
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center text-blue-500 hover:text-blue-700 font-medium"
                        aria-label={`Learn more about ${project.title}`}
                      >
                        Learn more
                        <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredProjects.map((project, index) => (
                  <div key={index} className="flex flex-col sm:flex-row bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
                    <div className="sm:w-1/4 lg:w-1/5">
                      <img
                        src={`${fileUrl}uploads/projects/small/${project.image}`}
                        alt={`${project.title} service`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
                        <p className="text-gray-600">{project.short_desc}</p>
                      </div>
                      <div className="mt-4">
                        <a
                          href={`/projects/${project.slug}`}
                          className="inline-flex items-center text-blue-500 hover:text-blue-700 font-medium"
                          aria-label={`Learn more about ${project.title}`}
                        >
                          Learn more
                          <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {filteredProjects.length > 0 && (
          <div className="mt-12 text-center">
            <a
              href="/contacts"
              className="inline-block px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300"
              aria-label="Contact us about our projects"
            >
              Contact Us About Our Projects
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;