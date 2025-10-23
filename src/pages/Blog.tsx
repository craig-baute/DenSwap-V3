import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContactSection } from '../components/ContactSection';
import { Calendar, Clock, ArrowRight, Search, Filter, Youtube, Mail, Play, TrendingUp, BarChart3, Video, Linkedin } from 'lucide-react';
import { supabase } from '../lib/supabase'; // Import supabase client

// Define interfaces for Supabase data
interface Author {
  id: string;
  name: string;
  bio?: string;
  photo_url?: string;
  email?: string;
  linkedin_url?: string;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt?: string;
  content: string;
  publish_date?: string;
  read_time?: number;
  category?: string;
  image_url?: string;
  author_id?: string;
  slug: string;
  is_video?: boolean;
  status: 'draft' | 'published';
  tags?: string[];
  seo_title?: string;
  seo_description?: string;
  authors?: Author; // Join with authors table
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
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      setLoading(true);
      setError(null);
      try {
        // Fetch authors
        const { data: authorsData, error: authorsError } = await supabase
          .from('authors')
          .select('*');
        if (authorsError) throw authorsError;
        setAuthors(authorsData || []);

        // Fetch blog posts
        const { data: postsData, error: postsError } = await supabase
          .from('blog_posts')
          .select('*, authors(*)') // Select all post fields and join with author details
          .eq('status', 'published'); // Only fetch published posts for public view
        if (postsError) throw postsError;
        setBlogPosts(postsData || []);

        // Extract unique tags from fetched posts
        const allTags = Array.from(new Set(postsData?.flatMap(post => post.tags || []) || []));
        setAvailableTags(allTags);

      } catch (err: any) {
        console.error('Error fetching blog data:', err.message);
        setError('Failed to load blog content. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();

    // Set up real-time subscriptions
    const postsChannel = supabase
      .channel('public:blog_posts')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'blog_posts' }, payload => {
        console.log('Change received!', payload);
        fetchBlogData(); // Re-fetch data on any change
      })
      .subscribe();

    const authorsChannel = supabase
      .channel('public:authors')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'authors' }, payload => {
        console.log('Change received!', payload);
        fetchBlogData(); // Re-fetch data on any change
      })
      .subscribe();

    return () => {
      supabase.removeChannel(postsChannel);
      supabase.removeChannel(authorsChannel);
    };
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
      <section className="relative bg-[#1a4e48] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="/White Walled Coworking space.jpg" alt="White Walled Coworking space" className="w-full h-full object-cover opacity-20" />
        </div>
        {/* Curved Bottom Edge */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <svg className="w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 Q600,120 1200,0 L1200,120 L0,120 Z" fill="white" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
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
