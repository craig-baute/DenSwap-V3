import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactSection } from '../components/ContactSection';
import { TrendingUp, Building, Users, DollarSign, Target, BarChart3, CheckCircle, ArrowRight, Calendar, FileText, Shield, MapPin, Zap, Award, AlertTriangle, Clock } from 'lucide-react';

export const REITsInvestmentFunds: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header isMobileMenuOpen={false} setIsMobileMenuOpen={() => {}} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-emerald-50/40 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-200/40 bg-[size:24px_24px] opacity-25"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-full blur-3xl opacity-25 -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-5 py-2.5 bg-blue-100 border border-blue-200 rounded-full text-sm font-semibold text-blue-800 mb-8 shadow-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              For REITs & Investment Funds
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Discover where coworking can
              <span className="text-emerald-600"> increase the value</span>
              <br />
              <span className="text-4xl md:text-5xl">of buildings in your portfolio.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed">
              Coworking won't work everywhere. Our data shines a light on which buildings it will, 
              so you can focus time and money to rapidly increase the value of your assets.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a href="/book-consultation" className="group bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center">
                Request a Portfolio Assessment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/sample-report" className="group bg-white border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-50 hover:shadow-lg transition-all duration-300 inline-flex items-center justify-center">
                <FileText className="mr-2 h-5 w-5" />
                Download Sample Feasibility
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl shadow-lg">
                  <Building className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-black text-gray-900">$500M+</div>
                  <div className="text-gray-700 text-sm font-medium">Assets Analyzed</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-3 rounded-xl shadow-lg">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-black text-gray-900">180%</div>
                  <div className="text-gray-700 text-sm font-medium">Avg. NOI Increase</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-br from-blue-600 to-emerald-600 p-3 rounded-xl shadow-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-2xl font-black text-gray-900">150+</div>
                  <div className="text-gray-700 text-sm font-medium">Properties Optimized</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Portfolio is Under Attack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Traditional office leasing is dying. Smart funds are already moving.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="text-lg text-gray-700 leading-relaxed">
                <p className="mb-6">
                  <strong>Office vacancy rates are hitting 20-40% nationwide.</strong> Corporate mandates for in-office work 
                  are failing. Remote and hybrid work isn't going away. Traditional lease structures are broken.
                </p>
                <p className="mb-6">
                  While you're debating the future of work, sophisticated investors are deploying capital into 
                  data-driven flexible workspace plays. They're buying "underperforming" office buildings at 
                  traditional metrics and converting them to cash-flowing coworking assets.
                </p>
                <p className="text-blue-700 font-bold">
                  The question isn't whether the office market will recover. It's whether you'll adapt 
                  before your competitors do.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">The Numbers Don't Lie</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-5 bg-red-50 rounded-xl border border-red-200">
                    <div className="flex items-center gap-3">
                      <div className="bg-red-500 p-3 rounded-lg shadow-md">
                        <Building className="h-6 w-6 text-white" />
                      </div>
                      <span className="font-bold text-gray-900">Office Vacancy Crisis</span>
                    </div>
                    <div className="text-2xl font-black text-red-700">20-40%</div>
                  </div>

                  <div className="flex items-center justify-between p-5 bg-orange-50 rounded-xl border border-orange-200">
                    <div className="flex items-center gap-3">
                      <div className="bg-orange-500 p-3 rounded-lg shadow-md">
                        <TrendingUp className="h-6 w-6 text-white" />
                      </div>
                      <span className="font-bold text-gray-900">Revenue Decline</span>
                    </div>
                    <div className="text-2xl font-black text-orange-700">-30%</div>
                  </div>

                  <div className="flex items-center justify-between p-5 bg-emerald-50 rounded-xl border border-emerald-200">
                    <div className="flex items-center gap-3">
                      <div className="bg-emerald-500 p-3 rounded-lg shadow-md">
                        <DollarSign className="h-6 w-6 text-white" />
                      </div>
                      <span className="font-bold text-gray-900">Coworking Returns</span>
                    </div>
                    <div className="text-2xl font-black text-emerald-700">+180%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Turn Struggling Assets into
              <span className="text-emerald-600"> Premium Properties</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our data transforms underperforming office buildings into high-yield coworking investments
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 border border-emerald-200">
              <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <DollarSign className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Driving Premium Rent Prices</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Coworking commands 2-3x higher revenue per square foot than traditional office leasing. 
                Our data identifies markets where you can achieve premium pricing without oversaturation.
              </p>
              <div className="bg-white rounded-lg p-4 border border-emerald-200">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">Traditional Office</span>
                  <span className="text-xl font-bold text-gray-600">$18-25/SF</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-700 font-medium">Optimized Coworking</span>
                  <span className="text-xl font-bold text-emerald-600">$45-75/SF</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 border border-blue-200">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Attracting High-End Tenants</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Premium coworking attracts professionals, consultants, and growing companies who pay 
                consistently and value quality workspace. No more chasing corporate tenants who 
                might not renew.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span className="text-gray-700 text-sm">Diversified income from 50-200 members</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span className="text-gray-700 text-sm">Month-to-month flexibility reduces vacancy risk</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-500" />
                  <span className="text-gray-700 text-sm">Professional tenants who care about space quality</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-200">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Decreasing Tenant Attrition</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Coworking members have higher retention rates than traditional office tenants because 
                they're invested in the community and workspace experience, not just square footage.
              </p>
              <div className="bg-white rounded-lg p-4 border border-purple-200">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-red-600">65%</div>
                    <div className="text-xs text-gray-600">Traditional Office</div>
                    <div className="text-xs text-gray-600">Annual Retention</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">85%</div>
                    <div className="text-xs text-gray-600">Coworking</div>
                    <div className="text-xs text-gray-600">Member Retention</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200">
              <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Identifying Undervalued Properties</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our market intelligence reveals buildings being sold at traditional CRE discounts 
                that have massive coworking upside potential. Get first-mover advantage on hidden opportunities.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span className="text-gray-700 text-sm">Properties priced on outdated metrics</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span className="text-gray-700 text-sm">Markets with unmet coworking demand</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span className="text-gray-700 text-sm">Buildings with optimal coworking characteristics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Portfolio Optimization Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Data-driven tools designed for institutional investors and fund managers
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-blue-200">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <BarChart3 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Demand Analysis</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Quick coworking potential assessment for any property in your pipeline. Get instant 
                clarity on which assets deserve further investigation and capital allocation.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-700">Market demand scoring for any ZIP code</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-700">Supportable square footage calculations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-700">Competition saturation analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-500" />
                  <span className="text-gray-700">Building suitability assessment</span>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-blue-800 font-medium">Investment:</span>
                  <span className="text-2xl font-bold text-blue-900">$500</span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-blue-700 text-sm">Delivery:</span>
                  <span className="text-blue-800 font-semibold">24 hours</span>
                </div>
              </div>

              <a href="/demand-report" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2">
                Order Demand Analysis
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-emerald-200 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  INSTITUTIONAL FAVORITE
                </span>
              </div>
              
              <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FileText className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Feasibility Study</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Comprehensive site evaluation for confident buy/sell/convert decisions. Complete 
                financial modeling, risk assessment, and implementation roadmap for institutional-grade investments.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="text-gray-700">5-year financial projections & sensitivity analysis</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="text-gray-700">Risk assessment & mitigation strategies</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="text-gray-700">Implementation roadmap & timeline</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="text-gray-700">Management structure recommendations</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="text-gray-700">Exit strategy valuation impact</span>
                </div>
              </div>

              <div className="bg-emerald-50 rounded-lg p-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-emerald-800 font-medium">Investment:</span>
                  <span className="text-2xl font-bold text-emerald-900">$3,000+</span>
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-emerald-700 text-sm">Delivery:</span>
                  <span className="text-emerald-800 font-semibold">10-20 business days</span>
                </div>
              </div>

              <a href="/feasibility-study" className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-700 transition-colors inline-flex items-center justify-center gap-2">
                Request Feasibility Study
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Real Results from Real Portfolios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Case study: How a regional investment fund increased portfolio NOI by 45%
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Portfolio transformation"
                  className="w-full h-full object-cover min-h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center gap-4 text-sm mb-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      Austin, TX Portfolio
                    </span>
                    <span className="flex items-center gap-1">
                      <Building className="h-4 w-4" />
                      4 Buildings, 125K SF
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold">Regional Investment Fund</h3>
                  <p className="text-lg opacity-90">From struggling assets to premium portfolio</p>
                </div>
              </div>

              <div className="p-12 flex flex-col justify-center">
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h4>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    A regional investment fund was hemorrhaging cash on four office buildings with 
                    average vacancy rates of 55%. Traditional re-leasing efforts had failed for 18 months.
                  </p>
                  
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h4>
                  <p className="text-gray-600 leading-relaxed">
                    We analyzed all four properties and recommended converting two to coworking while 
                    optimizing the other two for traditional tenants based on micro-market dynamics.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <TrendingUp className="h-6 w-6 text-blue-600" />
                      <span className="font-semibold text-gray-900">Portfolio NOI</span>
                    </div>
                    <div className="text-3xl font-bold text-gray-900">+45%</div>
                    <div className="text-sm text-gray-600">Year-over-year increase</div>
                  </div>
                  
                  <div className="bg-emerald-50 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <DollarSign className="h-6 w-6 text-emerald-600" />
                      <span className="font-semibold text-gray-900">Asset Value</span>
                    </div>
                    <div className="text-3xl font-bold text-gray-900">+$2.8M</div>
                    <div className="text-sm text-gray-600">Portfolio appreciation</div>
                  </div>
                  
                  <div className="bg-purple-50 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="h-6 w-6 text-purple-600" />
                      <span className="font-semibold text-gray-900">Occupancy</span>
                    </div>
                    <div className="text-3xl font-bold text-gray-900">88%</div>
                    <div className="text-sm text-gray-600">Portfolio average</div>
                  </div>
                  
                  <div className="bg-teal-50 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="h-6 w-6 text-teal-600" />
                      <span className="font-semibold text-gray-900">Timeline</span>
                    </div>
                    <div className="text-3xl font-bold text-gray-900">14 mo</div>
                    <div className="text-sm text-gray-600">Full transformation</div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-2xl p-8 border border-blue-200">
                  <blockquote className="text-xl font-semibold text-blue-900 mb-4">
                    "DenSwap's analysis saved us from making a $5M mistake and showed us where to deploy capital for maximum returns."
                  </blockquote>
                  <div className="text-blue-700 font-medium">
                    — Portfolio Manager, Regional Investment Fund
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk vs Reward Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/5 bg-[size:20px_20px]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-600/20 to-emerald-600/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Risk of
              <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"> Doing Nothing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              While you debate, your competitors are already moving capital
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="text-lg text-gray-300 leading-relaxed">
                <p className="mb-6">
                  <strong className="text-white">Every month you wait is capital deployment opportunity lost.</strong> 
                  The funds moving first on coworking conversions are seeing 2-3x returns while traditional 
                  office investors watch their assets bleed value.
                </p>
                <p className="mb-6">
                  Your board wants answers. Your LPs want returns. Your competitors are getting both 
                  by embracing the fundamental shift in how office space generates revenue.
                </p>
                <p className="text-emerald-400 font-bold">
                  This isn't about following trends. It's about following the money.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">What Elite Funds Are Doing:</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-gray-200">Acquiring distressed office assets at 30-40% discounts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-200">Converting to high-yield coworking in select markets</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-gray-200">Exiting at premium multiples within 3-5 years</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">The Math Is Simple</h3>
              
              <div className="space-y-6">
                <div className="bg-red-500/20 rounded-lg p-4 border border-red-400/30">
                  <div className="flex justify-between items-center">
                    <span className="text-red-200 font-medium">Status Quo Path:</span>
                    <span className="text-2xl font-bold text-red-300">-$2M</span>
                  </div>
                  <div className="text-sm text-red-200 mt-1">Continued vacancy losses</div>
                </div>
                
                <div className="bg-emerald-500/20 rounded-lg p-4 border border-emerald-400/30">
                  <div className="flex justify-between items-center">
                    <span className="text-emerald-200 font-medium">Coworking Conversion:</span>
                    <span className="text-2xl font-bold text-emerald-300">+$3.5M</span>
                  </div>
                  <div className="text-sm text-emerald-200 mt-1">5-year value creation</div>
                </div>

                <div className="bg-blue-500/20 rounded-lg p-4 border border-blue-400/30">
                  <div className="flex justify-between items-center">
                    <span className="text-blue-200 font-medium">Net Opportunity:</span>
                    <span className="text-3xl font-bold text-blue-300">$5.5M</span>
                  </div>
                  <div className="text-sm text-blue-200 mt-1">Per 25,000 SF building</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Portfolio's Future Starts Today
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Don't let another quarter pass watching your assets underperform. Get the intelligence 
            that transforms struggling properties into portfolio stars.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/book-consultation" className="group bg-white text-blue-600 px-8 py-4 rounded-2xl text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center">
              Request Portfolio Assessment
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href="/sample-report" className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center">
              <FileText className="mr-2 h-5 w-5" />
              Download Sample Study
            </a>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300 mb-2">$500M+</div>
              <div className="text-blue-200">Assets Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-300 mb-2">85%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-300 mb-2">14</div>
              <div className="text-blue-200">Years Operating</div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};