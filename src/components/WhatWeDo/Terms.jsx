import React, { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, BookOpen, TrendingUp, Zap } from "lucide-react";
import algo_13 from '../../assets/finTerms/algo-13.png';
import Aquisition from '../../assets/finTerms/Aquisition.png';
import coll_5 from '../../assets/finTerms/coll - 5.png';
import deb_4 from '../../assets/finTerms/deb - 4.png';
import fed_7 from '../../assets/finTerms/fed - 7.png';
import fin_11 from '../../assets/finTerms/fin- 11.png';
import fixed_12 from '../../assets/finTerms/fixed-12.png';
import fomc_9 from '../../assets/finTerms/fomc - 9.png';
import fomc_10 from '../../assets/finTerms/fomc - 10.png';
import nav_6 from '../../assets/finTerms/nav - 6.png';
import Nostro_1 from '../../assets/finTerms/Nostro - 1.png';
import share_14 from '../../assets/finTerms/share- 14.png';
import skew_8 from '../../assets/finTerms/skew - 8.png';
import volfo_3 from '../../assets/finTerms/volfo - 3.png';

// Sample financial terms data - replace with your actual images
const finTerms = [
  {
    id: 1,
    title: "Acquisition",
    image: Aquisition,
    category: "Corporate Finance",
    description: "The process of one company purchasing most or all of another company's shares to gain control"
  },
  {
    id: 2,
    title: "Algorithmic Trading",
    image: algo_13,
    category: "Trading",
    description: "Automated trading using pre-programmed instructions based on variables like time, price, and volume"
  },
  {
    id: 3,
    title: "Collateral",
    image: coll_5,
    category: "Banking",
    description: "An asset that a borrower offers to a lender to secure a loan"
  },
  {
    id: 4,
    title: "Debenture",
    image: deb_4,
    category: "Investment",
    description: "A type of debt instrument that is not secured by physical assets or collateral"
  },
  {
    id: 5,
    title: "Federal Reserve",
    image: fed_7,
    category: "Economics",
    description: "The central banking system of the United States"
  },
  {
    id: 6,
    title: "Financial Planning",
    image: fin_11,
    category: "Finance",
    description: "The process of estimating capital requirements and determining how to finance them"
  },
  {
    id: 7,
    title: "Fixed Deposit",
    image: fixed_12,
    category: "Banking",
    description: "A financial instrument provided by banks with a higher rate of interest than savings accounts"
  },
  {
    id: 8,
    title: "FOMC",
    image: fomc_9,
    category: "Economics",
    description: "Federal Open Market Committee - the monetary policymaking body of the Federal Reserve"
  },
  {
    id: 9,
    title: "FOMC",
    image: fomc_10,
    category: "Economics",
    description: "Federal Open Market Committee - the monetary policymaking body of the Federal Reserve"
  },
  {
    id: 10,
    title: "Navigation",
    image: nav_6,
    category: "Finance",
    description: "The process of guiding financial decisions effectively"
  },
  {
    id: 11,
    title: "Nostro",
    image: Nostro_1,
    category: "Banking",
    description: "A foreign bank account maintained by a domestic bank"
  },
  {
    id: 12,
    title: "Share",
    image: share_14,
    category: "Investment",
    description: "A unit of ownership in a company or financial asset"
  },
  {
    id: 13,
    title: "Skew",
    image: skew_8,
    category: "Trading",
    description: "A measure of the asymmetry of the probability distribution of returns"
  },
  {
    id: 14,
    title: "Volatility",
    image: volfo_3,
    category: "Trading",
    description: "A statistical measure of the dispersion of returns for a given security or market index"
  }
];

const categories = ["All", "Corporate Finance", "Trading", "Banking", "Investment", "Economics", "Finance"];

