import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Download,
  BookOpen,
  TrendingUp,
  Users,
  Target,
  ChevronRight,
  Star,
  Award,
} from "lucide-react";
import Supporters from "./Supporters";
import Offerings from "./Offerings";
import phone from "../../assets/phone.mp4";
import finance from "../../assets/finance.gif";
import Investing from "./Investing";
import TestimonialsSection from "./TestimonialsSection";
import Journey from "./Journey";
import FAQ from "./FAQ";
import playstoreIcon from '../../assets/playstore.png';
import appleIcon from '../../assets/apple.png';
import PremiumMutualFundSection from "./PremiumMutualFundSection";

// Animation variants
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeInOut" },
  },
};

// Slide data (removed since we're using the old video section)
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

  return (
    <>
      {/* Main Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 md:py-32 overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23f1f5f9\' fill-opacity=\'0.4\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

        {/* Interactive Background Orbs */}
        {/* <div
          className="absolute top-20 left-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 transition-all duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            animation: "float 6s ease-in-out infinite",
          }}
        ></div> */}
        {/* <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 transition-all duration-1000 ease-out"
          style={{
            transform: `translate(-${mousePosition.x * 0.03}px, -${mousePosition.y * 0.03}px)`,
            animation: "float 8s ease-in-out infinite reverse",
          }}
        ></div> */}
        {/* <div
          className="absolute top-1/2 left-1/3 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 transition-all duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            animation: "float 10s ease-in-out infinite",
          }}
        ></div> */}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Animated Trust Badge */}
          
          {/* Main Flex Layout */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Left: Enhanced Text and Buttons */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="mb-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                  <span
                    className={`inline-block text-slate-800 transition-all duration-1000 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{
                      animationDelay: "0.4s",
                      animation: isVisible ? "bounce-in 1s ease-out 0.4s both" : "none",
                    }}
                  >
                    Master Your
                  </span>
                  <br />
                  <span
                    className={`inline-block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent transition-all duration-1000 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{
                      animationDelay: "0.6s",
                      animation: isVisible
                        ? "glow-pulse 2s ease-in-out infinite, bounce-in 1s ease-out 0.6s both"
                        : "none",
                    }}
                  >
                    Money
                  </span>
                  <br />
                  <span
                    className={`inline-block text-slate-800 transition-all duration-1000 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{
                      animationDelay: "0.8s",
                      animation: isVisible ? "bounce-in 1s ease-out 0.8s both" : "none",
                    }}
                  >
                    in Minutes
                  </span>
                </h1>

                <p
                  className={`text-xl sm:text-2xl text-slate-600 mb-8 max-w-2xl font-light leading-relaxed transition-all duration-1000 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ animationDelay: "1s" }}
                >
                  Empowering You, One Financial Decision at a Time.
                  <span className="font-medium text-slate-700 animate-pulse">
                    {" "}
                    No finance background? No worries!
                  </span>
                </p>
              </div>

              {/* Enhanced Stats Row */}
              <div
                className={`grid grid-cols-3 gap-4 mb-10 transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: "1.2s" }}
              >
                {[
                  {
                    number: "50K+",
                    label: "Active Users",
                    icon: Users,
                    delay: "1.4s",
                  },
                  {
                    number: "100+",
                    label: "Free Courses",
                    icon: BookOpen,
                    delay: "1.6s",
                  },
                  {
                    number: "4.8★",
                    label: "User Rating",
                    icon: Award,
                    delay: "1.8s",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`text-center bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50 hover:bg-white/80 hover:scale-105 transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{
                      animationDelay: stat.delay,
                      animation: isVisible ? `scale-in 0.8s ease-out ${stat.delay} both` : "none",
                    }}
                  >
                    <stat.icon className="w-6 h-6 mx-auto mb-2 text-yellow-500 animate-bounce" />
                    <div className="text-2xl font-bold text-slate-800 animate-pulse">{stat.number}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>

             {/* Enhanced CTAs + Download Buttons with Ratings */}
