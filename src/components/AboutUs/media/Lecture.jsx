import React, { useState, useEffect } from "react";
import { Play } from "lucide-react";

const Lecture = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [particles, setParticles] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [lectures, setLectures] = useState([]);
  const [loading, setLoading] = useState(true);

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

  // Fetch lectures from API
  useEffect(() => {
    const fetchLectures = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/lectures');
        const data = await response.json();
        if (data.success) {
          setLectures(data.data);
        }
      } catch (error) {
        console.error('Error fetching lectures:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLectures();
  }, []);

  if (loading) {
    return (
      <section className="relative bg-gradient-to-br from-slate-50 via-gray-100 to-indigo-100 py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden mt-14">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-2xl font-semibold text-gray-600">Loading lectures...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-gray-100 to-indigo-100 py-16 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden mt-14">
      {/* Animated Background Elements */}
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
        {/* Header */}
        <div className="text-center mb-12">
          <div className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                Lecture Series & Workshops
              </span>
            </h1>
          </div>
        </div>


        {/* Lecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {lectures.map((lecture) => (
            <div
              key={lecture._id}
              className={`group relative transform transition-all duration-700 hover:scale-105 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? lecture.delay : "0s",
                animationDelay: lecture.delay,
              }}
              onMouseEnter={() => setHoveredCard(lecture._id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 ${lecture.bgHover} overflow-hidden`}
              >
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,191,36,0.5),transparent_50%)] animate-pulse-slow"></div>
                </div>

                {/* Gradient Border Animation */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${lecture.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm animate-rotate-border`}
                ></div>
                <div className="absolute inset-[2px] bg-white rounded-2xl -z-10"></div>

                {/* Thumbnail */}
                <div className="relative">
                  <img
                    src={lecture.thumbnail}
                    alt={lecture.title}
                    className="w-full h-64 object-cover rounded-t-2xl"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 transition-colors group-hover:text-gray-700">
                    {lecture.title}
                  </h3>
                </div>

                {/* Hover Effect Line */}
                <div
                  className={`absolute bottom-0 left-0 w-full h-1 from-gray-900 via-blue-500 to-gray-600 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left animate-wave`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div
          className={`mt-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 shadow-lg overflow-hidden transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
          style={{ transitionDelay: "1s" }}
        >
          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-yellow-400 mb-4">
              About Our Lecture Series
            </h3>
            <p className="text-gray-200 leading-relaxed">
              Our team delivers educational presentations and workshops to empower individuals with financial literacy and practical skills.
            </p>
          </div>
          <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/20 rounded-full animate-float-delayed"></div>
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

export default Lecture;