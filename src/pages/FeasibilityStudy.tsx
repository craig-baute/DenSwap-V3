import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactSection } from '../components/ContactSection';
import { TrendingUp, Building, Users, DollarSign, CheckCircle, ArrowRight, BarChart3, Target, Clock, MapPin, Calculator, PieChart, Settings, Palette, Wifi, FileText } from 'lucide-react';

export const FeasibilityStudy: React.FC = () => {
  const [formData, setFormData] = useState({
    propertyLocation: '',
    buildingSize: '',
    email: ''
  });

  const handleOrderReport = () => {
    console.log('Ordering feasibility report:', formData);
  };

  const includedCategories = [
    {
      title: "Market Analysis",
      icon: BarChart3,
      items: [
        "Target Area Definition",
        "Demographic Analysis", 
        "Competition Mapping",
        "Demand Forecasting"
      ]
    },
    {
      title: "Financial Projections",
      icon: DollarSign,
      items: [
        "Revenue Projections",
        "Space Allocation",
        "Build-out Costs",
        "Operating Expenses"
      ]
    },
    {
      title: "Space Planning",
      icon: Building,
      items: [
        "Office Size Allocation",
        "Floor Plan Layout",
        "# of Meeting Rooms",
        "Optimal Layout Design"
      ]
    },
    {
      title: "Operations Strategy",
      icon: Settings,
      items: [
        "Staffing Strategy",
        "IT and Hardware",
        "Membership Policies",
        "Management Structure"
      ]
    },
    {
      title: "Launch Strategy",
      icon: Target,
      items: [
        "Timeline and Planning",
        "Marketing Plan",
        "Pre-Leasing Plan",
        "Go-to-Market Strategy"
      ]
    },
    {
      title: "Marketing & Amenities",
      icon: Palette,
      items: [
        "Budget and Selection",
        "'Talk about' Perks",
        "Digital Marketing",
        "Community Building"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header isMobileMenuOpen={false} setIsMobileMenuOpen={() => {}} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-600 via-slate-700 to-emerald-800 text-white overflow-hidden">
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Report Mockups - Left Side */}
              <div className="relative">
                <div className="transform -rotate-12 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
                    {/* Report Cover */}
                    <div className="bg-gradient-to-br from-brand-primary to-brand-light p-8 text-white">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-sm">D</span>
                        </div>
                        <span className="font-bold text-lg">DENSWAP</span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Coworking</h3>
                      <h3 className="text-2xl font-bold mb-4">Feasibility Study</h3>
                      <p className="text-sm opacity-90">Market Analysis Report</p>
                      
                      {/* Hexagon Pattern */}
                      <div className="absolute bottom-4 right-4 opacity-30">
                        <div className="grid grid-cols-3 gap-1">
                          {[...Array(6)].map((_, i) => (
                            <div key={i} className="w-4 h-4 border border-white/40" style={{
                              clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
                            }}></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Report Content Preview */}
                    <div className="p-6 bg-white">
                      <div className="space-y-4">
                        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-3 bg-gray-100 rounded w-full"></div>
                        <div className="h-3 bg-gray-100 rounded w-2/3"></div>
                        
                        <div className="bg-brand-primary/10 rounded-lg p-4 mt-4">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-gray-900 text-sm">Market Viability:</span>
                            <span className="text-lg font-bold text-brand-primary">Excellent</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-gradient-to-r from-brand-primary to-brand-light h-2 rounded-full" style={{ width: '88%' }}></div>
                          </div>
                        </div>
                        
                        <div className="space-y-2 mt-4">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-700">Projected ROI:</span>
                            <span className="font-semibold text-brand-primary">28%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-700">Breakeven Timeline:</span>
                            <span className="font-semibold text-brand-light">16 months</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-brand-light text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  Expert Analysis
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white text-slate-600 px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                  20+ Pages
                </div>
              </div>

              {/* Content - Right Side */}
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                    Building confidence to build
                    <span className="text-brand-light"> flex spaces.</span>
                    <span className="text-yellow-400 text-5xl ml-2">*</span>
                  </h1>
                  
                  <p className="text-lg md:text-xl text-slate-100 mb-8 leading-relaxed">
                    Are you considering transforming your commercial property into a flexible 
                    coworking space? Our feasibility reports can provide you with the insight you 
                    need to make a confident investment decision. Our team of experts utilizes 
                    market data APIs, proprietary information on coworking spaces, and unique 
                    consulting expertise to assess whether a given building is suited for a 
                    successful flex/coworking business.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/sample-report" className="group bg-white text-slate-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 flex items-center justify-center">
                    Get Free Sample Report
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a href="/book-consultation" className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
                    <Calendar className="mr-2 h-5 w-5" />
                    Schedule Consultation
                  </a>
                </div>
                
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

        {/* Curved Bottom Element */}
        <div className="relative">
          <svg className="w-full h-24" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Testimonial Quote Section */}
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

      {/* The Data vs. The Dream Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Data Analysis Dashboard" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-black text-emerald-600 mb-1">24%</div>
                  <div className="text-sm text-gray-600 font-medium">Top Quartile Returns</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                The Data vs.
                <span className="text-emerald-600"> The Dream</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Everyone's focused on WeWork's failure and arguing about the future of work. 
                  Sophisticated investors are deploying capital into data-driven coworking plays.
                </p>

                <p>
                  Smart investors aren't repeating WeWork's mistakes. They're using a data-first, 
                  fundamental focus, market intelligence, and financial models grounded in reality 
                  that Adam Neumann ignored.
                </p>

                <p className="font-bold text-emerald-700">
                  The losers guess. The winners use data.
                </p>

                <p>
                  Coworking ventures fail because they're built on hope, not math. They confuse 
                  "busy coffee shops" with "sustainable business models." They mistake foot traffic 
                  for paying coworking customers.
                </p>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-black text-red-600 mb-2">-$180K</div>
                      <div className="text-sm text-gray-600">Median Loss Year One</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-emerald-600 mb-2">24%</div>
                      <div className="text-sm text-gray-600">Top Quartile Returns</div>
                    </div>
                  </div>
                </div>

                <p className="font-semibold">
                  What's the difference? Location intelligence that goes deeper than "it feels right."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capital Allocation Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              This is about capital allocation.
              <span className="text-red-600"> And capital preservation.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't be fooled. Coworking won't work everywhere.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Coworking is growing, but it won't work everywhere. There might be enough demand 
                in an area, but there might be low pricing power, or your floor plan isn't right, 
                or the additional expenses prevent it from making financial sense. We'll provide 
                you honest feedback and evaluate all options.
              </p>

              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <p className="text-red-800 font-semibold mb-2">The Risk:</p>
                <p className="text-red-700">
                  The average coworking build-out costs $60 to $145 per SF, averaging nearly 
                  $1 million to open a new space. Choose poorly, and you're not just losing 
                  money—you're losing money that could have been avoided.
                </p>
              </div>

              <p className="font-semibold">
                But get coworking fundamentals right, and you're looking at:
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="font-semibold">20-30% annual returns</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="font-semibold">Diversified tenant base (recession-resistant)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="font-semibold">Premium exit multiples when you sell your building</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 border border-emerald-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">The Equation</h3>
              
              <div className="text-center mb-8">
                <div className="text-4xl font-black text-emerald-600 mb-2">$300K+</div>
                <div className="text-gray-700 font-medium">Potential Loss Prevention</div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-lg font-semibold text-gray-900 text-center">
                  A feasibility study prevents $300K+ in destruction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Everything Included in the Feasibility Study
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive analysis covering every aspect of your coworking investment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {includedCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-emerald-500 to-blue-600 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-gray-600">
                        <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/order-feasibility-report"
                onClick={handleOrderReport}
                className="group bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
              >
                Order Your Feasibility Study 
              
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="/sample-report"
                className="group bg-white border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-emerald-50 hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                <FileText className="mr-2 h-5 w-5" />
                Download Sample Study
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-emerald-700 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-emerald-400/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Multiple Buildings or Large Investor?
          </h2>
          
          <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Contact us for enterprise pricing and discover how we can be your strategic partner 
            in transforming your entire portfolio.
          </p>

          <div className="flex items-center justify-center gap-2 mb-8">
            <Building className="h-6 w-6 text-emerald-200" />
            <span className="text-lg font-semibold text-emerald-100">Portfolio Strategy & Implementation</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/book-consultation" className="group bg-white text-emerald-600 px-8 py-4 rounded-2xl text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center">
              Schedule Enterprise Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href="#contact" className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center">
              <Building className="mr-2 h-5 w-5" />
              Contact for Portfolio Pricing
            </a>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};