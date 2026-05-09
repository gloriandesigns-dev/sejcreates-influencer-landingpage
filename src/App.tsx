import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import BrandsTicker from './components/BrandsTicker';
import ReelsTicker from './components/ReelsTicker';
import FeaturedReels from './components/FeaturedReels';
import Insights from './components/Insights';
import PhilosophyDivider from './components/PhilosophyDivider';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-primary min-h-screen font-sans text-textMain overflow-x-hidden">
      <Hero />
      <About />
      <ReelsTicker />
      <Experience />
      <BrandsTicker />
      <FeaturedReels />
      <Insights />
      <PhilosophyDivider />
      <CTA />
      <Footer />
    </main>
  );
}

export default App;
