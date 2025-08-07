import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const offerings = [
  {
    title: "Sustainable Investing (ESG Funding)",
    description: "Invest in portfolios that support ESG goals—grow your wealth while making a positive impact.",
    link: "https://api.whatsapp.com/message/6EUW7ZLTHSGCB1?autoload=1&app_absent=0",
    cta: "Start Your Impact",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "Financial Education-as-a-Services FEaaS",
    description: "Boost financial literacy with interactive courses and personalized learning for smarter decisions.",
    link: "https://play.google.com/store/apps/details?id=com.thefinlitproject.app",
    cta: "Discover Courses",
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "AI technology for brokers and fintechs",
    description: "Enhance trading with AI-powered analytics and automation for better investment results.",
    link: "https://www.thefinlitproject.com/mfinvestorregistration/",
    cta: "See Solutions",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Financially Speaking podcast",
    description: "Hear experts share finance tips and insights—listen anytime on our app or on our social media handles.",
    link: "https://www.youtube.com/channel/UCH-nWXtMHz-wmg176HqBSvg",
    cta: "Listen Now",
    gradient: "from-purple-500 to-pink-500",
  },
];

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

const pulseVariant = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Offerings = () => (
  <motion.section
    id="offerings"
    className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={containerVariant}
  >
    <div className="absolute inset-0 opacity-5">
      <div
        className="absolute inset-0 bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 40l15-15v30l-15-15z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`,
        }}
      ></div>
    </div>
    <div className="container mx-auto">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-12" variants={itemVariant}>
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm rounded-full px-3 py-1.5 mb-4">
            <span className="text-xs font-medium text-yellow-400">Our Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Our Offerings
          </h2>
        </motion.div>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariant}>
          {offerings.map((offering) => (
            <motion.div
              key={offering.title}
              className="relative bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/10 p-6 flex flex-col justify-between min-h-[280px] hover:shadow-xl transition-all duration-300"
              variants={itemVariant}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-3">{offering.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{offering.description}</p>
              </div>
              <a
                href={offering.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 inline-flex items-center gap-2 text-yellow-400 font-semibold text-base hover:text-yellow-500 transition-colors"
              >
                {offering.cta}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.p className="text-base text-slate-300 mb-6" variants={pulseVariant} animate="animate">
            Ready to transform your financial future?
          </motion.p>
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-800 to-slate-900 text-white px-6 py-3 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Services
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  </motion.section>
);

export default Offerings;