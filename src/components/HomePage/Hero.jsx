import React from "react";
import { motion } from "framer-motion";
import { Play, Download, BookOpen, TrendingUp, Users, Target, ChevronRight, Star } from "lucide-react";
import Supporters from './Supporters';
import Offerings from "./Offerings";
import phone from "../../assets/phone.mp4";
import finance from "../../assets/finance.gif";
import Investing from "./Investing";
import TestimonialsSection from "./TestimonialsSection";
import Journey from "./Journey";
import FAQ from "./FAQ";
import playstoreIcon from '../../assets/playstore.png';
import appleIcon from '../../assets/apple.png';

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } }
};


const Hero = () => (
  <>
    {/* Main Hero Section */}
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23f1f5f9\' fill-opacity=\'0.4\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      {/* <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div> */}
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-1000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Trust Badge */}
        <div className="text-center mb-8">
         
        </div>

    {/* Main Flex Layout */}
    <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
      {/* Left: Text and Buttons */}
      <motion.div 
        className="w-full lg:w-1/2 text-center lg:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="mb-6">
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          >
            <span className="text-slate-800">Master Your</span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              Money
            </span>
            <br />
            <span className="text-slate-800">in Minutes</span>
          </motion.h1>
          <motion.p 
            className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-2xl font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
          >
             Empowering  You, One Financial Decision at a Time. 
            <span className="font-medium text-slate-700"> No finance background? No worries!</span>
          </motion.p>
        </div>

        {/* Stats Row */}
        <motion.div 
          className="grid grid-cols-3 gap-4 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
        >
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-800">50K+</div>
            <div className="text-sm text-slate-600">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-800">100+</div>
            <div className="text-sm text-slate-600">Free Courses</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-800">4.8★</div>
            <div className="text-sm text-slate-600">User Rating</div>
          </div>
        </motion.div>

        {/* FinLit Learn and FinLit Invest Buttons with Ratings */}
        <div className="flex flex-col sm:flex-row lg:justify-start justify-center gap-10">
          {/* FinLit Learn Group */}
          <div className="flex flex-col items-center gap-3">
            <a href="#" className="group relative bg-gradient-to-r from-slate-800 to-slate-900 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                FinLit Learn
              </div>
            </a>
            <div className="flex flex-row gap-3 mt-1">
              {/* App Store Button */}
              <a
                href="#"
                className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow hover:bg-gray-100 transition group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={appleIcon} alt="Apple" className="w-5 h-5" />
                {/* <span className="font-bold text-slate-900">4.7</span> */}
                {/* <span className="text-yellow-500">★</span> */}
                <span className="text-xs text-slate-700 ml-1">App store</span>
              </a>
              {/* Play Store Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.thefinlitproject.app"
                className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow hover:bg-gray-100 transition group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={playstoreIcon} alt="Play Store" className="w-5 h-5" />
                {/* <span className="font-bold text-slate-900">4.7</span>
                <span className="text-yellow-500">★</span> */}
                <span className="text-xs text-slate-700 ml-1">Play store</span>
              </a>
            </div>
          </div>
          {/* FinLit Invest Group */}
          <div className="flex flex-col items-center gap-3">
            <a href="https://play.google.com/store/apps/details?id=com.thefinlitproject.invest" className="group relative bg-gradient-to-r from-slate-800 to-slate-900 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                FinLit Invest
              </div>
            </a>
            <div className="flex flex-row gap-3 mt-1">
              {/* App Store Button */}
              <a
                href="#"
                className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow hover:bg-gray-100 transition group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={appleIcon} alt="Apple" className="w-5 h-5" />
                {/* <span className="font-bold text-slate-900">4.7</span>
                <span className="text-yellow-500">★</span> */}
                <span className="text-xs text-slate-700 ml-1">App store</span>
              </a>
              {/* Play Store Button */}
              <a
                href="https://play.google.com/store/apps/details?id=com.thefinlitproject.invest"
                className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow hover:bg-gray-100 transition group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={playstoreIcon} alt="Play Store" className="w-5 h-5" />
                {/* <span className="font-bold text-slate-900">4.7</span>
                <span className="text-yellow-500">★</span> */}
                <span className="text-xs text-slate-700 ml-1">Play store</span>
              </a>
            </div>
          </div>
        </div>
       
         
          {/* Ratings Row */}
         
      </motion.div>

     {/* Right: Enhanced Video/Image with Frame */}
{/* Right Side: App Demo Video with Frame */}
<motion.div 
  className="w-full lg:w-1/2 flex justify-center items-center relative"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, ease: "easeInOut" }}
