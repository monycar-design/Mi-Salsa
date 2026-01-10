
import React from 'react';

const Nutrition: React.FC = () => {
  const tableData = [
    { label: 'Calorías', value: '45 kcal' },
    { label: 'Grasas Totales', value: '4.2g' },
    { label: 'Sodio', value: '180mg' },
    { label: 'Carbohidratos', value: '1.5g' },
    { label: 'Proteínas', value: '0.5g' },
  ];

  return (
    <section id="nutricion" className="py-32 bg-black px-6">
      <div className="max-w-4xl mx-auto border border-zinc-900 rounded-3xl overflow-hidden shadow-2xl bg-zinc-950/50 backdrop-blur-sm">
        <div className="p-12 text-center border-b border-zinc-900">
          <h2 className="text-4xl font-serif font-bold mb-2">Información Nutrimental</h2>
          <p className="text-zinc-500 uppercase tracking-widest text-xs">Por cada porción de 15g</p>
        </div>
        <div className="p-12">
          <div className="space-y-6">
            {tableData.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center border-b border-zinc-900/50 pb-4">
                <span className="text-zinc-400 font-medium">{item.label}</span>
                <span className="text-white font-serif text-xl">{item.value}</span>
              </div>
            ))}
          </div>
          <p className="mt-12 text-zinc-600 text-[10px] text-center uppercase tracking-widest leading-loose">
            * Valores basados en una dieta de 2,000 calorías. Sin azúcares añadidos ni colorantes artificiales.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Nutrition;
