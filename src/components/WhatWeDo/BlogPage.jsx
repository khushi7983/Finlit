import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const BlogPage = () => {
  const { slug } = useParams();   // ✅ use slug instead of id
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  const fetchBlog = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/blogs/${slug}`); // ✅ slug-based API
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
              <time dateTime={blog.publishDate}>
                {new Date(blog.publishDate).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time> • {blog.readTime || "5 min read"}
            </div>
          </div>
        </header>

        {/* Hero Image */}
        <div className="mb-16 -mx-6">
          <div className="aspect-[16/9] bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-lg mx-6 flex items-center justify-center">
            <span className="text-gray-400 font-medium">Featured Image</span>
          </div>
        </div>

        {/* Blog Content */}
        <div className="prose prose-xl prose-gray max-w-none mb-20">
          {blog.content.split('\n\n').map((paragraph, index) => {
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
      </article>
    </div>
  )
}

export default BlogPage
