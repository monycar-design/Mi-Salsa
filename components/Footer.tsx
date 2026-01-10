
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black border-t border-zinc-900 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-zinc-600 text-xs tracking-widest">
          © {new Date().getFullYear()} MI SALSA. TODOS LOS DERECHOS RESERVADOS.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-zinc-600 hover:text-white text-xs uppercase tracking-widest transition-colors">Aviso de Privacidad</a>
          <a href="#" className="text-zinc-600 hover:text-white text-xs uppercase tracking-widest transition-colors">Términos y Condiciones</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
