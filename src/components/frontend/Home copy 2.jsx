import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import About  from '../common/About';
import Services  from '../common/Services';
import Contact  from '../common/Contact';
import Blogs  from '../common/Blogs';
import Whyus from '../common/Whyus';
import Testimonials from '../common/Testimonials';
import { Facebook, Twitter, Linkedin, Instagram, Mail, PhoneCall, MapPin } from "lucide-react";

const Home = () => {
  return (
    <>
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      <main>
        <section className="relative min-h-[700px] flex flex-col overflow-hidden">
          {/* Background Image with Enhanced Effects */}
          <div className="absolute inset-0 z-0">
            <img
              src="/hero.png"
              alt="Construction Site"
              className="w-full h-full object-cover object-center transform scale-105 blur-[2px]"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-900/40 mix-blend-multiply"></div>
          </div>

          {/* Header */}
          <div className="relative z-10">
            <Header />
          </div>

          {/* Hero Content with Enhanced Layout */}
          <div className="container mx-auto px-4 py-24 relative z-10 flex-grow flex items-center justify-center">
            <div className="text-center max-w-3xl mx-auto backdrop-blur-sm bg-white/5 rounded-2xl p-12 border border-white/10 shadow-2xl">
              <div className="mb-8">
                <span className="bg-blue-600/20 text-blue-400 px-6 py-2 rounded-full text-sm font-semibold animate-pulse">
                  Building Futures Since 1998
                </span>
              </div>
              
              <h1 className="text-6xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
                Building Your Vision,<br />
                <span className="text-blue-400">Delivering Excellence</span>
              </h1>

              <p className="text-xl text-blue-200 max-w-2xl mx-auto mb-10 opacity-100 tracking-wide">
                We transform construction challenges into successful projects with innovative design, precision engineering, and unwavering commitment.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a
                  href="#services"
                  className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Explore Our Services
                </a>

                <a
                  href="#contact"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:border-white/60 inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Get in Touch
                </a>
              </div>

              {/* <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
                <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/20">
                  <div className="text-4xl font-bold text-blue-300">25+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/20">
                  <div className="text-4xl font-bold text-blue-300">500+</div>
                  <div className="text-sm">Projects Completed</div>
                </div>
                <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/20">
                  <div className="text-4xl font-bold text-blue-300">100%</div>
                  <div className="text-sm">Safety Record</div>
                </div>
                <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/20">
                  <div className="text-4xl font-bold text-blue-300">50+</div>
                  <div className="text-sm">Expert Team</div>
                </div>
              </div> */}

               {/* Scroll Indicator */}
               <div className="mt-16 animate-bounce">
                  <div className="flex flex-col items-center text-blue-200">
                    <span className="text-sm mb-2">Explore More</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </div>
            </div>
          </div>
        </section>

        <About />
        <Services />
        <Whyus/>
        <Testimonials/>
        <Blogs/>
        <Contact/>
      </main>

      <Footer />
    </div>
    </>
  );
};

export default Home;