import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import { WHATSAPP_NUMBER } from './constants';

interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

const SYSTEM_INSTRUCTION = `
Você é a Assistente Jurídica Virtual da Dra. Emiliana Martins, advogada especialista com sólida atuação em DIREITO DE FAMÍLIA E SUCESSÕES em Belo Horizonte/MG.
Sua missão é realizar um acolhimento humanizado, ético, empático e de alta autoridade técnica para pessoas que estão enfrentando momentos delicados na esfera familiar.

ÁREAS PRINCIPAIS DE ATUAÇÃO DA DRA. EMILIANA MARTINS:
• Divórcio Consensual em Cartório (extrajudicial rápido) e Divórcio Litigioso Judicial
• Partilha de Bens, Imóveis Financiados e Dívidas do Casal
• Pensão Alimentícia (fixação de valor justo, execução de pensão em atraso com pedido de prisão e ação revisional)
• Guarda Compartilhada, Convivência Familiar e combate à Alienação Parental
• Inventário Extrajudicial em Cartório e Judicial, Partilha de Herança e Testamento
• Reconhecimento e Dissolução de União Estável e Contratos de Namoro/Convivência
• Medidas Protetivas e Direito das Famílias

DIRETRIZES DE FORMATAÇÃO (MANDATÓRIO):
1. SEMPRE formate a resposta em Markdown limpo, arejado e elegante:
   - Divida o texto em parágrafos curtos (2 a 3 frases) separados por linhas em branco duplas.
   - Destaque termos jurídicos fundamentais com **negrito** (ex: **divórcio consensual**, **guarda compartilhada**, **execução de alimentos**).
   - Quando listar opções ou requisitos, use listas com marcadores (• ou -) ou numeração (1., 2.).
   - NUNCA envie blocos densos ou corridos de texto sem quebra de linha.
   - REGRA CRÍTICA: NUNCA escreva URLs, links técnicos ou links como 'https://wa.me/...' ou 'https://...' no texto gerado. A interface do chat já possui um botão oficial integrado de WhatsApp para o cliente. Apenas convide cordialmente com palavras naturais.

DIRETRIZES DE ATENDIMENTO E TRIAGEM:
1. Comece acolhendo com empatia, delicadeza e postura profissional protetiva.
2. Esclareça os direitos do usuário de forma didática, sem juridiquês excessivo.
3. Faça 1 ou 2 perguntas estratégicas de triagem para compreender a situação concreta:
   - No divórcio: se há acordo entre o casal, se têm filhos menores e se há bens/patrimônio a partilhar.
   - Na pensão alimentícia: se já existe valor homologado pelo juiz ou acordo verbal, e se há parcelas em atraso.
   - Na guarda: a idade dos filhos e se há consenso sobre a rotina de convivência.
   - No inventário: se os herdeiros estão de acordo e se há testamento ou bens imóveis.
4. NUNCA garanta resultados, prazos judiciais exatos ou valores de pensão fixos.
5. Após esclarecer o tema e fazer perguntas de triagem (ou se o cliente demonstrar urgência/pedir contato), convide-o calorosamente em palavras para agendar uma consulta individualizada com a Dra. Emiliana Martins pelo WhatsApp (sem inserir links ou URLs no texto).
`;

let genAIClient: GoogleGenAI | null = null;

function getGenAI(): GoogleGenAI {
  if (!genAIClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY não configurada no servidor.');
    }
    genAIClient = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return genAIClient;
}

async function startServer() {
  const app = express();
  const isAiStudio = Boolean(process.env.K_SERVICE || process.env.GOOGLE_RUNTIME);
  const rawPort = isAiStudio ? 3000 : (process.env.PORT || 3000);

  app.use(express.json());

  // Health check
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', hasGeminiKey: Boolean(process.env.GEMINI_API_KEY) });
  });

  // Chat API endpoint
  app.post('/api/chat', async (req, res) => {
    try {
      const { history } = req.body as { history: ChatMessage[] };

      if (!Array.isArray(history) || history.length === 0) {
        return res.status(400).json({ error: 'Histórico de mensagens inválido.' });
      }

      // If GEMINI_API_KEY is not set, provide helpful message
      if (!process.env.GEMINI_API_KEY) {
        console.warn('GEMINI_API_KEY não encontrada nas variáveis de ambiente.');
        return res.json({
          text: `Olá! Sou a assistente virtual da Dra. Emiliana Martins. Como o canal direto está com alta demanda, convido você a falar diretamente com a Dra. Emiliana no WhatsApp através do botão abaixo.`,
        });
      }

      const ai = getGenAI();

      // Format messages for Gemini API
      // Gemini expects conversation to start with a user message
      const formattedHistory = history.map((msg) => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }],
      }));

      while (formattedHistory.length > 0 && formattedHistory[0].role === 'model') {
        formattedHistory.shift();
      }

      if (formattedHistory.length === 0) {
        return res.json({
          text: 'Olá! Sou a assistente da Dra. Emiliana Martins. Como posso orientar você hoje?',
        });
      }

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: formattedHistory,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
          topP: 0.95,
        },
      });

      const responseText =
        response.text ||
        `Entendi o seu caso. Para uma análise individualizada e detalhada com a Dra. Emiliana, você pode falar diretamente pelo WhatsApp através do botão abaixo.`;

      return res.json({ text: responseText });
    } catch (err: any) {
      console.error('Erro no processamento da chamada Gemini:', err);
      return res.status(500).json({
        text: `Compreendo sua situação. Para garantir que seu caso seja analisado com toda a atenção e urgência pela Dra. Emiliana Martins, você pode falar diretamente pelo WhatsApp através do botão abaixo.`,
      });
    }
  });

  // Vite middleware in dev, static files in prod
  const isProduction =
    process.env.NODE_ENV === 'production' ||
    process.argv[1]?.endsWith('server.cjs') ||
    process.argv[1]?.endsWith('server.js') ||
    process.argv[1]?.includes('dist') ||
    !process.argv[1]?.endsWith('.ts');

  if (!isProduction) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    // Express 5 catch-all syntax
    app.get('*all', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  if (typeof rawPort === 'string' && isNaN(Number(rawPort))) {
    app.listen(rawPort, () => {
      console.log(`Server listening on socket ${rawPort}`);
    });
  } else {
    const portNumber = Number(rawPort);
    app.listen(portNumber, '0.0.0.0', () => {
      console.log(`Server listening on port ${portNumber}`);
    });
  }
}

startServer();
