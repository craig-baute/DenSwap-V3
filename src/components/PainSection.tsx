import React from 'react';
import { AlertTriangle, TrendingDown, Building, Users, Search, UserX, DollarSign } from 'lucide-react';

export const PainSection: React.FC = () => {
  return (
    <>
      {/* Version 1: B2C Transformation Focus */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-gray-200/30 bg-[size:32px_32px] opacity-40"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-100/30 to-teal-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-100/30 to-emerald-100/30 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2.5 bg-red-50 border border-red-200 rounded-full text-sm font-semibold text-red-800 mb-6">
              The Office Market Has Fundamentally Changed
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight">
              Office Space is Now a <span className="text-red-700">B2C Business</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
              People are choosing office spaces like they choose Airbnbs and hotels. They're bypassing brokers 
              and selecting spaces themselves. Those who don't adapt are missing the mark.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="text-xl text-gray-800 leading-relaxed font-medium">
                <p className="mb-6">
                  <strong>The old B2B model is dead.</strong> Corporate mandates no longer dictate where people work. 
                  Individuals and small teams now make these decisions themselves.
                </p>
                <p className="mb-6">
                  Your traditional CRE data was built for a world where bosses told hundreds of people where to go. 
                  That world no longer exists. Today's workers search, compare, and choose their workspace like consumers.
                </p>
                <p className="text-emerald-700 font-bold">
                  We've operated in this new reality for 14 years, building multi-state coworking chains. 
                  We know what works because we've lived it.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg">
                <h3 className="text-2xl font-black text-gray-900 mb-8 text-center">The Cost of Old Thinking</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-5 bg-red-50 rounded-xl border border-red-200">
                    <div className="bg-red-500 p-3 rounded-lg shadow-md flex-shrink-0">
                      <Building className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-gray-900 text-lg">Empty Buildings</div>
                      <div className="text-sm text-gray-700 font-medium">20-40% office vacancies nationwide</div>
                    </div>
                    <div className="text-2xl font-black text-red-700">-40%</div>
                  </div>

                  <div className="flex items-center gap-4 p-5 bg-orange-50 rounded-xl border border-orange-200">
                    <div className="bg-orange-500 p-3 rounded-lg shadow-md flex-shrink-0">
                      <UserX className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-gray-900 text-lg">Outdated Sales Process</div>
                      <div className="text-sm text-gray-700 font-medium">No tours, poor online presence</div>
                    </div>
                    <div className="text-2xl font-black text-orange-700">LOST</div>
                  </div>

                  <div className="flex items-center gap-4 p-5 bg-red-50 rounded-xl border border-red-200">
                    <div className="bg-red-500 p-3 rounded-lg shadow-md flex-shrink-0">
                      <DollarSign className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-gray-900 text-lg">Wrong Product Built</div>
                      <div className="text-sm text-gray-700 font-medium">Millions wasted on spaces nobody wants</div>
                    </div>
                    <div className="text-2xl font-black text-red-700">$MM</div>
                  </div>

                  <div className="flex items-center gap-4 p-5 bg-emerald-50 rounded-xl border border-emerald-200">
                    <div className="bg-emerald-500 p-3 rounded-lg shadow-md flex-shrink-0">
                      <Search className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-gray-900 text-lg">B2C Approach</div>
                      <div className="text-sm text-gray-700 font-medium">People search and choose like consumers</div>
                    </div>
                    <div className="text-2xl font-black text-emerald-700">NEW</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Original Version */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-gray-200/20 bg-[size:24px_24px] opacity-50"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2.5 bg-red-50 border border-red-200 rounded-full text-sm font-semibold text-red-800 mb-6">
              The Office Market Has Fundamentally Changed
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight">
              Your Data is Missing the Market's <span className="text-red-700">True Pulse</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="text-xl text-gray-800 leading-relaxed font-medium">
                <p className="mb-6">
                  <strong>Because your data is missing the market's true pulse.</strong> We know because we've been in the trenches of coworking.
                </p>
                <p className="mb-6">
                  For too long, we've treated office space as a commodity, a square-foot transaction dictated by distant corporate rules. But the world shifted. People now choose where they work like they choose hotels on Expedia.
                </p>
                <p className="mb-6">
                  Your old maps, built on square footage and broad demographics, are designed for a world that no longer exists. This isn't just about 'data gaps'; it's about building in the wrong place, for the wrong people.
                </p>
                <p className="text-emerald-700 font-bold">
                  We've navigated this exact shift ourselves, operating multi-state coworking chains for 14 years. 
                  It's about wasted effort and missed connections.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg">
                <h3 className="text-2xl font-black text-gray-900 mb-8 text-center">The B2C Shift in Numbers</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl border border-red-200">
                    <div className="flex items-center gap-3">
                      <Building className="h-8 w-8 text-red-600" />
                      <span className="font-bold text-gray-900">Office Vacancies</span>
                    </div>
                    <div className="text-2xl font-black text-red-700">20-40%</div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-orange-50 rounded-xl border border-orange-200">
                    <div className="flex items-center gap-3">
                      <UserX className="h-8 w-8 text-orange-600" />
                      <span className="font-bold text-gray-900">Broker Bypass Rate</span>
                    </div>
                    <div className="text-2xl font-black text-orange-700">65%</div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl border border-red-200">
                    <div className="flex items-center gap-3">
                      <DollarSign className="h-8 w-8 text-red-600" />
                      <span className="font-bold text-gray-900">Revenue Lost</span>
                    </div>
                    <div className="text-2xl font-black text-red-700">$MM</div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                    <div className="flex items-center gap-3">
                      <Search className="h-8 w-8 text-emerald-600" />
                      <span className="font-bold text-gray-900">Consumer Search</span>
                    </div>
                    <div className="text-2xl font-black text-emerald-700">NEW</div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                  <p className="text-emerald-800 font-medium text-center">
                    <strong>The Solution:</strong> Treat office space like the consumer product it has become.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Version 2: Data-Driven Approach */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-gray-300/25 bg-[size:40px_40px] opacity-30"></div>
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-gradient-to-br from-red-100/40 to-orange-100/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-gradient-to-tr from-orange-100/40 to-red-100/40 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2.5 bg-red-50 border border-red-200 rounded-full text-sm font-semibold text-red-800 mb-6">
              Traditional CRE Stats Are Obsolete
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight">
              Empty Spaces. Bleed Cash. <span className="text-red-700">Why?</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 border-2 border-red-200 shadow-lg text-center">
              <div className="bg-red-500 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Building className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Office Vacancies</h3>
              <div className="text-4xl font-black text-red-700 mb-2">20-40%</div>
              <p className="text-gray-600">Traditional office spaces sitting empty nationwide</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-orange-200 shadow-lg text-center">
              <div className="bg-orange-500 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <TrendingDown className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Revenue Decline</h3>
              <div className="text-4xl font-black text-orange-700 mb-2">-30%</div>
              <p className="text-gray-600">Average drop in traditional office rental income</p>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-red-200 shadow-lg text-center">
              <div className="bg-red-500 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <AlertTriangle className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Wasted Investment</h3>
              <div className="text-4xl font-black text-red-700 mb-2">$MM</div>
              <p className="text-gray-600">Millions spent building spaces nobody wants</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">The B2C Revolution</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  Old B2B Model
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Corporate mandates workspace</li>
                  <li>• Brokers control the process</li>
                  <li>• Long-term leases required</li>
                  <li>• Limited choice for workers</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-3 h-3 bg-emerald-500 rounded-full"></span>
                  New B2C Reality
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Individuals choose their space</li>
                  <li>• Direct online booking</li>
                  <li>• Flexible terms demanded</li>
                  <li>• Consumer-like experience expected</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Version 3: Story-Driven Approach */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-gray-200/35 bg-[size:28px_28px] opacity-45"></div>
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-gradient-to-br from-emerald-200/25 to-blue-200/25 rounded-full blur-2xl transform -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-gradient-to-bl from-blue-200/25 to-emerald-200/25 rounded-full blur-2xl transform -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2.5 bg-red-50 border border-red-200 rounded-full text-sm font-semibold text-red-800 mb-6">
              The Office World Has Changed Forever
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight">
              Your Data is Missing the Market's <span className="text-red-700">True Pulse</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="text-xl text-gray-800 leading-relaxed font-medium">
                <p className="mb-6">
                  <strong>Because your data is missing the market's true pulse.</strong> We know because we've been in the trenches of coworking.
                </p>
                <p className="mb-6">
                  For too long, we've treated office space as a commodity, a square-foot transaction dictated by distant corporate rules. But the world shifted. People now choose where they work like they choose hotels on Expedia.
                </p>
                <p className="mb-6">
                  Your old maps, built on square footage and broad demographics, are designed for a world that no longer exists. This isn't just about 'data gaps'; it's about building in the wrong place, for the wrong people.
                </p>
                <p className="text-emerald-700 font-bold">
                  We've navigated this exact shift ourselves, operating multi-state coworking chains for 14 years. 
                  It's about wasted effort and missed connections.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg">
                <h3 className="text-2xl font-black text-gray-900 mb-8 text-center">The B2C Shift in Numbers</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl border border-red-200">
                    <div className="flex items-center gap-3">
                      <Building className="h-8 w-8 text-red-600" />
                      <span className="font-bold text-gray-900">Office Vacancies</span>
                    </div>
                    <div className="text-2xl font-black text-red-700">20-40%</div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-orange-50 rounded-xl border border-orange-200">
                    <div className="flex items-center gap-3">
                      <UserX className="h-8 w-8 text-orange-600" />
                      <span className="font-bold text-gray-900">Broker Bypass Rate</span>
                    </div>
                    <div className="text-2xl font-black text-orange-700">65%</div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl border border-red-200">
                    <div className="flex items-center gap-3">
                      <DollarSign className="h-8 w-8 text-red-600" />
                      <span className="font-bold text-gray-900">Revenue Lost</span>
                    </div>
                    <div className="text-2xl font-black text-red-700">$MM</div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                    <div className="flex items-center gap-3">
                      <Search className="h-8 w-8 text-emerald-600" />
                      <span className="font-bold text-gray-900">Consumer Search</span>
                    </div>
                    <div className="text-2xl font-black text-emerald-700">NEW</div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                  <p className="text-emerald-800 font-medium text-center">
                    <strong>The Solution:</strong> Treat office space like the consumer product it has become.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};