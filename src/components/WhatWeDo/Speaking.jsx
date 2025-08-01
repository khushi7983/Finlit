import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, Users, TrendingUp, Zap, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Speaking = () => {
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const getYoutubeThumbnail = (videoId) =>
    `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  const speakers = [
    {
      id: 1,
      name: "Anshul Gupta",
      title: "Co-Founder, Wint Wealth",
      videoId: "xp1y9g-KrXQ",
      topic: "Fixed Income Investing",
      duration: "25 min",
      category: "Investment"
    },
    {
      id: 2,
      name: "John Jordan",
      title: "Executive Director, BC Digital Trust",
      videoId: "xp1y9g-KrXQ",
      topic: "Digital Trust Ecosystems",
      duration: "32 min",
      category: "Technology"
    },
    {
      id: 3,
      name: "Mac Gardner",
      title: "CEO, FinLit Tech",
      videoId: "xp1y9g-KrXQ",
      topic: "FinTech Literacy",
      duration: "28 min",
      category: "FinTech"
    },
    {
      id: 4,
      name: "Khadija Khartit",
      title: "Managing Director, IFS Advisory",
      videoId: "xp1y9g-KrXQ",
      topic: "Islamic Finance",
      duration: "35 min",
      category: "Finance"
    },
    {
      id: 5,
      name: "Sarah Johnson",
      title: "Blockchain Analyst, CryptoVision",
      videoId: "xp1y9g-KrXQ",
      topic: "Cryptocurrency Investment",
      duration: "40 min",
      category: "Crypto"
    },
    {
      id: 6,
      name: "Michael Chen",
      title: "Senior Financial Advisor",
      videoId: "xp1y9g-KrXQ",
      topic: "Retirement Planning",
      duration: "30 min",
      category: "Planning"
    }
  ];

  const openModal = (videoId) => setSelectedVideo(videoId);
  const closeModal = () => setSelectedVideo(null);

  return (
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
            <Users className="w-5 h-5 text-yellow-600" />
            <span className="text-sm font-semibold text-yellow-700">Financial Education</span>
          </div>
          
          <h2 
            className={`text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-slate-800">Financially Speaking</span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Episodes
            </span>
          </h2>
          
          <p 
            className={`text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Dive into insightful conversations with industry leaders and experts. 
            <span className="font-semibold text-slate-700"> Click on a speaker to watch their episode!</span>
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={speaker.id}
              className={`group cursor-pointer transition-all duration-700 perspective-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${800 + index * 100}ms` }}
              onClick={() => openModal(speaker.videoId)}
            >
              <div
                className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-white/50 transition-all duration-500 group-hover:shadow-2xl group-hover:bg-white/90 group-hover:-translate-y-2 group-hover:scale-[1.04] group-hover:border-yellow-400 group-hover:shadow-yellow-200 animate-card-float"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden group-hover:animate-tilt-glow">
                  <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center relative">
                    <img 
                      src={getYoutubeThumbnail(speaker.videoId)}
                      alt={speaker.name}
                      className="w-full h-full object-cover absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                        <PlayCircle className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-yellow-500/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full transform group-hover:scale-110 transition-transform duration-300">
                      {speaker.category}
                    </span>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-slate-900/70 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {speaker.duration}
                    </span>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                    {speaker.name}
                  </h3>
                  <p className="text-slate-600 text-sm mb-2">
                    {speaker.title}
                  </p>
                  <p className="text-slate-700 text-sm font-semibold mb-4">
                    {speaker.topic}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      Watch episode
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
            Want to explore more financial insights and expert talks?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/all-videos')}
              className="group bg-gradient-to-r from-slate-800 to-slate-900 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <TrendingUp className="w-5 h-5" />
              Explore More Episodes
              <div className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            {/* Animated floating shapes in modal background */}
            <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-br from-yellow-400 to-pink-400 rounded-full opacity-30 blur-2xl animate-float1 pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-56 h-56 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-30 blur-2xl animate-float2 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-pink-400 to-yellow-400 rounded-full opacity-20 blur-2xl animate-float3 pointer-events-none" style={{ transform: 'translate(-50%, -50%)' }} />
            
            <motion.div
              className="bg-slate-900 text-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl relative"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 p-2 hover:bg-slate-800 rounded-full transition-colors duration-200 ripple z-10"
                onClick={closeModal}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <iframe
                className="w-full aspect-video"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                frameBorder="0"
                allowFullScreen
                title="Video Modal"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Styles */}
      <style jsx>{`
        .animate-card-float {
          animation: cardFloat 3s ease-in-out infinite alternate;
        }
        @keyframes cardFloat {
          0% { transform: translateY(0); }
          100% { transform: translateY(-8px); }
        }
        .group:hover .group-hover\\:animate-tilt-glow {
          animation: tiltGlow 0.7s cubic-bezier(.25,.46,.45,.94) both;
          box-shadow: 0 0 32px 8px #fde04799;
          border-color: #fde047;
        }
        @keyframes tiltGlow {
          0% { transform: rotateY(0deg) scale(1); }
          60% { transform: rotateY(8deg) scale(1.05); }
          100% { transform: rotateY(0deg) scale(1.04); }
        }
        .animate-float1 { animation: float1 7s ease-in-out infinite alternate; }
        .animate-float2 { animation: float2 9s ease-in-out infinite alternate; }
        .animate-float3 { animation: float3 11s ease-in-out infinite alternate; }
        @keyframes float1 { 0% { transform: translateY(0); } 100% { transform: translateY(-20px) scale(1.1); } }
        @keyframes float2 { 0% { transform: translateY(0); } 100% { transform: translateY(24px) scale(1.08); } }
        @keyframes float3 { 0% { transform: translateY(0); } 100% { transform: translateY(-16px) scale(1.12); } }
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
    </section>
  );
};

export default Speaking;