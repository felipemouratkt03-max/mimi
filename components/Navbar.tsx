import React, { useState, useEffect } from 'react';
import { WHATSAPP_NUMBER } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || isMenuOpen ? 'bg-brand-black/95 backdrop-blur-md border-b border-brand-gold/10 py-4 shadow-2xl' : 'bg-transparent py-4 md:py-8'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transition-transform group-hover:scale-105">
            <svg viewBox="0 0 100 100" className="w-full h-full text-brand-gold" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M25 30 H55 M25 50 H45 M25 70 H55 M25 30 V70" />
              <path d="M60 70 V30 L75 50 L90 30 V70" />
            </svg>
          </div>
          <div className="h-6 w-px bg-brand-gold/30 hidden sm:block"></div>
          <span className="text-brand-ivory font-serif text-sm md:text-lg tracking-widest uppercase hidden sm:block font-semibold">Emiliana Martins</span>
        </div>
        
        <div className="flex items-center space-x-4 md:space-x-10">
          <div className="hidden lg:flex space-x-8">
            {['familia', 'about', 'assistant', 'faq'].map((item) => (
              <a 
                key={item}
                href={`#${item}`} 
                onClick={(e) => handleLinkClick(e, item)} 
                className="text-brand-ivory/70 hover:text-brand-gold transition-colors text-[10px] uppercase tracking-[0.2em] font-bold"
              >
                {item === 'familia' ? 'Áreas' : item === 'assistant' ? 'Consultoria IA' : item === 'about' ? 'O Escritório' : 'Dúvidas'}
              </a>
            ))}
          </div>
          
          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            className="gradient-gold text-brand-black px-4 md:px-7 py-2 md:py-3 rounded-sm font-bold text-[9px] md:text-[10px] uppercase tracking-widest hover:brightness-110 transition shadow-[0_0_15px_rgba(212,175,55,0.3)]"
          >
            Consulta Particular
          </a>

          <button 
            className="lg:hidden text-brand-gold p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-500 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100 border-t border-brand-gold/10 mt-4' : 'max-h-0 opacity-0'}`}>
        <div className="container mx-auto px-6 py-8 flex flex-col space-y-6">
          {['familia', 'about', 'assistant', 'faq'].map((item) => (
            <a 
              key={item}
              href={`#${item}`} 
              onClick={(e) => handleLinkClick(e, item)} 
              className="text-brand-ivory/70 hover:text-brand-gold transition-colors text-xs uppercase tracking-[0.3em] font-bold"
            >
              {item === 'familia' ? 'Áreas de Atuação' : item === 'assistant' ? 'Consultoria IA' : item === 'about' ? 'O Escritório' : 'Dúvidas Frequentes'}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;