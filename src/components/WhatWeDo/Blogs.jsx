import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import {
  BookOpen, TrendingUp, ChevronRight, FileText,
  DollarSign, ChartBar, Target, Zap
} from 'lucide-react';

// Supabase client setup
const supabaseUrl = 'https://beqgompakieeifoguaeg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJlcWdvbXBha2llZWlmb2d1YWVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2MzQzOTIsImV4cCI6MjA3MDIxMDM5Mn0.McU3MKaFsdPhCnZDDCCPx-b1P005nULv0BtL-oYDVVk'; // Keep full key if testing locally
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Blogs = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    const { data, error } = await supabase.from('blogs').select('*');
  
    if (error) {
      console.error('Error fetching blogs:', error);
    } else {
      console.log("✅ Blogs fetched:", data); // Add this
      setBlogs(data);
    }
  };
  
  

  const openBlogPage = (blog) => {
    localStorage.setItem('selectedBlog', JSON.stringify(blog));
    navigate(`/blog/${blog.id}`);
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'Technology': <Zap className="w-8 h-8" />,
      'Investment': <TrendingUp className="w-8 h-8" />,
      'Education': <BookOpen className="w-8 h-8" />,
      'Trading': <ChartBar className="w-8 h-8" />,
      'Finance': <DollarSign className="w-8 h-8" />,
      'Economics': <Target className="w-8 h-8" />,
      'default': <FileText className="w-8 h-8" />
    };
    return icons[category] || icons.default;
  };

  const getCategoryGradient = () => 'from-blue-50 to-slate-100';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-slate-800 mb-10">
          FinLit Blog Gallery
        </h1>

        {loading ? (
          <div className="text-center text-gray-500 mt-10">Loading blogs...</div>
        ) : error ? (
          <div className="text-center text-red-500 mt-10">{error}</div>
        ) : blogs.length === 0 ? (
          <div className="text-center text-gray-500 mt-10">No blogs found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                onClick={() => openBlogPage(blog)}
                className="cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all"
              >
                <div className={`aspect-[4/3] bg-gradient-to-br ${getCategoryGradient(blog.category)} flex items-center justify-center p-6`}>
                  <div className="text-center">
                    <div className="mb-2 text-blue-600">
                      {getCategoryIcon(blog.category)}
                    </div>
                    <h2 className="text-lg font-semibold text-slate-700 line-clamp-2">{blog.title}</h2>
                    <p className="text-sm text-slate-600 mt-2 line-clamp-3">
                      {blog.shortDescription}
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <div className="text-xs text-slate-500 mb-2">{blog.author} • {blog.role}</div>
                  <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 inline-block rounded-full">
                    {blog.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
