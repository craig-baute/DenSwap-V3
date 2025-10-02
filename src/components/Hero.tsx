import React from 'react';
import { TrendingUp, MapPin, DollarSign, ArrowRight, Download, FileText } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="https://videos.pexels.com/video-files/3195394/3195394-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Green Overlay */}
      <div className="absolute inset-0 bg-brand-dark/75 z-10"></div>

      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:24px_24px] opacity-30 z-20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-brand-primary/30 to-brand-light/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-brand-light/30 to-brand-primary/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 z-20"></div>

      <div className="relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Report Mockups - Left Side */}
            <div className="relative order-2 lg:order-1">
              <div className="transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                  {/* Report Cover */}
                  <div className="bg-gradient-to-br from-brand-primary to-brand-light p-10 text-white">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-lg">D</span>
                      </div>
                      <span className="font-bold text-xl">DENSWAP</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-2">Coworking</h3>
                    <h3 className="text-3xl font-bold mb-6">Feasibility Study</h3>
                    <p className="text-base opacity-90">Market Analysis Report</p>

                    {/* Hexagon Pattern */}
                    <div className="absolute bottom-6 right-6 opacity-30">
                      <div className="grid grid-cols-3 gap-1">
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className="w-5 h-5 border border-white/40" style={{
                            clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
                          }}></div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Report Content Preview */}
                  <div className="p-8 bg-white">
                    <div className="space-y-4">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-100 rounded w-full"></div>
                      <div className="h-3 bg-gray-100 rounded w-2/3"></div>

                      <div className="bg-brand-primary/10 rounded-lg p-5 mt-4">
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-semibold text-gray-900 text-sm">Market Viability:</span>
                          <span className="text-lg font-bold text-brand-primary">Excellent</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-brand-primary to-brand-light h-2 rounded-full" style={{ width: '88%' }}></div>
                        </div>
                      </div>

                      <div className="space-y-2 mt-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-700">Projected ROI:</span>
                          <span className="font-semibold text-brand-primary">28%</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-700">Breakeven Timeline:</span>
                          <span className="font-semibold text-brand-light">16 months</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-brand-light text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10">
                Expert Analysis
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-slate-600 px-4 py-2 rounded-full text-sm font-bold shadow-lg z-10">
                20+ Pages
              </div>
            </div>

            {/* Content - Right Side */}
            <div className="space-y-8 order-1 lg:order-2">
              <div>
                <div className="inline-flex items-center px-5 py-2.5 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full text-sm font-bold text-white mb-6 shadow-sm">
                  <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                  Trusted by 100+ property owners across the US
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  Building confidence to build
                  <span className="text-brand-light"> flex spaces.</span>
                </h1>

                <p className="text-lg md:text-xl text-white mb-8 leading-relaxed">
                  Are you considering transforming your commercial property into a flexible coworking space? Our feasibility reports can provide you with the insight you need to make a confident investment decision. Our team of experts utilizes market data APIs, proprietary information on coworking spaces, and unique consulting expertise to assess whether a given building is suited for a successful flex/coworking business.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/demand-report" className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-6 py-3 rounded-lg text-base font-bold hover:bg-white/20 transition-all duration-300 text-center inline-flex items-center justify-center">
                  See How Much Demand there is In Your Zip Code
                </a>
                <a href="/sample-report" className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-6 py-3 rounded-lg text-base font-bold hover:bg-white/20 transition-all duration-300 text-center inline-flex items-center justify-center">
                  <Download className="mr-2 h-5 w-5" />
                  Download Sample Report
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl shadow-lg border border-white/30 mb-2 inline-flex">
                    <TrendingUp className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-xl md:text-2xl font-black text-white mb-1">115+</div>
                  <div className="text-white/80 text-xs font-bold">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl shadow-lg border border-white/30 mb-2 inline-flex">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-xl md:text-2xl font-black text-white mb-1">35,000+</div>
                  <div className="text-white/80 text-xs font-bold">Markets Covered</div>
                </div>
                <div className="text-center">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-xl shadow-lg border border-white/30 mb-2 inline-flex">
                    <DollarSign className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-xl md:text-2xl font-black text-white mb-1">$500M+</div>
                  <div className="text-white/80 text-xs font-bold">Assets Analyzed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curved Bottom Element */}
      <div className="relative">
        <svg className="w-full h-24" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};