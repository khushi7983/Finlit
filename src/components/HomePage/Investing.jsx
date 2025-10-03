
import React from "react";
import { motion } from "framer-motion";
import { BookOpen, TrendingUp, ChevronRight } from "lucide-react";
import Image from "../../assets/invest.png";

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

const Investing = () => (
  <motion.section
    className="bg-white py-24 px-6 md:px-12 md:bg-gradient-to-br md:from-slate-50 md:to-white pt-32 md:pt-24"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={containerVariant}
  >
    <div className="container mx-auto">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image - Order 2 on mobile, 1 on desktop */}
          <motion.div className="relative order-2 lg:order-1" variants={itemVariant}>
  <div className="relative">
    {/* Decorative background */}
    <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl opacity-20"></div>
    <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl opacity-10"></div>

    {/* Main content area */}
    <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-slate-200">
      <div className="aspect-square rounded-2xl overflow-hidden">
        <img 
          src={Image}
          alt="Financial Learning Illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</motion.div>

          {/* Right: Enhanced Visual - Order 1 on mobile, 2 on desktop */}
          <motion.div className="space-y-8 order-1 lg:order-2" variants={itemVariant}>
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-slate-800 leading-tight">
                What is Financial Investing?
              </h2>
            </div>

            <div className="text-sm sm:text-base md:text-base text-slate-700 max-w-3xl mx-auto leading-relaxed px-4">
              <p className="mb-4">
               Investing made intuitive, inclusive, and intelligent.
<br/>
We’ve built tools for Bharat – not just the top 10% of India.
Whether you're a first-time investor or a micro-entrepreneur, Fin Lit Invest helps you make confident, goal-linked decisions.

              </p>
              <p>
<b>What We Offer:</b><br/>
                1. Robo-advisory tool: Your financial guide in 3 minutes or less. <br/>
                2. Portfolio Builder: For those who invest together, grow together.<br/>
                3. Sentiment analysis insights: Real-time, regional intelligence to guide investment choices. <br/>
                4.Trusted mutual fund recommendations : AMFI-license: ARN 249730 <br/>
🛠 Built with compliance. Designed with empathy.
              </p>
            </div>
            

<div className="flex flex-row gap-4">
  <a href="https://play.google.com/store/apps/details?id=com.thefinlitproject.invest" target="_blank" rel="noopener noreferrer">
 <button className="group bg-gradient-to-r from-slate-800 to-slate-900 text-white px-5 py-2.5 rounded-xl font-medium text-base shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-1.5">
      <BookOpen className="w-4 h-4" />
      Play Store
      <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
    </button>
  </a>

  <a href="https://play.google.com/store/apps/details?id=com.thefinlitproject.invest" target="_blank" rel="noopener noreferrer">
<button className="group bg-gradient-to-r from-slate-800 to-slate-900 text-white px-5 py-2.5 rounded-xl font-medium text-base shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-1.5">
      <BookOpen className="w-4 h-4" />
      App Store
      <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
    </button>
  </a>
</div>
                    
          </motion.div>
        </div>
      </div>
    </div>
  </motion.section>
);

export default Investing;