import React from 'react';
import { TrendingUp, MapPin, DollarSign, ArrowRight, Download, FileText } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-emerald-50/40 py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-gray-200/40 bg-[size:24px_24px] opacity-25"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full blur-3xl opacity-25 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-100 to-emerald-100 rounded-full blur-3xl opacity-25 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center relative">
          <div className="inline-flex items-center px-5 py-2.5 bg-white/90 backdrop-blur-sm border border-gray-300 rounded-full text-sm font-semibold text-gray-800 mb-8 shadow-sm">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
            Trusted by 100+ property owners across the US
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 leading-tight tracking-tight">
            Your CRE Playbook is Dead.
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> Profit with Coworking</span>
            <br />
            <span className="text-4xl md:text-5xl font-bold">Operator-Proven Data.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-5xl mx-auto leading-relaxed font-medium">
            Are you still using outdated CRE methods in a changed coworking office world? DenSwap provides 
            human-centric data, informed by 14 years of opening and operating coworking locations, 
            for truly thriving flexible office spaces.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a href="/sample-report" className="group bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 text-center inline-flex items-center justify-center">
              Get a Free Demand Report for Your Property
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/sample-report" className="group bg-white text-gray-800 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-50 transition-all duration-300 text-center inline-flex items-center justify-center border-2 border-gray-300 hover:border-emerald-300 hover:shadow-lg">
              <Download className="mr-2 h-5 w-5" />
              Download a Sample Feasibility
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-3 rounded-xl shadow-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-black text-gray-900">115+</div>
                <div className="text-gray-700 text-sm font-medium">Projects Completed</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-3 rounded-xl shadow-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-black text-gray-900">All</div>
                <div className="text-gray-700 text-sm font-medium">Zip Codes</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-3 rounded-xl shadow-lg">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-black text-gray-900">$500M+</div>
                <div className="text-gray-700 text-sm font-medium">Assets Analyzed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};