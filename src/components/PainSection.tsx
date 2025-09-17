import React from 'react';
import { AlertTriangle, TrendingDown, Building, Users, Search, UserX, DollarSign } from 'lucide-react';

export const PainSection: React.FC = () => {
  return (
    <>
      {/* Original Version */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:24px_24px] opacity-30"></div>
        
        {/* Blob Geometric Elements */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-emerald-100/30 blur-2xl" style={{
          borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          zIndex: 0
        }}></div>
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-emerald-200/25 blur-xl" style={{
          borderRadius: '40% 60% 70% 30% / 70% 40% 60% 30%',
          zIndex: 0
        }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative z-10">
            <div className="inline-block px-5 py-2.5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-semibold text-white mb-6">
              <span className="bg-brand-primary text-white px-4 py-1 rounded-full">The Office Market Has Fundamentally Changed</span>
            </div>
            <h2 className="text-h1 md:text-5xl font-black text-brand-primary mb-8 tracking-tight">
              Your Data is Missing the Market's <span className="text-brand-light">True Pulse</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-8">
              <div className="text-body text-neutral-900 leading-relaxed font-medium">
                <p className="mb-6">
                  <strong className="text-brand-primary">Because your data is missing the market's true pulse.</strong> We know because we've been in the trenches of coworking.
                </p>
                <p className="mb-6">
                  For too long, we've treated office space as a commodity, a square-foot transaction dictated by distant corporate rules. But the world shifted. People now choose where they work like they choose hotels on Expedia.
                </p>
                <p className="mb-6">
                  Your old maps, built on square footage and broad demographics, are designed for a world that no longer exists. This isn't just about 'data gaps'; it's about building in the wrong place, for the wrong people.
                </p>
                <p className="text-brand-light font-bold">
                  We've navigated this exact shift ourselves, operating multi-state coworking chains for 14 years. 
                  It's about wasted effort and missed connections.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 border border-sage-200 shadow-lg">
                <h3 className="text-h2 font-black text-brand-primary mb-8 text-center">The B2C Shift in Numbers</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-xl border border-sage-200">
                    <div className="flex items-center gap-3">
                      <Building className="h-8 w-8 text-warning-500" />
                      <span className="font-bold text-neutral-900">Office Vacancies</span>
                    </div>
                    <div className="text-2xl font-black text-warning-500">20-40%</div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-xl border border-sage-200">
                    <div className="flex items-center gap-3">
                      <UserX className="h-8 w-8 text-warning-500" />
                      <span className="font-bold text-neutral-900">Broker Bypass Rate</span>
                    </div>
                    <div className="text-2xl font-black text-warning-500">65%</div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-xl border border-sage-200">
                    <div className="flex items-center gap-3">
                      <DollarSign className="h-8 w-8 text-warning-500" />
                      <span className="font-bold text-neutral-900">Revenue Lost</span>
                    </div>
                    <div className="text-2xl font-black text-warning-500">$MM</div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-sage-200 rounded-xl border border-brand-primary">
                    <div className="flex items-center gap-3">
                      <Search className="h-8 w-8 text-brand-primary" />
                      <span className="font-bold text-brand-dark">Consumer Search</span>
                    </div>
                    <div className="text-2xl font-black text-brand-primary">NEW</div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-sage-200 rounded-xl border border-brand-primary">
                  <p className="text-brand-dark font-medium text-center">
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