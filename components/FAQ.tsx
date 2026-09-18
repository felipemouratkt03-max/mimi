import React, { useState } from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-32 bg-brand-charcoal">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <span className="text-brand-gold font-bold text-[10px] uppercase tracking-[0.4em]">FAQ</span>
            <h2 className="text-4xl font-serif font-bold text-brand-ivory mt-4">Consultas Frequentes</h2>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-brand-black border border-brand-gold/10 overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full text-left p-6 md:p-8 flex justify-between items-center hover:bg-brand-slate transition"
                >
                  <span className="font-bold text-brand-ivory text-sm tracking-wide uppercase">{faq.question}</span>
                  <svg 
                    className={`w-4 h-4 text-brand-gold transition-transform duration-500 ${openIndex === idx ? 'rotate-180' : ''}`} 
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                {openIndex === idx && (
                  <div className="p-6 md:p-8 pt-0 text-brand-ivory/50 text-sm leading-relaxed font-light animate-fade-in border-t border-brand-gold/5 mt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;