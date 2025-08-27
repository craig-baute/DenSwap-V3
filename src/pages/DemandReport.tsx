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
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-emerald-50/40 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-200/40 bg-[size:24px_24px] opacity-25"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-full blur-3xl opacity-25 -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Know Exactly How Much Coworking
              <span className="text-emerald-600"> Your Market Can Support.</span>
              <br />
              <span className="text-4xl md:text-5xl">Fast.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed">
              Get precise square footage calculations, know which type of coworking will succeed, 
              and property recommendations for any ZIP code in 24 hours. Stop guessing. Start with data.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  placeholder="Enter ZIP Code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="px-6 py-4 border-2 border-gray-300 rounded-xl text-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button 
                  onClick={handleOrderReport}
                  className="group bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center"
                >
                  See Demand in Your ZIP Code
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            
            <p className="text-sm text-gray-500">
              Only $500 for each additional report
            </p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Stop Debating if Coworking will Work.
                <span className="text-blue-600"> Get Data-Driven Insight to Know for Sure.</span>
              </h2>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                While others sit around and guess, smart money uses coworking market intelligence 
                to quickly evaluate properties and find hidden coworking opportunities.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      "How much coworking can this ZIP code actually support?"
                    </h3>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      "What demographic segments will actually pay for workspace here?"
                    </h3>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Building className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      "Which building types have the highest success rates?"
                    </h3>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
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
                  <div className="text-3xl font-black text-blue-600 mb-1">24hrs</div>
                  <div className="text-sm text-gray-600 font-medium">Delivery Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              $500 buys you what successful operators worked hard to know.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              With the right intelligence, everything shifts and confidence grows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 border border-blue-200">
              <div className="bg-blue-100 p-3 rounded-lg inline-block mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Precise Square Footage Calculations
              </h3>
              <p className="text-gray-600 mb-4">
                Not "somewhere between 5K-100K SF." A tight range to give you more confidence.
              </p>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 border border-emerald-200">
              <div className="bg-emerald-100 p-3 rounded-lg inline-block mb-6">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Customer Base Reality Check
              </h3>
              <p className="text-gray-600 mb-4">
                You'll know whether you're targeting premium office users, shared desk groups, 
                or those that need space but aren't willing to pay much.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-200">
              <div className="bg-purple-100 p-3 rounded-lg inline-block mb-6">
                <Building className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Building Type Performance Rankings
              </h3>
              <p className="text-gray-600 mb-4">
                Data tells you which building types work best in your specific market.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-emerald-50 rounded-2xl p-8 border border-orange-200">
              <div className="bg-orange-100 p-3 rounded-lg inline-block mb-6">
                <BarChart3 className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Coworking Model Selection
              </h3>
              <p className="text-gray-600 mb-4">
                Choose based on demographic mix, not trends. Get the model that actually works.
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="group bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center">
              <DollarSign className="mr-2 h-5 w-5" />
              Order Analysis for $500
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Sample Report Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Understand Coworking's Potential Anywhere in the US
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                <div className="bg-gradient-to-br from-emerald-100 to-blue-100 rounded-xl p-6 mb-6">
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
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Product Mix Recommendations</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Offices:</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-3">
                        <div className="bg-green-500 h-3 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                      <span className="font-bold text-green-600">9/10</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Hot Desking:</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-3">
                        <div className="bg-red-500 h-3 rounded-full" style={{ width: '5%' }}></div>
                      </div>
                      <span className="font-bold text-red-600">0.5/10</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Dedicated Desks:</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-gray-200 rounded-full h-3">
                        <div className="bg-red-500 h-3 rounded-full" style={{ width: '0%' }}></div>
                      </div>
                      <span className="font-bold text-red-600">0/10</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Suitable Buildings</h3>
                <div className="flex flex-wrap gap-2">
                  {['Office Tower', 'Neighborhood Office', 'Creative Loft', 'Mixed Use'].map((type) => (
                    <span key={type} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Risk/Reward Is Now In Your Favor.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Evaluate One Location or an Entire Portfolio.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 border border-gray-200 mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Perfect for people that:</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Value-Add Investors</h4>
                    <p className="text-gray-600 text-sm">
                      Buying undervalued office buildings at old metrics, then converting to 
                      cash-flowing coworking assets.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-2 rounded-lg flex-shrink-0">
                    <Building className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Building Owners</h4>
                    <p className="text-gray-600 text-sm">
                      Sitting on vacant space that's bleeding carrying costs while competitors 
                      generate 18%+ returns.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
                    <Target className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Growth-Stage Operators</h4>
                    <p className="text-gray-600 text-sm">
                      Who can't afford location mistakes when scaling intelligently.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0">
                    <BarChart3 className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Franchisees</h4>
                    <p className="text-gray-600 text-sm">
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

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to move while others hesitate?
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            The market rewards speed and precision. Armed with DenSwap's intelligence, 
            you'll deploy capital while competitors are still guessing.
          </p>

          <div className="flex items-center justify-center gap-2 mb-8">
            <Clock className="h-6 w-6 text-blue-200" />
            <span className="text-lg font-semibold text-blue-100">Completed within 24 hours</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-white text-blue-600 px-8 py-4 rounded-2xl text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center">
              <DollarSign className="mr-2 h-5 w-5" />
              Get Your $500 Demand Report
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center">
              <MapPin className="mr-2 h-5 w-5" />
              View Sample Report
            </button>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};