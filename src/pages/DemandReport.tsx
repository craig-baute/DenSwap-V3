import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactSection } from '../components/ContactSection';
import { MapPin, Building, Users, TrendingUp, CheckCircle, ArrowRight, DollarSign, Target, BarChart3, Clock } from 'lucide-react';

export const DemandReport: React.FC = () => {
  const [zipCode, setZipCode] = useState('');

  const handleOrderReport = () => {
    // Handle report ordering
    console.log('Ordering report for zip code:', zipCode);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header isMobileMenuOpen={false} setIsMobileMenuOpen={() => {}} />
      
      {/* Hero Section with Clean Design */}
      <section className="relative bg-gradient-to-br from-slate-600 via-slate-700 to-teal-800 text-white overflow-hidden">
        {/* Background Report Image - Left Side */}
        <div className="absolute left-0 top-0 bottom-0 w-1/2 overflow-hidden">
          <img
            src="/feasibility-header-mid.png"
            alt="Professional Coworking Feasibility Study Report"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-20 transform scale-110"
          />
        </div>

        {/* Curved Bottom Edge */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg className="w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 Q600,120 1200,0 L1200,120 L0,120 Z" fill="white" />
          </svg>
        </div>

        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Side - Empty space for background image */}
              <div className="relative min-h-[400px] lg:min-h-[600px]">
              </div>

              {/* Content - Right Side */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    Know Exactly How Much Coworking
                    <span className="text-emerald-300"> Your Market Can Support.</span>
                    <br />
                    <span className="text-3xl md:text-4xl lg:text-5xl">Fast.</span>
                  </h1>
                  
                  <p className="text-lg md:text-xl text-slate-100 mb-8 leading-relaxed">
                    Get precise square footage calculations, know which type of coworking will succeed, 
                    and property recommendations for any ZIP code in 24 hours. Stop guessing. Start with data.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center gap-3 flex-1">
                    <input
                      type="text"
                      placeholder="Enter ZIP Code"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      className="flex-1 px-4 py-3 border-2 border-white/30 rounded-lg text-lg bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-white/50"
                    />
                    <button 
                      onClick={handleOrderReport}
                      className="group bg-white text-slate-700 px-6 py-3 rounded-lg text-base font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 flex items-center whitespace-nowrap"
                    >
                      Get Demand Report
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
                
                <p className="text-sm text-slate-200">
                  Only $500 for each additional report
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 pt-8">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">115+</div>
                    <div className="text-slate-200 text-sm">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">35,000+</div>
                    <div className="text-slate-200 text-sm">Markets Covered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">$500M+</div>
                    <div className="text-slate-200 text-sm">Assets Analyzed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl p-8 border border-gray-200">
            <div className="flex items-center gap-6">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150" 
                alt="Mike Kriel" 
                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
              />
              <div className="flex-1">
                <blockquote className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
                  "These reports give us focus to know where to put our energy and money in our RE portfolio."
                </blockquote>
                <div className="text-gray-700">
                  <div className="font-semibold">Mike Kriel</div>
                  <div className="text-sm">CEO, Launch Workplaces</div>
                  <div className="text-sm">Director, Global Workplace Association</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Stop Debating if Coworking will Work.
                <span className="text-slate-600"> Get Data-Driven Insight to Know for Sure.</span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                While others sit around and guess, smart money uses coworking market intelligence 
                to quickly evaluate properties and find hidden coworking opportunities.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-3 rounded-xl flex-shrink-0">
                    <MapPin className="h-6 w-6 text-slate-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                      "How much coworking can this ZIP code actually support?"
                    </h3>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-3 rounded-xl flex-shrink-0">
                    <Users className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                      "What demographic segments will actually pay for workspace here?"
                    </h3>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl flex-shrink-0">
                    <Building className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                      "Which building types have the highest success rates?"
                    </h3>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-xl flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                      "Is this market already oversaturated?"
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Market Analysis Dashboard" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-black text-slate-600 mb-1">24hrs</div>
                  <div className="text-sm text-gray-600 font-medium">Delivery Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              $500 buys you what successful operators worked hard to know.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With the right intelligence, everything shifts and confidence grows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-slate-100 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-slate-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Precise Square Footage Calculations
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Not "somewhere between 5K-100K SF." A tight range to give you more confidence.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-emerald-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-emerald-100 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Customer Base Reality Check
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                You'll know whether you're targeting premium office users, shared desk groups, 
                or those that need space but aren't willing to pay much.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <Building className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Building Type Performance Rankings
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Data tells you which building types work best in your specific market.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-orange-200 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-orange-100 p-4 rounded-xl w-16 h-16 flex items-center justify-center mb-6">
                <BarChart3 className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Coworking Model Selection
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Choose based on demographic mix, not trends. Get the model that actually works.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={handleOrderReport}
              className="group bg-gradient-to-r from-slate-600 to-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center"
            >
              <DollarSign className="mr-2 h-5 w-5" />
              Order Analysis for $500
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Sample Report Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Understand Coworking's Potential Anywhere in the US
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                <div className="bg-gradient-to-br from-emerald-100 to-slate-100 rounded-xl p-6 mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="h-6 w-6 text-emerald-600" />
                    <div>
                      <div className="font-semibold text-gray-900">East Grand Rapids, MI</div>
                      <div className="text-sm text-gray-600">Zip Code: 49506</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 mb-2">Wealthy Urban Neighborhood in the Midwest</div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-lg">
                    <span className="font-semibold text-gray-900">Sustainable Coworking Demand:</span>
                    <span className="text-2xl font-bold text-emerald-600">31,833 SF</span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                    <span className="font-semibold text-gray-900">Recommended Model:</span>
                    <span className="text-xl font-bold text-blue-600">High-end Flex</span>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                    <span className="font-semibold text-gray-900">Potential Customers:</span>
                    <span className="text-2xl font-bold text-purple-600">15,916</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Product Mix Recommendations</h3>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700 text-lg">Offices:</span>
                    <div className="flex items-center gap-3">
                      <div className="w-32 bg-gray-200 rounded-full h-4">
                        <div className="bg-gradient-to-r from-green-500 to-green-600 h-4 rounded-full shadow-sm" style={{ width: '90%' }}></div>
                      </div>
                      <span className="font-bold text-green-600 text-lg">9/10</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700 text-lg">Hot Desking:</span>
                    <div className="flex items-center gap-3">
                      <div className="w-32 bg-gray-200 rounded-full h-4">
                        <div className="bg-gradient-to-r from-red-500 to-red-600 h-4 rounded-full shadow-sm" style={{ width: '5%' }}></div>
                      </div>
                      <span className="font-bold text-red-600 text-lg">0.5/10</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700 text-lg">Dedicated Desks:</span>
                    <div className="flex items-center gap-3">
                      <div className="w-32 bg-gray-200 rounded-full h-4">
                        <div className="bg-gradient-to-r from-red-500 to-red-600 h-4 rounded-full shadow-sm" style={{ width: '0%' }}></div>
                      </div>
                      <span className="font-bold text-red-600 text-lg">0/10</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Suitable Buildings</h3>
                <div className="flex flex-wrap gap-3">
                  {['Office Tower', 'Neighborhood Office', 'Creative Loft', 'Mixed Use'].map((type) => (
                    <span key={type} className="bg-slate-100 text-slate-800 px-4 py-2 rounded-full font-medium">
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Risk/Reward Is Now In Your Favor.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Evaluate One Location or an Entire Portfolio.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-10 border border-gray-200 shadow-lg mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">Perfect for people that:</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-3 rounded-xl flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-slate-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">Value-Add Investors</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Buying undervalued office buildings at old metrics, then converting to 
                      cash-flowing coworking assets.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-3 rounded-xl flex-shrink-0">
                    <Building className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">Building Owners</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Sitting on vacant space that's bleeding carrying costs while competitors 
                      generate 18%+ returns.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-xl flex-shrink-0">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">Growth-Stage Operators</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Who can't afford location mistakes when scaling intelligently.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-xl flex-shrink-0">
                    <BarChart3 className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-lg">Franchisees</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Evaluating territories based on demographics, not hope—where wrong choices kill ROI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-700 font-medium">
              This isn't about being risk-averse. It's about taking the right risks in a changing CRE world.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section with Curved Design */}
      <section className="relative bg-gradient-to-br from-slate-600 via-slate-700 to-teal-800 text-white overflow-hidden">
        {/* Curved Top */}
        <div className="absolute top-0 left-0 w-full">
          <svg className="w-full h-24" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L60 15C120 30 240 60 360 75C480 90 600 90 720 82.5C840 75 960 60 1080 52.5C1200 45 1320 45 1380 45L1440 45V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0Z" fill="#f8fafc"/>
          </svg>
        </div>
        
        <div className="relative z-10 pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Ready to move while others hesitate?
            </h2>
            
            <p className="text-xl text-slate-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              The market rewards speed and precision. Armed with DenSwap's intelligence, 
              you'll deploy capital while competitors are still guessing.
            </p>

            <div className="flex items-center justify-center gap-2 mb-12">
              <Clock className="h-6 w-6 text-slate-200" />
              <span className="text-lg font-semibold text-slate-100">Completed within 24 hours</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={handleOrderReport}
                className="group bg-white text-slate-700 px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
              >
                <DollarSign className="mr-2 h-5 w-5" />
                Get Your $500 Demand Report
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center">
                <MapPin className="mr-2 h-5 w-5" />
                View Sample Report
              </button>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="relative z-10 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <blockquote className="text-2xl md:text-3xl font-bold text-white mb-6 leading-relaxed">
                "This report is the first thing we look at when evaluating any coworking opportunity."
              </blockquote>
              <div className="text-slate-200 text-lg">
                — Industry Professional
              </div>
            </div>
          </div>
        </div>

        {/* Curved Bottom */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg className="w-full h-32" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120C360 40 720 40 1440 120V0H0V120Z" fill="white"/>
          </svg>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};