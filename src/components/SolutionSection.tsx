import React from 'react';
import { BarChart3, TrendingUp, MapPin, DollarSign, ArrowRight } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-emerald-100/20 bg-[size:36px_36px] opacity-30"></div>
      
      {/* Geometric Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gray-100/40 rounded-full blur-3xl"></div>
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gray-200/30 transform rotate-45" style={{
        clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
      }}></div>
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gray-100/50 transform -rotate-12" style={{
        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
      }}></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-200/20 rounded-full blur-2xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-5 py-2.5 bg-emerald-100 border border-emerald-200 rounded-full text-sm font-semibold text-emerald-800 mb-6">
            DenSwap Analytics and Reports
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight">
            Forecast where coworking will succeed through data
          </h2>
          
          <div className="mt-12">
            <a href="/sample-report" className="group bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 inline-flex items-center">
              Get a Free Coworking Demand Report for Your Building
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-4 rounded-xl shadow-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Human-Centric Location Analysis
                </h3>
                <p className="text-gray-700 leading-relaxed font-medium">
                  We analyze where people actually want to work, not just demographic averages. 
                  Our data reveals the true pulse of coworking demand in your specific area.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-teal-500 to-teal-600 p-4 rounded-xl shadow-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Operator-Proven Insights
                </h3>
                <p className="text-gray-700 leading-relaxed font-medium">
                  14 years of hands-on coworking operations across multiple states. 
                  We know what works because we've built it, run it, and scaled it.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-4 rounded-xl shadow-lg">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Real P&L Projections
                </h3>
                <p className="text-gray-700 leading-relaxed font-medium">
                  Financial models based on actual operational data, not theoretical assumptions. 
                  See exactly what your space can generate in revenue.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Coworking Demand Analysis</h3>
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-lg shadow-md">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Market Demand Score</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-gray-200 rounded-full h-3 shadow-inner">
                      <div className="bg-gradient-to-r from-emerald-400 to-emerald-500 h-3 rounded-full shadow-sm" style={{ width: '92%' }}></div>
                    </div>
                    <span className="text-sm font-bold text-emerald-600">9.2/10</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Supportable SF</span>
                  <div className="text-right">
                    <div className="text-2xl font-black text-gray-900">45,000</div>
                    <div className="text-sm text-gray-600 font-medium">Square Feet</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Competition Gap</span>
                  <div className="text-right">
                    <div className="text-2xl font-black text-teal-600">17,000</div>
                    <div className="text-sm text-gray-600 font-medium">SF Opportunity</div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Projected ROI</span>
                  <div className="text-right">
                    <div className="text-2xl font-black text-emerald-600">35%</div>
                    <div className="text-sm text-gray-600 font-medium">5-Year Return</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-200">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-emerald-500 p-1.5 rounded-lg shadow-sm">
                    <TrendingUp className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-bold text-emerald-800">Recommendation: High Potential</span>
                </div>
                <p className="text-sm text-emerald-700 leading-relaxed font-medium">
                  This location shows excellent potential for flexible workspace with 
                  projected 18-month break-even based on operator experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};