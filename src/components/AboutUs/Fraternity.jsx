import React, { useEffect, useRef, useState } from "react";
import { Users, Star, AlertCircle, Loader2 } from "lucide-react";
import neha from "../../assets/members/neha.png";
import dcmishra from "../../assets/members/dcmishra.png";
import archanah from "../../assets/members/archanah.png";
import jimmy from "../../assets/members/jimmy.png";

const Fraternity = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [particles, setParticles] = useState([]);
  const [fraternityMembers, setFraternityMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const sectionRef = useRef(null);
  
  // Styling configuration (frontend only)
  const stylingConfig = [
    {
      color: "from-gray-900 via-blue-500 to-gray-600",
      bgHover: "bg-white/95",
      delay: "0s",
    },
    {
      color: "from-gray-900 via-blue-500 to-gray-600",
      bgHover: "bg-gray-50/95",
      delay: "0.2s",
    },
    {
      color: "from-gray-900 via-blue-500 to-gray-600",
      bgHover: "bg-indigo-50/95",
      delay: "0.4s",
    },
    {
      color: "from-gray-900 via-blue-500 to-gray-600",
      bgHover: "bg-white/95",
      delay: "0.6s",
    },
  ];

  // Fallback data in case API fails
  const fallbackMembers = [
    {
      name: "Neha Misra",
      role: "CEO",
      description: "Visionary leader driving financial literacy innovation",
      imageUrl: neha,
    },
    {
      name: "Dr. D C Misra",
      role: "CTO & CIO",
      description: "Technology strategist and innovation architect",
      imageUrl: dcmishra,
    },
    {
      name: "Jimmy Vishwakarma",
      role: "IT Manager",
      description: "Technical operations and system management",
      imageUrl: jimmy,
    },
    {
      name: "Archana Yadav",
      role: "Executive Assistant",
      description: "Operations coordination and executive support",
      imageUrl: archanah,
    },
  ];

  // Fetch fraternity members from API
  useEffect(() => {
    const fetchFraternityMembers = async () => {
      try {
        setIsLoading(true);
        const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
        const response = await fetch(`${apiBaseUrl}/api/fraternity`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data && data.length > 0) {
          // Map API data with styling and image property for compatibility
          const mappedData = data.map((member, index) => ({
            ...member,
            image: member.imageUrl, // Add image property for existing code compatibility
            ...stylingConfig[index % stylingConfig.length], // Apply styling based on index
          }));
          setFraternityMembers(mappedData);
        } else {
          // Use fallback data with styling if API returns empty array
          const fallbackWithStyling = fallbackMembers.map((member, index) => ({
            ...member,
            image: member.imageUrl,
            ...stylingConfig[index % stylingConfig.length],
          }));
          setFraternityMembers(fallbackWithStyling);
        }
        setError(null);
      } catch (err) {
        console.error('Error fetching fraternity members:', err);
        setError(err.message);
        // Use fallback data with styling on error
        const fallbackWithStyling = fallbackMembers.map((member, index) => ({
          ...member,
          image: member.imageUrl,
          ...stylingConfig[index % stylingConfig.length],
        }));
        setFraternityMembers(fallbackWithStyling);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFraternityMembers();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 2,
          speed: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-br from-slate-50 via-gray-100 to-indigo-100 py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >

      {/* Floating Particles */}
      {/* {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed w-2 h-2 bg-yellow-500/40 rounded-full pointer-events-none animate-float-particle"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            opacity: particle.opacity,
            animationDelay: `${particle.id * 0.5}s`,
            animationDuration: `${particle.speed + 3}s`,
          }}
        />
      ))} */}

      {/* Animated Background Elements with 3D rotation */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-yellow-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob-3d"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-500/20 rounded-full mix-blend-multiply filter blur-xl animate-blob-3d animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-yellow-600/20 rounded-full mix-blend-multiply filter blur-xl animate-blob-3d animation-delay-4000"></div>
      </div> */}

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                Founders of The FinLit Project
              </span>
            </h1>
          </div>
        </div>

        {/* Team Section with Advanced Animations */}
        <div className="mb-12">
          {/* Loading State */}
          {isLoading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="group relative transform transition-all duration-700 h-full">
                  {/* Match exact card structure with skeleton */}
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden h-full flex flex-col">
                    {/* Avatar Skeleton with same structure */}
                    <div className="relative mb-6 perspective-1000">
                      <div className="w-32 h-32 mx-auto rounded-2xl bg-gray-300 p-1 animate-pulse">
                        <div className="w-full h-full bg-gray-200 rounded-2xl"></div>
                      </div>
                    </div>

                    {/* Content Skeleton with exact text heights */}
                    <div className="text-center flex-grow flex flex-col justify-center">
                      {/* Name - text-xl height */}
                      <div className="h-7 bg-gray-300 rounded mb-3 mx-auto w-3/4 animate-pulse"></div>
                      {/* Role - text-lg height */}
                      <div className="h-6 bg-gray-300 rounded mb-4 mx-auto w-1/2 animate-pulse"></div>
                      {/* Description - text-base height, 2 lines */}
                      <div className="h-5 bg-gray-300 rounded mx-auto w-full animate-pulse"></div>
                      <div className="h-5 bg-gray-300 rounded mt-2 mx-auto w-5/6 animate-pulse"></div>
                    </div>

                    {/* Bottom line skeleton */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300 rounded-b-2xl animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Error State */}
          {error && !isLoading && (
            <div className="text-center py-12">
              <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Unable to Load Team Members</h3>
              <p className="text-gray-600 mb-4">
                {error}. Showing default team information.
              </p>
            </div>
          )}

          {/* Team Members Grid */}
          {!isLoading && (
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center ${fraternityMembers.length <= 2 ? 'lg:grid-cols-2 lg:max-w-4xl lg:mx-auto' : 'lg:grid-cols-4'}`}>

              {fraternityMembers.map((member, index) => (
              <div
                key={index}
                className={`group relative transform transition-all duration-700 hover:scale-105 h-full ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
                style={{
                  transitionDelay: isVisible ? member.delay : "0s",
                  animationDelay: member.delay,
                }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card with Morphing Effect */}
                <div
                  className={`relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 ${member.bgHover} overflow-hidden h-full flex flex-col`}
                >
                  {/* Animated Background Pattern */}
                  {/* <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                    <div
                      className={`absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(${member.color
                        .replace("from-", "")
                        .replace("via-", ",")
                        .replace("to-", ",")
                        .split(" ")[0]
                        .replace(/[^0-9,]/g, "")},0.5),transparent_50%)] animate-pulse-slow`}
                    ></div>
                  </div> */}

                  {/* Gradient Border Animation with Rotation */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${member.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm animate-rotate-border`}
                  ></div>
                  <div className="absolute inset-[2px] bg-white rounded-2xl -z-10"></div>

                  {/* Avatar with 3D Flip Effect */}
                  <div className="relative mb-6 perspective-1000">
                    <div
                      className={`w-32 h-32 mx-auto rounded-2xl bg-gradient-to-br ${member.color} p-1 group-hover:scale-110 transition-all duration-500 transform-gpu group-hover:rotate-y-180 preserve-3d`}
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-2xl backface-hidden"
                      />
                      <div
                        className={`absolute inset-1 w-full h-full bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg rotate-y-180 backface-hidden`}
                      >
                        <Users className="w-10 h-10" />
                      </div>
                    </div>

                    {/* Floating Badge with Bounce */}
                    {/* <div className="absolute -top-2 -right-2 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 group-hover:scale-125 transition-all duration-300 animate-bounce-subtle">
                      <Star className="w-5 h-5 text-white fill-current" />
                    </div> */}

                    {/* Orbit Animation */}
                    {/* <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div
                        className={`absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 border border-${member.color
                          .split(" ")[0]
                          .replace("from-", "")}-300/30 rounded-full animate-spin-slow`}
                      ></div>
                      <div
                        className={`absolute top-2 left-1/2 w-2 h-2 bg-${member.color
                          .split(" ")[0]
                          .replace("from-", "")}-500 rounded-full -translate-x-1/2 animate-orbit`}
                      ></div>
                    </div> */}
                  </div>

                  {/* Content with Typewriter Effect */}
                  <div className="text-center flex-grow flex flex-col justify-center">
                    <h3
                      className="text-xl font-bold text-gray-900 mb-3 transition-colors overflow-hidden group-hover:text-gray-700"
                    >
                      <span
                        className="inline-block animate-slide-up-stagger"
                        style={{ animationDelay: "0.1s" }}
                      >
                        {member.name}
                      </span>
                    </h3>
                    <p
                      className={`text-lg font-semibold bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-4 animate-fade-in-delayed`}
                    >
                      {member.role}
                    </p>
                    <p
                      className="text-base text-gray-600 leading-relaxed transition-colors animate-slide-up-delayed group-hover:text-gray-700"
                    >
                      {member.description}
                    </p>
                  </div>

                  {/* Hover Effect Line with Wave Animation */}
                  <div
                    className={`absolute bottom-0 left-0 w-full h-1 bg-${member.color
                      .split(" ")[0]
                      .replace("from-", "")}-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left animate-wave`}
                  ></div>
                </div>
              </div>
              ))}
            </div>
          )}
        </div>

        {/* Quote Section */}
        <div
          className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 text-center text-white shadow-lg overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-repeat"
              ></div>
            </div>

            <div className="relative z-10">
              <div className="text-4xl text-yellow-400 mb-6">"</div>
              <blockquote className="text-xl font-bold italic mb-6 leading-relaxed text-yellow-400">
                Money smart, planet kind, A brighter tomorrow for all mankind!
              </blockquote>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="font-semibold text-yellow-400">The FinLit Fraternity</span>
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/20 rounded-full animate-float-delayed"></div>
          </div>
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

          @keyframes orbit {
            0% { transform: rotate(0deg) translateX(20px) rotate(0deg); }
            100% { transform: rotate(360deg) translateX(20px) rotate(-360deg); }
          }

          @keyframes bounce-subtle {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-3px) rotate(5deg); }
          }

          @keyframes slide-up-stagger {
            0% { transform: translateY(20px); opacity: 0; }
            100% { transform: translateY(0px); opacity: 1; }
          }

          @keyframes fade-in-delayed {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }

          @keyframes slide-up-delayed {
            0% { transform: translateY(10px); opacity: 0; }
            100% { transform: translateY(0px); opacity: 1; }
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
          .animate-bounce-subtle { animation: bounce-subtle 2s ease-in-out infinite; }
          .animate-slide-up-stagger { animation: slide-up-stagger 0.6s ease-out forwards; }
          .animate-fade-in-delayed { animation: fade-in-delayed 0.8s ease-out 0.3s forwards; opacity: 0; }
          .animate-slide-up-delayed { animation: slide-up-delayed 0.8s ease-out 0.5s forwards; opacity: 0; }
          .animate-wave { animation: wave 2s ease-in-out; }
          .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
          .animate-spin-slow { animation: spin-slow 8s linear infinite; }
          .animate-float { animation: float 3s ease-in-out infinite; }
          .animate-float-delayed { animation: float-delayed 3s ease-in-out infinite 1.5s; }
          .perspective-1000 { perspective: 1000px; }
          .preserve-3d { transform-style: preserve-3d; }
          .backface-hidden { backface-visibility: hidden; }
          .rotate-y-180 { transform: rotateY(180deg); }
          .animation-delay-2000 { animation-delay: 2s; }
          .animation-delay-4000 { animation-delay: 4s; }
        `}
      </style>
    </section>
  );
};

export default Fraternity;