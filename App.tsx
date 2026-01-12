
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Loader from './components/Loader';
import Product from './components/Product';
import Ingredients from './components/Ingredients';
import Nutrition from './components/Nutrition';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
