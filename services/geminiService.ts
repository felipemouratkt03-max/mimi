import { ChatMessage } from '../types';
import { WHATSAPP_NUMBER } from '../constants';
import { getOfflineLegalGuidance } from './legalKnowledgeBase';

const SYSTEM_INSTRUCTION = `Você é a assistente jurídica virtual do escritório Emiliana Martins Advocacia & Consultoria, especializado em Direito de Família e Sucessões em Belo Horizonte/MG.
Seu objetivo é acolher o cliente de forma empática, profissional, ética e humanizada.
Explique brevemente os conceitos legais da dúvida (divórcio, pensão alimentícia, guarda, inventário, partilha, etc.) em linguagem simples e acessível.
NUNCA garanta resultados ou prometa valores.
Ao final de toda orientação, convide o usuário cordialmente a agendar uma consulta individualizada com a Dra. Emiliana Martins pelo WhatsApp para análise detalhada do caso.
Mantenha respostas concisas (2 a 3 parágrafos curtos) e acolhedoras.`;

async function callClientGeminiRest(history: ChatMessage[], apiKey: string): Promise<string> {
  const contents = history.map((msg) => ({
    role: msg.role === 'user' ? 'user' : 'model',
    parts: [{ text: msg.text }],
  }));

  // Clean initial model messages if any
  while (contents.length > 0 && contents[0].role === 'model') {
    contents.shift();
  }

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent?key=${apiKey}`;
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents,
      systemInstruction: {
        parts: [{ text: SYSTEM_INSTRUCTION }],
      },
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 600,
      },
    }),
  });

  if (!res.ok) {
    throw new Error(`Erro na API Gemini: ${res.status}`);
  }

  const data = await res.json();
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!text) {
    throw new Error('Nenhum texto retornado pela API.');
  }

  return text;
}

export const getLegalOrientation = async (history: ChatMessage[]): Promise<string> => {
  const lastUserMsg = [...history].reverse().find((m) => m.role === 'user')?.text || '';

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
    console.warn('Backend /api/chat indisponível, tentando alternativas:', backendError);
  }

  // 2. Tentar chamada direta REST do Gemini caso exista chave no ambiente do cliente
  const clientApiKey =
    process.env.GEMINI_API_KEY ||
    (import.meta as any).env?.VITE_GEMINI_API_KEY ||
    '';

  if (clientApiKey) {
    try {
      return await callClientGeminiRest(history, clientApiKey);
    } catch (clientError) {
      console.warn('Falha na chamada direta da API Gemini, usando base de conhecimento:', clientError);
    }
  }

  // 3. Sistema inteligente autônomo de orientação jurídica (Responde 100% dos temas sem depender de servidor)
  return getOfflineLegalGuidance(lastUserMsg);
};
