import React from 'react';
import { AlertTriangle, TrendingDown, Building, Users, Search, UserX, DollarSign } from 'lucide-react';

export const PainSection: React.FC = () => {
  return (
    <>
      {/* Original Version */}
      <section className="py-24 bg-emerald-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:24px_24px] opacity-30"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-2xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-5 py-2.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-semibold text-white mb-6">
              The Office Market Has Fundamentally Changed
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight">
              Your Data is Missing the Market's <span className="text-emerald-200">True Pulse</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="text-xl text-emerald-100 leading-relaxed font-medium">
                <p className="mb-6">
                  <strong>Because your data is missing the market's true pulse.</strong> We know because we've been in the trenches of coworking.
                </p>
                <p className="mb-6">
                  For too long, we've treated office space as a commodity, a square-foot transaction dictated by distant corporate rules. But the world shifted. People now choose where they work like they choose hotels on Expedia.
                </p>
                <p className="mb-6">
                  Your old maps, built on square footage and broad demographics, are designed for a world that no longer exists. This isn't just about 'data gaps'; it's about building in the wrong place, for the wrong people.
                </p>
                <p className="text-emerald-200 font-bold">
                  We've navigated this exact shift ourselves, operating multi-state coworking chains for 14 years. 
                  It's about wasted effort and missed connections.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg">
                <h3 className="text-2xl font-black text-white mb-8 text-center">The B2C Shift in Numbers</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl border border-white/20">
                    <div className="flex items-center gap-3">
                      <Building className="h-8 w-8 text-red-300" />
                      <span className="font-bold text-white">Office Vacancies</span>
                    </div>
                    <div className="text-2xl font-black text-red-300">20-40%</div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl border border-white/20">
                    <div className="flex items-center gap-3">
                      <UserX className="h-8 w-8 text-orange-300" />
                      <span className="font-bold text-white">Broker Bypass Rate</span>
                    </div>
                    <div className="text-2xl font-black text-orange-300">65%</div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white/10 rounded-xl border border-white/20">
                    <div className="flex items-center gap-3">
                      <DollarSign className="h-8 w-8 text-red-300" />
                      <span className="font-bold text-white">Revenue Lost</span>
                    </div>
                    <div className="text-2xl font-black text-red-300">$MM</div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white/15 rounded-xl border border-white/30">
                    <div className="flex items-center gap-3">
                      <Search className="h-8 w-8 text-emerald-200" />
                      <span className="font-bold text-white">Consumer Search</span>
                    </div>
                    <div className="text-2xl font-black text-emerald-200">NEW</div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-white/15 rounded-xl border border-white/30">
                  <p className="text-emerald-200 font-medium text-center">
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