import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const reelsData = [
  { 
    title: "D2C strategy breakdowns", 
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop",
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
  },
  { 
    title: "Consumer psychology", 
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop",
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
  },
  { 
    title: "AI and internet culture", 
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop",
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
  },
  { 
    title: "Brand storytelling", 
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop",
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
  },
  { 
    title: "Marketing insights", 
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    video: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  },
];

const ReelCard = ({ item }: { item: typeof reelsData[0] }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
  };

  return (
    <div 
      className="w-72 h-[512px] rounded-2xl overflow-hidden relative shrink-0 cursor-pointer group/card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video 
        ref={videoRef}
        src={item.video}
        poster={item.img}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover group-hover/card:scale-105 transition-all duration-1000"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-accentPink/80 via-transparent to-transparent opacity-80 group-hover/card:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-6 left-6 right-6">
        <p className="text-white text-sm font-medium tracking-wide">{item.title}</p>
      </div>
    </div>
  );
};

const ReelsTicker = () => {
  // Duplicate array for seamless looping
  const tickerItems = [...reelsData, ...reelsData];

  return (
    <section className="py-24 bg-primary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mb-12">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-widest text-textMuted mb-4"
        >
          Selected Perspectives
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-display font-light text-textMain"
        >
          Stories, strategy, culture, and{' '}
          <span className="relative inline-block text-textMain px-1">
            {/* Left-to-right wipe animation background */}
            <motion.span 
              className="absolute inset-0 bg-accentLime -z-10 origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
            ></motion.span>
            content
          </span>.
        </motion.h2>
      </div>

      <div className="relative w-full flex overflow-hidden group">
        <motion.div 
          className="flex gap-6 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 40, 
            repeat: Infinity,
          }}
          style={{ width: "max-content" }}
        >
          {tickerItems.map((item, idx) => (
            <ReelCard key={idx} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ReelsTicker;
