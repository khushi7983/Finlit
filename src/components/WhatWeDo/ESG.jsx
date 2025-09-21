import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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

  const [esgTypes, setEsgTypes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch ESG funds from API
  useEffect(() => {
    fetchESGFunds();
  }, []);

  const fetchESGFunds = async () => {
    try {
      setLoading(true);
      console.log('🔍 Fetching ESG funds from API...');
      
      // Use full URL for development
      const apiUrl = import.meta.env.DEV 
        ? `${import.meta.env.VITE_API_URL || 'http://localhost:5000/api'}/esg-funds` 
        : '/api/esg-funds';
      
      console.log('📡 API URL:', apiUrl);
      
      const response = await fetch(apiUrl);
      console.log('📥 Response status:', response.status);
      
      const data = await response.json();
      console.log('📊 API Response:', data);
      
      if (data.success) {
        // Transform the data to include React icons and fixed colors
        const transformedData = data.data.map((fund, index) => ({
          ...fund,
          icon: getIconComponent(fund.icon),
          // Fixed colors for each card (not from database)
          color: getFixedColor(index),
          bgColor: getFixedBgColor(index)
        }));
        console.log('✅ Transformed data:', transformedData);
        setEsgTypes(transformedData);
      } else {
        console.error('❌ API Error:', data.message);
        setError('Failed to fetch ESG funds');
      }
    } catch (error) {
      console.error('❌ Fetch Error:', error);
      setError('Error fetching ESG funds');
    } finally {
      setLoading(false);
    }
  };

  // Function to get fixed colors for each card
  const getFixedColor = (index) => {
    const colors = [
      'from-green-500 to-green-600',    // Environmental - Green
      'from-pink-500 to-pink-600',      // Social - Pink
      'from-blue-500 to-blue-600',      // Governance - Blue
      'from-purple-500 to-purple-600'   // Thematic - Purple
    ];
    return colors[index] || 'from-gray-500 to-gray-600';
  };

  // Function to get fixed background colors for each card
  const getFixedBgColor = (index) => {
    const bgColors = [
      'bg-green-50',    // Environmental - Light Green
      'bg-pink-50',     // Social - Light Pink
      'bg-blue-50',     // Governance - Light Blue
      'bg-purple-50'    // Thematic - Light Purple
    ];
    return bgColors[index] || 'bg-gray-50';
  };

  // Function to get icon component based on icon name
  const getIconComponent = (iconName) => {
    const iconMap = {
      'Leaf': <Leaf className="w-6 h-6" />,
      'Heart': <Heart className="w-6 h-6" />,
      'Shield': <Shield className="w-6 h-6" />,
      'Globe': <Globe className="w-6 h-6" />,
      'Star': <Star className="w-6 h-6" />,
      'TrendingUp': <TrendingUp className="w-6 h-6" />,
      'Target': <Target className="w-6 h-6" />,
      'Zap': <Zap className="w-6 h-6" />
    };
    return iconMap[iconName] || <Star className="w-6 h-6" />;
  };

  const whyInvestReasons = [
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Strong Performance",
      description: "ESG funds often outperform traditional funds long-term"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Risk Management",
      description: "Companies with good ESG practices face fewer regulatory risks"
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Positive Impact",
      description: "Your money works towards a better planet and society"
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Future-Ready",
      description: "Invest in tomorrow's sustainable economy today"
    }
  ];

  const impactIcons = [
    { icon: <Factory className="w-10 h-10" />, label: "Clean Industries", color: "text-blue-500" },
    { icon: <Recycle className="w-10 h-10" />, label: "Waste Reduction", color: "text-green-500" },
    { icon: <Sun className="w-10 h-10" />, label: "Renewable Energy", color: "text-yellow-500" },
    { icon: <Droplets className="w-10 h-10" />, label: "Water Conservation", color: "text-blue-400" },
    { icon: <TreePine className="w-10 h-10" />, label: "Forest Protection", color: "text-green-600" },
    { icon: <Building className="w-10 h-10" />, label: "Sustainable Cities", color: "text-gray-600" }
  ];

  const appFeatures = [
    { icon: <Target className="w-4 h-4" />, text: "Goal-based ESG portfolios" },
    { icon: <TrendingUp className="w-4 h-4" />, text: "Real-time impact tracking" },
    { icon: <Shield className="w-4 h-4" />, text: "100% secure investing" },
    { icon: <Zap className="w-4 h-4" />, text: "Instant SIP setup" }
  ];

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.12 }
    }
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: "easeOut" }
    }
  };

  const floatingVariant = {
    float: {
      y: [-6, 6, -6],
      transition: {
        duration: 3.2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-green-50 via-blue-50 to-teal-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23f0fdf4%22 fill-opacity=%220.4%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40" aria-hidden />

      {/* Floating Background Elements */}
      <div className="absolute top-16 left-8 w-56 h-56 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-18 animate-pulse" />
      <div className="absolute bottom-16 right-8 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-16 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-12 animate-pulse" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -12 }}
          transition={{ duration: 0.6 }}
        >
          {/* <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4 text-sm">
            <Leaf className="w-4 h-4 text-green-600" />
            <span className="text-xs font-semibold text-green-700">ESG Investing</span>
          </div> */}
          
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight transition-all duration-1000 delay-200">
  <span className="text-slate-800">Invest with</span>
  <br />
  <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
    Purpose & Profit
  </span>
</h1>

          
          <p className="text-sm md:text-sm text-slate-600 max-w-3xl mx-auto leading-relaxed mb-6">
            <span className="font-semibold text-slate-700">ESG Mutual Funds: Where Your Money Meets Your Values</span>
            {/* <br />
            Build wealth while contributing to a sustainable future through Environmental, Social & Governance focused investing. */}
          </p>

          {/* Impact Stats */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
            variants={containerVariant}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div 
              className="bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-md border border-white/50 text-sm"
              variants={cardVariant}
            >
              <div className="text-2xl font-bold text-green-600">₹2.5L Cr+</div>
              <div className="text-xs text-slate-600">ESG Assets in India</div>
            </motion.div>
            <motion.div 
              className="bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-md border border-white/50 text-sm"
              variants={cardVariant}
            >
              <div className="text-2xl font-bold text-blue-600">25%</div>
              <div className="text-xs text-slate-600">Better Returns vs Traditional</div>
            </motion.div>
            <motion.div 
              className="bg-white/80 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-md border border-white/50 text-sm"
              variants={cardVariant}
            >
              <div className="text-2xl font-bold text-purple-600">15M+</div>
              <div className="text-xs text-slate-600">Indians Invested in ESG</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* What is ESG Section */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 12 }}
          transition={{ duration: 0.6, delay: 0.12 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg border border-white/50 relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-2">
                  What are ESG Mutual Funds?
                </h2>
                <p className="text-sm text-slate-600 max-w-2xl mx-auto">
                  ESG stands for Environmental, Social, and Governance — factors used to measure sustainability and ethical impact of investments.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-800 mb-1">Environmental</h3>
                  <p className="text-xs text-slate-600">Climate change, renewable energy, pollution prevention, resource conservation</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-800 mb-1">Social</h3>
                  <p className="text-xs text-slate-600">Employee relations, diversity, community development, human rights</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-sm font-semibold text-slate-800 mb-1">Governance</h3>
                  <p className="text-xs text-slate-600">Board diversity, executive compensation, transparency, business ethics</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Types of ESG Funds */}
        <motion.div 
          className="mb-12"
          variants={containerVariant}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div className="text-center mb-8" variants={cardVariant}>
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-2">
              Types of ESG Mutual Funds
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto">
              Choose the ESG approach that aligns with your values and investment goals
            </p>
          </motion.div>

          {/* Loading State */}
          {loading && (
            <div className="col-span-full text-center py-8">
              <div className="inline-flex items-center gap-2 text-slate-600">
                <div className="w-4 h-4 border-2 border-slate-300 border-t-slate-600 rounded-full animate-spin"></div>
                <span>Loading ESG funds from database...</span>
              </div>
              <p className="text-xs text-slate-500 mt-2">Please ensure server is running on port 5000</p>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="col-span-full text-center py-8">
              <div className="text-red-500 mb-4">
                <Shield className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm">{error}</p>
              </div>
              <button 
                onClick={fetchESGFunds}
                className="px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          )}

          {/* ESG Funds Grid */}
          {!loading && !error && esgTypes.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {esgTypes.map((fund) => (
              <motion.div
                key={fund.id}
                variants={cardVariant}
                className="group cursor-pointer"
                onMouseEnter={() => setActiveCard(fund.id)}
                onMouseLeave={() => setActiveCard(null)}
                whileHover={{ y: -6, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`${fund.bgColor} rounded-2xl p-4 h-full shadow-md border border-white/50 transition-all duration-300 group-hover:shadow-lg relative overflow-hidden`}>
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${fund.color} rounded-full blur-2xl opacity-16 group-hover:opacity-28 transition-opacity duration-300`} />

                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${fund.color} rounded-2xl text-white mb-3 group-hover:scale-105 transition-transform duration-300`}>
                      {fund.icon}
                    </div>

                    <h3 className="text-sm font-semibold text-slate-800 mb-1">
                      {fund.title}
                    </h3>

                    <p className="text-xs font-semibold text-slate-500 mb-2">
                      {fund.subtitle}
                    </p>

                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {fund.description}
                    </p>

                    <div className="mb-3">
                      <h4 className="text-xs font-semibold text-slate-700 mb-1">Focus Areas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {fund.examples.map((example, idx) => (
                          <span key={idx} className="text-[11px] bg-white/60 px-2 py-0.5 rounded-full text-slate-600">
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-semibold text-green-600">
                      <CheckCircle className="w-4 h-4" />
                      {fund.impact}
                    </div>
                  </div>

                  {activeCard === fund.id && (
                    <motion.div
                      className="absolute bottom-3 right-3"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                    >
                      <ChevronRight className="w-5 h-5 text-slate-500" />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
            </div>
          )}
        </motion.div>

        {/* Why Invest in ESG */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 12 }}
          transition={{ duration: 0.6, delay: 0.16 }}
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-4 md:p-6 text-white shadow-md relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h2 className="text-lg sm:text-xl font-semibold mb-2">
                  Why Invest in ESG Funds?
                </h2>
                <p className="text-sm text-blue-100 max-w-2xl mx-auto">
                  Join the global movement of responsible investing and build wealth with purpose
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {whyInvestReasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-2 text-white">
                      {reason.icon}
                    </div>
                    <h3 className="text-sm font-semibold mb-1">{reason.title}</h3>
                    <p className="text-blue-100 text-xs">{reason.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Impact Icons */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <h3 className="text-sm font-semibold text-center mb-4">Your Investment Powers:</h3>
                <div className="flex flex-wrap justify-center gap-6">
                  {impactIcons.map((item, index) => (
                    <motion.div
                      key={index}
                      className="text-center"
                      whileHover={{ scale: 1.06, y: -4 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className={`${item.color} mb-1 flex justify-center`}>
                        {item.icon}
                      </div>
                      <p className="text-[11px] text-blue-100">{item.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Investment Calculator */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 12 }}
          transition={{ duration: 0.6, delay: 0.24 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg border border-white/50 relative overflow-hidden">
            <div className="relative z-10">
              <div className="text-center mb-6">
                <div className='' >
                  {/* <Calculator className="w-4 h-4 text-green-600" /> */}
                  <span className="text-s font-semibold text-green-700">Impact Calculator</span>
                </div>
                <h2 className="text-lg sm:text-xl font-semibold text-slate-800 mb-2">
                  Calculate Your Environmental Impact
                </h2>
                {/* <p className="text-xs text-slate-600 max-w-2xl mx-auto">
                  See how your ESG investment can help save the planet. Even 1% of your income can make a difference!
                </p> */}
              </div>

              <div className="max-w-3xl mx-auto">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-4 mb-4">
                  <div className="text-center mb-4">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Monthly Investment
                    </label>
                    <div className="flex items-center justify-center gap-3 mb-3 text-xs">
                      <span className="text-slate-600">₹500</span>
                      <input
                        type="range"
                        min="500"
                        max="10000"
                        step="100"
                        value={monthlyInvestment}
                        onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                        className="flex-1 max-w-sm h-2 bg-green-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <span className="text-slate-600">₹10,000</span>
                    </div>
                    <div className="text-xl font-bold text-green-600">
                      ₹{monthlyInvestment.toLocaleString()}
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      That's {((monthlyInvestment / 50000) * 100).toFixed(1)}% of a ₹50,000 monthly income
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-3">
                    <motion.div className="bg-white rounded-xl p-3 text-center shadow-sm" whileHover={{ scale: 1.03 }}>
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Factory className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="text-lg font-bold text-green-600">{carbonSaved} kg</div>
                      <div className="text-xs text-slate-600">CO₂ Reduced Annually</div>
                      <div className="text-[11px] text-slate-500 mt-1">Equivalent to planting {Math.round(carbonSaved/22)} trees</div>
                    </motion.div>

                    <motion.div className="bg-white rounded-xl p-3 text-center shadow-sm" whileHover={{ scale: 1.03 }}>
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Droplets className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="text-lg font-bold text-blue-600">{waterSaved} L</div>
                      <div className="text-xs text-slate-600">Water Saved Annually</div>
                      <div className="text-[11px] text-slate-500 mt-1">Enough for {Math.round(waterSaved/365)} days of drinking</div>
                    </motion.div>

                    <motion.div className="bg-white rounded-xl p-3 text-center shadow-sm" whileHover={{ scale: 1.03 }}>
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <TreePine className="w-6 h-6 text-yellow-600" />
                      </div>
                      <div className="text-lg font-bold text-yellow-600">{treesPlanted}</div>
                      <div className="text-xs text-slate-600">Trees Planted Equivalent</div>
                      <div className="text-[11px] text-slate-500 mt-1">Through sustainable companies</div>
                    </motion.div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-sm text-slate-600 mb-3">
                    <span className="font-semibold text-green-600">Pro Tip:</span> Start with just 1% of your income and gradually increase as you see the impact!
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <motion.button
                      className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-xl text-sm font-semibold"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Target className="w-4 h-4" />
                      Start ESG Investing
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                    
                    <motion.button
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-xl text-sm font-semibold"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Calculator className="w-4 h-4" />
                      View Projection
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Download App Section */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 12 }}
          transition={{ duration: 0.6, delay: 0.32 }}
        >
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-4 md:p-6 text-white shadow-md relative overflow-hidden">
            <div className="relative z-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm rounded-full px-3 py-1 mb-3 text-sm">
                    <Smartphone className="w-4 h-4 text-green-400" />
                    <span className="text-xs font-semibold text-green-300">Mobile App</span>
                  </div>
                  
                  <h2 className="text-lg sm:text-xl font-semibold mb-2">
                    Download FinLit Invest
                  </h2>
                  
                  <p className="text-sm text-slate-200 mb-4 leading-relaxed">
                    Track portfolio, measure impact, and build wealth responsibly.
                  </p>

                  <div className="space-y-2 mb-4">
                    {appFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-7 h-7 bg-green-500/20 rounded-md flex items-center justify-center text-green-400">
                          {feature.icon}
                        </div>
                        <span className="text-slate-200 text-sm">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <motion.button
                      className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-xl text-sm font-semibold"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Download className="w-4 h-4" />
                      Play Store
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                    
                    <motion.button
                      className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-sm font-semibold border border-white/20"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Play className="w-4 h-4" />
                      App Store
                    </motion.button>
                  </div>
                </div>

                <div className="relative">
                  <motion.div
                    className="w-64 h-64 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-2xl flex items-center justify-center mx-auto"
                    animate={{ rotate: [0, 4, -4, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="w-52 h-52 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <Smartphone className="w-16 h-16 text-green-400 mx-auto mb-2" />
                        <p className="text-sm font-semibold text-white">FinLit Invest</p>
                        <p className="text-xs text-slate-200">ESG Investment App</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  {/* Floating elements around phone */}
                  <motion.div
                    className="absolute top-2 right-2 w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center"
                    animate={{ y: [-8, 8, -8] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Leaf className="w-6 h-6 text-green-400" />
                  </motion.div>
                  
                  <motion.div
                    className="absolute bottom-6 left-2 w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center"
                    animate={{ y: [8, -8, 8] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <TrendingUp className="w-6 h-6 text-blue-400" />
                  </motion.div>
                  
                  <motion.div
                    className="absolute top-1/2 -right-3 w-10 h-10 bg-yellow-400/20 rounded-full flex items-center justify-center"
                    animate={{ x: [-4, 4, -4] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Heart className="w-5 h-5 text-yellow-400" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 1% Challenge Section */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 12 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-4 md:p-6 text-slate-900 shadow-md relative overflow-hidden">
            <div className="relative z-10 text-center">
              <motion.div
                className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <DollarSign className="w-6 h-6 text-slate-900" />
              </motion.div>
              
              <h2 className="text-xl sm:text-2xl font-semibold mb-3">
                Take the 1% Challenge
              </h2>
              
              <p className="text-sm text-slate-800 max-w-3xl mx-auto leading-relaxed mb-4">
                Commit to investing just 1% of your monthly income in ESG funds. Small steps, big changes!
              </p>

              <div className="grid md:grid-cols-3 gap-3 max-w-2xl mx-auto mb-4">
                <div className="bg-white/20 rounded-xl p-3">
                  <div className="text-xl font-bold mb-1">₹500</div>
                  <div className="text-xs">Start from</div>
                </div>
                <div className="bg-white/20 rounded-xl p-3">
                  <div className="text-xl font-bold mb-1">15 mins</div>
                  <div className="text-xs">Setup time</div>
                </div>
                <div className="bg-white/20 rounded-xl p-3">
                  <div className="text-xl font-bold mb-1">24/7</div>
                  <div className="text-xs">Impact tracking</div>
                </div>
              </div>

              <motion.button
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-2 rounded-xl font-semibold text-sm"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Target className="w-4 h-4" />
                Accept the 1% Challenge
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 12 }}
          transition={{ duration: 0.6, delay: 0.48 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-lg border border-white/50 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-2">
                Ready to Invest with Purpose?
              </h2>
              {/* <p className="text-sm text-slate-600 mb-4 max-w-2xl mx-auto">
                Join thousands of Indians building wealth while creating positive impact.
              </p> */}

              <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
                <motion.a
                  href="tel:+919502696570"
                  className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-xl font-semibold text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call ESG Expert
                </motion.a>
                
                <motion.a
                  href="https://api.whatsapp.com/message/6EUW7ZLTHSGCB1?autoload=1&app_absent=0"
                  className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-xl font-semibold text-sm"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.085"/>
                  </svg>
                  WhatsApp Chat
                </motion.a>
                
                <motion.a
                  href="mailto:info@thefinlitproject.com"
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-xl font-semibold text-sm"
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                </motion.a>
              </div>

              <div className="text-center">
                <motion.button
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-green-400 to-green-500 text-slate-900 px-6 py-2 rounded-xl font-bold text-sm"
                  whileHover={{ scale: 1.03, y: -2 }}
                >
                  <Leaf className="w-4 h-4" />
                  Start Your ESG Journey
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>

              <div className="mt-4 text-[12px] text-slate-500">
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
