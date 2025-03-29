import React from 'react'

const About = () => {
  return (
    <section className="container mx-auto px-6 py-24 bg-white">
      <div className="flex flex-col md:flex-row-reverse items-center gap-16">
        {/* Image Container - Now on the right side */}
        <div className="w-full md:w-1/2">
          <div className="relative">
            {/* Main image with decorative elements */}
            <div className="rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="/hero2.png" 
                alt="BuildPro Solutions Team" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-red-500 rounded-full opacity-20 z-0"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-600 rounded-full opacity-20 z-0"></div>
          </div>
        </div>
        
        {/* Text Container */}
        <div className="w-full md:w-1/2 mt-12 md:mt-0">
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="h-1 w-12 bg-red-500 mr-4"></div>
              <h2 className="text-lg font-semibold text-red-500 uppercase tracking-wider">
                About us
              </h2>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Crafting Structure that <span className="text-blue-600">lasts a lifetime</span>
            </h2>
            
            <div className="text-gray-600 space-y-6 text-lg">
              <p>
                Founded in 2010, BuildPro Solutions has been at the forefront of innovative construction management and engineering. Our team of dedicated professionals brings together decades of industry experience and cutting-edge technological expertise.
              </p>
              <p>
                We specialize in transforming complex construction challenges into seamless, efficient projects. Our approach combines strategic planning, advanced technologies, and a commitment to sustainable building practices.
              </p>
            </div>
            
            <div className="pt-6">
              <a 
                href="/about" 
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Learn More About Us
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About