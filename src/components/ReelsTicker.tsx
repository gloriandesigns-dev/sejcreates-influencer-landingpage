import React, { useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const reelsData = [
  { 
    title: "Content Strategy", 
    video: "https://www.dropbox.com/scl/fi/r3216x8do6r8ewu31m7n9/sejcurates_1777381088_3855338724758503494_71849440928.webm?rlkey=zddt7ksixu2y1c1ry3silvqu1&st=kvhv826b&raw=1"
  },
  { 
    title: "Brand Storytelling", 
    video: "https://www.dropbox.com/scl/fi/v5ze76koyf8cpifbwhnks/sejcurates_1778075193_3891098317188389548_71849440928.webm?rlkey=vjajg0g2vvs08wswpppbqzd1y&st=w9dney08&raw=1"
  },
  { 
    title: "Consumer Psychology", 
    video: "https://www.dropbox.com/scl/fi/hjt3cqrw4wxn5y1b0k49x/sejcurates_1777038242_3882399847680691407_71849440928.webm?rlkey=b9lr72ognwoc3umhm6karsaij&st=s60ab7ak&raw=1"
  },
  { 
    title: "D2C Breakdowns", 
    video: "https://www.dropbox.com/scl/fi/xb6fk960i5y7i5siodq1l/sejcurates_1777466553_3885992340779237144_71849440928.webm?rlkey=327nqaypsbc65d9acov3bmkpi&st=xwupt8qh&raw=1"
  },
  { 
    title: "Internet Culture", 
    video: "https://www.dropbox.com/scl/fi/qdvqis022s17asxoxi4pr/sejcurates_1770212710_3825139871342134124_71849440928.webm?rlkey=uceaf8fv57m20rfil8bu3254q&st=8argaza4&raw=1"
  },
  { 
    title: "Marketing Insights", 
    video: "https://www.dropbox.com/scl/fi/57lvps807robk4rh43aef/sejcurates_1777986433_3890349026798794637_71849440928.webm?rlkey=75sv61p0d1yqxwt9ahp4rxqq1&st=k1z6owcv&raw=1"
  },
  { 
    title: "Creator Economy", 
    video: "https://www.dropbox.com/scl/fi/y0dnu1hmyir23nn95mbx2/sejcurates_1778159040_3891800077154469281_71849440928.webm?rlkey=iznh31nsdz40fqva6k0jkjfd4&st=125cjftp&raw=1"
  },
  { 
    title: "Digital Ecosystems", 
    video: "https://www.dropbox.com/scl/fi/wb7w5qu1cxxqwhnx7c0t6/sejcurates_1759931266_3738891360318036890_71849440928.webm?rlkey=gz809ajpdkl4aoemo1sxwuesu&st=4elvaxag&raw=1"
  }
];

const ReelCard = ({ item }: { item: typeof reelsData[0] }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const instagramLink = "https://www.instagram.com/sejcurates?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.muted = true;
    }
  };

  return (
    <a 
      href={instagramLink}
      target="_blank"
      rel="noopener noreferrer"
      className="w-64 md:w-72 h-[480px] md:h-[512px] rounded-3xl overflow-hidden relative shrink-0 cursor-pointer group/card shadow-md block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video 
        ref={videoRef}
        src={item.video}
        loop
        muted={true}
        playsInline
        preload="auto"
        className="w-full h-full object-cover group-hover/card:scale-105 transition-all duration-[2000ms] ease-cinematic pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover/card:opacity-80 transition-opacity duration-700 pointer-events-none" />
      <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
        <p className="text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">{item.title}</p>
      </div>
    </a>
  );
};

const ReelsTicker = () => {
  const tickerItems = [...reelsData, ...reelsData, ...reelsData];
  const x = useMotionValue(0);

  return (
    <section id="reels-ticker-section" className="pt-20 pb-12 md:pt-24 md:pb-16 bg-primary overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[10px] uppercase tracking-[0.3em] text-textMuted mb-4 flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accentPink"></span> Selected Perspectives
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-textMain leading-tight"
        >
          Stories, strategy, culture, and{' '}
          <span className="relative inline-block text-textMain px-1">
            <motion.span 
              className="absolute inset-0 bg-accentLime -z-10 origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            ></motion.span>
            content
          </span>
        </motion.h2>
      </div>

      <div className="relative w-full flex overflow-hidden cursor-grab active:cursor-grabbing">
        <motion.div 
          className="flex gap-6 px-6"
          drag="x"
          style={{ x }}
          dragConstraints={{ left: -3000, right: 0 }}
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ 
            ease: "linear", 
            duration: 100,
            repeat: Infinity,
          }}
          whileTap={{ transition: { duration: 0 } }}
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
