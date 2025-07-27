import React, { useEffect, useRef, useState } from "react";
import {
  Users,
  Award,
  Target,
  Lightbulb,
  Sparkles,
  ArrowRight,
  Star,
} from "lucide-react";
import neha from "../../assets/members/neha.png";
import dcmishra from "../../assets/members/dcmishra.png";
import archanah from "../../assets/members/archanah.png";
import jimmy from "../../assets/members/jimmy.png";

// Team member data with actual roles
const fraternityMembers = [
  {
    name: "Neha Misra",
    role: "CEO",
    description: "Visionary leader driving financial literacy innovation",
    image: neha,
    color: "from-purple-500 to-blue-600",
    delay: "0s",
  },
  {
    name: "Dr. D C Misra",
    role: "CTO & CIO",
    description: "Technology strategist and innovation architect",
    image: dcmishra,
    color: "from-blue-500 to-indigo-600",
    delay: "0.2s",
  },
  {
    name: "Jimmy Vishwakarma",
    role: "IT Manager",
    description: "Technical operations and system management",
    image: jimmy,
    color: "from-green-500 to-teal-600",
    delay: "0.4s",
  },
  {
    name: "Archana Yadav",
    role: "Executive Assistant",
    description: "Operations coordination and executive support",
    image: archanah,
    color: "from-pink-500 to-rose-600",
    delay: "0.6s",
  },
];

const pillars = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Collaboration",
    description: "Working together to achieve financial literacy goals",
    color: "from-blue-500 to-purple-600",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation",
    description: "Pioneering new approaches to financial education",
    color: "from-yellow-500 to-orange-600",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Excellence",
    description: "Delivering exceptional educational experiences",
    color: "from-green-500 to-emerald-600",
  },
];

