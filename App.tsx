import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PracticeAreaSection from './components/PracticeAreaSection';
import Process from './components/Process';
import Commitment from './components/Commitment';
import AIAssistant from './components/AIAssistant';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';
import { WHATSAPP_NUMBER, PRACTICE_AREAS } from './constants';

const App: React.FC = () => {
  const [isAssistantVisible, setIsAssistantVisible] = useState(false);
  const assistantRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAssistantVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (assistantRef.current) {
      observer.observe(assistantRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-brand-black text-brand-ivory selection:bg-brand-gold selection:text-brand-black">
      <Navbar />
      <Hero />
      
      {/* Quem Somos Section */}
      <section id="about" className="pt-0 pb-16 md:py-32 bg-brand-charcoal overflow-hidden border-b border-brand-gold/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-24">
            <div className="lg:w-1/2 relative w-full">
              <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-32 h-32 md:w-64 md:h-64 border border-brand-gold/10 hidden sm:block"></div>
              <div className="relative z-10 w-full group overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-brand-gold/20">
                 <img 
                  src="https://lh3.googleusercontent.com/d/1pxTb9ehiHsKUJrvHXuoDBb0h6O_-s8Xm" 
                  alt="Dra. Emiliana Martins" 
                  className="w-full transition-transform duration-[3000ms] group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 bg-brand-black p-4 md:p-8 border border-brand-gold/30 glow-gold hidden sm:block">
                <p className="text-brand-gold font-serif text-2xl md:text-4xl font-bold">10+</p>
                <p className="text-brand-ivory/50 text-[8px] md:text-[10px] uppercase tracking-widest font-bold">Anos de Excelência</p>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <span className="text-brand-gold font-bold text-[10px] uppercase tracking-[0.4em]">O Escritório</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-brand-ivory mt-4 md:mt-6 mb-8 md:mb-10 leading-tight">Tradição Jurídica, <br/>Olhar Contemporâneo</h2>
              
              <div className="space-y-6 md:space-y-8 text-brand-ivory/60 leading-relaxed text-base md:text-lg font-light">
                <p className="font-medium text-brand-gold italic border-l-2 border-brand-gold pl-6 md:pl-8 py-2">
                  "Advocacia de resultados requer coragem técnica e sensibilidade estratégica."
                </p>
                <p>
                  Emiliana Martins Advocacia é um escritório estruturado, com atuação estratégica e excelência técnica, dedicado à condução de demandas complexas com precisão, confidencialidade e foco absoluto em resultados, no Brasil e no exterior.
                </p>
              </div>
              
              <div className="mt-10 md:mt-14 flex flex-wrap gap-6 md:gap-10">
                {['Estratégia Digital', 'Sigilo Absoluto', 'Ética Inegociável'].map(tag => (
                  <div key={tag} className="flex items-center space-x-3">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    <span className="text-brand-ivory/80 font-bold text-[8px] md:text-[10px] uppercase tracking-widest">{tag}</span>
                  </div>
                ))}
              </div>

              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                className="inline-block mt-8 md:mt-16 bg-brand-gold text-brand-black px-10 md:px-12 py-4 md:py-5 rounded-sm font-black text-[10px] md:text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-[0_10px_30px_rgba(212,175,55,0.2)] w-full sm:w-auto text-center"
              >
                Solicitar Parecer
              </a>
            </div>
          </div>
        </div>
      </section>

      {PRACTICE_AREAS.map((area) => (
        <PracticeAreaSection key={area.id} area={area} />
      ))}
      <Process />
      <Commitment />
      <Testimonials />
      <div ref={assistantRef}>
        <AIAssistant />
      </div>
      <FAQ />
      <ContactInfo />
      <Footer />

      <a 
        href={`https://wa.me/${WHATSAPP_NUMBER}`} 
        target="_blank" 
        className={`fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-all group ${isAssistantVisible ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <span className="absolute right-full mr-4 bg-brand-black text-brand-gold px-4 py-2 text-[10px] font-black uppercase tracking-widest shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-brand-gold/30">
          Atendimento Direto
        </span>
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.417-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.305 1.652zm6.599-3.835c1.474.875 3.129 1.338 4.815 1.339 5.178 0 9.393-4.215 9.395-9.395.001-2.51-.976-4.87-2.755-6.648-1.779-1.779-4.139-2.758-6.649-2.759-5.18 0-9.395 4.215-9.398 9.396-.001 1.834.53 3.593 1.536 5.106l-1.006 3.675 3.762-.986zM17.467 14.397c-.3-.149-1.774-.874-2.048-.974-.274-.1-.474-.149-.674.15-.2.299-.774.974-.948 1.173-.174.199-.349.225-.648.075-.3-.15-1.266-.467-2.411-1.487-.893-.795-1.495-1.777-1.67-2.076-.174-.299-.019-.462.13-.61.135-.133.3-.349.45-.523.15-.174.2-.299.3-.499.1-.2.05-.374-.025-.524-.075-.15-.674-1.622-.923-2.221-.244-.582-.493-.503-.674-.513-.174-.01-.374-.012-.574-.012s-.524.075-.798.374c-.274.299-1.047 1.022-1.047 2.492 0 1.469 1.073 2.89 1.223 3.089.15.199 2.112 3.224 5.115 4.524.714.31 1.272.495 1.706.633.717.227 1.369.195 1.884.118.574-.085 1.774-.724 2.023-1.422.249-.699.249-1.297.174-1.422-.075-.125-.274-.199-.574-.349z"/></svg>
      </a>
    </div>
  );
};

export default App;
