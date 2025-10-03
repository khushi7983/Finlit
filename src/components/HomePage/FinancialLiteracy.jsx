import React from 'react';
import { motion } from "framer-motion";
import {
  BookOpen,
  TrendingUp,
  ChevronRight,
} from "lucide-react";
import Image from "../../assets/literacy.png";

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

const FinancialLiteracy = () => {
  return (
    <div>
      <motion.section
        className="bg-gradient-to-br from-slate-50 to-white py-24 px-6 md:px-12 md:bg-gradient-to-br md:from-slate-50 md:to-white pb-32 md:pb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariant}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Enhanced Content - Order 1 on mobile, 1 on desktop */}
              <motion.div className="space-y-8 order-1 lg:order-1" variants={itemVariant}>
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-slate-800 leading-tight">
                    What is Financial Literacy?
                  </h2>
                </div>

                <div className="text-sm sm:text-base md:text-base text-slate-700 max-w-3xl mx-auto leading-relaxed px-4">
                  <p className="mb-4">
                    <strong>Fin Lit Learn</strong> is your go-to platform for bite-sized, India-focused financial education.
                    Forget the jargon – our learning modules are crafted for real people with real goals, in their own language and on their own terms.
                    We offer gamified and story-based modules that are verified by experts and designed for real impact.
                  </p>
                  <p>
                    <strong>Sample Learning Journeys:</strong><br /><br />
                    <strong>Digital Gold Demystified:</strong> Is digital gold safe? Can I gift it? How is it different from a gold loan or jewellery?
                    <br /><br />
                    <strong>Mutual Funds – What's Right for Me?</strong> Should I choose lumpsum or SIP? Debt or hybrid? Is ELSS worth it?
                    Valuation = value + vision – but how do I calculate it?
                  </p>
                </div>

                <div className="flex flex-row gap-3 flex-wrap">
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
                </div>
              </motion.div>

              {/* Right: Enhanced Visual - Order 2 on mobile, 2 on desktop */}
         <motion.div className="relative order-2 lg:order-2" variants={itemVariant}>
  <div className="relative">
    {/* Decorative background */}
    <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl opacity-20"></div>
    <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl opacity-10"></div>

    {/* Main content area with image */}
    <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-slate-200">
      <div className="aspect-square rounded-2xl overflow-hidden">
        <img 
          src= {Image} 
          alt="Financial Growth Illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </div>
</motion.div>

            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default FinancialLiteracy;
