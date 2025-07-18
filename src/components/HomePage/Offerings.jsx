import React from 'react';

const offerings = [
  {
    title: 'Financial Education through our APIs',
    description: 'Get in touch with us now',
    link: 'https://api.whatsapp.com/message/6EUW7ZLTHSGCB1?autoload=1&app_absent=0',
    cta: 'Get in Touch',
  },
  {
    title: 'Financially Speaking Talks with Global Experts',
    description: 'Click here to learn more',
    link: 'https://www.youtube.com/channel/UCH-nWXtMHz-wmg176HqBSvg',
    cta: 'Learn More',
  },
  {
    title: 'Financial Investments in Mutual Funds !',
    description: 'Click here to start investing!',
    link: 'https://www.thefinlitproject.com/mfinvestorregistration/',
    cta: 'Start Investing',
  },
  {
    title: 'Financial Literacy Micro courses and Quizzes',
    description: 'Now available on the app',
    link: 'https://play.google.com/store/apps/details?id=com.thefinlitproject.app',
    cta: 'Get the App',
  },
];

const Offerings = () => (
  <section id="offerings" className="relative py-24 px-4 md:px-8 bg-gradient-to-b from-[#10355f] to-[#1e293b] overflow-hidden">
    <div className="relative z-10 max-w-7xl mx-auto">
      <h2 className="text-4xl sm:text-5xl font-black text-center mb-12 text-white tracking-tight">
        Our <span className="relative inline-block">
          Offerings
          <span className="absolute left-0 -bottom-1 w-full h-2 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-80 rounded-full -z-10"></span>
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {offerings.map((offering, idx) => (
          <a
            key={offering.title}
            href={offering.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block rounded-3xl bg-white/90 shadow-xl border border-blue-100 hover:shadow-2xl hover:border-yellow-400 transition-all duration-300 p-8 min-h-[320px] flex flex-col justify-between hover:-translate-y-2 hover:bg-blue-50/80 focus:outline-none focus:ring-4 focus:ring-yellow-200"
            style={{ boxShadow: '0 8px 32px 0 rgba(16,53,95,0.10)' }}
          >
            <div>
              <h3 className="text-2xl font-bold text-[#10355f] mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                {offering.title}
              </h3>
      </div>
            <div className="mt-auto">
              <div className="text-base font-medium text-slate-700 mb-6 opacity-80">
                {offering.description}
              </div>
              <span className="inline-flex items-center gap-2 text-yellow-600 font-semibold group-hover:underline group-hover:gap-3 transition-all duration-200">
                {offering.cta}
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
              </span>
            </div>
          </a>
        ))}
      </div>
      </div>
    </section>
  );

export default Offerings;
