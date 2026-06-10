import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const instagramLink = "https://www.instagram.com/sejcurates?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

  const visuals = [
    { 
      type: 'image', 
      src: "https://images.dualite.app/4befb7e4-f16f-4dbc-8edf-a229d8b20017/bykval8nfzlcykqpavzr-e1c55e3e-203c-458c-84ff-900344b47e1a.webp" 
    },
    { 
      type: 'image', 
      src: "https://images.dualite.app/4befb7e4-f16f-4dbc-8edf-a229d8b20017/rjq1mwxrmdl18saovwdq-a6579638-c247-4fea-b3d4-35bca2b5e0c9.webp" 
    },
    { 
      type: 'video', 
      src: "https://www.dropbox.com/scl/fi/kyszctgoqtvc6g8t73eyg/IMG_1947.webm?rlkey=p49bo5fu56iqc6fv6jbhcvux7&st=pdzwg1gv&raw=1" 
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % visuals.length);
    }, 2500); // 2.5s cycle
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about-section" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-primary scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-display mb-6 text-textMain tracking-tight uppercase">About Me</h2>
            <p className="text-textMuted leading-relaxed font-light text-base md:text-lg">
              Strategy by day. Stories always. I'm a London Business School graduate and digital strategist who creates content around D2C brands, consumer psychology, AI, and internet culture.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="lg:col-span-4 flex flex-col gap-6"
          >
            <a 
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative rounded-3xl overflow-hidden h-56 group shadow-sm block"
            >
              <img 
                src="https://images.dualite.app/4befb7e4-f16f-4dbc-8edf-a229d8b20017/Screenshot_2026-06-09_at_8.55.27_PM-97c75dd6-4c0e-435c-bcfc-836791d319ef.webp" 
                alt="Sejal" 
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms] ease-cinematic"
              />
            </a>
            
            <div className="bg-accentLime p-8 rounded-3xl border border-accentPink/5 shadow-sm">
              <p className="text-sm md:text-base text-textMain leading-relaxed font-medium">
                Because one perspective can change how you grow, and that growth creates impact. Reading, learning, and creating has genuinely changed how I see the world.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-accentPink p-6 rounded-3xl text-center shadow-lg"
            >
              <p className="text-white text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase">
                Come experience it with me
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="lg:col-span-4 flex flex-col justify-center gap-8"
          >
            <div className="space-y-8">
              {[
                "Worked across fashion, finance, and digital ecosystems with Tata CLiQ Luxury, ICA Pidilite, and Morgan Stanley.",
                "Previously co-founded the MarTech startup Dualite while building content around strategy, storytelling, and internet behavior.",
                "Former national-level badminton player, and now a padel enthusiast- racquet sports have always been my reset button."
              ].map((text, i) => (
                <div key={i} className="flex gap-5">
                  <Plus className="shrink-0 mt-1 text-accentPink" size={16} />
                  <p className="text-sm md:text-base text-textMuted leading-relaxed font-light">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="hidden md:grid grid-cols-3 gap-8 relative z-10">
          {visuals.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl overflow-hidden relative group h-[340px] shadow-md w-full"
            >
              {item.type === 'video' ? (
                <video src={item.src} autoPlay loop muted playsInline preload="metadata" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-[2000ms] ease-cinematic" />
              ) : (
                <img src={item.src} alt="Visual" fetchPriority="high" loading="eager" decoding="async" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-[2000ms] ease-cinematic" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel - Refined for "Instant but Smooth" transitions */}
        <div className="md:hidden relative h-[420px] mt-4 overflow-hidden rounded-3xl">
          <AnimatePresence initial={false} mode="popLayout">
            <motion.div
              key={activeIndex}
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ 
                duration: 0.8, 
                ease: [0.22, 1, 0.36, 1] 
              }}
              className="absolute inset-0 shadow-xl"
            >
              {visuals[activeIndex].type === 'video' ? (
                <video src={visuals[activeIndex].src} autoPlay loop muted playsInline preload="metadata" className="w-full h-full object-cover" />
              ) : (
                <img src={visuals[activeIndex].src} alt="Visual" fetchPriority="high" loading="eager" decoding="async" className="w-full h-full object-cover" />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default About;
