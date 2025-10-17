import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactSection } from '../components/ContactSection';
import { CaseStudySection } from '../components/CaseStudySection';
import { PropertyShowcase } from '../components/PropertyShowcase';
import { TrendingUp, Building, Users, DollarSign, CheckCircle, ArrowRight, BarChart3, Target, Clock, MapPin, Calculator, PieChart, Settings, Palette, Wifi, FileText, Calendar } from 'lucide-react';

interface CaseStudy {
  id: number;
  title: string;
  quote: string;
  company: string;
  role: string;
  project_details: string;
  results: {
    months_to_goal: number;
    annual_target: number;
    occupancy_rate: number;
    month_breakeven: number;
  };
  services: string[];
}

export const FeasibilityStudy: React.FC = () => {
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);
  const [formData, setFormData] = useState({
    propertyLocation: '',
    buildingSize: '',
    email: ''
  });

  const handleOrderReport = () => {
    console.log('Ordering feasibility report:', formData);
  };

  useEffect(() => {
    const mockCaseStudy = {
      id: 1,
      title: 'Somo Group',
      quote: 'After only four months in operation, we exceeded our expectations and reached our annual goal.',
      company: 'Somo Group',
      role: 'Commercial Building Development',
      project_details: 'Working on a new commercial building associated with a housing development.',
      results: {
        months_to_goal: 4,
        annual_target: 100,
        occupancy_rate: 85,
        month_breakeven: 18,
      },
      services: ['Feasibility', 'Business Model', 'Floor Plan', 'Launch'],
    };
    setCaseStudy(mockCaseStudy);
  }, []);

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
      
      <section className="relative bg-[#1a4e48] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/feasibility-header-mid.png" alt="Feasibility Study Background" className="w-full h-full object-cover opacity-20" />
        </div>
        {/* Curved Bottom Edge */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg className="w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 Q600,120 1200,0 L1200,120 L0,120 Z" fill="white" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative min-h-[400px] lg:min-h-[600px]">
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-semibold text-white mb-4">
                  Coworking Feasibility Study
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  Will Your Building Print Money or <span className="text-red-500">Burn Cash?</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl">
                  Most property owners are about to make the most expensive mistake of their career. Here's how the smart money thinks about coworking.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/sample-report" className="group bg-white text-slate-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 flex items-center justify-center">
                  Download a Sample Report
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="/book-consultation" className="group bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Schedule a Call
                </a>
              </div>
            </div>
            </div>
            <div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
                  <div className="flex items-center gap-4 mb-2">
                    <MapPin className="h-6 w-6 text-emerald-300" />
                    <h3 className="font-semibold text-lg">Your Property</h3>
                  </div>
                  <p className="text-2xl font-bold">10,000 SF</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
                  <div className="flex items-center gap-4 mb-2">
                    <Calculator className="h-6 w-6 text-emerald-300" />
                    <h3 className="font-semibold text-lg">Startup Costs</h3>
                  </div>
                  <p className="text-2xl font-bold">$178,560</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
                  <div className="flex items-center gap-4 mb-2">
                    <Users className="h-6 w-6 text-emerald-300" />
                    <h3 className="font-semibold text-lg">Market Saturation:</h3>
                  </div>
                  <p className="text-2xl font-bold">37,000 SF Undersupplied</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
                  <div className="flex items-center gap-4 mb-2">
                    <CheckCircle className="h-6 w-6 text-emerald-300" />
                    <h3 className="font-semibold text-lg">Confidence Level:</h3>
                  </div>
                  <p className="text-2xl font-bold">High</p>
                </div>
                <div className="bg-emerald-300/20 backdrop-blur-lg p-6 rounded-2xl border border-emerald-300/30 col-span-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">Recommended Positioning:</h3>
                    <p className="text-lg font-bold text-emerald-200">Mid-Range Flex</p>
                  </div>
                </div>
                <div className="bg-blue-400/20 backdrop-blur-lg p-6 rounded-2xl border border-blue-400/30 col-span-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">Annual Profit at Stability:</h3>
                    <p className="text-2xl font-bold text-blue-200">$97,340</p>
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

      {/* The Data vs. The Dream Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <PropertyShowcase />

            <div>
              <h2 className="text-h2 text-3xl md:text-4xl font-bold text-gray-900 mb-8">
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

      {/* Capital Allocation Section */}
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
            <h2 className="text-h2 text-3xl md:text-4xl font-bold text-gray-900 mb-6">
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

      {/* Critical Questions Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <img
          src="/Blob bottom right.png"
          alt=""
          className="absolute -bottom-20 -right-20 w-[700px] h-[700px] object-contain opacity-40 pointer-events-none"
          style={{ filter: 'brightness(0.95) hue-rotate(160deg) saturate(1.5)' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">We Answer the Critical Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Before you invest a dime, we provide the data-driven answers you need to make a confident decision.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">1. Can Coworking Be Supported in Where My Building Is?</h3>
              <p className="text-gray-600">We analyze the local market, demographics, and competition to determine if there's enough demand to sustain a coworking space.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">2. What type of coworking will work with my budget and location?</h3>
              <p className="text-gray-600">We recommend the right mix of private offices, dedicated desks, and hot desks to match your budget and the needs of the local market.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">3. Will coworking generate enough revenue?</h3>
              <p className="text-gray-600">Our financial projections provide a clear picture of your potential revenue, expenses, and profitability.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">4. What's the best path forward to make coworking happen.</h3>
              <p className="text-gray-600">We provide a step-by-step launch plan, including marketing, pre-leasing, and operational strategies to ensure a successful opening.</p>
            </div>
          </div>
          <div className="mt-12 text-center bg-red-50 border border-red-200 rounded-xl p-8">
            <p className="text-xl text-red-800 font-semibold">We aren't afraid to tell you it won't work. Saying "No" now saves you hundreds of thousands of dollars and years of lost time.</p>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-h2 text-3xl md:text-4xl font-bold text-gray-900 mb-6">
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
                <div key={index} className="bg-white rounded-xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow">
                  <div className="bg-emerald-500 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
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
                className="group bg-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
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

      <CaseStudySection caseStudy={caseStudy} />

      {/* Why Trust Us Section - Version 1 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Trust Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just market researchers; we're coworking entrepreneurs. We built our methodology to find the perfect locations for our own spaces, and now we're sharing it with you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700">Combining data analytics with over 14 years of experience, we've studied over 4,500 coworking spaces and markets to identify the key indicators of success. Our approach is constantly evolving, informed by experience, primary research, and the latest industry trends.</p>
              <p className="text-lg text-gray-700">Coworking and office space is a consumer product now. We use the same approach as leading retailers and restaurants to evaluate locations. This goes way beyond census data to include purchasing behaviors, household structures, travel patterns, jobs, search data, industry surveys, and more.</p>
            </div>
            <div className="flex gap-8 justify-center">
              <div className="text-center">
                <img src="https://via.placeholder.com/150" alt="John Doe" className="w-40 h-40 rounded-full mx-auto mb-4 shadow-lg" />
                <h3 className="text-xl font-bold text-gray-900">John Doe</h3>
                <p className="text-gray-600">Co-Founder</p>
              </div>
              <div className="text-center">
                <img src="https://via.placeholder.com/150" alt="Jane Smith" className="w-40 h-40 rounded-full mx-auto mb-4 shadow-lg" />
                <h3 className="text-xl font-bold text-gray-900">Jane Smith</h3>
                <p className="text-gray-600">Co-Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us Section - Version 2 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex gap-6">
              <img src="https://via.placeholder.com/200x300" alt="John Doe" className="rounded-lg shadow-lg transform rotate-[-3deg]" />
              <img src="https://via.placeholder.com/200x300" alt="Jane Smith" className="rounded-lg shadow-lg transform rotate-[3deg] mt-8" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Trust Us</h2>
              <p className="text-xl text-gray-600">We're market researchers and coworking entrepreneurs who developed a methodology to find the perfect locations for our own spaces. Now, we're sharing our secrets with you.</p>
              <p className="text-lg text-gray-700">With 14+ years of experience and analysis of over 4,500 coworking spaces, we blend data analytics with real-world insights. Our approach is dynamic, adapting to new data, primary research, and industry trends.</p>
              <p className="text-lg text-gray-700">We treat office space as a consumer product, using the same sophisticated location analysis as top retailers. We go beyond census data, incorporating purchasing behaviors, travel patterns, and more to give you a true competitive edge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us Section - Version 3 */}
      <section className="py-20 bg-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Trust Us</h2>
          <div className="flex justify-center gap-12 mb-8">
            <div className="text-center">
              <img src="https://via.placeholder.com/150" alt="John Doe" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white" />
              <h3 className="text-xl font-bold">John Doe</h3>
            </div>
            <div className="text-center">
              <img src="https://via.placeholder.com/150" alt="Jane Smith" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white" />
              <h3 className="text-xl font-bold">Jane Smith</h3>
            </div>
          </div>
          <p className="text-xl max-w-3xl mx-auto mb-6">As both market researchers and coworking entrepreneurs, we developed our methodology to identify prime locations for our own ventures. We've analyzed over 4,500 coworking spaces, combining 14+ years of experience with cutting-edge data analytics.</p>
          <p className="text-lg max-w-2xl mx-auto">We view office space as a consumer product, employing the same rigorous location analysis as top retailers. Our data goes beyond the basics, incorporating purchasing behaviors, travel patterns, and more to provide you with a comprehensive market understanding.</p>
        </div>
      </section>

      {/* Enterprise CTA Section */}
      <section className="py-20 bg-[#1a4e48] text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-h2 text-4xl md:text-5xl font-bold mb-6 text-white">
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
