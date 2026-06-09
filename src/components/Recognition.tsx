import React from 'react';
import { motion } from 'framer-motion';

const Recognition = () => {
  return (
    <section id="recognition-section" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-primary overflow-hidden relative scroll-mt-20">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 opacity-[0.05]" 
          style={{ 
            backgroundImage: `linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(circle at center, black 0%, transparent 70%)'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl border border-white/40">
              <img 
                src="https://images.dualite.app/4befb7e4-f16f-4dbc-8edf-a229d8b20017/IMG_9210-ecb351e5-4d4d-40b0-aaad-e85125ea4406.webp" 
                alt="Recognition Award" 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[10px] tracking-[0.3em] text-textMuted mb-6 flex items-center gap-2 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accentPink block"></span> Recognition
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-light tracking-tight mb-10 leading-[1.1] text-textMain">
              A Voice That Resonates
            </h2>
            <div className="bg-accentLime/10 border-l-4 border-accentLime p-10 rounded-r-3xl backdrop-blur-sm shadow-sm">
              <p className="text-xl md:text-2xl lg:text-3xl font-display font-light text-textMain leading-relaxed italic">
                "Fresh Voice in Digital Content awarded by Navbharat Digital & Navrashtra"
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Recognition;
