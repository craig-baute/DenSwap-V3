import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
<footer className="bg-emerald-700 text-white py-20 relative overflow-hidden">
<div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          <div>
<div className="mb-8">
              <img src="/DenSwap Green Logo - words and image.png" alt="DenSwap Logo" className="h-10 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
            </div>
<p className="text-body text-emerald-100 mb-8 leading-relaxed font-medium">
              Transforming empty properties into profitable coworking spaces through 
              data-driven insights and real-world experience.
            </p>
            <div className="flex gap-3">
<a href="#" className="bg-white/10 p-3 rounded-lg text-white hover:bg-white/20 transition-all duration-200 shadow-md">
                <Linkedin size={24} />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-lg text-white hover:bg-white/20 transition-all duration-200 shadow-md">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          <div>
<h3 className="text-h3 font-bold mb-8 text-white">Products</h3>
            <ul className="space-y-4 text-emerald-100 font-medium">
              <li><a href="/market-analysis" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Market Analysis</a></li>
              <li><a href="/financial-projections" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Financial Modeling</a></li>
              <li><a href="/operations" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Management Strategy</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Analytics Map</a></li>
            </ul>
          </div>

          <div>
<h3 className="text-h3 font-bold mb-8 text-white">Company</h3>
            <ul className="space-y-4 text-emerald-100 font-medium">
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Blog</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors hover:translate-x-1 inline-block">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-h3 font-bold mb-8 text-white">Contact Info</h3>
<div className="space-y-6 text-emerald-100 font-medium">
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded-lg shadow-md">
                  <Mail size={16} />
                </div>
                <span>contact@denswap.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded-lg shadow-md">
                  <Phone size={16} />
                </div>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-white/10 p-2 rounded-lg shadow-md">
                  <MapPin size={16} />
                </div>
                <span>Multiple States, USA</span>
              </div>
            </div>
          </div>
        </div>

<div className="border-t border-emerald-600 mt-16 pt-8 text-center text-emerald-100 relative font-medium">
          <p>&copy; 2025 DenSwap. All rights reserved. | Professional coworking analytics and consulting.</p>
        </div>
      </div>
    </footer>
  );
};
