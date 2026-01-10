
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-32 bg-zinc-950 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24">
        <div className="w-full lg:w-1/2">
          <h2 className="text-5xl font-serif font-bold mb-8">Hagamos Algo <br/> Increíble</h2>
          <p className="text-zinc-400 mb-12 text-lg leading-relaxed">
            ¿Interesado en compras por mayoreo o simplemente quieres saludar? 
            Estamos listos para escucharte.
          </p>
          <div className="space-y-6">
            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2">Correo Electrónico</p>
              <a href="mailto:hola@misalsa.com" className="text-xl hover:text-zinc-400 transition-colors">hola@misalsa.com</a>
            </div>
            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-widest mb-2">Social</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-zinc-400">Instagram</a>
                <a href="#" className="hover:text-zinc-400">TikTok</a>
                <a href="#" className="hover:text-zinc-400">Facebook</a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Nombre completo" 
                className="w-full bg-black border border-zinc-800 rounded-xl p-4 focus:border-white outline-none transition-colors text-white"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-black border border-zinc-800 rounded-xl p-4 focus:border-white outline-none transition-colors text-white"
              />
            </div>
            <textarea 
              placeholder="¿En qué podemos ayudarte?" 
              rows={6}
              className="w-full bg-black border border-zinc-800 rounded-xl p-4 focus:border-white outline-none transition-colors text-white resize-none"
            />
            <button className="w-full py-5 bg-white text-black font-bold rounded-full uppercase tracking-widest hover:bg-zinc-200 transition-colors">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
