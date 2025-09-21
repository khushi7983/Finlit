import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookOpen, ChevronRight } from 'lucide-react'

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
      const response = await fetch('/api/blogs');
      const data = await response.json();
      setBlogs(data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const openBlogPage = (blog) => {
    navigate(`/blog/${blog.slug}`);
  };

  return (
    <>
      {/* Main Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 md:py-24 overflow-hidden min-h-screen">
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
                  key={blog._id}
                  className={`group cursor-pointer transition-all duration-700 perspective-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                  onClick={() => openBlogPage(blog)}
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 h-full flex flex-col justify-between border border-transparent hover:border-yellow-400 group-hover:animate-tilt-glow transition-all duration-500">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-yellow-600">
                      {blog.title}
                    </h3>
                    <p className="text-slate-600 line-clamp-2 mb-4">
                      {blog.shortDescription}
                    </p>
                    <div className="flex items-center justify-between text-sm text-slate-500">
                      <span>{blog.author}</span>
                      <ChevronRight className="w-4 h-4 group-hover:text-yellow-600" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
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
                Download FinLit Learn →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Blogs
