import React from 'react';
import { WHATSAPP_NUMBER } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-0 md:h-screen flex items-center overflow-hidden bg-brand-black pt-24 pb-0 md:py-0">
      <div className="absolute inset-0 z-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Law Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl animate-fade-in">
          <div className="flex items-center space-x-4 mb-6 md:mb-8">
            <div className="w-8 md:w-12 h-px bg-brand-gold"></div>
            <span className="text-brand-gold font-bold tracking-[0.15em] md:tracking-[0.4em] uppercase text-[8px] md:text-[10px]">Atuação Estratégica e Excelência Técnica</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-brand-ivory mb-6 md:mb-8 leading-[1.1] md:leading-[1.1] drop-shadow-2xl">
            Justiça com <br className="hidden md:block" />
            <span className="text-brand-gold italic">excelência técnica.</span>
          </h1>
          
          <p className="text-base md:text-xl text-brand-ivory/60 font-light max-w-2xl mb-8 md:mb-12 leading-relaxed">
            Estratégias jurídicas personalizadas com foco absoluto em resultados. Atuação dedicada à condução de demandas complexas com precisão e confidencialidade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              className="gradient-gold text-brand-black px-8 md:px-12 py-4 md:py-5 rounded-sm font-black text-[10px] md:text-xs uppercase tracking-widest shadow-[0_10px_30px_rgba(212,175,55,0.2)] hover:scale-105 transition-all text-center"
            >
              Agendar Agora
            </a>
            <a href="#services" className="border border-brand-gold/30 text-brand-gold px-8 md:px-12 py-4 md:py-5 rounded-sm font-bold text-[10px] md:text-xs uppercase tracking-widest hover:bg-brand-gold/10 transition backdrop-blur-sm text-center">
              Conhecer Especialidades
            </a>
          </div>
        </div>
      </div>

      <div className="hidden md:flex absolute bottom-10 left-10 flex-col space-y-4">
        <div className="h-12 md:h-20 w-px bg-brand-gold/30 mx-auto"></div>
        <span className="text-brand-gold/50 text-[8px] md:text-[10px] uppercase tracking-[0.5em] [writing-mode:vertical-lr]">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;