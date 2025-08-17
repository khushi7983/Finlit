import React, { useState, useEffect } from 'react';
import { Trophy, Award, Star, Medal, ArrowLeft, ExternalLink, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Awards = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoadStates, setImageLoadStates] = useState({});
  const [awards, setAwards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsVisible(true);
    fetchAwards();
  }, []);

  const fetchAwards = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/awards');
      const data = await response.json();
      
      if (data.success) {
        setAwards(data.data);
      } else {
        setError('Failed to fetch awards');
      }
    } catch (err) {
      console.error('Error fetching awards:', err);
      setError('Error fetching awards');
    } finally {
      setLoading(false);
    }
  };

  const handleImageClick = (award) => {
    setSelectedImage(award);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const openInNewTab = (imageUrl) => {
    window.open(imageUrl, '_blank');
  };

  const handleImageLoad = (awardId) => {
    setImageLoadStates(prev => ({ ...prev, [awardId]: 'loaded' }));
  };

  const handleImageError = (awardId) => {
    setImageLoadStates(prev => ({ ...prev, [awardId]: 'error' }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-8">
            <h1 className={`text-5xl font-bold text-gray-900 mb-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Our <span className="text-[#FACF07] animate-pulse">Awards</span> & Recognition
            </h1>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className={`text-center py-12 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#FACF07] mx-auto mb-4"></div>
            <p className="text-gray-600 text-lg">Loading awards...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className={`text-center py-12 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg max-w-md mx-auto">
              <p className="font-medium">{error}</p>
              <button 
                onClick={fetchAwards}
                className="mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {/* Awards Grid */}
        {!loading && !error && awards.length > 0 && (
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {awards.map((award, index) => (
              <div 
                key={award._id || award.id} 
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 border border-gray-100 group animate-fade-in-up`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Award Image Container */}
                <div className="relative h-64 overflow-hidden bg-gray-100 cursor-pointer" onClick={() => handleImageClick(award)}>
                  {/* Actual Image */}
                  <img 
                    src={award.image} 
                    alt={award.altText}
                    className={`w-full h-full object-contain p-2 hover:scale-110 transition-transform duration-500 ${
                      imageLoadStates[award._id || award.id] === 'error' ? 'hidden' : ''
                    }`}
                    onLoad={() => handleImageLoad(award._id || award.id)}
                    onError={() => handleImageError(award._id || award.id)}
                  />
                  
                  {/* Fallback for failed images */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center ${
                    imageLoadStates[award._id || award.id] === 'error' ? '' : 'hidden'
                  }`}>
                    <div className="text-center animate-pulse">
                      <Trophy className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500 text-sm">{award.title}</p>
                    </div>
                  </div>
                  
                  {/* Loading state */}
                  {!imageLoadStates[award._id || award.id] && (
                    <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FACF07] mx-auto mb-2"></div>
                        <p className="text-gray-500 text-sm">Loading...</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Overlay badges */}
                  <div className="absolute top-4 right-4 animate-bounce" style={{ animationDelay: '1s' }}>
                    <span className="bg-[#FACF07] text-black px-3 py-1 rounded-full text-sm font-semibold shadow-lg hover:scale-110 transition-transform duration-300">
                      {award.year}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-black bg-opacity-80 text-white px-3 py-1 rounded text-xs font-medium hover:scale-110 transition-transform duration-300">
                      {award.category}
                    </span>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="text-center transform scale-0 group-hover:scale-100 transition-transform duration-500">
                      <ExternalLink className="w-8 h-8 text-white mx-auto mb-2 animate-pulse" />
                      <p className="text-white text-sm font-medium">Click to view full size</p>
                    </div>
                  </div>
                </div>
                
                {/* Award Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#FACF07] transition-colors duration-300">{award.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 font-medium">{award.organization}</p>
                  <p className="text-gray-700 leading-relaxed text-sm line-clamp-3">
                    {award.description}
                  </p>
                  
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                    <span className="text-xs text-gray-500 font-medium">Certificate Verified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* No Awards State */}
        {!loading && !error && awards.length === 0 && (
          <div className={`text-center py-12 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gray-100 border border-gray-300 text-gray-700 px-4 py-3 rounded-lg max-w-md mx-auto">
              <p className="font-medium">No awards found</p>
            </div>
          </div>
        )}

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 animate-fade-in"
            onClick={closeModal}
          >
            <div 
              className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-hidden relative animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{selectedImage.title}</h3>
                  <p className="text-gray-600 text-sm">{selectedImage.organization} • {selectedImage.year}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => openInNewTab(selectedImage.image)}
                    className="bg-[#FACF07] text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition-all duration-300 hover:scale-105 text-sm font-medium"
                  >
                    Open in New Tab
                  </button>
                  <button
                    onClick={closeModal}
                    className="bg-gray-200 text-gray-700 p-2 rounded-lg hover:bg-gray-300 transition-all duration-300 hover:scale-110"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              {/* Modal Image */}
              <div className="p-4">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.altText}
                  className="w-full h-auto max-h-[70vh] object-contain animate-fade-in"
                />
              </div>
              
              {/* Modal Footer */}
              <div className="p-4 border-t bg-gray-50">
                <p className="text-gray-700 text-sm">{selectedImage.description}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="bg-[#FACF07] text-black px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                    {selectedImage.category}
                  </span>
                  <span className="text-xs text-gray-500">Certificate Verified</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Additional Recognition */}
        <div className={`mt-16 bg-gradient-to-r from-[#FACF07] to-yellow-400 rounded-2xl p-8 text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-pulse">
            Recognized by Leading Organizations
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Our commitment to financial literacy has been acknowledged by prestigious institutions and government bodies
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {['SEBI', 'NISM', 'NSE Academy', 'PFRDA', 'FICCI', 'CII'].map((org, index) => (
              <div 
                key={org}
                className="bg-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 animate-bounce"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="font-semibold text-gray-900">{org}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Awards;
