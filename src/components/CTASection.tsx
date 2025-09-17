import React from 'react';
import { ArrowRight, Calendar, Download } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-forest-800 via-brand-dark to-forest-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-brand-primary/20 to-brand-light/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-brand-light/20 to-brand-primary/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <h2 className="text-h1 md:text-5xl font-bold mb-6">
          Ready to Dominate?
          <span className="text-brand-light"> The Market Won't Wait.</span>
        </h2>
        
        <p className="text-body text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Your competitors are going to make a move. Get the edge only DenSwap can provide.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="/book-consultation" className="group bg-gradient-to-r from-brand-primary to-brand-light text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center">
            <Calendar className="mr-2 h-5 w-5" />
            Schedule a Call
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a href="/sample-report" className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center">
            <Download className="mr-2 h-5 w-5" />
            Download Feasibility Study Sample
          </a>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-light mb-2">100+</div>
            <div className="text-white/70">Properties Analyzed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-light mb-2">14</div>
            <div className="text-white/70">Years Operating Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-brand-light mb-2">85%</div>
            <div className="text-white/70">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};