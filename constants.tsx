
import React from 'react';
import { Review, Ingredient, FaqItem } from './types.ts';

export const HERO_WEBP_URL = "https://yextmecquggidmapmolk.supabase.co/storage/v1/object/sign/misalsaweb/ezgif.com-video-to-webp-converter.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kMzU4Nzg3ZS0yYjdkLTQ5Y2UtYWFiYi04NTA1YTIxN2NmOTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtaXNhbHNhd2ViL2V6Z2lmLmNvbS12aWRlby10by13ZWJwLWNvbnZlcnRlci53ZWJwIiwiaWF0IjoxNzY4MDI0NjU1LCJleHAiOjE4NjI2MzI2NTV9.aJVTVWc-XlDPOnhDl4Tg4fIr9vGm1tf6G9aZIXH009Y";

export const INGREDIENTS: Ingredient[] = [
  { name: 'Chiles Seleccionados', description: 'Una mezcla secreta de chiles secos ahumados artesanalmente.', icon: '🌶️' },
  { name: 'Aceite de Oliva Extra Virgen', description: 'Base premium que aporta suavidad y realza el sabor.', icon: '🫒' },
  { name: 'Ajo Rostizado', description: 'Toque umami profundo obtenido por horas de cocción lenta.', icon: '🧄' },
  { name: 'Especias de la Casa', description: 'El equilibrio perfecto entre comino, orégano y sal de mar.', icon: '🌿' },
];

export const REVIEWS: Review[] = [
  { id: 1, name: "Carlos Mendoza", rating: 5, text: "La mejor salsa botanera que he probado. El picor es justo y el sabor ahumado es increíble.", date: "hace 2 días" },
  { id: 2, name: "Lucía García", rating: 5, text: "Perfecta para mis reuniones. El envase es muy elegante, se nota la calidad premium.", date: "hace 1 semana" },
  { id: 3, name: "Roberto Sánchez", rating: 4, text: "Muy buena consistencia. Me encanta con mariscos, resalta mucho el sabor.", date: "hace 2 semanas" },
];

export const FAQS: FaqItem[] = [
  { question: "¿Cuál es el nivel de picante?", answer: "Nuestra Salsa Botanera tiene un nivel medio-alto (7/10), diseñado para los amantes del picante que no quieren sacrificar el sabor." },
  { question: "¿Cuánto tiempo dura abierta?", answer: "Gracias a su base de aceite premium, se mantiene perfecta hasta por 3 meses en refrigeración una vez abierta." },
  { question: "¿Contiene conservadores artificiales?", answer: "No. Utilizamos únicamente métodos naturales de conservación y aceites de la más alta calidad." },
  { question: "¿Hacen envíos a todo el país?", answer: "Sí, enviamos a toda la república con empaque especial para asegurar que llegue intacta." },
];
