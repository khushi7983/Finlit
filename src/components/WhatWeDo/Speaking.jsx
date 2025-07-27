import React, { useState, useEffect } from 'react';

const Speaking = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const speakers = [
    {
      id: 1,
      name: "Anshul Gupta",
      title: "Co-Founder, Wint Wealth",
      videoId: "YOUR_VIDEO_ID_1",
      thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop&crop=face",
      topic: "Fixed Income Investing",
      duration: "25 min"
    },
    {
      id: 2,
      name: "John Jordan",
      title: "Executive Director, BC Digital Trust",
      videoId: "YOUR_VIDEO_ID_2",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face",
      topic: "Digital Trust Ecosystems",
      duration: "32 min"
    },
    {
      id: 3,
      name: "Mac Gardner",
      title: "CEO, FinLit Tech",
      videoId: "YOUR_VIDEO_ID_3",
      thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=face",
      topic: "FinTech Literacy",
      duration: "28 min"
    },
    {
      id: 4,
      name: "Khadija Khartit",
      title: "Managing Director, IFS Advisory",
      videoId: "YOUR_VIDEO_ID_4",
      thumbnail: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=300&fit=crop&crop=face",
      topic: "Islamic Finance",
      duration: "35 min"
    },
    {
      id: 5,
      name: "Sarah Johnson",
      title: "Blockchain Analyst, CryptoVision",
      videoId: "YOUR_VIDEO_ID_5",
      thumbnail: "https://images.unsplash.com/photo-1494790108755-2616c296c3a6?w=400&h=300&fit=crop&crop=face",
      topic: "Cryptocurrency Investment",
      duration: "40 min"
    },
    {
      id: 6,
      name: "Michael Chen",
      title: "Senior Financial Advisor",
      videoId: "YOUR_VIDEO_ID_6",
      thumbnail: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=300&fit=crop&crop=face",
      topic: "Retirement Planning",
      duration: "30 min"
    }
  ];

  const openModal = (videoId) => {
    setSelectedVideo(videoId);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  const FloatingElements = () => (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/10 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 20 + 10}px`,
            height: `${Math.random() * 20 + 10}px`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${Math.random() * 4 + 2}s`
          }}
        />
      ))}
    </div>
  );

  const SpeakerCard = ({ speaker, index }) => (
    <div
      className={`group relative bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden
                  transform transition-all duration-700 hover:scale-105 hover:-translate-y-4
                  hover:shadow-3xl hover:bg-white cursor-pointer border border-orange-200/50
                  ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
      style={{ 
        transitionDelay: `${index * 200}ms`,
        background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,248,220,0.95) 100%)'
      }}
      onClick={() => openModal(speaker.videoId)}
    >
      {/* Gradient Border Animation */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" 
           style={{ padding: '2px' }}>
        <div className="h-full w-full rounded-3xl bg-white"></div>
      </div>
      
      {/* Card Content */}
      <div className="relative z-10 p-8">
        {/* Video Thumbnail */}
        <div className="relative mb-6 rounded-2xl overflow-hidden shadow-lg">
          <img 
            src={speaker.thumbnail}
            alt={speaker.name}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 w-16 h-16 rounded-full flex items-center justify-center
                           shadow-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
          {/* Duration Badge */}
          <div className="absolute top-3 right-3 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {speaker.duration}
          </div>
        </div>

        {/* Speaker Info */}
        <div className="text-center space-y-3">
          <h3 className="text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
            {speaker.name}
          </h3>
          <p className="text-gray-600 font-medium text-sm leading-relaxed">
            {speaker.title}
          </p>
          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-xl p-3 mt-4">
            <p className="text-orange-800 font-semibold text-lg">
              {speaker.topic}
            </p>
          </div>
        </div>

        {/* Watch Button */}
        <div className="mt-6 text-center">
          <button className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white
                           px-8 py-3 rounded-full font-bold text-lg shadow-xl
                           transform transition-all duration-300 hover:scale-105 hover:shadow-2xl
                           active:scale-95 group-hover:animate-pulse">
            <span className="flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
              Watch Now
            </span>
          </button>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-yellow-400/20 to-orange-500/20 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
    </div>
  );

  const VideoModal = () => {
    if (!selectedVideo) return null;

    return (
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4
                   animate-fade-in"
        onClick={closeModal}
      >
        <div className="relative bg-white rounded-2xl overflow-hidden max-w-6xl w-full max-h-[90vh] 
                        shadow-2xl transform animate-scale-in">
          <button 
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 bg-red-500 hover:bg-red-600 text-white 
                       w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold
                       transition-all duration-200 hover:scale-110 shadow-lg"
          >
            ×
          </button>
          <iframe
            src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
            className="w-full aspect-video"
            frameBorder="0"
            allowFullScreen
            title="Video Player"
          />
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 via-orange-100 to-yellow-200 relative overflow-hidden">
      {/* Floating Background Elements */}
      <FloatingElements />
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-300/30 to-orange-400/30 
                        rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-orange-300/30 to-red-400/30 
                        rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 
                        bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse" 
                        style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        }`}>
          <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 
                         bg-clip-text text-transparent animate-pulse">
            Financially Speaking
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
            Discover expert insights on finance, investments, and wealth building from industry leaders
          </p>
          <div className="mt-8 w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto rounded-full"></div>
        </div>

        {/* Episodes Section */}
        <div className={`mb-12 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Financially Speaking Episodes
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12">
            Watch exclusive interviews and insights from financial experts
          </p>
        </div>

        {/* Speaker Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {speakers.map((speaker, index) => (
            <SpeakerCard key={speaker.id} speaker={speaker} index={index} />
          ))}
        </div>

        {/* Explore More Button */}
        <div className={`text-center transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white
                           px-12 py-4 rounded-full font-bold text-xl shadow-2xl
                           transform transition-all duration-300 hover:scale-105 hover:shadow-3xl
                           active:scale-95 animate-bounce hover:animate-none">
            <span className="flex items-center justify-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              Explore More Episodes
            </span>
          </button>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal />

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes scale-in {
          from { 
            opacity: 0; 
            transform: scale(0.9) translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: scale(1) translateY(0); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.4s ease-out;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
};

export default Speaking;