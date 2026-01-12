
import { Review, Ingredient, FaqItem, Product } from './types.ts';

export const HERO_WEBP_URL = "https://yextmecquggidmapmolk.supabase.co/storage/v1/object/sign/misalsaweb/ezgif.com-video-to-webp-converter.webp?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kMzU4Nzg3ZS0yYjdkLTQ5Y2UtYWFiYi04NTA1YTIxN2NmOTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJtaXNhbHNhd2ViL2V6Z2lmLmNvbS12aWRlby10by13ZWJwLWNvbnZlcnRlci53ZWJwIiwiaWF0IjoxNzY4MDI0NjU1LCJleHAiOjE4NjI2MzI2NTV9.aJVTVWc-XlDPOnhDl4Tg4fIr9vGm1tf6G9aZIXH009Y";

export const PRODUCTS: Product[] = [
  {
    id: 'cacahuate',
    name: 'Mi Salsa de Cacahuate',
    weight: '90grs',
    image: 'https://i.postimg.cc/zfPgzZbm/Salsa-de-Cacahuate-OK.png',
    description: 'Una crema sedosa con trozos de cacahuate tostado y un picor balanceado.',
    longDescription: 'Hemos seleccionado los cacahuates más doraditos y los hemos transformado en una danza de sabor donde la textura cremosa se encuentra con ese toque ahumado y ligeramente picante que te hace querer repetir una y otra vez. Es esa salsa "apapachadora" que transforma un plato sencillo en una obra maestra gourmet.',
    tag: 'La Favorita'
  },
  {
    id: 'botanera',
    name: 'Botanera',
    weight: '90grs',
    image: 'https://i.postimg.cc/zfPgzZL4/Salsa-Botanera-OK.png',
    description: 'Nuestra receta insignia, perfecta para snacks, mariscos y carnes blancas.',
    longDescription: '"Nuestra Salsa Botanera no es para los que buscan algo tímido; es para los que quieren que cada bocado sea una fiesta. Esta salsa tiene el equilibrio perfecto. Es la salsa que nació para brillar sobre unos cueritos bien frescos, para bañar esas papas crujientes o para que tus duritos (chicharrones) se conviertan en una experiencia de otro planeta."',
    tag: 'Clásica'
  },
  {
    id: 'tamarindo',
    name: 'Macha de Tamarindo',
    weight: '250grs',
    image: 'https://i.postimg.cc/ZqqNzKqD/Macha-de-Tamarindo-ok.png',
    description: 'Fusión agridulce con chiles secos que explota en el paladar.',
    longDescription: '¡Un choque de mundos en tu paladar! El ácido rebelde del tamarindo natural se funde con el fuego crujiente de nuestra mezcla de chiles en aceite. Es exótica, espesa y perfectamente equilibrada. Ideal para mariscos, costillitas o quesos gourmet. En sus 250 grs, esta salsa es la definición pura de seducción culinaria. ¡Atrévete al contraste!',
    tag: 'Exótica'
  },
  {
    id: 'serrano',
    name: 'Chicharrón de Serrano',
    weight: '250grs',
    image: 'https://i.postimg.cc/CKK8pLKQ/Chicharrones-Serranos.png',
    description: 'Textura crujiente de chile serrano en aceite premium. Un umami incomparable.',
    longDescription: '¡Prepárate para la adicción total! Cortamos y doramos chiles serranos frescos hasta convertirlos en hojuelas crujientes bañadas en un aceite aromático excepcional. Es una explosión de textura rústica y picor vibrante que transforma cualquier bocado en un festín. En su frasco de 250 grs, es el alma de tus cortes, tacos y huevos estrellados. ¡Crujientemente irresistible!',
    tag: 'Crujiente'
  },
  {
    id: 'habanero',
    name: 'Chicharrón de Habanero',
    weight: '250grs',
    image: 'https://i.postimg.cc/mrr9W2rn/Chicharrones-Habaneros.png',
    description: 'Para los valientes. El aroma del habanero con una textura de chicharrón artesanal.',
    longDescription: '¿Nivel leyenda? Solo para valientes. Doramos finas láminas de habanero seleccionado hasta lograr un chicharrón dorado, explosivo y con ese aroma frutal único del rey de los chiles. Textura crujiente en aceite gourmet que eleva tus hamburguesas o mariscos a otra dimensión. En sus 250 grs, este frasco guarda el equilibrio perfecto entre dolor y placer.',
    tag: 'Intensa'
  },
  {
    id: 'alacranes',
    name: 'Alacranes Molidos',
    weight: '250grs',
    image: 'https://i.postimg.cc/mrr9W2rV/Alacranabis.png',
    description: 'Una experiencia mística y atrevida. Polvo de alacrán con especias secretas.',
    longDescription: '¡Cuidado, que esta salsa pica y atrapa! Una receta secreta de frutos de la tierra molidos a la perfección para liberar un picor intenso, fresco y audaz. Su textura rústica y su fuerza salvaje la convierten en la leyenda de cualquier mesa. En su presentación de 250 grs, es el toque letal que tus platillos necesitan para revivir.',
    tag: 'Edición Especial'
  },
  {
    id: 'tradicional',
    name: 'Macha Tradicional',
    weight: '250grs',
    image: 'https://i.postimg.cc/jjjfYdj9/Macha-Tradicional.png',
    description: 'La base de toda buena mesa. Ajo dorado y chiles de árbol seleccionados.',
    longDescription: 'Nuestra interpretación definitiva de un clásico mexicano. Una mezcla maestra de chiles secos seleccionados y semillas tostadas, sumergidos en un aceite premium que captura toda la esencia del fuego artesanal. Textura crujiente, aroma ahumado y un sabor profundo que va con todo. En sus 250 grs, es la joya indispensable que no puede faltar en tu mesa.',
    tag: 'Esencial'
  },
  {
    id: 'pozolera',
    name: 'Salsa Pozolera',
    weight: '1/2 Litro',
    image: 'https://i.postimg.cc/GpSyLwBS/Pozolera.png',
    description: 'El alma de tus platillos tradicionales. Concentrado profundo para caldos y guisos.',
    longDescription: '¡El secreto que tu plato estaba esperando! Creada especialmente para potenciar ese caldito casero con un picor intenso y un aroma ahumado que despierta los sentidos. Es la mezcla perfecta de chiles que aporta color y carácter sin perder la tradición. En su presentación de 1/2 Litro, es el ingrediente mágico para un pozole inolvidable. ¡Sabor que abraza!',
    tag: 'Tradición'
  }
];

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
