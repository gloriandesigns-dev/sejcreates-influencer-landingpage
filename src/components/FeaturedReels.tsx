import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';

const featuredData = [
  {
    title: "Why D2C brands fail to create emotional memory",
    type: "Instagram Reel",
    img: "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Consumer psychology behind internet-first brands",
    type: "Perspective Breakdown",
    img: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "AI will not replace creators — bland storytelling will",
    type: "Opinion Reel",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop"
  }
];

const FeaturedReels = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 1.5, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-primary text-textMain">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="max-w-2xl"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-textMuted mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accentPink block"></span> Perspectives
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tight mb-6">
              Selected Stories & Reels
            </h2>
            <p className="text-textMuted font-light leading-relaxed max-w-lg">
              Thoughts on brands, internet culture, creator psychology, AI, and modern consumer behavior.
            </p>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
          >
            <a href="#" className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-textMuted hover:text-accentPink transition-colors duration-500 group">
              View All <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500" />
            </a>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {featuredData.map((item, idx) => (
            <motion.div 
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  filter: 'blur(0px)',
                  transition: { duration: 1.5, delay: idx * 0.2, ease: [0.25, 1, 0.5, 1] } 
                }
              }}
              className="group cursor-pointer flex flex-col gap-6"
            >
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-secondary">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-cinematic"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-accentPink/0 group-hover:bg-accentPink/20 transition-colors duration-700">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-700 ease-cinematic">
                    <Play size={20} className="ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-3 px-2">
                <p className="text-[10px] uppercase tracking-[0.2em] text-textMuted">
                  {item.type}
                </p>
                <h3 className="text-lg md:text-xl font-display font-light leading-snug group-hover:text-accentPink transition-colors duration-500">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedReels;
