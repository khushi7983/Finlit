


import React from "react";
import { Typewriter } from "react-simple-typewriter";
import journey from '../../assets/journey.png';
import Fraternity from "./Fraternity";

const FinLitStory = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 md:py-32 px-6 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Story Text */}
        <div className="text-gray-800 text-lg leading-relaxed space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-300 via-purple-400 to-indigo-500 bg-clip-text text-transparent mb-4">
            Our FinLit Story
          </h2>
          <p>
            The FinLit Project believes that Financial Literacy is everyone’s right. With a little bit of effort, each individual deserves to know how to make money work for them. Understanding financial jargon and making it part of everyday vocabulary is our motto.
          </p>
          <p>
            Established in 2020 by Mrs. Neha Misra and Dr. D.C. Misra, we’ve conducted 300+ programs and trained over 10,000 individuals across India on financial literacy and fintech, in collaboration with SEBI, NISM, NSE Academy, PFRDA, and more.
          </p>
          <p>
            Backed by STPI, Kalam Centre–AKTU, IIIT, and the Bombay Stock Exchange, we’re dedicated to improving literacy through our app and workshops. We’ve been featured in top publications like The Hindustan Times, The Pioneer, The Statesman, and more.
          </p>
          <p>
            From IITs to the Indian Navy, we’ve delivered value on personal finance, sustainable investing, and fintech to professionals via our app. With AI-powered advisory tools and gamified micro-courses, we’re bridging India’s financial awareness gap.
          </p>
          <p>
            Our achievements include the Indian Achievers Award, TiE Global Runners-Up Award, and participation at the Extraordinary Women in Tech Conference in San Francisco, backed by Start in UP.
          </p>
          <p>
            Want to experience The FinLit Project’s impact? Leave us a message — we’d love to help you!
          </p>
        </div>

        {/* Right Side - Heading and Typewriter */}
        <div className="flex flex-col items-center">
          {/* <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-300 via-purple-400 to-indigo-500 bg-clip-text text-transparent mb-4">
      
            From IITs to Internationals
          </h2> */}
          <div className="text-2xl md:text-3xl font-semibold bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 bg-clip-text leading-relaxed" style={{ color: 'transparent' }}>
            <Typewriter
              words={[
                "Empowering India through Finance 📈",
                "Demystifying Money Matters 💰",
                "Established in 2020 by Neha Misra🌍",
                "Learn. Save. Invest. Grow. 💡",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={50}
              deleteSpeed={30}
              delaySpeed={2000}
            />
          </div>
          {/* Image on the right */}
          <img
            src={journey}
            alt="FinLit Project"
            className="mt-6 w-full max-w-xs object-cover"
          />
        </div>
      </div>
      <Fraternity/>
      
    </section>
  );
};

export default FinLitStory;