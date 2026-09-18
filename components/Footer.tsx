
import React from 'react';
import { OFFICE_ADDRESS, EMAIL_CONTACT, COMPANY_NAME, CNPJ } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-brand-ivory/50 py-20 border-t border-brand-gold/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <div className="sm:col-span-2">
            <div className="flex items-center space-x-2 text-white mb-6">
              <div className="w-10 h-10 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full text-brand-gold" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M25 30 H55 M25 50 H45 M25 70 H55 M25 30 V70" />
                  <path d="M60 70 V30 L75 50 L90 30 V70" />
                </svg>
              </div>
              <span className="text-xl font-serif font-bold uppercase tracking-widest">Emiliana Martins</span>
            </div>
            <p className="max-w-md mb-8 leading-relaxed text-sm md:text-base">
              Emiliana Martins Advocacia é um escritório estruturado, com atuação estratégica e excelência técnica, dedicado à condução de demandas complexas com precisão, confidencialidade e foco absoluto em resultados.
            </p>
            <div className="flex space-x-6">
              <a 
                href="https://www.instagram.com/emilianamartinsadvogados/" 
                target="_blank"
                className="hover:text-brand-gold transition-colors flex items-center gap-2 text-[10px] md:text-xs uppercase font-bold tracking-widest"
              >
                Instagram
              </a>
              <a 
                href="https://www.linkedin.com/in/emiliana-martins-silveira-rezende-354a919b" 
                target="_blank"
                className="hover:text-brand-gold transition-colors flex items-center gap-2 text-[10px] md:text-xs uppercase font-bold tracking-widest"
              >
                LinkedIn
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-[10px] tracking-[0.3em]">Links Rápidos</h4>
            <ul className="space-y-4 text-[10px] md:text-xs uppercase tracking-widest font-medium">
              <li><a href="#home" className="hover:text-brand-gold transition">Início</a></li>
              <li><a href="#services" className="hover:text-brand-gold transition">Áreas de Atuação</a></li>
              <li><a href="#about" className="hover:text-brand-gold transition">Quem Somos</a></li>
              <li><a href="#faq" className="hover:text-brand-gold transition">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-[10px] tracking-[0.3em]">Corporativo</h4>
            <div className="space-y-3 text-[10px] md:text-xs leading-relaxed">
              <p className="text-brand-ivory font-semibold">{COMPANY_NAME}</p>
              <p className="text-brand-gold font-medium">CNPJ: {CNPJ}</p>
              <p>{EMAIL_CONTACT}</p>
              <p className="text-brand-ivory/70">{OFFICE_ADDRESS}</p>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-brand-gold/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] uppercase tracking-[0.2em]">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME} • CNPJ: {CNPJ}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition">Privacidade</a>
            <a href="#" className="hover:text-white transition">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
