
import React, { useEffect, useState } from 'react';
import { HERO_WEBP_URL } from '../constants';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Parallax calculations
  const textOpacity = Math.max(0, 1 - scrollY / 600);
  const textScale = 1 + scrollY / 2000;
  const videoOpacity = Math.max(0.4, 1 - scrollY / 1200);
  const videoScale = 1 + scrollY / 5000;

  return (
    <section className="relative h-[200vh] w-full bg-black overflow-hidden">
      {/* Sticky Background */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-100 ease-out"
          style={{ 
            backgroundImage: `url(${HERO_WEBP_URL})`,
            transform: `scale(${videoScale})`,
            opacity: videoOpacity
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-10" />

        {/* Content */}
        <div 
          className="relative z-20 text-center px-6 transition-all duration-100"
          style={{ 
            opacity: textOpacity,
            transform: `scale(${textScale}) translateY(${scrollY * 0.2}px)`
          }}
        >
          <h1 className="text-7xl md:text-9xl font-serif font-bold mb-4 tracking-tight">
            Mi Salsa
          </h1>
          <h2 className="text-xl md:text-2xl font-light tracking-[0.3em] uppercase mb-8 text-zinc-300">
            El Sabor que le Falta a tu Vida
          </h2>
          <p className="max-w-xl mx-auto text-zinc-400 text-sm md:text-base mb-12 leading-relaxed">
            Experimenta la fusión perfecta de chiles ahumados y texturas artesanales. 
            Nuestra Salsa Botanera es la joya gourmet diseñada para elevar cada bocado.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#producto"
              className="px-10 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-all duration-300 text-sm uppercase tracking-widest shadow-2xl"
            >
              Descubrir Sabor
            </a>
            <a 
              href="#contacto"
              className="px-10 py-4 border border-white text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300 text-sm uppercase tracking-widest"
            >
              Comprar Ahora
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-white/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
