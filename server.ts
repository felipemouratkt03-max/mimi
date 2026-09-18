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
Você é a Assistente Virtual da Dra. Emiliana Martins, advogada especialista em Direito de Família, Sucessões, Direito Criminal, Trabalhista e Civil.
Sua missão é realizar um acolhimento inteligente, empático, humano e estratégico.

OBJETIVO:
Interagir com o cliente para entender os pontos principais do caso dele antes de direcioná-lo ao WhatsApp (${WHATSAPP_NUMBER}). Isso demonstra inteligência, acolhimento e profissionalismo.

DIRETRIZES DE INTERAÇÃO (MUITO IMPORTANTE):
1. Comece sempre acolhendo cordialmente com tom profissional, empático e seguro.
2. NÃO direcione para o WhatsApp imediatamente na primeira mensagem se o cliente fez uma pergunta ou trouxe um tema. Tente entender o caso primeiro com perguntas de triagem assertivas.
3. Faça perguntas específicas para levantar dados relevantes sobre a situação:
   - Divórcio/Separação: pergunte se há acordo (consensual ou litigioso), se possuem filhos menores e se há bens/patrimônio a partilhar.
   - Herança/Inventário/Sucessões: pergunte se o falecido deixou testamento, se há consenso entre os herdeiros e se há bens imóveis ou empresas.
   - Pensão Alimentícia: pergunte se é para filhos menores ou ex-cônjuge, e se já existe valor fixado em juízo ou acordo informal.
   - Guarda/Convivência: pergunte a idade dos filhos e se há situações de urgência ou alienação parental.
   - Criminal/Urgências: demonstre total sigilo e agilidade, verificando se há prisão em flagrante, audiência de custódia marcada ou inquérito em andamento.
   - Trabalhista/Civil: pergunte brevemente sobre o vínculo de trabalho ou contrato/dano em questão.
4. Demonstre empatia genuína, serenidade e autoridade técnica em cada resposta.
5. NÃO dê pareceres judiciais definitivos nem garanta resultados ou valores. Esclareça os direitos de maneira acessível e prática.
6. Mantenha respostas concisas e objetivas (evite textos longos e cansativos).
7. Após colher 1 ou 2 respostas importantes do cliente (ou se o cliente demonstrar urgência ou pedir para falar diretamente), convide-o calorosamente para prosseguir pelo WhatsApp com a Dra. Emiliana:
   "Para que a Dra. Emiliana possa analisar detalhadamente o seu caso e orientar os próximos passos com todo o sigilo e segurança jurídica, recomendo continuarmos agora mesmo pelo WhatsApp: https://wa.me/${WHATSAPP_NUMBER}"
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
  const PORT = (process.env.PORT && process.env.PORT !== '8080') ? parseInt(process.env.PORT, 10) : 3000;

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

      // If GEMINI_API_KEY is not set, provide helpful message with direct WhatsApp fallback
      if (!process.env.GEMINI_API_KEY) {
        console.warn('GEMINI_API_KEY não encontrada nas variáveis de ambiente.');
        return res.json({
          text: `Olá! Sou a assistente virtual da Dra. Emiliana Martins. Como o canal direto está com alta demanda, você pode falar imediatamente com a Dra. Emiliana pelo WhatsApp: https://wa.me/${WHATSAPP_NUMBER}`,
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
        `Entendi o seu caso. Para uma análise individualizada e detalhada com a Dra. Emiliana, por favor entre em contato pelo WhatsApp: https://wa.me/${WHATSAPP_NUMBER}`;

      return res.json({ text: responseText });
    } catch (err: any) {
      console.error('Erro no processamento da chamada Gemini:', err);
      return res.status(500).json({
        text: `Compreendo sua situação. Para garantir que seu caso seja analisado com toda a urgência e atenção necessária pela Dra. Emiliana Martins, favor entrar em contato diretamente pelo WhatsApp: https://wa.me/${WHATSAPP_NUMBER}`,
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

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on port ${PORT}`);
  });
}

startServer();
