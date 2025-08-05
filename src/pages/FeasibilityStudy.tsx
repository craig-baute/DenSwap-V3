import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactSection } from '../components/ContactSection';
import { TrendingUp, Building, Users, DollarSign, CheckCircle, ArrowRight, BarChart3, Target, Clock, MapPin, Calculator, PieChart, Settings, Palette, Wifi } from 'lucide-react';

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
      <section className="bg-gradient-to-br from-emerald-50 via-white to-blue-50/40 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-200/40 bg-[size:24px_24px] opacity-25"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-full blur-3xl opacity-25 -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Will your building print money
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"> or burn cash</span>
              <br />
              <span className="text-4xl md:text-5xl">with coworking?</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed">
              Stop guessing on flexible office. DenSwap's Feasibility Study gives you the brutal facts 
              and the operator-proven plan to maximize profit and crush risk.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button 
                onClick={handleOrderReport}
                className="group bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
              >
                Order a Feasibility Report
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-emerald-50 rounded-2xl p-8 border border-gray-200">
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
            <button 
              onClick={handleOrderReport}
              className="group bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center"
            >
              Order Your Feasibility Study
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
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