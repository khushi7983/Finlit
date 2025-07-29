import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  Calculator,
  ChevronRight,
  PieChart,
  Shield,
  Smartphone,
  Star,
  Target,
  TrendingUp,
  Trophy
} from 'lucide-react';
import { useEffect, useState } from 'react';

const investmentBoxes = [
  {
    id: 1,
    percentage: "1%",
    income: "₹50,000",
    investment: "₹500",
    returns: "₹2.1L",
    period: "10 years",
    icon: <Star className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-500",
    description: "Start small, dream big"
  },
  {
    id: 2,
    percentage: "2%",
    income: "₹75,000",
    investment: "₹1,500",
    returns: "₹6.3L",
    period: "10 years",
    icon: <TrendingUp className="w-8 h-8" />,
    gradient: "from-green-500 to-emerald-500",
    description: "Double the commitment, triple the growth"
  },
  {
    id: 3,
    percentage: "3%",
    income: "₹1,00,000",
    investment: "₹3,000",
    returns: "₹12.6L",
    period: "10 years",
    icon: <Trophy className="w-8 h-8" />,
    gradient: "from-purple-500 to-pink-500",
    description: "Premium wealth building"
  }
];

const premiumFeatures = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "SEBI Regulated",
    subtitle: "100% Safe & Secure",
    gradient: "from-yellow-400 to-orange-400"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Goal-Based",
    subtitle: "Tailored for You",
    gradient: "from-blue-400 to-cyan-400"
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile First",
    subtitle: "Invest Anywhere",
    gradient: "from-green-400 to-emerald-400"
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Learn & Grow",
    subtitle: "Financial Education",
    gradient: "from-purple-400 to-pink-400"
  }
];

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3, duration: 0.8 }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 50, scale: 0.8, rotateX: -15 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: { type: "spring", damping: 20, stiffness: 100, duration: 0.8 } 
  }
};

const floatingVariant = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  }
};

const pulseVariant = {
  animate: {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
  }
};

const BackgroundParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-slate-900/20 rounded-full"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] }}
          transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
};

const PremiumMutualFundSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredBox, setHoveredBox] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.section 
      className="relative py-24 px-4 md:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariant}
    >
      <BackgroundParticles />
      
      <motion.div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-slate-900/10 to-slate-800/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-900/10 to-indigo-900/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], rotate: [360, 180, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2 
          className="text-4xl sm:text-5xl font-black text-center mb-12 bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent tracking-tight"
          variants={itemVariant}
        >
          Invest Just{' '}
          <motion.span 
            className="relative inline-block"
            whileHover={{ scale: 1.05, transition: { type: "spring", stiffness: 400 } }}
          >
            1% of Your Income
            <motion.span 
              className="text-4xl sm:text-5xl font-black text-center mb-12 bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent tracking-tight"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            />
            <motion.span
              className="absolute left-0 -bottom-1 w-full h-2 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full -z-10"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.span>
        </motion.h2>

        <motion.p 
          className="text-lg text-center mb-12 max-w-3xl mx-auto text-slate-800"
          variants={itemVariant}
        >
          Small steps today, giant leaps tomorrow. See how investing just 1% of your income can build substantial wealth over time.
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          variants={containerVariant}
        >
          {investmentBoxes.map((box, index) => (
            <motion.div
              key={box.id}
              variants={itemVariant}
              className="relative group"
              onMouseEnter={() => setHoveredBox(box.id)}
              onMouseLeave={() => setHoveredBox(null)}
            >
              <motion.div
                className={`absolute -inset-0.5 bg-gradient-to-r ${box.gradient} rounded-3xl blur opacity-0 group-hover:opacity-75 transition duration-1000`}
                whileHover={{ opacity: 0.75 }}
              />
              <div 
                className="relative rounded-3xl bg-white/80 backdrop-blur-md border border-slate-200/50 shadow-xl group-hover:shadow-2xl transition-all duration-500 p-8 min-h-[400px] flex flex-col justify-between"
                style={{ boxShadow: '0 8px 32px 0 rgba(16,53,95,0.10)' }}
              >
                {index === 1 && (
                  <div className="absolute -top-2 -right-2">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full transform rotate-12">
                      POPULAR
                    </div>
                  </div>
                )}
                <motion.div 
                  className="absolute top-6 right-6 text-4xl text-slate-900"
                  variants={floatingVariant}
                  animate="animate"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
                >
                  {box.icon}
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full"
                  animate={{ translateX: [-100, 400] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "linear" }}
                />
                <div>
                  <motion.h3 
                    className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent mb-4 group-hover:text-yellow-500 transition-colors duration-300 pr-16"
                    whileHover={{ x: 4 }}
                  >
                    {box.percentage}
                  </motion.h3>
                  <motion.div 
                    className="text-base font-medium text-slate-700 mb-6 opacity-90"
                    whileHover={{ opacity: 1 }}
                  >
                    {box.description}
                  </motion.div>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Monthly Income</span>
                      <span className="font-semibold text-slate-800">{box.income}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Monthly SIP</span>
                      <span className="font-semibold text-slate-800">{box.investment}</span>
                    </div>
                    <div className="h-px bg-slate-300/50"></div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-slate-600">Expected Returns*</span>
                      <span className="font-bold text-lg text-yellow-500">{box.returns}</span>
                    </div>
                    <div className="text-xs text-slate-500 text-center">{box.period} @ 12% CAGR</div>
                  </div>
                </div>
                <motion.button
                  className={`w-full bg-gradient-to-r ${box.gradient} text-white py-3 rounded-xl font-semibold group-hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2`}
                  whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(250, 204, 21, 0.3)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Start SIP
                  <motion.span 
                    whileHover={{ x: 4, transition: { type: "spring", stiffness: 400 } }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </motion.button>
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${box.gradient} opacity-0 rounded-3xl transition-opacity duration-500`}
                  whileHover={{ opacity: 0.05 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mb-16"
          variants={itemVariant}
        >
          {/* <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-200/50">
            <motion.h3 
              className="text-3xl font-bold text-center bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent mb-4"
              variants={itemVariant}
            >
              Why The Fin Lit Project?
            </motion.h3>
            <motion.p 
              className="text-center mb-10 max-w-2xl mx-auto text-slate-800"
              variants={itemVariant}
            >
              Your trusted partner in building wealth through systematic investing
            </motion.p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {premiumFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  variants={floatingVariant}
                  animate="animate"
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="text-white">{feature.icon}</div>
                  </motion.div>
                  <h4 className="font-semibold mb-1 bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent">{feature.title}</h4>
                  <p className="text-slate-600 text-sm">{feature.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </div> */}
        </motion.div>

        <motion.div 
          className="mb-12"
          variants={itemVariant}
        >
          <div className="text-center">
            <div className="inline-flex flex-wrap items-center gap-6 bg-white/50 backdrop-blur-sm rounded-2xl px-8 py-4 border border-slate-200/50">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-semibold text-slate-800">AMFI ARN: 249730</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-semibold text-slate-800">BSE Member: 56333</span>
              </div>
              <div className="flex items-center gap-2">
                <PieChart className="w-5 h-5 text-yellow-500" />
                <span className="text-sm font-semibold text-slate-800">NSE Member: 1000906</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="text-center"
          variants={itemVariant}
        >
          <motion.h3 
            className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-800 bg-clip-text text-transparent mb-4"
            variants={pulseVariant}
            animate="animate"
          >
            Ready to Start Your Wealth Journey?
          </motion.h3>
          <motion.p 
            className="text-lg mb-8 max-w-2xl mx-auto text-slate-800"
            variants={pulseVariant}
            animate="animate"
          >
            Join thousands of Indians who are building wealth systematically. Start with just 1% of your income today.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#start-investing"
              className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(250, 204, 21, 0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Calculator className="w-5 h-5" />
              Calculate Your SIP
              <ChevronRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="tel:+919502696570"
              className="px-8 py-4 bg-white/50 backdrop-blur-sm text-slate-800 font-semibold rounded-full hover:bg-white/70 transition-all duration-300 inline-flex items-center gap-3 border border-slate-200/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Talk to Expert
            </motion.a>
          </div>
          <p className="text-xs text-slate-600 mt-6">
            *Returns are indicative and based on historical performance. Mutual fund investments are subject to market risks.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PremiumMutualFundSection;