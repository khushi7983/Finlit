import React, { useState, useEffect } from "react";
import { Play, Headphones, Clock, User } from "lucide-react";

const Podcast = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Fetch podcasts from API
  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/podcasts');
        const data = await response.json();
        console.log('API Response:', data);
        
        if (data.success && data.data) {
          setPodcasts(data.data);
          console.log('Loaded podcasts:', data.data.length);
        } else if (Array.isArray(data)) {
          setPodcasts(data);
        }
      } catch (error) {
        console.error('Error fetching podcasts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPodcasts();
  }, []);

  // Auto-generate YouTube thumbnail from audio URL
  const getYouTubeThumbnail = (audioUrl) => {
    if (!audioUrl) {
      return 'https://via.placeholder.com/400x256/64748b/ffffff?text=Podcast+Image';
    }
    
    // Extract video ID from different YouTube URL formats
    let videoId = null;
    
    if (audioUrl.includes('youtube.com/watch?v=')) {
      videoId = audioUrl.split('v=')[1].split('&')[0];
    } else if (audioUrl.includes('youtu.be/')) {
      videoId = audioUrl.split('youtu.be/')[1].split('?')[0];
    } else if (audioUrl.includes('youtube.com/embed/')) {
      videoId = audioUrl.split('embed/')[1].split('?')[0];
    }
    
    if (videoId) {
      // Try maxresdefault first, fallback to hqdefault if needed
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    }
    
    // Fallback for non-YouTube URLs
    return 'https://via.placeholder.com/400x256/64748b/ffffff?text=Podcast+Image';
  };

  // Play podcast audio
  const playPodcast = (audioUrl, podcastId) => {
    if (audioUrl) {
      // If it's a Spotify/Apple/Google podcast URL, open directly
      if (audioUrl.includes('spotify') || audioUrl.includes('apple') || audioUrl.includes('google')) {
        window.open(audioUrl, '_blank', 'noopener,noreferrer');
      } else {
        // For direct audio files or YouTube links
        window.open(audioUrl, '_blank', 'noopener,noreferrer');
      }
    } else {
      alert('Audio URL not available for this podcast');
    }
  };

  if (loading) {
    return (
      <section className="relative bg-gradient-to-br from-slate-50 via-gray-100 to-indigo-100 py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden mt-14">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-semibold text-gray-600">Loading podcasts...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-gray-100 to-indigo-100 py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden mt-14">
      {/* Animated Background Elements - SLATE COLORS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-slate-700/20 rounded-full mix-blend-multiply filter blur-xl animate-blob-3d"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-slate-800/20 rounded-full mix-blend-multiply filter blur-xl animate-blob-3d animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-slate-900/20 rounded-full mix-blend-multiply filter blur-xl animate-blob-3d animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                Podcast Appearances
              </span>
            </h1>
          </div>
        </div>

        {/* Podcast Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {podcasts.map((podcast) => (
            <div
              key={podcast._id || podcast.id}
              className={`group relative transform transition-all duration-700 hover:scale-105 cursor-pointer ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? (podcast.delay || "0s") : "0s",
                animationDelay: podcast.delay || "0s",
              }}
              onMouseEnter={() => setHoveredCard(podcast._id || podcast.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => playPodcast(podcast.audioUrl, podcast._id)}
            >
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden">
                {/* Animated Background Pattern - SLATE */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(71,85,105,0.5),transparent_50%)] animate-pulse-slow"></div>
                </div>

                {/* Gradient Border Animation - SLATE GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm animate-rotate-border"></div>
                <div className="absolute inset-[2px] bg-white rounded-2xl -z-10"></div>

                {/* Thumbnail with Auto-Generated YouTube Thumbnail */}
                <div className="relative">
                  <img
                    src={podcast.thumbnail || getYouTubeThumbnail(podcast.audioUrl)}
                    alt={podcast.title}
                    className="w-full h-64 object-cover rounded-t-2xl"
                    onError={(e) => {
                      // First fallback: try hqdefault if maxresdefault fails
                      if (e.target.src.includes('maxresdefault')) {
                        const videoId = e.target.src.split('/vi/')[1].split('/')[0];
                        e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                      } else {
                        // Final fallback: placeholder
                        e.target.src = 'https://via.placeholder.com/400x256/64748b/ffffff?text=Podcast+Image';
                      }
                    }}
                  />
                  
                  {/* Play Overlay - SLATE THEME */}
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-t-2xl group-hover:bg-opacity-60 transition-all duration-300">
                    <div className="text-center transform group-hover:scale-110 transition-transform duration-300">
                      {/* SLATE Play Button */}
                      <div className="bg-slate-800 hover:bg-slate-900 rounded-full p-5 mb-3 mx-auto w-20 h-20 flex items-center justify-center shadow-2xl transition-colors duration-300">
                        <Play className="w-10 h-10 text-white fill-white ml-1" />
                      </div>
                      <p className="text-white font-bold text-lg">Listen Now</p>
                      <p className="text-white/80 text-sm mt-1">Play Podcast</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors group-hover:text-gray-700">
                    {podcast.title}
                  </h3>

                  {/* Podcast Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 flex-wrap">
                    {podcast.host && (
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{podcast.host}</span>
                      </div>
                    )}
                    {podcast.duration && (
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{podcast.duration}</span>
                      </div>
                    )}
                    {podcast.listens && (
                      <div className="flex items-center gap-1">
                        <Headphones className="w-4 h-4" />
                        <span>{podcast.listens}</span>
                      </div>
                    )}
                  </div>

                  {podcast.description && (
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {podcast.description}
                    </p>
                  )}

                  {podcast.category && (
                    <span className="inline-block bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-full mb-4">
                      {podcast.category}
                    </span>
                  )}

                  {/* SLATE Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      playPodcast(podcast.audioUrl, podcast._id);
                    }}
                    className="w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 hover:from-slate-800 hover:via-slate-700 hover:to-slate-800 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Play className="w-5 h-5 fill-white" />
                    <span>Listen Now</span>
                  </button>
                </div>

                {/* SLATE Hover Effect Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left animate-wave"></div>
              </div>
            </div>
          ))}
        </div>

        {/* No podcasts message */}
        {podcasts.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No podcasts available at the moment.</p>
          </div>
        )}

        {/* Additional Info */}
        <div
          className={`mt-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 shadow-lg overflow-hidden transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
          style={{ transitionDelay: "1s" }}
        >
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-white mb-4">
              About Our Podcast Appearances
            </h3>
            <p className="text-gray-200 leading-relaxed">
              Our team participates in podcast discussions to share insights on financial literacy and investment strategies. Click on any podcast above to listen to the full episode.
            </p>
          </div>
          <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/20 rounded-full animate-float-delayed"></div>
        </div>
      </div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes blob-3d {
          0% { transform: translate(0px, 0px) scale(1) rotateX(0deg) rotateY(0deg); }
          33% { transform: translate(30px, -50px) scale(1.1) rotateX(10deg) rotateY(10deg); }
          66% { transform: translate(-20px, 20px) scale(0.9) rotateX(-10deg) rotateY(-10deg); }
          100% { transform: translate(0px, 0px) scale(1) rotateX(0deg) rotateY(0deg); }
        }

        @keyframes rotate-border {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes wave {
          0%, 100% { transform: scaleX(0) scaleY(1); }
          50% { transform: scaleX(1) scaleY(1.2); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        .animate-blob-3d { animation: blob-3d 8s infinite; }
        .animate-rotate-border { animation: rotate-border 4s linear infinite; }
        .animate-wave { animation: wave 2s ease-in-out; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 3s ease-in-out infinite 1.5s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Podcast;
