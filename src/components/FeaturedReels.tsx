import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play } from 'lucide-react';

const featuredData = [
  {
    title: "Why D2C brands fail to create emotional memory",
    type: "Instagram Reel",
    video: "https://www.dropbox.com/scl/fi/hbsqx156dasbyvwpfbxq2/sejcurates_1777821481_3888723287213192739_71849440928.mp4?rlkey=xllcnyb8aai2tzzmkvm7unoh7&st=i4j3377n&raw=1"
  },
  {
    title: "Consumer psychology behind internet-first brands",
    type: "Perspective Breakdown",
    video: "https://www.dropbox.com/scl/fi/6c4qowggrd5uklp20xgia/sejcurates_1773839488_3855338724758503494_71849440928.mp4?rlkey=8ir4pgaa5wipp7o2vzawvc632&st=nnr51zhk&raw=1"
  },
  {
    title: "AI will not replace creators — bland storytelling will",
    type: "Opinion Reel",
    video: "https://www.dropbox.com/scl/fi/y77tnyj0c9aolxrosmeeh/sejcurates_1778075193_3891098317188389548_71849440928.mp4?rlkey=eedwe6z3zwqkc0cpyck3neuxx&st=rdvhdhkm&raw=1"
  }
];

const FeaturedCard = ({ item, idx }: { item: typeof featuredData[0], idx: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      // play() returns a promise; we catch the interruption error 
      // that occurs if pause() is called before play() finishes.
      videoRef.current.play().catch(() => {
        // Silence the "interrupted by call to pause" error
      });
    }
  };
  
  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.muted = true;
    }
  };

  return (
    <motion.div 
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-secondary">
        <video 
          ref={videoRef}
          src={item.video} 
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-cinematic"
        />
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-accentPink/0 group-hover:bg-accentPink/20 transition-colors duration-700 pointer-events-none">
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
  );
};

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
            <FeaturedCard key={idx} item={item} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedReels;
