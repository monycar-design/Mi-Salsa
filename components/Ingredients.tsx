
import React from 'react';
import { INGREDIENTS } from '../constants';

const Ingredients: React.FC = () => {
  return (
    <section id="ingredientes" className="py-32 bg-zinc-950 border-y border-zinc-900 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Selección de Origen</h2>
          <div className="w-24 h-1 bg-white mx-auto opacity-20" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {INGREDIENTS.map((item, idx) => (
            <div key={idx} className="group p-8 bg-black border border-zinc-900 rounded-3xl hover:border-zinc-700 transition-all duration-500">
              <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-xl font-serif font-bold mb-4">{item.name}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ingredients;
