import React from "react";

const CompleteFinLitStory = () => {
  const achievements = [
    "Indian Achievers Award 2020-21 for Best Emerging Company",
    "Tie Global Pitch Competition Runners Up Award 2022", 
    "Silver Award at IIT Delhi sponsored by DST",
    "Fintech India Innovation Award at Convergence Pragati Maidan in 2022",
    "Selected for Extraordinary Women in Tech Conference at San Francisco"
  ];

  const mediaOutlets = [
    "The Hindustan Times", "The Times of India", "The Pioneer", 
    "The New Indian Express", "Female Tech Leaders UK & Brazil", 
    "The Statesman", "The Leaflet", "The Deccan Herald"
  ];

  const partners = [
    { category: "Government & Regulatory", orgs: ["SEBI", "NISM", "NSE Academy", "PFRDA", "STPI"] },
    { category: "Educational Institutions", orgs: ["IITs", "IIIT", "Kalam Centre- AKTU", "Bombay Stock Exchange"] },
    { category: "Corporate Partners", orgs: ["Consensys", "Indian Navy", "GBA", "UNDP", "Coursera", "Dell", "Cognizant"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-[#FACF07]">
      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 overflow-hidden">
        <div className="absolute top-10 right-10 w-32 h-32 bg-[#FACF07] opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-blue-200 opacity-30 rounded-full animate-bounce"></div>
        
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-[#FACF07] text-black px-6 py-3 rounded-full text-lg font-semibold mb-6">
              Our Complete Story
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              The <span className="text-[#FACF07]">FinLit Project</span> Journey
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Transforming Financial Literacy Education Across India
            </p>
          </div>
        </div>
      </section>

      {/* Main Story Content */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Our Mission */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Our <span className="text-[#FACF07]">Mission</span>
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                TheFinLitProject believes that Financial Literacy is everyone's right. With a little bit of effort each individual deserves to know how to make money work for them. Understanding Financial Jargons and making them everyday terms is our motto and we attempt to go beyond classroom teaching into the real world of bulls and bears. With comprehensive capabilities and deep industry knowledge necessary to help you understand the most complex terms that you've ever come across in finance.
              </p>
              <p>
                The Fin Lit Project is a premium financial education and investment platform. Established in 2020 by Mrs Neha Misra and Dr DC Misra, in the last 2 years has conducted more than 300 programmes and trained over 10000 individuals across U.P. and India on financial literacy and financial technology education in collaboration with SEBI, NISM, NSE Academy, PFRDA and other organisations.
              </p>
            </div>
          </div>

          {/* Support & Partnerships */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our <span className="text-[#FACF07]">Partners</span> & Support System
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The Fin Lit Project is supported by STPI, Kalam Centre- AKTU, IIIT and Bombay Stock Exchange and strives to improve financial literacy through its app across India.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {partners.map((category, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-xl font-semibold text-[#FACF07] mb-4">{category.category}</h3>
                  <ul className="space-y-2">
                    {category.orgs.map((org, orgIndex) => (
                      <li key={orgIndex} className="text-gray-700 flex items-center">
                        <span className="w-2 h-2 bg-[#FACF07] rounded-full mr-3"></span>
                        {org}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Media Recognition */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              <span className="text-[#FACF07]">Media</span> Recognition
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The Fin Lit Project has featured in major publications and media outlets, establishing our credibility and reach in the financial education space.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {mediaOutlets.map((outlet, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">📰</div>
                  <p className="text-sm font-medium text-gray-700">{outlet}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Impact & Services */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Our <span className="text-[#FACF07]">Impact</span> & Services
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                The Fin Lit Project has educated individuals in technology around avenues of personal finance, sustainable finance, and emerging fintech and has served institutes like IITs, IIIT and organizations like, Consensys, Indian Navy, GBA, UNDP, Coursera, Dell, and Cognizant via its app available on playstore and ios.
              </p>
              <p>
                We are building an AI-powered investment advisory supported by micro-courses and quizzes on finance and fintech via The Fin Lit Project App to technology professionals in order to address the financial literacy gap in India.
              </p>
            </div>
            
            {/* App Features */}
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[#FACF07] to-yellow-400 rounded-2xl p-6 text-black">
                <div className="text-3xl mb-3">🤖</div>
                <h3 className="text-xl font-semibold mb-2">AI-Powered Advisory</h3>
                <p className="text-sm">Intelligent investment recommendations tailored to your needs</p>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
                <div className="text-3xl mb-3">📚</div>
                <h3 className="text-xl font-semibold mb-2">Micro-Courses</h3>
                <p className="text-sm">Bite-sized learning modules on finance and fintech</p>
              </div>
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="text-xl font-semibold mb-2">Interactive Quizzes</h3>
                <p className="text-sm">Test your knowledge and track your progress</p>
              </div>
            </div>
          </div>

          {/* Awards & Recognition */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              <span className="text-[#FACF07]">Awards</span> & Recognition
            </h2>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-[#FACF07] rounded-full flex items-center justify-center mr-4">
                    <span className="text-black font-bold text-xl">🏆</span>
                  </div>
                  <p className="text-lg text-gray-700 font-medium">{achievement}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-[#FACF07] to-yellow-400 rounded-2xl p-6 text-black">
              <p className="text-lg font-semibold">
                Recently we have also been selected to participate at the Extraordinary Women in Tech Conference at San Francisco which has been selected for International Event support under Start in UP.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 shadow-xl text-center text-white">
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
                className="bg-transparent border-2 border-[#FACF07] text-[#FACF07] hover:bg-[#FACF07] hover:text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300"
              >
                Download Our App
              </a>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default CompleteFinLitStory;