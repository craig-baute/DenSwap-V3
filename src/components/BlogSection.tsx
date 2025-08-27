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
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-gray-200/20 bg-[size:28px_28px] opacity-30"></div>
      
      {/* Geometric Background Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gray-100/40 blur-2xl" style={{
        borderRadius: '70% 30% 60% 40% / 40% 60% 30% 70%'
      }}></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gray-200/25 blur-xl transform rotate-45" style={{
        clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)'
      }}></div>
      <div className="absolute top-1/3 right-1/2 w-40 h-40 bg-gray-100/35 transform -rotate-30" style={{
        borderRadius: '40% 60% 70% 30% / 50% 30% 70% 50%'
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Latest Industry
            <span className="text-emerald-600"> Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead of the curve with expert analysis and real-world insights from the coworking industry.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
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
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <a href="#" className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors group">
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/blog" className="group bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center">
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};