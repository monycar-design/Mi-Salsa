
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Loader from './components/Loader.tsx';
import Product from './components/Product.tsx';
import Ingredients from './components/Ingredients.tsx';
import Nutrition from './components/Nutrition.tsx';
import Reviews from './components/Reviews.tsx';
import FAQ from './components/FAQ.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <div className="relative z-30 bg-black">
          <Product />
          <Ingredients />
          <Nutrition />
          <Reviews />
          <FAQ />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
