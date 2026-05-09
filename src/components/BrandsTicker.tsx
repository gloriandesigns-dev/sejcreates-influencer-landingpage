import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  "Tata CLiQ Luxury",
  "ICA Pidilite",
  "Morgan Stanley",
  "Dualite",
  "London Business School",
  "Bluence"
];

const BrandsTicker = () => {
  // Duplicate for seamless infinite scroll
  const tickerItems = [...brands, ...brands, ...brands];

  return (
    <section className="py-24 bg-primary overflow-hidden border-b border-borderSoft/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-textMuted mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accentPink block"></span> Worked With
          </p>
          <h2 className="text-2xl md:text-3xl font-display font-light text-textMain max-w-xl">
            Brands, institutions, and ecosystems I've learned from.
          </h2>
        </motion.div>
      </div>

      <div className="relative w-full flex overflow-hidden group">
        {/* Subtle gradient masks for smooth fade in/out at edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none"></div>

        <motion.div 
          className="flex items-center gap-24 md:gap-40 px-12"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ 
            ease: "linear", 
            duration: 60, // Ultra slow continuous motion
            repeat: Infinity,
          }}
          style={{ width: "max-content" }}
        >
          {tickerItems.map((brand, idx) => (
            <div 
              key={idx} 
              className="shrink-0 cursor-default group/logo relative"
            >
              {/* Using elegant typography to represent logos cleanly */}
              <span className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-accentPink/40 uppercase tracking-widest group-hover/logo:text-accentPink transition-all duration-1000 relative z-10">
                {brand}
              </span>
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-accentLime/40 blur-2xl rounded-full opacity-0 group-hover/logo:opacity-100 transition-opacity duration-1000 -z-0 scale-150"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandsTicker;