const Terms = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredTerms, setFilteredTerms] = useState(finTerms);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredTerms(finTerms);
    } else {
      setFilteredTerms(finTerms.filter(term => term.category === activeCategory));
    }
  }, [activeCategory]);

  const openModal = (term, index) => {
    setSelectedTerm(term);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedTerm(null);
    document.body.style.overflow = 'unset';
  };

  const navigateModal = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredTerms.length 
      : (currentIndex - 1 + filteredTerms.length) % filteredTerms.length;
    
    setCurrentIndex(newIndex);
    setSelectedTerm(filteredTerms[newIndex]);
  };

  const handleKeyDown = (e) => {
    if (!selectedTerm) return;
    
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
  }, [selectedTerm, currentIndex, filteredTerms]);

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
            <h2 
              className={`text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                FinLit Terms
              </span>
            </h2>

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
            {filteredTerms.map((term, index) => (
              <div
                key={term.id}
                className={`group cursor-pointer transition-all duration-700 perspective-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${800 + index * 100}ms` }}
                onClick={() => openModal(term, index)}
              >
                <div
                  className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-white/50 transition-all duration-500 group-hover:shadow-2xl group-hover:bg-white/90 group-hover:-translate-y-2 group-hover:scale-[1.04] group-hover:border-yellow-400 group-hover:shadow-yellow-200 animate-card-float"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Image Container */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center relative group-hover:animate-tilt-glow">
                    <img src={term.image} alt={term.title} className="w-full h-full object-cover absolute inset-0" />
                    <div className="text-center p-6 relative z-10">
                      <div className="relative">
                        {/* <TrendingUp className="w-16 h-16 text-yellow-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" /> */}
                        {/* <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300">
                          <Zap className="w-4 h-4 text-white m-1" />
                        </div> */}
                      </div>
                      {/* <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                        {term.title}
                      </h3> */}
                      {/* <div className="w-12 h-1 bg-yellow-500 mx-auto rounded-full group-hover:w-16 transition-all duration-300"></div> */}
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-yellow-500/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                      {term.category}
                    </span>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm leading-relaxed">{term.modalContent}</p>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                    {term.title}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-2">
                    {term.modalContent}
                  </p>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      Click to explore
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-12">
                      <ChevronRight className="w-4 h-4 text-white" />
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
              Want to learn more financial terms and concepts?
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
      {selectedTerm && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in duration-300 overflow-hidden"
          onClick={closeModal}
        >
          {/* Animated floating shapes in modal background */}
          <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-yellow-400 to-pink-400 rounded-full opacity-30 blur-2xl animate-float1 pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-56 h-56 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-30 blur-2xl animate-float2 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-pink-400 to-yellow-400 rounded-full opacity-20 blur-2xl animate-float3 pointer-events-none" style={{ transform: 'translate(-50%, -50%)' }} />
          <div
            className="bg-blue-900 text-white rounded-2xl max-w-2xl w-full p-6 relative animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button with ripple */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 hover:bg-blue-800 rounded-full transition-colors duration-200 ripple"
            >
              <X className="w-6 h-6" />
            </button>
            {/* Full Image Only with animation */}
            <div className="flex justify-center items-center" style={{ minHeight: '350px' }}>
              <img
                src={selectedTerm.image}
                alt={selectedTerm.title}
                className="max-h-[70vh] max-w-full rounded-xl shadow-lg border border-white/20 object-contain bg-white animate-modal-img-float"
                style={{ background: 'white' }}
              />
            </div>
            {/* Navigation Buttons with ripple */}
            <div className="flex items-center justify-center mt-6">
              <button
                onClick={() => navigateModal('prev')}
                className="p-2 hover:bg-blue-800 rounded-full transition-colors duration-200 disabled:opacity-50 ripple"
                disabled={filteredTerms.length <= 1}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => navigateModal('next')}
                className="p-2 hover:bg-blue-800 rounded-full transition-colors duration-200 disabled:opacity-50 ml-4 ripple"
                disabled={filteredTerms.length <= 1}
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

export default Terms;