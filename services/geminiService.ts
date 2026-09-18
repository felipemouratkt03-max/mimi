import { GoogleGenAI } from '@google/genai';
import { ChatMessage } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

const SYSTEM_INSTRUCTION = `Você é a assistente jurídica virtual do escritório Emiliana Martins Advocacia & Consultoria, especializado em Direito de Família e Sucessões em Belo Horizonte/MG.
Seu objetivo é acolher o cliente de forma empática, profissional, ética e humanizada.
Explique brevemente os conceitos legais da dúvida (divórcio, pensão alimentícia, guarda, inventário, partilha, etc.) em linguagem simples e acessível.
NUNCA garanta resultados ou prometa valores.
Ao final de toda orientação, convide o usuário cordialmente a agendar uma consulta individualizada com a Dra. Emiliana Martins pelo WhatsApp para análise detalhada do caso.
Mantenha respostas concisas (2 a 3 parágrafos curtos) e acolhedoras.`;

async function callClientGemini(history: ChatMessage[], apiKey: string): Promise<string> {
  const ai = new GoogleGenAI({ apiKey });
  const contents = history.map((msg) => ({
    role: msg.role === 'user' ? 'user' : 'model',
    parts: [{ text: msg.text }],
  }));

  const response = await ai.models.generateContent({
    model: 'gemini-3.8-flash',
    contents: contents,
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
      maxOutputTokens: 600,
    },
  });

  return (
    response.text ||
    `Obrigada por sua mensagem. Para avaliarmos o seu caso com a atenção jurídica que ele merece, fale com a Dra. Emiliana no WhatsApp: https://wa.me/${WHATSAPP_NUMBER}`
  );
}

export const getLegalOrientation = async (history: ChatMessage[]): Promise<string> => {
  // 1. Tentar chamar a rota de backend Express (/api/chat)
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ history }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data.text) {
        return data.text;
      }
    }
  } catch (backendError) {
    console.warn('Backend /api/chat indisponível, tentando fallback:', backendError);
  }

  // 2. Fallback para execução direta no navegador (se hospedado como Vite estático na Hostinger)
  const clientApiKey =
    process.env.GEMINI_API_KEY ||
    (import.meta as any).env?.VITE_GEMINI_API_KEY ||
    '';

  if (clientApiKey) {
    try {
      return await callClientGemini(history, clientApiKey);
    } catch (clientError) {
      console.error('Erro na chamada client-side do Gemini:', clientError);
    }
  }

  // 3. Resposta de acolhimento personalizada caso a API não esteja configurada
  const lastUserMsg = [...history].reverse().find((m) => m.role === 'user')?.text || '';
  const greeting = lastUserMsg
    ? `Olá! Agradecemos o contato. Compreendo perfeitamente sua dúvida sobre este tema familiar/sucessório.`
    : `Olá! Sou a assistente jurídica da Dra. Emiliana Martins.`;

  return `${greeting}\n\nPara que a Dra. Emiliana Martins possa analisar os documentos e particularidades da sua situação com todo o sigilo e segurança que você precisa, convido você a iniciar uma conversa direta pelo WhatsApp:\n\n👉 Clique para falar no WhatsApp: https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá Dra. Emiliana, gostaria de uma orientação jurídica.')}`;
};
