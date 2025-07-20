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
    <div
      className="min-h-screen px-6 md:px-20 py-16"
      style={{
        background: "linear-gradient(to bottom, #0f172a, #1e293b)" // dark blue gradient
      }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12 text-center">
        FAQs
      </h2>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        {FAQ.map((faq, index) => (
          <div
            key={index}
            className={`py-4 border-b border-gray-300 cursor-pointer transition-all duration-300`}
            onClick={() => toggleFaq(index)}
          >
            <h3 className="text-lg md:text-xl font-semibold text-gray-800">
              {faq.question}
            </h3>
            {activeIndex === index && (
              <p className="mt-3 text-gray-700 whitespace-pre-line">
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
