import React, { useState, useEffect } from 'react';
import { Video, Users, Mic, GraduationCap, Play, ExternalLink, Sparkles } from 'lucide-react';

const MediaPresence = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [particles, setParticles] = useState([]);

  // Generate floating particles
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
          duration: Math.random() * 15 + 10
        });
      }
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  // Track mouse movement for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const mediaTypes = [
    {
      id: 1,
      title: "Interview",
      icon: <Video className="w-8 h-8" />,
      description: "Exclusive interviews and media appearances",
      count: "12+ Features",
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50 hover:bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      id: 2,
      title: "Conference",
      icon: <Users className="w-8 h-8" />,
      description: "Speaking engagements and panel discussions",
      count: "8+ Events",
      color: "from-green-500 to-teal-600",
      bgColor: "bg-green-50 hover:bg-green-100",
      iconColor: "text-green-600"
    },
    {
      id: 3,
      title: "Podcast",
      icon: <Mic className="w-8 h-8" />,
      description: "Audio conversations and thought leadership",
      count: "15+ Episodes",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50 hover:bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      id: 4,
      title: "Lecture Series",
      icon: <GraduationCap className="w-8 h-8" />,
      description: "Educational presentations and workshops",
      count: "6+ Sessions",
      color: "from-indigo-500 to-blue-600",
      bgColor: "bg-indigo-50 hover:bg-indigo-100",
      iconColor: "text-indigo-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 relative overflow-hidden">
      {/* Subtle Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-blue-300 rounded-full opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animation: `gentleFloat ${particle.duration}s ease-in-out infinite ${particle.delay}s`
            }}
          />
        ))}
      </div>

      {/* Interactive Mouse Gradient */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none transition-opacity duration-1000"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)`
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section with Enhanced Animations */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6">
            <Sparkles className="w-6 h-6 text-blue-500 animate-bounce" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <h1 
            className="text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent relative"
            style={{ animation: 'fadeInScale 1.2s ease-out' }}
          >
            Our Media Presence
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent opacity-0 animate-pulse"></div>
          </h1>
          
          <p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transform transition-all duration-700 hover:scale-105 hover:text-gray-800"
            style={{ animation: 'slideUp 1s ease-out 0.3s both' }}
          >
            Discover our diverse media engagements across interviews, conferences, podcasts, and educational series
          </p>
          
          <div 
            className="mt-8 flex justify-center"
            style={{ animation: 'slideUp 1s ease-out 0.6s both' }}
          >
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-shimmer"></div>
            </div>
          </div>
        </div>

        {/* Cards Grid with Staggered Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mediaTypes.map((media, index) => (
            <div
              key={media.id}
              className="group relative"
              onMouseEnter={() => setHoveredCard(media.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                animation: `cardEntrance 0.8s ease-out ${index * 0.15}s both`
              }}
            >
              {/* Animated Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${media.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-all duration-700 blur-sm`}></div>
              
              {/* Main Card */}
              <div className={`group relative overflow-hidden rounded-2xl ${media.bgColor} border border-gray-200 transition-all duration-700 hover:shadow-2xl hover:scale-105 hover:-rotate-1 cursor-pointer transform-gpu`}>
                
                {/* Animated Background Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${media.color} opacity-0 group-hover:opacity-10 transition-all duration-700`}
                     style={{
                       animation: hoveredCard === media.id ? 'backgroundPulse 2s ease-in-out infinite' : 'none'
                     }}>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 transform translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-[-200%] transition-all duration-1000"></div>
                
                {/* Card Content */}
                <div className="relative p-8 z-10">
                  {/* Enhanced Icon Animation */}
                  <div className={`${media.iconColor} mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 relative`}>
                    <div className="relative">
                      {media.icon}
                      <div className={`absolute inset-0 bg-gradient-to-r ${media.color} opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-500 rounded-full`}></div>
                    </div>
                  </div>

                  {/* Animated Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transform group-hover:translate-x-1 transition-all duration-500">
                    {media.title}
                  </h3>

                  {/* Description with Smooth Animation */}
                  <p className="text-gray-600 mb-6 leading-relaxed transform group-hover:translate-y-1 transition-all duration-500 group-hover:text-gray-700">
                    {media.description}
                  </p>

                  {/* Enhanced Count Badge */}
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-semibold px-3 py-1 rounded-full ${media.iconColor} bg-white bg-opacity-80 transform group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}>
                      {media.count}
                    </span>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:rotate-45 group-hover:scale-110 transition-all duration-500" />
                  </div>

                  {/* Enhanced Hover Button */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 scale-75 group-hover:translate-y-0 group-hover:scale-100 rotate-180 group-hover:rotate-0">
                    <button className={`p-2 rounded-full bg-gradient-to-r ${media.color} text-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-125 hover:rotate-12 relative overflow-hidden`}>
                      <Play className="w-4 h-4 relative z-10 transform group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                    </button>
                  </div>
                </div>

                {/* Enhanced Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white to-transparent opacity-20 rounded-bl-full transform group-hover:scale-150 group-hover:rotate-45 transition-all duration-700"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-gray-200 to-transparent opacity-30 rounded-tr-full transform group-hover:scale-125 group-hover:-rotate-45 transition-all duration-700"></div>
                
                {/* Floating Dots Animation */}
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="flex space-x-1">
                    <div className={`w-2 h-2 ${media.bgColor.replace('bg-', 'bg-').replace('-50', '-300')} rounded-full animate-bounce`} style={{ animationDelay: '0s' }}></div>
                    <div className={`w-2 h-2 ${media.bgColor.replace('bg-', 'bg-').replace('-50', '-300')} rounded-full animate-bounce`} style={{ animationDelay: '0.2s' }}></div>
                    <div className={`w-2 h-2 ${media.bgColor.replace('bg-', 'bg-').replace('-50', '-300')} rounded-full animate-bounce`} style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
       <div 
      className="mt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-xl p-12 border border-gray-100 relative overflow-hidden rounded-2xl"
      style={{ animation: 'slideUp 1s ease-out 1s both' }}
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 animate-pulse rounded-2xl"></div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center relative z-10">
        {[
          { value: "40+", label: "Total Appearances", color: "text-blue-600", hoverColor: "text-blue-400" },
          { value: "50K+", label: "Total Views", color: "text-green-600", hoverColor: "text-green-400" },
          { value: "25+", label: "Media Partners", color: "text-orange-600", hoverColor: "text-orange-400" },
          { value: "95%", label: "Positive Feedback", color: "text-indigo-600", hoverColor: "text-indigo-400" }
        ].map((stat, index) => (
          <div key={index} className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 group-hover:opacity-70 group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-500 rounded-lg"></div>
            <div 
              className={`text-4xl font-bold ${stat.color} group-hover:${stat.hoverColor} mb-3 transform group-hover:scale-130 transition-all duration-700 relative z-10`}
              style={{
                animation: `countUp 1.5s ease-out ${1.2 + index * 0.2}s both, numberPulse 3s ease-in-out infinite ${index * 0.5}s`
              }}
            >
              {stat.value}
            </div>
            <div className="text-white text-sm uppercase tracking-wide group-hover:text-gray-200 group-hover:translate-y-2 transition-all duration-500 relative z-10">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes slideUp {
            0% { 
              transform: translateY(20px); 
              opacity: 0; 
            }
            100% { 
              transform: translateY(0); 
              opacity: 1; 
            }
          }

          @keyframes countUp {
            0% { 
              transform: translateY(15px) scale(0.9); 
              opacity: 0; 
            }
            70% { 
              transform: translateY(-5px) scale(1.05); 
              opacity: 1; 
            }
            100% { 
              transform: translateY(0) scale(1); 
              opacity: 1; 
            }
          }

          @keyframes numberPulse {
            0%, 100% { 
              transform: scale(1); 
              opacity: 1; 
            }
            50% { 
              transform: scale(1.05); 
              opacity: 0.9; 
            }
          }

          @keyframes glowPulse {
            0%, 100% { 
              opacity: 0.5; 
              filter: blur(8px); 
            }
            50% { 
              opacity: 0.7; 
              filter: blur(4px); 
            }
          }

          .animate-pulse {
            animation: glowPulse 3s ease-in-out infinite;
          }
        `}
      </style>
    </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes gentleFloat {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
            opacity: 0.2;
          }
          25% { 
            transform: translateY(-10px) translateX(5px) rotate(90deg); 
            opacity: 0.4;
          }
          50% { 
            transform: translateY(-20px) translateX(-5px) rotate(180deg); 
            opacity: 0.6;
          }
          75% { 
            transform: translateY(-10px) translateX(5px) rotate(270deg); 
            opacity: 0.4;
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes cardEntrance {
          from {
            opacity: 0;
            transform: translateY(50px) rotateX(20deg) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg) scale(1);
          }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes backgroundPulse {
          0%, 100% { 
            opacity: 0.1;
            transform: scale(1);
          }
          50% { 
            opacity: 0.15;
            transform: scale(1.02);
          }
        }
        
        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes numberPulse {
          0%, 100% { 
            opacity: 1;
            transform: scale(1);
          }
          50% { 
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default MediaPresence;