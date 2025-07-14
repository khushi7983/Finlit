
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    { q: 'Is it free?', a: 'Yes, our micro-courses and tools are completely free.' },
    { q: 'Is Hindi supported?', a: 'Absolutely, we offer courses in Hindi and English.' },
    { q: 'Do I need prior finance knowledge?', a: 'No, our content is designed for beginners.' }
  ];

  return (
    <section id="faq" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <button
                className="w-full text-left text-lg font-semibold text-gray-800"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.q}
              </button>
              {openIndex === index && <p className="text-gray-600 mt-2">{faq.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