<motion.div
  className={`flex flex-col sm:flex-row lg:justify-start justify-center gap-10 transition-all duration-1000 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}
  style={{ animationDelay: "2s" }}
>
  {/* FinLit Learn Group */}
  <div className="flex flex-col items-center gap-3">
    <a
      href="https://play.google.com/store/apps/details?id=com.thefinlitproject.app"
      className="group relative bg-gradient-to-r from-slate-800 to-slate-900 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative flex items-center gap-2">
        <BookOpen className="w-5 h-5" />
        FinLit Learn
      </div>
    </a>
    <div className="flex flex-row gap-3 mt-1">
      {/* App Store Button */}
      <a
        href="https://apps.apple.com/us/app/the-fin-lit-project/id1576101765#?platform=iphone"
        className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow hover:bg-gray-100 transition group"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={appleIcon} alt="Apple" className="w-5 h-5" />
        <span className="text-xs text-slate-700 ml-1">App store</span>
      </a>
      {/* Play Store Button */}
      <a
        href="https://play.google.com/store/apps/details?id=com.thefinlitproject.app"
        className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow hover:bg-gray-100 transition group"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={playstoreIcon} alt="Play Store" className="w-5 h-5" />
        <span className="text-xs text-slate-700 ml-1">Play store</span>
      </a>
    </div>
  </div>

  {/* FinLit Invest Group */}
  <div className="flex flex-col items-center gap-3">
    <a
      href="https://play.google.com/store/apps/details?id=com.thefinlitproject.invest"
      className="group relative bg-gradient-to-r from-slate-800 to-slate-900 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative flex items-center gap-2">
        <TrendingUp className="w-5 h-5" />
        FinLit Invest
      </div>
    </a>
    <div className="flex flex-row gap-3 mt-1">
      {/* App Store Button */}
      <a
        href="#"
        className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow hover:bg-gray-100 transition group"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={appleIcon} alt="Apple" className="w-5 h-5" />
        <span className="text-xs text-slate-700 ml-1">App store</span>
      </a>
      {/* Play Store Button */}
      <a
        href="https://play.google.com/store/apps/details?id=com.thefinlitproject.invest"
        className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow hover:bg-gray-100 transition group"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={playstoreIcon} alt="Play Store" className="w-5 h-5" />
        <span className="text-xs text-slate-700 ml-1">Play store</span>
      </a>
    </div>
  </div>
</motion.div>

            </div>

            {/* Right: Enhanced Video with Old Video Section */}
            <motion.div 
              className="w-full lg:w-1/2 flex justify-center items-center relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div className="relative max-w-[320px] w-full bg-transparent">
                {/* Only the video, no border, no shadow, no rounded corners */}
                <div className="relative z-10 overflow-hidden">
                  <video
                    src={phone} // Make sure this path is correct and the file exists
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
              transform: translateY(-20px) rotate(5deg);
            }
          }

          @keyframes bounce-in {
            0% {
              transform: scale(0.3) translateY(20px);
              opacity: 0;
            }
            50% {
              transform: scale(1.05) translateY(-10px);
            }
            70% {
              transform: scale(0.9) translateY(5px);
            }
            100% {
              transform: scale(1) translateY(0px);
              opacity: 1;
            }
          }

          @keyframes glow-pulse {
            0%,
            100% {
              text-shadow: 0 0 20px rgba(250, 204, 21, 0.5);
            }
            50% {
              text-shadow: 0 0 40px rgba(250, 204, 21, 0.8), 0 0 60px rgba(250, 204, 21, 0.3);
            }
          }

          @keyframes scale-in {
            0% {
              transform: scale(0) rotate(180deg);
              opacity: 0;
            }
            50% {
              transform: scale(1.1) rotate(90deg);
            }
            100% {
              transform: scale(1) rotate(0deg);
              opacity: 1;
            }
          }

          @keyframes slide-up {
            0% {
              transform: translateY(50px) scale(0.8);
              opacity: 0;
            }
            100% {
              transform: translateY(0px) scale(1);
              opacity: 1;
            }
          }
        `}</style>
      </section>

      {/* Our Aspirations Section - Enhanced */}
      <motion.section
        className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 px-6 md:px-12 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariant}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50l20-20v40l-20-20z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariant}>
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Target className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-yellow-400">Our Vision</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">Our Aspirations</h2>
          </motion.div>

          {/* Enhanced Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div className="space-y-6" variants={itemVariant}>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Our Objective</h3>
                <p className="text-lg leading-relaxed text-slate-300">
                  We believe that financial literacy is the skill of managing your finances. It starts with practicing financial attitude and financial behavior leading to financial capability. With the{" "}
                  <span className="text-yellow-400 font-semibold">"Fin Lit Project"</span>{" "}
                  we want to make finance and fintech simple and accessible to everyone.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Our Goal</h3>
                <p className="text-lg leading-relaxed text-slate-300">
                  We aim to take financial literacy to a minimum forty percent by the end of the next five years. To achieve this we have devised Fin Lit Learn (Gamified microcourse self-paced learning) and Fin Lit Invest (Tech-powered investing in the Indian Financial markets, start with Mutual funds today).
                </p>
              </div>
            </motion.div>

            {/* Stats Card */}
            <motion.div
              className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm rounded-3xl p-8 border border-yellow-500/20"
              variants={itemVariant}
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">The Challenge</h3>
                <div className="text-6xl font-black text-yellow-400 mb-2">75%</div>
                <div className="text-xl text-white mb-4">of adults are financially illiterate</div>
                <div className="text-slate-300 text-lg">According to S&P Global Study</div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">40%</div>
                  <div className="text-sm text-slate-400">Target by 2029</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">5 Years</div>
                  <div className="text-sm text-slate-400">Timeline</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* What is Financial Literacy Section - Enhanced */}
      <motion.section
        className="bg-gradient-to-br from-slate-50 to-white py-24 px-6 md:px-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariant}
      >
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Enhanced Content */}
              <motion.div className="space-y-8" variants={itemVariant}>
                <div>
                  <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-slate-800">
                    What is Financial Literacy?
                  </h2>
                </div>

                <div className="prose prose-lg text-slate-600 max-w-none">
                  <p className="text-xl leading-relaxed mb-6">
                    Fin Lit Learn - Bite-sized, India-focused financial education.
                    <br />
                    Forget jargon. Our learning modules are crafted for real people with real goals – in their own language, on their own terms. <br />
                    1. Gamified & story-based modules <br />
                    2. Verified by experts, designed for impact
                  </p>
                  <p className="text-lg leading-relaxed text-slate-600">
                    ✨ Sample Learning Journeys <br />
                    Digital Gold Demystified: Is digital gold safe? Can I gift it? How is it different from a gold loan or jewellery?
                    <br />
                    <b>Mutual funds:</b> What’s Right for Me? Lumpsum or SIP? Debt or hybrid? Is ELSS worth it? Valuation = value + vision. But how do I calculate it?
                  </p>
                </div>

                {/* Feature List */}
                <div className="grid sm:grid-cols-2 gap-4">
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
                </div>

