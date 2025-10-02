import React from 'react';
import { BarChart3, TrendingUp, MapPin, DollarSign, ArrowRight } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-brand-primary/5 bg-[size:32px_32px] opacity-40"></div>
      
      {/* Brand Background Elements */}
      <div className="absolute -top-16 -right-16 w-80 h-80 bg-gradient-to-bl from-brand-light/12 to-sage-200/8 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-brand-primary/10 to-brand-dark/5 rounded-full blur-3xl"></div>
      
      {/* Geometric Brand Elements */}
      <div className="absolute bottom-10 right-20 opacity-8">
        <div className="w-32 h-32 border-4 border-brand-light/30 transform rotate-12" style={{
          clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
        }}></div>
      </div>
      <div className="absolute top-20 left-16 w-24 h-24 bg-brand-primary/8 transform -rotate-12 rounded-lg"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <div className="inline-block px-5 py-2.5 bg-sage-200 border border-brand-primary rounded-full text-sm font-semibold text-brand-dark mb-6">
            DenSwap Analytics and Reports
          </div>
          <h2 className="text-h1 md:text-5xl font-black text-brand-primary mb-8 tracking-tight">
            Forecast where coworking will succeed through data
          </h2>
          
          <div className="mt-12">
            <a href="/sample-report" className="group bg-gradient-to-r from-brand-primary to-brand-light text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-xl transition-all duration-300 inline-flex items-center">
              Get a Free Coworking Demand Report for Your Building
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-brand-primary to-brand-light p-4 rounded-xl shadow-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-h2 font-bold text-brand-primary mb-3">
                  Human-Centric Location Analysis
                </h3>
                <p className="text-body text-neutral-900 leading-relaxed font-medium">
                  We analyze where people actually want to work, not just demographic averages. 
                  Our data reveals the true pulse of coworking demand in your specific area.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-brand-light to-secondary-400 p-4 rounded-xl shadow-lg">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-h2 font-bold text-brand-primary mb-3">
                  Operator-Proven Insights
                </h3>
                <p className="text-body text-neutral-900 leading-relaxed font-medium">
                  14 years of hands-on coworking operations across multiple states. 
                  We know what works because we've built it, run it, and scaled it.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-brand-primary to-brand-light p-4 rounded-xl shadow-lg">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-h2 font-bold text-brand-primary mb-3">
                  Real P&L Projections
                </h3>
                <p className="text-body text-neutral-900 leading-relaxed font-medium">
                  Financial models based on actual operational data, not theoretical assumptions. 
                  See exactly what your space can generate in revenue.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-sage-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-h3 font-bold text-brand-primary">Coworking Demand Analysis</h3>
                <div className="bg-gradient-to-br from-brand-primary to-brand-light p-2 rounded-lg shadow-md">
                  <BarChart3 className="h-5 w-5 text-white" />
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-900 font-medium">Market Demand Score</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-neutral-500 rounded-full h-3 shadow-inner">
                      <div className="bg-gradient-to-r from-brand-primary to-brand-light h-3 rounded-full shadow-sm" style={{ width: '92%' }}></div>
                    </div>
                    <span className="text-small font-bold text-brand-primary">9.2/10</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-neutral-900 font-medium">Supportable SF</span>
                  <div className="text-right">
                    <div className="text-2xl font-black text-brand-primary">45,000</div>
                    <div className="text-small text-brand-light font-medium">Square Feet</div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-neutral-900 font-medium">Competition Gap</span>
                  <div className="text-right">
                    <div className="text-2xl font-black text-brand-light">17,000</div>
                    <div className="text-small text-brand-primary font-medium">SF Opportunity</div>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-neutral-900 font-medium">Projected ROI</span>
                  <div className="text-right">
                    <div className="text-2xl font-black text-brand-primary">35%</div>
                    <div className="text-small text-brand-primary font-medium">5-Year Return</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-sage-200 rounded-xl border border-brand-primary">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-brand-primary p-1.5 rounded-lg shadow-sm">
                    <TrendingUp className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-bold text-brand-dark">Recommendation: High Potential</span>
                </div>
                <p className="text-small text-brand-dark leading-relaxed font-medium">
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