const Fraternity = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [particles, setParticles] = useState([]);
  const sectionRef = useRef(null);

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
    // Generate floating particles
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
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden relative">
        {/* Interactive Mouse Cursor Effect */}
        <div
          className="fixed w-6 h-6 bg-blue-500/30 rounded-full pointer-events-none z-50 mix-blend-multiply transition-all duration-300 ease-out"
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
            className="fixed w-2 h-2 bg-blue-400/20 rounded-full pointer-events-none animate-float-particle"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              opacity: particle.opacity,
              animationDelay: `${particle.id * 0.5}s`,
              animationDuration: `${particle.speed + 3}s`,
            }}
          />
        ))}

        {/* Animated Background Elements with 3D rotation */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob-3d"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob-3d animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-yellow-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob-3d animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div ref={sectionRef} className="text-center mb-20">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h1 className="text-6xl md:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  The FinLit
                </span>
                <br />
                <span className="text-gray-800">Fraternity</span>
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 mx-auto rounded-full"></div>
            </div>
          </div>

          {/* Team Section with Advanced Animations */}
          <div className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              {fraternityMembers.map((member, index) => (
                <div
                  key={index}
                  className={`group relative transform transition-all duration-700 hover:scale-105 min-w-[250px] ${
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
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 h-full group-hover:bg-white/95 overflow-hidden">
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.5),transparent_50%)] animate-pulse-slow"></div>
                    </div>

                    {/* Gradient Border Animation with Rotation */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${member.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm animate-rotate-border`}
                    ></div>
                    <div className="absolute inset-[2px] bg-white rounded-3xl -z-10"></div>

                    {/* Avatar with 3D Flip Effect */}
                    <div className="relative mb-8 perspective-1000">
                      <div
                        className={`w-32 h-32 mx-auto rounded-2xl bg-gradient-to-br ${member.color} p-1 group-hover:scale-110 transition-all duration-500 transform-gpu group-hover:rotate-y-180 preserve-3d`}
                      >
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover rounded-2xl backface-hidden"
                        />
                        {/* Back face */}
                        <div
                          className={`absolute inset-1 w-full h-full bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center text-white font-bold text-lg rotate-y-180 backface-hidden`}
                        >
                          <Users className="w-10 h-10" />
                        </div>
                      </div>

                      {/* Floating Badge with Bounce */}
                      {/* <div className="absolute -top-2 -right-2 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 group-hover:scale-125 transition-all duration-300 animate-bounce-subtle">
                        <Star className="w-5 h-5 text-yellow-800 fill-current" />
                      </div> */}

                      {/* Orbit Animation */}
                      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 border border-blue-300/30 rounded-full animate-spin-slow"></div>
                        <div className="absolute top-2 left-1/2 w-2 h-2 bg-blue-400 rounded-full -translate-x-1/2 animate-orbit"></div>
                      </div>
                    </div>

                    {/* Content with Typewriter Effect */}
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors overflow-hidden">
                        <span
                          className="inline-block animate-slide-up-stagger"
                          style={{ animationDelay: "0.1s" }}
                        >
                          {member.name}
                        </span>
                      </h3>
                      <p
                        className={`text-base font-semibold bg-gradient-to-r ${member.color} bg-clip-text text-transparent mb-4 animate-fade-in-delayed`}
                      >
                        {member.role}
                      </p>
                      <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors animate-slide-up-delayed">
                        {member.description}
                      </p>
                    </div>

                    {/* Hover Effect Line with Wave Animation */}
                    <div
                      className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${member.color} rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left animate-wave`}
                    ></div>

                    {/* Ripple Effect on Hover */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="absolute top-1/2 left-1/2 w-0 h-0 bg-blue-400/20 rounded-full group-hover:w-full group-hover:h-full group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 transition-all duration-500 ease-out"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Section */}
          <div
            className={`transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 text-center text-white shadow-2xl overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className={`absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] bg-repeat`}
                ></div>
              </div>

              <div className="relative z-10">
                <div className="text-6xl text-yellow-300 mb-6">"</div>
                <blockquote className="text-3xl font-bold italic mb-8 leading-relaxed">
                  Money smart, planet kind, A brighter tomorrow for all mankind !
                </blockquote>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                  <span className="text-yellow-200 font-semibold">
                    The FinLit Fraternity
                  </span>
                  <div className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-yellow-400/20 rounded-full animate-float-delayed"></div>
            </div>
          </div>
        </div>

        <style>
          {`
          @keyframes blob-3d {
            0% { 
              transform: translate(0px, 0px) scale(1) rotateX(0deg) rotateY(0deg); 
            }
            33% { 
              transform: translate(30px, -50px) scale(1.1) rotateX(10deg) rotateY(10deg); 
            }
            66% { 
              transform: translate(-20px, 20px) scale(0.9) rotateX(-10deg) rotateY(-10deg); 
            }
            100% { 
              transform: translate(0px, 0px) scale(1) rotateX(0deg) rotateY(0deg); 
            }
          }
          
          @keyframes text-shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          
          @keyframes rotate-border {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes float-particle {
            0%, 100% { 
              transform: translateY(0px) translateX(0px) rotate(0deg); 
              opacity: 0.3;
            }
            25% { 
              transform: translateY(-20px) translateX(10px) rotate(90deg); 
              opacity: 0.7;
            }
            50% { 
              transform: translateY(-40px) translateX(-5px) rotate(180deg); 
              opacity: 1;
            }
            75% { 
              transform: translateY(-20px) translateX(-10px) rotate(270deg); 
              opacity: 0.7;
            }
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
            0% { 
              transform: translateY(20px); 
              opacity: 0; 
            }
            100% { 
              transform: translateY(0px); 
              opacity: 1; 
            }
          }
          
          @keyframes fade-in-delayed {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          
          @keyframes slide-up-delayed {
            0% { 
              transform: translateY(10px); 
              opacity: 0; 
            }
            100% { 
              transform: translateY(0px); 
              opacity: 1; 
            }
          }
          
          @keyframes wave {
            0%, 100% { transform: scaleX(0) scaleY(1); }
            50% { transform: scaleX(1) scaleY(1.2); }
          }
          
          @keyframes width-expand {
            0% { width: 0; }
            100% { width: 8rem; }
          }
          
          @keyframes ping-slow {
            0% { transform: scale(1); opacity: 1; }
            75%, 100% { transform: scale(2); opacity: 0; }
          }
          
          @keyframes ping-slower {
            0% { transform: scale(1); opacity: 1; }
            75%, 100% { transform: scale(2.5); opacity: 0; }
          }
          
          @keyframes ping-slowest {
            0% { transform: scale(1); opacity: 1; }
            75%, 100% { transform: scale(3); orbit: 0; }
          }
          
          @keyframes pulse-slow {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.8; }
          }
          
          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          .animate-blob-3d {
            animation: blob-3d 8s infinite;
          }
          
          .animate-text-shimmer {
            animation: text-shimmer 3s infinite;
          }
          
          .animate-rotate-border {
            animation: rotate-border 4s linear infinite;
          }
          
          .animate-float-particle {
            animation: float-particle 6s ease-in-out infinite;
          }
          
          .animate-orbit {
            animation: orbit 3s linear infinite;
          }
          
          .animate-bounce-subtle {
            animation: bounce-subtle 2s ease-in-out infinite;
          }
          
          .animate-slide-up-stagger {
            animation: slide-up-stagger 0.6s ease-out forwards;
          }
          
          .animate-fade-in-delayed {
            animation: fade-in-delayed 0.8s ease-out 0.3s forwards;
            opacity: 0;
          }
          
          .animate-slide-up-delayed {
            animation: slide-up-delayed 0.8s ease-out 0.5s forwards;
            opacity: 0;
          }
          
          .animate-wave {
            animation: wave 2s ease-in-out;
          }
          
          .animate-width-expand {
            animation: width-expand 1.5s ease-out 0.5s forwards;
            width: 0;
          }
          
          .animate-ping-slow {
            animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
          
          .animate-ping-slower {
            animation: ping-slower 4s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
          
          .animate-ping-slowest {
            animation: ping-slowest 5s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
          
          .animate-pulse-slow {
            animation: pulse-slow 3s ease-in-out infinite;
          }
          
          .animate-spin-slow {
            animation: spin-slow 8s linear infinite;
          }
          
          .perspective-1000 {
            perspective: 1000px;
          }
          
          .preserve-3d {
            transform-style: preserve-3d;
          }
          
          .backface-hidden {
            backface-visibility: hidden;
          }
          
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
          
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}
        </style>
      </div>
    </>
  );
};

export default Fraternity;
