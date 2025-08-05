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
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-br from-emerald-100/25 to-green-100/25 rounded-full blur-3xl transform -translate-x-1/2"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-gradient-to-bl from-teal-100/25 to-blue-100/25 rounded-full blur-3xl transform translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Comprehensive solutions designed to
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> maximize your space's potential</span>
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
                  <div className="absolute -top-3 right-4">
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
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
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                    product.comingSoon 
                      ? 'bg-gray-100 text-gray-500 cursor-not-allowed' 
                      : `bg-gradient-to-r ${colorClasses[product.color as keyof typeof colorClasses].split(' ')[0]} ${colorClasses[product.color as keyof typeof colorClasses].split(' ')[1]} text-white hover:shadow-lg hover:scale-105`
                  }`}
                  disabled={product.comingSoon}
                >
                  {product.comingSoon ? 'Notify Me' : 'Get Started'}
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