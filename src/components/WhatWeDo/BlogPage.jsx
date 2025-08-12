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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <button
            onClick={goBack}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blogs
          </button>
        </div>
      </div>

      {/* Blog Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Blog Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <img 
              src={blog.image} 
              alt="Author" 
              className="w-16 h-16 rounded-full mr-4"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{blog.title}</h1>
              <div className="flex items-center text-gray-600">
                <span className="font-semibold">{blog.author}</span>
                <span className="mx-2">•</span>
                <span>{blog.role}</span>
                <span className="mx-2">•</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {blog.category}
                </span>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {blog.shortDescription}
          </p>
        </div>

        {/* Blog Body */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose prose-lg max-w-none">
            {blog.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6 text-gray-700 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Author Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">About the Author</h3>
          <div className="flex items-center">
            <img 
              src={blog.image} 
              alt="Author" 
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <div className="font-semibold text-gray-900">{blog.author}</div>
              <div className="text-gray-600">{blog.role}</div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
              <h4 className="font-semibold text-gray-900 mb-2">Financial Planning Tips</h4>
              <p className="text-sm text-gray-600">Essential strategies for building a solid financial foundation...</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
              <h4 className="font-semibold text-gray-900 mb-2">Investment Strategies</h4>
              <p className="text-sm text-gray-600">Learn about different investment approaches and risk management...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPage 