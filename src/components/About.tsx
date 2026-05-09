import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';

const About = () => {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-12 bg-primary">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:col-span-4 flex flex-col justify-center"
          >
            <h2 className="text-3xl font-display mb-6 text-textMain">About Me</h2>
            <p className="text-textMuted leading-relaxed font-light">
              Strategy by day. Stories always. I'm a London Business School graduate and digital strategist who creates content around D2C brands, consumer psychology, AI, and internet culture.
            </p>
          </motion.div>

          {/* Center Metric Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-4"
          >
            <div className="bg-accentLime p-8 rounded-2xl shadow-sm border border-accentPink/30 h-full flex flex-col justify-between hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_#E278A8] transition-all duration-700">
              <div className="w-12 h-12 rounded-full border border-textMain/20 flex items-center justify-center mb-12 text-textMain group-hover:text-accentPink transition-colors">
                <span className="text-xs">IG</span>
              </div>
              <div>
                <h3 className="text-6xl font-display mb-4 text-textMain">27k+</h3>
                <p className="text-sm text-textMain/80 leading-relaxed">
                  Audience built through relatable brand storytelling and creator-led education
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column (Image + Text) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
            className="lg:col-span-4 flex flex-col gap-8"
          >
            <div className="h-48 rounded-2xl overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1553028826-f4804a6dba3b?q=80&w=800&auto=format&fit=crop" 
                alt="Creator Portrait" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-accentPink/20 mix-blend-overlay">
                 <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-textMain">
                    <ArrowUpRight size={16} />
                 </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <Plus className="shrink-0 mt-1 text-accentPink" size={16} />
                <p className="text-sm text-textMuted leading-relaxed">
                  Worked across fashion, finance, and digital ecosystems with Tata CLiQ Luxury, ICA Pidilite, and Morgan Stanley.
                </p>
              </div>
              <div className="flex gap-4">
                <Plus className="shrink-0 mt-1 text-accentPink" size={16} />
                <p className="text-sm text-textMuted leading-relaxed">
                  Previously co-founded the MarTech startup Dualite while building content around strategy, storytelling, and internet behavior.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Visual Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop"
          ].map((src, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: idx * 0.2 }}
              className="h-64 rounded-2xl overflow-hidden relative group"
            >
              <img 
                src={src} 
                alt="Aesthetic visual" 
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-1000"
              />
              {idx === 1 && (
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-12 h-12 bg-accentPink rounded-full flex items-center justify-center text-white group-hover:bg-accentLime group-hover:text-textMain transition-colors duration-500">
                      <ArrowUpRight size={20} />
                   </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
