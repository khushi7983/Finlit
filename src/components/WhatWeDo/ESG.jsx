import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Leaf, 
  Globe, 
  Heart, 
  Shield, 
  TrendingUp, 
  Calculator,
  Download,
  ChevronRight,
  Zap,
  Award,
  Users,
  Factory,
  Recycle,
  Sun,
  Droplets,
  TreePine,
  Building,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
  Target,
  DollarSign,
  Smartphone,
  Phone,
  Mail
} from 'lucide-react';

const ESG = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [monthlyInvestment, setMonthlyInvestment] = useState(1000);
  const [carbonSaved, setCarbonSaved] = useState(0);
  const [waterSaved, setWaterSaved] = useState(0);
  const [treesPlanted, setTreesPlanted] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Calculate environmental impact
  useEffect(() => {
    const yearlyInvestment = monthlyInvestment * 12;
    setCarbonSaved(Math.round(yearlyInvestment * 0.05));
    setWaterSaved(Math.round(yearlyInvestment * 0.1));
    setTreesPlanted(Math.round(yearlyInvestment / 500));
  }, [monthlyInvestment]);

  const esgTypes = [
    {
      id: 1,
      title: "Environmental Funds",
      subtitle: "Planet-First Investing",
      description: "Focus on renewable energy, waste management, and sustainable practices",
      icon: <Leaf className="w-8 h-8" />,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      examples: ["Clean Energy", "Water Management", "Sustainable Agriculture"],
      impact: "Reduce carbon footprint by 40%"
    },
    {
      id: 2,
      title: "Social Impact Funds",
      subtitle: "People-First Investing",
      description: "Companies promoting diversity, education, and community development",
      icon: <Heart className="w-8 h-8" />,
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      examples: ["Healthcare Access", "Education", "Gender Equality"],
      impact: "Support 1000+ jobs creation"
    },
    {
      id: 3,
      title: "Governance Funds",
      subtitle: "Ethics-First Investing",
      description: "Companies with transparent practices and ethical leadership",
      icon: <Shield className="w-8 h-8" />,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      examples: ["Corporate Transparency", "Fair Wages", "Anti-Corruption"],
      impact: "Promote ethical business"
    },
    {
      id: 4,
      title: "Thematic ESG Funds",
      subtitle: "Future-First Investing",
      description: "Combine all ESG factors for comprehensive sustainable investing",
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      examples: ["Climate Change", "Circular Economy", "Sustainable Cities"],
      impact: "Holistic positive impact"
    }
  ];

  const whyInvestReasons = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Strong Performance",
      description: "ESG funds often outperform traditional funds long-term"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Risk Management",
      description: "Companies with good ESG practices face fewer regulatory risks"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Positive Impact",
      description: "Your money works towards a better planet and society"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Future-Ready",
      description: "Invest in tomorrow's sustainable economy today"
    }
  ];

  const impactIcons = [
    { icon: <Factory className="w-12 h-12" />, label: "Clean Industries", color: "text-blue-500" },
    { icon: <Recycle className="w-12 h-12" />, label: "Waste Reduction", color: "text-green-500" },
    { icon: <Sun className="w-12 h-12" />, label: "Renewable Energy", color: "text-yellow-500" },
    { icon: <Droplets className="w-12 h-12" />, label: "Water Conservation", color: "text-blue-400" },
    { icon: <TreePine className="w-12 h-12" />, label: "Forest Protection", color: "text-green-600" },
    { icon: <Building className="w-12 h-12" />, label: "Sustainable Cities", color: "text-gray-600" }
  ];

  const appFeatures = [
    { icon: <Target className="w-5 h-5" />, text: "Goal-based ESG portfolios" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Real-time impact tracking" },
    { icon: <Shield className="w-5 h-5" />, text: "100% secure investing" },
    { icon: <Zap className="w-5 h-5" />, text: "Instant SIP setup" }
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
    <section className="relative bg-gradient-to-br from-green-50 via-blue-50 to-teal-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23f0fdf4\' fill-opacity=\'0.4\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
            <Leaf className="w-5 h-5 text-green-600" />
            <span className="text-sm font-semibold text-green-700">ESG Investing</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            <span className="text-slate-800">Invest with</span>
            <br />
            <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
              Purpose & Profit
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
            <span className="font-semibold text-slate-700">ESG Mutual Funds: Where Your Money Meets Your Values</span>
            <br />
            Build wealth while contributing to a sustainable future through Environmental, Social & Governance focused investing.
          </p>

          {/* Impact Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
            variants={containerVariant}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div 
              className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-white/50"
              variants={cardVariant}
            >
              <div className="text-3xl font-bold text-green-600">₹2.5L Cr+</div>
              <div className="text-sm text-slate-600">ESG Assets in India</div>
            </motion.div>
            <motion.div 
              className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-white/50"
              variants={cardVariant}
            >
              <div className="text-3xl font-bold text-blue-600">25%</div>
              <div className="text-sm text-slate-600">Better Returns vs Traditional</div>
            </motion.div>
            <motion.div 
              className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-lg border border-white/50"
              variants={cardVariant}
            >
              <div className="text-3xl font-bold text-purple-600">15M+</div>
              <div className="text-sm text-slate-600">Indians Invested in ESG</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* What is ESG Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400 to-green-500 rounded-full blur-3xl opacity-20"></div>
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
                  What are ESG Mutual Funds?
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  ESG stands for Environmental, Social, and Governance - three key factors used to measure sustainability and ethical impact of investments.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Leaf className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Environmental</h3>
                  <p className="text-slate-600">Climate change, renewable energy, pollution prevention, and resource conservation</p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Social</h3>
                  <p className="text-slate-600">Employee relations, diversity, community development, and human rights</p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">Governance</h3>
                  <p className="text-slate-600">Board diversity, executive compensation, transparency, and business ethics</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Types of ESG Funds */}
        <motion.div 
          className="mb-16"
          variants={containerVariant}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div className="text-center mb-12" variants={cardVariant}>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
              Types of ESG Mutual Funds
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choose the ESG approach that aligns with your values and investment goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {esgTypes.map((fund, index) => (
              <motion.div
                key={fund.id}
                variants={cardVariant}
                className="group cursor-pointer"
                onMouseEnter={() => setActiveCard(fund.id)}
                onMouseLeave={() => setActiveCard(null)}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`${fund.bgColor} rounded-3xl p-8 h-full shadow-lg border border-white/50 transition-all duration-500 group-hover:shadow-2xl relative overflow-hidden`}>
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${fund.color} rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${fund.color} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {fund.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      {fund.title}
                    </h3>
                    
                    <p className="text-sm font-semibold text-slate-500 mb-4">
                      {fund.subtitle}
                    </p>
                    
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {fund.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-slate-700 mb-2">Focus Areas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {fund.examples.map((example, idx) => (
                          <span key={idx} className="text-xs bg-white/60 px-3 py-1 rounded-full text-slate-600">
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm font-semibold text-green-600">
                      <CheckCircle className="w-4 h-4" />
                      {fund.impact}
                    </div>
                  </div>
                  
                  {activeCard === fund.id && (
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

        {/* Why Invest in ESG */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                  Why Invest in ESG Funds?
                </h2>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                  Join the global movement of responsible investing and build wealth with purpose
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {whyInvestReasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-white">
                      {reason.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                    <p className="text-blue-100 text-sm">{reason.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Impact Icons */}
              <div className="mt-12 pt-8 border-t border-white/20">
                <h3 className="text-2xl font-bold text-center mb-8">Your Investment Powers:</h3>
                <div className="flex flex-wrap justify-center gap-8">
                  {impactIcons.map((item, index) => (
                    <motion.div
                      key={index}
                      className="text-center"
                      whileHover={{ scale: 1.1, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`${item.color} mb-2 flex justify-center`}>
                        {item.icon}
                      </div>
                      <p className="text-xs text-blue-100">{item.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Investment Calculator */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-green-400 to-blue-500 rounded-full blur-3xl opacity-20"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 bg-green-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
                  <Calculator className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-semibold text-green-700">Impact Calculator</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
                  Calculate Your Environmental Impact
                </h2>
                <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                  See how your ESG investment can help save the planet. Even 1% of your income can make a difference!
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-8">
                  <div className="text-center mb-8">
                    <label className="block text-lg font-semibold text-slate-700 mb-4">
                      Monthly Investment Amount
                    </label>
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <span className="text-slate-600">₹500</span>
                      <input
                        type="range"
                        min="500"
                        max="10000"
                        step="100"
                        value={monthlyInvestment}
                        onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                        className="flex-1 max-w-md h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <span className="text-slate-600">₹10,000</span>
                    </div>
                    <div className="text-3xl font-bold text-green-600">
                      ₹{monthlyInvestment.toLocaleString()}
                    </div>
                    <p className="text-sm text-slate-500 mt-2">
                      That's {((monthlyInvestment / 50000) * 100).toFixed(1)}% of a ₹50,000 monthly income
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <motion.div
                      className="bg-white rounded-2xl p-6 text-center shadow-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Factory className="w-8 h-8 text-green-600" />
                      </div>
                      <div className="text-2xl font-bold text-green-600">{carbonSaved} kg</div>
                      <div className="text-sm text-slate-600">CO₂ Reduced Annually</div>
                      <div className="text-xs text-slate-500 mt-2">Equivalent to planting {Math.round(carbonSaved/22)} trees</div>
                    </motion.div>

                    <motion.div
                      className="bg-white rounded-2xl p-6 text-center shadow-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Droplets className="w-8 h-8 text-blue-600" />
                      </div>
                      <div className="text-2xl font-bold text-blue-600">{waterSaved} L</div>
                      <div className="text-sm text-slate-600">Water Saved Annually</div>
                      <div className="text-xs text-slate-500 mt-2">Enough for {Math.round(waterSaved/365)} days of drinking</div>
                    </motion.div>

                    <motion.div
                      className="bg-white rounded-2xl p-6 text-center shadow-lg"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <TreePine className="w-8 h-8 text-yellow-600" />
                      </div>
                      <div className="text-2xl font-bold text-yellow-600">{treesPlanted}</div>
                      <div className="text-sm text-slate-600">Trees Planted Equivalent</div>
                      <div className="text-xs text-slate-500 mt-2">Through sustainable companies</div>
                    </motion.div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-lg text-slate-600 mb-6">
                    <span className="font-semibold text-green-600">Pro Tip:</span> Start with just 1% of your income and gradually increase as you see the impact!
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.button
                      className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-green-600 hover:to-green-700 hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Target className="w-5 h-5" />
                      Start ESG Investing
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                    
                    <motion.button
                      className="flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Calculator className="w-5 h-5" />
                      View Detailed Projection
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Download App Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-green-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                    <Smartphone className="w-4 h-4 text-green-400" />
                    <span className="text-sm font-semibold text-green-300">Mobile App</span>
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                    Download FinLit Invest 
                   
                  </h2>
                  
                  <p className="text-xl text-slate-200 mb-8 leading-relaxed">
                    Start your ESG investment journey today. Track your portfolio, measure your impact, and build wealth responsibly.
                  </p>

                  <div className="space-y-4 mb-8">
                    {appFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400">
                          {feature.icon}
                        </div>
                        <span className="text-slate-200">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                      className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-green-600 hover:to-green-700 hover:shadow-lg transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Download className="w-5 h-5" />
                      Play Store
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                    
                    <motion.button
                      className="flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="w-5 h-5" />
                      App Store
                    </motion.button>
                  </div>
                </div>

                <div className="relative">
                  <motion.div
                    className="w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-3xl flex items-center justify-center mx-auto"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="w-64 h-64 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <Smartphone className="w-20 h-20 text-green-400 mx-auto mb-4" />
                        <p className="text-lg font-semibold text-white">FinLit Invest</p>
                        <p className="text-sm text-slate-200">ESG Investment App</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Floating elements around phone */}
                  <motion.div
                    className="absolute top-4 right-4 w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center"
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Leaf className="w-8 h-8 text-green-400" />
                  </motion.div>
                  
                  <motion.div
                    className="absolute bottom-8 left-4 w-16 h-16 bg-blue-400/20 rounded-full flex items-center justify-center"
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <TrendingUp className="w-8 h-8 text-blue-400" />
                  </motion.div>
                  
                  <motion.div
                    className="absolute top-1/2 -right-4 w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center"
                    animate={{ x: [-5, 5, -5] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Heart className="w-6 h-6 text-yellow-400" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 1% Challenge Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-8 md:p-12 text-slate-900 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 text-center">
              <motion.div
                className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <DollarSign className="w-10 h-10 text-slate-900" />
              </motion.div>
              
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Take the 1% Challenge
              </h2>
              
              <p className="text-xl text-slate-800 max-w-4xl mx-auto leading-relaxed mb-8">
                Commit to investing just 1% of your monthly income in ESG funds. Watch your money grow while making a positive impact on the planet. Small steps, big changes!
              </p>

              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
                <div className="bg-white/20 rounded-2xl p-6">
                  <div className="text-3xl font-bold mb-2">₹500</div>
                  <div className="text-sm">Start from just</div>
                </div>
                <div className="bg-white/20 rounded-2xl p-6">
                  <div className="text-3xl font-bold mb-2">15 mins</div>
                  <div className="text-sm">Setup time</div>
                </div>
                <div className="bg-white/20 rounded-2xl p-6">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-sm">Impact tracking</div>
                </div>
              </div>

              <motion.button
                className="inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-800 hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Target className="w-6 h-6" />
                Accept the 1% Challenge
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-40 h-40 bg-green-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">
                Ready to Invest with Purpose?
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Join thousands of Indians building wealth while creating positive environmental and social impact.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <motion.a
                  href="tel:+919502696570"
                  className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-green-600 hover:to-green-700 hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="w-5 h-5" />
                  Call ESG Expert
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
                  WhatsApp Chat
                </motion.a>
                
                <motion.a
                  href="mailto:info@thefinlitproject.com"
                  className="flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5" />
                  Email Us
                </motion.a>
              </div>

              <div className="text-center">
                <motion.button
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-green-400 to-green-500 text-slate-900 px-10 py-5 rounded-2xl font-bold text-lg hover:from-green-500 hover:to-green-600 hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Leaf className="w-6 h-6" />
                  Start Your ESG Journey Today
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>

              <div className="mt-8 text-sm text-slate-500">
                AMFI Registered • BSE & NSE Member • 100% Secure Platform
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ESG;