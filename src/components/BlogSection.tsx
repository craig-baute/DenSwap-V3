import React from 'react';
import { Calendar, ArrowRight, Clock } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      title: "The Death of Traditional Office Leasing: Why Coworking is the Future",
      excerpt: "Corporate America is fundamentally changing how it thinks about office space. Here's what property owners need to know.",
      date: "January 15, 2025",
      readTime: "5 min read",
      category: "Market Trends",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "Case Study: How One Property Owner Increased NOI by 40% with Coworking",
      excerpt: "A detailed breakdown of a successful coworking conversion and the data that made it possible.",
      date: "January 10, 2025",
      readTime: "8 min read",
      category: "Case Study",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      title: "5 Red Flags That Signal Your Building Won't Work for Coworking",
      excerpt: "Not every property is suitable for flexible workspace. Learn the warning signs before you invest.",
      date: "January 5, 2025",
      readTime: "6 min read",
      category: "Strategy",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-200/40 bg-[size:28px_28px] opacity-30"></div>
      
      {/* Blob Geometric Elements */}
      <div className="absolute -top-16 -left-16 w-64 h-64 bg-emerald-100/30 blur-xl" style={{
        borderRadius: '50% 70% 40% 60% / 30% 50% 70% 40%',
        zIndex: 0
      }}></div>
      <div className="absolute -bottom-12 -right-12 w-56 h-56 bg-emerald-200/25 blur-2xl" style={{
        borderRadius: '40% 60% 50% 50% / 60% 30% 70% 40%',
        zIndex: 0
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-h1 md:text-5xl font-bold text-brand-primary mb-8">
            Latest Industry
            <span className="text-brand-light"> Insights</span>
          </h2>
          <p className="text-body text-neutral-500 max-w-3xl mx-auto">
            Stay ahead of the curve with expert analysis and real-world insights from the coworking industry.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 relative z-10">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
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
                
                <h3 className="text-h3 font-bold text-brand-primary mb-3 group-hover:text-brand-light transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-body text-neutral-500 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <a href="#" className="inline-flex items-center text-brand-primary font-semibold hover:text-brand-light transition-colors group">
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/blog" className="group bg-gradient-to-r from-brand-primary to-brand-light text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center">
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};