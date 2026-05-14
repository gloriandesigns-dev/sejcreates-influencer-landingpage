import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const reelsData = [
  { 
    title: "Content Strategy", 
    video: "https://www.dropbox.com/scl/fi/6c4qowggrd5uklp20xgia/sejcurates_1773839488_3855338724758503494_71849440928.mp4?rlkey=8ir4pgaa5wipp7o2vzawvc632&st=hic0az2c&raw=1"
  },
  { 
    title: "Brand Storytelling", 
    video: "https://www.dropbox.com/scl/fi/y77tnyj0c9aolxrosmeeh/sejcurates_1778075193_3891098317188389548_71849440928.mp4?rlkey=eedwe6z3zwqkc0cpyck3neuxx&st=l0q91m36&raw=1"
  },
  { 
    title: "Consumer Psychology", 
    video: "https://www.dropbox.com/scl/fi/hbsqx156dasbyvwpfbxq2/sejcurates_1777821481_3888723287213192739_71849440928.mp4?rlkey=xllcnyb8aai2tzzmkvm7unoh7&st=4jwnh4yk&raw=1"
  },
  { 
    title: "D2C Breakdowns", 
    video: "https://www.dropbox.com/scl/fi/0xz6da1w0qiniibqtmimy/sejcurates_1777466553_3885992340779237144_71849440928.mp4?rlkey=0c3yvhnugus2jpcmggvunk8b0&st=bzaenwgb&raw=1"
  },
  { 
    title: "Internet Culture", 
    video: "https://www.dropbox.com/scl/fi/wdyw8avfrsxo38lg37348/sejcurates_1777381088_3885275268046657547_71849440928.mp4?rlkey=cepspt2w8wwcjdeomexbtl1u2&st=0yxkmu5i&raw=1"
  },
  { 
    title: "Marketing Insights", 
    video: "https://www.dropbox.com/scl/fi/fj06viu1oponmf5bw1ezw/sejcurates_1777038242_3882399847680691407_71849440928.mp4?rlkey=knorpo13d8u8qou0jayh22clp&st=lzqnqdcc&raw=1"
  },
  { 
    title: "Creator Economy", 
    video: "https://www.dropbox.com/scl/fi/eof2snsyea2ybv7bzogwv/sejcurates_1777986433_3890349026798794637_71849440928.mp4?rlkey=56eh6sz8vudnp90y5n6w6mj85&st=q950adbp&raw=1"
  },
  { 
    title: "Digital Ecosystems", 
    video: "https://www.dropbox.com/scl/fi/v3t68ttmol2i8sa4rdnwg/sejcurates_1770212710_3825139871342134124_71849440928.mp4?rlkey=4mdg6fn7q8aso6jymqst7nmnn&st=d2dorznh&raw=1"
  },
  { 
    title: "Modern Business", 
    video: "https://www.dropbox.com/scl/fi/y0k1b7x9oxbzmkg3vheui/sejcurates_1759931266_3738891360318036890_71849440928.mp4?rlkey=2l9y2vv7xyurct98wrlu9g6kk&st=6upensne&raw=1"
  },
  { 
    title: "Strategic Thinking", 
    video: "https://www.dropbox.com/scl/fi/r582abu9d37e9ltb0eift/sejcurates_1778159040_3891800077154469281_71849440928.mp4?rlkey=pbvt92ge36xlx8lisu58zq09j&st=49yxmi91&raw=1"
  }
];

const ReelCard = ({ item }: { item: typeof reelsData[0] }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch((error) => {
        console.warn("Video playback or unmuting failed on hover:", error);
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
    <div 
      className="w-72 h-[512px] rounded-2xl overflow-hidden relative shrink-0 cursor-pointer group/card"
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
  const tickerItems = [...reelsData, ...reelsData];

  return (
    <section className="py-16 bg-primary overflow-hidden">
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
            duration: 80,
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
