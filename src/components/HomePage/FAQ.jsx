import React, { useState } from "react";

const FAQ = [
  {
    question: "What is Financial Literacy?",
    answer:
      "Financial Literacy is a life skill. It is the knowledge and ability of life-long financial:\n\n• learning,\n• planning,\n• studying,\n\nand decision making in\n\n• creating,\n• saving,\n• investing,\n• borrowing and\n• spending money.\n\nFinancial Literacy enhances Financial attitude and Financial Behaviour towards shaping better Financial Capabilities."
  },
  {
    question: "How can financial literacy help YOU?",
    answer:
      "Financial literacy helps individuals manage money better, make informed decisions, and plan for a secure financial future."
  },
  {
    question: "How can financial literacy be learnt/adapted?",
    answer:
      "Through structured programs, self-learning, workshops, and practical application in daily financial decisions."
  },
  {
    question: "Why Financial Literacy?",
    answer:
      "It empowers individuals to take control of their finances, avoid debt traps, and build wealth responsibly."
  },
  {
    question: "Who needs Financial Literacy?",
    answer:
      "Everyone! From students to working professionals to retirees – everyone can benefit from better money skills."
  },
  {
    question: "How are we addressing Financial Literacy?",
    answer:
      "By creating accessible, engaging, and practical learning experiences tailored to various audiences and age groups."
  }
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="bg-white min-h-screen px-6 md:px-20 py-12">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F1F3E] mb-10 text-center">
        FAQs
      </h2>

      <div className="max-w-4xl mx-auto">
        {FAQ.map((faq, index) => (
          <div
            key={index}
            className="py-6 border-b border-gray-200 cursor-pointer"
            onClick={() => toggleFaq(index)}
          >
            <h3 className="text-lg md:text-xl font-semibold text-[#0F1F3E] hover:bg-[#FFF5E5] p-2 rounded-md text-left">
              {faq.question}
            </h3>
            {activeIndex === index && (
              <p className="mt-3 text-gray-700 whitespace-pre-line bg-[#f9f9f9] p-4 rounded-md shadow-sm text-left">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
