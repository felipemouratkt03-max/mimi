
import React from 'react';

const Commitment: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-navy text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5 -skew-x-12 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="w-16 h-16 border border-brand-gold/30 rounded-full flex items-center justify-center mb-10">
            <svg className="w-8 h-8 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">Compromisso Profissional</h2>
          
          <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-12 italic">
            "Atuamos com responsabilidade absoluta, priorizando a orientação realista e ética. Não oferecemos promessas irreais, oferecemos estratégias sólidas para que você tome decisões conscientes sobre seu patrimônio e sua família."
          </p>
          
          <div className="flex items-center space-x-4">
            <div className="w-10 h-px bg-brand-gold"></div>
            <span className="text-brand-gold font-bold tracking-widest uppercase text-xs">Emiliana Martins Advocacia</span>
            <div className="w-10 h-px bg-brand-gold"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
