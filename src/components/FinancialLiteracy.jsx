import React from 'react';

const FinancialLiteracy = () => (
  <section id="financial-literacy" className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-8 animate-fade-in-up">
        What is Financial Literacy?
      </h2>
      <div className="max-w-3xl mx-auto space-y-6">
        <p className="text-lg sm:text-xl text-gray-600 animate-fade-in-up animation-delay-200">
          Financial literacy is understanding how to manage money, budget, save, and invest wisely.
        </p>
        <div className="mt-8 animate-fade-in-up animation-delay-400">
          <img
            src="https://via.placeholder.com/600x300?text=Animation"
            alt="Financial Literacy Animation"
            className="mx-auto rounded-2xl shadow-2xl max-w-full sm:max-w-lg lg:max-w-2xl transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        <p className="text-lg sm:text-xl text-gray-600 animate-fade-in-up animation-delay-600">
          It’s your pathway to financial freedom, wellbeing, and empowerment.
        </p>
      </div>
    </div>
  </section>
);

export default FinancialLiteracy;