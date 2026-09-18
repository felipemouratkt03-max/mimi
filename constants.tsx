
import { Service, Testimonial } from './types';

export const WHATSAPP_NUMBER = "5531993598552";
export const EMAIL_CONTACT = "contato@emilianamartins.com.br";
export const OFFICE_ADDRESS = "Rua Inglaterra, nº 846 – Glória – Contagem/MG – CEP 32340-130";
export const COMPANY_NAME = "Emiliana Martins Sociedade Individual de Advocacia";
export const CNPJ = "67.978.686/0001-60";


export interface DetailedService {
  area: string;
  services: string;
  urgency: string;
}

export interface PracticeArea {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  detailedServices: DetailedService[];
  emergencyTitle?: string;
  emergencyDesc?: string;
  emergencyCta?: string;
}

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'familia',
    title: 'Direito de Família',
    subtitle: 'Atuação Humanizada e Estratégica',
    description: 'Proteção do patrimônio e das relações familiares com sensibilidade e rigor técnico, priorizando o bem-estar e a segurança jurídica.',
    icon: 'Heart',
    detailedServices: [
      {
        area: "Divórcio e Dissolução",
        services: "Partilha de bens, definição de regime e estratégias para separação consensual ou litigiosa.",
        urgency: "Alta"
      },
      {
        area: "Guarda e Convivência",
        services: "Defesa do melhor interesse da criança, regulamentação de visitas e guarda compartilhada.",
        urgency: "Altíssima"
      },
      {
        area: "Pensão Alimentícia",
        services: "Fixação, revisão (majorar ou reduzir) e execução de valores para sustento de dependentes.",
        urgency: "Altíssima"
      },
      {
        area: "Alienação Parental",
        services: "Medidas urgentes para coibir atos que prejudiquem o vínculo afetivo entre pais e filhos.",
        urgency: "Altíssima"
      }
    ],
    emergencyTitle: "Conflito Familiar Urgente?",
    emergencyDesc: "Questões de guarda ou alienação parental exigem ação imediata. Fale conosco.",
    emergencyCta: "Consultoria Urgente"
  },
  {
    id: 'sucessoes',
    title: 'Direito de Sucessões',
    subtitle: 'Gestão Patrimonial e Sucessória',
    description: 'Assessoria completa para a preservação do patrimônio familiar e garantia da vontade sucessória com foco em harmonia.',
    icon: 'Scroll',
    detailedServices: [
      {
        area: "Inventário e Partilha",
        services: "Condução ágil de processos judiciais e extrajudiciais para transmissão de herança.",
        urgency: "Alta"
      },
      {
        area: "Planejamento Sucessório",
        services: "Organização preventiva do patrimônio para evitar conflitos futuros e reduzir custos.",
        urgency: "Média"
      },
      {
        area: "Testamentos e Doações",
        services: "Formalização da vontade do doador com total segurança jurídica e validade.",
        urgency: "Média"
      },
      {
        area: "Holding Familiar",
        services: "Estruturação societária para proteção de ativos e sucessão empresarial eficiente.",
        urgency: "Média"
      }
    ]
  },
  {
    id: 'criminal',
    title: 'Direito Criminal',
    subtitle: 'Defesa Técnica Especializada',
    description: 'Advocacia criminal de alta complexidade, com atuação estratégica em medidas cautelares de urgência e sigilo absoluto.',
    icon: 'Shield',
    detailedServices: [
      {
        area: "Prisão em Flagrante",
        services: "Atendimento imediato em delegacias, acompanhamento de depoimentos e medidas para relaxamento de prisão.",
        urgency: "Altíssima (24h)"
      },
      {
        area: "Audiência de Custódia",
        services: "Defesa técnica estratégica para garantir a liberdade provisória e o respeito aos direitos fundamentais.",
        urgency: "Altíssima (24h)"
      },
      {
        area: "Defesa Processual",
        services: "Atuação em todas as fases do processo criminal, recursos em instâncias superiores e Habeas Corpus.",
        urgency: "Alta"
      },
      {
        area: "Ações Específicas",
        services: "Lei Maria da Penha, Crimes de Trânsito, Crimes contra o Patrimônio e Crimes contra a Vida.",
        urgency: "Alta"
      }
    ],
    emergencyTitle: "Emergência Criminal?",
    emergencyDesc: "Não tome nenhuma decisão sem orientação jurídica. Plantão 24h disponível.",
    emergencyCta: "Atendimento 24h"
  },
  {
    id: 'trabalhista',
    title: 'Direito Trabalhista',
    subtitle: 'Justiça nas Relações de Trabalho',
    description: 'Defesa técnica dos direitos do trabalhador com foco em resultados e conformidade com a legislação vigente.',
    icon: 'Briefcase',
    detailedServices: [
      {
        area: "Verbas Rescisórias",
        services: "Cálculo e cobrança de saldo de salário, aviso prévio, férias, 13º e multa do FGTS.",
        urgency: "Alta"
      },
      {
        area: "Rescisão Indireta",
        services: "Ação para rompimento do contrato por culpa do empregador (falta de pagamento, assédio).",
        urgency: "Alta"
      },
      {
        area: "Acidentes e Doenças",
        services: "Indenizações por danos morais, materiais e estéticos decorrentes do trabalho.",
        urgency: "Altíssima"
      },
      {
        area: "Horas Extras",
        services: "Recuperação de valores devidos por sobrejornada, insalubridade ou periculosidade.",
        urgency: "Alta"
      }
    ]
  },
  {
    id: 'civil',
    title: 'Civil Estratégico',
    subtitle: 'Segurança Jurídica e Contratos',
    description: 'Soluções jurídicas para relações civis complexas, gestão de riscos e resolução estratégica de conflitos.',
    icon: 'Scale',
    detailedServices: [
      {
        area: "Contratos e Negócios",
        services: "Elaboração, análise e revisão de instrumentos jurídicos para segurança de transações.",
        urgency: "Média"
      },
      {
        area: "Responsabilidade Civil",
        services: "Ações de indenização por danos morais e materiais em diversas esferas.",
        urgency: "Alta"
      },
      {
        area: "Direito do Consumidor",
        services: "Defesa contra práticas abusivas, cobranças indevidas e defeitos em produtos/serviços.",
        urgency: "Alta"
      },
      {
        area: "Cobranças e Execuções",
        services: "Recuperação de créditos e ativos financeiros de forma estratégica e célere.",
        urgency: "Alta"
      }
    ]
  }
];


