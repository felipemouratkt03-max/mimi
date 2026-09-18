import React, { useState, useRef, useEffect } from 'react';
import { getLegalOrientation } from '../services/geminiService';
import { ChatMessage } from '../types';
import { WHATSAPP_NUMBER } from '../constants';
import ReactMarkdown from 'react-markdown';
import { MessageSquare, Send, RefreshCw, ExternalLink, User, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Olá! Sou a assistente virtual da Dra. Emiliana Martins. Estou aqui para ouvir você e entender melhor sua situação jurídica. Como posso ajudar hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    
    // Use a small timeout to allow layout to settle, especially on mobile
    const timeoutId = setTimeout(() => {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [messages, isLoading]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await getLegalOrientation([...messages, { role: 'user', text: userMsg }]);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'Desculpe, tive um problema técnico. Por favor, clique no botão abaixo para falar diretamente no WhatsApp.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="assistant" className="py-20 md:py-32 bg-brand-black border-y border-brand-gold/10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-gold font-bold text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Atendimento Exclusivo
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-ivory mt-4 mb-6 md:mt-6 md:mb-8 leading-tight">
                Sua dúvida jurídica <br/>
                <span className="text-brand-gold">respondida agora</span>
              </h2>
              <p className="text-brand-ivory/60 text-lg mb-8 font-light leading-relaxed">
                Nossa inteligência artificial foi treinada para oferecer um primeiro acolhimento especializado em Direito de Família e Sucessões.
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="text-brand-ivory font-bold text-sm">Acolhimento Imediato</h4>
                    <p className="text-brand-ivory/40 text-xs">Respostas instantâneas para suas primeiras dúvidas.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/10 flex items-center justify-center shrink-0">
                    <ExternalLink className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <h4 className="text-brand-ivory font-bold text-sm">Conexão Direta</h4>
                    <p className="text-brand-ivory/40 text-xs">Encaminhamento automático para o WhatsApp da Dra. Emiliana.</p>
                  </div>
                </div>
              </div>

              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand-gold text-brand-black px-8 py-4 font-bold hover:scale-105 transition-transform shadow-xl"
              >
                FALAR COM A DRA. EMILIANA
                <Send className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-brand-charcoal rounded-xl border border-brand-gold/20 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden h-[500px] md:h-[650px] flex flex-col relative">
              {/* Header */}
              <div className="p-4 md:p-6 border-b border-brand-gold/10 bg-brand-black/50 backdrop-blur-md flex justify-between items-center z-10">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-brand-gold/20 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-brand-gold" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-brand-black"></div>
                  </div>
                  <div>
                    <span className="text-brand-ivory font-bold text-sm block">Assistente Virtual</span>
                    <span className="text-[10px] text-brand-gold uppercase tracking-widest font-bold">Online Agora</span>
                  </div>
                </div>
                <button 
                  onClick={() => setMessages([messages[0]])} 
                  className="p-2 text-brand-ivory/40 hover:text-brand-gold transition rounded-full hover:bg-brand-gold/5"
                  title="Reiniciar conversa"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>

              {/* Chat Area */}
              <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 scrollbar-thin scrollbar-thumb-brand-gold/20">
                <AnimatePresence initial={false}>
                  {messages.map((m, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[85%] p-4 md:p-5 rounded-2xl text-sm leading-relaxed shadow-lg ${
                        m.role === 'user' 
                          ? 'bg-brand-gold text-brand-black font-medium rounded-tr-none' 
                          : 'bg-brand-slate text-brand-ivory/90 border border-brand-gold/10 rounded-tl-none'
                      }`}>
                        <div className="prose prose-invert prose-sm max-w-none">
                          <ReactMarkdown>{m.text}</ReactMarkdown>
                        </div>
                        {m.role === 'model' && i > 0 && (
                          <div className="mt-4 pt-4 border-t border-brand-gold/10">
                            <a 
                              href={whatsappUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-2 text-[11px] font-bold text-brand-gold hover:underline"
                            >
                              CONTINUAR NO WHATSAPP <ExternalLink className="w-3 h-3" />
                            </a>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
                {isLoading && (
                  <div className="flex space-x-2 p-4">
                    <div className="w-2 h-2 bg-brand-gold rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-brand-gold rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-brand-gold rounded-full animate-bounce delay-200"></div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Input Area */}
              <form onSubmit={handleSend} className="p-3 md:p-6 bg-brand-black border-t border-brand-gold/10 flex gap-2 md:gap-3">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Como posso ajudar?"
                  className="flex-1 bg-brand-slate border border-brand-gold/20 rounded-full px-4 md:px-6 py-2 md:py-3 text-brand-ivory focus:outline-none focus:border-brand-gold transition text-sm"
                  disabled={isLoading}
                  autoComplete="off"
                />
                <button 
                  disabled={isLoading}
                  className="bg-brand-gold w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-brand-black shadow-lg hover:scale-110 transition disabled:opacity-50 disabled:scale-100 shrink-0"
                >
                  <Send className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
