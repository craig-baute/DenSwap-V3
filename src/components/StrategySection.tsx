import React from 'react';
import { Shield, TrendingUp, Target, Zap, Building, Users, Settings, Palette, Wifi, BarChart3, Calendar, ArrowRight, CheckCircle } from 'lucide-react';

export const StrategySection: React.FC = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Stop the Bleeding",
      description: "Avoid the multi-million-dollar mistakes your competitors are making by guessing where coworking will work. We've already learned the hard lessons.",
      color: "red"
    },
    {
      icon: TrendingUp,
      title: "Maximize Returns",
      description: "Identify prime locations and optimize your build-out for peak occupancy and higher revenue, informed by actual operational P&Ls.",
      color: "green"
    },
    {
      icon: Target,
      title: "Outmaneuver Competitors",
      description: "Arm yourself with foresight only operators possess, building spaces that actually get used and drive revenue, leaving your rivals with vacant assets.",
      color: "blue"
    },
    {
      icon: Zap,
      title: "Future-Proof Assets",
      description: "Make strategic decisions based on true market demand and the realities of running a flex space, ensuring long-term asset value.",
      color: "purple"
    }
  ];

  const services = [
    { 
      icon: Building, 
      name: "Space Planning",
      details: [
        "Office Size Allocation",
        "Floor Plan Layout", 
        "# of Meeting Rooms"
      ]
    },
    { 
      icon: Target, 
      name: "Launch Strategy",
      details: [
        "Timeline and Planning",
        "Marketing Plan",
        "Pre-Leasing Plan"
      ]
    },
    { 
      icon: Palette, 
      name: "Furniture & Amenities",
      details: [
        "Budget and Selection",
        "'Talk about' Perks",
        "Modular Planning"
      ]
    },
    { 
      icon: Wifi, 
      name: "Software",
      details: [
        "Membership Platform",
        "Automations",
        "Tour and Marketing Tools"
      ]
    },
    { 
      icon: Settings, 
      name: "Operations",
      details: [
        "Staffing Strategy",
        "IT and Hardware",
        "Membership Policies"
      ]
    },
    { 
      icon: BarChart3, 
      name: "Marketing",
      details: [
        "Digital Marketing",
        "Community Building",
        "Retention Strategies"
      ]
    }
  ];

  return (
    <>
      {/* HIDDEN: Version 1: Original Enhanced */}
      {/* 
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-72 h-72 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-tr from-teal-200/30 to-emerald-200/30 rounded-full blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          ...content removed for brevity...
        </div>
      </section>
      */}

      {/* HIDDEN - Version 2: With Hero Image 
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-emerald-100/25 to-teal-100/25 rounded-full blur-3xl transform -translate-x-1/2"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-bl from-teal-100/25 to-emerald-100/25 rounded-full blur-3xl transform translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          ...content removed for brevity...
        </div>
      </section>
      */}

      {/* ACTIVE - Version 3: Dashboard/Analytics Focus */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-brand-primary/20 to-brand-light/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tr from-brand-light/20 to-brand-primary/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-h1 md:text-5xl font-black text-white mb-6">
                Your Coworking Strategy Partner
              </h2>
              <div className="text-5xl md:text-6xl font-black text-brand-light mb-8">
                Future-Proof Your Portfolio
              </div>
              <p className="text-body text-neutral-500 mb-8 leading-relaxed">
                From 1 building to 100 - data-driven insights that turn empty spaces into profit centers.
              </p>
              
              <a href="/book-consultation" className="group bg-gradient-to-r from-brand-primary to-brand-light text-white px-8 py-4 rounded-2xl text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Strategy Call
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-6">Portfolio Performance Dashboard</h3>
                
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">Portfolio Occupancy</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 bg-gray-700 rounded-full h-3 shadow-inner">
                        <div className="bg-gradient-to-r from-brand-primary to-brand-light h-3 rounded-full shadow-sm" style={{ width: '87%' }}></div>
                      </div>
                      <span className="text-sm font-bold text-brand-light">87%</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">Revenue Growth</span>
                    <div className="text-right">
                      <div className="text-2xl font-black text-white">+34%</div>
                      <div className="text-sm text-gray-400 font-medium">Year over Year</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">Market Penetration</span>
                    <div className="text-right">
                      <div className="text-2xl font-black text-brand-light">62%</div>
                      <div className="text-sm text-gray-400 font-medium">of Target Market</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">ROI Timeline</span>
                    <div className="text-right">
                      <div className="text-2xl font-black text-brand-light">18mo</div>
                      <div className="text-sm text-gray-400 font-medium">Average Breakeven</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-br from-brand-primary/20 to-brand-light/20 rounded-xl border border-brand-light/30">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="bg-brand-primary p-1.5 rounded-lg shadow-sm">
                      <TrendingUp className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-bold text-brand-light">Portfolio Optimized</span>
                  </div>
                  <p className="text-small text-brand-light/80 leading-relaxed font-medium">
                    Your properties are performing 34% above market average with our strategic guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                  <div className="bg-gradient-to-br from-brand-primary to-brand-light p-3 rounded-xl w-12 h-12 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-h3 font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-white/80 text-small">{benefit.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div className="text-center mb-8">
              <h3 className="text-h2 font-bold text-white mb-4">
                End-to-End Partnership
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all">
                    <div className="flex items-center mb-4">
                      <div className="bg-brand-primary/20 p-3 rounded-lg mr-4 border border-brand-light/30">
                        <Icon className="h-6 w-6 text-brand-light" />
                      </div>
                      <h4 className="text-h3 font-bold text-white">{service.name}</h4>
                    </div>
                    <div className="space-y-2">
                      {service.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center text-small text-neutral-500">
                          <CheckCircle className="h-4 w-4 text-brand-light mr-2 flex-shrink-0" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};