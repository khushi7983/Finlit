import React, { useState, useEffect } from "react";
import { Video, Users, Mic, GraduationCap, Play, ExternalLink, AlertCircle, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MediaPresence = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [particles, setParticles] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [mediaTypes, setMediaTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Icon mapping function
  const getIconComponent = (iconType) => {
    switch (iconType) {
      case "Video":
        return <Video className="w-8 h-8" />;
      case "Users":
        return <Users className="w-8 h-8" />;
      case "Mic":
        return <Mic className="w-8 h-8" />;
      case "GraduationCap":
        return <GraduationCap className="w-8 h-8" />;
      default:
        return <Video className="w-8 h-8" />;
    }
  };

  // Styling configuration (frontend only)
  const stylingConfig = [
    {
      color: "from-gray-900 via-blue-500 to-gray-600",
      bgHover: "bg-white/95",
      iconColor: "text-blue-600",
      delay: "0s",
    },
    {
      color: "from-gray-900 via-blue-500 to-gray-600",
      bgHover: "bg-gray-50/95",
      iconColor: "text-blue-600",
      delay: "0.2s",
    },
    {
      color: "from-gray-900 via-blue-500 to-gray-600",
      bgHover: "bg-indigo-50/95",
      iconColor: "text-blue-600",
      delay: "0.4s",
    },
    {
      color: "from-gray-900 via-blue-500 to-gray-600",
      bgHover: "bg-white/95",
      iconColor: "text-blue-600",
      delay: "0.6s",
    },
  ];

  // Fallback data in case API fails
  const fallbackMediaTypes = [
    {
      id: 1,
      title: "Interview",
      iconType: "Video",
      description: "Exclusive interviews and media appearances",
      count: "12+ Features",
      link: "/interview",
    },
    {
      id: 2,
      title: "Conference",
      iconType: "Users",
      description: "Speaking engagements and panel discussions",
      count: "8+ Events",
      link: "/conference",
    },
    {
      id: 3,
      title: "Podcast",
      iconType: "Mic",
      description: "Audio conversations and thought leadership",
      count: "15+ Episodes",
      link: "/podcast",
    },
    {
      id: 4,
      title: "Lecture Series",
      iconType: "GraduationCap",
      description: "Educational presentations and workshops",
      count: "6+ Sessions",
      link: "/lecture",
    },
  ];

  // Fetch media presence data from API
  useEffect(() => {
    const fetchMediaPresence = async () => {
      try {
        setIsLoading(true);
        const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
        const response = await fetch(`${apiBaseUrl}/api/media-presence`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data && data.length > 0) {
          // Map API data with styling and icon property for compatibility
          const mappedData = data.map((media, index) => ({
            ...media,
            id: media._id, // Map MongoDB _id to id for compatibility
            icon: getIconComponent(media.iconType), // Generate icon component
            ...stylingConfig[index % stylingConfig.length], // Apply styling based on index
          }));
          setMediaTypes(mappedData);
        } else {
          // Use fallback data with styling if API returns empty array
          const fallbackWithStyling = fallbackMediaTypes.map((media, index) => ({
            ...media,
            icon: getIconComponent(media.iconType),
            ...stylingConfig[index % stylingConfig.length],
          }));
          setMediaTypes(fallbackWithStyling);
        }
        setError(null);
      } catch (err) {
        console.error('Error fetching media presence:', err);
        setError(err.message);
        // Use fallback data with styling on error
        const fallbackWithStyling = fallbackMediaTypes.map((media, index) => ({
          ...media,
          icon: getIconComponent(media.iconType),
          ...stylingConfig[index % stylingConfig.length],
        }));
        setMediaTypes(fallbackWithStyling);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMediaPresence();
  }, []);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          delay: Math.random() * 10,
          duration: Math.random() * 15 + 10,
        });
      }
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);



  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-gray-100 to-indigo-100 py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* EXACT FRATERNITY MOVING COLOR BLOBS */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob-3d"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob-3d animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-yellow-600/20 rounded-full mix-blend-multiply filter blur-xl animate-blob-3d animation-delay-4000"></div>
      </div> */}

      {/* Interactive Mouse Cursor Effect */}
      {/* <div
        className="fixed w-6 h-6 bg-yellow-500/30 rounded-full pointer-events-none z-50 mix-blend-multiply transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: hoveredCard !== null ? "scale(3)" : "scale(1)",
        }}
      /> */}

      {/* Floating Particles */}
      {/* {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed w-2 h-2 bg-yellow-500/40 rounded-full pointer-events-none animate-float-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.id * 0.5}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))} */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                Our Media Presence
              </span>
            </h1>
          </div>
        </div>

        {/* Cards Grid with Enhanced Hovering */}
        
        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="group relative transform transition-all duration-700 h-full">
                {/* Match exact card structure with skeleton */}
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden h-full flex flex-col cursor-pointer">
                  {/* Icon Skeleton */}
                  <div className="relative mb-6 perspective-1000">
                    <div className="w-8 h-8 bg-gray-300 rounded animate-pulse"></div>
                  </div>

                  {/* Content Skeleton with exact text heights */}
                  <div className="text-center flex-grow flex flex-col justify-center">
                    {/* Title - text-xl height */}
                    <div className="h-7 bg-gray-300 rounded mb-3 mx-auto w-3/4 animate-pulse"></div>
                    {/* Count - text-lg height */}
                    <div className="h-6 bg-gray-300 rounded mb-4 mx-auto w-1/2 animate-pulse"></div>
                    {/* Description - text-base height, 2 lines */}
                    <div className="h-5 bg-gray-300 rounded mx-auto w-full animate-pulse"></div>
                    <div className="h-5 bg-gray-300 rounded mt-2 mx-auto w-5/6 animate-pulse"></div>
                  </div>

                  {/* Button skeleton */}
                  <div className="absolute bottom-4 right-4">
                    <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error State */}
        {error && !isLoading && (
          <div className="text-center py-12">
            <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Unable to Load Media Presence</h3>
            <p className="text-gray-600 mb-4">
              {error}. Showing default media information.
            </p>
          </div>
        )}

        {/* Media Types Grid */}
        {!isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaTypes.map((media, index) => (
            <div
              key={media.id}
              className={`group relative transform transition-all duration-700 hover:scale-105 h-full ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? media.delay : "0s",
                animationDelay: media.delay,
              }}
              onMouseEnter={() => setHoveredCard(media.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => navigate(media.link)}
            >
              {/* Card with Morphing Effect */}
              <div className={`relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 ${media.bgHover} overflow-hidden cursor-pointer h-full flex flex-col`}>
                
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.5),transparent_50%)] animate-pulse-slow`}></div>
                </div>

                {/* Gradient Border Animation with Rotation */}
                <div className={`absolute inset-0 bg-gradient-to-r ${media.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm animate-rotate-border`}></div>
                <div className="absolute inset-[2px] bg-white rounded-2xl -z-10"></div>

                {/* Enhanced Icon */}
                <div className="relative mb-6 perspective-1000">
                  <div className={`${media.iconColor} transform group-hover:scale-110  transition-all duration-500`}>
                    {media.icon}
                  </div>

                  {/* Orbit Animation */}
                  {/* <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 border border-yellow-400/30 rounded-full animate-spin-slow"></div>
                    <div className="absolute top-2 left-1/2 w-2 h-2 bg-yellow-500 rounded-full -translate-x-1/2 animate-orbit"></div>
                  </div> */}
                </div>

                {/* Content */}
                <div className="text-center flex-grow flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors overflow-hidden group-hover:text-gray-700">
                    {media.title}
                  </h3>
                  <p className={`text-lg font-semibold bg-gradient-to-r ${media.color} bg-clip-text text-transparent mb-4`}>
                    {media.count}
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed transition-colors group-hover:text-gray-700">
                    {media.description}
                  </p>
                </div>

                {/* Hover Effect Line with Wave Animation */}
                {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left animate-wave"></div> */}

                {/* Enhanced Hover Button */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 scale-75 group-hover:translate-y-0 group-hover:scale-100">
                  <button className={`p-2 rounded-full bg-gradient-to-r ${media.color} text-white shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-125`}>
                    <Play className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          </div>
        )}

        {/* Stats Section - EMOJIS COMPLETELY REMOVED */}
        <div className={`mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-lg p-6 rounded-2xl relative overflow-hidden transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`} style={{ transitionDelay: "0.8s" }}>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center relative z-10">
            {[
              { value: "40+", label: "Total Appearances" },
              { value: "50K+", label: "Total Views" },
              { value: "25+", label: "Media Partners" },
              { value: "95%", label: "Positive Feedback" },
            ].map((stat, index) => (
              <div key={index} className="group relative">
                <div className="text-3xl font-bold text-yellow-400 mb-2 transform group-hover:scale-110 transition-all duration-700">
                  {stat.value}
                </div>
                <div className="text-gray-200 text-sm uppercase tracking-wide group-hover:text-gray-400 transition-all duration-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Floating Elements */}
          <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/20 rounded-full animate-float-delayed"></div>
        </div>
      </div>

      {/* EXACT FRATERNITY KEYFRAMES */}
      <style>
        {`
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

          @keyframes float-particle {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.3; }
            25% { transform: translateY(-20px) translateX(10px) rotate(90deg); opacity: 0.7; }
            50% { transform: translateY(-40px) translateX(-5px) rotate(180deg); opacity: 1; }
            75% { transform: translateY(-20px) translateX(-10px) rotate(270deg); opacity: 0.7; }
          }

          @keyframes orbit {
            0% { transform: rotate(0deg) translateX(8px) rotate(0deg); }
            100% { transform: rotate(360deg) translateX(8px) rotate(-360deg); }
          }

          @keyframes wave {
            0%, 100% { transform: scaleX(0) scaleY(1); }
            50% { transform: scaleX(1) scaleY(1.2); }
          }

          @keyframes pulse-slow {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.8; }
          }

          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
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
          .animate-float-particle { animation: float-particle 6s ease-in-out infinite; }
          .animate-orbit { animation: orbit 3s linear infinite; }
          .animate-wave { animation: wave 2s ease-in-out; }
          .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
          .animate-spin-slow { animation: spin-slow 8s linear infinite; }
          .animate-float { animation: float 3s ease-in-out infinite; }
          .animate-float-delayed { animation: float-delayed 3s ease-in-out infinite 1.5s; }
          .perspective-1000 { perspective: 1000px; }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }
        `}
      </style>
    </section>
  );
};

export default MediaPresence;
