import React from 'react';
import appVideo from '../assets/phone.mp4';
import bgImg from '../assets/bg-aspiration.jpg';

const Hero = () => (
  <>
    <section className="bg-white py-24 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Left: Video */}
          <div className="w-full md:w-1/2 animate-fade-in-up animation-delay-200">
            <video
              src={appVideo}
              autoPlay
              loop
              muted
              playsInline
              className="mx-auto rounded-2xl shadow-2xl w-full max-w-[600px] transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Right: Text and Buttons */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight animate-fade-in-up"
              style={{ color: '#10355f' }}
            >
              Master Your Money in Minutes
            </h1>
            <p
              className="text-lg sm:text-xl mb-10 max-w-xl animate-fade-in-up animation-delay-200"
              style={{ color: '#10355f' }}
            >
              Free financial literacy courses by SEBI-empanelled experts. No finance background? No worries!
            </p>
            <div className="flex flex-col sm:flex-row md:justify-start justify-center gap-4 animate-fade-in-up animation-delay-400">
              <button className="bg-[#10355f] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-[#143d70] hover:scale-105 transition-all duration-300">
                Download App
              </button>
              <button className="border-2 border-[#10355f] text-[#10355f] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#10355f] hover:text-white hover:scale-105 transition-all duration-300">
                Start Learning
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* Our Aspirations Section */}
<section className="bg-[#10355f] py-20 px-6 md:px-12">
  <div className="max-w-5xl mx-auto text-center animate-fade-in-up motion-safe:animate-fade-in-up">
    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
      Our Aspirations
    </h2>
    <p className="text-lg leading-relaxed text-white animate-fade-in-up motion-safe:animate-fade-in-up">
      We believe that financial literacy is the skill of managing your finances. It starts with practicing
      financial attitude and financial behavior leading to financial capability. With the <strong>“Fin Lit Project”</strong> 
      we want to make finance and fintech simple and accessible to everyone. As per a study conducted by S&P, 
      nearly 75% of the eligible adult population is financially illiterate. In normal course, financial terms 
      appear to be complicated and the public at large feels uncomfortable in coping with those terms.
    </p>
    <p className="text-lg leading-relaxed text-white mt-4 animate-fade-in-up motion-safe:animate-fade-in-up">
      We aim to take financial literacy to a minimum forty percent by the end of the next five years. Though 
      this appears to be a humongous task, we have devised various micro courses in such a way that attaining 
      our set target would not be difficult for us.
    </p>
  </div>
</section>



  </>
);

export default Hero;
