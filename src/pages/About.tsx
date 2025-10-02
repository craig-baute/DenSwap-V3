import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactSection } from '../components/ContactSection';
import { TrendingUp, Building, Users, Target, Award, CheckCircle, BarChart3, MapPin, Calendar, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      title: "Senior Market Analyst",
      bio: "8+ years of experience in commercial real estate analytics and coworking market research. Specializes in demand forecasting and competitive analysis.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Mike Rodriguez",
      title: "Operations Director",
      bio: "Extensive experience in coworking space development and management. Led the successful launch of 15+ coworking locations across Texas and California.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300"
    },
    {
      name: "Jennifer Walsh",
      title: "Financial Modeling Expert",
      bio: "Former investment banker turned coworking financial specialist. Creates accurate P&L projections based on real operational data.",
      image: "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=300"
    }
  ];

  const milestones = [
    {
      year: "2010",
      title: "Founded",
      description: "Started as coworking operators with our first location"
    },
    {
      year: "2015",
      title: "Multi-State Expansion",
      description: "Expanded operations across multiple states"
    },
    {
      year: "2018",
      title: "Analytics Platform",
      description: "Launched our proprietary market analysis methodology"
    },
    {
      year: "2020",
      title: "Consulting Focus",
      description: "Pivoted to help other property owners succeed"
    },
    {
      year: "2025",
      title: "150+ Projects",
      description: "Analyzed over 150 properties with 85% success rate"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header isMobileMenuOpen={false} setIsMobileMenuOpen={() => {}} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full blur-3xl opacity-25 -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About
              <span className="text-emerald-600"> DenSwap</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              We're not just consultants—we're operators who've built, scaled, and sold coworking businesses. 
              Our insights come from 14+ years in the trenches, not from spreadsheets.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">14+</div>
              <div className="text-gray-600">Years Operating Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">150+</div>
              <div className="text-gray-600">Properties Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">85%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Our Story
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong>DenSwap was born from necessity.</strong> In 2010, we opened our first coworking space 
                  not because we had a grand vision, but because we needed a place to work and couldn't 
                  afford traditional office rent.
                </p>

                <p>
                  What started as a survival strategy became a passion. Over the next 14 years, we built, 
                  operated, and scaled coworking locations across multiple states. We learned what works, 
                  what doesn't, and most importantly—why.
                </p>

                <p>
                  <strong>The turning point came in 2020.</strong> Property owners started reaching out, 
                  asking for help with their struggling office buildings. They had the real estate expertise, 
                  but coworking was different. It required understanding people, not just square footage.
                </p>

                <p className="font-semibold text-emerald-700">
                  Today, we help property owners transform underperforming assets into thriving coworking 
                  communities using the same principles that made our own spaces successful.
                </p>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="DenSwap team working" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-black text-emerald-600 mb-1">2010</div>
                  <div className="text-sm text-gray-600 font-medium">Founded</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming the commercial real estate landscape through data-driven coworking solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Data-Driven Decisions</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in making investment decisions based on real market data and operational 
                experience, not gut feelings or industry trends.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="bg-teal-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Human-Centric Approach</h3>
              <p className="text-gray-600 leading-relaxed">
                Coworking isn't just about space—it's about community. We analyze where people actually 
                want to work, not just demographic averages.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Award className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Proven Results</h3>
              <p className="text-gray-600 leading-relaxed">
                Our methodology isn't theoretical—it's battle-tested through years of operating 
                successful coworking spaces in diverse markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From operators to consultants—15 years of coworking evolution
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-500 to-teal-500"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                      <div className="text-2xl font-bold text-emerald-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals who've been in your shoes
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <div className="text-emerald-600 font-semibold mb-4">{member.title}</div>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Property Owners Choose DenSwap
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just consultants—we're your partners in transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-2 rounded-lg flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Real Operating Experience</h3>
                  <p className="text-gray-600">
                    We've actually built and operated coworking spaces, not just studied them. 
                    Our insights come from real P&Ls, not theoretical models.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-2 rounded-lg flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Methodology</h3>
                  <p className="text-gray-600">
                    Our analysis framework has been refined through 150+ property evaluations 
                    with an 85% success rate.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-2 rounded-lg flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">End-to-End Support</h3>
                  <p className="text-gray-600">
                    From initial feasibility through grand opening, we're with you every step 
                    of the transformation journey.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-2 rounded-lg flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Market Intelligence</h3>
                  <p className="text-gray-600">
                    Our proprietary data goes beyond demographics to understand actual 
                    coworking demand patterns in your specific market.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-100 p-2 rounded-lg flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Risk Mitigation</h3>
                  <p className="text-gray-600">
                    We've seen what can go wrong and help you avoid the costly mistakes 
                    that sink coworking ventures.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-teal-100 p-2 rounded-lg flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Ongoing Partnership</h3>
                  <p className="text-gray-600">
                    Our relationship doesn't end with the report. We're here to support 
                    your success long-term.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-400/20 to-emerald-400/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Property?
          </h2>
          
          <p className="text-xl text-emerald-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how our proven methodology can help you unlock your property's 
            coworking potential and maximize your returns.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/sample-report" className="group bg-white text-emerald-600 px-8 py-4 rounded-2xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center">
              Download Sample Report
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href="/book-consultation" className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white/20 transition-all duration-300 inline-flex items-center justify-center">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};