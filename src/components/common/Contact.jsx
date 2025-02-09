import React from 'react'

const Contact = () => {
  return (
   <>
<section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header Section */}
    <div className="text-center mb-20">
      <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">Contact Our Team</h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Let's start a conversation about your project needs. Our experts are ready to provide tailored solutions.
      </p>
    </div>

    {/* Contact Information Grid */}
    <div className="grid md:grid-cols-3 gap-8 mb-20">
      <div className="bg-white p-8 rounded-2xl border border-gray-100 transition-all hover:border-blue-50 hover:shadow-lg">
        <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
          <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Direct Line</h3>
        <p className="text-gray-600 text-lg mb-1">+1 (212) 555-0199</p>
        <p className="text-sm text-gray-500">Mon-Fri: 9am - 5pm EST</p>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-gray-100 transition-all hover:border-blue-50 hover:shadow-lg">
        <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
          <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Email</h3>
        <p className="text-gray-600 text-lg mb-1">contact@rainbowbuild.com</p>
        <p className="text-sm text-gray-500">Typically replies within 2 hours</p>
      </div>

      <div className="bg-white p-8 rounded-2xl border border-gray-100 transition-all hover:border-blue-50 hover:shadow-lg">
        <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
          <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Headquarters</h3>
        <p className="text-gray-600 text-lg">500 Park Avenue</p>
        <p className="text-gray-600 text-lg">New York, NY 10022</p>
      </div>
    </div>

    {/* Contact Form Section */}
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-16 p-14">
        {/* Company Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Rainbow Constructions</h3>
            <p className="text-gray-600 leading-relaxed">
              A leader in innovative architectural solutions with 15+ years of industry experience. 
              Certified ISO 9001:2015 quality management.
            </p>
          </div>
          <div className="border-t border-gray-100 pt-8">
            <h4 className="text-sm font-semibold text-gray-500 uppercase mb-4">Business Hours</h4>
            <dl className="space-y-3">
              <div className="flex justify-between">
                <dt className="text-gray-600">Weekdays</dt>
                <dd className="text-gray-900">9:00 AM - 6:00 PM</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-600">Saturdays</dt>
                <dd className="text-gray-900">10:00 AM - 4:00 PM</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-600">Sundays</dt>
                <dd className="text-gray-900">Closed</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input
              type="tel"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">How can we help? *</label>
            <textarea
              rows="4"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 px-6 rounded-xl font-medium hover:bg-blue-700 transition-all flex items-center justify-center space-x-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span>Send Message</span>
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="border-t border-gray-100">
        <div className="h-96 bg-gray-100">
          {/* Insert actual map component here */}
          <div className="flex items-center justify-center h-full text-gray-500">
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</>
  )
}

export default Contact
