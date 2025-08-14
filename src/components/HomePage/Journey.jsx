import React, { useState, useEffect, useMemo } from 'react';

// Fallback journey items in case API fails
const fallbackJourneyItems = [
  {
    title: "PRE-COVID ERA",
    description: "After returning from New York, Neha Misra realized that financial literacy was a global concern and even more so in India with a financial literacy rate of just about 25%. The need for accessible financial education became clear.",
    period: "PRE-COVID ERA",
    isLatest: false
  },
  {
    title: "COVID-19 CRISIS",
    description: "As financial markets worldwide crashed during COVID-19, The Fin Lit Project was co-founded by Mrs Neha Misra and Dr DC Misra to help people with no financial literacy background take charge of their finances.",
    period: "COVID-19 CRISIS",
    isLatest: false
  },
  {
    title: "EARLY RECOGNITION",
    description: "The Fin Lit Project was pre-incubated by NSRCEL, IIM Bangalore and won the pitching competition at IIIT Delhi, marking early validation of the concept.",
    period: "EARLY RECOGNITION",
    isLatest: false
  },
  {
    title: "OCTOBER 2020",
    description: "Officially incubated at IIIT Delhi with funding from the Department of Science and Technology, providing the foundation for scaling the initiative.",
    period: "OCTOBER 2020",
    isLatest: false
  },
  {
    title: "JANUARY 2021",
    description: "Selected for the United Nations Niti Aayog investor consortium, propelling the mission to push the boundaries of financial literacy leveraging technology.",
    period: "JANUARY 2021",
    isLatest: true
  }
];

const Journey = () => {
  const [journeyItems, setJourneyItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const apiBaseUrl = useMemo(() => import.meta?.env?.VITE_API_BASE_URL || "http://localhost:5000", []);

  useEffect(() => {
    let isMounted = true;
    async function load() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetch(`${apiBaseUrl}/api/journey`);
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        const data = await res.json();
        if (isMounted) setJourneyItems(Array.isArray(data) ? data : fallbackJourneyItems);
      } catch (err) {
        console.error("Error fetching journey items:", err);
        if (isMounted) {
          setError("Unable to load journey items right now.");
          setJourneyItems(fallbackJourneyItems);
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }
    load();
    return () => {
      isMounted = false;
    };
  }, [apiBaseUrl]);

  return (
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
        <h2 className="text-2xl sm:text-3xl font-black text-center mb-8 text-white tracking-tight">
          <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent">
            Journey of Digital Financial Wellbeing
          </span>
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-500 shadow-lg shadow-yellow-400/20"></div>
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-400/50 via-yellow-300/50 to-yellow-500/50 blur-sm"></div>
          
          {/* Timeline items */}
          <div className="space-y-8">
            {isLoading && (
              <div className="space-y-8">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <div key={`skeleton-${idx}`} className="relative flex items-start ml-10">
                    <div className="absolute -left-10 w-8 h-8 bg-gradient-to-br from-yellow-400/50 to-yellow-500/50 rounded-full animate-pulse"></div>
                    <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/40 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 w-full animate-pulse">
                      <div className="h-4 bg-yellow-400/20 rounded mb-3 w-1/3"></div>
                      <div className="h-3 bg-white/20 rounded mb-2"></div>
                      <div className="h-3 bg-white/20 rounded w-5/6"></div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {!isLoading && journeyItems.length > 0 && (
              <>
                {journeyItems.map((item, index) => (
                  <div key={index} className="relative flex items-start ml-10 group">
                    <div className={`absolute -left-10 w-8 h-8 bg-gradient-to-br ${item.isLatest ? 'from-yellow-300 to-yellow-500 animate-pulse' : 'from-yellow-400 to-yellow-500'} rounded-full flex items-center justify-center shadow-lg shadow-yellow-400/30 group-hover:shadow-yellow-400/50 transition-all duration-300 group-hover:scale-110`}>
                      <div className="w-3 h-3 bg-slate-900 rounded-full group-hover:bg-slate-800 transition-colors duration-300"></div>
                      <div className={`absolute inset-0 rounded-full ${item.isLatest ? 'bg-yellow-400/30' : 'bg-yellow-400/20'} animate-ping`} style={{animationDelay: `${index * 0.5}s`}}></div>
                    </div>
                    <div className={`bg-gradient-to-br ${item.isLatest ? 'from-slate-800/70 to-slate-900/50 border-2 border-yellow-400/30 hover:border-yellow-400/60' : 'from-slate-800/60 to-slate-900/40 border border-slate-700/50 hover:border-yellow-400/50'} backdrop-blur-sm rounded-xl p-6 transition-all duration-500 w-full group-hover:translate-x-2 group-hover:shadow-xl group-hover:shadow-yellow-400/10 relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      {item.isLatest && (
                        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
                      )}
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-3">
                          <span className={`font-bold text-sm tracking-wide group-hover:text-yellow-300 transition-colors duration-300 ${item.isLatest ? 'text-yellow-300' : 'text-yellow-400'}`}>
                            {item.period}
                          </span>
                          <div className={`flex-1 h-px bg-gradient-to-r ${item.isLatest ? 'from-yellow-300 via-yellow-400/60' : 'from-yellow-400 via-yellow-400/50'} to-transparent group-hover:from-yellow-300 transition-colors duration-300`}></div>
                          {item.isLatest && (
                            <div className="px-2 py-1 bg-yellow-400/20 rounded-full">
                              <span className="text-yellow-300 text-xs font-semibold">LATEST</span>
                            </div>
                          )}
                        </div>
                        <p className={`text-sm leading-relaxed group-hover:text-white transition-colors duration-300 ${item.isLatest ? 'text-white/95 font-medium' : 'text-white/90'}`}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
        
        {!isLoading && journeyItems.length > 0 && (
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400/10 via-yellow-400/20 to-yellow-400/10 text-yellow-300 text-sm font-medium border border-yellow-400/30 backdrop-blur-sm hover:border-yellow-400/50 hover:bg-gradient-to-r hover:from-yellow-400/20 hover:via-yellow-400/30 hover:to-yellow-400/20 transition-all duration-300 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative z-10">Addressing the critical gap in financial literacy through technology</span>
            </div>
          </div>
        )}
        
        {!isLoading && journeyItems.length === 0 && !error && (
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400/10 via-yellow-400/20 to-yellow-400/10 text-yellow-300 text-sm font-medium border border-yellow-400/30 backdrop-blur-sm">
              <span>No journey items available right now.</span>
            </div>
          </div>
        )}
        
        {error && (
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-red-400/10 via-red-400/20 to-red-400/10 text-red-300 text-sm font-medium border border-red-400/30 backdrop-blur-sm">
              <span>{error}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Journey;
