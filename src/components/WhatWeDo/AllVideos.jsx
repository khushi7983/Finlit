import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

const getYoutubeThumbnail = (videoId) =>
  `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

const speakers = [
  {
    id: 1,
    videoId: "jzGmR51vBts",
    duration: "?"
  },
  {
    id: 2,
    videoId: "brcViwob9fs",
    duration: "?"
  },
  {
    id: 3,
    videoId: "bXyLoXoG0Us",
    duration: "?"
  },
  {
    id: 4,
    videoId: "xp1y9g-KrXQ",
    duration: "25 min"
  },
  {
    id: 5,
    videoId: "xp1y9g-KrXQ",
    duration: "32 min"
  },
  {
    id: 6,
    videoId: "xp1y9g-KrXQ",
    duration: "28 min"
  },
  {
    id: 7,
    videoId: "xp1y9g-KrXQ",
    duration: "35 min"
  },
  {
    id: 8,
    videoId: "xp1y9g-KrXQ",
    duration: "40 min"
  },
  {
    id: 9,
    videoId: "xp1y9g-KrXQ",
    duration: "30 min"
  },
  {
    id: 10,
    videoId: "xp1y9g-KrXQ",
    duration: "27 min"
  },
  {
    id: 11,
    videoId: "xp1y9g-KrXQ",
    duration: "22 min"
  },
  {
    id: 12,
    videoId: "xp1y9g-KrXQ",
    duration: "18 min"
  },
  {
    id: 13,
    videoId: "xp1y9g-KrXQ",
    duration: "33 min"
  }
];

const AllVideos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openModal = (videoId) => setSelectedVideo(videoId);
  const closeModal = () => setSelectedVideo(null);

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 md:py-24 overflow-hidden min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23f1f5f9\' fill-opacity=\'0.4\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="container mx-auto px-2 md:px-4 lg:px-0 w-full">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            <span className="text-slate-800">All Financially Speaking</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent animate-pulse">
              Videos
            </span>
          </h2>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 w-full mx-auto"
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
          {speakers.map((speaker) => (
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
              className="group cursor-pointer max-w-xs w-full h-[420px] mx-auto"
            >
              <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-100/80 rounded-2xl overflow-hidden shadow-xl border border-blue-200/60 transition-all duration-500 group-hover:shadow-2xl group-hover:scale-105 group-hover:bg-gradient-to-tr group-hover:from-blue-200 group-hover:via-indigo-100 group-hover:to-blue-300 flex flex-col h-full w-full">
                <div className="flex-1 flex flex-col items-center justify-center p-8">
                  <img
                    src={getYoutubeThumbnail(speaker.videoId)}
                    alt={`Video ${speaker.id}`}
                    className="w-56 h-56 rounded-2xl mb-6 object-cover border-4 border-blue-100 shadow"
                  />
                  <span className="inline-block bg-blue-100 text-blue-700 text-base font-semibold px-4 py-2 rounded-full mb-4">{speaker.duration}</span>
                </div>
                <div className="text-center pb-8">
                  <button
                    className="inline-flex items-center gap-2 bg-blue-500 text-white px-7 py-3 rounded-full text-base font-semibold shadow hover:bg-blue-600 transition-all duration-200"
                    onClick={() => openModal(speaker.videoId)}
                  >
                    <PlayCircle className="w-6 h-6" />
                    Watch Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
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

export default AllVideos; 