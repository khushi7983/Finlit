import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, BookOpen, TrendingUp } from "lucide-react";
import algo from "../../assets/finTerms/algo-13.png"
// Sample data - replace with your actual images
const finTerms = [
  {
    id: 1,
    title: "Algo Trading",
    image: { algo },
    category: "Trading",
    description: "Automated trading using pre-programmed instructions"
  },
  {
    id: 2,
    title: "Mutual Funds",
    image: "/api/placeholder/400/300",
    category: "Investment",
    description: "Pooled investment vehicle managed by professionals"
  },
  {
    id: 3,
    title: "SIP",
    image: "/api/placeholder/400/300",
    category: "Investment",
    description: "Systematic Investment Plan for regular investing"
  },
  {
    id: 4,
    title: "Credit Score",
    image: "/api/placeholder/400/300",
    category: "Credit",
    description: "Numerical representation of creditworthiness"
  },
  {
    id: 5,
    title: "Compound Interest",
    image: "/api/placeholder/400/300",
    category: "Finance",
    description: "Interest calculated on initial principal and accumulated interest"
  },
  {
    id: 6,
    title: "Bull Market",
    image: "/api/placeholder/400/300",
    category: "Market",
    description: "Period of rising stock prices and investor optimism"
  },
  {
    id: 7,
    title: "Bear Market",
    image: "/api/placeholder/400/300",
    category: "Market",
    description: "Period of declining stock prices and investor pessimism"
  },
  {
    id: 8,
    title: "Diversification",
    image: "/api/placeholder/400/300",
    category: "Investment",
    description: "Risk management strategy mixing investments"
  },
  {
    id: 9,
    title: "Equity",
    image: "/api/placeholder/400/300",
    category: "Investment",
    description: "Ownership interest in a company through stocks"
  },
  {
    id: 10,
    title: "Fixed Deposit",
    image: "/api/placeholder/400/300",
    category: "Banking",
    description: "Time deposit with fixed interest rate"
  },
  {
    id: 11,
    title: "Inflation",
    image: "/api/placeholder/400/300",
    category: "Economics",
    description: "General increase in prices and fall in purchasing value"
  },
  {
    id: 12,
    title: "Portfolio",
    image: "/api/placeholder/400/300",
    category: "Investment",
    description: "Collection of financial investments"
  },
  {
    id: 13,
    title: "Liquidity",
    image: "/api/placeholder/400/300",
    category: "Finance",
    description: "Ease of converting assets to cash"
  },
  {
    id: 14,
    title: "Risk Assessment",
    image: "/api/placeholder/400/300",
    category: "Finance",
    description: "Evaluation of potential investment risks"
  },
  {
    id: 15,
    title: "Tax Planning",
    image: "/api/placeholder/400/300",
    category: "Tax",
    description: "Strategy to minimize tax liability legally"
  }
];

const categories = ["All", "Investment", "Trading", "Credit", "Finance", "Market", "Banking", "Economics", "Tax"];

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

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* Main Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 md:py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23f1f5f9\' fill-opacity=\'0.4\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

        {/* Floating Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <BookOpen className="w-5 h-5 text-yellow-600" />
              <span className="text-sm font-semibold text-yellow-700">Financial Education</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              <span className="text-slate-800">FinTerm of the</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent animate-pulse">
                Day
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Master financial concepts with our interactive term cards. 
              <span className="font-semibold text-slate-700"> Click to explore in detail!</span>
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-slate-800 to-slate-900 text-white shadow-lg scale-105'
                    : 'bg-white/60 backdrop-blur-sm text-slate-700 hover:bg-white/80 hover:scale-105'
                } border border-white/50 shadow-md`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            variants={containerVariant}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {filteredTerms.map((term, index) => (
              <motion.div
                key={term.id}
                variants={cardVariant}
                className="group cursor-pointer"
                onClick={() => openModal(term, index)}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-white/50 transition-all duration-500 group-hover:shadow-2xl group-hover:bg-white/90">
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                      <div className="text-center p-6">
                        <TrendingUp className="w-16 h-16 text-yellow-500 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">{term.title}</h3>
                        <div className="w-12 h-1 bg-yellow-500 mx-auto rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-500/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {term.category}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-sm leading-relaxed">{term.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                      {term.title}
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-2">
                      {term.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
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
                <motion.div
                  className="w-4 h-4"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedTerm && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl relative"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-200">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">{selectedTerm.title}</h3>
                  <span className="inline-block bg-yellow-500/20 text-yellow-700 text-sm font-semibold px-3 py-1 rounded-full mt-2">
                    {selectedTerm.category}
                  </span>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors duration-200"
                >
                  <X className="w-6 h-6 text-slate-600" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-8">
                <div className="aspect-[16/10] bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center mb-6">
                  <div className="text-center p-8">
                    <TrendingUp className="w-32 h-32 text-yellow-500 mx-auto mb-6" />
                    <h2 className="text-4xl font-bold text-slate-800 mb-4">{selectedTerm.title}</h2>
                    <div className="w-24 h-2 bg-yellow-500 mx-auto rounded-full"></div>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto">
                    {selectedTerm.description}
                  </p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between p-6 bg-slate-50 border-t border-slate-200">
                <button
                  onClick={() => navigateModal('prev')}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow hover:shadow-md transition-all duration-200"
                  disabled={filteredTerms.length <= 1}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </button>
                
                <span className="text-sm text-slate-600">
                  {currentIndex + 1} of {filteredTerms.length}
                </span>
                
                <button
                  onClick={() => navigateModal('next')}
                  className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow hover:shadow-md transition-all duration-200"
                  disabled={filteredTerms.length <= 1}
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Styles */}
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default Terms;