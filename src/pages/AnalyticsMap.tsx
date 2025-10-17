import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactSection } from '../components/ContactSection';
import { Map, TrendingUp, Building, Search, Target, BarChart3, CheckCircle, ArrowRight, Mail, Bell, Zap, Eye, DollarSign, MapPin, Calendar, Calculator, Users } from 'lucide-react';

export const AnalyticsMap: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNotifyMe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email signup
    console.log('Email signup:', email);
    setIsSubscribed(true);
    setEmail('');
  };

  const features = [
    {
      icon: Map,
      title: "Interactive Market Mapping",
      description: "Visualize coworking demand across entire markets with heat maps showing opportunity zones and saturation levels."
    },
    {
      icon: Search,
      title: "Property Discovery Engine",
      description: "Identify undervalued properties selling at traditional CRE prices that have hidden coworking potential."
    },
    {
      icon: TrendingUp,
      title: "Portfolio Optimization",
      description: "Analyze your entire portfolio at once to identify which properties have the highest coworking conversion potential."
    },
    {
      icon: Target,
      title: "Opportunity Scoring",
      description: "Get instant scores for any property based on location, demographics, competition, and market dynamics."
    },
    {
      icon: BarChart3,
      title: "Bulk Feasibility Generation",
      description: "Generate multiple feasibility studies simultaneously to compare opportunities across your pipeline."
    },
    {
      icon: Building,
      title: "Market Intelligence Dashboard",
      description: "Real-time data on competition, pricing, occupancy rates, and market trends in any location."
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Find Hidden Value",
      description: "Identify properties selling at discount prices based on traditional metrics but with massive coworking upside potential."
    },
    {
      icon: Zap,
      title: "Speed to Market",
      description: "Evaluate dozens of properties in minutes instead of weeks, giving you first-mover advantage on opportunities."
    },
    {
      icon: Eye,
      title: "Market Vision",
      description: "See market opportunities that others miss with comprehensive data visualization and analytics."
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
                  Analytics Map
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                  The Ultimate
                  <span className="text-emerald-300"> Coworking Intelligence</span>
                  <br />
                  <span className="text-4xl md:text-5xl">Superpower for Investors</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl">
                  Discover undervalued properties with massive coworking potential. Analyze entire portfolios instantly. 
                  Find opportunities others miss with our revolutionary market intelligence platform.
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

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Stop Evaluating Properties
                <span className="text-red-600"> One at a Time</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong>Smart investors are missing massive opportunities</strong> because traditional CRE analysis 
                  doesn't account for coworking potential.
                </p>

                <p>
                  While you're manually researching individual properties, competitors with better market intelligence 
                  are identifying and acquiring undervalued assets with hidden coworking upside.
                </p>

                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <p className="text-red-800 font-semibold mb-2">The Current Problem:</p>
                  <ul className="space-y-2 text-red-700">
                    <li>• Weeks to evaluate a single property</li>
                    <li>• No way to compare multiple opportunities</li>
                    <li>• Missing properties with coworking potential</li>
                    <li>• Competitors moving faster with better data</li>
                  </ul>
                </div>

                <p className="font-bold text-purple-700">
                  Analytics Map changes everything. See the entire market at once.
                </p>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Market Analysis Dashboard" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-black text-purple-600 mb-1">Q2</div>
                  <div className="text-sm text-gray-600 font-medium">2025 Launch</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Revolutionary Features Coming Soon
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The most comprehensive coworking market intelligence platform ever built
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-br from-purple-500 to-blue-600 p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Competitive Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform how you identify and evaluate coworking opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center">
                  <div className="bg-gradient-to-br from-purple-500 to-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Perfect for Portfolio Investors
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Ideal Users:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-500" />
                    <span className="text-gray-700">Multi-property investors</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-500" />
                    <span className="text-gray-700">Real estate funds</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-500" />
                    <span className="text-gray-700">Opportunity zone investors</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-500" />
                    <span className="text-gray-700">Coworking operators scaling</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4">Key Capabilities:</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span className="text-gray-700">Analyze 100+ properties simultaneously</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span className="text-gray-700">Generate bulk feasibility studies</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span className="text-gray-700">Market opportunity heat maps</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span className="text-gray-700">ROI comparison dashboards</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get Early Access
          </h2>
          
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Be among the first investors to access Analytics Map. Early users get exclusive pricing 
            and priority support during the launch phase.
          </p>

          <div className="flex items-center justify-center gap-2 mb-8">
            <MapPin className="h-6 w-6 text-purple-200" />
            <span className="text-lg font-semibold text-purple-100">Launching Q2 2025</span>
          </div>

          {!isSubscribed ? (
            <form onSubmit={handleNotifyMe} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 border-2 border-white/20 rounded-xl text-lg bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-white/50"
                required
              />
              <button 
                type="submit"
                className="group bg-white text-purple-600 px-8 py-4 rounded-xl text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
              >
                <Bell className="mr-2 h-5 w-5" />
                Get Early Access
              </button>
            </form>
          ) : (
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 max-w-md mx-auto">
              <div className="flex items-center justify-center gap-2 text-white font-semibold mb-2">
                <CheckCircle className="h-5 w-5" />
                You're on the early access list!
              </div>
              <p className="text-purple-100 text-sm">We'll contact you with exclusive early access details.</p>
            </div>
          )}
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};
