import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const visuals = [
    { 
      type: 'image', 
      src: "https://www.dropbox.com/scl/fi/u54vadiycc9m8hid8vk09/bykval8nfzlcykqpavzr.webp?rlkey=1f4zwej6ggf376rnwf4xtrsq1&st=rek2yw1a&raw=1" 
    },
    { 
      type: 'image', 
      src: "https://www.dropbox.com/scl/fi/okzesgkbmuc4dqjnhmtuv/rjq1mwxrmdl18saovwdq.webp?rlkey=d5jp6larynsxaaib7qyyw7trm&st=cp2yehmc&raw=1" 
    },
    { 
      type: 'video', 
      src: "https://www.dropbox.com/scl/fi/deuzr7c3qtsk5saotxz5k/IMG_1947.MOV?rlkey=wosqd9no3nu65z6r1xsj60gdd&st=yh80gqm2&raw=1" 
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % visuals.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about-section" className="py-16 px-4 md:px-8 lg:px-12 bg-primary scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:col-span-4 flex flex-col justify-center"
          >
            <h2 className="text-3xl font-display mb-6 text-textMain uppercase">About Me</h2>
            <p className="text-textMuted leading-relaxed font-light">
              Strategy by day. Stories always. I'm a London Business School graduate and digital strategist who creates content around D2C brands, consumer psychology, AI, and internet culture.
            </p>
          </motion.div>

          {/* Center Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-4 flex flex-col gap-4"
          >
            <div className="relative rounded-2xl overflow-hidden h-48 group">
              <img 
                src="https://www.dropbox.com/scl/fi/hakye6glc6xfsk2pl1g3u/IMG_9211.webp?rlkey=1udpr1eojrhi5mip5m2nvmtge&st=mqjv1tkn&raw=1" 
                alt="Sejal" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
            
            <div className="bg-accentLime p-8 rounded-2xl border border-accentPink/10">
              <p className="text-sm text-textMain leading-relaxed font-medium uppercase">
                Because one perspective can change how you grow, and that growth creates impact. Reading, learning, and creating has genuinely changed how I see the world.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-accentPink p-6 rounded-2xl text-center shadow-lg"
            >
              <p className="text-white text-sm font-bold uppercase tracking-widest">
                Come experience it with me
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
            className="lg:col-span-4 flex flex-col justify-center gap-6"
          >
            <div className="space-y-6">
              {[
                "Worked across fashion, finance, and digital ecosystems with Tata CLiQ Luxury, ICA Pidilite, and Morgan Stanley.",
                "Previously co-founded the MarTech startup Dualite while building content around strategy, storytelling, and internet behavior.",
                "Former national-level badminton player, and now a padel enthusiast- racquet sports have always been my reset button."
              ].map((text, i) => (
                <div key={i} className="flex gap-4">
                  <Plus className="shrink-0 mt-1 text-accentPink" size={16} />
                  <p className="text-sm text-textMuted leading-relaxed uppercase">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Visual Row - Desktop */}
        <div className="hidden md:grid grid-cols-3 gap-8 relative z-10">
          {visuals.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="rounded-2xl overflow-hidden relative group h-[320px] transition-all duration-700 w-full"
            >
              {item.type === 'video' ? (
                <video src={item.src} autoPlay loop muted playsInline className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-1000" />
              ) : (
                <img src={item.src} alt="Visual" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-1000" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Visual Row - Mobile Carousel */}
        <div className="md:hidden relative h-[400px] mt-8 group">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl"
            >
              {visuals[activeIndex].type === 'video' ? (
                <video src={visuals[activeIndex].src} autoPlay loop muted playsInline className="w-full h-full object-cover" />
              ) : (
                <img src={visuals[activeIndex].src} alt="Visual" className="w-full h-full object-cover" />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Side Arrows */}
          <button 
            onClick={() => setActiveIndex((prev) => (prev - 1 + visuals.length) % visuals.length)}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/60 backdrop-blur-md border border-white/30 flex items-center justify-center z-20 shadow-lg"
          >
            <ChevronLeft size={18} />
          </button>
          <button 
            onClick={() => setActiveIndex((prev) => (prev + 1) % visuals.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/60 backdrop-blur-md border border-white/30 flex items-center justify-center z-20 shadow-lg"
          >
            <ChevronRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;
