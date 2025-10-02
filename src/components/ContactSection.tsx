import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Brand Background Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-brand-primary/12 to-brand-light/8 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-sage-200/15 to-brand-dark/10 rounded-full blur-2xl transform -translate-x-1/4 translate-y-1/4"></div>
      
      {/* Geometric Corner Elements */}
      <div className="absolute top-16 left-16 opacity-10">
        <div className="grid grid-cols-3 gap-1 transform rotate-12">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-5 h-5 bg-brand-primary/30 rounded-sm"></div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-20 right-24 w-20 h-20 border-2 border-brand-light/40 transform -rotate-45 rounded-lg opacity-12"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-h1 md:text-5xl font-bold text-brand-primary mb-8">
            Ready to Transform
            <span className="text-brand-light"> Your Property?</span>
          </h2>
          <p className="text-body text-neutral-500 max-w-3xl mx-auto">
            Get in touch with our team to discuss your coworking potential and receive a custom analysis.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 relative z-10">
          <div className="space-y-8">
            <div>
              <h3 className="text-h2 font-bold text-brand-primary mb-6">
                Let's Discuss Your Vision
              </h3>
              <p className="text-body text-neutral-900 mb-8 leading-relaxed">
                Our experts are ready to analyze your property and provide data-driven 
                recommendations for coworking success. Every conversation starts with understanding 
                your goals and constraints.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-brand-primary to-brand-light p-3 rounded-2xl shadow-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-brand-primary">Email</div>
                  <div className="text-brand-light">contact@denswap.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-brand-primary to-secondary-400 p-3 rounded-2xl shadow-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-brand-primary">Phone</div>
                  <div className="text-brand-light">+1 (555) 123-4567</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-br from-brand-dark to-brand-primary p-3 rounded-2xl shadow-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-brand-primary">Coverage</div>
                  <div className="text-brand-light">Multiple States Across the US</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-sage-200 shadow-sm">
              <h4 className="font-semibold text-brand-primary mb-3">What to Expect:</h4>
              <ul className="space-y-2 text-small text-neutral-500">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div>
                  Initial consultation within 24 hours
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div>
                  Custom analysis proposal
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div>
                  Detailed feasibility study delivery
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-sage-200 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-500 text-neutral-900 placeholder-neutral-500 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-500 text-neutral-900 placeholder-neutral-500 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-500 text-neutral-900 placeholder-neutral-500 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
                    placeholder="Your company"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-50 border border-neutral-500 text-neutral-900 placeholder-neutral-500 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your property or goals
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-500 text-neutral-900 placeholder-neutral-500 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-colors"
                  placeholder="Property details, location, current situation, specific goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-brand-primary to-brand-light text-white py-4 px-6 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};