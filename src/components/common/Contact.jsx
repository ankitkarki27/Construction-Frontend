import React from 'react';
import { Mail, Phone, MapPin, Building, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (

    <section className="py-16">
    <div className="container mx-auto px-4">
    <div className="text-center mb-10">
    <p className="text-xl text-black max-w-xl mx-auto mt-2">
        Have a project in mind? Let’s discuss how we can build something great together.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
      {/* Contact Information */}
      <div className="space-y-6">
        <div className="bg-white p-6">
          <div className="flex items-center gap-4">
          <div className="text-black bg-white p-6 rounded-lg shadow-md">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
              <p className="text-gray-900">9812345678</p>
              <p className="text-gray-800 text-sm">Mon - Fri: 8:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6">
          <div className="flex items-center gap-4">
          <div className="text-black bg-white p-6 rounded-lg shadow-md">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Email</h3>
              <p className="text-gray-800">contact@rainbowconstructions.com</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6">
          <div className="flex items-center gap-4">
          <div className="text-black bg-white p-6 rounded-lg shadow-md">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Visit Us</h3>
              {/* <p className="text-gray-600">123 Rainbow Street, Suite 456</p> */}
              <p className="text-gray-800">Bhaktapur,Nepal</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="bg-white p-8 rounded-lg shadow-md">
        <form className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:font-bold"
              placeholder="Full Name"
            />

            <input
             type="tel"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:font-bold"
              placeholder="Your Phone Number"
            />
          </div>
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:font-bold"
            placeholder="Your Email Address"
          />
          <textarea
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder:font-bold"
            placeholder="Your Message"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='currentColor' class="mr-2 inline" viewBox="0 0 548.244 548.244">
                <path fill-rule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clip-rule="evenodd" data-original="#000000" />
              </svg>
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
  );
};

export default Contact;