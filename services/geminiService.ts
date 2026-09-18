import { ChatMessage } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

export const getLegalOrientation = async (history: ChatMessage[]): Promise<string> => {
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ history }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      if (errorData?.text) {
        return errorData.text;
      }
      throw new Error(`Erro na resposta do servidor: status ${response.status}`);
    }

    const data = await response.json();
    return (
      data.text ||
      `Entendi a sua dúvida. Para analisarmos seu caso com a Dra. Emiliana, entre em contato pelo WhatsApp: https://wa.me/${WHATSAPP_NUMBER}`
    );
  } catch (error) {
    console.error('Erro na chamada da assistente virtual:', error);
    return `Olá! Tive uma oscilação técnica momentânea na conexão. Por favor, envie sua mensagem novamente ou entre em contato direto com a Dra. Emiliana no WhatsApp para atendimento imediato: https://wa.me/${WHATSAPP_NUMBER}`;
  }
};
