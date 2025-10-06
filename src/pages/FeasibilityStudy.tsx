import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactSection } from '../components/ContactSection';
import { TrendingUp, Building, Users, DollarSign, CheckCircle, ArrowRight, BarChart3, Target, Clock, MapPin, Calculator, PieChart, Settings, Palette, Wifi, FileText, Calendar } from 'lucide-react';

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
        {/* Curved Bottom Edge */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg className="w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 Q600,120 1200,0 L1200,120 L0,120 Z" fill="white" />
          </svg>
        </div>

        <div className="relative z-10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Will Your Building Print Money or Burn Cash
                </h2>

                <p className="text-lg md:text-xl text-slate-100 mb-8 leading-relaxed">
                  Most property owners are about to make the most expensive mistake of their career. Here's how the smart money thinks about coworking.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/sample-report" className="group bg-white text-slate-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  Download a Sample Report
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/book-consultation" className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Call
                </a>
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
              <div className="bg-gradient-to-br from-brand-primary to-brand-light p-8 rounded-2xl">
                <img
                  src="/DenSwap Map Webimage copy.png"
                  alt="DenSwap Market Analysis Map"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
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
                  <p className="text-lg text-gray-800 mb-4">
                    The median coworking space bleeds <span className="font-black text-red-600">$180K</span> in year one.
                    The top performing generate profits in <span className="font-black text-emerald-600">4 months</span> and spend less on startup.
                  </p>
                </div>

                <p className="font-semibold">
                  What's the difference? Location intelligence that goes deeper than "it feels right."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Quote Section */}
      <section className="py-0 bg-white overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Left Side - Content */}
          <div className="bg-gray-50 py-20 px-8 lg:px-16 flex items-center">
            <div className="max-w-xl">
              <div className="mb-8">
                <img
                  src="/somo-cowork-logo.png"
                  alt="SOMO Cowork"
                  className="h-12 w-auto mb-12"
                />
              </div>

              <blockquote className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                "After only four months in operation, we exceeded our expectations and reached our annual goal."
              </blockquote>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                The developers of SOMO Village partnered with DenSwap to build a thriving and profitable workspace as the ultimate amenity for their new $1 billion, 200-acre residential redevelopment in Sonoma County.
              </p>

              <a
                href="/case-studies"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-emerald-600 text-emerald-600 rounded-lg font-semibold hover:bg-emerald-600 hover:text-white transition-all duration-300"
              >
                <span>See how DenSwap helped build SOMO Cowork</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[500px] lg:h-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-emerald-900 opacity-10"></div>
            <img
              src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Modern coworking space"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Capital Allocation Section */
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Background Blob - Bottom Left */}
        <div className="absolute -bottom-40 left-0 w-1/2 h-3/4 pointer-events-none">
          <img
            src="/Blob bottom left.png"
            alt=""
            className="w-full h-full object-contain opacity-100"
          />
        </div>
        <div className="relative z-10">
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