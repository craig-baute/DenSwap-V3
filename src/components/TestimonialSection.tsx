import React from 'react';
import { Quote, ArrowRight, CheckCircle } from 'lucide-react';

export const TestimonialSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-100/40 bg-[size:30px_30px] opacity-25"></div>
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-emerald-100/40 to-green-100/40 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tr from-blue-100/40 to-teal-100/40 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 border border-green-100">
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

              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-3">Project Details:</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Working on a new commercial building associated with a housing development
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-700">Feasibility</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-700">Business Model</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-700">Floor Plan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-700">Launch</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Success Stories from
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Real Operators</span>
              </h2>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                The office world has changed, and the decision about where to work is made by individuals 
                or small groups and not bosses demanding hundreds of people where to go. This dramatic 
                shift requires new data and a new approach to deciding what's next for a building.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl p-6 border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Results Achieved:</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">4</div>
                  <div className="text-sm text-gray-600">Months to Goal</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Annual Target</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-1">85%</div>
                  <div className="text-sm text-gray-600">Occupancy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-1">18</div>
                  <div className="text-sm text-gray-600">Month Breakeven</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a href="#" className="group bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center">
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