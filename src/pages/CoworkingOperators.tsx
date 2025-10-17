import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactSection } from '../components/ContactSection';
import { TrendingUp, Building, Users, DollarSign, Target, BarChart3, CheckCircle, ArrowRight, Calendar, FileText, Shield, MapPin, Zap, Award, AlertTriangle, X, Calculator } from 'lucide-react';

export const CoworkingOperators: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header isMobileMenuOpen={false} setIsMobileMenuOpen={() => {}} />
      
      {/* Hero Section with Clean Design */}
      <section className="relative bg-gradient-to-br from-slate-600 via-slate-700 to-teal-800 text-white overflow-hidden">
        {/* Background Report Image - Left Side */}
        <div className="absolute left-0 top-0 bottom-0 w-1/2 overflow-hidden">
          <img
            src="/ModernCoworkingSpaceWithPeople.jpg"
            alt="Modern Coworking Space"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-20 transform scale-110"
          />
        </div>

        {/* Curved Bottom Edge */}
        <div className="absolute bottom-0 left-0 right-0">
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
                    Grow based on data and experience,
                    <span className="text-emerald-300"> not just gut.</span>
                  </h1>
                  
                  <p className="text-lg md:text-xl text-slate-100 mb-8 leading-relaxed">
                    Grow your brand in a smart, data-driven way so you can build your empire, not become a WeWork. 
                    Our feasibility studies and data are based on operating coworking for 14 years.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/feasibility-study" className="group bg-white text-slate-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 flex items-center justify-center">
                    Plan Your Next Location
                  </a>
                  <a href="/book-consultation" className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                    Schedule a Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Don't Become the Next WeWork Casualty
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Location mistakes kill coworking brands. Here's how operators are protecting their growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="text-lg text-gray-700 leading-relaxed">
                <p className="mb-6">
                  <strong>WeWork failed because they prioritized growth over fundamentals.</strong> They opened 
                  locations based on hype, not data. They confused "busy coffee shops\" with \"viable coworking markets."
                </p>
                <p className="mb-6">
                  Smart operators are taking the opposite approach. They're using market intelligence to 
                  identify locations with actual demand, avoiding oversaturated markets, and building 
                  sustainable unit economics from day one.
                </p>
                <p className="text-emerald-700 font-bold">
                  We've been operating coworking spaces since 2010. We know which mistakes kill brands 
                  and which strategies build empires.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-red-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-red-500 p-3 rounded-lg">
                    <X className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-red-900">The WeWork Approach</h3>
                </div>
                <ul className="space-y-2 text-red-800">
                  <li>• Expand everywhere, analyze later</li>
                  <li>• "Growth at all costs" mentality</li>
                  <li>• Ignore unit economics fundamentals</li>
                  <li>• Bet on hype over data</li>
                </ul>
                <div className="mt-4 p-3 bg-red-100 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-900">$12.8B</div>
                    <div className="text-sm text-red-700">Lost in Value</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-emerald-500 p-3 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-900">The DenSwap Method</h3>
                </div>
                <ul className="space-y-2 text-emerald-800">
                  <li>• Analyze first, expand strategically</li>
                  <li>• Data-driven location decisions</li>
                  <li>• Proven unit economics before build-out</li>
                  <li>• Sustainable growth over flash</li>
                </ul>
                <div className="mt-4 p-3 bg-emerald-100 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-900">85%</div>
                    <div className="text-sm text-emerald-700">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Strategic Expansion Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prevent costly location mistakes and accelerate profitable growth
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-emerald-200">
              <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Zap className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Location Evaluation</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Get instant clarity on whether a potential location has real coworking demand. 
                Perfect for rapid expansion decisions and pipeline prioritization.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="text-gray-700">Market demand scoring in 24 hours</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="text-gray-700">Competition density analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="text-gray-700">Pricing power assessment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="text-gray-700">Demographics & workspace trends</span>
                </div>
              </div>

              <div className="bg-emerald-50 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-emerald-800 font-medium">Investment:</span>
                  <span className="text-2xl font-bold text-emerald-900">$500</span>
                </div>
                <div className="text-center mt-2">
                  <span className="text-emerald-700 text-sm font-semibold">Delivered within 24 hours</span>
                </div>
              </div>

              <a href="/demand-report" className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors inline-flex items-center justify-center gap-2">
                Get Location Analysis
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-teal-200 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  OPERATOR CHOICE
                </span>
              </div>
              
              <div className="bg-teal-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FileText className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Analysis</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Complete financial modeling and risk assessment to prevent costly location mistakes. 
                Get investor-grade reports that secure financing and ensure profitable expansion.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-teal-500" />
                  <span className="text-gray-700">5-year financial projections & ROI analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-teal-500" />
                  <span className="text-gray-700">Optimal space allocation & layout planning</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-teal-500" />
                  <span className="text-gray-700">Pricing strategy & membership modeling</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-teal-500" />
                  <span className="text-gray-700">Launch timeline & marketing strategy</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-teal-500" />
                  <span className="text-gray-700">Risk mitigation & contingency planning</span>
                </div>
              </div>

              <div className="bg-teal-50 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-teal-800 font-medium">Investment:</span>
                  <span className="text-2xl font-bold text-teal-900">$3,000+</span>
                </div>
                <div className="text-center mt-2">
                  <span className="text-teal-700 text-sm font-semibold">Comprehensive 20+ page report</span>
                </div>
              </div>

              <a href="/feasibility-study" className="w-full bg-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-teal-700 transition-colors inline-flex items-center justify-center gap-2">
                Request Feasibility Study
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Location Decisions Matter */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Location Decisions Make or Break
              <span className="text-red-600"> Your Brand</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The difference between sustainable growth and catastrophic failure often comes down to location intelligence
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="text-lg text-gray-700 leading-relaxed">
                <p className="mb-6">
                  <strong>The average coworking build-out costs $1-2 million.</strong> Get the location wrong, 
                  and you're not just losing money—you\'re potentially killing your brand and investor confidence.
                </p>
                <p className="mb-6">
                  Failed locations drain resources from successful ones. They create negative cash flow that 
                  can force premature closures of otherwise profitable locations. They damage your reputation 
                  with landlords and investors.
                </p>
                <p className="text-emerald-700 font-bold">
                  But get location fundamentals right, and each new space becomes a profit center 
                  that funds further strategic expansion.
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">The Operator's Dilemma:</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-700">Pressure to expand quickly to meet investor expectations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-700">Limited capital for location mistakes</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-700">Need to maintain cash flow from existing locations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-700">Can't afford to damage brand reputation</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Location Success vs. Failure</h3>
                
                <div className="space-y-6">
                  <div className="bg-red-50 rounded-xl p-5 border border-red-200">
                    <div className="flex items-center gap-3 mb-3">
                      <X className="h-6 w-6 text-red-600" />
                      <span className="font-bold text-red-900">Poor Location Choice</span>
                    </div>
                    <div className="text-3xl font-bold text-red-700 mb-1">-$180K</div>
                    <div className="text-sm text-red-600">Average Year 1 Loss</div>
                  </div>

                  <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-200">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle className="h-6 w-6 text-emerald-600" />
                      <span className="font-bold text-emerald-900">Data-Driven Location</span>
                    </div>
                    <div className="text-3xl font-bold text-emerald-700 mb-1">+$240K</div>
                    <div className="text-sm text-emerald-600">Annual Profit at Maturity</div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-900 mb-1">$420K</div>
                      <div className="text-sm text-blue-700">Difference per Location</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Real Operator Success Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How a regional coworking operator avoided a $300K mistake and found their goldmine location
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Successful coworking space"
                  className="w-full h-full object-cover min-h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center gap-4 text-sm mb-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Denver, CO
                    </span>
                    <span className="flex items-center gap-1">
                      <Building className="h-4 w-4" />
                      12,000 SF
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold">Creative Workspace Collective</h3>
                  <p className="text-lg opacity-90">From near-disaster to flagship location</p>
                </div>
              </div>

              <div className="p-12 flex flex-col justify-center">
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h4>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    A growing coworking operator was considering two potential locations for their 
                    third space. Traditional demographic data suggested both would work, but our analysis 
                    revealed a critical difference.
                  </p>
                  
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Insight</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Location A looked perfect on paper but was in an oversaturated micro-market with 
                    3 established competitors. Location B had stronger demand fundamentals and room for 
                    premium positioning.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-emerald-50 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <TrendingUp className="h-6 w-6 text-emerald-600" />
                      <span className="font-semibold text-gray-900">Occupancy</span>
                    </div>
                    <div className="text-3xl font-bold text-gray-900">92%</div>
                    <div className="text-sm text-gray-600">Within 14 months</div>
                  </div>
                  
                  <div className="bg-teal-50 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <DollarSign className="h-6 w-6 text-teal-600" />
                      <span className="font-semibold text-gray-900">Monthly Profit</span>
                    </div>
                    <div className="text-3xl font-bold text-gray-900">$18K</div>
                    <div className="text-sm text-gray-600">Consistent cash flow</div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="h-6 w-6 text-blue-600" />
                      <span className="font-semibold text-gray-900">Members</span>
                    </div>
                    <div className="text-3xl font-bold text-gray-900">165</div>
                    <div className="text-sm text-gray-600">Active community</div>
                  </div>
                  
                  <div className="bg-purple-50 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Shield className="h-6 w-6 text-purple-600" />
                      <span className="font-semibold text-gray-900">ROI</span>
                    </div>
                    <div className="text-3xl font-bold text-gray-900">28%</div>
                    <div className="text-sm text-gray-600">Annual return</div>
                  </div>
                </div>

                <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-200">
                  <blockquote className="text-xl font-semibold text-emerald-900 mb-4">
                    "DenSwap's analysis saved us from a $300K mistake and led us to our most profitable location. 
                    Now we use their data for every expansion decision."
                  </blockquote>
                  <div className="text-emerald-700 font-medium">
                    — Sarah Martinez, Founder, Creative Workspace Collective
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scaling Strategies Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Strategic Scaling Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How successful operators build sustainable empires
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Calculator className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Unit Economics First</h3>
              <p className="text-gray-600 mb-6">
                Never open a location that doesn't have clear path to profitability within 18 months. 
                Our models show you exactly what it takes.
              </p>
              <div className="bg-emerald-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-emerald-900">18 mo</div>
                <div className="text-sm text-emerald-700">Target Breakeven</div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-teal-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Target className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Market Discipline</h3>
              <p className="text-gray-600 mb-6">
                Focus on markets with unmet demand rather than chasing "hot" neighborhoods where 
                you'll compete on price instead of value.
              </p>
              <div className="bg-teal-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-teal-900">65%</div>
                <div className="text-sm text-teal-700">Max Saturation</div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Building className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cash Flow Protection</h3>
              <p className="text-gray-600 mb-6">
                Each new location should strengthen your overall portfolio, not strain it. 
                We help ensure sustainable expansion velocity.
              </p>
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-900">$240K</div>
                <div className="text-sm text-blue-700">Annual Location Target</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose DenSwap Over
              <span className="text-emerald-600"> Traditional Consultants</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-3 rounded-lg flex-shrink-0">
                  <Award className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Real Operating Experience</h3>
                  <p className="text-gray-600">
                    We've actually built, operated, and scaled coworking brands across multiple states. 
                    Our insights come from P&Ls, not spreadsheets.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-3 rounded-lg flex-shrink-0">
                  <BarChart3 className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Operator-Specific Data</h3>
                  <p className="text-gray-600">
                    Our analysis accounts for the unique challenges of multi-location operations: 
                    cash flow timing, management complexity, brand consistency.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Risk Mitigation Focus</h3>
                  <p className="text-gray-600">
                    We've seen what kills coworking brands and help you avoid the fatal mistakes 
                    that sink 60% of new locations within two years.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 border border-emerald-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Operator Success Metrics</h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-4 border border-emerald-200">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Location Success Rate</span>
                    <span className="text-2xl font-bold text-emerald-600">85%</span>
                  </div>
                  <div className="text-sm text-gray-500">vs. 40% industry average</div>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-teal-200">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Avg. Breakeven Timeline</span>
                    <span className="text-2xl font-bold text-teal-600">14 mo</span>
                  </div>
                  <div className="text-sm text-gray-500">vs. 24+ mo industry average</div>
                </div>
                
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Brand Survival Rate</span>
                    <span className="text-2xl font-bold text-blue-600">95%</span>
                  </div>
                  <div className="text-sm text-gray-500">vs. 60% industry average</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-400/20 to-emerald-400/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Build Your Empire on Data,
            <span className="text-emerald-200"> Not Dreams</span>
          </h2>
          
          <p className="text-xl text-emerald-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join the operators who've transformed their expansion strategy with our intelligence. 
            Your next location decision could make or break your brand.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/feasibility-study" className="group bg-white text-emerald-600 px-8 py-4 rounded-2xl text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center">
              Plan Your Next Location
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href="/book-consultation" className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Strategy Call
            </a>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-200 mb-2">150+</div>
              <div className="text-emerald-100">Locations Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-200 mb-2">$300K</div>
              <div className="text-emerald-100">Avg. Loss Prevented</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-200 mb-2">14</div>
              <div className="text-emerald-100">Years Operating</div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};
