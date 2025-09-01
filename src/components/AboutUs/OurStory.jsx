import React, { useState, useEffect } from "react";
import learnMore from "./LearnMoreStory";
import Fraternity from "../AboutUs/Fraternity";
import MediaPresence from "../AboutUs/MediaPresence";
import { Link } from "react-router-dom";
import useScrollToTop from "../../hooks/useScrollToTop";

const FinLitStory = () => {
  // Scroll to top when component mounts
  useScrollToTop();
  
  // Custom typewriter effect
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
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
    { number: "50+", label: "Partner Organizations", icon: "🤝" },
  ];

  return (
    <section
      id="about-us"
      className="relative bg-gradient-to-br from-slate-50 via-gray-100 to-indigo-100 py-16 md:py-20 px-6 md:px-12 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-[#FACF07] opacity-20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-blue-200 opacity-20 rounded-full animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto my-5 z-10">
        {/* Main two-column layout */}
       <div className="grid lg:grid-cols-[60%_40%] gap-12 items-start mb-16">
          {/* Left Column: Text */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Our Dream is{" "}
              <span className="text-[#FACF07]">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>{" "}
              Transformation
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed">
              TheFinLitProject believes that Financial Literacy is everyone's
              right. With a little bit of effort each individual deserves to
              know how to make money work for them. Understanding Financial
              Jargons and making them everyday terms is our motto and we attempt
              to go beyond classroom teaching into the real world of bulls and
              bears. With comprehensive capabilities and deep industry knowledge
              necessary to help you understand the most complex terms that
              you've ever come across in finance.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              The Fin Lit Project is a premium financial education and
              investment platform. Established in 2020 by Mrs Neha Misra and Dr
              DC Misra, in the last 2 years has conducted more than 300
              programmes and trained over 10000 individuals across U.P. and
              India on financial literacy and financial technology education in
              collaboration with SEBI, NISM, NSE Academy, PFRDA and other
              organisations.
            </p>

            <Link
              to="/about-finlit-story"
              className="inline-block bg-gradient-to-r from-indigo-700 to-indigo-900 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:scale-105"
            >
              Learn More About Us
            </Link>
          </div>

          {/* Right Column: Banner + Stats */}
          <div className="relative space-y-6">
            {/* Banner */}
            <div className="relative bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl p-6 overflow-hidden shadow-lg">
              <div className="absolute top-4 right-4 flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>

              <div className="flex items-center justify-center space-x-4 mt-8">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-full flex items-center justify-center text-white text-2xl">
                  👨‍💼
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white text-xl">
                  👩‍💻
                </div>
              </div>

              <div className="mt-4 text-center">
                <div className="w-24 h-3 bg-white rounded-full mx-auto mb-2"></div>
                <div className="w-16 h-2 bg-gray-300 rounded-full mx-auto"></div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {statsData.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Fraternity />
      <MediaPresence />
    </section>
  );
};

export default FinLitStory;




// import React, { useState, useEffect } from "react";
// import Fraternity from "../AboutUs/Fraternity";
// import MediaPresence from "../AboutUs/MediaPresence";
// import { Link } from "react-router-dom";

// const FinLitStory = () => {
//   // Typewriter Effect
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const [currentText, setCurrentText] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);
//   const words = ["Global Learning", "Financial Literacy", "Digital Education"];

//   useEffect(() => {
//     const typeSpeed = isDeleting ? 50 : 100;
//     const currentWord = words[currentWordIndex];

//     const timer = setTimeout(() => {
//       if (!isDeleting) {
//         if (currentText.length < currentWord.length) {
//           setCurrentText(currentWord.substring(0, currentText.length + 1));
//         } else {
//           setTimeout(() => setIsDeleting(true), 2000);
//         }
//       } else {
//         if (currentText.length > 0) {
//           setCurrentText(currentWord.substring(0, currentText.length - 1));
//         } else {
//           setIsDeleting(false);
//           setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
//         }
//       }
//     }, typeSpeed);

