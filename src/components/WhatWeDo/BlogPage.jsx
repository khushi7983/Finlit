import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const BlogPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  const fetchBlog = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/blogs/${slug}`);
      if (response.ok) {
        const blogData = await response.json();
        setBlog(blogData);
      } else {
        console.error('Blog not found');
      }
    } catch (error) {
      console.error('Error fetching blog:', error);
    } finally {
      setLoading(false);
    }
  };

  const goBack = () => {
    navigate('/what-we-do/finlit-blogs');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 font-medium">Loading blog...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Blog Not Found</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">The blog you're looking for doesn't exist or has been moved.</p>
          <button
            onClick={goBack}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-5">
          <button
            onClick={goBack}
            className="flex items-center text-gray-700 hover:text-blue-600 transition-all duration-200 font-medium group"
          >
            <svg className="w-5 h-5 mr-3 group-hover:transform group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Articles
          </button>
        </div>
      </nav>

      {/* Blog Content */}
      <article className="max-w-4xl mx-auto px-6 py-12 lg:py-20">
        {/* Blog Header */}
        <header className="mb-16">
          <div className="mb-10">
            <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full text-sm font-bold mb-8 uppercase tracking-wider shadow-lg">
              {blog.category}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                {blog.title}
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed font-light max-w-3xl">
              {blog.shortDescription}
            </p>
          </div>

          {/* Author & Meta Info */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pb-8 border-b-2 border-gray-200">
            <div className="flex items-center">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-0.5 mr-4">
                <img 
                  src={blog.image} 
                  alt={blog.author} 
                  className="w-full h-full rounded-full object-cover bg-white"
                />
              </div>
              <div>
                <div className="font-bold text-lg text-gray-900">{blog.author}</div>
                <div className="text-sm text-gray-500 font-medium">{blog.role}</div>
              </div>
            </div>
            <div className="text-sm text-gray-500 font-medium">
              <time dateTime={blog.publishDate} className="block">
                {new Date(blog.publishDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="text-gray-400">• {blog.readTime || "5 min read"}</span>
            </div>
          </div>
        </header>

        {/* Hero Image - Only show if blog has a featured image */}
        {blog.featuredImage && (
          <div className="mb-16 -mx-6">
            <div className="aspect-[16/9] rounded-xl mx-6 overflow-hidden shadow-2xl">
              <img 
                src={blog.featuredImage} 
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Blog Content */}
        <div className="prose prose-xl max-w-none mb-20">
          {blog.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-8 text-gray-700 leading-relaxed text-lg font-normal">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Article End Divider */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          </div>
        </div>
      </article>
    </div>
  )
}

export default BlogPage
