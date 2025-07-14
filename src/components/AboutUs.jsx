import React from 'react';

const AboutUs = () => (
  <section id="about-us" className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-8 animate-fade-in-up">
        About Us
      </h2>
      <div className="max-w-3xl mx-auto space-y-6">
        <p className="text-lg sm:text-xl text-gray-600 animate-fade-in-up animation-delay-200">
          Our mission is to empower every Indian with financial knowledge, making wealth creation accessible to all.
        </p>
        <p className="text-lg sm:text-xl text-gray-600 animate-fade-in-up animation-delay-400">
          Backed by SEBI-recognized professionals, we focus on trust, simplicity, inclusivity, and ethics.
        </p>
        <p className="text-lg sm:text-xl text-gray-600 animate-fade-in-up animation-delay-600">
          Featured in <span className="font-semibold text-blue-700">The Leaflet</span> and more.
        </p>
      </div>
    </div>
  </section>
);

export default AboutUs;