//     return () => clearTimeout(timer);
//   }, [currentText, isDeleting, currentWordIndex, words]);

//   const statsData = [
//     { number: "4+", label: "Years Experience", icon: "📅" },
//     { number: "300+", label: "Workshops Conducted", icon: "🎯" },
//     { number: "10K+", label: "Learners Trained", icon: "👥" },
//     { number: "50+", label: "Partner Organizations", icon: "🤝" },
//   ];

//   return (
//     <section
//       id="about-us"
//       className="relative bg-white py-20 px-6 md:px-12 overflow-hidden"
//     >
//       {/* Decorative shapes */}
//       <div className="absolute top-10 right-10 w-40 h-40 bg-[#FACF07] opacity-10 rounded-full blur-3xl"></div>
//       <div className="absolute bottom-20 left-10 w-40 h-40 bg-indigo-300 opacity-10 rounded-full blur-3xl"></div>

//       <div className="relative max-w-7xl mx-auto z-10">
//         {/* Main Grid */}
//         <div className="grid lg:grid-cols-[60%_40%] gap-12 items-start mb-16">
//           {/* Left Column: Text */}
//           <div className="space-y-6">
//             <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
//               Our Dream is{" "}
//               <span className="text-[#FACF07]">
//                 {currentText}
//                 <span className="animate-pulse">|</span>
//               </span>{" "}
//               Transformation
//             </h1>

//             <p className="text-lg text-gray-700 leading-relaxed">
//               TheFinLitProject believes that Financial Literacy is everyone's
//               right. With a little bit of effort each individual deserves to
//               know how to make money work for them. Understanding Financial
//               Jargons and making them everyday terms is our motto and we attempt
//               to go beyond classroom teaching into the real world of bulls and
//               bears. With comprehensive capabilities and deep industry knowledge
//               necessary to help you understand the most complex terms that
//               you've ever come across in finance.
//             </p>

//             <p className="text-lg text-gray-600 leading-relaxed">
//               The Fin Lit Project is a premium financial education and
//               investment platform. Established in 2020 by Mrs Neha Misra and Dr
//               DC Misra, in the last 2 years has conducted more than 300
//               programmes and trained over 10000 individuals across U.P. and
//               India on financial literacy and financial technology education in
//               collaboration with SEBI, NISM, NSE Academy, PFRDA and other
//               organisations.
//             </p>

//             <Link
//               to="/about-finlit-story"
//               className="inline-block bg-gradient-to-r from-indigo-700 to-indigo-900 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-all duration-300 hover:scale-105"
//             >
//               Learn More About Us
//             </Link>
//           </div>

//           {/* Right Column: Banner + Stats */}
//           <div className="relative space-y-6">
//             {/* Banner */}
//             <div className="relative bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-2xl p-6 overflow-hidden shadow-lg">
//               <div className="absolute top-4 right-4 flex space-x-2">
//                 <div className="w-3 h-3 bg-red-400 rounded-full"></div>
//                 <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
//                 <div className="w-3 h-3 bg-green-400 rounded-full"></div>
//               </div>

//               <div className="flex items-center justify-center space-x-4 mt-8">
//                 <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-full flex items-center justify-center text-white text-2xl">
//                   👨‍💼
//                 </div>
//                 <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center text-white text-xl">
//                   👩‍💻
//                 </div>
//               </div>

//               <div className="mt-4 text-center">
//                 <div className="w-24 h-3 bg-white rounded-full mx-auto mb-2"></div>
//                 <div className="w-16 h-2 bg-gray-300 rounded-full mx-auto"></div>
//               </div>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-2 gap-6">
//               {statsData.map((stat, index) => (
//                 <div
//                   key={index}
//                   className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
//                 >
//                   <div className="text-2xl mb-2">{stat.icon}</div>
//                   <div className="text-2xl font-bold text-gray-900 mb-1">
//                     {stat.number}
//                   </div>
//                   <div className="text-sm text-gray-600">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <Fraternity />
//         <MediaPresence />
//       </div>
//     </section>
//   );
// };

// export default FinLitStory;
