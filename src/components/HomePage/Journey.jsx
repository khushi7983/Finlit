import React from 'react';

const Journey = () => (
  <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 px-6 overflow-hidden">
    <div className="relative z-10 max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-black text-center mb-8 text-white tracking-tight">
        Journey of Digital Financial Wellbeing
      </h2>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-500"></div>
        
        {/* Timeline items */}
        <div className="space-y-8">
          
          {/* Timeline Item 1 */}
          <div className="relative flex items-start ml-10">
            <div className="absolute -left-10 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
              <div className="w-3 h-3 bg-slate-900 rounded-full"></div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-yellow-400/30 transition-all duration-300 w-full">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-yellow-400 font-bold text-sm">PRE-COVID ERA</span>
                <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 to-transparent"></div>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                After returning from New York, Neha Misra realized that financial literacy was a global concern and even more so in India with a financial literacy rate of just about 25%. The need for accessible financial education became clear.
              </p>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="relative flex items-start ml-10">
            <div className="absolute -left-10 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
              <div className="w-3 h-3 bg-slate-900 rounded-full"></div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-yellow-400/30 transition-all duration-300 w-full">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-yellow-400 font-bold text-sm">COVID-19 CRISIS</span>
                <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 to-transparent"></div>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                As financial markets worldwide crashed during COVID-19, The Fin Lit Project was co-founded by Mrs Neha Misra and Dr DC Misra to help people with no financial literacy background take charge of their finances.
              </p>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="relative flex items-start ml-10">
            <div className="absolute -left-10 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
              <div className="w-3 h-3 bg-slate-900 rounded-full"></div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-yellow-400/30 transition-all duration-300 w-full">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-yellow-400 font-bold text-sm">EARLY RECOGNITION</span>
                <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 to-transparent"></div>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                The Fin Lit Project was pre-incubated by NSRCEL, IIM Bangalore and won the pitching competition at IIIT Delhi, marking early validation of the concept.
              </p>
            </div>
          </div>

          {/* Timeline Item 4 */}
          <div className="relative flex items-start ml-10">
            <div className="absolute -left-10 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
              <div className="w-3 h-3 bg-slate-900 rounded-full"></div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-yellow-400/30 transition-all duration-300 w-full">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-yellow-400 font-bold text-sm">OCTOBER 2020</span>
                <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 to-transparent"></div>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                Officially incubated at IIIT Delhi with funding from the Department of Science and Technology, providing the foundation for scaling the initiative.
              </p>
            </div>
          </div>

          {/* Timeline Item 5 */}
          <div className="relative flex items-start ml-10">
            <div className="absolute -left-10 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <div className="w-3 h-3 bg-slate-900 rounded-full"></div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-yellow-400/30 transition-all duration-300 w-full">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-yellow-400 font-bold text-sm">JANUARY 2021</span>
                <div className="flex-1 h-px bg-gradient-to-r from-yellow-400 to-transparent"></div>
              </div>
              <p className="text-white/90 text-sm leading-relaxed">
                Selected for the United Nations Niti Aayog investor consortium, propelling the mission to push the boundaries of financial literacy leveraging technology.
              </p>
            </div>
          </div>

        </div>
      </div>
      
      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 text-yellow-400 text-sm font-medium border border-yellow-400/20">
          Addressing the critical gap in financial literacy through technology
        </div>
      </div>
    </div>
  </section>
);

export default Journey;