import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactSection } from '../components/ContactSection';
import { CaseStudy, CaseStudyProject } from '../components/CaseStudyCMS';
import { 
  TrendingUp, 
  Building, 
  Users, 
  DollarSign, 
  Calendar, 
  MapPin, 
  ArrowRight, 
  CheckCircle, 
  BarChart3, 
  Target, 
  Clock 
} from 'lucide-react';

const Home = () => {
  const [featuredProject, setFeaturedProject] = useState(null);
  const [highlightedProjects, setHighlightedProjects] = useState([]);
  const [otherProjects, setOtherProjects] = useState([]);

  useEffect(() => {
    // Mock data - replace with actual API calls
    const mockFeaturedProject = {
      id: 1,
      title: "Downtown Office Revival",
      subtitle: "From 60% vacant to 95% occupied",
      location: "Austin, TX",
      buildingSize: "25,000 sq ft",
      image: "/images/case-study-1.jpg",
      challenge: "A Class B office building struggling with high vacancy rates and declining rental income in a competitive downtown market.",
      solution: "We conducted comprehensive market analysis, redesigned the space for flexible coworking, and implemented a targeted launch strategy.",
      results: {
        occupancy: "95%",
        noiIncrease: "180%",
        members: "150+",
        breakeven: "8 months"
      },
      timeline: "6 months",
      testimonial: "The transformation exceeded our wildest expectations. We went from losing money every month to having a waiting list.",
      clientName: "Sarah Johnson",
      clientTitle: "Property Owner"
    };

    const mockHighlightedProjects = [
      {
        id: 2,
        title: "Suburban Office Conversion",
        subtitle: "Neighborhood coworking hub",
        location: "Plano, TX",
        buildingSize: "15,000 sq ft",
        image: "/images/case-study-2.jpg",
        challenge: "Former corporate headquarters sitting empty for 18 months",
        results: {
          occupancy: "88%",
          noiIncrease: "165%"
        },
        testimonial: "The local business community embraced the space immediately."
      },
      {
        id: 3,
        title: "Historic Building Transformation",
        subtitle: "Preserving character while adding value",
        location: "San Antonio, TX",
        buildingSize: "12,000 sq ft",
        image: "/images/case-study-3.jpg",
        challenge: "Historic building with unique layout challenges and preservation requirements",
        results: {
          occupancy: "92%",
          noiIncrease: "220%"
        },
        testimonial: "They found a way to honor the building's history while making it profitable."
      }
    ];

    const mockOtherProjects = [
      {
        id: 4,
        title: "Industrial Conversion",
        subtitle: "Creative workspace transformation",
        location: "Denver, CO",
        buildingSize: "20,000 sq ft",
        image: "/images/case-study-4.jpg",
        challenge: "Former warehouse needing complete reimagining",
        results: {
          occupancy: "85%",
          noiIncrease: "200%"
        },
        testimonial: "The creative community that formed here exceeded all expectations."
      },
      {
        id: 5,
        title: "Retail Space Pivot",
        subtitle: "From retail to flexible workspace",
        location: "Phoenix, AZ",
        buildingSize: "8,000 sq ft",
        image: "/images/case-study-5.jpg",
        challenge: "Former retail space in changing neighborhood",
        results: {
          occupancy: "90%",
          noiIncrease: "155%"
        },
        testimonial: "The pivot to coworking saved our investment and created steady income."
      }
    ];

    setFeaturedProject(mockFeaturedProject);
    setHighlightedProjects(mockHighlightedProjects);
    setOtherProjects(mockOtherProjects);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50 relative overflow-hidden">
        <img
          src="/Blob top left.png"
          alt=""
          className="absolute -top-20 -left-20 w-[600px] h-[600px] object-contain opacity-40 pointer-events-none"
          style={{ filter: 'brightness(0.95) hue-rotate(140deg) saturate(1.5)' }}
        />
        <img
          src="/Blob bottom right.png"
          alt=""
          className="absolute -bottom-20 -right-20 w-[700px] h-[700px] object-contain opacity-40 pointer-events-none"
          style={{ filter: 'brightness(0.95) hue-rotate(160deg) saturate(1.5)' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Proven
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"> Results</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Real transformations. Real returns. See how property owners across the country 
              have unlocked hidden value with our coworking conversion strategies.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">150+</div>
              <div className="text-gray-600">Properties Analyzed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">85%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">$50M+</div>
              <div className="text-gray-600">Value Created</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">12 Months</div>
              <div className="text-gray-600">Avg. Breakeven</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      {featuredProject && (
        <section className="py-20 bg-white relative overflow-hidden">
          <img
            src="/blob top left-2.png"
            alt=""
            className="absolute -top-10 -right-10 w-[500px] h-[500px] object-contain opacity-30 pointer-events-none"
            style={{ filter: 'brightness(0.95) hue-rotate(150deg) saturate(1.5)' }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Featured Success Story
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A deep dive into one of our most successful transformations
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative">
                  <img 
                    src={featuredProject.image} 
                    alt={featuredProject.title}
                    className="w-full h-full object-cover min-h-[500px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-center gap-4 text-sm mb-2">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {featuredProject.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        {featuredProject.buildingSize}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold">{featuredProject.title}</h3>
                    <p className="text-lg opacity-90">{featuredProject.subtitle}</p>
                  </div>
                </div>

                <div className="p-12 flex flex-col justify-center">
                  <div className="mb-8">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h4>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {featuredProject.challenge}
                    </p>
                    
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {featuredProject.solution}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="bg-emerald-50 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <TrendingUp className="h-6 w-6 text-emerald-600" />
                        <span className="font-semibold text-gray-900">Occupancy</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{featuredProject.results.occupancy}</div>
                    </div>
                    
                    <div className="bg-teal-50 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <DollarSign className="h-6 w-6 text-teal-600" />
                        <span className="font-semibold text-gray-900">NOI Increase</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{featuredProject.results.noiIncrease}</div>
                    </div>
                    
                    <div className="bg-blue-50 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Users className="h-6 w-6 text-emerald-600" />
                        <span className="font-semibold text-gray-900">Members</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{featuredProject.results.members}</div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Clock className="h-6 w-6 text-teal-600" />
                        <span className="font-semibold text-gray-900">Timeline</span>
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{featuredProject.timeline}</div>
                    </div>
                  </div>

                  <div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-200">
                    <blockquote className="text-xl font-semibold text-emerald-900 mb-4">
                      "{featuredProject.testimonial}"
                    </blockquote>
                    <div className="text-emerald-700 font-medium">
                      — {featuredProject.clientName}, {featuredProject.clientTitle}
                    </div>
                  </div>

                  <a 
                    href="#contact" 
                    className="group bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center mt-8"
                  >
                    Get Your Case Study
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Detailed Case Study Breakdown */}
      {featuredProject && (
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          <img
            src="/Blob bottom left.png"
            alt=""
            className="absolute -bottom-10 -left-10 w-[550px] h-[550px] object-contain opacity-30 pointer-events-none"
            style={{ filter: 'brightness(0.95) hue-rotate(140deg) saturate(1.5)' }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Complete Story
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                How we transformed a struggling office building into a thriving coworking community
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Challenge */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="bg-red-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredProject.challenge}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-red-600">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-sm font-medium">60% vacancy rate</span>
                  </div>
                  <div className="flex items-center gap-2 text-red-600">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-sm font-medium">Declining rental income</span>
                  </div>
                  <div className="flex items-center gap-2 text-red-600">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-sm font-medium">No long-term tenant interest</span>
                  </div>
                </div>
              </div>

              {/* Solution */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <BarChart3 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredProject.solution}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-blue-600">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">Comprehensive market analysis</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">Optimal space allocation plan</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-600">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">Launch strategy & marketing</span>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">The Results</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Exceeded all projections with rapid member growth and strong financial performance.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Occupancy Rate</span>
                    <span className="text-2xl font-bold text-green-600">{featuredProject.results.occupancy}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">NOI Increase</span>
                    <span className="text-2xl font-bold text-green-600">{featuredProject.results.noiIncrease}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">Breakeven</span>
                    <span className="text-2xl font-bold text-green-600">{featuredProject.results.breakeven}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Highlighted Case Studies */}
      {highlightedProjects.length > 0 && (
        <section className="py-20 bg-white relative overflow-hidden">
          <img
            src="/Bloob top middle.png"
            alt=""
            className="absolute -top-20 -left-20 w-[650px] h-[650px] object-contain opacity-35 pointer-events-none"
            style={{ filter: 'brightness(0.95) hue-rotate(145deg) saturate(1.5)' }}
          />
          <img
            src="/Blob bottom right copy.png"
            alt=""
            className="absolute -bottom-10 -right-10 w-[550px] h-[550px] object-contain opacity-35 pointer-events-none"
            style={{ filter: 'brightness(0.95) hue-rotate(155deg) saturate(1.5)' }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                More Success Stories
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Additional transformations that showcase our proven methodology
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {highlightedProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        {project.buildingSize}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-lg text-gray-600 mb-4">{project.subtitle}</p>
                    <p className="text-gray-600 mb-6">{project.challenge}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-emerald-600">{project.results.occupancy}</div>
                        <div className="text-sm text-gray-600">Occupancy</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-teal-600">{project.results.noiIncrease}</div>
                        <div className="text-sm text-gray-600">NOI Increase</div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                      <blockquote className="text-gray-700 italic">
                        "{project.testimonial}"
                      </blockquote>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2">
                      View Full Case Study
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Other Case Studies */}
      {otherProjects.length > 0 && (
        <section className="py-20 bg-gray-50 relative overflow-hidden">
          <img
            src="/blob top left-2 copy.png"
            alt=""
            className="absolute -top-10 -right-10 w-[500px] h-[500px] object-contain opacity-30 pointer-events-none"
            style={{ filter: 'brightness(0.95) hue-rotate(150deg) saturate(1.5)' }}
          />
          <img
            src="/Blob bottom left copy.png"
            alt=""
            className="absolute -bottom-10 -left-10 w-[550px] h-[550px] object-contain opacity-30 pointer-events-none"
            style={{ filter: 'brightness(0.95) hue-rotate(140deg) saturate(1.5)' }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Additional Case Studies
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Every property is unique, but the results speak for themselves
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {otherProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        {project.buildingSize}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-lg text-gray-600 mb-4">{project.subtitle}</p>
                    <p className="text-gray-600 mb-6">{project.challenge}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-emerald-600">{project.results.occupancy}</div>
                        <div className="text-sm text-gray-600">Occupancy</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-teal-600">{project.results.noiIncrease}</div>
                        <div className="text-sm text-gray-600">NOI Increase</div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                      <blockquote className="text-gray-700 italic">
                        "{project.testimonial}"
                      </blockquote>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2">
                      View Full Case Study
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50 relative overflow-hidden">
        <img
          src="/Blob top left copy.png"
          alt=""
          className="absolute -top-20 -left-20 w-[650px] h-[650px] object-contain opacity-50 pointer-events-none"
          style={{ filter: 'brightness(0.95) hue-rotate(145deg) saturate(2)' }}
        />
        <img
          src="/Bloob top middle copy.png"
          alt=""
          className="absolute -bottom-10 -right-10 w-[550px] h-[550px] object-contain opacity-50 pointer-events-none"
          style={{ filter: 'brightness(0.95) hue-rotate(155deg) saturate(2)' }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The same methodology behind every successful transformation
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
                <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">1. Market Analysis</h3>
                <p className="text-gray-600 text-sm">Comprehensive demand analysis and competition mapping</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
                <div className="bg-teal-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <DollarSign className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">2. Financial Modeling</h3>
                <p className="text-gray-600 text-sm">Detailed P&L projections and ROI analysis</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
                <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Building className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">3. Space Planning</h3>
                <p className="text-gray-600 text-sm">Optimal layout design and build-out strategy</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white p-6 rounded-2xl shadow-lg mb-6">
                <div className="bg-teal-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">4. Launch Support</h3>
                <p className="text-gray-600 text-sm">Marketing strategy and operational guidance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <img
          src="/Blob top left.png"
          alt=""
          className="absolute -top-20 -left-20 w-[600px] h-[600px] object-contain opacity-50 pointer-events-none"
          style={{ filter: 'brightness(1.1) hue-rotate(140deg) saturate(1.8)' }}
        />
        <img
          src="/Blob bottom right.png"
          alt=""
          className="absolute -bottom-20 -right-20 w-[700px] h-[700px] object-contain opacity-50 pointer-events-none"
          style={{ filter: 'brightness(1.1) hue-rotate(160deg) saturate(1.8)' }}
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-600/20 to-teal-600/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Write Your
            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent"> Success Story?</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join the property owners who've transformed their assets with our proven methodology. 
            Your case study could be next.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="/sample-report" className="group bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center">
              Get Your Feasibility Study
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

export default Home;