import React, { useState, useEffect } from "react";
import journeyVideo from "../../assets/finlit-story.mp4";

const LearnMoreStory = () => {
  const [currentStatIndex, setCurrentStatIndex] = useState(0);

  const achievements = [
    "Indian Achievers Award 2020-21 for Best Emerging Company",
    "Tie Global Pitch Competition Runners Up Award 2022",
    "Silver Award at IIT Delhi sponsored by DST",
    "Fintech India Innovation Award at Convergence Pragati Maidan in 2022",
    "Selected for Extraordinary Women in Tech Conference at San Francisco"
  ];

  const mediaOutlets = [
    "The Hindustan Times",
    "The Times of India",
    "The Pioneer",
    "The New Indian Express",
    "Female Tech Leaders UK & Brazil",
    "The Statesman",
    "The Leaflet",
    "The Deccan Herald"
  ];

  const partners = [
    { category: "Government & Regulatory", orgs: ["SEBI", "NISM", "NSE Academy", "PFRDA", "STPI"] },
    { category: "Educational Institutions", orgs: ["IITs", "IIIT", "Kalam Centre- AKTU", "Bombay Stock Exchange"] },
    { category: "Corporate Partners", orgs: ["Consensys", "Indian Navy", "GBA", "UNDP", "Coursera", "Dell", "Cognizant"] }
  ];

  const stats = [
    { number: "300+", label: "Programs Conducted", icon: "🎯" },
    { number: "10,000+", label: "Individuals Trained", icon: "👥" },
    { number: "50+", label: "Partner Organizations", icon: "🤝" },
    { number: "8+", label: "States Covered", icon: "🗺️" }
  ];

  // Animated stats counter
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatIndex((prev) => (prev + 1) % stats.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [stats.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-[#FACF07]">
      {/* Hero Section */}
      <section className="relative py-12 px-6 md:px-12 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#FACF07] opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-200 opacity-30 rounded-full animate-bounce"></div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block bg-[#FACF07] text-black px-6 py-3 rounded-full text-lg font-semibold mb-6 animate-fade-in">
              Our Complete Story
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
              The <span className="text-[#FACF07]">FinLit Project</span> Journey
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay">
              Transforming Financial Literacy Education Across India
            </p>
          </div>

          {/* Dynamic Stats Banner */}
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg mb-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center transition-all duration-500 transform ${
                    index === currentStatIndex
                      ? "scale-110 bg-[#FACF07] text-black rounded-xl p-4"
                      : "p-4"
                  }`}
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold mb-1">{stat.number}</div>
                  <div className="text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="px-6 md:px-12 mb-12">
        <div className="relative aspect-video max-w-[1000px] mx-auto bg-gradient-to-br from-blue-900 to-purple-900 rounded-3xl overflow-hidden">

          <video
            src={journeyVideo}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          ></video>

          {/* Overlay Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40">
            <p className="text-white text-lg font-semibold">Watch Our Journey</p>
         
          </div>

        
        </div>
      </section>

      {/* Main Story Content */}
      <section className="py-8 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Mission */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl mb-12 hover:shadow-2xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Our <span className="text-[#FACF07]">Mission</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="hover:text-gray-900 transition-colors duration-300">
                TheFinLitProject believes that Financial Literacy is everyone's right. With a little bit of effort each individual deserves to know how to make money work for them. Understanding Financial Jargons and making them everyday terms is our motto and we attempt to go beyond classroom teaching into the real world of bulls and bears.
              </p>
              <p className="hover:text-gray-900 transition-colors duration-300">
                The Fin Lit Project is a premium financial education and investment platform. Established in 2020 by Mrs Neha Misra and Dr DC Misra, in the last 2 years has conducted more than 300 programmes and trained over 10000 individuals across U.P. and India.
              </p>
                  <p className="hover:text-gray-900 transition-colors duration-300">
           The Fin Lit Project is supported by STPI, Kalam Centre- AKTU, IIIT and Bombay Stock Exchange and strives to improve financial literacy through its app across India.
The Fin Lit Project has featured in The Hindustan Times, The Times of India, The Pioneer, The New Indian Express, Female Tech Leaders UK & Brazil, The Statesman, The Leaflet, and the Deccan Herald.

              </p>
                  <p className="hover:text-gray-900 transition-colors duration-300">
                The Fin Lit Project has educated individuals in technology around avenues of personal finance, sustainable finance, and emerging fintech and has served institutes like IITs , IIIT and organizations like, Consensys, Indian Navy, GBA, UNDP, Coursera, Dell, and Cognizant via its app available on playstore and ios.
We are building an AI-powered investment advisory supported by micro-courses and quizzes on finance and fintech via The Fin Lit Project App to technology professionals in order to address the financial literacy gap in India. The Fin Lit Project has won the Indian Achievers Award 2020-21 for Best Emerging Company, Tie Global Pitch Competition Runners Up Award 2022, Silver Award at IIT Delhi sponsored by DST, and the Fintech India Innovation Award at Convergence Pragati Maidan in 2022. Recently we have also been selected to participate at the Extraordinary Women in Tech Conference at San Francisco which has been selected for International Event  support under Start in UP.
              </p>
            </div>
          </div>

          {/* Partners */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl mb-12 hover:shadow-2xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our <span className="text-[#FACF07]">Partners</span> & Support System
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The Fin Lit Project is supported by STPI, Kalam Centre- AKTU, IIIT and Bombay Stock Exchange and strives to improve financial literacy through its app across India.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {partners.map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-[#FACF07] mb-4">
                    {category.category}
                  </h3>
                  <ul className="space-y-2">
                    {category.orgs.map((org, orgIndex) => (
                      <li
                        key={orgIndex}
                        className="text-gray-700 flex items-center hover:text-gray-900 transition-colors"
                      >
                        <span className="w-2 h-2 bg-[#FACF07] rounded-full mr-3 animate-pulse"></span>
                        {org}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Impact & Services */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl mb-12 hover:shadow-2xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Our <span className="text-[#FACF07]">Impact</span> & Services
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p className="hover:text-gray-900 transition-colors duration-300">
                The Fin Lit Project has educated individuals in technology around avenues of personal finance, sustainable finance, and emerging fintech and has served institutes like IITs, IIIT and organizations like Consensys, Indian Navy, GBA, UNDP, Coursera, Dell, and Cognizant.
              </p>
              <p className="hover:text-gray-900 transition-colors duration-300">
                We are building an AI-powered investment advisory supported by micro-courses and quizzes on finance and fintech via The Fin Lit Project App.
              </p>
            </div>

            {/* Features */}
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#FACF07] to-yellow-400 rounded-2xl p-6 text-black hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="text-3xl mb-3">🤖</div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered Advisory</h3>
                <p className="text-sm">Intelligent investment recommendations tailored to your needs</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="text-3xl mb-3">📚</div>
                <h3 className="text-xl font-semibold mb-2">Micro-Courses</h3>
                <p className="text-sm">Bite-sized learning modules on finance and fintech</p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-xl font-semibold mb-2">Interactive Quizzes</h3>
                <p className="text-sm">Test your knowledge and track your progress</p>
              </div>
            </div>
          </div>

          {/* Awards */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl mb-12 hover:shadow-2xl transition-all duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              <span className="text-[#FACF07]">Awards</span> & Recognition
            </h2>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center bg-gray-50 rounded-xl p-6 hover:shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-[#FACF07] rounded-full flex items-center justify-center mr-4 animate-pulse">
                    <span className="text-black font-bold text-xl">🏆</span>
                  </div>
                  <p className="text-lg text-gray-700 font-medium hover:text-gray-900 transition-colors">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 shadow-xl text-center text-white hover:shadow-2xl transition-all duration-300">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your <span className="text-[#FACF07]">Financial Future?</span>
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Want to experience the expertise of TheFinLitProject for yourself? Leave us a message and let's discuss what we can do for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-[#FACF07] hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Get In Touch
              </a>
              <a
                href="/app-download"
                className="bg-transparent border-2 border-[#FACF07] text-[#FACF07] hover:bg-[#FACF07] hover:text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Download Our App
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Animations */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }
        .animate-slide-up {
          animation: slide-up 1s ease-out 0.1s both;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 3s ease-in-out infinite 1s;
        }
      `}</style>
    </div>
  );
};

export default LearnMoreStory;
