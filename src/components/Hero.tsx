import React from 'react';
import { TrendingUp, MapPin, DollarSign, ArrowRight, Download, FileText } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-700 py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:24px_24px] opacity-30"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-600/30 to-teal-600/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-600/30 to-emerald-600/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center relative">
          <div className="inline-flex items-center px-5 py-2.5 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full text-sm font-bold text-white mb-8 shadow-sm">
            <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
            Trusted by 100+ property owners across the US
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tight">
            Forecast where coworking will succeed through data
            <br />
          </h1>
          <p className="text-xl md:text-2xl text-white mb-12 max-w-5xl mx-auto leading-relaxed font-bold">
            Get precise square footage calculations, know which type of coworking will succeed, and 
            property recommendations for any ZIP code in 24 hours. Stop guessing. Start with data.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a href="/demand-report" className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/20 transition-all duration-300 text-center inline-flex items-center justify-center">
              See How Much Demand there is In Your Zip Code
            </a>
            <a href="/sample-report" className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-white/20 transition-all duration-300 text-center inline-flex items-center justify-center">
              <Download className="mr-2 h-5 w-5" />
              Download Sample Report
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/30">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-black text-white">115+</div>
                <div className="text-white/80 text-sm font-bold">Projects Completed</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/30">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-black text-white">35,000+</div>
                <div className="text-white/80 text-sm font-bold">Markets Covered</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-white/30">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-black text-white">$500M+</div>
                <div className="text-white/80 text-sm font-bold">Assets Analyzed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};