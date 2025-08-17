import React, { useState, useEffect, useMemo } from 'react';

// Fallback courses in case API fails
const fallbackCourses = [
  {
    title: "Anatomy of a Stock Market",
    description: "Learn the fundamentals of stock market operations",
    imageUrl: "/src/assets/micro_courses/Anatomy-of-a-Stock-Market_cover-image-1536x864.jpg",
    category: "all",
    keywords: ["Stock", "Market", "Analysis"]
  },
  {
    title: "Bond A Mistry",
    description: "Understanding bond markets and investments",
    imageUrl: "/src/assets/micro_courses/Bond-A-Mistry-1536x864.png",
    category: "all",
    keywords: ["Bond", "Investment"]
  },
  {
    title: "CRYPTO Trading",
    description: "Master cryptocurrency trading strategies",
    imageUrl: "/src/assets/micro_courses/CRYPTO-9.png",
    category: "all",
    keywords: ["Crypto", "Trading"]
  },
  {
    title: "Decoding Derivatives",
    description: "Advanced derivatives trading concepts",
    imageUrl: "/src/assets/micro_courses/Decoding-Derivatives-1536x864.png",
    category: "all",
    keywords: ["Derivatives", "Trading"]
  },
  {
    title: "Decoding Financial Literacy",
    description: "Essential financial literacy concepts",
    imageUrl: "/src/assets/micro_courses/Decoding-Financial-Literacy_Cover-1536x864.jpg",
    category: "all",
    keywords: ["Financial", "Literacy", "Money"]
  },
  {
    title: "FOREX Trading",
    description: "Foreign exchange market trading",
    imageUrl: "/src/assets/micro_courses/FOREX-1.png",
    category: "all",
    keywords: ["Forex", "Trading"]
  },
  {
    title: "Fundamental Analysis",
    description: "Stock analysis fundamentals",
    imageUrl: "/src/assets/micro_courses/Fundamental-Analysis-1536x864.png",
    category: "all",
    keywords: ["Analysis", "Stock"]
  },
  {
    title: "Insurance Planning",
    description: "Comprehensive insurance planning guide",
    imageUrl: "/src/assets/micro_courses/Insurance-Planning--1536x864.png",
    category: "all",
    keywords: ["Insurance", "Planning"]
  },
  {
    title: "IPO Investment",
    description: "Initial public offering investment strategies",
    imageUrl: "/src/assets/micro_courses/IPO-1-1536x845.png",
    category: "all",
    keywords: ["IPO", "Investment"]
  },
  {
    title: "Retirement Planning",
    description: "Secure your financial future",
    imageUrl: "/src/assets/micro_courses/Retirement-Planning-Cover-1-1536x864.png",
    category: "all",
    keywords: ["Retirement", "Planning"]
  },
  {
    title: "Simplifying Money",
    description: "Easy money management concepts",
    imageUrl: "/src/assets/micro_courses/Simplifying-Money-Cover-1536x864.jpg",
    category: "all",
    keywords: ["Money", "Management"]
  },
  {
    title: "Technical Analysis",
    description: "Advanced technical analysis techniques",
    imageUrl: "/src/assets/micro_courses/Technical-Analysis-1-1536x864.png",
    category: "all",
    keywords: ["Technical", "Analysis"]
  },
  {
    title: "Understanding Mutual Funds",
    description: "Mutual fund investment guide",
    imageUrl: "/src/assets/micro_courses/Understanding-Mutual-Funds-Risks-1536x864.png",
    category: "all",
    keywords: ["Mutual Funds", "Investment"]
  }
];

const filterKeywords = [
  "Stock", "Bond", "Crypto", "Derivatives", "Insurance", "Mutual Funds", "Retirement", "IPO", "Analysis", "Money", "Forex"
];

const AllCourses = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Prefer env override if provided; falls back to localhost
  const apiBaseUrl = useMemo(() => import.meta?.env?.VITE_API_BASE_URL || "http://localhost:5000", []);

  useEffect(() => {
    let isMounted = true;
    async function load() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(`${apiBaseUrl}/api/courses?category=all`);
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        const data = await res.json();
        if (isMounted) setCourses(Array.isArray(data) ? data : fallbackCourses);
      } catch (err) {
        console.error("Error fetching courses:", err);
        if (isMounted) {
          setError("Unable to load courses right now.");
          setCourses(fallbackCourses);
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

  const filteredCourses = selectedFilter === 'All'
    ? courses
    : courses.filter((course) => {
        const keywords = course.keywords || [];
        if (selectedFilter === 'Mutual Funds') {
          return keywords.some(keyword => 
            keyword.toLowerCase().includes('mutual') && keyword.toLowerCase().includes('fund')
          );
        }
        return keywords.some(keyword => 
          keyword.toLowerCase().includes(selectedFilter.toLowerCase())
        );
      });

  const openModal = (course) => {
    setModalImg(course.imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImg(null);
  };

  return (
    <div className="relative container mx-auto p-4 min-h-screen pt-32 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* SVG Dot Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23f1f5f9\' fill-opacity=\'0.4\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50 pointer-events-none"></div>

      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse pointer-events-none" style={{ animationDelay: '2s' }}></div>

      {/* Filter Bar */}
      <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-600 bg-clip-text text-transparent text-center">All Courses</h2>
      <div className="mb-8 flex flex-wrap gap-3 items-center justify-center">
        <span className="font-semibold mr-2">Filter:</span>
        <button
          className={`px-4 py-1 rounded-full border transition-all duration-200 shadow-sm ${selectedFilter === 'All' ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-blue-700 border-blue-700 hover:bg-blue-100'}`}
          onClick={() => setSelectedFilter('All')}
        >
          All
        </button>
        {filterKeywords.map((keyword) => (
          <button
            key={keyword}
            className={`px-4 py-1 rounded-full border transition-all duration-200 shadow-sm ${selectedFilter === keyword ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-blue-700 border-blue-700 hover:bg-blue-100'}`}
            onClick={() => setSelectedFilter(keyword)}
          >
            {keyword}
          </button>
        ))}
      </div>

      {/* Download Buttons */}
      {/* <div className="mb-6">
        <h2 className="text-2xl font-bold">Download</h2>
        <button className="mt-2 mr-2 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800">Download Android App</button>
        <button className="mt-2 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800">Download iOS App</button>
      </div> */}

      {/* Loading State */}
      {isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {Array.from({ length: 12 }).map((_, idx) => (
            <div key={`skeleton-${idx}`} className="flex flex-col items-center bg-white rounded-2xl shadow-md p-2 max-w-xs mx-auto animate-pulse">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {filteredCourses.map((course, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white rounded-2xl shadow-md p-2 transition-transform duration-200 hover:scale-105 hover:shadow-xl max-w-xs mx-auto cursor-pointer"
              onClick={() => openModal(course)}
          >
            <img
                src={course.imageUrl}
                alt={course.title}
              className="object-contain rounded-lg border border-gray-100 shadow-sm"
            />
              <div className="mt-2 text-center">
                <h3 className="font-semibold text-sm text-gray-800">{course.title}</h3>
                {course.description && (
                  <p className="text-xs text-gray-600 mt-1">{course.description}</p>
                )}
              </div>
          </div>
        ))}
      </div>
      )}

      {/* Empty State */}
      {!isLoading && !error && filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No courses found for the selected filter.</p>
        </div>
      )}

      {/* Modal/Lightbox */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl w-full flex justify-center"
            onClick={(e) => e.stopPropagation()}
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

export default AllCourses;
