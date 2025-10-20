import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactSection } from '../components/ContactSection';
import { Shield, TrendingUp, Target, CheckCircle, ArrowRight, Calendar, FileText, Users, Building, DollarSign, AlertTriangle, BarChart3, Eye, MapPin, Award, Zap, Star } from 'lucide-react';

export const FranchiseeCaseStudies: React.FC = () => {
  const vettedBrands = [
    {
      name: "Premium Flex Workspace",
      segment: "High-end Professional",
      startupCost: "$300K - $500K",
      termLength: "10 years",
      profitPotential: "25-35% ROI",
      marketFit: "Urban, high-income areas"
    },
    {
      name: "Community Coworking",
      segment: "Neighborhood Focus",
      startupCost: "$150K - $300K",
      termLength: "5 years",
      profitPotential: "20-30% ROI",
      marketFit: "Suburban, mixed-use areas"
    },
    {
      name: "Creative Workspace Co-op",
      segment: "Creative Professionals",
      startupCost: "$200K - $400K",
      termLength: "7 years",
      profitPotential: "22-32% ROI",
      marketFit: "Arts districts, creative hubs"
    }
  ];

  const testimonials = [
    {
      quote: "DenSwap saved me from making a $400K mistake. Their unbiased analysis showed me which franchise model actually fit my market.",
      author: "Jennifer Martinez",
      title: "Franchise Owner, Austin TX",
      result: "Achieved 85% occupancy in 12 months"
    },
    {
      quote: "I was ready to sign with the wrong franchise until DenSwap's data revealed the market gap. Now I'm profitable in year one.",
      author: "David Chen",
      title: "Property Investor, Denver CO",
      result: "28% ROI in first 18 months"
    },
    {
      quote: "The clarity they provided was invaluable. No sales pressure, just honest assessment of what would actually work.",
      author: "Sarah Thompson",
      title: "Real Estate Developer, Phoenix AZ",
      result: "Avoided oversaturated market"
    }
  ];

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
                    Ready to Open a Coworking Space?
                    <span className="text-red-500"> First, Let's See If It Will Work.</span>
                  </h1>
                  
                  <p className="text-lg md:text-xl text-slate-100 mb-8 leading-relaxed">
                    DenSwap provides unbiased data and a strategic matching process to ensure your coworking 
                    franchise has the highest chance of success.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/sample-report" className="group bg-white text-slate-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 flex items-center justify-center">
                    Get Your Free Market Feasibility Report
                  </a>
                  <a href="/book-consultation" className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                    Start Your Free Franchise Match
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Biggest Risk Isn't Opening a Coworking Space.
              <br />
              <span className="text-red-600">It's Opening the Wrong One.</span>
            </h2>
          </div>
        </div>
      </section>

      {/* The DenSwap Solution */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Unbiased Data. Real Answers.
              <br />
              <span className="text-emerald-600">Before You Spend a Single Dollar.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not franchise salespeople. We're data analysts who happen to know coworking inside and out.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-emerald-200">
              <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Unbiased Guidance</h3>
              <p className="text-gray-600 leading-relaxed">
                Our data is unbiased and provides clear guidance before you spend hundreds of thousands 
                of dollars and lock yourself into a partnership with a chance of failure.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-blue-200">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <BarChart3 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Realistic Financials</h3>
              <p className="text-gray-600 leading-relaxed">
                We provide realistic P&Ls and pro-formas based on this data. We don't sugarcoat the numbers. 
                You get the truth about what your investment will actually return.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-purple-200">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Eye className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Honest Assessment</h3>
              <p className="text-gray-600 leading-relaxed">
                We are not afraid to say, "Coworking won't work here," or "Don't do it." We're providing 
                data to help you make the best decision—not selling you a franchise agreement.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Promise to You</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We will tell you the truth about your market, even if it means recommending against coworking entirely.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-red-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <AlertTriangle className="h-8 w-8 text-red-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">If the market won't support coworking</h4>
                <p className="text-sm text-gray-600">We'll tell you to invest your money elsewhere</p>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Building className="h-8 w-8 text-yellow-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">If your building isn't suitable</h4>
                <p className="text-sm text-gray-600">We'll recommend better properties in your area</p>
              </div>
              
              <div className="text-center">
                <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-emerald-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">If everything aligns perfectly</h4>
                <p className="text-sm text-gray-600">We'll match you with the ideal franchise partner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Selection Process */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Guide to the Right
              <span className="text-emerald-600"> Coworking Strategy</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you choose a franchise, management agreement, or hybrid partnership, we ensure 
              the perfect match between your market opportunity and operational structure.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8">
              <div className="text-lg text-gray-700 leading-relaxed">
                <p className="mb-6">
                  <strong>We've analyzed over 20 coworking brands and operators</strong> across every model 
                  imaginable—from premium franchises to neighborhood management partnerships. Each serves 
                  different market segments, investment levels, and owner involvement preferences.
                </p>
                <p className="mb-6">
                  <strong>Franchises vs. Management Agreements vs. Independent Operation:</strong> The choice depends 
                  on your market dynamics, available capital, desired involvement level, and risk tolerance. 
                  We match you based on data, not sales quotas.
                </p>
                <p className="mb-6">
                  Some markets need premium executive suites. Others thrive with community-focused neighborhood 
                  models. A few can support creative workspace concepts. Most importantly, some markets can't 
                  support coworking at all—and we'll tell you that too.
                </p>
                <p className="text-emerald-700 font-bold">
                  Our vetting process evaluates financial stability, operational track records, market 
                  performance, and support quality—so you partner with winners, not just recognizable names.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 border border-emerald-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Partnership Matching Framework</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-emerald-100 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-emerald-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Market Segment Analysis</div>
                    <div className="text-sm text-gray-600">Premium vs. community vs. creative vs. hybrid demand patterns</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Investment Level Matching</div>
                    <div className="text-sm text-gray-600">$150K-$800K options based on your capital and market size</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-purple-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Involvement Level Assessment</div>
                    <div className="text-sm text-gray-600">Hands-on operator vs. passive investor partnership options</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-orange-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Operational Support Needs</div>
                    <div className="text-sm text-gray-600">Training intensity, ongoing support, and brand compliance requirements</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-red-100 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-red-600 font-bold text-sm">5</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Partnership Structure Analysis</div>
                    <div className="text-sm text-gray-600">Franchise vs. management agreement vs. licensing optimal fit</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg border border-emerald-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-1">20+</div>
                  <div className="text-sm text-gray-600">Vetted Brands & Operators</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Vetted Brands */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Featured Vetted Franchise Brands
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've analyzed these coworking franchises for market fit, financial performance, and operational support.
            </p>
            <div className="mt-4 text-sm text-gray-500 bg-gray-100 rounded-lg p-3 max-w-2xl mx-auto">
              <strong>Disclaimer:</strong> These examples are for illustration purposes and do not constitute an endorsement 
              of any specific franchise. Our recommendations are based on your specific market analysis.
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {vettedBrands.map((brand, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <div className="bg-gradient-to-br from-emerald-500 to-blue-600 p-4 rounded-xl w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Building className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{brand.name}</h3>
                  <p className="text-emerald-600 font-medium">{brand.segment}</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Startup Cost:</span>
                    <span className="font-semibold text-gray-900">{brand.startupCost}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Term Length:</span>
                    <span className="font-semibold text-gray-900">{brand.termLength}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Profit Potential:</span>
                    <span className="font-semibold text-emerald-600">{brand.profitPotential}</span>
                  </div>
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                    <div className="text-sm text-gray-600">
                      <strong>Best Market Fit:</strong> {brand.marketFit}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-700 mb-6">
              <strong>We evaluate 15+ franchise brands</strong> across different market segments and investment levels.
            </p>
            <a href="/book-consultation" className="group bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center">
              See Which Brands Fit Your Market
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Our Partners Are Saying
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real franchisees who avoided costly mistakes with our guidance
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-8 border border-emerald-200">
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg font-semibold text-gray-900 mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
                
                <div className="border-t border-emerald-200 pt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{testimonial.author.charAt(0)}</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">{testimonial.title}</div>
                    </div>
                  </div>
                  <div className="bg-emerald-100 rounded-lg p-3">
                    <div className="text-sm font-medium text-emerald-800">
                      <CheckCircle className="h-4 w-4 inline mr-1" />
                      {testimonial.result}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story Case Study */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Franchisee Success Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we helped a first-time franchisee avoid a $400K mistake and find the perfect match
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Successful franchise location"
                  className="w-full h-full object-cover min-h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center gap-4 text-sm mb-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Plano, TX
                    </span>
                    <span className="flex items-center gap-1">
                      <Building className="h-4 w-4" />
                      8,500 SF
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold">Community Workspace Hub</h3>
                  <p className="text-lg opacity-90">From analysis paralysis to profitable franchise</p>
                </div>
              </div>

              <div className="p-12 flex flex-col justify-center">
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h4>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Sarah was considering three different franchise opportunities but couldn't decide which 
                    would work best in her suburban market. Traditional demographic data suggested all three 
                    could succeed, but our micro-market analysis revealed critical differences.
                  </p>
                  
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Recommendation</h4>
                  <p className="text-gray-600 leading-relaxed">
                    We identified that her market had strong demand for community-focused coworking rather than 
                    premium executive suites. The neighborhood franchise model was the perfect fit for her 
                    demographics and competition landscape.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-emerald-50 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <TrendingUp className="h-6 w-6 text-emerald-600" />
                      <span className="font-semibold text-gray-900">Occupancy</span>
                    </div>
                    <div className="text-3xl font-bold text-gray-900">88%</div>
                    <div className="text-sm text-gray-600">Within 14 months</div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <DollarSign className="h-6 w-6 text-blue-600" />
                      <span className="font-semibold text-gray-900">ROI</span>
                    </div>
                    <div className="text-3xl font-bold text-gray-900">31%</div>
                    <div className="text-sm text-gray-600">Annual return</div>
                  </div>
                  
                  <div className="bg-purple-50 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="h-6 w-6 text-purple-600" />
                      <span className="font-semibold text-gray-900">Members</span>
                    </div>
                    <div className="text-3xl font-bold text-gray-900">145</div>
                    <div className="text-sm text-gray-600">Active community</div>
                  </div>
                  
                  <div className="bg-orange-50 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Target className="h-6 w-6 text-orange-600" />
                      <span className="font-semibold text-gray-900">Breakeven</span>
                    </div>
                    <div className="text-3xl font-bold text-gray-900">16 mo</div>
                    <div className="text-sm text-gray-600">Ahead of projections</div>
                  </div>
                </div>

                <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-200">
                  <blockquote className="text-xl font-semibold text-emerald-900 mb-4">
                    "DenSwap's analysis saved me from choosing the wrong franchise for my market. 
                    I'm now profitable in year one instead of struggling like my competitors."
                  </blockquote>
                  <div className="text-emerald-700 font-medium">
                    — Sarah Martinez, Franchise Owner, Community Workspace Hub
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How We Match You with the Right Franchise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our systematic approach eliminates guesswork and maximizes your success probability
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-2xl shadow-lg mb-6 border border-gray-100">
                <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">1. Market Analysis</h3>
                <p className="text-gray-600 text-sm">Deep dive into your local coworking demand and competition</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-2xl shadow-lg mb-6 border border-gray-100">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">2. Model Matching</h3>
                <p className="text-gray-600 text-sm">Identify which franchise models align with your market opportunity</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-2xl shadow-lg mb-6 border border-gray-100">
                <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">3. Financial Validation</h3>
                <p className="text-gray-600 text-sm">Realistic P&L projections for your chosen franchise model</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-2xl shadow-lg mb-6 border border-gray-100">
                <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">4. Launch Support</h3>
                <p className="text-gray-600 text-sm">Ongoing guidance through franchise selection and opening</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-600 via-slate-700 to-emerald-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Make a
            <span className="text-emerald-300"> Data-Driven Decision?</span>
          </h2>
          
          <p className="text-xl text-slate-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Stop guessing. Start with a risk-free feasibility report and see which coworking model 
            is right for your market.
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-emerald-200">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">No obligation</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-200">
              <Shield className="h-5 w-5" />
              <span className="font-medium">Powered by DenSwap Data</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-200">
              <Eye className="h-5 w-5" />
              <span className="font-medium">Your information is safe</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/sample-report" className="group bg-white text-slate-600 px-8 py-4 rounded-2xl text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center">
              Start My Free Feasibility Report
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href="/book-consultation" className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Expert Consultation
            </a>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-300 mb-2">95%</div>
              <div className="text-slate-200">Match Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300 mb-2">$400K</div>
              <div className="text-slate-200">Avg. Loss Prevented</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-300 mb-2">50+</div>
              <div className="text-slate-200">Successful Matches</div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};
