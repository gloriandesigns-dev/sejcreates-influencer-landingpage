import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

const About = () => {
  const bottomVisuals = [
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

  return (
    <section className="py-16 px-4 md:px-8 lg:px-12 bg-primary">
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

          {/* Center Column: Split into two blocks */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-4 flex flex-col gap-4"
          >
            {/* Top Image Block */}
            <div className="relative rounded-2xl overflow-hidden h-48 group">
              <img 
                src="https://www.dropbox.com/scl/fi/1ue1yhnecu1sip0c821bl/IMG_8782.jpg?rlkey=hdkruewc50ufyzlq4wlx2g7fh&st=bvnglfcd&raw=1" 
                alt="Sejal" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
            
            {/* Bottom Neon Block */}
            <div className="bg-accentLime p-8 rounded-2xl flex flex-col justify-center border border-accentPink/10">
              <p className="text-sm text-textMain leading-relaxed font-medium">
                Because one perspective can change how you grow, and that growth creates impact. Reading, learning, and creating has genuinely changed how I see the world. Come experience it with me!
              </p>
            </div>
          </motion.div>

          {/* Right Column (Text) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
            className="lg:col-span-4 flex flex-col justify-center gap-6"
          >
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
              <div className="flex gap-4">
                <Plus className="shrink-0 mt-1 text-accentPink" size={16} />
                <p className="text-sm text-textMuted leading-relaxed">
                  Former national-level badminton player, and now a padel enthusiast- racquet sports have always been my reset button.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Visual Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          <div 
            className="hidden md:block absolute left-4 lg:left-12 top-1/2 -translate-y-1/2 w-40 h-40 lg:w-56 lg:h-56 opacity-20 pointer-events-none -z-10" 
            style={{ 
              backgroundImage: 'radial-gradient(#E278A8 2px, transparent 2px)', 
              backgroundSize: '24px 24px' 
            }}
          ></div>

          {bottomVisuals.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: idx * 0.2 }}
              className="rounded-2xl overflow-hidden relative group h-[280px] md:h-[320px] transition-all duration-700 w-full"
            >
              {item.type === 'video' ? (
                <video 
                  src={item.video} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  preload="auto"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-1000"
                />
              ) : (
                <img 
                  src={item.src} 
                  alt="Aesthetic visual" 
                  loading="eager"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-all duration-1000"
                />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
