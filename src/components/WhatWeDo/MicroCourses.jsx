import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import useScrollToTop from '../../hooks/useScrollToTop';

// Fallback micro courses in case API fails
const fallbackMicroCourses = [
  {
    title: "Anatomy of a Stock Market",
    description: "Learn the fundamentals of stock market operations",
    imageUrl: "/src/assets/micro_courses/Anatomy-of-a-Stock-Market_cover-image-1536x864.jpg",
    category: "micro",
    keywords: ["Stock", "Market", "Analysis"]
  },
  {
    title: "Bond A Mistry",
    description: "Understanding bond markets and investments",
    imageUrl: "/src/assets/micro_courses/Bond-A-Mistry-1536x864.png",
    category: "micro",
    keywords: ["Bond", "Investment"]
  },
  {
    title: "CRYPTO Trading",
    description: "Master cryptocurrency trading strategies",
    imageUrl: "/src/assets/micro_courses/CRYPTO-9.png",
    category: "micro",
    keywords: ["Crypto", "Trading"]
  },
  {
    title: "Decoding Derivatives",
    description: "Advanced derivatives trading concepts",
    imageUrl: "/src/assets/micro_courses/Decoding-Derivatives-1536x864.png",
    category: "micro",
    keywords: ["Derivatives", "Trading"]
  },
  {
    title: "Decoding Financial Literacy",
    description: "Essential financial literacy concepts",
    imageUrl: "/src/assets/micro_courses/Decoding-Financial-Literacy_Cover-1536x864.jpg",
    category: "micro",
    keywords: ["Financial", "Literacy", "Money"]
  },
  {
    title: "FOREX Trading",
    description: "Foreign exchange market trading",
    imageUrl: "/src/assets/micro_courses/FOREX-1.png",
    category: "micro",
    keywords: ["Forex", "Trading"]
  },
  {
    title: "Fundamental Analysis",
    description: "Stock analysis fundamentals",
    imageUrl: "/src/assets/micro_courses/Fundamental-Analysis-1536x864.png",
    category: "micro",
    keywords: ["Analysis", "Stock"]
  },
  {
    title: "Insurance Planning",
    description: "Comprehensive insurance planning guide",
    imageUrl: "/src/assets/micro_courses/Insurance-Planning--1536x864.png",
    category: "micro",
    keywords: ["Insurance", "Planning"]
  },
  {
    title: "IPO Investment",
    description: "Initial public offering investment strategies",
    imageUrl: "/src/assets/micro_courses/IPO-1-1536x845.png",
    category: "micro",
    keywords: ["IPO", "Investment"]
  }
];

const MicroCourses = () => {
  // Scroll to top when component mounts
  useScrollToTop();
  
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  // Prefer env override if provided; falls back to localhost
  const apiBaseUrl = useMemo(() => import.meta?.env?.VITE_API_BASE_URL || "http://localhost:5000", []);

  useEffect(() => {
    let isMounted = true;
    async function load() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(`${apiBaseUrl}/api/courses?category=micro`);
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        const data = await res.json();
        if (isMounted) setCourses(Array.isArray(data) ? data : fallbackMicroCourses);
      } catch (err) {
        console.error("Error fetching micro courses:", err);
        if (isMounted) {
          setError("Unable to load micro courses right now.");
          setCourses(fallbackMicroCourses);
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }
    load();
    return () => {
      isMounted = false;
    };
  }, [apiBaseUrl]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Show only the first 9 courses
  const coursesToShow = courses.slice(0, 9);

  const handleExplore = () => {
    window.location.href = 'all-courses';
  };

  const openModal = (course) => {
    setModalImg(course.imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImg(null);
  };

  return (
    <div className="relative min-h-screen w-full px-4 py-12 flex flex-col items-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* SVG Dot Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23f1f5f9\' fill-opacity=\'0.4\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50 pointer-events-none"></div>
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>
      {/* Main Content */}
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
            Micro-courses
          </span>
        </h2>
      </div>
      {/* <p className="mb-8 text-lg text-center max-w-2xl text-yellow-700/80">Explore our range of micro-courses designed to enhance your financial literacy.</p> */}
      
      {/* Loading State */}
      {isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-6xl">
          {Array.from({ length: 9 }).map((_, idx) => (
            <div key={`skeleton-${idx}`} className="bg-white rounded-2xl shadow-md p-2 flex items-center justify-center max-w-xs mx-auto animate-pulse">
              <div className="w-full h-48 bg-gray-200 rounded-lg"></div>
            </div>
          ))}
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="text-center py-12">
          <p className="text-red-500 text-lg">{error}</p>
        </div>
      )}

      {/* Courses Grid */}
      {!isLoading && !error && (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-6xl">
          {coursesToShow.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-2 flex items-center justify-center transition-transform duration-200 hover:scale-105 hover:shadow-xl cursor-pointer max-w-xs mx-auto"
              onClick={() => openModal(course)}
          >
            <img
                src={course.imageUrl}
                alt={course.title}
              className="object-contain rounded-lg border border-gray-100 shadow-sm"
            />
          </div>
        ))}
      </div>
      )}

      {/* Empty State */}
      {!isLoading && !error && coursesToShow.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No micro courses available right now.</p>
        </div>
      )}

      <button
        onClick={handleExplore}
        className="mt-8 group bg-gradient-to-r from-yellow-500 to-yellow-600 text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg border border-yellow-500/20"
      >
        Explore All Courses
        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
      </button>
      {/* Modal/Lightbox */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl w-full flex justify-center"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white text-3xl font-bold bg-black bg-opacity-40 rounded-full px-3 py-1 hover:bg-opacity-70 transition"
              onClick={closeModal}
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={modalImg}
              alt="Full Course Preview"
              className="max-h-[80vh] w-auto rounded-xl shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MicroCourses;