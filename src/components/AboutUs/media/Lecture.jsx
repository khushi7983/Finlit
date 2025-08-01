import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, BookOpen } from "lucide-react";

// Custom YouTube Icon SVG
const YouTubeIcon = () => (
  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a2.972 2.972 0 0 0-2.098-2.122c-1.774-.506-8.904-.506-8.904-.506s-7.13 0-8.904.506a2.972 2.972 0 0 0-2.098 2.122C1 8.46 1 12 1 12s0 3.54.492 5.814a2.972 2.972 0 0 0 2.098 2.122c1.774.506 8.904.506 8.904.506s7.13 0 8.904-.506a2.972 2.972 0 0 0 2.098-2.122C24 15.54 24 12 24 12s0-3.54-.502-5.814zM10 15.5v-7l6 3.5-6 3.5z" />
  </svg>
);

// Sample lectures data - replace with actual data or fetch from an API
const lectures = [
  {
    id: 1,
    title: "Live Financial Literacy Lecture",
    image: "https://via.placeholder.com/150", // Replace with an actual lecture image if available
    category: "Live Lectures",
    description: "Join our live lecture on financial literacy to enhance your understanding of personal finance.",
    videoLink: "https://www.youtube.com/live/rcacz5NJ0SA?si=HdoC3KcIQ9QACtrr"
  },
  // Add more lectures here in the future
];

const categories = ["All", "Live Lectures", "Recorded Lectures"];

