import React, { useState, useEffect } from "react";
import { Video, Users, Mic, GraduationCap, Play, ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MediaPresence = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [particles, setParticles] = useState([]);
  const navigate = useNavigate();

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

  const mediaTypes = [
    {
      id: 1,
      title: "Interview",
      icon: <Video className="w-8 h-8" />,
      description: "Exclusive interviews and media appearances",
      count: "12+ Features",
      color: "from-gray-900 via-blue-500 to-gray-600",
      bgHover: "bg-white/95",
      iconColor: "text-blue-600",
      link: "/interview",
    },
    {
      id: 2,
      title: "Conference",
      icon: <Users className="w-8 h-8" />,
      description: "Speaking engagements and panel discussions",
      count: "8+ Events",
      color: "from-gray-900 via-blue-500 to-gray-600",
      bgHover: "bg-gray-50/95",
      iconColor: "text-blue-600",
      link: "/conference",
    },
    {
      id: 3,
      title: "Podcast",
      icon: <Mic className="w-8 h-8" />,
      description: "Audio conversations and thought leadership",
      count: "15+ Episodes",
      color: "from-gray-900 via-blue-500 to-gray-600",
      bgHover: "bg-indigo-50/95",
      iconColor: "text-blue-600",
      link: "/podcast",
    },
    {
      id: 4,
      title: "Lecture Series",
      icon: <GraduationCap className="w-8 h-8" />,
      description: "Educational presentations and workshops",
      count: "6+ Sessions",
      color: "from-gray-900 via-blue-500 to-gray-600",
      bgHover: "bg-white/95",
      iconColor: "text-blue-600",
      link: "/lecture",
    },
  ];

  return (
    <section
      className="relative bg-gradient-to-br from-slate-50 via-gray-100 to-indigo-100 py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-gray-900/20 rounded-full opacity-20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animation: `gentleFloat ${particle.duration}s ease-in-out infinite ${particle.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section with Enhanced Animations */}
        <div className="text-center mb-12 relative">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent relative"
            style={{ animation: "fadeInScale 1.2s ease-out" }}
          >
            Our Media Presence
          </h1>
        </div>

        {/* Cards Grid with Staggered Animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mediaTypes.map((media, index) => (
            <div
              key={media.id}
              className="group relative"
              onMouseEnter={() => setHoveredCard(media.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => navigate(media.link)}
              style={{ animation: `cardEntrance 0.8s ease-out ${index * 0.15}s both` }}
            >
              {/* Animated Glow Effect */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${media.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-all duration-700 blur-sm`}
              ></div>

              {/* Main Card */}
              <div
                className={`group relative overflow-hidden rounded-2xl ${media.bgHover} border border-gray-100 transition-all duration-700 hover:shadow-xl hover:scale-105 cursor-pointer transform-gpu`}
              >
                {/* Animated Background Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${media.color} opacity-0 group-hover:opacity-10 transition-all duration-700`}
                  style={{
                    animation: hoveredCard === media.id ? "backgroundPulse 2s ease-in-out infinite" : "none",
                  }}
                ></div>

                {/* Shimmer Effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 transform translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-[-200%] transition-all duration-1000"
                  style={{ animation: "shimmerMove 2s infinite linear" }}
                ></div>

                {/* Card Content */}
                <div className="relative p-6 z-10">
                  {/* Enhanced Icon Animation */}
                  <div
                    className={`${media.iconColor} mb-6 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 relative`}
                  >
                    <div className="relative">{media.icon}</div>
                  </div>

                  {/* Animated Title */}
                  <h3
                    className="text-xl font-bold text-gray-900 mb-4 transition-colors group-hover:text-gray-700 transform group-hover:translate-x-1 transition-all duration-500"
                  >
                    {media.title}
                  </h3>

                  {/* Description with Smooth Animation */}
                  <p
                    className="text-base text-gray-600 mb-6 leading-relaxed transform group-hover:translate-y-1 transition-all duration-500 group-hover:text-gray-700"
                  >
                    {media.description}
                  </p>

                  {/* Enhanced Count Badge */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-sm font-semibold px-3 py-1 rounded-full ${media.iconColor} bg-white bg-opacity-80 transform group-hover:scale-110 group-hover:shadow-lg transition-all duration-500`}
                    >
                      {media.count}
                    </span>
                    <ExternalLink
                      className="w-5 h-5 text-gray-400 group-hover:text-gray-600 group-hover:rotate-45 group-hover:scale-110 transition-all duration-500"
                    />
                  </div>

                  {/* Enhanced Hover Button */}
                  <div
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-4 scale-75 group-hover:translate-y-0 group-hover:scale-100 rotate-180 group-hover:rotate-0"
                  >
                    <button
                      className={`p-2 rounded-full bg-gradient-to-r ${media.color} text-white shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-125 hover:rotate-12 relative overflow-hidden`}
                    >
                      <Play className="w-4 h-4 relative z-10 transform group-hover:scale-110" />
                    </button>
                  </div>
                </div>

                {/* Enhanced Decorative Elements */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white to-transparent opacity-20 rounded-bl-full transform group-hover:scale-150 group-hover:rotate-45 transition-all duration-700"
                ></div>
                <div
                  className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-gray-200 to-transparent opacity-30 rounded-tr-full transform group-hover:scale-125 group-hover:-rotate-45 transition-all duration-700"
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <div
          className="mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-lg p-6 rounded-2xl relative overflow-hidden"
          style={{ animation: "slideUp 1s ease-out 1s both" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center relative z-10">
            {[
              { value: "40+", label: "Total Appearances", color: "text-yellow-400", hoverColor: "text-gray-300" },
              { value: "50K+", label: "Total Views", color: "text-yellow-400", hoverColor: "text-gray-300" },
              { value: "25+", label: "Media Partners", color: "text-yellow-400", hoverColor: "text-gray-300" },
              { value: "95%", label: "Positive Feedback", color: "text-yellow-400", hoverColor: "text-gray-300" },
            ].map((stat, index) => (
              <div key={index} className="group relative">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 opacity-0 group-hover:opacity-70 group-hover:shadow-lg transition-all duration-500 rounded-lg"
                ></div>
                <div
                  className={`text-3xl font-bold ${stat.color} group-hover:${stat.hoverColor} mb-2 transform group-hover:scale-110 transition-all duration-700 relative z-10`}
                  style={{ animation: `countUp 1.5s ease-out ${1.2 + index * 0.2}s both` }}
                >
                  {stat.value}
                </div>
                <div className="text-gray-200 text-sm uppercase tracking-wide group-hover:text-gray-400 group-hover:translate-y-2 transition-all duration-500 relative z-10">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style>
        {`
          @keyframes gentleFloat {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.2; }
            25% { transform: translateY(-10px) translateX(5px) rotate(90deg); opacity: 0.4; }
            50% { transform: translateY(-20px) translateX(-5px) rotate(180deg); opacity: 0.6; }
            75% { transform: translateY(-10px) translateX(5px) rotate(270deg); opacity: 0.4; }
          }

          @keyframes fadeInScale {
            from { opacity: 0; transform: scale(0.9) translateY(20px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
          }

          @keyframes slideUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes cardEntrance {
            from { opacity: 0; transform: translateY(50px) rotateX(20deg) scale(0.9); }
            to { opacity: 1; transform: translateY(0) rotateX(0deg) scale(1); }
          }

          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          @keyframes backgroundPulse {
            0%, 100% { opacity: 0.1; transform: scale(1); }
            50% { opacity: 0.15; transform: scale(1.02); }
          }

          @keyframes countUp {
            from { opacity: 0; transform: translateY(20px) scale(0.8); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }

          @keyframes shimmerMove {
            0% { transform: translateX(-200%); }
            100% { transform: translateX(200%); }
          }

          .animate-shimmer { animation: shimmerMove 2s infinite linear; }
        `}
      </style>
    </section>
  );
};

export default MediaPresence;