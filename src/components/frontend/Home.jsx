import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import About from '../common/About';
import Services from '../common/Services';
import Contact from '../common/Contact';
import Blogs from '../common/Blogs';
import Whyus from '../common/Whyus';
import LatestTestimonials from '../common/LatestTestimonials';
import LatestServices from '../common/LatestServices';
import LatestProjects from '../common/LatestProjects';
import LatestBlogs from '../common/LatestBlogs';
import Workstats from '../common/Workstats';
import { Facebook, Twitter, Linkedin, Instagram, Mail, PhoneCall, MapPin } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-whitesmoke" 
    style={{ backgroundColor: '#fffefd' }}
    >
      <main>
        <section className="relative min-h-screen flex flex-col">
          {/* Background Image */}
          <div className="absolute inset-0 z-[1]">
            <img
              src="/3.png"
              alt="Construction Site"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          {/* Header */}
          <div className="relative">
            <Header />
          </div>

          {/* Hero Content */}
          <div className="container mx-auto px-6 py-24 relative z-[10] flex-grow flex items-center justify-center">
            <div className="text-center max-w-4xl mx-auto">
              <div className="mb-6">
                <span className="bg-white/10 text-white px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase">
                  Leading Construction Solutions
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
               Building Your Vision,
                <br />
                <span className="text-blue-300">
                  Delivering Excellence
                </span>
              </h1>

              <p className="text-lg text-white/90 max-w-2xl mx-auto mb-10 leading-relaxed">
                With strategic innovation and meticulous craftsmanship, we transform complex construction challenges into seamless, sustainable architectural solutions.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link
                  to="/services"
                  className="bg-blue-600 text-white px-8 py-3.5 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold tracking-wider uppercase text-sm shadow-lg"
                >
                  Our Services
                </Link>

                <Link
                  to="/contacts"
                  className="border border-white/30 text-white px-8 py-3.5 rounded-lg hover:bg-white/10 transition-colors duration-300 font-semibold tracking-wider uppercase text-sm"
                >
                 Contact Us
                </Link>
              </div>

              {/* Scroll Indicator */}
              <div className="mt-16 animate-bounce">
                <div className="flex flex-col items-center text-white/70 hover:text-white transition-colors">
                  <span className="text-xs mb-2 tracking-wider uppercase">Scroll Down</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>
            </div>

            
          </div>
        </section>
        
        {/* Other Sections */}
        <Workstats/>
        <About />
        <Whyus />
        <LatestServices />
        <LatestProjects />
        <LatestBlogs/>
        <LatestTestimonials/>
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
