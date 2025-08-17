import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookOpen, TrendingUp, ChevronRight, FileText, DollarSign, ChartBar, Users, Globe, Shield, Target, Zap, Lightbulb } from 'lucide-react'

const Blogs = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/blogs');
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  // Function to get gradient background based on category
  const getCategoryGradient = (category) => {
    // Use subtle blue gradient like FinTerms
    return 'from-blue-50 to-slate-100';
  };

  // Blogs are now fetched from API instead of hardcoded

  const openBlogPage = (blog) => {
    navigate(`/blog/${blog._id || blog.id}`);
  };

  return (
    <>
      {/* Main Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 md:py-24 overflow-hidden min-h-screen">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23f1f5f9\' fill-opacity=\'0.4\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                FinLit
              </span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Blog Gallery
              </span>
            </h2>
          </div>

          {/* Blog Grid */}
          {loading ? (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading blogs...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
              <div
                key={blog.id}
                className={`group cursor-pointer transition-all duration-700 perspective-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
                onClick={() => openBlogPage(blog)}
              >
                <div
                  className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-white/50 transition-all duration-500 group-hover:shadow-2xl group-hover:bg-white/90 group-hover:-translate-y-2 group-hover:scale-[1.04] group-hover:border-yellow-400 group-hover:shadow-yellow-200 animate-card-float"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden group-hover:animate-tilt-glow">
                    <div className={`aspect-[4/3] bg-gradient-to-br ${getCategoryGradient(blog.category)} flex items-center justify-center relative p-6`}>
                      {/* Content Preview */}
                      <div className="text-slate-800 text-center">
                        <h4 className="text-sm font-semibold mb-2 line-clamp-2 text-slate-700">
                          {blog.title}
                        </h4>
                        <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                          {blog.content.substring(0, 150)}...
                        </p>
                      </div>
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                          <TrendingUp className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-yellow-500/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-yellow-600 transition-colors duration-300 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                      {blog.shortDescription}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        {blog.author}
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-12">
                        <ChevronRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          )}

          {/* CTA Section */}
          <div 
            className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-lg text-slate-600 mb-6">
              Want to learn more about financial literacy?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.thefinlitproject.app"
                className="group bg-gradient-to-r from-slate-800 to-slate-900 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <BookOpen className="w-5 h-5" />
                Download FinLit Learn
                <div className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300">
                  →
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .animate-card-float {
          animation: cardFloat 3s ease-in-out infinite alternate;
        }
        @keyframes cardFloat {
          0% { transform: translateY(0); }
          100% { transform: translateY(-8px); }
        }
        
        .group:hover .group-hover\:animate-tilt-glow {
          animation: tiltGlow 0.7s cubic-bezier(.25,.46,.45,.94) both;
          box-shadow: 0 0 32px 8px #fde04799;
          border-color: #fde047;
        }
        @keyframes tiltGlow {
          0% { transform: rotateY(0deg) scale(1); }
          60% { transform: rotateY(8deg) scale(1.05); }
          100% { transform: rotateY(0deg) scale(1.04); }
        }
      `}</style>
    </>
  )
}

export default Blogs