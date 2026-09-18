import React from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-brand-black">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-12 md:mb-20">
          <span className="text-brand-gold font-bold text-xs uppercase tracking-[0.4em]">Metodologia</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-ivory mt-4">Nossa Jornada Estratégica</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-brand-gold/10 -z-0"></div>
          
          {PROCESS_STEPS.map((step, i) => (
            <div key={i} className="relative z-10 group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-charcoal border border-brand-gold/30 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 group-hover:bg-brand-gold group-hover:text-brand-black transition-all duration-500 shadow-[0_0_30px_rgba(212,175,55,0.1)]">
                <span className="text-brand-gold font-serif text-xl md:text-2xl font-bold group-hover:text-brand-black">{step.number}</span>
              </div>
              <h4 className="text-brand-ivory font-serif font-bold mb-3 md:mb-4 uppercase tracking-widest text-xs md:text-sm group-hover:text-brand-gold transition">{step.title}</h4>
              <p className="text-[10px] md:text-xs text-brand-ivory/40 leading-relaxed font-light px-4">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;