>
  <div className="relative max-w-[320px] w-full bg-transparent">
    {/* Only the video, no border, no shadow, no rounded corners */}
    <div className="relative z-10 overflow-hidden">
      <video
        src={phone} // Make sure this path is correct and the file exists
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto object-cover"
      />
    </div>
  </div>
</motion.div>

    </div>
  </div>
</section>


  {/* Our Aspirations Section - Enhanced */}
<motion.section 
  className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 px-6 md:px-12 overflow-hidden"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  variants={containerVariant}
>
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-5">
    <div
      className="absolute inset-0 bg-repeat"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 50l20-20v40l-20-20z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`,
      }}
    ></div>
  </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div className="text-center mb-16" variants={itemVariant}>
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Target className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-400">Our Vision</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Our Aspirations
          </h2>
        </motion.div>

        {/* Enhanced Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div className="space-y-6" variants={itemVariant}>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">The Challenge</h3>
              <p className="text-lg leading-relaxed text-slate-300">
                We believe that financial literacy is the skill of managing your finances. 
                It starts with practicing financial attitude and financial behavior leading to financial capability. 
                With the <span className="text-yellow-400 font-semibold">"Fin Lit Project"</span> we want to make 
                finance and fintech simple and accessible to everyone.
              </p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Our Goal</h3>
              <p className="text-lg leading-relaxed text-slate-300">
                We aim to take financial literacy to a minimum forty percent by the end of the next five years. 
                Though this appears to be a humongous task, we have devised various micro courses in such a way 
                that attaining our set target would not be difficult for us.
              </p>
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div 
            className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm rounded-3xl p-8 border border-yellow-500/20"
            variants={itemVariant}
          >
            <div className="text-center">
              <div className="text-6xl font-black text-yellow-400 mb-2">75%</div>
              <div className="text-xl text-white mb-4">of adults are financially illiterate</div>
              <div className="text-slate-300 text-lg">According to S&P Global Study</div>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-white">40%</div>
                <div className="text-sm text-slate-400">Target by 2029</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">5 Years</div>
                <div className="text-sm text-slate-400">Timeline</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>

    {/* What is Financial Literacy Section - Enhanced */}
    <motion.section 
      className="bg-gradient-to-br from-slate-50 to-white py-24 px-6 md:px-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariant}
    >
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Enhanced Content */}
            <motion.div className="space-y-8" variants={itemVariant}>
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-slate-800">
                  What is Financial Literacy?
                </h2>
              </div>
              
              <div className="prose prose-lg text-slate-600 max-w-none">
                <p className="text-xl leading-relaxed mb-6">
                  The term financial literacy refers to a variety of important financial skills and concepts. 
                  It is nothing but the ability to understand and effectively use various financial skills, 
                  including personal financial management, budgeting, and investing.
                </p>
                <p className="text-lg leading-relaxed text-slate-600">
                  It is the foundation of your relationship with money, and it is a lifelong journey of learning. 
                  The earlier you start, the better off you will be, because education is the key to success 
                  when it comes to money.
                </p>
              </div>
                           

              {/* Feature List */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-slate-700">Personal Finance Management</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-slate-700">Budgeting & Planning</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-slate-700">Investment Strategies</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <span className="text-slate-700">Credit Management</span>
                </div>
              </div>

              <button className="group bg-gradient-to-r from-slate-800 to-slate-900 text-white px-3 py-2 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
               <a href="https://play.google.com/store/apps/details?id=com.thefinlitproject.invest" className="group relative bg-gradient-to-r from-slate-800 to-slate-900 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              FinLit Invest
            </div>
          </a>
              </button>
            </motion.div>

            {/* Right: Enhanced Visual */}
            <motion.div className="relative" variants={itemVariant}>
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl opacity-20"></div>
                <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl opacity-10"></div>
                
                {/* Main content area */}
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-slate-200">
                  <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="w-24 h-24 text-yellow-500 mx-auto mb-4" />
                      <div className="text-slate-600 font-medium">Financial Growth</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div>


  {/* ...Other sections below it */}
</div>

    </motion.section>
    <Investing />
    {/* Render Offerings section directly below Hero */}
    <Journey/>
  <Supporters />
    <Offerings />
    <TestimonialsSection />
    < FAQ />
  </>
);

export default Hero;
