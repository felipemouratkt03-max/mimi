
import React from 'react';
import { WHATSAPP_NUMBER, EMAIL_CONTACT, OFFICE_ADDRESS, COMPANY_NAME, CNPJ } from '../constants';

const ContactInfo: React.FC = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-brand-navy text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-brand-gold font-bold text-xs uppercase tracking-widest">Fale Conosco</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mt-4 mb-4 text-white">Pronta para te ouvir</h2>
          <p className="text-slate-400 mb-8 md:mb-12 uppercase tracking-widest text-[10px] font-bold">Atendimento exclusivo mediante agendamento</p>
          
          <div className="grid md:grid-cols-3 gap-12 text-center mb-10 md:mb-16">
            <div className="space-y-4">
              <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center mx-auto text-brand-black">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <h4 className="font-bold text-brand-gold uppercase tracking-widest text-xs">Telefone</h4>
              <p className="text-brand-gray font-medium">(31) 9 9359-8552</p>
            </div>

            <div className="space-y-4 border-x border-white/10 px-6">
              <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center mx-auto text-brand-black">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h4 className="font-bold text-brand-gold uppercase tracking-widest text-xs">E-mail</h4>
              <p className="text-brand-gray font-medium">{EMAIL_CONTACT}</p>
            </div>

            <div className="space-y-4">
              <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center mx-auto text-brand-black">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <h4 className="font-bold text-brand-gold uppercase tracking-widest text-xs">Atendimento</h4>
              <p className="text-brand-gray font-medium leading-relaxed">{OFFICE_ADDRESS}</p>
              <div className="pt-2 text-[11px] text-slate-400 space-y-0.5">
                <p className="font-medium text-slate-300">{COMPANY_NAME}</p>
                <p className="text-brand-gold font-mono">CNPJ: {CNPJ}</p>
              </div>
            </div>
          </div>

          <a 
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            className="inline-block bg-brand-gold text-brand-black px-16 py-6 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-2xl"
          >
            AGENDAR ANÁLISE INDIVIDUALIZADA
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
