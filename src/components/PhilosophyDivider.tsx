import React from 'react';
import { motion } from 'framer-motion';

const PhilosophyDivider = () => {
  return (
    <section className="py-40 px-6 md:px-12 lg:px-24 bg-primary relative overflow-hidden">
      {/* Subtle Film Grain Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(12px)', y: 20 }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 2, ease: [0.25, 1, 0.5, 1] }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light leading-relaxed text-textMain mb-12">
            "From competing in sports to presenting at business school, from corporate boardrooms to creating content. I've never stopped being a student."
          </h2>
          
          <p className="text-sm md:text-base text-accentPink font-medium tracking-wide">
            Just growing and building perspectives, one story at a time :)
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophyDivider;
