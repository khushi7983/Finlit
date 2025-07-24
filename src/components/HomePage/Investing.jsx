// import React from 'react'

// const Investing = () => {
//   return (
//     <div>
//       <h2>Investing</h2>
//       <p>Investing is the act of allocating resources, usually money, in order to generate income or profit.</p>
//     </div>
//   )
// }

// export default Investing
import React from "react";
import { motion } from "framer-motion";
import { BookOpen, TrendingUp, ChevronRight } from "lucide-react";

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
                    <div className="text-slate-600 font-medium">
                      Investment Growth
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Enhanced Visual */}
          <motion.div className="space-y-8" variants={itemVariant}>
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-slate-800">
                What is Financial Investing?
              </h2>
            </div>

            <div className="prose prose-lg text-slate-600 max-w-none">
              <p className="text-xl leading-relaxed mb-6">
                Financial investing is the act of allocating money to assets
                with the expectation of generating income or profit over time.
                It involves purchasing assets like stocks, bonds, real estate,
                or mutual funds to build wealth.
              </p>
              <p className="text-lg leading-relaxed text-slate-600">
                Investing is a key component of financial planning, enabling you
                to grow your savings and achieve long-term financial goals. With
                the right knowledge, anyone can start investing, no matter their
                experience level.
              </p>
            </div>

            {/* Feature List */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-slate-700">Stock Market Investing</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-slate-700">Bonds & Fixed Income</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-slate-700">Mutual Funds & ETFs</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-slate-700">Risk Management</span>
              </div>
            </div>

            <button className="group bg-gradient-to-r from-slate-800 to-slate-900 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Read More
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  </motion.section>
);

export default Investing;