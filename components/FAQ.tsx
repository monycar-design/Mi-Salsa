
import React, { useState } from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 bg-black px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-serif font-bold mb-16 text-center">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className="border border-zinc-900 rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex justify-between items-center p-6 text-left hover:bg-zinc-900/50 transition-colors"
              >
                <span className="font-medium text-zinc-200">{faq.question}</span>
                <span className={`transform transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                  ↓
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100 p-6 pt-0' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-zinc-500 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
