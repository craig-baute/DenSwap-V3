import React from 'react';
import { Search, FileText, Map, ArrowRight, Clock, CheckCircle } from 'lucide-react';

export const ProductsSection: React.FC = () => {
  const products = [
    {
      icon: Search,
      title: "Coworking Demand Analysis",
      description: "Quickly answer critical questions for coworking's potential for any building or zip code. How much SF can be supported? Recommended Coworking type, best building types for success.",
      features: [
        "Market demand scoring",
        "Supportable square footage",
        "Competition analysis",
        "Building suitability assessment"
      ],
      price: "$500",
      timeline: "Next day",
      color: "blue"
    },
    {
      icon: FileText,
      title: "Property Feasibility Study",
      description: "Our flagship service combines data and expertise to determine how much coworking can be supported, if your building is a good candidate, and how much revenue it will realistically generate.",
      features: [
        "Comprehensive market analysis",
        "Financial projections & P&L",
        "Space planning recommendations",
        "Management strategy options"
      ],
      price: "Starting at $3,000",
      timeline: "10-20 business days",
      color: "green",
      featured: true
    },
    {
      icon: Map,
      title: "Analytics Map",
      description: "Our coworking analytics engine quickly answer critical questions for coworking's potential for any building and zip code. Analytics Engine help investors and maximize returns and scenario planning using coworking.",
      features: [
        "Interactive market mapping",
        "Scenario planning tools",
        "Portfolio optimization",
        "Real-time market data"
      ],
      price: "Coming Soon",
      timeline: "Q2 2025",
      color: "purple",
      comingSoon: true
    }
  ];

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-brand-primary/8 bg-[size:28px_28px] opacity-50"></div>
      
      {/* Brand Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-sage-200/15 to-brand-primary/10 rounded-full blur-3xl transform -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-brand-light/12 to-brand-dark/8 rounded-full blur-2xl transform translate-x-1/3 translate-y-1/3"></div>
      
      {/* Hexagonal Corner Elements */}
      <div className="absolute top-16 right-16 opacity-12">
        <div className="grid grid-cols-3 gap-1">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-8 h-8 border-2 border-brand-primary/40" style={{
              clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)'
            }}></div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-20 left-20 w-28 h-28 bg-brand-light/10 transform rotate-45 rounded-lg"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-h1 md:text-5xl font-bold text-brand-primary mb-8">
            Comprehensive solutions designed to
            <span className="text-brand-light"> maximize your space's potential</span>
          </h2>
          <p className="text-body text-neutral-500 max-w-3xl mx-auto">
            and meet modern workplace demands.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 relative z-10">
          {products.map((product, index) => {
            const Icon = product.icon;
            const colorClasses = {
              blue: "from-info-500 to-brand-primary border-sage-200 bg-neutral-50",
              green: "from-brand-primary to-brand-light border-sage-200 bg-sage-200",
              purple: "from-purple-500 to-purple-600 border-purple-200 bg-purple-50"
            };

            return (
              <div key={index} className={`bg-white rounded-2xl shadow-lg border ${product.featured ? 'border-brand-light relative' : 'border-neutral-500'} p-8 hover:shadow-xl transition-all duration-300 ${product.comingSoon ? 'opacity-75' : ''}`}>
                {product.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-brand-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
  

                <div className={`bg-gradient-to-br ${colorClasses[product.color as keyof typeof colorClasses].split(' ')[0]} ${colorClasses[product.color as keyof typeof colorClasses].split(' ')[1]} p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-h2 font-bold text-brand-primary mb-4">{product.title}</h3>
                <p className="text-body text-neutral-500 mb-6 leading-relaxed">{product.description}</p>

                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-brand-primary flex-shrink-0" />
                      <span className="text-neutral-500 text-small">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-500">Price:</span>
                    <span className="font-semibold text-brand-primary">{product.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-500">Timeline:</span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-neutral-500" />
                      <span className="font-semibold text-brand-primary">{product.timeline}</span>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    if (product.title === "Coworking Demand Analysis") {
                      window.location.href = '/demand-report';
                    } else if (product.title === "Property Feasibility Study") {
                      window.location.href = '/feasibility-study';
                    } else if (product.title === "Analytics Map") {
                      window.location.href = '/analytics-map';
                    }
                  }}
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                    product.comingSoon 
                      ? 'bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 cursor-not-allowed border-2 border-purple-200 relative overflow-hidden' 
                      : `bg-gradient-to-r ${colorClasses[product.color as keyof typeof colorClasses].split(' ')[0]} ${colorClasses[product.color as keyof typeof colorClasses].split(' ')[1]} text-white hover:shadow-lg hover:scale-105`
                  }`}
                  disabled={product.comingSoon}
                >
                  {product.comingSoon && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 animate-pulse"></div>
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {product.comingSoon ? (
                      <>
                        <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
                        Notify Me
                      </>
                    ) : (
                      'Get Started'
                    )}
                  </span>
                  {!product.comingSoon && <ArrowRight className="h-4 w-4" />}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};