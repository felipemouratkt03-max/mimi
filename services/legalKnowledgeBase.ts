import { WHATSAPP_NUMBER } from '../constants';

export interface LegalTopicResponse {
  keywords: string[];
  title: string;
  response: string;
}

const TOPICS: LegalTopicResponse[] = [
  // 1. DIVÓRCIO E SEPARAÇÃO
  {
    keywords: ['divorcio', 'divórcio', 'separar', 'separacao', 'separação', 'desquite', 'casamento', 'fim do casamento'],
    title: 'Divórcio e Dissolução',
    response: `Compreendo que a decisão pelo divórcio é um momento muito importante e delicado. Estamos prontos para acolher você com total sigilo, empatia e segurança jurídica.

No Brasil, o divórcio pode ocorrer por duas vias principais:
1. **Divórcio em Cartório (Extrajudicial):** É a forma mais rápida (muitas vezes concluída em poucos dias). Exige consenso mútuo entre o casal e que não haja filhos menores ou incapazes (salvo regras específicas com questões de guarda já resolvidas).
2. **Divórcio Judicial:** Necessário quando não há consenso sobre os termos (litigioso) ou quando existem filhos menores de idade (para resguardar guarda e alimentos).

Para que possamos orientar exatamente o melhor caminho para você:
• **Existe acordo** entre você e seu(sua) parceiro(a) sobre a decisão?
• **Vocês possuem filhos menores** ou dependentes?
• **Há patrimônio ou bens** adquiridos durante a união a serem partilhados?

Se preferir uma análise aprofundada dos seus direitos com a **Dra. Emiliana Martins**, podemos continuar com atendimento reservado pelo WhatsApp: https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá Dra. Emiliana, gostaria de orientações sobre o processo de divórcio.')}`
  },

  // 2. PENSÃO ALIMENTÍCIA
  {
    keywords: ['pensao', 'pensão', 'alimentos', 'alimenticia', 'alimentícia', 'pagar pensao', 'receber pensao', 'atraso pensao', 'atrasada', 'execucao', 'execução', 'revisao', 'revisão', 'exoneracao', 'exoneração'],
    title: 'Pensão Alimentícia',
    response: `A pensão alimentícia é um direito fundamental destinado a garantir moradia, alimentação, educação, saúde e lazer.

Aspectos importantes sobre o tema:
• **Como é calculada:** O juiz analisa o binômio **Necessidade** (quem recebe) x **Possibilidade** (quem paga), sempre respeitando a proporcionalidade e o padrão de vida. Não existe percentual fixo em lei (os 30% são apenas uma referência jurisprudencial comum).
• **Pensão em atraso:** O inadimplemento injustificado pode gerar cobrança judicial com risco de **bloqueio de contas, penhora de bens e até prisão civil** (regime fechado de 1 a 3 meses para débitos recentes).
• **Revisão de pensão:** Se houve alteração na renda de quem paga ou nas despesas de quem recebe, é possível ingressar com Ação Revisional para aumentar ou reduzir o valor.

Para entender seu caso:
• A pensão já foi fixada formalmente por um juiz ou é um acordo verbal?
• Há parcelas em atraso ou você deseja solicitar a fixação/revisão do valor?

A Dra. Emiliana Martins atua com agilidade para assegurar que seus direitos sejam preservados. Podemos conversar no WhatsApp: https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá Dra. Emiliana, preciso de orientação sobre pensão alimentícia.')}`
  },

  // 3. GUARDA E CONVIVÊNCIA COM OS FILHOS
  {
    keywords: ['guarda', 'visita', 'visitas', 'convivencia', 'convivência', 'compartilhada', 'unilateral', 'alienacao', 'alienação', 'filho', 'filha', 'filhos', 'menor'],
    title: 'Guarda e Regime de Convivência',
    response: `O bem-estar e o desenvolvimento emocional dos filhos são prioridade absoluta no Direito de Família brasileiro.

Pontos fundamentais:
• **Guarda Compartilhada:** É a regra geral da legislação brasileira, onde ambos os pais têm responsabilidade conjunta sobre as decisões da vida dos filhos (escola, saúde, religião), mesmo que a criança resida prioritariamente com um deles.
• **Guarda Unilateral:** Aplicada apenas em situações excepcionais, quando um dos genitores não tem condições ou manifesta não querer a guarda.
• **Regime de Convivência (Visitas):** Garante à criança o direito de manter laços afetivos com ambos os genitores, com cronograma claro para finais de semana, férias escolares e datas comemorativas.
• **Alienação Parental:** Práticas que interferem na formação psicológica da criança contra um dos genitores são rigorosamente coibidas pela Justiça.

Você gostaria de regulamentar a guarda, rever o plano de convivência ou está vivenciando alguma dificuldade de contato com seu(sua) filho(a)?

Fale diretamente com a Dra. Emiliana para uma orientação sensível e técnica: https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá Dra. Emiliana, gostaria de orientações sobre guarda e convivência com meus filhos.')}`
  },

  // 4. INVENTÁRIO, HERANÇA E TESTAMENTO
  {
    keywords: ['inventario', 'inventário', 'heranca', 'herança', 'herdeiro', 'herdeiros', 'falecimento', 'falecido', 'falecida', 'morte', 'bens do falecido', 'testamento', 'partilha de heranca', 'sucessao', 'sucessões', 'sucessao'],
    title: 'Inventário e Sucessões',
    response: `Meus sentimentos caso esteja passando pela perda recente de um ente querido. O inventário é o procedimento obrigatório para transferir a propriedade dos bens aos herdeiros legítimos.

Pontos essenciais que você precisa saber:
• **Prazo Legal de 60 dias:** A lei determina a abertura do inventário em até 60 dias após o falecimento. O atraso pode acarretar multas tributárias sobre o ITCD (imposto sobre herança).
• **Inventário em Cartório (Extrajudicial):** Concluído rapidamente (em semanas) quando todos os herdeiros são maiores, capazes e estão de acordo com a partilha, sem testamento pendente.
• **Inventário Judicial:** Necessário quando há menores de idade, incapacidade civil, testamento ou divergência entre os herdeiros.
• **Herdeiros Necessários e Meação:** Nem todo o patrimônio é herança; o cônjuge ou companheiro pode ter direito à meação conforme o regime de bens, antes da divisão entre os filhos/herdeiros.

Você saberia me informar se os herdeiros estão de acordo e que tipos de bens compõem o espólio (imóveis, contas, veículos)?

Podemos organizar todos os documentos necessários para você: https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá Dra. Emiliana, gostaria de orientações sobre a abertura de inventário.')}`
  },

  // 5. UNIÃO ESTÁVEL E CONTRATO DE NAMORO
  {
    keywords: ['uniao estavel', 'união estável', 'morar junto', 'companheiro', 'companheira', 'reconhecimento', 'dissolucao', 'dissolução', 'namoro', 'contrato de namoro'],
    title: 'União Estável',
    response: `A união estável é configurada pela convivência pública, contínua, duradoura e estabelecida com o objetivo de constituir família.

Principais direitos:
• **Regime Supletivo:** Na falta de documento formalizado escolhendo outro regime, aplica-se automaticamente a **Comunhão Parcial de Bens** — ou seja, todo patrimônio adquirido onerosamente durante a união pertence a ambos em partes iguais (50% para cada).
• **Reconhecimento e Dissolução:** Podem ser feitos em cartório (se consensual e sem filhos menores) ou judicialmente, com partilha de bens e definição de pensão/guarda se houver.
• **Contrato de Namoro x União Estável:** Um contrato bem redigido pode blindar patrimônios e afastar a presunção de união estável não desejada.

Você deseja formalizar a união estável, elaborar um contrato preventivo ou realizar a dissolução com partilha de bens?

Converse com a Dra. Emiliana Martins: https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá Dra. Emiliana, preciso de assessoria sobre união estável.')}`
  },

  // 6. PARTILHA DE BENS E REGIMES
  {
    keywords: ['partilha', 'bens', 'comunhao parcial', 'comunhão parcial', 'separacao total', 'separação total', 'imovel financiado', 'imóvel', 'carro', 'casa financiada', 'patrimonio', 'patrimônio', 'ocultacao', 'ocultação'],
    title: 'Partilha de Bens',
    response: `A divisão de bens depende diretamente do **regime matrimonial** adotado no casamento ou na união estável:

• **Comunhão Parcial de Bens (mais comum):** Comunicam-se os bens adquiridos onerosamente após o início da relação, independentemente de estarem no nome de um só ou de ambos. Bens anteriores ou heranças/doações individuais geralmente não entram na partilha.
• **Imóvel ou Carro Financiado:** Não se divide o valor total do bem, mas sim o montante das parcelas amortizadas durante a relação + a valorização correspondente.
• **Ocultação de Patrimônio:** Se houver suspeita de que o outro cônjuge está escondendo dinheiro ou transferindo bens para terceiros, é possível solicitar medidas cautelares de busca e bloqueio via Bacenjud/Sisbajud.

Qual é o regime de bens do seu casamento ou união e quais são os bens prioritários a serem divididos?

Para um diagnóstico seguro do seu patrimônio, fale conosco no WhatsApp: https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá Dra. Emiliana, gostaria de orientações sobre partilha de bens.')}`
  },

  // 7. CRIMINAL / URGÊNCIAS / FLAGRANTE
  {
    keywords: ['criminal', 'crime', 'preso', 'prisao', 'prisão', 'flagrante', 'delegacia', 'delegado', 'audiencia de custodia', 'audiência de custódia', 'inquerito', 'inquérito', 'boletim de ocorrencia', 'boletim de ocorrência', 'habeas corpus'],
    title: 'Defesa Criminal e Urgências',
    response: `Casos criminais exigem intervenção técnica imediata para proteção da liberdade e das garantias constitucionais.

Atuações urgentes do escritório:
• **Acompanhamento em Delegacia:** Garantia de que nenhum depoimento seja prestado sob coação e orientação estratégica desde o primeiro minuto.
• **Audiência de Custódia (em até 24h):** Pedido de liberdade provisória, relaxamento de prisão ilegal ou aplicação de medidas cautelares diversas da prisão.
• **Revogação de Prisão Preventiva & Habeas Corpus:** Atuação perante Tribunais de Justiça e Tribunais Superiores (STJ e STF).

⚠️ **Se você ou um familiar está em situação de flagrante ou iminência de prisão, entre em contato imediatamente no WhatsApp de urgência:**
👉 https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('URGENTE: Preciso de atendimento da área criminal / acompanhamento.')}`
  },

  // 8. TRABALHISTA E CÍVEL
  {
    keywords: ['trabalhista', 'trabalho', 'demissao', 'demissão', 'rescisao', 'rescisão', 'carteira assinada', 'justa causa', 'hora extra', 'acidente de trabalho', 'indenizacao', 'indenização', 'dano moral', 'contrato', 'civel', 'cível'],
    title: 'Direito Trabalhista e Cível',
    response: `Nossa equipe oferece consultoria e atuação contenciosa em direitos trabalhistas e relações contratuais/civis:

• **Direito do Trabalho:** Verificação de verbas rescisórias devidas, horas extras não pagas, equiparação salarial, assédio moral no ambiente de trabalho e pedidos de rescisão indireta (quando a empresa comete falta grave).
• **Direito Cível & Contratos:** Elaboração e análise de contratos, cobranças, execução de títulos e ações de indenização por danos materiais e morais.

Poderia me contar resumidamente o que aconteceu para que possamos avaliar a viabilidade da sua demanda?

Fale com a Dra. Emiliana pelo WhatsApp: https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá Dra. Emiliana, gostaria de uma orientação trabalhista/cível.')}`
  },

  // 9. VALORES / HONORÁRIOS / CONSULTA
  {
    keywords: ['quanto custa', 'valor', 'preco', 'preço', 'honorarios', 'honorários', 'tabela', 'orcamento', 'orçamento', 'consulta', 'agendar'],
    title: 'Agendamento e Honorários',
    response: `Para garantir excelência e segurança aos nossos clientes, os honorários advocatícios são orçados com transparência e seguem estritamente as diretrizes éticas da **Ordem dos Advogados do Brasil (OAB/MG)**.

Como funciona nosso atendimento:
1. **Consulta Individualizada:** A Dra. Emiliana Martins realiza uma análise minuciosa de todos os fatos e documentos apresentados, traçando a estratégia jurídica mais econômica, ágil e vantajosa.
2. **Modalidades:** Atendimento presencial no escritório em **Belo Horizonte/MG** ou **online por videoconferência** com clientes de todo o Brasil e brasileiros no exterior.
3. **Facilidade:** Formas de pagamento acessíveis e compatíveis com a complexidade do caso.

Para verificar os horários disponíveis e valores da consulta, clique no link abaixo e fale diretamente com a equipe:
👉 https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá Dra. Emiliana, gostaria de agendar uma consulta jurídica.')}`
  },

  // 10. LOCALIZAÇÃO E CONTATO
  {
    keywords: ['onde fica', 'endereco', 'endereço', 'localizacao', 'localização', 'cidade', 'belo horizonte', 'bh', 'presencial', 'online', 'telefone', 'whatsapp'],
    title: 'Localização e Atendimento',
    response: `O escritório **Emiliana Martins Advocacia & Consultoria** está localizado em ponto nobre e de fácil acesso em **Belo Horizonte / MG**:

📍 **Endereço:** Rua dos Guajajaras, 40 - Sala 1204, Centro, Belo Horizonte - MG
📞 **Telefone / WhatsApp:** (31) 99359-8552
⏱️ **Horário:** Segunda a Sexta, das 09h às 18h

🌐 **Atendimento Nacional e Internacional:**
Além do atendimento presencial, realizamos consultas e representação processual 100% digital para clientes de todo o território brasileiro e para cidadãos residentes no exterior.

Clique aqui para abrir a conversa no WhatsApp: https://wa.me/${WHATSAPP_NUMBER}`
  }
];

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\w\s]/gi, ' ');
}

