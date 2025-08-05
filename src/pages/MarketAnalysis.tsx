import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { MapPin, Users, Building2, TrendingUp, Target, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';

export const MarketAnalysis: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header isMobileMenuOpen={false} setIsMobileMenuOpen={() => {}} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Will Coworking Work
              <span className="text-blue-600"> At Your Location?</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Our proprietary market analysis determines the exact square footage your area can support, 
              maps your competition, and identifies untapped market opportunities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                Get Market Analysis
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
                View Sample Report
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Analyze */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Market Intelligence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We analyze multiple data layers to give you a complete picture of coworking demand in your target area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Target Area Definition</h3>
              <p className="text-gray-600">Customized radius analysis based on transportation patterns and demographic clusters</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Demographic Analysis</h3>
              <p className="text-gray-600">Deep dive into population density, income levels, and professional demographics</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Building2 className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Competition Mapping</h3>
              <p className="text-gray-600">Complete inventory of existing coworking spaces, pricing, and capacity utilization</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Demand Forecasting</h3>
              <p className="text-gray-600">Predictive modeling for coworking demand based on economic and demographic trends</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Analysis Dashboard */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sample Market Analysis Dashboard
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's what your comprehensive market analysis report will include
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Market Opportunity Metrics</h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">Supportable Square Footage</span>
                    <span className="text-2xl font-bold text-blue-600">45,000 SF</span>
                  </div>
                  <div className="text-sm text-gray-500">Based on demographic analysis within 3-mile radius</div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">Current Competition</span>
                    <span className="text-2xl font-bold text-orange-600">28,000 SF</span>
                  </div>
                  <div className="text-sm text-gray-500">7 existing coworking locations mapped</div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">Market Gap</span>
                    <span className="text-2xl font-bold text-green-600">17,000 SF</span>
                  </div>
                  <div className="text-sm text-gray-500">Unmet demand opportunity</div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 font-medium">Market Saturation</span>
                    <span className="text-2xl font-bold text-yellow-600">62%</span>
                  </div>
                  <div className="text-sm text-gray-500">Room for strategic positioning</div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-blue-900 mb-4">Target Demographics</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-blue-800">Freelancers & Consultants</span>
                    <span className="font-semibold text-blue-900">35%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-800">Remote Employees</span>
                    <span className="font-semibold text-blue-900">28%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-800">Small Teams (2-5 people)</span>
                    <span className="font-semibold text-blue-900">22%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-800">Startups</span>
                    <span className="font-semibold text-blue-900">15%</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-green-900 mb-4">Competition Analysis</h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-green-800">Premium Tier</div>
                      <div className="text-sm text-green-600">2 locations, $450-600/month</div>
                    </div>
                    <div className="text-green-900 font-semibold">85% occupied</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-green-800">Mid-Market</div>
                      <div className="text-sm text-green-600">3 locations, $250-400/month</div>
                    </div>
                    <div className="text-green-900 font-semibold">72% occupied</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-green-800">Budget Options</div>
                      <div className="text-sm text-green-600">2 locations, $150-250/month</div>
                    </div>
                    <div className="text-green-900 font-semibold">68% occupied</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What You'll Discover
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-blue-100 p-3 rounded-lg inline-block mb-6">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Optimal Location Scoring</h3>
              <p className="text-gray-600 mb-6">
                We score your location based on accessibility, parking, public transit, 
                nearby amenities, and foot traffic patterns.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Transportation accessibility analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Parking availability assessment
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Nearby amenities mapping
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-green-100 p-3 rounded-lg inline-block mb-6">
                <BarChart3 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Demand Quantification</h3>
              <p className="text-gray-600 mb-6">
                Precise calculations of how much coworking space your market can support 
                based on demographic and economic indicators.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Population density analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Professional demographic profiling
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Economic growth projections
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="bg-purple-100 p-3 rounded-lg inline-block mb-6">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Competitive Positioning</h3>
              <p className="text-gray-600 mb-6">
                Detailed analysis of existing competition with recommendations for 
                differentiation and market positioning strategies.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Competitor pricing analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Service gap identification
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Positioning recommendations
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Analyze Your Market?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a comprehensive market analysis that tells you exactly whether coworking 
            will succeed at your location - backed by 14 years of real-world experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Market Analysis
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2">
              Next: Financial Projections
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};