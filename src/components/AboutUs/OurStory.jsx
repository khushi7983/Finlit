import React from "react";
import { Typewriter } from "react-simple-typewriter";
import journey from '../../assets/journey.png';
import Fraternity from "./Fraternity";
import MediaPresence from "./MediaPresence";

const FinLitStory = () => {
  return (
    <section
    id="about-us"
    className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 px-6 md:px-12 overflow-hidden"
  >
    {/* Decorative background circle */}
    <div className="absolute bottom-[-6rem] right-[-8rem] w-[40rem] h-[40rem] bg-blue-900 opacity-30 rounded-full z-0"></div>
    {/* Main content */}
    <div className="relative max-w-4xl mx-auto z-10">
      <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 text-center">
        OUR FINLIT STORY
      </h2>
      <p className="text-lg text-slate-200 leading-relaxed mb-6">
        TheFinLitProject believes that Financial Literacy is everyone’s right. With a little bit of effort each individual deserves to know how to make money work for them. Understanding Financial Jargons and making them everyday terms is our motto and we attempt to go beyond classroom teaching into the real world of bulls and bears. With comprehensive capabilities and deep industry knowledge necessary to help you understand the most complex terms that you’ve ever come across in finance.
      </p>
      <p className="text-lg text-slate-200 leading-relaxed mb-6">
        The Fin Lit Project is a premium financial education and investment platform. Established in 2020 by Mrs Neha Misra and Dr DC Misra, in the last 2 years has conducted more than 300 programmes and trained over 10,000 individuals across U.P. and India on financial literacy and financial technology education in collaboration with SEBI, NISM, NSE Academy, PFRDA, and other organisations.
      </p>
      <p className="text-lg text-slate-200 leading-relaxed mb-6">
        The Fin Lit Project is supported by STPI, Kalam Centre- AKTU, IIIT and Bombay Stock Exchange and strives to improve financial literacy through its app across India.
      </p>
      <p className="text-lg text-slate-200 leading-relaxed mb-6">
        The Fin Lit Project has featured in The Hindustan Times, The Times of India, The Pioneer, The New Indian Express, Female Tech Leaders UK &amp; Brazil, The Statesman, The Leaflet, and the Deccan Herald.
      </p>
      <p className="text-lg text-slate-200 leading-relaxed mb-6">
        The Fin Lit Project has educated individuals in technology around avenues of personal finance, sustainable finance, and emerging fintech and has served institutes like IITs, IIIT and organizations like Consensys, Indian Navy, GBA, UNDP, Coursera, Dell, and Cognizant via its app available on Playstore and iOS.
      </p>
      <p className="text-lg text-slate-200 leading-relaxed mb-6">
        We are building an AI-powered investment advisory supported by micro-courses and quizzes on finance and fintech via The Fin Lit Project App to technology professionals in order to address the financial literacy gap in India. The Fin Lit Project has won the Indian Achievers Award 2020-21 for Best Emerging Company, Tie Global Pitch Competition Runners Up Award 2022, Silver Award at IIT Delhi sponsored by DST, and the Fintech India Innovation Award at Convergence Pragati Maidan in 2022. Recently we have also been selected to participate at the Extraordinary Women in Tech Conference at San Francisco which has been selected for International Event support under Start in UP.
      </p>
      <p className="text-lg text-slate-200 leading-relaxed">
        Want to experience the expertise of TheFinLitProject for yourself? Leave us a message and let’s discuss what we can do for you.
      </p>
    </div>

    <Fraternity />
    <MediaPresence />
  </section>

  );
};

export default FinLitStory;