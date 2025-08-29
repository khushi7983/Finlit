import React, { useState, useEffect } from "react";
import video from "../../assets/finlit-story.mp4";

const LearnMoreStory = () => {
  const [currentStatIndex, setCurrentStatIndex] = useState(0);
  const [hoveredStat, setHoveredStat] = useState(null);
  const [hoveredPartner, setHoveredPartner] = useState(null);

  const achievements = [
    "Indian Achievers Award 2020-21 for Best Emerging Company",
    "Tie Global Pitch Competition Runners Up Award 2022",
    "Silver Award at IIT Delhi sponsored by DST",
    "Fintech India Innovation Award at Convergence Pragati Maidan in 2022",
    "Selected for Extraordinary Women in Tech Conference at San Francisco"
  ];

  const partners = [
    { 
      category: "Government & Regulatory", 
      orgs: ["SEBI", "NISM", "NSE Academy", "PFRDA", "STPI"],
      icon: "🏛️",
      gradient: "from-blue-500 to-blue-700"
    },
    { 
      category: "Educational Institutions", 
      orgs: ["IITs", "IIIT", "Kalam Centre- AKTU", "Bombay Stock Exchange"],
      icon: "🎓",
      gradient: "from-yellow-400 to-yellow-600"
    },
    { 
      category: "Corporate Partners", 
      orgs: ["Consensys", "Indian Navy", "GBA", "UNDP", "Coursera", "Dell", "Cognizant"],
      icon: "🤝",
      gradient: "from-indigo-500 to-purple-600"
    }
  ];

  const stats = [
    { number: "300+", label: "Programs Conducted", icon: "" },
    { number: "10,000+", label: "Individuals Trained", icon: "" },
    { number: "50+", label: "Partner Organizations", icon: "" },
    { number: "8+", label: "States Covered", icon: "" }
  ];

  const mediaOutlets = [
    "The Hindustan Times", "The Times of India", "The Pioneer", 
    "The New Indian Express", "Female Tech Leaders UK & Brazil", 
    "The Statesman", "The Leaflet", "The Deccan Herald"
  ];

  // Enhanced stats counter with pause on hover
  useEffect(() => {
    const interval = setInterval(() => {
      if (hoveredStat === null) {
        setCurrentStatIndex((prev) => (prev + 1) % stats.length);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length, hoveredStat]);

  return (
    <div className="min-h-screen pt-24 pb-12 overflow-hidden">
      
      {/* Hero Section with Enhanced Animations */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-8 relative">
        {/* Floating Elements Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full opacity-20 animate-float-delayed"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full opacity-30 animate-pulse"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 md:px- text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            The <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent animate-pulse">FinLit Project</span> Journey
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-4 animate-fade-in-up-delayed">
            Transforming Financial Literacy Education Across India
          </p>

          {/* Enhanced Live Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center p-4 rounded-xl transition-all duration-700 cursor-pointer transform hover:scale-105 ${
                  index === currentStatIndex
                    ? "bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white shadow-xl animate-bounce-gentle"
                    : "bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg hover:bg-gradient-to-r hover:from-yellow-50 hover:to-yellow-50"
                }`}
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className="text-2xl mb-2 animate-bounce-slow">{stat.icon}</div>
                <div className="text-2xl font-bold mb-1 animate-count-up">{stat.number}</div>
                <div className="text-sm font-medium opacity-90">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Enhanced Video & Mission Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-0 pb-8 relative">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Enhanced Video Section */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-yellow-500 transform group-hover:scale-105 transition-transform duration-500">
                
                {/* Your Video Element - Replace the src with your actual video */}
                <video
                  src={video}// Replace with your video path
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                  controls={false} // Set to true if you want video controls
                />
                
                {/* Optional: Overlay with play button (remove if not needed) */}
                <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-opacity-90 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer animate-pulse-slow">
                    <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Mission Section with Animated Border */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-2xl opacity-10 animate-pulse"></div>
              <div className="relative bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-yellow-200 hover:shadow-2xl transition-all duration-500">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 animate-fade-in-right">
                  Our <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">Mission</span>
                </h2>
                
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p className="text-lg hover:scale-105 transition-transform duration-300 cursor-default">
                    <strong className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">TheFinLitProject believes that Financial Literacy is everyone's right.</strong> With a little bit of effort, each individual deserves to know how to make money work for them. Understanding financial jargons and making them everyday terms is our motto, and we attempt to go beyond classroom teaching into the real world of bulls and bears.
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Our Story Section - Enhanced Dark Background */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-yellow-400/20 via-yellow-500/20 to-yellow-600/20 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-blue-400/20 rounded-full animate-float-delayed"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
          <h2 className="text-5xl font-bold text-white text-center mb-16 animate-fade-in-up">Our <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">Story</span></h2>
          
          <div className="text-gray-300 leading-relaxed space-y-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-yellow-400/50 transition-all duration-500 hover:scale-105">
              <p className="text-xl">
                The Fin Lit Project is a <span className="font-semibold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">premium financial education and investment platform</span> established in 2020 by Mrs Neha Misra and Dr DC Misra. In the last few years, we have conducted more than <span className="font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent animate-pulse">300 programmes</span> and trained over <span className="font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent animate-pulse">10,000 individuals</span> across U.P. and India.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-blue-400/50 transition-all duration-500 hover:scale-105">
              <p className="text-xl">
                We are building an <span className="font-semibold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">AI-powered investment advisory</span> supported by micro-courses and quizzes on finance and fintech via The Fin Lit Project App to technology professionals in order to address the financial literacy gap in India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Support System Section */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-400/5 via-transparent to-blue-400/5"></div>
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
          <h2 className="text-5xl font-bold text-gray-900 text-center mb-8 animate-fade-in-up">
            Our <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">Support</span> System
          </h2>
          
          <p className="text-2xl text-gray-700 text-center mb-16 animate-fade-in-up-delayed">
            The Fin Lit Project is supported by <span className="font-semibold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">STPI, Kalam Centre- AKTU, IIIT and Bombay Stock Exchange</span>
          </p>

          {/* Revolutionary Hexagonal Grid Design */}
          <div className="flex flex-wrap justify-center gap-8">
            {partners.map((category, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredPartner(index)}
                onMouseLeave={() => setHoveredPartner(null)}
              >
                {/* Hexagonal Container */}
                <div className={`relative w-80 h-80 transform transition-all duration-700 hover:scale-110 hover:rotate-2 ${
                  hoveredPartner === index ? 'scale-110 rotate-2' : ''
                }`}>
                  
                  {/* Background Hexagon with Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-90 transform rotate-12 rounded-3xl shadow-2xl group-hover:rotate-6 transition-transform duration-700`}>
                  </div>
                  
                  {/* Content Container */}
                  <div className="absolute inset-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 border-2 border-white/50 group-hover:border-yellow-400/50 transition-all duration-500">
                    
                    {/* Animated Icon */}
                    <div className="text-6xl mb-4 animate-bounce-slow group-hover:animate-spin-slow">
                      {category.icon}
                    </div>
                    
                    {/* Category Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                      {category.category}
                    </h3>
                    
                    {/* Organizations with Staggered Animation */}
                    <div className="space-y-2 text-center">
                      {category.orgs.slice(0, 3).map((org, orgIndex) => (
                        <div 
                          key={orgIndex} 
                          className={`text-sm text-gray-600 font-medium transform transition-all duration-500 hover:scale-105 hover:text-yellow-600 ${
                            hoveredPartner === index ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-80'
                          }`}
                          style={{transitionDelay: `${orgIndex * 100}ms`}}
                        >
                          • {org}
                        </div>
                      ))}
                      {category.orgs.length > 3 && (
                        <div className="text-xs text-gray-500 font-semibold mt-2">
                          +{category.orgs.length - 3} more
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Floating Elements around Hexagon */}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full opacity-70 animate-ping"></div>
                  <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-400 rounded-full opacity-70 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Impact Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 relative overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-8 grid-rows-8 gap-4 h-full">
            {[...Array(64)].map((_, i) => (
              <div 
                key={i}
                className="bg-gradient-to-r from-yellow-400 to-blue-400 rounded-full opacity-20 animate-pulse"
                style={{animationDelay: `${i * 100}ms`}}
              ></div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
          <h2 className="text-5xl font-bold text-white text-center mb-16 animate-fade-in-up">
            Our <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">Impact</span>
          </h2>
          
          <div className="text-gray-300 leading-relaxed space-y-12">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-yellow-400/50 transition-all duration-500 transform hover:scale-105">
              <p className="text-xl">
                The Fin Lit Project has educated individuals in technology around avenues of <span className="font-semibold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">personal finance, sustainable finance, and emerging fintech</span> and has served institutes like <span className="font-semibold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">IITs, IIIT</span> and organizations like <span className="font-semibold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">Consensys, Indian Navy, GBA, UNDP, Coursera, Dell, and Cognizant</span> via its app available on playstore and ios.
              </p>
            </div>

            {/* Enhanced Service Features */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group text-center p-8 bg-gradient-to-br from-yellow-400/20 via-yellow-500/20 to-yellow-600/20 rounded-3xl border-2 border-yellow-400/30 hover:border-yellow-400/80 transition-all duration-500 transform hover:scale-110 hover:-rotate-2 cursor-pointer">
                <div className="text-6xl mb-6 group-hover:animate-bounce"></div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">AI-Powered Advisory</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">Intelligent investment recommendations tailored to your needs</p>
              </div>
              
              <div className="group text-center p-8 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-3xl border-2 border-blue-400/30 hover:border-blue-400/80 transition-all duration-500 transform hover:scale-110 hover:rotate-2 cursor-pointer">
                <div className="text-6xl mb-6 group-hover:animate-spin-slow"></div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">Micro-Courses</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">Bite-sized learning modules on finance and fintech</p>
              </div>
              
              <div className="group text-center p-8 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-3xl border-2 border-green-400/30 hover:border-green-400/80 transition-all duration-500 transform hover:scale-110 hover:-rotate-1 cursor-pointer">
                <div className="text-6xl mb-6 group-hover:animate-pulse"></div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">Interactive Quizzes</h3>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">Test your knowledge and track your progress</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Media Recognition with 3D Carousel Effect - COMMENTED OUT */}
      {/* <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full animate-float blur-xl"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-blue-400 rounded-full animate-float-delayed blur-xl"></div>
          <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-yellow-600 rounded-full animate-pulse blur-xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
          <h2 className="text-5xl font-bold text-gray-900 text-center mb-8 animate-fade-in-up">
            Media <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">Recognition</span>
          </h2>
          
          <p className="text-2xl text-gray-900 text-center mb-16 animate-fade-in-up-delayed">
            Featured in leading publications across India and internationally
          </p>
          
          <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm p-8 shadow-xl border border-white/10">
            <div className="flex animate-scroll-3d space-x-8">
              {mediaOutlets.map((outlet, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-xl p-6 text-center border-2 border-gray-600 hover:border-yellow-400 hover:bg-gradient-to-r hover:from-yellow-400/10 hover:to-yellow-500/10 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:scale-110 hover:-rotate-2 min-w-[250px] cursor-pointer"
                  style={{
                    transform: `perspective(1000px) rotateY(${index * 5}deg)`,
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  <div className="text-2xl mb-2">📰</div>
                  <span className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">{outlet}</span>
                </div>
              ))}
              
              {mediaOutlets.map((outlet, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 bg-gradient-to-r from-gray-800/80 to-gray-700/80 backdrop-blur-sm rounded-xl p-6 text-center border-2 border-gray-600 hover:border-blue-400 hover:bg-gradient-to-r hover:from-blue-400/10 hover:to-blue-500/10 transition-all duration-500 shadow-lg hover:shadow-2xl transform hover:scale-110 hover:rotate-2 min-w-[250px] cursor-pointer"
                  style={{
                    transform: `perspective(1000px) rotateY(${index * 5}deg)`,
                    animationDelay: `${(index + mediaOutlets.length) * 200}ms`
                  }}
                >
                  <div className="text-2xl mb-2">📰</div>
                  <span className="text-lg font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">{outlet}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Enhanced Awards Section */}
      {/* <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full animate-float blur-xl"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-blue-400 rounded-full animate-float-delayed blur-xl"></div>
          <div className="absolute bottom-20 left-1/3 w-12 h-12 bg-yellow-600 rounded-full animate-pulse blur-xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
          <h2 className="text-5xl font-bold text-white text-center mb-16 animate-fade-in-up">
            Awards & <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">Recognition</span>
          </h2>
          
          <p className="text-2xl text-gray-300 text-center mb-16 animate-fade-in-up-delayed">
            Excellence recognized through prestigious awards
          </p>

          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className="group flex items-start space-x-6 p-6 bg-gradient-to-r from-yellow-400/10 via-yellow-500/10 to-yellow-600/10 rounded-2xl border-l-4 border-yellow-400 hover:border-yellow-300 transition-all duration-500 transform hover:scale-105 hover:bg-gradient-to-r hover:from-yellow-400/20 hover:via-yellow-500/20 hover:to-yellow-600/20 cursor-pointer"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500">
                  <span className="text-white font-bold text-lg animate-bounce-slow">🏆</span>
                </div>
                <p className="text-gray-300 font-medium leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                  {achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }

        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(5deg); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up-delayed {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          50% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scroll-3d {
          0% {
            transform: translateX(0) perspective(1000px);
          }
          100% {
            transform: translateX(-50%) perspective(1000px);
          }
        }

        @keyframes count-up {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animate-fade-in-up-delayed {
          animation: fade-in-up-delayed 2s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out forwards;
        }

        .animate-scroll-3d {
          animation: scroll-3d 25s linear infinite;
        }

        .animate-scroll-3d:hover {
          animation-play-state: paused;
        }

        .animate-count-up {
          animation: count-up 0.8s ease-out forwards;
        }

        /* Gradient text animation */
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .bg-gradient-to-r.animate-pulse {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }

        /* Smooth transitions */
        .transition-colors {
          transition-property: color, background-color, border-color;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 500ms;
        }

        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 500ms;
        }

        /* Hover effects */
        .group:hover .animate-bounce-slow {
          animation-duration: 1s;
        }

        .group:hover .animate-spin-slow {
          animation-duration: 1s;
        }

        /* Border gradient effect */
        .border-3 {
          border-width: 3px;
        }
      `}</style>
    </div>
  );
};

export default LearnMoreStory;
