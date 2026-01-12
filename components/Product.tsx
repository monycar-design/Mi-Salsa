
import React, { useState } from 'react';
import { PRODUCTS } from '../constants.tsx';
import { Product as ProductType } from '../types.ts';

const Product: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductType | null>(null);

  const closeModal = () => setSelectedProduct(null);

  return (
    <section id="producto" className="py-32 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-zinc-500 uppercase tracking-[0.5em] text-[10px] mb-4 block">Nuestra Colección</span>
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-6">Sabores de Autor</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Cada frasco es una obra maestra de la alquimia culinaria mexicana. 
            Descubre nuestra variedad de texturas, aromas y niveles de fuego.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-24">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group relative flex flex-col items-center">
              <div className="relative aspect-[3/4] w-full mb-8 overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800">
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {product.tag && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-white/90 backdrop-blur-sm text-black text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      {product.tag}
                    </span>
                  </div>
                )}

                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain p-4 transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40 backdrop-blur-[2px]">
                   <button 
                    onClick={() => setSelectedProduct(product)}
                    className="px-6 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-zinc-200 transition-colors shadow-2xl transform active:scale-95"
                   >
                      Ver Detalles
                   </button>
                </div>
              </div>

              <div className="text-center space-y-2 px-4">
                <div className="text-zinc-500 text-[10px] uppercase tracking-widest flex items-center justify-center gap-2">
                  <span>{product.weight}</span>
                  <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
                  <span>Premium</span>
                </div>
                <h3 className="text-xl font-serif font-bold group-hover:text-zinc-300 transition-colors">
                  {product.name}
                </h3>
                <p className="text-zinc-500 text-xs leading-relaxed max-w-[250px] mx-auto transition-opacity duration-500">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Detalles */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 sm:p-12">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/90 backdrop-blur-xl transition-opacity duration-500"
            onClick={closeModal}
          />
          
          {/* Modal Content */}
          <div className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-900 rounded-[2rem] overflow-hidden flex flex-col md:flex-row shadow-2xl animate-in fade-in zoom-in duration-300">
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors border border-white/10"
            >
              <span className="text-xl">✕</span>
            </button>

            <div className="w-full md:w-1/2 bg-zinc-900 flex items-center justify-center p-12">
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.name} 
                className="w-full max-w-[300px] h-auto object-contain drop-shadow-[0_20px_50px_rgba(255,255,255,0.1)]"
              />
            </div>

            <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
              <div className="mb-8">
                <span className="text-zinc-500 uppercase tracking-[0.4em] text-[10px] mb-2 block">Sabor de Autor</span>
                <h3 className="text-4xl font-serif font-bold mb-4">{selectedProduct.name}</h3>
                <div className="flex items-center gap-3">
                  <span className="text-zinc-300 text-sm">{selectedProduct.weight}</span>
                  <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
                  <span className="text-zinc-500 text-xs uppercase tracking-widest">Edición Gourmet</span>
                </div>
              </div>

              <div className="w-12 h-[1px] bg-white opacity-20 mb-8" />

              <p className="text-zinc-300 text-lg md:text-xl font-light leading-relaxed mb-12 italic">
                {selectedProduct.longDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <a 
                  href="https://script.google.com/macros/s/AKfycbztKPA6maNW6PlZTMN7XCneW4JL9QENI4QqEb7O9TtNplZE1AY0LwMZKmKRskUSSas5/exec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-8 py-4 bg-white text-black text-xs font-bold uppercase tracking-[0.2em] rounded-full text-center hover:bg-zinc-200 transition-colors"
                >
                  Adquirir Ahora
                </a>
                <button 
                  onClick={closeModal}
                  className="px-8 py-4 border border-zinc-800 text-zinc-400 text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-white/5 transition-colors"
                >
                  Regresar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Product;