export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Análise Individualizada',
    description: 'Realizamos um mergulho profundo nos detalhes do seu caso para entender cada nuance jurídica e emocional.'
  },
  {
    number: '02',
    title: 'Desenho Estratégico',
    description: 'Traçamos o melhor caminho, seja ele consensual ou litigioso, priorizando a agilidade e o seu bem-estar.'
  },
  {
    number: '03',
    title: 'Contratação Ética',
    description: 'Transparência total em honorários e procedimentos. Você assina com a segurança de um escritório pautado pela ética.'
  },
  {
    number: '04',
    title: 'Acompanhamento Real',
    description: 'Informação em tempo real sobre cada movimento do processo. Você nunca fica sem respostas.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'jader',
    name: 'Jader Moura',
    role: 'Cliente Local',
    content: 'Excelente atendimento e muito prestativas. Cuidaram do meu processo com muita rapidez e com extrema competência. Recomendo a todos e podem confiar.',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    date: 'há 2 meses'
  },
  {
    id: 'kathleen',
    name: 'Kathleen Danielle',
    role: 'Cliente Local',
    content: 'Super indico, ótimo atendimento, excelente profissionais, as melhores advogadas ❤️ resolveram o meu caso super rápido.',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    date: 'há 1 mês'
  },
  {
    id: 'juliano',
    name: 'Juliano Soares',
    role: 'Cliente Local',
    content: 'Profissionais de extrema competência e muito atenciosas com o cliente. O processo foi conduzido de forma impecável.',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    date: 'há 3 semanas'
  },
  {
    id: 'fernanda',
    name: 'Fernanda Lima',
    role: 'Cliente Local',
    content: 'Excelente suporte no meu divórcio. Me senti acolhida e segura durante todo o processo. Nota 10!',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
    date: 'há 4 meses'
  },
  {
    id: 'ricardo',
    name: 'Ricardo Santos',
    role: 'Cliente Local',
    content: 'O planejamento sucessório feito pela equipe evitou muitos problemas futuros para minha família. Muito grato.',
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    date: 'há 5 meses'
  },
  {
    id: 'camila',
    name: 'Camila Oliveira',
    role: 'Cliente Local',
    content: 'Atendimento humanizado de verdade. Elas realmente mergulham no nosso caso e entendem nossa dor.',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
    date: 'há 2 semanas'
  },
  {
    id: 'marcos',
    name: 'Marcos Vinícius',
    role: 'Cliente Local',
    content: 'Eficiência é a palavra. Tudo resolvido de forma célere e ética. Melhor escritório da região.',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
    date: 'há 1 ano'
  }
];

export const FAQS = [
  {
    question: "Como conseguir me separar?",
    answer: "O divórcio pode ser feito de forma judicial ou extrajudicial (em cartório), dependendo da existência de filhos menores ou consenso entre as partes. Nossa equipe orienta o melhor caminho para o seu caso."
  },
  {
    question: "O que é discutido no Divórcio ou na Dissolução de União Estável?",
    answer: "São discutidas a partilha de bens, a definição de pensão alimentícia entre cônjuges (se aplicável), a guarda dos filhos e o regime de convivência."
  },
  {
    question: "A pensão para os filhos acaba aos 18 anos?",
    answer: "Não automaticamente. Se o filho estiver estudando (faculdade ou curso técnico), a obrigação pode se estender até os 24 anos ou conclusão dos estudos."
  },
  {
    question: "O ex-cônjuge receberá pensão vitalícia?",
    answer: "A pensão entre ex-cônjuges é excepcional e geralmente temporária, visando a reinserção do parceiro dependente no mercado de trabalho."
  }
];
