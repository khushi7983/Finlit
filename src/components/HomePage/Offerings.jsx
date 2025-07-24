import React from 'react';
import { motion } from 'framer-motion';

const offerings = [
  {
    title: 'Sustainable Investing (ESG Funding)',
    description: 'Invest in portfolios that support ESG goals—grow your wealth while making a positive impact.',
    link: 'https://api.whatsapp.com/message/6EUW7ZLTHSGCB1?autoload=1&app_absent=0',
    cta: ' Start Your Impact',
  },
  {
    title: 'Financial Education-as-a-Services FEaaS',
    description: 'Boost financial literacy with interactive courses and personalized learning for smarter decisions.',
   link: 'https://play.google.com/store/apps/details?id=com.thefinlitproject.app',
    cta: 'Discover Courses ',
  },
  {
    title: 'AI technology for brokers and fintechs',
    description: 'Enhance trading with AI-powered analytics and automation for better investment results.',
    link: 'https://www.thefinlitproject.com/mfinvestorregistration/',
    cta: ' See Solutions',
  },
  {
    title: 'Financially Speaking podcast',
    description: 'Hear experts share finance tips and insights—listen anytime on our app or on our social media handles.',
    
     link: 'https://www.youtube.com/channel/UCH-nWXtMHz-wmg176HqBSvg',
    cta: 'Listen Now',
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
};

const Offerings = () => (
  <motion.section 
    id="offerings" 
    className="relative py-24 px-4 md:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={containerVariant}
  >
    <div className="relative z-10 max-w-7xl mx-auto">
      <motion.h2 
        className="text-4xl sm:text-5xl font-black text-center mb-12 text-white tracking-tight"
        variants={itemVariant}
      >
        Our <span className="relative inline-block">
          Offerings
          <span className="absolute left-0 -bottom-1 w-full h-2 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-80 rounded-full -z-10"></span>
        </span>
      </motion.h2>
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariant}
      >
        {offerings.map((offering, idx) => (
          <motion.a
            key={offering.title}
            href={offering.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-2xl hover:border-yellow-400 transition-all duration-300 p-8 min-h-[320px] flex flex-col justify-between hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-yellow-200"
            style={{ boxShadow: '0 8px 32px 0 rgba(16,53,95,0.10)' }}
            variants={itemVariant}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                {offering.title}
              </h3>
            </div>
            <div className="mt-auto">
              <div className="text-base font-medium text-slate-200 mb-6 opacity-90">
                {offering.description}
              </div>
              <span className="inline-flex items-center gap-2 text-yellow-400 font-semibold group-hover:underline group-hover:gap-3 transition-all duration-200">
                {offering.cta}
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
              </span>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  </motion.section>
);

export default Offerings;
