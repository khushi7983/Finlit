import React, { useState, useEffect } from 'react';
import { Play, Download, BookOpen, Star, ChevronRight, Sparkles, Users, Award } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    // Simulate video loading
    setTimeout(() => setVideoLoaded(true), 1000);
  }, []);

  const stats = [
    { icon: <Users className="w-5 h-5" />, value: '50K+', label: 'Students' },
    { icon: <Star className="w-5 h-5" />, value: '4.9', label: 'Rating' },
    { icon: <Award className="w-5 h-5" />, value: '100+', label: 'Courses' },
  ];

  return (
    <section className="bg-gradient-to-br from-white via-blue-50/30 to-slate-50 py-20 md:py-28 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-200 to-indigo-200 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-700"></div>
        <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-indigo-400 rounded-full animate-bounce delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          
          {/* Left: Enhanced Video Section */}
          <div className={`w-full md:w-1/2 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`} style={{ transitionDelay: '200ms' }}>
            
            <div className="relative group">
              {/* Video container with enhanced styling */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-1">
                <div className="rounded-3xl overflow-hidden bg-black relative">
                  {/* Video placeholder/loading state */}
                  {!videoLoaded && (
                    <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
                    </div>
                  )}
                  
                  {/* Simulated video - replace with actual video */}
                  <div className={`aspect-video bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center transition-opacity duration-500 ${
                    videoLoaded ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="text-center text-white">
                      <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
                      <p className="text-sm opacity-70">Video Preview</p>
                    </div>
                  </div>
                  
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                      <Play className="w-8 h-8 text-[#10355f] ml-1" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-pulse delay-500"></div>
              
              {/* Stats overlay */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100">
                <div className="flex items-center gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="flex items-center justify-center text-[#10355f] mb-1">
                        {stat.icon}
                      </div>
                      <div className="text-sm font-bold text-[#10355f]">{stat.value}</div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Enhanced Text and Buttons */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-yellow-200 text-[#10355f] px-4 py-2 rounded-full text-sm font-semibold mb-6 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '300ms' }}>
              <Sparkles className="w-4 h-4" />
              SEBI-Empanelled Experts
              <Sparkles className="w-4 h-4" />
            </div>

            {/* Main heading with enhanced styling */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '400ms' }}>
              <span style={{ color: '#10355f' }}>Master Your</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Money in Minutes
              </span>
            </h1>

            {/* Enhanced description */}
            <p className={`text-lg sm:text-xl mb-8 max-w-xl leading-relaxed transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ color: '#10355f', transitionDelay: '500ms' }}>
              Free financial literacy courses designed for everyone. 
              <span className="font-semibold"> No finance background?</span>
              <br />
              <span className="text-gray-600">No worries! Start your journey today.</span>
            </p>

            {/* Feature highlights */}
            <div className={`flex flex-wrap gap-4 mb-8 justify-center md:justify-start transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '600ms' }}>
              {['✓ 100% Free', '✓ Expert-Led', '✓ Bite-sized'].map((feature, index) => (
                <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {feature}
                </span>
              ))}
            </div>

            {/* Enhanced buttons */}
            <div className={`flex flex-col sm:flex-row md:justify-start justify-center gap-4 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '700ms' }}>
              <button className="group relative bg-gradient-to-r from-[#10355f] to-[#143d70] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download App
                </div>
              </button>
              
              <button className="group relative border-2 border-[#10355f] text-[#10355f] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#10355f] hover:text-white transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-[#10355f] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="relative flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Start Learning
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
            </div>

            {/* Trust indicators */}
            <div className={`mt-8 flex items-center gap-4 justify-center md:justify-start text-sm text-gray-600 transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`} style={{ transitionDelay: '800ms' }}>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span>4.9/5 from 10k+ reviews</span>
              </div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4 text-blue-400" />
                <span>50k+ active learners</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;