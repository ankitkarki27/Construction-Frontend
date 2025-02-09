import React from 'react'

const Whyus = () => {
  return (
    <div>
          <section id="why-us" className="py-16 bg-white">
  <div className="container mx-auto px-2">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
      <p className="text-lg text-gray-600 max-w-xl mx-auto">
        Excellence in construction, backed by decades of experience and unwavering commitment to quality
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {/* Card 1 */}
      <div className="group relative">
        <div className="h-full bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl p-6">
          <div className="flex flex-col h-full">
            <div className="text-blue-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">35+ Years Experience</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
              With over three decades of expertise, we've successfully delivered countless projects across residential, commercial, and industrial sectors.
            </p>
            <div className="transform group-hover:translate-y-0 transition-all duration-300">
              <a
                href="#"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-300"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="group relative">
        <div className="h-full bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl p-6">
          <div className="flex flex-col h-full">
            <div className="text-blue-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Craftsmanship</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
              Our team of master craftsmen and certified professionals ensures exceptional quality in every detail of your construction project.
            </p>
            <div className="transform group-hover:translate-y-0 transition-all duration-300">
              <a
                href="#"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-300"
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="group relative">
        <div className="h-full bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl p-6">
          <div className="flex flex-col h-full">
            <div className="text-blue-600 mb-4">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Budget Friendly</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
              We provide transparent pricing and cost-effective solutions while maintaining the highest standards of quality and materials.
            </p>
            <div className="transform group-hover:translate-y-0 transition-all duration-300">
              <a
                href="#"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-300"
              >
                Learn More
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
</section>
    </div>
  )
}

export default Whyus
