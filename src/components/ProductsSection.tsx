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
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-emerald-50/30 bg-[size:32px_32px] opacity-40"></div>
      
      {/* Subtle Corner Geometric Elements */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-gray-100/15 blur-xl" style={{
        borderRadius: '60% 40% 70% 30% / 40% 60% 30% 70%',
        zIndex: 0
      }}></div>
      <div className="absolute -top-8 -right-8 w-32 h-32 bg-gray-200/12 blur-lg transform rotate-45" style={{
        clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
        zIndex: 0
      }}></div>
      <div className="absolute -bottom-6 -right-6 w-36 h-36 bg-gray-100/18 transform rotate-12" style={{
        borderRadius: '50% 20% 80% 30% / 30% 80% 20% 50%',
        zIndex: 0
      }}></div>
      <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-gray-200/10 rounded-full blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Comprehensive solutions designed to
            <span className="text-emerald-600"> maximize your space's potential</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            and meet modern workplace demands.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const Icon = product.icon;
            const colorClasses = {
              blue: "from-blue-500 to-blue-600 border-blue-200 bg-blue-50",
              green: "from-green-500 to-green-600 border-green-200 bg-green-50",
              purple: "from-purple-500 to-purple-600 border-purple-200 bg-purple-50"
            };

            return (
              <div key={index} className={`bg-white rounded-2xl shadow-lg border-2 ${product.featured ? 'border-green-200 relative' : 'border-gray-100'} p-8 hover:shadow-xl transition-all duration-300 ${product.comingSoon ? 'opacity-75' : ''}`}>
                {product.featured && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                {product.comingSoon && (
                  <div className="absolute -top-3 right-4 z-10">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg border-2 border-white animate-pulse">
                      COMING SOON
                    </span>
                  </div>
                )}

                <div className={`bg-gradient-to-br ${colorClasses[product.color as keyof typeof colorClasses].split(' ')[0]} ${colorClasses[product.color as keyof typeof colorClasses].split(' ')[1]} p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-semibold text-gray-900">{product.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Timeline:</span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="font-semibold text-gray-900">{product.timeline}</span>
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