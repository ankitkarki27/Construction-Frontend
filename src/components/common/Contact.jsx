import React from "react";
import { Mail, Phone, MapPin, Send, Clock, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/contact-now", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await res.json();

      if (result.status === true) {
        toast.success(result.message);
        reset();
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            Let's Build <span className="text-blue-600">Something Amazing</span> Together
          </h2>
          <p className="text-lg text-gray-600">
            Reach out to discuss your project needs and discover how we can transform your vision into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {/* Left Side - Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-blue-600">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <ContactInfo 
                  icon={<Phone className="w-5 h-5 text-blue-600" />}
                  title="Phone"
                  detail="9812345678"
                />
                
                <ContactInfo 
                  icon={<Mail className="w-5 h-5 text-blue-600" />}
                  title="Email"
                  detail="contact@rainbowconst.com"
                />
                
                <ContactInfo 
                  icon={<MapPin className="w-5 h-5 text-blue-600" />}
                  title="Office"
                  detail="Bhaktapur, Nepal"
                />
                
                <ContactInfo 
                  icon={<Clock className="w-5 h-5 text-blue-600" />}
                  title="Business Hours"
                  detail="Mon - Fri: 8:00 AM - 6:00 PM"
                />
              </div>
              
              <div className="mt-10 pt-6 border-t border-gray-100">
                <a href="#" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                  View our location on map <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Send us a message</h3>
              <p className="text-gray-500 mb-8">Fill out the form below and we'll get back to you shortly.</p>
              
              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      {...register("name", { required: "Name is required" })}
                      type="text"
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none transition-all"
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@gmail\.com$/i,
                          message: "Please enter a valid Gmail address"
                        }
                      })}
                      type="email"
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none transition-all"
                      placeholder="you@gmail.com"
                    />
                    {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input
                      {...register("phone")}
                      type="tel"
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none transition-all"
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Inquiry Type</label>
                    <select
                      {...register("subject")}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none transition-all"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Project Discussion">Project Discussion</option>
                      <option value="Request a Quote">Request a Quote</option>
                      <option value="Support Request">Support Request</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Career">Career</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                  <textarea
                    {...register("message", { required: "Please enter your message" })}
                    rows={4}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:bg-white focus:outline-none transition-all resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                  {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>}
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 px-6 rounded-lg font-medium transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                  <p className="text-sm text-gray-500 text-center mt-3">
                    We respect your privacy and will never share your information.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Simplified contact info component
const ContactInfo = ({ icon, title, detail }) => (
  <div className="flex items-start gap-3">
    <div className="flex-shrink-0 bg-blue-50 p-2 rounded-full">
      {icon}
    </div>
    <div>
      <h4 className="text-sm font-medium text-gray-500">{title}</h4>
      <p className="text-base text-gray-800">{detail}</p>
    </div>
  </div>
);

export default Contact;