import { motion } from "framer-motion";
import {
  BookOpen,
  TrendingUp
} from "lucide-react";
import React, { useEffect, useState } from "react";
import appleIcon from '../../assets/apple.png';
import phone from "../../assets/phone.mp4";
import playstoreIcon from '../../assets/playstore.png';
import { useHeroData } from "../../hooks/useHeroData";
import { getIconComponent } from "../../utils/iconMapper";
import FAQ from "./FAQ";
import FinancialLiteracy from "./FinancialLiteracy";
import Investing from "./Investing";
import Journey from "./Journey";
import Offerings from "./Offerings";
import OurAspirations from "./OurAspirations";
import Supporters from "./Supporters";
import TestimonialsSection from "./TestimonialsSection";

// Animation variants
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

// Slide data (unchanged since used in older video section)
const slides = [
  {
    id: 1,
    title: "Learn & Grow",
    subtitle: "Financial Education Made Simple",
    bgGradient: "from-blue-500 via-purple-500 to-indigo-600",
    accent: "from-yellow-400 to-yellow-600",
    icon: "📚",
    features: ["Interactive Courses", "Progress Tracking", "Expert Tips"],
  },
  {
    id: 2,
    title: "Invest Smart",
    subtitle: "Build Your Financial Future",
    bgGradient: "from-indigo-500 via-purple-600 to-pink-500",
    accent: "from-blue-400 to-blue-600",
    icon: "📈",
    features: ["Portfolio Management", "Market Analysis", "Risk Assessment"],
  },
];

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { heroData, loading, error } = useHeroData();

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Show loading state
  if (loading) {
    return (
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-28 md:pt-20 lg:pt-24 pb-16 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500 mx-auto mb-4"></div>
              <p className="text-slate-600">Loading hero data from database...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Show error state if no data
  if (error || !heroData) {
    return (
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-28 md:pt-20 lg:pt-24 pb-16 md:pb-24 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-center min-h-[60vh]">
            <div className="text-center">
              <p className="text-red-600 mb-2">Error loading hero data</p>
              <p className="text-slate-600 text-sm">{error || 'No hero data found in database'}</p>
              <p className="text-slate-500 text-xs mt-2">Please ensure your server is running and database has hero data</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
             {/* Main Hero Section */}
       <section className={`relative bg-gradient-to-br ${heroData.backgroundGradient} pt-28 md:pt-20 lg:pt-24 pb-16 md:pb-24 overflow-hidden`}>
         {/* Background Elements */}
         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23f1f5f9\' fill-opacity=\'0.4\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

         

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                     {/* Main Flex Layout */}
           <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                                                     {/* Left: Text and Buttons */}
                               <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="mb-4">
                                 <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
                   <div className="flex flex-col">
                                                                 {/* Line 1: Master Your */}
                       <div className="flex items-center justify-center lg:justify-start">
                       <span
                         className={`inline-block text-slate-800 transition-all duration-800 ${
                           isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                         }`}
                         style={{
                           animationDelay: "0.3s",
                           animation: isVisible ? "bounce-in 0.8s ease-out 0.3s both" : "none",
                         }}
                       >
                         Master
                       </span>
                                               <span className="w-2 sm:w-4"></span>
                       <span
                         className={`inline-block text-slate-800 transition-all duration-800 ${
                           isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                         }`}
                         style={{
                           animationDelay: "0.5s",
                           animation: isVisible ? "bounce-in 0.8s ease-out 0.5s both" : "none",
                         }}
                       >
                         Your
                       </span>
                     </div>
                     
                                                                 {/* Line 2: Money (highlighted) */}
                       <div>
                       <span
                         className={`inline-block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent transition-all duration-800 ${
                           isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                         }`}
                         style={{
                           animationDelay: "0.7s",
                           animation: isVisible ? "glow-pulse 1.8s ease-in-out infinite, bounce-in 0.8s ease-out 0.7s both" : "none",
                         }}
                       >
                         {heroData.title.split(' ')[2]}
                       </span>
                     </div>
                     
                                                                 {/* Line 3: in Minutes */}
                       <div className="flex items-center justify-center lg:justify-start">
                       <span
                         className={`inline-block text-slate-800 transition-all duration-800 ${
                           isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                         }`}
                         style={{
                           animationDelay: "0.9s",
                           animation: isVisible ? "bounce-in 0.8s ease-out 0.9s both" : "none",
                         }}
                       >
                         in
                       </span>
                                               <span className="w-2 sm:w-4"></span>
                       <span
                         className={`inline-block text-slate-800 transition-all duration-800 ${
                           isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                         }`}
                         style={{
                           animationDelay: "1.1s",
                           animation: isVisible ? "bounce-in 0.8s ease-out 1.1s both" : "none",
                         }}
                       >
                         Minutes
                       </span>
                     </div>
                   </div>
                 </h1>

                                 <p
                   className={`text-lg sm:text-xl text-slate-600 mb-6 max-w-xl font-light leading-relaxed transition-all duration-800 ${
                     isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                   }`}
                   style={{ animationDelay: "0.9s" }}
                 >
                   {heroData.subtitle}
                 </p>
              </div>

                             {/* Stats Row */}
               <div
                 className={`grid grid-cols-3 gap-3 mb-8 transition-all duration-800 ${
                   isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                 }`}
                 style={{ animationDelay: "1s" }}
               >
                 {heroData.stats.map((stat, index) => {
                   const IconComponent = getIconComponent(stat.icon);
                   const delay = `${1.1 + index * 0.2}s`;
                   
                   return (
                     <div
                       key={index}
                       className={`text-center bg-white/60 backdrop-blur-sm rounded-xl p-3 shadow-md border border-white/50 hover:bg-white/80 hover:scale-105 transition-all duration-400 ${
                         isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                       }`}
                       style={{
                         animationDelay: delay,
                         animation: isVisible ? `scale-in 0.6s ease-out ${delay} both` : "none",
                       }}
                     >
                       <IconComponent className="w-5 h-5 mx-auto mb-1 text-yellow-500 animate-bounce" />
                       <div className="text-xl font-bold text-slate-800">{stat.number}</div>
                       <div className="text-xs text-slate-600">{stat.label}</div>
                     </div>
                   );
                 })}
               </div>

                                            {/* CTAs + Download Buttons */}
                <motion.div
                  className={`flex flex-col sm:flex-row gap-6 transition-all duration-800 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ animationDelay: "1.6s" }}
                >
                                 {/* FinLit Learn Group */}
                 <div className="flex flex-col items-center gap-2">
                   <a
                     href={heroData.finlitLearn.playStore}
                     className="group relative bg-gradient-to-r from-slate-800 to-slate-900 text-white px-6 py-3 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
                   >
                     <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                     <div className="relative flex items-center gap-2">
                       <BookOpen className="w-4 h-4" />
                       FinLit Learn
                     </div>
                   </a>
                   <div className="flex flex-row gap-2 mt-1">
                     <a
                       href={heroData.finlitLearn.appStore}
                       className="flex items-center gap-1 bg-white rounded-full px-3 py-1 shadow hover:bg-gray-100 transition group"
                       target="_blank"
                       rel="noopener noreferrer"
                     >
                       <img src={appleIcon} alt="Apple" className="w-4 h-4" />
                       <span className="text-xs text-slate-700">App store</span>
                     </a>
                     <a
                       href={heroData.finlitLearn.playStore}
                       className="flex items-center gap-1 bg-white rounded-full px-3 py-1 shadow hover:bg-gray-100 transition group"
                       target="_blank"
                       rel="noopener noreferrer"
                     >
                       <img src={playstoreIcon} alt="Play Store" className="w-4 h-4" />
                       <span className="text-xs text-slate-700">Play store</span>
                     </a>
                   </div>
                 </div>

                                 {/* FinLit Invest Group */}
                 <div className="flex flex-col items-center gap-2">
                   <a
                     href={heroData.finlitInvest.playStore}
                     className="group relative bg-gradient-to-r from-slate-800 to-slate-900 text-white px-6 py-3 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
                   >
                     <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                     <div className="relative flex items-center gap-2">
                       <TrendingUp className="w-4 h-4" />
                       FinLit Invest
                     </div>
                   </a>
                   <div className="flex flex-row gap-2 mt-1">
                     <a
                       href={heroData.finlitInvest.appStore}
                       className="flex items-center gap-1 bg-white rounded-full px-3 py-1 shadow hover:bg-gray-100 transition group"
                       target="_blank"
                       rel="noopener noreferrer"
                     >
                       <img src={appleIcon} alt="Apple" className="w-4 h-4" />
                       <span className="text-xs text-slate-700">App store</span>
                     </a>
                     <a
                       href={heroData.finlitInvest.playStore}
                       className="flex items-center gap-1 bg-white rounded-full px-3 py-1 shadow hover:bg-gray-100 transition group"
                       target="_blank"
                       rel="noopener noreferrer"
                     >
                       <img src={playstoreIcon} alt="Play Store" className="w-4 h-4" />
                       <span className="text-xs text-slate-700">Play store</span>
                     </a>
                   </div>
                 </div>
              </motion.div>
            </div>

            {/* Right: Video */}
            <motion.div 
              className="w-full lg:w-1/2 flex justify-center items-center relative"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <div className="relative w-full bg-transparent">
                <div className="relative z-10 overflow-hidden bg-transparent">
                  <video
                    src={phone}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Custom Styles */}
        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px) rotate(0deg);
            }
            50% {
              transform: translateY(-15px) rotate(4deg);
            }
          }

          @keyframes bounce-in {
            0% {
              transform: scale(0.4) translateY(15px);
              opacity: 0;
            }
            50% {
              transform: scale(1.03) translateY(-8px);
            }
            70% {
              transform: scale(0.95) translateY(4px);
            }
            100% {
              transform: scale(1) translateY(0px);
              opacity: 1;
            }
          }

          @keyframes glow-pulse {
            0%,
            100% {
              text-shadow: 0 0 15px rgba(250, 204, 21, 0.5);
            }
            50% {
              text-shadow: 0 0 30px rgba(250, 204, 21, 0.7), 0 0 50px rgba(250, 204, 21, 0.3);
            }
          }

          @keyframes scale-in {
            0% {
              transform: scale(0) rotate(160deg);
              opacity: 0;
            }
            50% {
              transform: scale(1.08) rotate(80deg);
            }
            100% {
              transform: scale(1) rotate(0deg);
              opacity: 1;
            }
          }

          @keyframes slide-up {
            0% {
              transform: translateY(40px) scale(0.85);
              opacity: 0;
            }
            100% {
              transform: translateY(0px) scale(1);
              opacity: 1;
            }
          }
        `}</style>
      </section>



      <OurAspirations/>
      <FinancialLiteracy/>

     {/* What is Financial Literacy Section - Enhanced */}
      {/* <motion.section
        className="bg-gradient-to-br from-slate-50 to-white py-24 px-6 md:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariant}
      >
    <div className="container mx-auto px-4">
  <div className="max-w-6xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left: Enhanced Content */}
      {/* <motion.div className="space-y-8" variants={itemVariant}>
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-slate-800 leading-tight">
            What is Financial Literacy?
          </h2>

                </div> */}

{/* <div className="text-sm sm:text-base md:text-base text-slate-700 max-w-3xl mx-auto leading-relaxed px-4">
  <p className="mb-4">
    <strong>Fin Lit Learn</strong> is your go-to platform for bite-sized, India-focused financial education.
    Forget the jargon – our learning modules are crafted for real people with real goals, in their own language and on their own terms.
    We offer gamified and story-based modules that are verified by experts and designed for real impact.
  </p>
  <p>
    <strong>Sample Learning Journeys:</strong><br /><br />
    <strong>Digital Gold Demystified:</strong> Is digital gold safe? Can I gift it? How is it different from a gold loan or jewellery?
    <br /><br />
    <strong>Mutual Funds – What’s Right for Me?</strong> Should I choose lumpsum or SIP? Debt or hybrid? Is ELSS worth it?
    Valuation = value + vision – but how do I calculate it?
  </p>
</div> */}




                {/* Feature List */}
                {/* <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-slate-700">Personal Finance Management</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-slate-700">Budgeting & Planning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-slate-700">Investment Strategies</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-slate-700">Credit Management</span>
                  </div>
                </div> */}

{/* <div className="flex flex-row gap-3 flex-wrap">
  <a href="https://play.google.com/store/apps/details?id=com.thefinlitproject.app" target="_blank" rel="noopener noreferrer">
    <button className="group bg-gradient-to-r from-slate-800 to-slate-900 text-white px-5 py-2.5 rounded-xl font-medium text-base shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-1.5">
      <BookOpen className="w-4 h-4" />
      Play Store
      <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
    </button>
  </a>

  <a href="https://apps.apple.com/us/app/the-fin-lit-project/id1576101765#?platform=iphone" target="_blank" rel="noopener noreferrer">
    <button className="group bg-gradient-to-r from-slate-800 to-slate-900 text-white px-5 py-2.5 rounded-xl font-medium text-base shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-1.5">
      <BookOpen className="w-4 h-4" />
      App Store
      <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
    </button>
  </a>
</div> */}

            {/* </motion.div> */}

              {/* Right: Enhanced Visual */}
              {/* <motion.div className="relative" variants={itemVariant}>
                <div className="relative">
                  {/* Decorative background */}
                  {/* <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl opacity-20"></div>
                  <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl opacity-10"></div>

                  {/* Main content area */}
                  {/* <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-slate-200">
                    <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <TrendingUp className="w-24 h-24 text-yellow-500 mx-auto mb-4" />
                        <div className="text-slate-600 font-medium">Financial Growth</div>
                      </div>
                    </div> */}
                  {/* </div>
                </div> */}
              {/* </motion.div> 
            </div>
          </div>
        </div>
      </motion.section>*/} 

      <Investing />
      <Journey />
      <Supporters />
      <Offerings />
      <TestimonialsSection />
      <FAQ />
      {/* <PremiumMutualFundSection/> */}
    </>
  );
};

export default Hero;