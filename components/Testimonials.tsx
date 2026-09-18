
import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-brand-black overflow-hidden border-t border-brand-gold/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 md:mb-16">
          <span className="text-brand-gold font-bold text-xs uppercase tracking-widest">Avaliações</span>
          <h2 className="text-4xl font-serif font-bold text-brand-ivory mt-4 mb-4">O que nossos clientes dizem</h2>
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-brand-ivory">5.0</span>
              <div className="flex text-brand-gold">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-2 text-brand-ivory/40 text-sm">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span>Google Business Profile • 124 avaliações</span>
            </div>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Carousel container */}
          <div className="relative h-[450px] sm:h-[400px] md:h-[300px]">
            {TESTIMONIALS.map((t, idx) => (
              <div 
                key={t.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                  idx === currentIndex 
                    ? 'opacity-100 scale-100 z-10' 
                    : 'opacity-0 scale-95 -z-10'
                }`}
              >
                <div className="h-full p-6 sm:p-8 md:p-10 bg-brand-charcoal rounded-lg border border-brand-gold/10 flex flex-col shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      {t.avatar ? (
                        <img 
                          src={t.avatar} 
                          alt={t.name} 
                          className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border border-brand-gold/20"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-black text-brand-gold rounded-full flex items-center justify-center font-bold text-lg md:text-xl shadow-lg border border-brand-gold/20">
                          {t.name.charAt(0)}
                        </div>
                      )}
                      <div>
                        <h4 className="font-bold text-brand-ivory text-sm md:text-base">{t.name}</h4>
                        <div className="flex items-center space-x-2">
                          <span className="text-[10px] md:text-xs text-brand-ivory/40">{t.date || 'há 1 mês'}</span>
                          <span className="text-brand-ivory/20">•</span>
                          <span className="text-[10px] md:text-xs text-brand-gold font-bold uppercase tracking-widest">{t.role}</span>
                        </div>
                      </div>
                    </div>
                    <div className="hidden sm:block">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 text-brand-ivory/20 fill-current">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex text-brand-gold mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    ))}
                  </div>

                  <p className="text-brand-ivory/80 text-sm md:text-base leading-relaxed line-clamp-4 md:line-clamp-none">
                    {t.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-12 space-x-3">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'bg-brand-gold w-8' : 'bg-brand-gold/20'
                }`}
              />
            ))}
          </div>

          {/* Controls */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 p-3 bg-brand-charcoal text-brand-gold rounded-full shadow-xl hover:bg-brand-gold hover:text-brand-black transition-colors z-20 border border-brand-gold/20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 p-3 bg-brand-charcoal text-brand-gold rounded-full shadow-xl hover:bg-brand-gold hover:text-brand-black transition-colors z-20 border border-brand-gold/20"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