<div className="flex flex-row gap-4">
  <a href="https://play.google.com/store/apps/details?id=com.thefinlitproject.app" target="_blank" rel="noopener noreferrer">
    <button className="group bg-gradient-to-r from-slate-800 to-slate-900 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
      <BookOpen className="w-5 h-5" />
      Play Store
      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </button>
  </a>

  <a href="https://apps.apple.com/us/app/the-fin-lit-project/id1576101765#?platform=iphone" target="_blank" rel="noopener noreferrer">
    <button className="group bg-gradient-to-r from-slate-800 to-slate-900 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
      <BookOpen className="w-5 h-5" />
      App Store
      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </button>
  </a>
</div>
            </motion.div>

              {/* Right: Enhanced Visual */}
              <motion.div className="relative" variants={itemVariant}>
                <div className="relative">
                  {/* Decorative background */}
                  <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl opacity-20"></div>
                  <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl opacity-10"></div>

                  {/* Main content area */}
                  <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-slate-200">
                    <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <TrendingUp className="w-24 h-24 text-yellow-500 mx-auto mb-4" />
                        <div className="text-slate-600 font-medium">Financial Growth</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      <Investing />
      <Journey />
      <Supporters />
      <Offerings />
      <TestimonialsSection />
      <FAQ />
      <PremiumMutualFundSection/>
    </>
  );
};

export default Hero;