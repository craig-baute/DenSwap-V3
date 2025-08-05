import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Settings, Users, Building, Award, CheckCircle, X, ArrowRight, Star } from 'lucide-react';

export const Operations: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header isMobileMenuOpen={false} setIsMobileMenuOpen={() => {}} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              How Should It Be
              <span className="text-purple-600"> Managed?</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Choose the optimal management structure for your coworking space: self-managed, 
              operator partnership, or franchise model - we'll guide you to the right decision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors shadow-lg">
                Get Operations Plan
              </button>
              <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-colors">
                View Operator Network
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Three Management Models */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Three Management Approaches
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each model has distinct advantages depending on your investment goals, 
              risk tolerance, and involvement preferences.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Self-Managed */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-blue-200">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Building className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Self-Managed</h3>
              <p className="text-gray-600 mb-6 text-center">
                Build and operate your own coworking brand with full control over operations and profits.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Highest profit margins (70-80%)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Complete brand control</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Direct customer relationships</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Requires operational expertise</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Higher time investment</span>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900">$18-25</div>
                  <div className="text-sm text-blue-700">Revenue per SF/month</div>
                </div>
              </div>

              <div className="text-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  Best for: Experienced operators
                </span>
              </div>
            </div>

            {/* Operator Partnership */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-green-200 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  RECOMMENDED
                </span>
              </div>
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Operator Partnership</h3>
              <p className="text-gray-600 mb-6 text-center">
                Partner with proven coworking operators who handle day-to-day management.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Proven operational systems</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Faster time to market</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Shared risk and expertise</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Passive income potential</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Revenue sharing (60-70%)</span>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-900">$12-18</div>
                  <div className="text-sm text-green-700">Revenue per SF/month</div>
                </div>
              </div>

              <div className="text-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  Best for: Most property owners
                </span>
              </div>
            </div>

            {/* Franchise Model */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-purple-200">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Franchise Model</h3>
              <p className="text-gray-600 mb-6 text-center">
                License established coworking brands with proven systems and support.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Established brand recognition</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Comprehensive training</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Marketing support</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Franchise fees (5-8%)</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Limited operational flexibility</span>
                </div>
              </div>

              <div className="bg-purple-50 rounded-lg p-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-900">$15-22</div>
                  <div className="text-sm text-purple-700">Revenue per SF/month</div>
                </div>
              </div>

              <div className="text-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                  Best for: Brand-conscious owners
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selection Framework */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How We Help You Choose
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our selection framework evaluates six key factors to recommend the optimal management approach for your situation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <div className="bg-blue-100 p-3 rounded-lg inline-block mb-4">
                <Settings className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Experience Level</h3>
              <p className="text-gray-600">
                Your background in hospitality, real estate operations, or coworking management.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="bg-green-100 p-3 rounded-lg inline-block mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Time Commitment</h3>
              <p className="text-gray-600">
                How much time you can dedicate to active management and operations.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="bg-purple-100 p-3 rounded-lg inline-block mb-4">
                <Building className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Investment Goals</h3>
              <p className="text-gray-600">
                Whether you prioritize maximum returns, passive income, or brand building.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="bg-orange-100 p-3 rounded-lg inline-block mb-4">
                <Award className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Risk Tolerance</h3>
              <p className="text-gray-600">
                Your comfort level with operational complexity and market risks.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="bg-red-100 p-3 rounded-lg inline-block mb-4">
                <Star className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Market Position</h3>
              <p className="text-gray-600">
                The competitive landscape and positioning strategy for your location.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <div className="bg-indigo-100 p-3 rounded-lg inline-block mb-4">
                <CheckCircle className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Portfolio Strategy</h3>
              <p className="text-gray-600">
                How this fits into your broader real estate investment strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vetted Operator Network */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Vetted Operator Network
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've pre-screened and partnered with proven coworking operators across multiple markets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-green-100 p-3 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Proven Track Record
                  </h3>
                  <p className="text-gray-600">
                    All operators have successfully launched and managed multiple coworking locations 
                    with consistent profitability.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Local Market Expertise
                  </h3>
                  <p className="text-gray-600">
                    Operators are matched to your market based on their experience 
                    in similar demographics and competitive environments.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Comprehensive Vetting
                  </h3>
                  <p className="text-gray-600">
                    Financial stability, operational systems, customer satisfaction, 
                    and growth trajectory all thoroughly evaluated.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Operator Matching Process</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Market Analysis</div>
                    <div className="text-sm text-gray-600">Identify operators with relevant market experience</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Financial Review</div>
                    <div className="text-sm text-gray-600">Evaluate financial stability and performance history</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 text-purple-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Reference Checks</div>
                    <div className="text-sm text-gray-600">Contact previous landlord and member references</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 text-orange-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Proposal Review</div>
                    <div className="text-sm text-gray-600">Compare business plans and partnership terms</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-red-100 text-red-600 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                    5
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Final Selection</div>
                    <div className="text-sm text-gray-600">Present top 2-3 candidates with recommendations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Support */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Implementation Support
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don't just make recommendations - we help you execute your chosen strategy successfully.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Settings className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Legal Structure</h3>
              <p className="text-gray-600">Partnership agreements, lease structures, and legal documentation support.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Building className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Design & Build</h3>
              <p className="text-gray-600">Space planning, design coordination, and construction management oversight.</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Launch Planning</h3>
              <p className="text-gray-600">Marketing strategy, pre-launch sales, and grand opening coordination.</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Ongoing Support</h3>
              <p className="text-gray-600">Performance monitoring, optimization recommendations, and troubleshooting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Choose Your Management Strategy
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Let us analyze your situation and recommend the optimal management approach 
            for your coworking investment - with full implementation support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Operations Strategy
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-700 transition-colors flex items-center gap-2">
              Complete Feasibility Study
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};