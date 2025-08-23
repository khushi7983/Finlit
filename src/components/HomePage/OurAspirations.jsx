import React from 'react'
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

const OurAspirations = () => {
  return (
    <div>
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
            {/* <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm rounded-full px-3 py-1.5 mb-4">
              <Target className="w-3 h-3 text-yellow-400" />
              <span className="text-xs font-medium text-yellow-400">Our Vision</span>
            </div> */}
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
      <motion.section className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-black py-8 px-4 md:px-8 overflow-hidden">
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
            {/* <div className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-sm rounded-full px-3 py-1.5 mb-4">
              <Users className="w-3 h-3 text-red-400" />
              <span className="text-xs font-medium text-red-400">Global Issue</span>
            </div> */}
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
    </div>
  )
}

export default OurAspirations
