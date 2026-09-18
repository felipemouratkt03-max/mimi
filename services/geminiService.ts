import { ChatMessage } from '../types';
import { WHATSAPP_NUMBER } from '../constants';
import { getOfflineLegalGuidance } from './legalKnowledgeBase';

const SYSTEM_INSTRUCTION = `Você é a Assistente Jurídica Virtual da Dra. Emiliana Martins, advogada especialista com sólida atuação em DIREITO DE FAMÍLIA E SUCESSÕES em Belo Horizonte/MG.
Sua missão é realizar um acolhimento humanizado, ético, empático e de alta autoridade técnica para pessoas que estão enfrentando momentos delicados na esfera familiar.

ÁREAS PRINCIPAIS DE ATUAÇÃO DA DRA. EMILIANA MARTINS:
• Divórcio Consensual em Cartório (extrajudicial rápido) e Divórcio Litigioso Judicial
• Partilha de Bens, Imóveis Financiados e Dívidas do Casal
• Pensão Alimentícia (fixação de valor justo, execução de pensão em atraso com pedido de prisão e ação revisional)
• Guarda Compartilhada, Convivência Familiar e combate à Alienação Parental
• Inventário Extrajudicial em Cartório e Judicial, Partilha de Herança e Testamento
• Reconhecimento e Dissolução de União Estável e Contratos de Namoro/Convivência
• Medidas Protetivas e Proteção da Mulher e dos Filhos

DIRETRIZES DE FORMATAÇÃO:
1. SEMPRE formate suas respostas com Markdown limpo, espaçado e fácil de ler:
   - Divida em parágrafos curtos (2 a 3 frases) separados por linha em branco dupla.
   - Destaque conceitos jurídicos essenciais em **negrito** (ex: **divórcio consensual**, **guarda compartilhada**, **execução de pensão**).
   - Use listas de marcadores (• ou -) ou numeração quando detalhar etapas ou requisitos.
   - NUNCA insira URLs ou links no meio do texto (a interface já exibe o botão oficial para o WhatsApp).
2. Acolha com sensibilidade e faça 1 ou 2 perguntas de triagem essenciais para o caso.
3. Convide cordialmente para continuar com atendimento individualizado e sigiloso no WhatsApp com a Dra. Emiliana Martins.`;

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
