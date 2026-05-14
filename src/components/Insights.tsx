import React from 'react';
import { motion } from 'framer-motion';

const insightsData = [
  {
    category: "MARKETING",
    read_time: "5 min read",
    title: "Why modern brands need emotional storytelling instead of performance hacks",
    img: "https://www.dropbox.com/scl/fi/htv4f63euspktfgl605qc/1aa2a377295f7be87fc8101a07aae229.webp?rlkey=k55itn8l1mdl1597be0cowb8e&st=58o7eerb&raw=1"
  },
  {
    category: "CREATOR ECONOMY",
    read_time: "4 min read",
    title: "Internet-native creators are becoming the new media companies",
    img: "https://www.dropbox.com/scl/fi/p7uwdvafjzpzvh0b2jvlt/10af31c7d7a50fe52a2cd86807ce4327.webp?rlkey=rnr6dmtjmh473sfa9vkvs139r&st=har8ym4r&raw=1"
  },
  {
    category: "CONSUMER PSYCHOLOGY",
    read_time: "6 min read",
    title: "People don't buy products. They buy perspective and identity.",
    img: "https://www.dropbox.com/scl/fi/fh1bmoqr8h8b21ikgaa9u/900cd0e86a2393f1d672488a8e70aa4e.webp?rlkey=ylkz09d63nzja69csa8n1o4sx&st=xqj4ij68&raw=1"
  }
];

const Insights = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-primary text-textMain">
      <div className="max-w-7xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.8, ease: [0.25, 1, 0.5, 1] }}
          className="text-center flex flex-col items-center mb-16"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-textMuted mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accentPink block"></span> Writing
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tight max-w-3xl">
            Perspectives, internet thoughts & cultural observations
          </h2>
        </motion.div>

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
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-1000 ease-cinematic ${idx === 1 ? 'object-[center_20%]' : ''}`}
                />
                <div className="absolute inset-0 bg-accentLime opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none mix-blend-multiply"></div>
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
