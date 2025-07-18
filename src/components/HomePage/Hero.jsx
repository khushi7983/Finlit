// import React from "react";
// import phone from "../../assets/phone.mp4";
// import finance from "../../assets/finance.gif";
// // import HeroSection from './HomePage/Offerings';

// const Hero = () => (
//   <>
//     <section className="bg-white py-24 md:py-32 overflow-hidden">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-col md:flex-row items-center justify-between gap-12">
//           {/* Left: Video */}
//           <div className="w-full md:w-1/2 animate-fade-in-up animation-delay-200">
//             <video
//               src={phone}
//               autoPlay
//               loop
//               muted
//               playsInline
//               className="mx-auto rounded-2xl shadow-2xl w-full max-w-[600px] transform hover:scale-105 transition-transform duration-500"
//             />
//           </div>

//           {/* Right: Text and Buttons */}
//           <div className="w-full md:w-1/2 text-center md:text-left">
//             <h1
//               className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight animate-fade-in-up"
//               style={{ color: "#10355f" }}
//             >
//               Master Your Money in Minutes
//             </h1>
//             <p
//               className="text-lg sm:text-xl mb-10 max-w-xl animate-fade-in-up animation-delay-200"
//               style={{ color: "#10355f" }}
//             >
//               Free financial literacy courses by SEBI-empanelled experts. No
//               finance background? No worries!
//             </p>
//             <div className="flex flex-col sm:flex-row md:justify-start justify-center gap-4 animate-fade-in-up animation-delay-400">
//               <button className="bg-[#10355f] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-[#143d70] hover:scale-105 transition-all duration-300">
//                 Download App
//               </button>
//               <button className="border-2 border-[#10355f] text-[#10355f] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#10355f] hover:text-white hover:scale-105 transition-all duration-300">
//                 Start Learning
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>

//     {/* Our Aspirations Section */}
//     <section className="bg-[#10355f] py-20 px-6 md:px-12">
//       <div className="max-w-5xl mx-auto text-center animate-fade-in-up motion-safe:animate-fade-in-up">
//         <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
//           Our Aspirations
//         </h2>
//         <p className="text-lg leading-relaxed text-white animate-fade-in-up motion-safe:animate-fade-in-up">
//           We believe that financial literacy is the skill of managing your
//           finances. It starts with practicing financial attitude and financial
//           behavior leading to financial capability. With the{" "}
//           <strong>“Fin Lit Project”</strong>
//           we want to make finance and fintech simple and accessible to everyone.
//           As per a study conducted by S&P, nearly 75% of the eligible adult
//           population is financially illiterate. In normal course, financial
//           terms appear to be complicated and the public at large feels
//           uncomfortable in coping with those terms.
//         </p>
//         <p className="text-lg leading-relaxed text-white mt-4 animate-fade-in-up motion-safe:animate-fade-in-up">
//           We aim to take financial literacy to a minimum forty percent by the
//           end of the next five years. Though this appears to be a humongous
//           task, we have devised various micro courses in such a way that
//           attaining our set target would not be difficult for us.
//         </p>
//       </div>
//     </section>

//     {/* What is Financial Literacy Section */}
//     <section className="bg-white py-20 px-6 md:px-12">
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
//         {/* Left: Text Content */}
//         <div className="w-full md:w-1/2 animate-fade-in-up">
//           <h2
//             className="text-3xl sm:text-4xl font-bold mb-6"
//             style={{ color: "#10355f" }}
//           >
//             What is Financial Literacy?
//           </h2>
//           <p
//             className="text-lg leading-relaxed mb-6"
//             style={{ color: "#10355f" }}
//           >
//             The term financial literacy refers to a variety of important
//             financial skills and concepts. It is nothing but the ability to
//             understand and effectively use various financial skills, including
//             personal financial management, budgeting, and investing. It is the
//             foundation of your relationship with money, and it is a lifelong
//             journey of learning. The earlier you start, the better off you will
//             be, because education is the key to success when it comes to money.
//             Many people find money matters intimidating, but they don’t have to
//             be, make yourself Financially Literate to overcome this. Developing
//             financial literacy to improve your personal finances involves
//             learning and practicing a variety of skills related to budgeting,
//             managing and paying off debts, and understanding credit and
//             investment products.
//           </p>
//           <button className="bg-[#10355f] text-white px-6 py-3 rounded-full font-semibold text-md shadow-md hover:bg-[#143d70] transition-all duration-300">
//             Read More
//           </button>
//         </div>

//         {/* Right: GIF/Image */}
//         <div>
//           <img
//             src={finance}
//             alt="Financial Literacy GIF"
//             className="w-full max-w-md mx-auto rounded-xl shadow-lg"
//           />
//         </div>
//       </div>
//     </section>
//   </>
// );

// export default Hero;
import React from "react";
import { Play, Download, BookOpen, TrendingUp, Users, Target, ChevronRight, Star } from "lucide-react";

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
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg border border-white/20">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium text-slate-700">SEBI Empanelled Experts</span>
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left: Enhanced Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                <span className="text-slate-800">Master Your</span>
                <br />
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  Money
                </span>
                <br />
                <span className="text-slate-800">in Minutes</span>
              </h1>
              <p className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-2xl font-light leading-relaxed">
                Free financial literacy courses by SEBI-empanelled experts. 
                <span className="font-medium text-slate-700"> No finance background? No worries!</span>
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 mb-10">
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
            </div>

            {/* Enhanced CTAs */}
            <div className="flex flex-col sm:flex-row lg:justify-start justify-center gap-4">
              <button className="group relative bg-gradient-to-r from-slate-800 to-slate-900 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download App
                </div>
              </button>
              <button className="group border-2 border-slate-800 text-slate-800 px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-slate-800 hover:text-white hover:scale-105 transition-all duration-300 flex items-center gap-2 justify-center">
                <BookOpen className="w-5 h-5" />
                Start Learning
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right: Enhanced Video with Frame */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl opacity-20"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl opacity-10"></div>
              
              {/* Video placeholder with enhanced styling */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-2 transform hover:scale-105 transition-transform duration-500">
                <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl aspect-[9/16] max-w-[400px] mx-auto flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-600 font-medium">App Demo Video</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Our Aspirations Section - Enhanced */}
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 px-6 md:px-12 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M50 50l20-20v40l-20-20z\' fill=\'%23ffffff\' fill-opacity=\'0.1\'/%3E%3C/svg%3E')] bg-repeat"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <Target className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-yellow-400">Our Vision</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-white">
            Our Aspirations
          </h2>
        </div>

        {/* Enhanced Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
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
          </div>

          {/* Stats Card */}
          <div className="bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 backdrop-blur-sm rounded-3xl p-8 border border-yellow-500/20">
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
          </div>
        </div>
      </div>
    </section>

    {/* What is Financial Literacy Section - Enhanced */}
    <section className="bg-gradient-to-br from-slate-50 to-white py-24 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Enhanced Content */}
            <div className="space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                  <BookOpen className="w-4 h-4 text-yellow-600" />
                  <span className="text-sm font-medium text-yellow-700">Learn the Basics</span>
                </div>
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

              <button className="group bg-gradient-to-r from-slate-800 to-slate-900 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Read More
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right: Enhanced Visual */}
            <div className="relative">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Hero;