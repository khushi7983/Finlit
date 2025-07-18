import React, { useEffect, useRef } from "react";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dr. Amit Bhadra",
      title: "Dean, Business Administration, GITAM Deemed University",
      text: "Thank you for conducting a highly informative session on Blockchain. I look forward to having other such engagements with you…",
    },
    {
      name: "Karthik Sivacharan",
      title: "Creator Stack",
      text: "The topic of personal finance was oblivious to me a few months back. Reading about it recently made me realise that managing finances is an essential skill. FinLitProject is the perfect platform to start.",
    },
    {
      name: "Rebecca Kersch",
      title: "Tang App",
      text: "Neha and the Fin Lit Project are going to fix financial literacy around the world. This is a brilliant venture the world needs…",
    },
    {
      name: "Sikha Ghanty",
      title: "Cognizant",
      text: "In layman terms, the speaker explained a host of investment avenues and pitfalls of not investing smartly. It was a great session for a beginner like me.",
    },
    {
      name: "Harsh Jain",
      title: "IIIT Delhi",
      text: "Thank you Neha Ma'am for the session 'Demystifying Finance for startups'. This session changed my outlook on finance, and I now have a fair idea to manage my future venture.",
    },
    {
      name: "Nischay Reddy",
      title: "Sertify",
      text: "Since financial literacy isn't taught growing up, this is a great course for those wanting to take charge of their financial futures.",
    },
    {
      name: "Rashi Saraf",
      title: "Indus Law",
      text: "Highly recommend this course! Neha is a knowledgeable, patient teacher, and it's totally worth the time and effort.",
    },
    {
      name: "P Bhavani",
      title: "SBI Mutual Fund",
      text: "The Finlit Project app has simplified my learning of financial products. The micro courses and quizzes helped me break the fear of finance.",
    },
    {
      name: "Sayantani Mukherjee",
      title: "UNDP",
      text: "Neha is a true 'womanpreneur' whose expertise shines through the FinLit Project, strengthening financial capability globally.",
    },
    {
      name: "Arnav Gurnani",
      title: "We-ACE",
      text: "An extremely insightful session with great turnout and active participation. Thank you for making it the most enjoyable community event.",
    },
    {
      name: "Mahesh Solanke",
      title: "AdvaRisk Inc.",
      text: "Technical Analysis sessions with Neha Ma'am were the most interactive. I look forward to learning more from you.",
    },
    {
      name: "Vipul Sharma",
      title: "Kalkine Media Australia",
      text: "One of the most interactive classes, designed to help us understand and learn in the best possible manner.",
    },
    {
      name: "Kiran Waddiparthi",
      title: "Cognizant",
      text: "Very pleased to have you spread financial awareness and inspire many of us. Thank you for your efforts.",
    },
    {
      name: "Abid Hussain",
      title: "SHCIL",
      text: "Overall an excellent experience in learning, interacting, and knowledgeable sessions.",
    },
    {
      name: "Vimal Shukla",
      title: "Stock Holding Corporation of India Limited",
      text: "A very good learning experience with great interactions. Thank you.",
    },
    {
      name: "Rupal Samanta",
      title: "Stock Holding Corporation of India Limited",
      text: "Wonderful sessions with you, hope for more such opportunities. Thank you.",
    },
    {
      name: "Nidhi Mehra",
      title: "Stock Holding Corporation of India Limited",
      text: "Really wonderful and interactive session. Thank you Neha mam.",
    },
    {
      name: "Aditi Verma",
      title: "",
      text: "Thank you Ma'am for these interactive and knowledgeable sessions.",
    },
    {
      name: "Ramesh Das",
      title: "",
      text: "Thanks you Ma'am, really appreciate your teaching.",
    },
    {
      name: "Bireshwar Chatterjee",
      title: "National Stock Exchange of India",
      text: "API is all pervasive… may be the next best thing after human language. Thanks Neha.",
    },
    {
      name: "Rahul Singh",
      title: "Union Bank of India",
      text: "Rahul has now got a better understanding of API in day-to-day life. Thank you mam.",
    },
    {
      name: "Swapnil Thakur",
      title: "",
      text: "Thanks Mam for all your sessions… In each session we learned many new things.",
    },
    {
      name: "Sapan Khare",
      title: "India Shelter Finance Corporation",
      text: "Better understanding of technical aspects of API which we non-techies thought was impossible.",
    },
    {
      name: "Rajesh Arcot",
      title: "KFin Technologies Pvt Ltd",
      text: "The sessions on IoT and APIs are exemplary. Thank you for giving us context and full framework.",
    },
    {
      name: "Nishani Manohar",
      title: "Executive Director, IIT Madras Alumni Association",
      text: "Thank you for your invaluable contribution as a resource speaker. Your expertise left a positive impact on participants.",
    },
  ];

  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationId;
    let scrollAmount = 0;
    const scrollSpeed = 0.5; // Slower speed for better readability
    const cardWidth = 320; // Account for card width + gap
    const totalWidth = testimonials.length * cardWidth;

    const animate = () => {
      scrollAmount += scrollSpeed;
      
      // Reset position when we've scrolled through all original testimonials
      if (scrollAmount >= totalWidth) {
        scrollAmount = 0;
      }
      
      carousel.style.transform = `translateX(-${scrollAmount}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section className="bg-gradient-to-br from-slate-50 to-white py-20 px-6 md:px-12 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4">
            What People Say
          </h2>
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm rounded-full px-4 py-2">
            <Quote className="w-4 h-4 text-yellow-600" />
            <span className="text-sm font-medium text-yellow-700">Testimonials</span>
          </div>
        </div>

        <div className="relative w-full">
          <div
            ref={carouselRef}
            className="flex items-start gap-6"
            style={{ willChange: 'transform' }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="flex-none bg-white rounded-2xl p-6 shadow-lg border border-slate-200 w-80 h-48 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-full flex flex-col justify-between">
                  <p className="text-slate-600 text-sm mb-4 italic line-clamp-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="mt-auto">
                    <div className="font-semibold text-slate-800 text-sm truncate">
                      {testimonial.name}
                    </div>
                    <div className="text-xs text-slate-500 truncate">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;