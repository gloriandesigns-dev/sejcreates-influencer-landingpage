import React from 'react';
import { motion } from 'framer-motion';

const insightsData = [
  {
    category: "MARKETING",
    read_time: "5 min read",
    title: "Why modern brands need emotional storytelling instead of performance hacks",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop"
  },
  {
    category: "CREATOR ECONOMY",
    read_time: "4 min read",
    title: "Internet-native creators are becoming the new media companies",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
  },
  {
    category: "CONSUMER PSYCHOLOGY",
    read_time: "6 min read",
    title: "People don't buy products. They buy perspective and identity.",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop"
  }
];

const Insights = () => {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-primary text-textMain">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.8, ease: [0.25, 1, 0.5, 1] }}
          className="text-center flex flex-col items-center mb-24"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-textMuted mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accentPink block"></span> Writing
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tight max-w-3xl">
            Perspectives, internet thoughts & cultural observations
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {insightsData.map((item, idx) => (
            <motion.a 
              href="#"
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.5, delay: idx * 0.15, ease: [0.25, 1, 0.5, 1] }}
              className="group flex flex-col gap-6 bg-white/50 p-4 rounded-3xl border border-accentPink/20 hover:border-accentPink hover:shadow-sm transition-all duration-700 hover:-translate-y-2"
            >
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-secondary relative">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-80 mix-blend-multiply group-hover:mix-blend-normal group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-cinematic"
                />
                {/* Subtle color reflections on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-accentPink/20 to-accentLime/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 mix-blend-overlay pointer-events-none"></div>
              </div>
              
              <div className="flex flex-col gap-4 px-2 pb-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-accentLime text-textMain text-[9px] uppercase tracking-widest rounded-full">
                    {item.category}
                  </span>
                  <span className="text-[10px] text-textMuted uppercase tracking-widest">
                    {item.read_time}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-display font-light leading-snug text-textMain group-hover:text-accentPink transition-colors duration-500">
                  {item.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Insights;
