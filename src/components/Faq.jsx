// FAQAccordion.jsx
import React, { useState } from 'react';
import faqData from '../faqData';
const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8" id='faq'>
      <h2 className="text-3xl font-bold text-center mb-6 text-indigo-700">Frequently Asked Questions</h2>
      <div className="flex flex-col gap-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-sm"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full text-left p-4 font-medium text-gray-800 hover:bg-gray-100 transition"
            >
              {item.question}
            </button>
            {activeIndex === index && (
              <div className="p-4 pt-0 text-gray-600 bg-gray-50 transition-all duration-300 ease-in-out">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
