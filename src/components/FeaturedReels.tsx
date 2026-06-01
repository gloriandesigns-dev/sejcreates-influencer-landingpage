import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const featuredData = [
  {
    title: "Factory Exploration: The Production Line",
    video: "https://www.dropbox.com/scl/fi/5tnmfxas1wrsfxbq73vcg/Video-207-1.mp4?rlkey=smy3vv9bctyyn76lbr0ma3aqj&st=59pr0e7x&raw=1",
    link: "https://www.instagram.com/reel/DYMH7ldoVEi/?igsh=MWhrbXdxM2o5M25xaA=="
  },
  {
    title: "Behind the Scenes: Material Sourcing",
    video: "https://www.dropbox.com/scl/fi/6c4qowggrd5uklp20xgia/sejcurates_1773839488_3855338724758503494_71849440928.mp4?rlkey=8ir4pgaa5wipp7o2vzawvc632&st=ddms973q&raw=1",
    link: "https://www.instagram.com/reel/DWA6iTKCcBG/?igsh=aW16anExb3VpcGZp"
  },
  {
    title: "Craftsmanship & Assembly Process",
    video: "https://www.dropbox.com/scl/fi/3yu72f8w5flcb73exqpyd/sejcurates_1773320266_3851211492628671418_71849440928-1.mp4?rlkey=j4662g1md9kx3fvu3oosk8419&st=m6hif9hw&raw=1",
    link: "https://www.instagram.com/reel/DVyQHKtCKu6/?igsh=NDdlNjZ6djNzaGxw"
  },
  {
    title: "Warehouse & Distribution Logistics",
    video: "https://www.dropbox.com/scl/fi/vtzvvs5u8ov06tparecfu/Video-144-1.mp4?rlkey=xzg23waxe8rvgqjtg4kznv063&st=o5cjbtb7&raw=1",
    link: "https://www.instagram.com/reel/DU0ahhpidOi/?igsh=MWI2eHZrdTUxaXl3aQ=="
  }
];

const FeaturedCard = ({ item, index }: { item: typeof featuredData[0], index: number }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  
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
    <motion.a 
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.2, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
      className="group cursor-pointer flex flex-col gap-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
    >
      <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-secondary shadow-lg">
        <video 
          ref={videoRef}
          src={item.video} 
          loop
          muted
          playsInline
          preload="metadata"
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-accentPink/0 group-hover:bg-accentPink/20 transition-colors duration-700 pointer-events-none">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-700">
            <Play size={20} className="ml-1" fill="currentColor" />
          </div>
        </div>
      </div>
      <h3 className="text-sm font-display font-light leading-snug group-hover:text-accentPink transition-colors">
        {item.title}
      </h3>
    </motion.a>
  );
};

const FeaturedReels = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % featuredData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="featured-reels-section" className="py-8 md:py-12 px-6 md:px-12 lg:px-24 bg-primary text-textMain scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col mb-10 gap-4">
          <motion.div className="max-w-3xl">
            <p className="text-[10px] tracking-[0.2em] text-textMuted mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accentPink block"></span> Factory and founder Collaborations
            </p>
            <h2 className="text-4xl md:text-6xl font-display font-light tracking-tight mb-4">
              Factory and founder Collaborations
            </h2>
          </motion.div>
        </div>

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredData.map((item, idx) => (
            <FeaturedCard key={idx} item={item} index={idx} />
          ))}
        </div>

        <div className="md:hidden relative h-[550px] mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <FeaturedCard item={featuredData[activeIndex]} index={0} />
            </motion.div>
          </AnimatePresence>

          <button 
            onClick={() => setActiveIndex((prev) => (prev - 1 + featuredData.length) % featuredData.length)}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-accentLime flex items-center justify-center z-20 shadow-lg border border-white/40"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => setActiveIndex((prev) => (prev + 1) % featuredData.length)}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-accentLime flex items-center justify-center z-20 shadow-lg border border-white/40"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <motion.div className="mt-8 flex justify-center">
          <a 
            href="mailto:team@sejcurates.com?subject=Collaborate%20for%20Factory%20Visits" 
            className="relative overflow-hidden bg-accentPink text-white px-10 py-5 font-medium tracking-widest text-xs group rounded-full border border-accentPink hover:border-accentPink transition-all duration-500 w-full md:w-auto text-center flex items-center justify-center shadow-lg"
          >
            <span className="relative z-10 group-hover:text-accentPink transition-colors duration-500">
              Collaborate for Factory Visits
            </span>
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-cinematic origin-left"></div>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedReels;
