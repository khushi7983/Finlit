import React, { useState, useEffect } from "react";

// Import award images
import ficciFloAward from '../../assets/accolades/FICCI-Flo-Award.jpg';
import daeguAward from '../../assets/accolades/Daegu-Digital-Innovation-Directors-Award.jpg';
import dstIitAward from '../../assets/accolades/DST-IIT-DELHI-SILVER-AWARD.jpg';
import upGauravSamman from '../../assets/accolades/UP-GAURAV-SAMMAN-NEW-3.jpg';
import womenExcellence from '../../assets/accolades/Women-of-Excellence-WEF-2022-2-1.jpg';
import ciiPwcAward from '../../assets/accolades/CII-PWC-Top-100-Women-in-Innovation-Neha-Misra-1-1024x724.jpg';
import aktuIncubation from '../../assets/accolades/aktu-incubation.jpg';
import tie2 from '../../assets/accolades/Tie-2.jpg';

const Awards = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [particles, setParticles] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoadStates, setImageLoadStates] = useState({});

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

  const awards = [
    {
      id: 1,
      title: "FICCI FLO Award",
      year: "2023",
      image: ficciFloAward,
      color: "from-gray-900 via-blue-500 to-gray-600",
      bgHover: "bg-white/95",
      delay: "0s",
    },
    {
      id: 2,
      title: "Daegu Digital Innovation Director's Award",
      year: "2023",
      image: daeguAward,
      color: "from-gray-900 via-blue-500 to-gray-600",
      bgHover: "bg-gray-50/95",
      delay: "0.2s",
    },
    {
      id: 3,
      title: "DST IIT Delhi Silver Award",
      year: "2022",
      image: dstIitAward,
      color: "from-gray-900 via-blue-500 to-gray-600",
      bgHover: "bg-indigo-50/95",
      delay: "0.4s",
    },
    {
      id: 4,
      title: "UP Gaurav Samman",
      year: "2023",
      image: upGauravSamman,
      color: "from-gray-900 via-blue-500 to-gray-600",
      bgHover: "bg-white/95",
      delay: "0.6s",
    },
    {
      id: 5,
      title: "Women of Excellence Award",
      year: "2022",
      image: womenExcellence,
      color: "from-gray-900 via-blue-500 to-gray-600",
      bgHover: "bg-gray-50/95",
      delay: "0.8s",
    },
    {
      id: 6,
      title: "CII-PwC Top 100 Women in Innovation",
      year: "2022",
      image: ciiPwcAward,
      color: "from-gray-900 via-blue-500 to-gray-600",
      bgHover: "bg-indigo-50/95",
      delay: "1.0s",
    },
    {
      id: 7,
      title: "AKTU Incubation Recognition",
      year: "2023",
      image: aktuIncubation,
      color: "from-gray-900 via-blue-500 to-gray-600",
      bgHover: "bg-white/95",
      delay: "1.2s",
    },
    {
      id: 8,
      title: "TIE Recognition",
      year: "2022",
      image: tie2,
      color: "from-gray-900 via-blue-500 to-gray-600",
      bgHover: "bg-gray-50/95",
      delay: "1.4s",
    },
  ];

  const handleImageLoad = (awardId) => {
    setImageLoadStates((prev) => ({ ...prev, [awardId]: "loaded" }));
  };

  const handleImageError = (awardId) => {
    setImageLoadStates((prev) => ({ ...prev, [awardId]: "error" }));
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-gray-100 to-indigo-100 py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden mt-14">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob-3d"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob-3d animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-yellow-600/20 rounded-full mix-blend-multiply filter blur-xl animate-blob-3d animation-delay-4000"></div>
      </div>

      {/* Interactive Mouse Cursor Effect */}
      <div
        className="fixed w-6 h-6 bg-yellow-500/30 rounded-full pointer-events-none z-50 mix-blend-multiply transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: hoveredCard !== null ? "scale(3)" : "scale(1)",
        }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
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
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                Awards & Recognition
              </span>
            </h1>
          </div>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {awards.map((award) => (
            <div
              key={award.id}
              className={`group relative transform transition-all duration-700 hover:scale-105 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? award.delay : "0s",
                animationDelay: award.delay,
              }}
              onMouseEnter={() => setHoveredCard(award.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 ${award.bgHover} overflow-hidden`}
              >
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.5),transparent_50%)] animate-pulse-slow"></div>
                </div>

                {/* Gradient Border Animation */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${award.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm animate-rotate-border`}
                ></div>
                <div className="absolute inset-[2px] bg-white rounded-2xl -z-10"></div>

                {/* Award Image */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={award.image}
                    alt={award.title}
                    className={`w-full h-full object-contain p-2 transition-transform duration-500 ${
                      imageLoadStates[award.id] === "error" ? "hidden" : ""
                    }`}
                    onLoad={() => handleImageLoad(award.id)}
                    onError={() => handleImageError(award.id)}
                  />
                  {/* Fallback for failed images */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center ${
                      imageLoadStates[award.id] === "error" ? "" : "hidden"
                    }`}
                  >
                    <div className="text-center animate-pulse">
                      <p className="text-gray-500 text-sm">{award.title}</p>
                    </div>
                  </div>
                  {/* Loading state */}
                  {!imageLoadStates[award.id] && (
                    <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-400 mx-auto mb-2"></div>
                        <p className="text-gray-500 text-sm">Loading...</p>
                      </div>
                    </div>
                  )}
                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                      {award.year}
                    </span>
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors group-hover:text-gray-700">
                    {award.title}
                  </h3>
                  <a
                    href={award.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center bg-gradient-to-r ${award.color} text-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-110`}
                  >
                    Open in New Tab
                  </a>
                </div>

                {/* Hover Effect Line */}
                <div
                  className={`absolute bottom-0 left-0 w-full h-1 bg-yellow-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left animate-wave`}
                ></div>
              </div>
            </div>
          ))}
        </div>


      </div>

      {/* Keyframes */}
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
          .animate-float-particle { animation: float-particle 6s ease-in-out infinite; }
          .animate-wave { animation: wave 2s ease-in-out; }
          .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
          .animate-float { animation: float 3s ease-in-out infinite; }
          .animate-float-delayed { animation: float-delayed 3s ease-in-out infinite 1.5s; }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }
        `}
      </style>
    </section>
  );
};

export default Awards;