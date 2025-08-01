import React from 'react'
import { useNavigate } from 'react-router-dom'
import { blogsData } from '../../data/blogsData'

const Blogs = () => {
  const navigate = useNavigate();

  const openBlogPage = (blog) => {
    // Store blog data in localStorage for the blog page to access
    localStorage.setItem('selectedBlog', JSON.stringify(blog));
    navigate(`/blog/${blog.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          FinLit Blogs
        </h1>
        
        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {blogsData.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => openBlogPage(blog)}
            >
              {/* Top Section - Varied designs based on blog type */}
              <div className="h-48 relative">
                {/* Different background styles based on blog ID */}
                {blog.id <= 6 ? (
                  // First set of cards - Blue gradient with text overlay
                  <div className="w-full h-full bg-gradient-to-br from-blue-600 to-blue-800 relative">
                    <div className="absolute top-4 left-4">
                      <div className="bg-white bg-opacity-20 rounded-full p-2">
                        <img 
                          src={blog.image} 
                          alt="FinLit Logo" 
                          className="w-6 h-6"
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-xl font-bold mb-2">{blog.title.split(':')[0]}</h3>
                        {blog.title.includes(':') && (
                          <p className="text-sm opacity-90">{blog.title.split(':')[1]}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ) : blog.id <= 12 ? (
                  // Second set of cards - Different color schemes
                  <div className={`w-full h-full ${blog.id === 7 ? 'bg-green-600' : blog.id === 9 ? 'bg-yellow-500' : 'bg-blue-900'} relative`}>
                    <div className="absolute top-4 left-4">
                      <div className="bg-white bg-opacity-20 rounded-full p-2">
                        <img 
                          src={blog.image} 
                          alt="FinLit Logo" 
                          className="w-6 h-6"
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-lg font-bold mb-2">{blog.title.split(':')[0]}</h3>
                        {blog.title.includes(':') && (
                          <p className="text-sm opacity-90">{blog.title.split(':')[1]}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ) : blog.id <= 18 ? (
                  // Third set of cards - Different styles
                  <div className={`w-full h-full ${blog.id === 13 ? 'bg-yellow-500' : blog.id === 15 ? 'bg-teal-500' : blog.id === 18 ? 'bg-orange-500' : 'bg-blue-900'} relative`}>
                    <div className="absolute top-4 left-4">
                      <div className="bg-white bg-opacity-20 rounded-full p-2">
                        <img 
                          src={blog.image} 
                          alt="FinLit Logo" 
                          className="w-6 h-6"
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-lg font-bold mb-2">{blog.title.split(':')[0]}</h3>
                        {blog.title.includes(':') && (
                          <p className="text-sm opacity-90">{blog.title.split(':')[1]}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  // Fourth set of cards - Final styles
                  <div className={`w-full h-full ${blog.id === 24 ? 'bg-yellow-500' : 'bg-blue-900'} relative`}>
                    <div className="absolute top-4 left-4">
                      <div className="bg-white bg-opacity-20 rounded-full p-2">
                        <img 
                          src={blog.image} 
                          alt="FinLit Logo" 
                          className="w-6 h-6"
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <h3 className="text-lg font-bold mb-2">{blog.title.split(':')[0]}</h3>
                        {blog.title.includes(':') && (
                          <p className="text-sm opacity-90">{blog.title.split(':')[1]}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Bottom Section - Title */}
              <div className={`p-4 ${blog.id === 1 || blog.id === 12 || blog.id === 18 || blog.id === 24 ? 'bg-orange-500' : 'bg-blue-900'}`}>
                <h4 className={`text-lg font-semibold text-center ${blog.id === 12 || blog.id === 18 ? 'text-black' : 'text-white'}`}>
                  {blog.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blogs
