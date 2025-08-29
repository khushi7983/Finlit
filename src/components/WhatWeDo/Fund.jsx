import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  Award,
} from "lucide-react";

// Icon mapping for dynamic icons
const iconMap = {
  Shield,
  Target,
  Award,
  Users,
  PieChart,
  Zap,
  Smartphone,
  Globe,
  CheckCircle,
  Leaf,
  TrendingUp,
  Star,
  Heart
};

const Fund = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);
  const [fundData, setFundData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsVisible(true);
    fetchFundData();
  }, []);

  const fetchFundData = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/fund');
      const data = await response.json();
      
      if (data.success) {
        setFundData(data.data);
      } else {
        setError('Failed to fetch fund data');
      }
    } catch (err) {
      console.error('Error fetching fund data:', err);
      setError('Error fetching fund data');
    } finally {
      setLoading(false);
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-yellow-500 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading Fund Information...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !fundData) {
    return (
      <div className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg max-w-md mx-auto">
            <p className="font-medium">{error || 'Fund data not available'}</p>
            <button 
              onClick={fetchFundData}
              className="mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  const containerVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const floatingVariant = {
    float: {
      y: [-8, 8, -8],
      transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23f1f5f9%22 fill-opacity=%220.4%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"
        aria-hidden
      />

      {/* Floating Background Elements */}
      <div className="absolute top-10 left-10 w-60 h-60 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-18 animate-pulse" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-12 animate-pulse" style={{ animationDelay: "4s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10 max-w-7xl">
        {/* Header Section */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -18 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
            <span className="text-slate-800">{fundData.title}</span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              {fundData.subtitle}
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-4">
            <span className="font-semibold text-slate-700">{fundData.description}</span>
          </p>

          {/* Credentials Banner */}
          <motion.div
            className="inline-flex flex-wrap items-center gap-3 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-white/50 text-sm"
            variants={floatingVariant}
            animate="float"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-semibold text-slate-700">AMFI ARN: {fundData.credentials.amfiArn}</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="text-xs font-semibold text-slate-700">BSE: {fundData.credentials.bseCode}</span>
            </div>
            <div className="flex items-center gap-2">
              <PieChart className="w-4 h-4 text-purple-600" />
              <span className="text-xs font-semibold text-slate-700">NSE: {fundData.credentials.nseCode}</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Introduction Card */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 18 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border border-white/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full blur-3xl opacity-18" />
            <div className="relative z-10">
              <h2 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-yellow-500" />
                {fundData.mission.title}
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                {fundData.mission.content}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Why Invest Section */}
        <motion.div className="mb-8" variants={containerVariant} initial="hidden" animate={isVisible ? "visible" : "hidden"}>
          <motion.div className="text-center mb-6" variants={cardVariant}>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">Why Invest in Mutual Funds with Us?</h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto">Experience the perfect blend of education, technology, and trust</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fundData.whyInvestFeatures.map((feature) => {
              const IconComponent = iconMap[feature.icon];
              return (
              <motion.div
                key={feature.id}
                variants={cardVariant}
                className="group cursor-pointer"
                onMouseEnter={() => setActiveFeature(feature.id)}
                onMouseLeave={() => setActiveFeature(null)}
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className={`${feature.bgColor} rounded-3xl p-6 h-full shadow-md border border-white/50 transition-all duration-400 group-hover:shadow-xl relative overflow-hidden`}>
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.color} rounded-full blur-2xl opacity-18 group-hover:opacity-30 transition-opacity duration-300`} />

                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${feature.color} rounded-2xl text-white mb-4 group-hover:scale-105 transition-transform duration-300`}>
                        {IconComponent && <IconComponent className="w-6 h-6" aria-hidden />}
                    </div>

                    <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors duration-300">{feature.title}</h3>

                    <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>

                  {activeFeature === feature.id && (
                    <motion.div className="absolute bottom-3 right-3" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}>
                      <ChevronRight className="w-5 h-5 text-slate-500" />
                    </motion.div>
                  )}
                </div>
              </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* What We Offer Section */}
        <motion.div className="mb-8" variants={containerVariant} initial="hidden" animate={isVisible ? "visible" : "hidden"}>
          <motion.div className="text-center mb-6" variants={cardVariant}>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">What We Offer</h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto">Comprehensive solutions for your investment journey</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fundData.whatWeOfferFeatures.map((feature) => {
              const IconComponent = iconMap[feature.icon];
              return (
              <motion.div key={feature.id} variants={cardVariant} className="group" whileHover={{ y: -4, scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                <div className={`${feature.bgColor} rounded-3xl p-6 h-full shadow-md border border-white/50 transition-all duration-400 group-hover:shadow-xl relative overflow-hidden`}>
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${feature.color} rounded-full blur-2xl opacity-18 group-hover:opacity-30 transition-opacity duration-300`} />

                  <div className="relative z-10">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br ${feature.color} rounded-2xl text-white mb-4 group-hover:scale-105 transition-transform duration-300`}>
                        {IconComponent && <IconComponent className="w-6 h-6" aria-hidden />}
                    </div>

                    <h3 className="text-lg font-semibold text-slate-800 mb-2">{feature.title}</h3>

                    <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Safety Assurance */}
        <motion.div className="mb-8" initial={{ opacity: 0, y: 18 }} animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 18 }} transition={{ duration: 0.7, delay: 0.25 }}>
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-6 md:p-8 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-36 h-36 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-28 h-28 bg-white/6 rounded-full blur-2xl" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{fundData.safety.title}</h3>
                  <p className="text-green-100 text-sm">{fundData.safety.subtitle}</p>
                </div>
              </div>

              <p className="text-sm text-green-50 leading-relaxed">
                {fundData.safety.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* ESG Section */}
        <motion.div className="mb-8" variants={containerVariant} initial="hidden" animate={isVisible ? "visible" : "hidden"}>
          <motion.div variants={cardVariant}>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border border-white/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-green-400 to-green-500 rounded-full blur-3xl opacity-18" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-slate-800">{fundData.esg.title}</h2>
                    <p className="text-sm text-slate-600">{fundData.esg.subtitle}</p>
                  </div>
                </div>

                <p className="text-sm text-slate-700 mb-6 leading-relaxed">
                  {fundData.esg.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 rounded-2xl p-4">
                    <h4 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
                      <Heart className="w-5 h-5 text-green-600" />
                      {fundData.esg.whyChooseTitle}
                    </h4>
                    <div className="space-y-2">
                      {fundData.esg.features.map((feature, index) => {
                        const IconComponent = iconMap[feature.icon];
                        return (
                        <div key={index} className="flex items-center gap-3">
                            <div className="text-green-600">{IconComponent && <IconComponent className="w-5 h-5" aria-hidden />}</div>
                          <span className="text-sm text-slate-700">{feature.text}</span>
                        </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-2xl p-4">
                    <h4 className="text-lg font-semibold text-slate-800 mb-3 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-blue-600" />
                      {fundData.esg.howItWorksTitle}
                    </h4>
                    <p className="text-sm text-slate-700 leading-relaxed mb-3">
                      {fundData.esg.howItWorksDescription}
                    </p>
                    <div className="p-3 bg-white rounded-xl">
                      <p className="text-xs text-slate-600">
                        <strong>{fundData.esg.startAmount}</strong> • Paperless process • Multilingual support
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href="#explore-esg"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-2xl font-semibold text-sm hover:from-green-600 hover:to-green-700 hover:shadow-lg transition-all duration-300"
                  >
                    <Leaf className="w-4 h-4" />
                    {fundData.esg.ctaText}
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Section */}
        <motion.div className="mb-8" initial={{ opacity: 0, y: 18 }} animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 18 }} transition={{ duration: 0.7, delay: 0.35 }}>
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-slate-800 mb-2">{fundData.contact.title}</h2>
            <p className="text-sm text-slate-600">{fundData.contact.subtitle}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <motion.a
              href={`tel:${fundData.contact.phone}`}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-2xl font-semibold text-sm hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transition"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-4 h-4" />
              {fundData.contact.phone}
            </motion.a>

            <motion.a
              href={fundData.contact.whatsapp}
              className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-2xl font-semibold text-sm hover:from-green-600 hover:to-green-700 hover:shadow-lg transition"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.085"/>
              </svg>
              WhatsApp
            </motion.a>

            <motion.a
              href={`mailto:${fundData.contact.email}`}
              className="flex items-center gap-2 bg-gradient-to-r from-slate-600 to-slate-700 text-white px-6 py-3 rounded-2xl font-semibold text-sm hover:from-slate-700 hover:to-slate-800 hover:shadow-lg transition"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-4 h-4" />
              Email Us
            </motion.a>
          </div>

          <div className="text-center">
            <motion.a
              href="#start-investing"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 px-8 py-3 rounded-2xl font-bold text-sm hover:from-yellow-500 hover:to-yellow-600 hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <TrendingUp className="w-5 h-5" />
              {fundData.contact.ctaText}
              <ChevronRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>

        {/* Join the Movement */}
        <motion.div className="text-center" initial={{ opacity: 0, y: 18 }} animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 18 }} transition={{ duration: 0.7, delay: 0.45 }}>
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-3xl p-6 md:p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-36 h-36 bg-yellow-400/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-28 h-28 bg-blue-400/20 rounded-full blur-2xl" />

            <div className="relative z-10">
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Globe className="w-8 h-8 text-slate-900" />
              </motion.div>

              <h3 className="text-2xl font-semibold mb-3">{fundData.joinMovement.title}</h3>
              <p className="text-sm text-slate-200 max-w-3xl mx-auto leading-relaxed">
                {fundData.joinMovement.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Fund;