const Lectures = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedLecture, setSelectedLecture] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredLectures, setFilteredLectures] = useState(lectures);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredLectures(lectures);
    } else {
      setFilteredLectures(lectures.filter(lecture => lecture.category === activeCategory));
    }
  }, [activeCategory]);

  const openModal = (lecture, index) => {
    setSelectedLecture(lecture);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedLecture(null);
    document.body.style.overflow = 'unset';
  };

  const navigateModal = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredLectures.length 
      : (currentIndex - 1 + filteredLectures.length) % filteredLectures.length;
    
    setCurrentIndex(newIndex);
    setSelectedLecture(filteredLectures[newIndex]);
  };

  const handleKeyDown = (e) => {
    if (!selectedLecture) return;
    
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowRight') {
      navigateModal('next');
    } else if (e.key === 'ArrowLeft') {
      navigateModal('prev');
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedLecture, currentIndex, filteredLectures]);

  return (
    <>
      {/* Main Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 md:py-24 overflow-hidden min-h-screen">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23f1f5f9\' fill-opacity=\'0.4\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <div 
              className={`inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6 transition-all duration-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
            >
              <BookOpen className="w-5 h-5 text-yellow-600" />
              <span className="text-sm font-semibold text-yellow-700">Lecture Series</span>
            </div>
            
            <h2 
              className={`text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="text-slate-800">Lecture</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                Series
              </span>
            </h2>
            
            <p 
              className={`text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Explore our collection of educational lectures. 
              <span className="font-semibold text-slate-700"> Click any lecture to watch now!</span>
            </p>
          </div>

          {/* Category Filter */}
          <div 
            className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-slate-800 to-slate-900 text-white shadow-lg scale-105'
                    : 'bg-white/60 backdrop-blur-sm text-slate-700 hover:bg-white/80'
                } border border-white/50 shadow-md`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredLectures.map((lecture, index) => (
              <div
                key={lecture.id}
                className={`group cursor-pointer transition-all duration-700 perspective-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
                onClick={() => openModal(lecture, index)}
              >
                <div
                  className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-white/50 transition-all duration-500 group-hover:shadow-2xl group-hover:bg-white/90 group-hover:-translate-y-2 group-hover:scale-[1.04] group-hover:border-yellow-400 group-hover:shadow-yellow-200 animate-card-float"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden group-hover:animate-tilt-glow">
                    <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center relative">
                      <img src={lecture.image} alt={lecture.title} className="w-full h-full object-cover absolute inset-0 transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-gradient-to-r from-red-600 to-red-800 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                          <YouTubeIcon />
                        </div>
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-yellow-500/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                        {lecture.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-6 bg-white">
                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                      {lecture.title}
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                      {lecture.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-slate-500">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        Click to watch
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-12">
                        <ChevronRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div 
            className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-lg text-slate-600 mb-6">
              Want to explore more lectures or download our app?
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
      </section>

      {/* Modal */}
      {selectedLecture && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-300 overflow-hidden"
          onClick={closeModal}
        >
          {/* Animated floating shapes in modal background */}
          <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-yellow-400 to-pink-400 rounded-full opacity-30 blur-2xl animate-float1 pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-56 h-56 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-30 blur-2xl animate-float2 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-pink-400 to-yellow-400 rounded-full opacity-20 blur-2xl animate-float3 pointer-events-none" style={{ transform: 'translate(-50%, -50%)' }} />
          <div
            className="bg-transparent text-white rounded-2xl max-w-4xl w-full p-6 relative animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button with ripple */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 hover:bg-gray-800 rounded-full transition-colors duration-200 ripple"
            >
              <X className="w-6 h-6" />
            </button>
            {/* Content based on lecture type */}
            {selectedLecture.videoLink ? (
              <div className="flex flex-col items-center" style={{ minHeight: 'calc(100vh - 200px)', maxHeight: '720px' }}>
                <div className="flex items-center mb-4">
                  <YouTubeIcon />
                  <span className="ml-2 text-lg font-semibold">YouTube Video</span>
                </div>
                <iframe
                  src="https://www.youtube.com/embed/rcacz5NJ0SA"
                  title={selectedLecture.title}
                  className="w-full h-full rounded-xl shadow-lg border border-white/20"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ aspectRatio: '16/9' }}
                ></iframe>
              </div>
            ) : (
              <div className="flex justify-center items-center" style={{ minHeight: '350px' }}>
                <img
                  src={selectedLecture.image}
                  alt={selectedLecture.title}
                  className="max-h-[70vh] max-w-full rounded-xl shadow-lg border border-white/20 object-contain bg-white animate-modal-img-float"
                  style={{ background: 'white' }}
                />
              </div>
            )}
            {/* Navigation Buttons with ripple */}
            <div className="flex items-center justify-center mt-6">
              <button
                onClick={() => navigateModal('prev')}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200 disabled:opacity-50 ripple"
                disabled={filteredLectures.length <= 1}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => navigateModal('next')}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-200 disabled:opacity-50 ml-4 ripple"
                disabled={filteredLectures.length <= 1}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .animate-spin.slow {
          animation: spin 8s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-in {
          animation-fill-mode: both;
        }
        
        .fade-in {
          animation: fadeIn 0.3s ease-out;
        }
        
        .zoom-in-95 {
          animation: zoomIn95 0.3s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes zoomIn95 {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        /* Card floating animation */
        .animate-card-float {
          animation: cardFloat 3s ease-in-out infinite alternate;
        }
        @keyframes cardFloat {
          0% { transform: translateY(0); }
          100% { transform: translateY(-8px); }
        }
        /* 3D tilt and glow on hover */
        .group:hover .group-hover\:animate-tilt-glow {
          animation: tiltGlow 0.7s cubic-bezier(.25,.46,.45,.94) both;
          box-shadow: 0 0 32px 8px #fde04799;
          border-color: #fde047;
        }
        @keyframes tiltGlow {
          0% { transform: rotateY(0deg) scale(1); }
          60% { transform: rotateY(8deg) scale(1.05); }
          100% { transform: rotateY(0deg) scale(1.04); }
        }
        /* Modal image floating */
        .animate-modal-img-float {
          animation: modalImgFloat 4s ease-in-out infinite alternate;
        }
        @keyframes modalImgFloat {
          0% { transform: scale(1) translateY(0); }
          100% { transform: scale(1.04) translateY(-12px); }
        }
        /* Floating modal background shapes */
        .animate-float1 { animation: float1 7s ease-in-out infinite alternate; }
        .animate-float2 { animation: float2 9s ease-in-out infinite alternate; }
        .animate-float3 { animation: float3 11s ease-in-out infinite alternate; }
        @keyframes float1 { 0% { transform: translateY(0); } 100% { transform: translateY(-20px) scale(1.1); } }
        @keyframes float2 { 0% { transform: translateY(0); } 100% { transform: translateY(24px) scale(1.08); } }
        @keyframes float3 { 0% { transform: translateY(0); } 100% { transform: translateY(-16px) scale(1.12); } }
        /* Ripple effect for buttons */
        .ripple { position: relative; overflow: hidden; }
        .ripple:after {
          content: "";
          display: block;
          position: absolute;
          border-radius: 50%;
          width: 100%; height: 100%;
          top: 0; left: 0;
          pointer-events: none;
          background: rgba(255,255,255,0.3);
          opacity: 0;
          transform: scale(0.8);
          transition: opacity 0.4s, transform 0.4s;
        }
        .ripple:active:after {
          opacity: 1;
          transform: scale(1.2);
          transition: 0s;
        }
      `}</style>
    </>
  );
};

export default Lectures;