export function getOfflineLegalGuidance(userText: string): string {
  const normText = normalize(userText);

  // Busca tópicos correspondentes
  for (const topic of TOPICS) {
    for (const kw of topic.keywords) {
      const normKw = normalize(kw);
      if (normText.includes(normKw)) {
        return topic.response;
      }
    }
  }

  // Resposta padrão caso nenhuma palavra-chave seja detectada
  return `Olá! Sou a assistente virtual da **Dra. Emiliana Martins**, especialista em Direito de Família, Sucessões, Cível e Criminal em Belo Horizonte.

Estou aqui para ouvir você com total discrição e acolhimento. Trabalhamos com:
• **Divórcios** (consensual em cartório ou judicial com partilha de bens)
• **Pensão Alimentícia** (fixação, cobrança, execução com risco de prisão e revisional)
• **Guarda e Convivência** com filhos menores
• **Inventários e Heranças** (prazos, partilha e testamentos)
• **União Estável** e contratos protetivos
• **Defesa Criminal** e demandas cíveis/trabalhistas

Poderia me contar um pouco mais sobre o que está acontecendo na sua situação? 

Se preferir um atendimento reservado e imediato diretamente com a Dra. Emiliana, convido você a clicar no link do WhatsApp:
👉 https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá Dra. Emiliana, gostaria de receber uma orientação jurídica.')}`;
}
