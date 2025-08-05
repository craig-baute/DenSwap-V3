import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { DollarSign, TrendingUp, PieChart, Calculator, Building, Users, CheckCircle, ArrowRight } from 'lucide-react';

export const FinancialProjections: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header isMobileMenuOpen={false} setIsMobileMenuOpen={() => {}} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              What Type & Expected
              <span className="text-green-600"> P&L?</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Detailed financial modeling with revenue projections, optimal space allocation, 
              build-out costs, and quarterly P&L forecasts tailored to your specific market.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg">
                Get Financial Model
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-colors">
                View Sample P&L
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Components */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Financial Analysis
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We model every aspect of your coworking business to give you accurate, actionable financial projections.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Revenue Projections</h3>
              <p className="text-gray-600">Membership tiers, pricing strategy, and revenue ramp-up modeling</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <PieChart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Space Allocation</h3>
              <p className="text-gray-600">Optimal mix of open desks, private offices, and common areas</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Building className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Build-out Costs</h3>
              <p className="text-gray-600">Construction, furniture, technology, and setup cost estimates</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="bg-orange-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Calculator className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Operating Expenses</h3>
              <p className="text-gray-600">Staffing, utilities, marketing, and ongoing operational costs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Financial Model */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sample Financial Model
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              15,000 SF coworking space in a mid-tier market
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Revenue Model */}
            <div className="bg-green-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-green-900 mb-6">Revenue Model</h3>
              
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Space Allocation</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Open Coworking (60%)</span>
                      <span className="font-semibold text-green-600">9,000 SF</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Private Offices (25%)</span>
                      <span className="font-semibold text-green-600">3,750 SF</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Common Areas (15%)</span>
                      <span className="font-semibold text-green-600">2,250 SF</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Membership Tiers</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium text-gray-800">Hot Desk</div>
                        <div className="text-sm text-gray-500">120 members @ $199/mo</div>
                      </div>
                      <span className="font-semibold text-green-600">$23,880</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium text-gray-800">Dedicated Desk</div>
                        <div className="text-sm text-gray-500">45 members @ $349/mo</div>
                      </div>
                      <span className="font-semibold text-green-600">$15,705</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium text-gray-800">Private Office</div>
                        <div className="text-sm text-gray-500">25 offices @ $899/mo</div>
                      </div>
                      <span className="font-semibold text-green-600">$22,475</span>
                    </div>
                    <div className="border-t pt-3 mt-3">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-gray-900">Monthly Revenue</span>
                        <span className="font-bold text-green-600 text-xl">$62,060</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Breakdown */}
            <div className="space-y-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-blue-900 mb-4">Initial Investment</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-blue-800">Build-out & Construction</span>
                    <span className="font-semibold text-blue-900">$450,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-800">Furniture & Equipment</span>
                    <span className="font-semibold text-blue-900">$180,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-800">Technology & Security</span>
                    <span className="font-semibold text-blue-900">$75,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-800">Pre-opening Expenses</span>
                    <span className="font-semibold text-blue-900">$45,000</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between">
                      <span className="font-bold text-blue-900">Total Investment</span>
                      <span className="font-bold text-blue-900 text-xl">$750,000</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-red-900 mb-4">Monthly Operating Expenses</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-red-800">Rent & CAM</span>
                    <span className="font-semibold text-red-900">$18,750</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-800">Staffing</span>
                    <span className="font-semibold text-red-900">$15,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-800">Utilities & Internet</span>
                    <span className="font-semibold text-red-900">$4,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-800">Marketing & Operations</span>
                    <span className="font-semibold text-red-900">$3,200</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-red-800">Insurance & Misc</span>
                    <span className="font-semibold text-red-900">$2,100</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between">
                      <span className="font-bold text-red-900">Total Expenses</span>
                      <span className="font-bold text-red-900 text-xl">$43,550</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-100 rounded-xl p-6">
                <h4 className="text-xl font-bold text-green-900 mb-4">Key Metrics</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-green-800">Monthly Net Income</span>
                    <span className="font-semibold text-green-900">$18,510</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-800">Break-even Timeline</span>
                    <span className="font-semibold text-green-900">18 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-800">5-Year ROI</span>
                    <span className="font-semibold text-green-900">35%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-800">Occupancy at Maturity</span>
                    <span className="font-semibold text-green-900">85%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quarterly Projections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Quarterly Growth Projections
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Realistic ramp-up timeline based on market conditions and our experience
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Quarter</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Occupancy</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Revenue</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Expenses</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Net Income</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Cumulative</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Q1</td>
                    <td className="px-6 py-4 text-sm text-gray-600">25%</td>
                    <td className="px-6 py-4 text-sm text-gray-600">$15,515</td>
                    <td className="px-6 py-4 text-sm text-gray-600">$43,550</td>
                    <td className="px-6 py-4 text-sm text-red-600">-$28,035</td>
                    <td className="px-6 py-4 text-sm text-red-600">-$84,105</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Q2</td>
                    <td className="px-6 py-4 text-sm text-gray-600">45%</td>
                    <td className="px-6 py-4 text-sm text-gray-600">$27,927</td>
                    <td className="px-6 py-4 text-sm text-gray-600">$43,550</td>
                    <td className="px-6 py-4 text-sm text-red-600">-$15,623</td>
                    <td className="px-6 py-4 text-sm text-red-600">-$130,974</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Q3</td>
                    <td className="px-6 py-4 text-sm text-gray-600">65%</td>
                    <td className="px-6 py-4 text-sm text-gray-600">$40,339</td>
                    <td className="px-6 py-4 text-sm text-gray-600">$43,550</td>
                    <td className="px-6 py-4 text-sm text-red-600">-$3,211</td>
                    <td className="px-6 py-4 text-sm text-red-600">-$140,607</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Q4</td>
                    <td className="px-6 py-4 text-sm text-gray-600">75%</td>
                    <td className="px-6 py-4 text-sm text-gray-600">$46,545</td>
                    <td className="px-6 py-4 text-sm text-gray-600">$43,550</td>
                    <td className="px-6 py-4 text-sm text-green-600">$2,995</td>
                    <td className="px-6 py-4 text-sm text-red-600">-$131,622</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Q5</td>
                    <td className="px-6 py-4 text-sm text-gray-600">85%</td>
                    <td className="px-6 py-4 text-sm text-gray-600">$52,751</td>
                    <td className="px-6 py-4 text-sm text-gray-600">$43,550</td>
                    <td className="px-6 py-4 text-sm text-green-600">$9,201</td>
                    <td className="px-6 py-4 text-sm text-red-600">-$104,019</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">Q6</td>
                    <td className="px-6 py-4 text-sm text-gray-600">85%</td>
                    <td className="px-6 py-4 text-sm text-gray-600">$52,751</td>
                    <td className="px-6 py-4 text-sm text-gray-600">$43,550</td>
                    <td className="px-6 py-4 text-sm text-green-600">$9,201</td>
                    <td className="px-6 py-4 text-sm text-red-600">-$67,215</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Complete Financial Package
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-green-200">
              <div className="bg-green-100 p-3 rounded-lg inline-block mb-6">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Revenue Optimization</h3>
              <p className="text-gray-600 mb-6">
                Membership pricing strategy, space utilization optimization, and 
                ancillary revenue opportunities.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Optimal membership mix analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Dynamic pricing recommendations
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Additional revenue streams
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-blue-200">
              <div className="bg-blue-100 p-3 rounded-lg inline-block mb-6">
                <Calculator className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Cost Management</h3>
              <p className="text-gray-600 mb-6">
                Detailed breakdown of all startup and operating costs with 
                optimization recommendations for maximum profitability.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Build-out cost optimization
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Operational efficiency analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Vendor and supplier recommendations
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-purple-200">
              <div className="bg-purple-100 p-3 rounded-lg inline-block mb-6">
                <PieChart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Risk Analysis</h3>
              <p className="text-gray-600 mb-6">
                Scenario planning with best case, worst case, and most likely 
                outcomes to help you make informed decisions.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Sensitivity analysis
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Market downturn scenarios
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  Mitigation strategies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get Your Custom Financial Model
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Receive detailed financial projections tailored to your specific property 
            and market conditions - backed by real-world coworking experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Request Financial Analysis
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-2">
              Next: Operations Strategy
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};