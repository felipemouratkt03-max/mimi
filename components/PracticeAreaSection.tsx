import React from 'react';
import { WHATSAPP_NUMBER, PracticeArea } from '../constants';
import { Shield, Clock, Scale, AlertCircle, Heart, Scroll, Briefcase, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Shield,
  Clock,
  Scale,
  AlertCircle,
  Heart,
  Scroll,
  Briefcase
};

interface PracticeAreaSectionProps {
  area: PracticeArea;
}

const PracticeAreaSection: React.FC<PracticeAreaSectionProps> = ({ area }) => {
  const IconComponent = iconMap[area.icon] || Scale;

  return (
    <section id={area.id} className="py-20 bg-brand-black border-t border-brand-gold/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
          <div className="lg:w-1/2">
            <span className="text-brand-gold font-bold text-xs uppercase tracking-[0.3em]">{area.subtitle}</span>
            <h2 className="text-4xl font-serif font-bold text-brand-ivory mt-4 mb-6">{area.title}</h2>
            <p className="text-brand-ivory/60 leading-relaxed mb-8">
              {area.description}
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <IconComponent className="w-5 h-5 text-brand-gold mt-1" />
                <div>
                  <h4 className="text-brand-ivory font-bold text-sm uppercase">Especialidade</h4>
                  <p className="text-brand-ivory/40 text-xs">Atuação técnica focada.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-brand-gold mt-1" />
                <div>
                  <h4 className="text-brand-ivory font-bold text-sm uppercase">Sigilo Absoluto</h4>
                  <p className="text-brand-ivory/40 text-xs">Discrição total em todos os casos.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="overflow-x-auto rounded-lg border border-brand-gold/20 shadow-2xl shadow-brand-gold/5">
              <table className="w-full text-left border-collapse bg-brand-charcoal/50 backdrop-blur-sm">
                <thead>
                  <tr className="bg-brand-gold/10 border-b border-brand-gold/20">
                    <th className="p-4 text-brand-gold font-serif text-sm uppercase tracking-widest">Área de Atuação</th>
                    <th className="p-4 text-brand-gold font-serif text-sm uppercase tracking-widest">Serviços Especializados</th>
                    <th className="p-4 text-brand-gold font-serif text-sm uppercase tracking-widest text-center">Urgência</th>
                  </tr>
                </thead>
                <tbody>
                  {area.detailedServices.map((item, index) => (
                    <tr key={index} className="border-b border-brand-gold/10 hover:bg-brand-gold/5 transition-colors">
                      <td className="p-4 text-brand-ivory font-bold text-xs uppercase tracking-tight">{item.area}</td>
                      <td className="p-4 text-brand-ivory/60 text-xs leading-relaxed">{item.services}</td>
                      <td className="p-4 text-center">
                        <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter ${
                          item.urgency.includes('Altíssima') ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 
                          item.urgency.includes('Alta') ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' : 
                          'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                        }`}>
                          {item.urgency}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {area.emergencyTitle && (
          <div className="bg-gradient-to-r from-brand-charcoal to-brand-black p-8 rounded-lg border border-brand-gold/20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-gold/10 rounded-full flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-brand-gold" />
              </div>
              <div>
                <h3 className="text-brand-ivory font-serif font-bold text-xl">{area.emergencyTitle}</h3>
                <p className="text-brand-ivory/40 text-sm">{area.emergencyDesc}</p>
              </div>
            </div>
            <a 
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`${area.emergencyTitle}: Preciso de atendimento imediato.`)}`}
              className="bg-brand-gold text-brand-black px-8 py-4 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-brand-ivory transition-all shadow-lg shadow-brand-gold/20 flex items-center gap-2"
            >
              {area.emergencyCta || 'Falar Agora via WhatsApp'}
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default PracticeAreaSection;
