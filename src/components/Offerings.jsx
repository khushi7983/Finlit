import React from 'react';

const Offerings = () => (
  <section id="offerings" className="py-16 md:py-24 bg-white">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 text-center mb-12 animate-fade-in-up">
        Our Offerings
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {['Free Micro-Courses', 'ESG Screening Tools', 'Financial Planning Calculators', 'Multilingual Learning'].map(item => (
          <div
            key={item}
            className="p-8 bg-gray-50 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
          >
            <h3 className="text-xl font-semibold text-blue-700">{item}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Offerings;