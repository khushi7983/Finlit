import React from 'react';
import appVideo from '../assets/phone.mp4';
import bgImg from '../assets/bg-aspiration.jpg';
 import finance from '../assets/finance.gif';

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




{/* What is Financial Literacy Section */}
<section className="bg-white py-20 px-6 md:px-12">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
    
    {/* Left: Text Content */}
    <div className="w-full md:w-1/2 animate-fade-in-up">
      <h2 className="text-3xl sm:text-4xl font-bold mb-6" style={{ color: '#10355f' }}>
        What is Financial Literacy?
      </h2>
      <p className="text-lg leading-relaxed mb-6" style={{ color: '#10355f' }}>
        The term financial literacy refers to a variety of important financial skills and concepts.
        It is nothing but the ability to understand and effectively use various financial skills,
        including personal financial management, budgeting, and investing. It is the foundation of
        your relationship with money, and it is a lifelong journey of learning. The earlier you start,
        the better off you will be, because education is the key to success when it comes to money.
        Many people find money matters intimidating, but they don’t have to be, make yourself
        Financially Literate to overcome this. Developing financial literacy to improve your personal
        finances involves learning and practicing a variety of skills related to budgeting, managing
        and paying off debts, and understanding credit and investment products.
      </p>
      <button className="bg-[#10355f] text-white px-6 py-3 rounded-full font-semibold text-md shadow-md hover:bg-[#143d70] transition-all duration-300">
        Read More
      </button>
    </div>

    {/* Right: GIF/Image */}
    <div>
  <img
  src={finance}
  alt="Financial Literacy GIF"
  className="w-full max-w-md mx-auto rounded-xl shadow-lg"
/>

    </div>

  </div>
</section>


    {/* OUR OFFERINGS */}

<section className="bg-[#10355f] py-20 px-6 md:px-12">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center animate-fade-in-up">
      Our Offerings
    </h2>

    <div className="relative">
      {/* Scroll Buttons */}
      <button
        onClick={() => document.getElementById('offerScroll').scrollBy({ left: -300, behavior: 'smooth' })}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 text-white px-4 py-2 rounded-full z-10"
      >
        ‹
      </button>

      <button
        onClick={() => document.getElementById('offerScroll').scrollBy({ left: 300, behavior: 'smooth' })}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-40 text-white px-4 py-2 rounded-full z-10"
      >
        ›
      </button>

      {/* Scrollable Cards */}
      <div
        id="offerScroll"
        className="flex gap-6 overflow-x-auto scrollbar-hide px-6 py-4 scroll-smooth"
      >
        {/* Card 1 */}
        <div className="min-w-[250px] bg-white bg-opacity-5 p-6 rounded-lg shadow-lg text-white hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-4">Financial Literacy MicroCourses</h3>
          <p className="text-sm mb-4">Learn how to invest responsibly with our ESG-based mutual fund modules.</p>
          <button className="text-sm font-semibold inline-flex items-center gap-1 hover:underline">
            Explore Now <span className="text-xl">↗</span>
          </button>
        </div>

        {/* Card 2 */}
        <div className="min-w-[250px] bg-white bg-opacity-5 p-6 rounded-lg shadow-lg text-white hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-4">Environmentally Focused Funds</h3>
          <p className="text-sm mb-4">Discover green mutual funds that prioritize climate and sustainability goals.</p>
          <button className="text-sm font-semibold inline-flex items-center gap-1 hover:underline">
            Learn More <span className="text-xl">↗</span>
          </button>
        </div>

        {/* Card 3 */}
        <div className="min-w-[250px] bg-white bg-opacity-5 p-6 rounded-lg shadow-lg text-white hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-4">Socially Aware Portfolios</h3>
          <p className="text-sm mb-4">Curated content on how social factors impact financial decisions and returns.</p>
          <button className="text-sm font-semibold inline-flex items-center gap-1 hover:underline">
            Dive In <span className="text-xl">↗</span>
          </button>
        </div>

        {/* Card 4 */}
        <div className="min-w-[250px] bg-white bg-opacity-5 p-6 rounded-lg shadow-lg text-white hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-4">Governance & Ethics Insights</h3>
          <p className="text-sm mb-4">Understand how corporate governance and ethics affect market outcomes.</p>
          <button className="text-sm font-semibold inline-flex items-center gap-1 hover:underline">
            Know More <span className="text-xl">↗</span>
          </button>
        </div>

  {/* Card 5 */}
        <div className="min-w-[250px] bg-white bg-opacity-5 p-6 rounded-lg shadow-lg text-white hover:scale-105 transition-transform duration-300">
          <h3 className="text-xl font-semibold mb-4">Socially Aware Portfolios</h3>
          <p className="text-sm mb-4">Curated content on how social factors impact financial decisions and returns.</p>
          <button className="text-sm font-semibold inline-flex items-center gap-1 hover:underline">
            Dive In <span className="text-xl">↗</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>


 {/* Our supporters */}
{/* <section className="bg-white py-16 px-6 md:px-12">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl sm:text-4xl font-bold text-[#10355f] mb-12 relative inline-block">
      Our Supporters
      <span className="block w-24 h-1 bg-yellow-400 absolute left-1/2 transform -translate-x-1/2 mt-2"></span>
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-center">
      <img src={supporter1} alt="Zone Startups" className="max-h-20 object-contain mx-auto grayscale hover:grayscale-0 transition duration-300" />
      <img src={supporter2} alt="BRTSIF" className="max-h-20 object-contain mx-auto grayscale hover:grayscale-0 transition duration-300" />
      <img src={supporter3} alt="DST" className="max-h-20 object-contain mx-auto grayscale hover:grayscale-0 transition duration-300" />
      <img src={supporter4} alt="NSRCEL" className="max-h-20 object-contain mx-auto grayscale hover:grayscale-0 transition duration-300" />
      <img src={supporter5} alt="MeitY" className="max-h-20 object-contain mx-auto grayscale hover:grayscale-0 transition duration-300" />
    </div>
  </div>
</section> */}


  </>
);

export default Hero;
