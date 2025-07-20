import React from 'react';

const Journey = () => (
  <section id="journey" className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 px-6 md:px-12 overflow-hidden">
    <div className="relative z-10 max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-5xl font-black text-center mb-12 text-white tracking-tight">
        Our <span className="relative inline-block">
          Journey of Digital Wellbeing
          <span className="absolute left-0 -bottom-1 w-full h-2 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-80 rounded-full -z-10"></span>
        </span>
      </h2>
      <div className="space-y-6 text-white/90 text-lg leading-relaxed animate-fadeIn">
        <p className="opacity-0 animate-[fadeIn_1s_ease-out_0.2s_forwards]">
          The Fin Lit Project was co-founded by Mrs Neha Misra and Dr DC Misra. After returning from New York, Neha realised that financial literacy was a global concern and even more so in India with a financial literacy rate of just about 25%. At a time when financial markets worldwide were crashing in the wake of COVID-19, The Fin Lit Project was born as an initiative to help people with no financial literacy background take charge of their finances.
        </p>
        <p className="opacity-0 animate-[fadeIn_1s_ease-out_0.4s_forwards]">
          The Fin Lit Project was pre-incubated by NSRCEL, IIM Bangalore and soon won the pitching competition at IIIT Delhi. The Fin Lit Project was incubated at IIIT Delhi with funding from the Department of Science and Technology in October 2020. Being selected for the United Nations Niti Aayog investor consortium in January 2021 was another feature in our cap and it propelled us to push the boundaries of financial literacy leveraging technology.
        </p>
        {/* Only showing the first two paragraphs initially */}
        <div className="mt-8 text-center">
          <a
            href="/full-journey"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-yellow-400 text-[#10355f] font-semibold hover:bg-yellow-500 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-200"
          >
            Read More
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <style jsx>{`
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `}</style>
  </section>
);

export default Journey;