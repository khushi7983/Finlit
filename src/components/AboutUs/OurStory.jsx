import React, { useState, useEffect } from "react";
import learnMore from "./LearnMoreStory";
import Fraternity from "../AboutUs/Fraternity";
import MediaPresence from "../AboutUs/MediaPresence";
import { Link } from "react-router-dom";


const FinLitStory = () => {
  // Custom typewriter effect
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const words = ["Global Learning", "Financial Literacy", "Digital Education"];
  
  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 100;
    const currentWord = words[currentWordIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentWord.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }
      }
    }, typeSpeed);
    
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words]);

  const statsData = [
    { number: "4+", label: "Years Experience", icon: "📅" },
    { number: "300+", label: "Workshops Conducted", icon: "🎯" },
    { number: "10K+", label: "Learners Trained", icon: "👥" },
    { number: "50+", label: "Partner Organizations", icon: "🤝" }
  ];

  return (
    <section
      id="about-us"
      className="relative bg-gradient-to-br from-white via-gray-100 to-[#FACF07] py-16 md:py-24 px-6 md:px-12 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-[#FACF07] opacity-20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-blue-200 opacity-30 rounded-full animate-bounce"></div>
      
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Main two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="inline-block py-2 rounded-full text-sm font-semibold mb-4">
             
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Our Dream is{" "}
              <span className="text-[#FACF07] block">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
              Transformation
            </h1>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              TheFinLitProject believes that Financial Literacy is everyone's right. With a little bit of effort each individual deserves to know how to make money work for them. Understanding Financial Jargons and making them everyday terms is our motto and we attempt to go beyond classroom teaching into the real world of bulls and bears. With comprehensive capabilities and deep industry knowledge necessary to help you understand the most complex terms that you've ever come across in finance.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              The Fin Lit Project is a premium financial education and investment platform. Established in 2020 by Mrs Neha Misra and Dr DC Misra, in the last 2 years has conducted more than 300 programmes and trained over 10000 individuals across U.P. and India on financial literacy and financial technology education in collaboration with SEBI, NISM, NSE Academy, PFRDA and other organisations.
            </p>
            
<Link 
  to="/about-finlit-story" 
  className="inline-block bg-[#FACF07] hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
>
  Learn More About Us
</Link>

          </div>
          
          {/* Right Column - Image and Stats */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 mb-8 overflow-hidden">
              <div className="absolute top-4 right-4 flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              </div>
              
              {/* Simulated people image */}
              <div className="flex items-center justify-center space-x-4 mt-8">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">👨‍💼</span>
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">👩‍💻</span>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <div className="w-24 h-3 bg-white rounded-full mx-auto mb-2"></div>
                <div className="w-16 h-2 bg-gray-300 rounded-full mx-auto"></div>
              </div>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {statsData.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
    
      </div>
      <Fraternity />
      <MediaPresence/>
    </section>
  );
};

export default FinLitStory;