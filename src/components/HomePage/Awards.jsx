import React, { useState, useEffect } from 'react';
import { Trophy, Award, Star, Medal, ArrowLeft, ExternalLink, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Import award images
import ficciFloAward from '../../assets/accolades/FICCI-Flo-Award.jpg';
import ficci2 from '../../assets/accolades/FICCI-2.jpg';
import daeguAward from '../../assets/accolades/Daegu-Digital-Innovation-Directors-Award.jpg';
import daegu2 from '../../assets/accolades/Daegu-2.jpg';
import dstIitAward from '../../assets/accolades/DST-IIT-DELHI-SILVER-AWARD.jpg';
import nehaCertificate from '../../assets/accolades/Crt_Ms.-Neha-1-1_pages-to-jpg-0001-1087x1536.jpg';
import tie2 from '../../assets/accolades/Tie-2.jpg';
import upGauravSamman from '../../assets/accolades/UP-GAURAV-SAMMAN-NEW-3.jpg';
import upGauravSamman1 from '../../assets/accolades/UP-GAURAV-SAMMAN-1.jpg';
import aktuIncubation from '../../assets/accolades/aktu-incubation.jpg';
import womenExcellence from '../../assets/accolades/Women-of-Excellence-WEF-2022-2-1.jpg';
import ciiPwcAward from '../../assets/accolades/CII-PWC-Top-100-Women-in-Innovation-Neha-Misra-1-1024x724.jpg';

const Awards = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoadStates, setImageLoadStates] = useState({});

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const awards = [
    {
      id: 1,
      title: "FICCI FLO Award",
      year: "2023",
      organization: "FICCI Ladies Organization",
      description: "Recognized for outstanding contribution to women empowerment and financial literacy",
      image: ficciFloAward,
      category: "Women Empowerment",
      altText: "FICCI FLO Award Certificate"
    },
    {
      id: 2,
      title: "Daegu Digital Innovation Director's Award",
      year: "2023",
      organization: "Daegu Metropolitan City",
      description: "Awarded for innovative digital solutions in financial education",
      image: daeguAward,
      category: "Digital Innovation",
      altText: "Daegu Digital Innovation Award"
    },
    {
      id: 3,
      title: "DST IIT Delhi Silver Award",
      year: "2022",
      organization: "Department of Science & Technology",
      description: "Excellence in technology-driven financial education initiatives",
      image: dstIitAward,
      category: "Technology Innovation",
      altText: "DST IIT Delhi Silver Award Certificate"
    },
    {
      id: 4,
      title: "UP Gaurav Samman",
      year: "2023",
      organization: "Government of Uttar Pradesh",
      description: "State recognition for contribution to financial literacy in UP",
      image: upGauravSamman,
      category: "State Recognition",
      altText: "UP Gaurav Samman Award"
    },
    {
      id: 5,
      title: "Women of Excellence Award",
      year: "2022",
      organization: "World Economic Forum",
      description: "Global recognition for women leadership in fintech education",
      image: womenExcellence,
      category: "Global Recognition",
      altText: "Women of Excellence Award Certificate"
    },
    {
      id: 6,
      title: "CII-PwC Top 100 Women in Innovation",
      year: "2022",
      organization: "CII & PwC",
      description: "Featured among top 100 innovative women entrepreneurs",
      image: ciiPwcAward,
      category: "Innovation Leadership",
      altText: "CII-PwC Top 100 Women in Innovation Award"
    },
    {
      id: 7,
      title: "AKTU Incubation Recognition",
      year: "2023",
      organization: "AKTU",
      description: "Recognized for fostering innovation in educational technology",
      image: aktuIncubation,
      category: "Educational Innovation",
      altText: "AKTU Incubation Recognition Certificate"
    },
    {
      id: 8,
      title: "TIE Recognition",
      year: "2022",
      organization: "The Indus Entrepreneurs",
      description: "Awarded for entrepreneurial excellence in fintech",
      image: tie2,
      category: "Entrepreneurship",
      altText: "TIE Recognition Award"
    }
  ];

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
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Home
          </button>
          
          <div className="text-center mb-8">
            <h1 className={`text-5xl font-bold text-gray-900 mb-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Our <span className="text-[#FACF07] animate-pulse">Awards</span> & Recognition
            </h1>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Celebrating our achievements and recognition in the field of financial literacy and education
            </p>
          </div>
        </div>

        {/* Stats */}
        {/* <div className={`grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { value: "8+", label: "Total Awards", color: "text-yellow-600", icon: "🏆" },
            { value: "3+", label: "Years of Excellence", color: "text-blue-600", icon: "⭐" },
            { value: "100%", label: "Success Rate", color: "text-green-600", icon: "✅" },
            { value: "10K+", label: "Lives Impacted", color: "text-purple-600", icon: "👥" }
          ].map((stat, index) => (
            <div 
              key={index}
              className={`bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-bounce`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`text-3xl font-bold ${stat.color} mb-2 animate-pulse`}>{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
              <div className="text-2xl mt-2">{stat.icon}</div>
            </div>
          ))}
        </div> */}

        {/* Awards Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {awards.map((award, index) => (
            <div 
              key={award.id} 
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
                    imageLoadStates[award.id] === 'error' ? 'hidden' : ''
                  }`}
                  onLoad={() => handleImageLoad(award.id)}
                  onError={() => handleImageError(award.id)}
                />
                
                {/* Fallback for failed images */}
                <div className={`absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center ${
                  imageLoadStates[award.id] === 'error' ? '' : 'hidden'
                }`}>
                  <div className="text-center animate-pulse">
                    <Trophy className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500 text-sm">{award.title}</p>
                  </div>
                </div>
                
                {/* Loading state */}
                {!imageLoadStates[award.id] && (
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
