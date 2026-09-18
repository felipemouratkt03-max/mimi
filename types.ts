
export interface Service {
  id: string;
  title: string;
  description: string;
  topics?: string[];
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  content: string;
  role: string;
  avatar?: string;
  date?: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
