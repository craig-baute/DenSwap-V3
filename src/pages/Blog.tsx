import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactSection } from '../components/ContactSection';
import { Author } from '../components/AuthorManager';
import { Calendar, Clock, ArrowRight, Search, Filter, Youtube, Mail, Play, TrendingUp, BarChart3, Video, Linkedin } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: 'Demand Analysis' | 'Trends and Insights' | 'Videos';
  image: string;
  authorId: string;
  slug: string;
  isVideo?: boolean;
  tags: string[];
}

export const Blog: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [selectedAuthor, setSelectedAuthor] = useState<Author | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [authors, setAuthors] = useState<Author[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [availableTags, setAvailableTags] = useState<string[]>([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([
    {
      id: '1',
      title: "The Death of Traditional Office Leasing: Why Coworking is the Future",
      excerpt: "Corporate America is fundamentally changing how it thinks about office space. Here's what property owners need to know about the shift to flexible workspace solutions.",
      date: "January 15, 2025",
      readTime: "5 min read",
      category: "Trends and Insights",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      authorId: "1",
      slug: "death-of-traditional-office-leasing",
      tags: ["commercial real estate", "office space", "coworking", "real estate trends"]
    },
    {
      id: '2',
      title: "Case Study: How One Property Owner Increased NOI by 40% with Coworking",
      excerpt: "A detailed breakdown of a successful coworking conversion and the data-driven decisions that made it possible. Real numbers, real results.",
      date: "January 10, 2025",
      readTime: "8 min read",
      category: "Demand Analysis",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
      authorId: "2",
      slug: "property-owner-40-percent-noi-increase",
      tags: ["case study", "NOI", "property investment", "financial modeling", "coworking"]
    },
    {
      id: '3',
      title: "5 Red Flags That Signal Your Building Won't Work for Coworking",
      excerpt: "Not every property is suitable for flexible workspace. Learn the warning signs before you invest and save yourself from costly mistakes.",
      date: "January 5, 2025",
      readTime: "6 min read",
      category: "Demand Analysis",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      authorId: "3",
      slug: "5-red-flags-building-wont-work-coworking",
      tags: ["market analysis", "property investment", "risk assessment", "coworking", "feasibility study"]
    },
    {
      id: '4',
      title: "Market Analysis Deep Dive: Austin's Coworking Boom",
      excerpt: "An in-depth look at Austin's coworking market dynamics, including demand drivers, competition analysis, and future projections for property investors.",
      date: "December 28, 2024",
      readTime: "12 min read",
      category: "Demand Analysis",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
      authorId: "1",
      slug: "austin-coworking-market-analysis",
      tags: ["austin", "market analysis", "coworking", "texas", "demand analysis", "competition"]
    },
    {
      id: '5',
      title: "The Psychology of Workspace Choice: Why Location Matters More Than Ever",
      excerpt: "Understanding the human factors that drive coworking demand. It's not just about square footage - it's about community, convenience, and connection.",
      date: "December 20, 2024",
      readTime: "7 min read",
      category: "Trends and Insights",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=600",
      authorId: "4",
      slug: "psychology-workspace-choice-location",
      tags: ["workspace design", "psychology", "location", "coworking", "human behavior"]
    },
    {
      id: '6',
      title: "Video: How to Read a Coworking Feasibility Report",
      excerpt: "A 15-minute walkthrough of our comprehensive feasibility reports, explaining key metrics and how to interpret the data for investment decisions.",
      date: "December 15, 2024",
      readTime: "15 min watch",
      category: "Videos",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
      authorId: "5",
      slug: "video-how-to-read-feasibility-report",
      isVideo: true,
      tags: ["video", "feasibility study", "financial modeling", "investment analysis", "tutorial"]
    },
    {
      id: '7',
      title: "Remote Work's Impact on Commercial Real Estate: 2025 Outlook",
      excerpt: "How the permanent shift to remote work is reshaping commercial real estate demand and creating new opportunities for flexible workspace operators.",
      date: "December 10, 2024",
      readTime: "9 min read",
      category: "Trends and Insights",
      image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=600",
      authorId: "6",
      slug: "remote-work-impact-cre-2025-outlook",
      tags: ["remote work", "commercial real estate", "2025 outlook", "flexible workspace", "real estate trends"]
    },
    {
      id: '8',
      title: "Video: Site Selection Criteria for Successful Coworking Spaces",
      excerpt: "Join our experts as they walk through a real site evaluation, covering transportation, demographics, competition, and other critical factors.",
      date: "December 5, 2024",
      readTime: "22 min watch",
      category: "Videos",
      image: "https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=600",
      authorId: "1",
      slug: "video-site-selection-criteria",
      isVideo: true,
      tags: ["video", "site selection", "location analysis", "coworking", "market analysis", "demographics"]
    },
    {
      id: '9',
      title: "Financial Modeling for Coworking: Beyond Simple Square Footage Calculations",
      excerpt: "Why traditional CRE financial models fail for coworking and how to build accurate projections that account for membership dynamics and operational complexity.",
      date: "November 28, 2024",
      readTime: "11 min read",
      category: "Demand Analysis",
      image: "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=600",
      authorId: "7",
      slug: "financial-modeling-coworking-beyond-square-footage",
      tags: ["financial modeling", "coworking", "revenue projections", "membership dynamics", "CRE analysis"]
    },
    {
      id: '10',
      title: "The Hidden Costs of Coworking: What Your Pro Forma Isn't Telling You",
      excerpt: "Beyond rent and utilities, successful coworking spaces have operational expenses that traditional CRE models completely miss. Here's what you need to budget for.",
      date: "January 20, 2025",
      readTime: "9 min read",
      category: "Demand Analysis",
      image: "https://images.pexels.com/photos/3184330/pexels-photo-3184330.jpeg?auto=compress&cs=tinysrgb&w=600",
      authorId: "8",
      slug: "hidden-costs-coworking-pro-forma",
      tags: ["hidden costs", "pro forma", "coworking", "operational expenses", "financial planning", "budget"]
    },
    {
      id: '11',
      title: "Why Most Coworking Spaces Fail in Year Two (And How to Avoid Their Mistakes)",
      excerpt: "The honeymoon period ends, competition increases, and operational realities set in. Learn from the failures of others to build a sustainable coworking business.",
      date: "January 18, 2025",
      readTime: "10 min read",
      category: "Trends and Insights",
      image: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=600",
      authorId: "8",
      slug: "why-coworking-spaces-fail-year-two",
      tags: ["coworking failure", "business strategy", "operational challenges", "sustainability", "year two", "mistakes"]
    }
  ]);

  // Load posts from localStorage on component mount
  useEffect(() => {
    // Load authors
    const loadAuthors = () => {
      const savedAuthors = localStorage.getItem('blogAuthors');
      if (savedAuthors) {
        setAuthors(JSON.parse(savedAuthors));
      }
    };

    // Load posts from localStorage (managed by CMS)
    const loadPosts = () => {
      const savedPosts = localStorage.getItem('blogPosts');
      if (savedPosts) {
        const allPosts = JSON.parse(savedPosts);
        // Only show published posts on the public blog
        const publishedPosts = allPosts.filter((post: any) => post.status === 'published');
        setBlogPosts(publishedPosts);
      }
    };

    // Load available tags
    const loadTags = () => {
      const savedTags = localStorage.getItem('blogTags');
      if (savedTags) {
        setAvailableTags(JSON.parse(savedTags));
      }
    };

    loadAuthors();
    loadPosts();
    loadTags();
    
    // Listen for storage changes (when posts are updated in CMS)
    const handleStorageChange = () => {
      loadAuthors();
      loadPosts();
      loadTags();
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const filters = ['All', 'Demand Analysis', 'Trends and Insights', 'Videos'];

  let filteredPosts = blogPosts.filter(post => {
    const matchesFilter = selectedFilter === 'All' || post.category === selectedFilter;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || (post.tags && post.tags.includes(selectedTag));
    return matchesFilter && matchesSearch && matchesTag;
  });

  // If viewing author profile, filter by author
  if (selectedAuthor) {
    filteredPosts = filteredPosts.filter(post => post.authorId === selectedAuthor.id);
  }

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setIsSubscribed(true);
    setEmail('');
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Demand Analysis':
        return <BarChart3 className="h-4 w-4" />;
      case 'Trends and Insights':
        return <TrendingUp className="h-4 w-4" />;
      case 'Videos':
        return <Video className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Demand Analysis':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Trends and Insights':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Videos':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getAuthor = (authorId: string) => {
    return authors.find(a => a.id === authorId);
  };

  const handleAuthorClick = (authorId: string) => {
    const author = authors.find(a => a.id === authorId);
    if (author) {
      setSelectedAuthor(author);
      setSelectedFilter('All');
      setSearchTerm('');
    }
  };

  // Author Profile View
  if (selectedAuthor) {
    const authorPosts = blogPosts.filter(post => post.authorId === selectedAuthor.id && 
      (localStorage.getItem('blogPosts') ? 
        JSON.parse(localStorage.getItem('blogPosts')!).find((p: any) => p.id === post.id)?.status === 'published' : 
        true));

    return (
      <div className="min-h-screen bg-white">
        <Header isMobileMenuOpen={false} setIsMobileMenuOpen={() => {}} />
        
        {/* Author Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 via-white to-emerald-50/40 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setSelectedAuthor(null)}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8"
            >
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to All Articles
            </button>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <img
                  src={selectedAuthor.photo}
                  alt={selectedAuthor.name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-emerald-100"
                />
                <div className="flex-1">
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {selectedAuthor.name}
                  </h1>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {selectedAuthor.bio}
                  </p>
                  <div className="flex items-center gap-4">
                    {selectedAuthor.email && (
                      <a
                        href={`mailto:${selectedAuthor.email}`}
                        className="flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-lg hover:bg-emerald-200 transition-colors"
                      >
                        <Mail className="h-4 w-4" />
                        Email
                      </a>
                    )}
                    {selectedAuthor.linkedin && (
                      <a
                        href={selectedAuthor.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors"
                      >
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Author's Articles */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Articles by {selectedAuthor.name} ({authorPosts.length})
            </h2>
            
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {authorPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {post.isVideo && (
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <div className="bg-white/90 p-3 rounded-full">
                          <Play className="h-8 w-8 text-red-600" />
                        </div>
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border flex items-center gap-1 ${getCategoryColor(post.category)}`}>
                        {getCategoryIcon(post.category)}
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <button
                            key={tag}
                            onClick={() => {
                              setSelectedTag(tag);
                              setSelectedFilter('All');
                            }}
                            className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium hover:bg-emerald-100 hover:text-emerald-700 transition-colors"
                          >
                            #{tag}
                          </button>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="text-xs text-gray-500 px-2 py-1">
                            +{post.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-500 flex items-center gap-2">
                        {(() => {
                          const author = getAuthor(post.authorId);
                          return author ? (
                            <button
                              onClick={() => handleAuthorClick(post.authorId)}
                              className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                            >
                              <img src={author.photo} alt={author.name} className="w-6 h-6 rounded-full object-cover" />
                              By {author.name}
                            </button>
                          ) : (
                            <span>By Unknown Author</span>
                          );
                        })()}
                      </div>
                      <a 
                        href={`/blog/${post.slug}`} 
                        className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors group"
                      >
                        {post.isVideo ? 'Watch' : 'Read More'}
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {authorPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-500 text-lg mb-4">No published articles by this author yet.</div>
              </div>
            )}
          </div>
        </section>

        <ContactSection />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Coworking Industry Insights & Expert Analysis | DenSwap Blog</title>
        <meta name="description" content="Stay ahead with data-driven coworking insights, market analysis, and expert perspectives on flexible workspace industry trends from DenSwap's experienced team." />
        <meta property="og:title" content="Coworking Industry Insights & Expert Analysis | DenSwap Blog" />
        <meta property="og:description" content="Stay ahead with data-driven coworking insights, market analysis, and expert perspectives on flexible workspace industry trends from DenSwap's experienced team." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://denswap.com/blog" />
        <meta property="og:image" content="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Coworking Industry Insights & Expert Analysis" />
        <meta name="twitter:description" content="Data-driven coworking insights and market analysis from industry experts." />
        <meta name="twitter:image" content="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200" />
        <link rel="canonical" href="https://denswap.com/blog" />
      </Helmet>
      <Header isMobileMenuOpen={false} setIsMobileMenuOpen={() => {}} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-emerald-50/40 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-200/40 bg-[size:24px_24px] opacity-25"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full blur-3xl opacity-25 -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Industry Insights &
              <span className="text-emerald-600"> Expert Analysis</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto">
              Stay ahead of the curve with data-driven insights, market analysis, and expert perspectives 
              on the evolving coworking and flexible workspace industry.
            </p>

            {/* Newsletter Signup */}
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto mb-8 border border-gray-200">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-emerald-100 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Get Weekly Insights</h3>
              </div>
              
              {!isSubscribed ? (
                <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4" />
                    Subscribe
                  </button>
                </form>
              ) : (
                <div className="text-center">
                  <div className="text-emerald-600 font-semibold mb-2">✓ Successfully subscribed!</div>
                  <p className="text-gray-600">You'll receive our weekly insights in your inbox.</p>
                </div>
              )}
            </div>

            {/* YouTube Channel Button */}
            <a 
              href="https://youtube.com/@denswap" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-red-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-red-700 transition-all duration-200 inline-flex items-center gap-3 shadow-lg hover:shadow-xl"
            >
              <Youtube className="h-6 w-6" />
              Visit Our YouTube Channel
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-500" />
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                      selectedFilter === filter
                        ? 'bg-emerald-600 text-white shadow-md'
                        : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    {filter !== 'All' && getCategoryIcon(filter)}
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Tag Filter */}
            {availableTags.length > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Tags:</span>
                <select
                  value={selectedTag}
                  onChange={(e) => setSelectedTag(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
                >
                  <option value="">All Tags</option>
                  {availableTags.map((tag) => (
                    <option key={tag} value={tag}>{tag}</option>
                  ))}
                </select>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {post.isVideo && (
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="bg-white/90 p-3 rounded-full">
                        <Play className="h-8 w-8 text-red-600" />
                      </div>
                    </div>
                  )}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border flex items-center gap-1 ${getCategoryColor(post.category)}`}>
                      {getCategoryIcon(post.category)}
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500 flex items-center gap-2">
                      {(() => {
                        const author = getAuthor(post.authorId);
                        return author ? (
                          <button
                            onClick={() => handleAuthorClick(post.authorId)}
                            className="flex items-center gap-2 hover:text-emerald-600 transition-colors"
                          >
                            <img src={author.photo} alt={author.name} className="w-6 h-6 rounded-full object-cover" />
                            By {author.name}
                          </button>
                        ) : (
                          <span>By Unknown Author</span>
                        );
                      })()}
                    </div>
                    <a 
                      href={`/blog/${post.slug}`} 
                      className="inline-flex items-center text-emerald-600 font-semibold hover:text-emerald-700 transition-colors group"
                    >
                      {post.isVideo ? 'Watch' : 'Read More'}
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg mb-4">No articles found matching your criteria.</div>
              <button
                onClick={() => {
                  setSelectedFilter('All');
                  setSearchTerm('');
                }}
                className="text-emerald-600 hover:text-emerald-700 font-semibold"
              >
                Clear filters
              </button>
            </div>
          )}

          {/* Load More Button */}
          {filteredPosts.length > 0 && (
            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-200">
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Featured Resources Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential guides and tools for coworking success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-emerald-100">
              <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <BarChart3 className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Market Analysis Guide</h3>
              <p className="text-gray-600 mb-6">
                Complete guide to analyzing coworking demand in any market
              </p>
              <a href="/market-analysis" className="text-emerald-600 font-semibold hover:text-emerald-700 inline-flex items-center gap-1">
                Learn More <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-green-100">
              <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Financial Modeling</h3>
              <p className="text-gray-600 mb-6">
                Build accurate financial projections for coworking investments
              </p>
              <a href="/financial-projections" className="text-green-600 font-semibold hover:text-green-700 inline-flex items-center gap-1">
                Learn More <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center border border-blue-100">
              <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Video className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Video Library</h3>
              <p className="text-gray-600 mb-6">
                Watch expert walkthroughs and case study analyses
              </p>
              <a href="https://youtube.com/@denswap" target="_blank" rel="noopener noreferrer" className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-1">
                Watch Now <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      <Footer />
    </div>
  );
};