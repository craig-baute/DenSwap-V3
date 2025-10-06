import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactSection } from '../components/ContactSection';
import { CheckCircle, TrendingUp, Award, Target } from 'lucide-react';

export const WhyUseUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header isMobileMenuOpen={false} setIsMobileMenuOpen={() => {}} />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 translate-x-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Operators Who Understand Data.
              <br />
              <span className="text-emerald-600">Researchers Who Know Operations.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed">
              We've built profitable coworking spaces for <span className="font-bold text-emerald-600">13+ years</span> while developing
              the market research methodology that predicts success with <span className="font-bold text-emerald-600">94% accuracy</span>.
              You get both.
            </p>
            <a
              href="/#products"
              className="inline-block bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-10 py-5 rounded-2xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              See Our Services
            </a>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Column 1 */}
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-3xl p-10 shadow-lg border border-emerald-100">
              <div className="bg-emerald-600 p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                We're Operators With Real P&L Responsibility
              </h3>

              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Our team has launched and operated coworking spaces across the US and internationally.
                  We've made the expensive mistakes, learned what actually works, and refined our approach
                  through years of real-world testing.
                </p>

                <p className="font-semibold text-emerald-700 mt-6 mb-4">
                  This operational experience means we know:
                </p>

                <ul className="space-y-3 ml-4">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-3 mt-1">•</span>
                    <span>Which industry trends are meaningful vs. temporary noise</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-3 mt-1">•</span>
                    <span>How customer needs vary by location and demographic</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-3 mt-1">•</span>
                    <span>What's actually relevant to your specific situation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-3 mt-1">•</span>
                    <span>The difference between theory and profitable reality</span>
                  </li>
                </ul>

                <p className="font-bold text-gray-900 mt-6 text-xl">
                  You get advice based on actual results, not just research.
                </p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="bg-gradient-to-br from-teal-50 to-white rounded-3xl p-10 shadow-lg border border-teal-100">
              <div className="bg-teal-600 p-4 rounded-2xl w-16 h-16 mb-6 flex items-center justify-center">
                <Target className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                We're Market Researchers With Proven Methodology
              </h3>

              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Before DenSwap, our team conducted research for major consumer brands and innovation departments.
                  We brought this analytical rigor to coworking and spent over a decade developing proprietary
                  algorithms that predict success.
                </p>

                <p className="font-semibold text-teal-700 mt-6 mb-4">
                  Our research methodology includes:
                </p>

                <ul className="space-y-3 ml-4">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-3 mt-1">•</span>
                    <span>Demographic analysis that goes far beyond census data</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-3 mt-1">•</span>
                    <span>Grading systems (A-F) for coworking compatibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-3 mt-1">•</span>
                    <span>Realistic customer penetration modeling (3-6% of qualified segments)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-3 mt-1">•</span>
                    <span>Building type success rates by demographic profile</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-3 mt-1">•</span>
                    <span>Nationwide applicability—from rural towns to major metros</span>
                  </li>
                </ul>

                <p className="font-bold text-gray-900 mt-6 text-xl">
                  Our predictions have proven 94% accurate over 13 years because we validate everything
                  against real performance data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The DenSwap Advantage Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-600 rounded-3xl p-12 shadow-2xl text-white">
            <h2 className="text-4xl font-bold mb-10 text-center">The DenSwap Advantage</h2>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-8 w-8 text-emerald-200 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Operational Insight</h3>
                  <p className="text-emerald-100 text-lg">
                    Guidance from people who've successfully built and scaled coworking spaces
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-8 w-8 text-emerald-200 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Data-Driven Analysis</h3>
                  <p className="text-emerald-100 text-lg">
                    Market research that predicts success with documented accuracy
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-8 w-8 text-emerald-200 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Real-World Testing</h3>
                  <p className="text-emerald-100 text-lg">
                    Recommendations proven across <span className="font-bold">500+ property analyses</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-8 w-8 text-emerald-200 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Relevant Intelligence</h3>
                  <p className="text-emerald-100 text-lg">
                    Advice specific to your market, building, and goals
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="h-8 w-8 text-emerald-200 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Honest Assessment</h3>
                  <p className="text-emerald-100 text-lg">
                    We'll tell you if coworking won't work (and save you <span className="font-bold">$284K+</span>)
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-emerald-400 pt-8 mt-8">
              <p className="text-2xl font-semibold text-center text-emerald-50 leading-relaxed">
                We're not consultants who studied coworking.
                <br />
                <span className="text-white">We're operators who systematized our knowledge into predictive intelligence.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet the Team
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-12">
            {/* Craig */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border border-gray-100">
              <div className="p-10">
                <div className="mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full mx-auto flex items-center justify-center text-white text-5xl font-bold shadow-lg">
                    C
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">Craig</h3>
                <div className="text-emerald-600 font-semibold text-lg mb-6 text-center">Co-Founder</div>

                <p className="text-gray-700 text-lg leading-relaxed">
                  <span className="font-bold text-emerald-600">13+ years</span> building and operating coworking
                  spaces internationally. Launched dozens of locations from New York City to Ulaanbaatar.
                  Expertise in space planning, market positioning, operational strategy, and community building.
                  Craig knows how to make coworking work within real-world constraints and budgets.
                </p>
              </div>
            </div>

            {/* John */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow border border-gray-100">
              <div className="p-10">
                <div className="mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-teal-400 to-emerald-400 rounded-full mx-auto flex items-center justify-center text-white text-5xl font-bold shadow-lg">
                    J
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">John</h3>
                <div className="text-teal-600 font-semibold text-lg mb-6 text-center">Co-Founder</div>

                <p className="text-gray-700 text-lg leading-relaxed">
                  Market research background from consumer brands and innovation consulting. Developed DenSwap's
                  proprietary demographic algorithms and predictive models. Analyzed <span className="font-bold text-teal-600">500+ properties</span> nationwide.
                  Expertise in demographic analysis, market sizing, and translating data into actionable strategy.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl text-gray-700 font-semibold max-w-3xl mx-auto leading-relaxed">
              <span className="text-emerald-600">Combined experience:</span> operational knowledge + analytical rigor =
              <span className="text-teal-600"> advice you can trust.</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-400/20 to-emerald-400/20 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Work With Us?
          </h2>

          <p className="text-xl text-emerald-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how our proven methodology can help you make the right decision about
            your coworking investment.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="/book-consultation"
              className="bg-white text-emerald-600 px-10 py-5 rounded-2xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center"
            >
              Schedule a Consultation
            </a>

            <a
              href="/sample-report"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-10 py-5 rounded-2xl text-lg font-semibold hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center"
            >
              Download Sample Report
            </a>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};
