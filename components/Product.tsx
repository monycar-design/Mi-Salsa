
import React from 'react';

const Product: React.FC = () => {
  return (
    <section id="producto" className="py-32 bg-black px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          <div className="relative group">
            <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-1000" />
            <img 
              src="https://picsum.photos/id/493/800/1000" 
              alt="Salsa Botanera Premium" 
              className="relative rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl border border-zinc-900"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-8">
          <span className="text-zinc-500 uppercase tracking-[0.4em] text-xs">Gourmet Series</span>
          <h2 className="text-5xl font-serif font-bold">La Botanera</h2>
          <p className="text-zinc-400 leading-loose text-lg">
            Nuestra receta maestra. Una textura untuosa que se adhiere a la perfección a tus snacks favoritos. 
            No es solo picante; es una sinfonía de sabores terrosos, ahumados y un final cítrico que limpia el paladar.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-4">
            <div>
              <h4 className="text-3xl font-serif mb-1">100%</h4>
              <p className="text-xs text-zinc-500 uppercase tracking-widest">Natural</p>
            </div>
            <div>
              <h4 className="text-3xl font-serif mb-1">Artesanal</h4>
              <p className="text-xs text-zinc-500 uppercase tracking-widest">Procesado</p>
            </div>
          </div>
          <button className="w-full md:w-auto px-12 py-5 bg-zinc-900 text-white rounded-full border border-zinc-700 hover:border-white transition-all duration-300">
            Ver Ficha Técnica
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
