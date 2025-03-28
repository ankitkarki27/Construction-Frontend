import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import About from '../common/About';
import Services from '../common/Services';
import Contact from '../common/Contact';
import Blogs from '../common/Blogs';
import Whyus from '../common/Whyus';
import Testimonials from '../common/Testimonials';
import { Construction, HardHat, Users } from 'lucide-react';

const StatCard = ({ value, label, icon: Icon }) => (
  <div className="bg-white/10 p-6 rounded-xl border border-white/10 backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-105 hover:border-blue-400/50">
    <div className="flex items-center justify-between mb-4">
      <Icon className="w-10 h-10 text-blue-400" strokeWidth={1.5} />
      <div className="text-4xl font-bold text-blue-300">{value}</div>
    </div>
    <div className="text-sm text-white/70">{label}</div>
  </div>
);

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white min-h-screen flex flex-col">
      {/* Hero Section with Advanced Layout */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-gray-900/40 mix-blend-overlay"></div>
        </div>

        {/* Header */}
        <div className="relative z-10">
          <Header />
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 py-24 relative z-10 flex-grow flex items-center">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="bg-blue-600/20 text-blue-400 px-6 py-2 rounded-full text-sm font-semibold tracking-wide">
                Innovating Construction Since 1998
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-white">
              Transforming Visions into 
              <span className="text-blue-400 block">Architectural Masterpieces</span>
            </h1>

            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10">
              Combining cutting-edge technology, sustainable practices, and unparalleled craftsmanship to deliver exceptional construction solutions that exceed expectations.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <a
                href="#services"
                className="bg-blue-600 text-white px-10 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 inline-flex items-center gap-3 shadow-xl hover:shadow-2xl"
              >
                <div className="w-6 h-6" />
                Explore Our Services
              </a>
              <a
                href="#contact"
                className="border-2 border-white/30 text-white px-10 py-4 rounded-full hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-3"
              >
                <div className="w-6 h-6" />
                Get Consultation
              </a>
            </div>

            {/* Professional Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  <StatCard 
    value="25+" 
    label="Years of Experience" 
    icon={Construction}  // Available icon
  />
  <StatCard 
    value="25+" 
    label="Years of Experience" 
    icon={Construction}  // Available icon
  />
 
  <StatCard 
    value="100%" 
    label="Safety Standards" 
    icon={HardHat}  // Relevant icon for safety
  />
  <StatCard 
    value="50+" 
    label="Expert Professionals" 
    icon={Users}  // Icon for people or professionals
  />
</div>
          </div>
        </div>
      </section>

      {/* Remaining Sections */}
      <About />
      <Services />
      <Whyus />
      <Testimonials />
      <Blogs />
      <Contact />

      <Footer />
    </div>
  );
};

export default Home;
