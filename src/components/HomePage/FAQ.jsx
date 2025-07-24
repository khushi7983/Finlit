import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

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
    <motion.div
      className="min-h-screen px-6 md:px-20 py-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-12 text-center">
        Frequently Asked Questions
      </h2>

      <div className="max-w-4xl mx-auto space-y-4">
        {FAQ.map((faq, index) => (
          <div
            key={index}
            className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-300 overflow-hidden`}
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center text-left p-6 cursor-pointer"
            >
              <h3 className="text-lg md:text-xl font-semibold text-white">
                {faq.question}
              </h3>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-6 h-6 text-yellow-400" />
              </motion.div>
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="p-6 pt-0 text-slate-300 whitespace-pre-line">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Faq;
