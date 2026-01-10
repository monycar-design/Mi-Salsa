
import React from 'react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section id="resenas" className="py-32 bg-zinc-950 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Lo que dicen de nosotros</h2>
            <p className="text-zinc-500">Más de 5,000 clientes satisfechos en todo México.</p>
          </div>
          <div className="flex gap-4">
             <div className="text-zinc-300 text-sm">Puntuación media: 4.9/5.0</div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="p-8 bg-black rounded-2xl border border-zinc-900 hover:scale-[1.02] transition-transform duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-white text-xs">★</span>
                ))}
              </div>
              <p className="text-zinc-300 italic mb-6 leading-relaxed">"{review.text}"</p>
              <div className="flex justify-between items-center">
                <span className="text-white font-semibold text-sm">{review.name}</span>
                <span className="text-zinc-600 text-xs">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
