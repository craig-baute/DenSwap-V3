import React from 'react';
import { Quote, ArrowRight, CheckCircle } from 'lucide-react';

export const TestimonialSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-200/40 bg-[size:30px_30px] opacity-30"></div>
      
      {/* Blob Geometric Elements */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-emerald-100/40 blur-2xl" style={{
        borderRadius: '50% 70% 30% 50% / 60% 40% 70% 30%',
        zIndex: 0
      }}></div>
      <div className="absolute -bottom-16 -right-16 w-60 h-60 bg-emerald-200/35 blur-xl" style={{
        borderRadius: '70% 30% 60% 40% / 40% 70% 30% 60%',
        zIndex: 0
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div className="relative">
            <div className="bg-white rounded-3xl p-8 border border-emerald-200 shadow-lg">
              <div className="bg-gradient-to-br from-green-500 to-blue-600 p-3 rounded-2xl w-16 h-16 flex items-center justify-center mb-6">
                <Quote className="h-8 w-8 text-white" />
              </div>
              
              <blockquote className="text-2xl font-semibold text-gray-900 mb-6 leading-relaxed">
                "After only four months in operation, we exceeded our expectations and reached our annual goal."
              </blockquote>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Somo Group</div>
                  <div className="text-gray-600 text-sm">Commercial Building Development</div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-emerald-100">
                <h4 className="font-semibold text-emerald-700 mb-3">Project Details:</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Working on a new commercial building associated with a housing development
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm text-emerald-600">Feasibility</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm text-emerald-600">Business Model</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm text-emerald-600">Floor Plan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm text-emerald-600">Launch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-emerald-700 mb-6">
                Success Stories from
                <span className="text-emerald-600"> Real Operators</span>
              </h2>
              
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                The office world has changed, and the decision about where to work is made by individuals 
                or small groups and not bosses demanding hundreds of people where to go. This dramatic 
                shift requires new data and a new approach to deciding what's next for a building.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-emerald-200 shadow-lg">
              <h3 className="text-xl font-semibold text-emerald-700 mb-4">Results Achieved:</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">4</div>
                  <div className="text-sm text-emerald-600">Months to Goal</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">100%</div>
                  <div className="text-sm text-emerald-600">Annual Target</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">85%</div>
                  <div className="text-sm text-emerald-600">Occupancy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">18</div>
                  <div className="text-sm text-emerald-600">Month Breakeven</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="group bg-emerald-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center">
                See Somo's Case Study
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};