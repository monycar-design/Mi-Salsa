
export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
}

export interface Ingredient {
  name: string;
  description: string;
  icon: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
