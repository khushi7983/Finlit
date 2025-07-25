import React from 'react';
import { motion } from 'framer-motion';

const offerings = [
  {
    title: 'Sustainable Investing (ESG Funding)',
    description: 'Invest in portfolios that support ESG goals—grow your wealth while making a positive impact.',
    link: 'https://api.whatsapp.com/message/6EUW7ZLTHSGCB1?autoload=1&app_absent=0',
    cta: 'Start Your Impact',
    icon: '🌱',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    title: 'Financial Education-as-a-Services FEaaS',
    description: 'Boost financial literacy with interactive courses and personalized learning for smarter decisions.',
    link: 'https://play.google.com/store/apps/details?id=com.thefinlitproject.app',
    cta: 'Discover Courses',
    icon: '🎓',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    title: 'AI technology for brokers and fintechs',
    description: 'Enhance trading with AI-powered analytics and automation for better investment results.',
    link: 'https://www.thefinlitproject.com/mfinvestorregistration/',
    cta: 'See Solutions',
    icon: '🤖',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Financially Speaking podcast',
    description: 'Hear experts share finance tips and insights—listen anytime on our app or on our social media handles.',
    link: 'https://www.youtube.com/channel/UCH-nWXtMHz-wmg176HqBSvg',
    cta: 'Listen Now',
    icon: '🎙️',
    gradient: 'from-purple-500 to-pink-500'
  },
];

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.15, 
      delayChildren: 0.3,
      duration: 0.8
    },
  },
};

const itemVariant = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.8,
    rotateX: -15
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: { 
      type: "spring",
      damping: 20,
      stiffness: 100,
      duration: 0.8
    } 
  },
};

const floatingVariant = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const pulseVariant = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const BackgroundParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-yellow-400/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
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
    <BackgroundParticles />
    
    {/* Animated background gradients */}
    <motion.div 
      className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl"
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
    />
    <motion.div 
      className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
      animate={{
        scale: [1, 1.3, 1],
        rotate: [360, 180, 0],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear"
      }}
    />

    <div className="relative z-10 max-w-7xl mx-auto">
      <motion.h2 
        className="text-4xl sm:text-5xl font-black text-center mb-12 text-white tracking-tight"
        variants={itemVariant}
      >
        Our{' '}
        <motion.span 
          className="relative inline-block"
          whileHover={{ 
            scale: 1.05,
            transition: { type: "spring", stiffness: 400 }
          }}
        >
          Offerings
          <motion.span 
            className="absolute left-0 -bottom-1 w-full h-2 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-80 rounded-full -z-10"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          />
          <motion.span
            className="absolute left-0 -bottom-1 w-full h-2 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full -z-10"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.span>
      </motion.h2>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariant}
      >
        {offerings.map((offering, idx) => (
          <motion.div
            key={offering.title}
            variants={itemVariant}
            className="relative"
          >
            {/* Glowing border effect */}
            <motion.div
              className={`absolute -inset-0.5 bg-gradient-to-r ${offering.gradient} rounded-3xl blur opacity-0 group-hover:opacity-75 transition duration-1000`}
              whileHover={{ opacity: 0.75 }}
            />
            
            <motion.a
              href={offering.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 p-8 min-h-[320px] flex flex-col justify-between focus:outline-none focus:ring-4 focus:ring-yellow-200 overflow-hidden"
              style={{ boxShadow: '0 8px 32px 0 rgba(16,53,95,0.10)' }}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                boxShadow: '0 20px 60px 0 rgba(16,53,95,0.20)',
                borderColor: 'rgba(250, 204, 21, 0.5)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Animated icon */}
              <motion.div 
                className="absolute top-6 right-6 text-4xl"
                variants={floatingVariant}
                animate="animate"
                whileHover={{ 
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                {offering.icon}
              </motion.div>

              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full"
                animate={{
                  translateX: [-100, 400],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "linear"
                }}
              />

              <div>
                <motion.h3 
                  className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300 pr-16"
                  whileHover={{ x: 4 }}
                >
                  {offering.title}
                </motion.h3>
              </div>

              <div className="mt-auto">
                <motion.div 
                  className="text-base font-medium text-slate-200 mb-6 opacity-90"
                  whileHover={{ opacity: 1 }}
                >
                  {offering.description}
                </motion.div>
                
                <motion.span 
                  className="inline-flex items-center gap-2 text-yellow-400 font-semibold group-hover:underline transition-all duration-300"
                  whileHover={{ 
                    gap: '0.75rem',
                    color: '#fbbf24'
                  }}
                >
                  {offering.cta}
                  <motion.svg 
                    width="20" 
                    height="20" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24"
                    whileHover={{ 
                      x: 4,
                      transition: { type: "spring", stiffness: 400 }
                    }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                  </motion.svg>
                </motion.span>
              </div>

              {/* Gradient overlay on hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${offering.gradient} opacity-0 rounded-3xl transition-opacity duration-500`}
                whileHover={{ opacity: 0.05 }}
              />
            </motion.a>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to action with pulsing effect */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.p 
          className="text-slate-300 text-lg mb-8"
          variants={pulseVariant}
          animate="animate"
        >
          Ready to transform your financial future?
        </motion.p>
        <motion.button
          className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          whileHover={{ 
            scale: 1.05,
            boxShadow: '0 10px 30px rgba(250, 204, 21, 0.3)'
          }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              '0 4px 20px rgba(250, 204, 21, 0.1)',
              '0 8px 30px rgba(250, 204, 21, 0.2)',
              '0 4px 20px rgba(250, 204, 21, 0.1)'
            ]
          }}
          transition={{
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          Explore All Services
        </motion.button>
      </motion.div>
    </div>
  </motion.section>
);

export default Offerings;