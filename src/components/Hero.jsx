import React from 'react';

const Hero = () => (
  <section className="relative py-24 md:py-32  text-center overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight animate-fade-in-up">
          Master Your Money in Minutes
        </h1>
        <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          Free financial literacy courses by SEBI-empanelled experts. No finance background? No worries!
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fade-in-up animation-delay-400">
          <button className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-blue-100 hover:scale-105 transition-all duration-300">
            Download App
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-700 hover:scale-105 transition-all duration-300">
            Start Learning
          </button>
        </div>
        <div className="mt-12 animate-fade-in-up animation-delay-600">
          <img
            src="https://via.placeholder.com/800x500?text=App+Mockup"
            alt="App Mockup"
            className="mx-auto rounded-2xl shadow-2xl max-w-full sm:max-w-lg lg:max-w-2xl transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
    </section>
);

export default Hero;