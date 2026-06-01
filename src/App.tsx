import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import BrandsTicker from './components/BrandsTicker';
import ReelsTicker from './components/ReelsTicker';
import FeaturedReels from './components/FeaturedReels';
import Recognition from './components/Recognition';
import PhilosophyDivider from './components/PhilosophyDivider';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-primary min-h-screen font-sans text-textMain overflow-x-hidden">
      <Navbar />
      <div className="relative">
        <Hero />
        <About />
        <ReelsTicker />
        <Experience />
        <BrandsTicker />
        <FeaturedReels />
        {/* Insights hidden for now as per request */}
        <Recognition />
        <PhilosophyDivider />
        <CTA />
        <Footer />
      </div>
    </main>
  );
}

export default App;
