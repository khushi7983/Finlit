import React from 'react';

const ESGSection = () => (
  <section id="esg-investing" className="py-16 md:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-8 animate-fade-in-up">
        Sustainable Investing (ESG)
      </h2>
      <div className="max-w-3xl mx-auto space-y-6 bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg">
        <p className="text-lg sm:text-xl text-white animate-fade-in-up animation-delay-200">
          ESG stands for Environmental, Social, and Governance – a way to invest responsibly.
        </p>
        <p className="text-lg sm:text-xl text-white animate-fade-in-up animation-delay-400">
          For Indian users, ESG aligns with sustainable growth and ethical wealth creation.
        </p>
        <p className="text-lg sm:text-xl text-white animate-fade-in-up animation-delay-600">
          Explore ESG mutual funds with our discovery tools <span className="font-semibold text-blue-300">(BSE/NSE API integration planned)</span>.
        </p>
      </div>
    </div>
  </section>
);

export default ESGSection;