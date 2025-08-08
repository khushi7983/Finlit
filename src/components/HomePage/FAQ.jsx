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

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <motion.section
      className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariant}
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-12" variants={itemVariant}>
            <div className="inline-flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm rounded-full px-3 py-1.5 mb-4">
              <span className="text-xs font-medium text-yellow-400">FAQs</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <div className="max-w-4xl mx-auto space-y-4">
            {FAQ.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl transition-all duration-300 overflow-hidden"
                variants={itemVariant}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
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
                      <p className="p-6 pt-0 text-sm text-slate-300 whitespace-pre-line">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Faq;