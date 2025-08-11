import React from 'react';

const Journey = () => (
  <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 px-6 overflow-hidden">
    {/* Animated background elements */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-yellow-400/3 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-yellow-400/4 rounded-full blur-xl animate-pulse" style={{animationDelay: '4s'}}></div>
    </div>
    
    {/* Floating particles */}
    <div className="absolute inset-0">
      {[...Array(8)].map((_, i) => (
        <div 
          key={i}
          className="absolute w-1 h-1 bg-yellow-400/30 rounded-full animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        ></div>
      ))}
    </div>

    <div className="relative z-10 max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-black text-center mb-8 text-white tracking-tight relative">
        <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
          Journey of Digital Financial Wellbeing
        </span>
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"></div>
      </h2>
      
      <div className="relative">
        {/* Enhanced timeline line with glow effect */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-500 shadow-lg shadow-yellow-400/20"></div>
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400/50 via-yellow-300/50 to-yellow-500/50 blur-sm"></div>
        
        {/* Timeline items */}
        <div className="space-y-8">
          
          {/* Timeline Item 1 */}
          <div className="relative flex items-start ml-10 group">
            <div className="absolute -left-10 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg shadow-yellow-400/30 group-hover:shadow-yellow-400/50 transition-all duration-300 group-hover:scale-110">
              <div className="w-3 h-3 bg-slate-900 rounded-full group-hover:bg-slate-800 transition-colors duration-300"></div>
              <div className="absolute inset-0 rounded-full bg-yellow-400/20 animate-ping"></div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-yellow-400/50 transition-all duration-500 w-full group-hover:translate-x-2 group-hover:shadow-xl group-hover:shadow-yellow-400/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-yellow-400 font-bold text-sm tracking-wide group-hover:text-yellow-300 transition-colors duration-300">PRE-COVID ERA</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 via-yellow-400/50 to-transparent group-hover:from-yellow-300 transition-colors duration-300"></div>
                </div>
                <p className="text-white/90 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                  After returning from New York, Neha Misra realized that financial literacy was a global concern and even more so in India with a financial literacy rate of just about 25%. The need for accessible financial education became clear.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="relative flex items-start ml-10 group">
            <div className="absolute -left-10 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg shadow-yellow-400/30 group-hover:shadow-yellow-400/50 transition-all duration-300 group-hover:scale-110">
              <div className="w-3 h-3 bg-slate-900 rounded-full group-hover:bg-slate-800 transition-colors duration-300"></div>
              <div className="absolute inset-0 rounded-full bg-yellow-400/20 animate-ping" style={{animationDelay: '0.5s'}}></div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-yellow-400/50 transition-all duration-500 w-full group-hover:translate-x-2 group-hover:shadow-xl group-hover:shadow-yellow-400/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-yellow-400 font-bold text-sm tracking-wide group-hover:text-yellow-300 transition-colors duration-300">COVID-19 CRISIS</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 via-yellow-400/50 to-transparent group-hover:from-yellow-300 transition-colors duration-300"></div>
                </div>
                <p className="text-white/90 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                  As financial markets worldwide crashed during COVID-19, The Fin Lit Project was co-founded by Mrs Neha Misra and Dr DC Misra to help people with no financial literacy background take charge of their finances.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="relative flex items-start ml-10 group">
            <div className="absolute -left-10 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg shadow-yellow-400/30 group-hover:shadow-yellow-400/50 transition-all duration-300 group-hover:scale-110">
              <div className="w-3 h-3 bg-slate-900 rounded-full group-hover:bg-slate-800 transition-colors duration-300"></div>
              <div className="absolute inset-0 rounded-full bg-yellow-400/20 animate-ping" style={{animationDelay: '1s'}}></div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-yellow-400/50 transition-all duration-500 w-full group-hover:translate-x-2 group-hover:shadow-xl group-hover:shadow-yellow-400/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-yellow-400 font-bold text-sm tracking-wide group-hover:text-yellow-300 transition-colors duration-300">EARLY RECOGNITION</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 via-yellow-400/50 to-transparent group-hover:from-yellow-300 transition-colors duration-300"></div>
                </div>
                <p className="text-white/90 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                  The Fin Lit Project was pre-incubated by NSRCEL, IIM Bangalore and won the pitching competition at IIIT Delhi, marking early validation of the concept.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Item 4 */}
          <div className="relative flex items-start ml-10 group">
            <div className="absolute -left-10 w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg shadow-yellow-400/30 group-hover:shadow-yellow-400/50 transition-all duration-300 group-hover:scale-110">
              <div className="w-3 h-3 bg-slate-900 rounded-full group-hover:bg-slate-800 transition-colors duration-300"></div>
              <div className="absolute inset-0 rounded-full bg-yellow-400/20 animate-ping" style={{animationDelay: '1.5s'}}></div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-yellow-400/50 transition-all duration-500 w-full group-hover:translate-x-2 group-hover:shadow-xl group-hover:shadow-yellow-400/10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-yellow-400 font-bold text-sm tracking-wide group-hover:text-yellow-300 transition-colors duration-300">OCTOBER 2020</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 via-yellow-400/50 to-transparent group-hover:from-yellow-300 transition-colors duration-300"></div>
                </div>
                <p className="text-white/90 text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                  Officially incubated at IIIT Delhi with funding from the Department of Science and Technology, providing the foundation for scaling the initiative.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline Item 5 - Featured as latest */}
          <div className="relative flex items-start ml-10 group">
            <div className="absolute -left-10 w-8 h-8 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full flex items-center justify-center shadow-lg shadow-yellow-400/40 group-hover:shadow-yellow-400/60 transition-all duration-300 group-hover:scale-110 animate-pulse">
              <div className="w-3 h-3 bg-slate-900 rounded-full group-hover:bg-slate-800 transition-colors duration-300"></div>
              <div className="absolute inset-0 rounded-full bg-yellow-400/30 animate-ping"></div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/70 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border-2 border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-500 w-full group-hover:translate-x-2 group-hover:shadow-2xl group-hover:shadow-yellow-400/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-400/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-yellow-300 font-bold text-sm tracking-wide group-hover:text-yellow-200 transition-colors duration-300">JANUARY 2021</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-yellow-300 via-yellow-400/60 to-transparent group-hover:from-yellow-200 transition-colors duration-300"></div>
                  <div className="px-2 py-1 bg-yellow-400/20 rounded-full">
                    <span className="text-yellow-300 text-xs font-semibold">LATEST</span>
                  </div>
                </div>
                <p className="text-white/95 text-sm leading-relaxed group-hover:text-white transition-colors duration-300 font-medium">
                  Selected for the United Nations Niti Aayog investor consortium, propelling the mission to push the boundaries of financial literacy leveraging technology.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400/10 via-yellow-400/20 to-yellow-400/10 text-yellow-300 text-sm font-medium border border-yellow-400/30 backdrop-blur-sm hover:border-yellow-400/50 hover:bg-gradient-to-r hover:from-yellow-400/20 hover:via-yellow-400/30 hover:to-yellow-400/20 transition-all duration-300 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          <span className="relative z-10">Addressing the critical gap in financial literacy through technology</span>
        </div>
      </div>
    </div>
  </section>
);

export default Journey;