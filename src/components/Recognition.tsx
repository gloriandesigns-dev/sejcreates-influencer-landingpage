import React from 'react';
import { motion } from 'framer-motion';

const Recognition = () => {
  return (
    <section id="recognition-section" className="py-16 px-6 md:px-12 lg:px-24 bg-primary overflow-hidden relative scroll-mt-20">
      {/* Fading Grid Background - Middle Visibility Only */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 opacity-[0.08]" 
          style={{ 
            backgroundImage: `linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage: 'linear-gradient(to bottom, transparent, black 30%, black 70%, transparent), linear-gradient(to right, transparent, black 30%, black 70%, transparent)'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
            className="relative"
          >
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl border border-white/20">
              <img 
                src="https://www.dropbox.com/scl/fi/54a182hwhdgnje48k8o3p/IMG_9210.webp?rlkey=4j7wo1klmye2hfed2sya68d0x&st=y64ut4pu&raw=1" 
                alt="Recognition Award" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-textMuted mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accentPink block"></span> Recognition
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-light tracking-tight mb-8 leading-tight uppercase">
              A Voice That Resonates
            </h2>
            <div className="bg-accentLime/20 border-l-4 border-accentLime p-8 rounded-r-2xl backdrop-blur-sm">
              <p className="text-xl md:text-2xl font-display font-light text-textMain leading-relaxed italic uppercase">
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
