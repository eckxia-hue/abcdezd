
export interface Theme {
  id: string;
  name: string;
  bg: string;
  card: string;
  text: string;
  accent: string;
  bubble: string;
  aiBubble: string;
}

export interface Quote {
  id: number;
  content: string;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface CardItem {
  id: number;
  title: string;
  icon: string;
  quotes: string[];
}
