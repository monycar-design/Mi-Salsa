
import React, { useEffect, useState } from 'react';

const Loader: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 1 : 100));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center">
      <div className="mb-8 overflow-hidden">
        <h1 className="text-4xl md:text-6xl font-serif tracking-widest animate-pulse">
          MI SALSA
        </h1>
      </div>
      <div className="w-48 h-[1px] bg-zinc-800 relative">
        <div 
          className="absolute inset-0 bg-white transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-4 text-xs tracking-widest text-zinc-500 uppercase">
        Destilando Esencia Gourmet {progress}%
      </p>
    </div>
  );
};

export default Loader;
