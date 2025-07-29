import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  Shield, 
  Target, 
  Smartphone, 
  Globe, 
  Lock, 
  Leaf, 
  Phone, 
  Mail, 
  ChevronRight,
  BookOpen,
  Users,
  PieChart,
  Zap,
  Star,
  CheckCircle,
  Heart,
  Award
} from 'lucide-react';

const Fund = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const whyInvestFeatures = [
    {
      id: 1,
      icon: <Shield className="w-8 h-8" />,
      title: "Guided by Education, Backed by Trust",
      description: "Fully registered & regulated. AMFI-registered distributor and authorized member of BSE StarMF and NSE MF, ensuring transparency and security.",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      id: 2,
      icon: <Target className="w-8 h-8" />,
      title: "Goal-Based Investing",
      description: "Tailored investments for emergency funds, education, or retirement, designed for your life goals.",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50"
    },
    {
      id: 3,
      icon: <Award className="w-8 h-8" />,
      title: "Zero Commission Bias",
      description: "Recommendations based on your best interests, free from hidden incentives.",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      id: 4,
      icon: <Users className="w-8 h-8" />,
      title: "Simple, Human-Centric Experience",
      description: "Jargon-free tools for first-time investors, rural/semi-urban families, and all income levels.",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const whatWeOfferFeatures = [
    {
      id: 1,
      icon: <PieChart className="w-8 h-8" />,
      title: "Curated Mutual Fund Portfolios",
      description: "Designed for short-term, long-term, or specific life stages.",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50"
    },
    {
      id: 2,
      icon: <Zap className="w-8 h-8" />,
      title: "Smart Risk Profiling",
      description: "Invest based on your comfort level with clear guidance.",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      id: 3,
      icon: <Smartphone className="w-8 h-8" />,
      title: "100% Paperless & Phone-Friendly",
      description: "eKYC and SIP setup, optimized for mobile use.",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      id: 4,
      icon: <Globe className="w-8 h-8" />,
      title: "Bharat-First Approach",
      description: "Multilingual support and on-ground assistance through partners.",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50"
    }
  ];

  const esgFeatures = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      text: "Backed by top fund houses"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      text: "Aligned with global sustainability goals"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      text: "Designed for long-term wealth + impact"
    },
    {
      icon: <Star className="w-6 h-6" />,
      text: "Suitable for first-time investors"
    }
  ];

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const floatingVariant = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23f1f5f9\' fill-opacity=\'0.4\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <TrendingUp className="w-5 h-5 text-yellow-600" />
            <span className="text-sm font-semibold text-yellow-700">Mutual Fund Investing</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            <span className="text-slate-800">Mutual Fund Investing</span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Made Simple
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            <span className="font-semibold text-slate-700">Invest with Confidence. Learn as You Grow.</span>
            <br />
            Build wealth through our AMFI-registered platform with BSE StarMF and NSE MF membership.
          </p>

          {/* Credentials Banner */}
          <motion.div 
            className="inline-flex flex-wrap items-center gap-4 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-lg border border-white/50"
            variants={floatingVariant}
            animate="float"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-slate-700">AMFI ARN: 249730</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span className="text-sm font-semibold text-slate-700">BSE: 56333</span>
            </div>
            <div className="flex items-center gap-2">
              <PieChart className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold text-slate-700">NSE: 1000906</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Introduction Card */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full blur-3xl opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-yellow-500" />
                Our Mission
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                At The Fin Lit Project, we believe that wealth creation should be accessible, transparent, and rooted in financial literacy. Through our AMFI-registered mutual fund distribution platform and membership with both BSE StarMF and NSE MF, we make it easier for individuals and families across Bharat to invest wisely and grow their money.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Why Invest Section */}
        <motion.div 
          className="mb-16"
          variants={containerVariant}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div className="text-center mb-12" variants={cardVariant}>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Why Invest in Mutual Funds with Us?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Experience the perfect blend of education, technology, and trust
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyInvestFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                variants={cardVariant}
                className="group cursor-pointer"
                onMouseEnter={() => setActiveFeature(feature.id)}
                onMouseLeave={() => setActiveFeature(null)}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`${feature.bgColor} rounded-3xl p-8 h-full shadow-lg border border-white/50 transition-all duration-500 group-hover:shadow-2xl relative overflow-hidden`}>
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${feature.color} rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-800 mb-4 group-hover:text-slate-900 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                  
                  {activeFeature === feature.id && (
                    <motion.div
                      className="absolute bottom-4 right-4"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                    >
                      <ChevronRight className="w-6 h-6 text-slate-500" />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What We Offer Section */}
        <motion.div 
          className="mb-16"
          variants={containerVariant}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div className="text-center mb-12" variants={cardVariant}>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive solutions for your investment journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whatWeOfferFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                variants={cardVariant}
                className="group"
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`${feature.bgColor} rounded-3xl p-8 h-full shadow-lg border border-white/50 transition-all duration-500 group-hover:shadow-2xl relative overflow-hidden`}>
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${feature.color} rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {feature.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-800 mb-4">
                      {feature.title}
                    </h3>
                    
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Safety Assurance */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Your Money is Safe</h3>
                  <p className="text-green-100">100% Secure & Regulated</p>
                </div>
              </div>
              
              <p className="text-lg text-green-50 leading-relaxed">
                Investments are executed through BSE StarMF and NSE MF platforms. Your money is held with SEBI-regulated fund houses, and we never take custody of your funds.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ESG Section */}
        <motion.div 
          className="mb-16"
          variants={containerVariant}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div variants={cardVariant}>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-400 to-green-500 rounded-full blur-3xl opacity-20"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                    <Leaf className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-slate-800">Invest with Purpose</h2>
                    <p className="text-lg text-slate-600">Explore ESG & Sustainable Funds</p>
                  </div>
                </div>

                <p className="text-lg text-slate-700 mb-8 leading-relaxed">
                  Grow your wealth while staying true to your values with curated ESG Mutual Funds, focusing on climate action, gender equity, and ethical governance.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-green-50 rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <Heart className="w-6 h-6 text-green-600" />
                      Why Choose ESG Funds?
                    </h4>
                    <div className="space-y-3">
                      {esgFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="text-green-600">
                            {feature.icon}
                          </div>
                          <span className="text-slate-700">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-2xl p-6">
                    <h4 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <Zap className="w-6 h-6 text-blue-600" />
                      How It Works
                    </h4>
                    <p className="text-slate-700 leading-relaxed">
                      ESG funds invest in companies with strong environmental, social, and governance practices, excluding polluters and unethical businesses.
                    </p>
                    <div className="mt-4 p-4 bg-white rounded-xl">
                      <p className="text-sm text-slate-600">
                        <strong>Start with ₹100/month</strong> • Paperless process • Multilingual support
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href="#explore-esg"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-green-600 hover:to-green-700 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <Leaf className="w-5 h-5" />
                    Explore ESG Funds Now
                    <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Talk to Us
            </h2>
            <p className="text-lg text-slate-600">
              Not sure where to begin? We're here to guide you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <motion.a
              href="tel:+919502696570"
              className="flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              +91-9502696570
            </motion.a>
            
            <motion.a
              href="https://api.whatsapp.com/message/6EUW7ZLTHSGCB1?autoload=1&app_absent=0"
              className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-green-600 hover:to-green-700 hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.085"/>
              </svg>
              WhatsApp
            </motion.a>
            
            <motion.a
              href="mailto:info@thefinlitproject.com"
              className="flex items-center gap-3 bg-gradient-to-r from-slate-600 to-slate-700 text-white px-8 py-4 rounded-2xl font-semibold hover:from-slate-700 hover:to-slate-800 hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Email Us
            </motion.a>
          </div>

          <div className="text-center">
            <motion.a
              href="#start-investing"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg hover:from-yellow-500 hover:to-yellow-600 hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <TrendingUp className="w-6 h-6" />
              Start Your Investment Journey Now
              <ChevronRight className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>

        {/* Join the Movement */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-6"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Globe className="w-10 h-10 text-slate-900" />
              </motion.div>
              
              <h3 className="text-3xl font-bold mb-6">Join the Movement</h3>
              <p className="text-xl text-slate-200 max-w-4xl mx-auto leading-relaxed">
                The Fin Lit Project is more than just a mutual fund distributor. We are a movement to democratize financial literacy, bring trusted investing tools to the last mile, and help every Indian build real wealth—one SIP at a time.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Fund;