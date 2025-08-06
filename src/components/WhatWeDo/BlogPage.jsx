import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, BookOpen, User, Calendar, Tag, TrendingUp } from 'lucide-react'

const BlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Get blog data from localStorage
    const blogData = localStorage.getItem('selectedBlog');
    if (blogData) {
      const parsedBlog = JSON.parse(blogData);
      setBlog(parsedBlog);
    }
    setLoading(false);
  }, [id]);

  const goBack = () => {
    navigate('/what-we-do/finlit-blogs');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading blog...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Blog Not Found</h2>
          <p className="text-gray-600 mb-6">The blog you're looking for doesn't exist.</p>
          <button
            onClick={goBack}
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-6 py-3 rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105"
          >
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23f1f5f9\' fill-opacity=\'0.4\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>

      {/* Header */}
      <div className="relative z-10 bg-white/90 backdrop-blur-sm shadow-sm border-b border-white/50">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <button
            onClick={goBack}
            className="flex items-center text-slate-700 hover:text-yellow-600 transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-semibold">Back to Blogs</span>
          </button>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
        {/* Blog Header Card */}
        <div className={`bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8 mb-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex flex-col lg:flex-row items-start gap-8">
            {/* Author Image */}
            <div className="flex-shrink-0">
              <div className="relative">
                <img 
                  src={blog.image} 
                  alt="Author" 
                  className="w-24 h-24 rounded-2xl object-cover shadow-lg border-4 border-white"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                  <User className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            {/* Blog Info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  {blog.category}
                </span>
                <span className="text-slate-500 text-sm flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date().toLocaleDateString()}
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-black text-slate-800 mb-4 leading-tight">
                {blog.title}
              </h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-semibold text-slate-700">{blog.author}</span>
                </div>
                <span className="text-slate-500">•</span>
                <span className="text-slate-600">{blog.role}</span>
              </div>
              
              <p className="text-xl text-slate-600 leading-relaxed">
                {blog.shortDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Blog Body Card */}
        <div className={`bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8 mb-8 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="prose prose-lg max-w-none">
            {blog.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-slate-700 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Author Section Card */}
        <div className={`bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8 mb-8 transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
            About the Author
          </h3>
          <div className="flex items-center gap-4">
            <img 
              src={blog.image} 
              alt="Author" 
              className="w-16 h-16 rounded-xl object-cover shadow-lg border-2 border-white"
            />
            <div>
              <div className="font-bold text-slate-800 text-lg">{blog.author}</div>
              <div className="text-slate-600">{blog.role}</div>
            </div>
          </div>
        </div>

        {/* Related Articles Card */}
        <div className={`bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            Related Articles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="group bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border border-slate-200 hover:border-yellow-300">
              <h4 className="font-bold text-slate-800 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                Financial Planning Tips
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Essential strategies for building a solid financial foundation and achieving your long-term goals...
              </p>
            </div>
            <div className="group bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border border-slate-200 hover:border-yellow-300">
              <h4 className="font-bold text-slate-800 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                Investment Strategies
              </h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                Learn about different investment approaches and risk management techniques for better returns...
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <p className="text-lg text-slate-600 mb-6">
            Want to explore more financial insights and learnings?
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

      {/* Custom Styles */}
      <style jsx>{`
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .5;
          }
        }
      `}</style>
    </div>
  )
}

export default BlogPage 