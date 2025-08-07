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
  DollarSign,
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
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16 md:py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23f1f5f9\' fill-opacity=\'0.4\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Flex Layout */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left: Text and Buttons */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="mb-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 leading-tight">
                  <span
                    className={`inline-block text-slate-800 transition-all duration-800 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{
                      animationDelay: "0.3s",
                      animation: isVisible ? "bounce-in 0.8s ease-out 0.3s both" : "none",
                    }}
                  >
                    Master Your
                  </span>
                  <br />
                  <span
                    className={`inline-block bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent transition-all duration-800 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{
                      animationDelay: "0.5s",
                      animation: isVisible ? "glow-pulse 1.8s ease-in-out infinite, bounce-in 0.8s ease-out 0.5s both" : "none",
                    }}
                  >
                    Money
                  </span>
                  <br />
                  <span
                    className={`inline-block text-slate-800 transition-all duration-800 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{
                      animationDelay: "0.7s",
                      animation: isVisible ? "bounce-in 0.8s ease-out 0.7s both" : "none",
                    }}
                  >
                    in Minutes
                  </span>
                </h1>

                <p
                  className={`text-lg sm:text-xl text-slate-600 mb-6 max-w-xl font-light leading-relaxed transition-all duration-800 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ animationDelay: "0.9s" }}
                >
                  Empowering You, One Financial Decision at a Time.
                  <span className="font-medium text-slate-700 animate-pulse">
                    {" "}
                    No finance background? No worries!
                  </span>
                </p>
              </div>

              {/* Stats Row */}
              <div
                className={`grid grid-cols-3 gap-3 mb-8 transition-all duration-800 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: "1s" }}
              >
                {[
                  {
                    number: "50K+",
                    label: "Active Users",
                    icon: Users,
                    delay: "1.1s",
                  },
                  {
                    number: "100+",
                    label: "Free Courses",
                    icon: BookOpen,
                    delay: "1.3s",
                  },
                  {
                    number: "4.8★",
                    label: "User Rating",
                    icon: Award,
                    delay: "1.5s",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className={`text-center bg-white/60 backdrop-blur-sm rounded-xl p-3 shadow-md border border-white/50 hover:bg-white/80 hover:scale-105 transition-all duration-400 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{
                      animationDelay: stat.delay,
                      animation: isVisible ? `scale-in 0.6s ease-out ${stat.delay} both` : "none",
                    }}
                  >
                    <stat.icon className="w-5 h-5 mx-auto mb-1 text-yellow-500 animate-bounce" />
                    <div className="text-xl font-bold text-slate-800">{stat.number}</div>
                    <div className="text-xs text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* CTAs + Download Buttons */}
              <motion.div
                className={`flex flex-col sm:flex-row lg:justify-start justify-center gap-6 transition-all duration-800 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ animationDelay: "1.6s" }}
              >
                {/* FinLit Learn Group */}
                <div className="flex flex-col items-center gap-2">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.thefinlitproject.app"
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
                      href="https://apps.apple.com/us/app/the-fin-lit-project/id1576101765#?platform=iphone"
                      className="flex items-center gap-1 bg-white rounded-full px-3 py-1 shadow hover:bg-gray-100 transition group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={appleIcon} alt="Apple" className="w-4 h-4" />
                      <span className="text-xs text-slate-700">App store</span>
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.thefinlitproject.app"
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
                    href="https://play.google.com/store/apps/details?id=com.thefinlitproject.invest"
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
                      href="#"
                      className="flex items-center gap-1 bg-white rounded-full px-3 py-1 shadow hover:bg-gray-100 transition group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={appleIcon} alt="Apple" className="w-4 h-4" />
                      <span className="text-xs text-slate-700">App store</span>
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.thefinlitproject.invest"
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

      {/* Our Aspirations Section */}
      <motion.section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 40l15-15v30l-15-15z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm rounded-full px-3 py-1.5 mb-4">
              <Target className="w-3 h-3 text-yellow-400" />
              <span className="text-xs font-medium text-yellow-400">Our Vision</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Our Aspirations</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Our Objective</h3>
              </div>
              <p className="text-base leading-relaxed text-slate-300">
                We believe that financial literacy is the skill of managing your finances. It starts with practicing financial attitude and financial behavior leading to financial capability. With the{" "}
                <span className="text-yellow-400 font-semibold">"Fin Lit Project"</span>{" "}
                we want to make finance and fintech simple and accessible to everyone.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="w-4 h-4 text-blue-400" />
                <h3 className="text-xl font-bold text-white">Our Goal</h3>
              </div>
              <p className="text-base leading-relaxed text-slate-300 mb-4">
                We aim to take financial literacy to a minimum forty percent by the end of the next five years. To achieve this we have devised:
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                  <span className="text-slate-300">
                    <span className="text-yellow-400 font-semibold">Fin Lit Learn</span> - Gamified microcourse self-paced learning
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                  <span className="text-slate-300">
                    <span className="text-yellow-400 font-semibold">Fin Lit Invest</span> - Tech-powered investing in Indian Financial markets
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* The Challenge Section */}
      <motion.section className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-black py-16 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='1.5' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm rounded-full px-3 py-1.5 mb-4">
              <Users className="w-3 h-3 text-red-400" />
              <span className="text-xs font-medium text-red-400">Global Issue</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">The Challenge</h2>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
            <div className="text-center mb-8">
              <div className="text-5xl md:text-6xl font-black text-red-400 mb-2">75%</div>
              <div className="text-lg md:text-xl text-white font-bold mb-2">
                of adults are financially illiterate
              </div>
              <div className="text-base text-slate-400">
                According to S&P Global Study
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="text-2xl font-bold text-yellow-400 mb-1">40%</div>
                <div className="text-base text-white font-semibold mb-1">Target by 2029</div>
                <div className="text-xs text-slate-400">Our ambitious goal</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="text-2xl font-bold text-blue-400 mb-1">5</div>
                <div className="text-base text-white font-semibold mb-1">Years Timeline</div>
                <div className="text-xs text-slate-400">To achieve our goal</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="text-2xl font-bold text-green-400 mb-1">2029</div>
                <div className="text-base text-white font-semibold mb-1">Target Year</div>
                <div className="text-xs text-slate-400">Mission deadline</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* What is Financial Literacy Section */}
      <motion.section
        className="bg-gradient-to-br from-slate-50 to-white py-16 px-4 md:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariant}
      >
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div className="space-y-6" variants={itemVariant}>
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-800">
                    What is Financial Literacy?
                  </h2>
                </div>

                <div className="prose prose-base text-slate-600 max-w-none">
                  <p className="text-lg leading-relaxed mb-4">
                    Fin Lit Learn - Bite-sized, India-focused financial education.
                    <br />
                    Forget jargon. Our learning modules are crafted for real people with real goals – in their own language, on their own terms. <br />
                    1. Gamified & story-based modules <br />
                    2. Verified by experts, designed for impact
                  </p>
                  <p className="text-base leading-relaxed text-slate-600">
                    ✨ Sample Learning Journeys <br />
                    Digital Gold Demystified: Is digital gold safe? Can I gift it? How is it different from a gold loan or jewellery?
                    <br />
                    <b>Mutual funds:</b> What’s Right for Me? Lumpsum or SIP? Debt or hybrid? Is ELSS worth it? Valuation = value + vision. But how do I calculate it?
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                    <span className="text-slate-700 text-sm">Personal Finance Management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                    <span className="text-slate-700 text-sm">Budgeting & Planning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                    <span className="text-slate-700 text-sm">Investment Strategies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                    <span className="text-slate-700 text-sm">Credit Management</span>
                  </div>
                </div>

                <div className="flex flex-row gap-3">
                  <a href="https://play.google.com/store/apps/details?id=com.thefinlitproject.app" target="_blank" rel="noopener noreferrer">
                    <button className="group bg-gradient-to-r from-slate-800 to-slate-900 text-white px-6 py-3 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      Play Store
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </a>

                  <a href="https://apps.apple.com/us/app/the-fin-lit-project/id1576101765#?platform=iphone" target="_blank" rel="noopener noreferrer">
                    <button className="group bg-gradient-to-r from-slate-800 to-slate-900 text-white px-6 py-3 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      App Store
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </a>
                </div>
              </motion.div>

              <motion.div className="relative" variants={itemVariant}>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl opacity-20"></div>
                  <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl opacity-10"></div>

                  <div className="relative bg-white rounded-2xl shadow-xl p-6 border border-slate-200">
                    <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center">
                      <div className="text-center">
                        <TrendingUp className="w-16 h-16 text-yellow-500 mx-auto mb-3" />
                        <div className="text-slate-600 font-medium text-sm">Financial Growth</div>
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
      {/* <PremiumMutualFundSection/> */}
    </>
  );
};

export default Hero;