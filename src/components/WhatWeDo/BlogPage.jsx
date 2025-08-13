import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const BlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading blog...</p>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Blog Not Found</h2>
          <p className="text-gray-600 mb-6">The blog you're looking for doesn't exist.</p>
          <button
            onClick={goBack}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-10 backdrop-blur-sm bg-white/95">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <button
            onClick={goBack}
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Articles
          </button>
        </div>
      </nav>

      {/* Blog Content */}
      <article className="max-w-3xl mx-auto px-6 py-16">
        {/* Blog Header */}
        <header className="mb-16">
          <div className="mb-8">
            <span className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 uppercase tracking-wide">
              {blog.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-[1.1] mb-8 tracking-tight">
              {blog.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
              {blog.shortDescription}
            </p>
          </div>

          {/* Author & Meta Info */}
          <div className="flex items-center justify-between pb-8 border-b border-gray-200">
            <div className="flex items-center">
              <img 
                src={blog.image} 
                alt={blog.author} 
                className="w-12 h-12 rounded-full mr-4 ring-2 ring-gray-100"
              />
              <div>
                <div className="font-semibold text-gray-900">{blog.author}</div>
                <div className="text-sm text-gray-500">{blog.role}</div>
              </div>
            </div>
            <div className="text-sm text-gray-500">
              <time dateTime="2024-01-15">January 15, 2024</time> • 5 min read
            </div>
          </div>
        </header>

        {/* Hero Image (Optional - you can add this if you have a featured image) */}
        <div className="mb-16 -mx-6">
          <div className="aspect-[16/9] bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-lg mx-6 flex items-center justify-center">
            <span className="text-gray-400 font-medium">Featured Image</span>
          </div>
        </div>

        {/* Blog Content */}
        <div className="prose prose-xl prose-gray max-w-none mb-20">
          {blog.content.split('\n\n').map((paragraph, index) => {
            // Add some variety to paragraph styling for a more dynamic look
            const isFirstParagraph = index === 0;
            const paragraphClass = isFirstParagraph 
              ? "text-2xl leading-relaxed text-gray-800 font-normal mb-8 first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 first-letter:mr-3 first-letter:float-left first-letter:leading-none"
              : "mb-8 text-gray-800 leading-relaxed text-lg";
            
            return (
              <p key={index} className={paragraphClass}>
                {paragraph}
              </p>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-16 text-center border border-blue-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
          <p className="text-gray-600 mb-6">Get the latest financial insights delivered to your inbox</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Author Bio Section */}
        <div className="border-t border-gray-200 pt-12 mb-16">
          <div className="flex items-start space-x-6 bg-gray-50 rounded-2xl p-8">
            <img 
              src={blog.image} 
              alt={blog.author} 
              className="w-20 h-20 rounded-full flex-shrink-0 ring-4 ring-white"
            />
            <div>
              <div className="font-bold text-gray-900 text-xl mb-2">{blog.author}</div>
              <div className="text-blue-600 font-semibold mb-4">{blog.role}</div>
              <p className="text-gray-700 leading-relaxed">
                {blog.author} is a seasoned financial expert with over a decade of experience in helping individuals 
                and businesses navigate complex financial landscapes. Passionate about making financial literacy 
                accessible to everyone, {blog.author.split(' ')[0]} regularly speaks at conferences and contributes 
                to leading financial publications.
              </p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="border-t border-gray-200 pt-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Continue Reading</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 via-blue-50 to-indigo-100 rounded-xl mb-6 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-lg">Financial Planning</span>
                </div>
              </div>
              <div className="space-y-3">
                <span className="inline-block text-xs font-semibold text-blue-600 uppercase tracking-wide">
                  Personal Finance
                </span>
                <h4 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                  Building Your Emergency Fund: A Step-by-Step Guide
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Learn how to build a robust emergency fund that can protect you from unexpected financial challenges and provide peace of mind.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>5 min read</span>
                  <span className="mx-2">•</span>
                  <span>Jan 10, 2024</span>
                </div>
              </div>
            </article>

            <article className="group cursor-pointer">
              <div className="aspect-[4/3] bg-gradient-to-br from-green-100 via-green-50 to-emerald-100 rounded-xl mb-6 overflow-hidden">
                {/* <div className="w-full h-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold text-lg">Investing</span>
                </div> */}
              </div>
              <div className="space-y-3">
                {/* <span className="inline-block text-xs font-semibold text-green-600 uppercase tracking-wide">
                  Investment
                </span> */}
                <h4 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                  Diversification Strategies for Long-term Wealth
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Discover proven diversification techniques that can help minimize risk while maximizing your investment returns over time.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>8 min read</span>
                  <span className="mx-2">•</span>
                  <span>Jan 8, 2024</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-20">
        <div className="max-w-3xl mx-auto px-6 py-12 text-center">
          <p className="text-gray-600 mb-4">
            Thank you for reading! Share this article if you found it helpful.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              <span>Share on Twitter</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>Share on LinkedIn</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default BlogPage
