import React from 'react'

const About = () => {
  return (
    <>
    <section className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-12">
      {/* Image Container */}
      <div className="w-full md:w-1/2 rounded-lg overflow-hidden shadow-lg">
        <img 
          src="/hero2.png" 
          alt="BuildPro Solutions Team" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Text Container */}
      <div className="w-full md:w-1/2">
        <h2 className="text-xl font-bold text-red-500 mb-6">
          About us
        </h2>
        <div className="text-gray-600 space-y-4">
          <h2 className="text-2xl font-bold text-black">
            Crafting Structure that lasts life time
          </h2>
          <p>
            Founded in 2010, BuildPro Solutions has been at the forefront of innovative construction management and engineering. Our team of dedicated professionals brings together decades of industry experience and cutting-edge technological expertise.
          </p>
          <p>
            We specialize in transforming complex construction challenges into seamless, efficient projects. Our approach combines strategic planning, advanced technologies, and a commitment to sustainable building practices.
          </p>
          {/* <p>
            With a proven track record of successful project deliveries across residential, commercial, and industrial sectors, we pride ourselves on quality, reliability, and client satisfaction.
          </p> */}
        </div>
        <a 
          href="#about" 
          className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
        >
          Learn More About Us
        </a>
      </div>
    </section>
    </>
  )
}

export default About
