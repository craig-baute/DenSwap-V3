import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactSection } from '../components/ContactSection';
import { TrendingUp, Building, Users, DollarSign, CheckCircle, ArrowRight, BarChart3, Target, Clock, MapPin, Calculator, PieChart, Settings, Palette, Wifi, FileText, Calendar } from 'lucide-react';

export const SampleReport: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle report download
    console.log('Downloading sample report for email:', email);
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
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="bg-green-100 p-4 rounded-full w-20 h-20 mx-auto mb-8 flex items-center justify-center">
              <FileText className="h-10 w-10 text-green-600" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Download Your Free
              <span className="text-green-600"> Sample Report</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              See for yourself how our data-driven feasibility studies provide the clarity 
              and confidence you need to make your next investment decision.
            </p>

            <form onSubmit={handleDownload} className="max-w-md mx-auto">
              <div className="flex items-center gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg text-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button 
                  type="submit"
                  className="group bg-green-600 text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-green-700 hover:scale-105 transition-all duration-300 flex items-center whitespace-nowrap"
                >
                  Download Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
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
        </div>
      </section>

      {/* Critical Questions Section */}
      <section className="py-20 bg-white">
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

      {/* Why Trust Us Section */}
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

      <ContactSection />
      <Footer />
    </div>
  );
};
