import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, Users } from 'lucide-react';
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
      duration: "25 min"
    },
    {
      id: 2,
      name: "John Jordan",
      title: "Executive Director, BC Digital Trust",
      videoId: "xp1y9g-KrXQ",
      topic: "Digital Trust Ecosystems",
      duration: "32 min"
    },
    {
      id: 3,
      name: "Mac Gardner",
      title: "CEO, FinLit Tech",
      videoId: "xp1y9g-KrXQ",
      topic: "FinTech Literacy",
      duration: "28 min"
    },
    {
      id: 4,
      name: "Khadija Khartit",
      title: "Managing Director, IFS Advisory",
      videoId: "xp1y9g-KrXQ",
      topic: "Islamic Finance",
      duration: "35 min"
    },
    {
      id: 5,
      name: "Sarah Johnson",
      title: "Blockchain Analyst, CryptoVision",
      videoId: "xp1y9g-KrXQ",
      topic: "Cryptocurrency Investment",
      duration: "40 min"
    },
    {
      id: 6,
      name: "Michael Chen",
      title: "Senior Financial Advisor",
      videoId: "xp1y9g-KrXQ",
      topic: "Retirement Planning",
      duration: "30 min"
    }
  ];

  const openModal = (videoId) => setSelectedVideo(videoId);
  const closeModal = () => setSelectedVideo(null);

  const SpeakerCard = ({ speaker }) => (
    <div className="w-[280px] h-[370px] flex flex-col justify-between bg-white rounded-2xl shadow-md p-4 transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      <div className="text-center">
        <img
          src={speaker.thumbnail}
          alt={speaker.name}
          className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
        />
        <h3 className="text-lg font-bold text-gray-900">{speaker.name}</h3>
        <p className="text-sm text-gray-500 font-medium">{speaker.title}</p>
        <p className="text-sm text-gray-700 mt-2 font-semibold">{speaker.topic}</p>
      </div>
      <div className="text-center mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600"
          onClick={() => openModal(speaker.videoId)}
        >
          Watch Now
        </button>
      </div>
    </div>
  );

  const VideoModal = () => {
    if (!selectedVideo) return null;
    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
        onClick={closeModal}
      >
        <div className="bg-white p-4 rounded-xl max-w-3xl w-full relative">
          <button
            className="absolute top-2 right-2 text-red-600 font-bold text-xl"
            onClick={closeModal}
          >
            ×
          </button>
          <iframe
            className="w-full aspect-video"
            src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
            frameBorder="0"
            allowFullScreen
            title="Video Modal"
          ></iframe>
        </div>
      </div>
    );
  };

  // Array of dark gradient hover classes
  const hoverGradients = [
    'group-hover:bg-gradient-to-tr group-hover:from-blue-600 group-hover:via-blue-500 group-hover:to-indigo-700',
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 md:py-24 overflow-hidden min-h-screen">
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
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <Users className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">Financially Speaking</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            <span className="text-slate-800">Financially Speaking</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-pulse">
              Episodes
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Dive into insightful conversations with industry leaders and experts. <span className="font-semibold text-slate-700">Click on a speaker to watch their episode!</span>
          </p>
        </motion.div>
        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.2 },
            },
          }}
        >
          {speakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              whileHover={{ y: -8, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer"
            >
              <div className={`bg-gradient-to-br from-blue-50 via-white to-indigo-100/80 rounded-2xl overflow-hidden shadow-xl border border-blue-200/60 transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105 flex flex-col h-full w-full ${hoverGradients[0]}`}>
                <div className="flex-1 flex flex-col items-center justify-center p-6">
                  <img
                    src={getYoutubeThumbnail(speaker.videoId)}
                    alt={speaker.name}
                    className="w-56 h-56 rounded-2xl mb-6 object-cover border-4 border-blue-100 shadow"
                  />
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">{speaker.duration}</span>
                </div>
                <div className="text-center pb-6">
                  <button
                    className="inline-flex items-center gap-2 bg-blue-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow hover:bg-blue-600 transition-all duration-200"
                    onClick={() => openModal(speaker.videoId)}
                  >
                    <PlayCircle className="w-5 h-5" />
                    Watch Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="flex justify-center mt-10">
          <button
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-bold shadow hover:bg-indigo-700 transition-all duration-200"
            onClick={() => navigate('/all-videos')}
          >
            Explore More
          </button>
        </div>
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl relative"
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={e => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 right-2 text-red-600 font-bold text-xl z-10"
                  onClick={closeModal}
                >
                  ×
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
      </div>
    </section>
  );
};

export default Speaking;