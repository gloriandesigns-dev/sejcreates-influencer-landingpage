import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const desktopFeatured = [
  {
    title: "Factory Exploration: The Production Line",
    video: "https://www.dropbox.com/scl/fi/wr3goezxpx5ra9xk1hb82/sejcurates_1773839488_3855338724758503494_71849440928.webm?rlkey=jr8s7hdz2ubccq6r5xg8llks8&st=zu66nl4u&raw=1",
    link: "https://www.instagram.com/reel/DWA6iTKCcBG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "Behind the Scenes: Material Sourcing",
    video: "https://www.dropbox.com/scl/fi/oyltefevif2wz3l6jvn2l/sejcurates_1773320266_3851211492628671418_71849440928-1.webm?rlkey=16mztyo4xn663ox4xifzsz5cc&st=1yr4l5zg&raw=1",
    link: "https://www.instagram.com/reel/DVyQHKtCKu6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "Craftsmanship & Assembly Process",
    video: "https://www.dropbox.com/scl/fi/gb1t519iopru0tobx77ok/Video-144-1.webm?rlkey=jzdrugrbe15whe6g5dnljjk0d&st=k3gljmns&raw=1",
    link: "https://www.instagram.com/reel/DU0ahhpidOi/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    title: "Warehouse & Distribution Logistics",
    video: "https://www.dropbox.com/scl/fi/z6uztqs3el6tmcgkd9tww/Video-207-1.webm?rlkey=j43wg4ou8bpl1ghq3bfwu6q8k&st=fzfetktv&raw=1",
    link: "https://www.instagram.com/reel/DYMH7ldoVEi/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  }
];

const mobileFeatured = [
  { img: "https://images.dualite.app/4befb7e4-f16f-4dbc-8edf-a229d8b20017/imgi_17_654027018_17900939904392929_7604126005028068104_n-5b6656a1-816c-47bc-8d9e-da2cff50e273.webp", link: "https://www.instagram.com/reel/DWA6iTKCcBG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "https://images.dualite.app/4befb7e4-f16f-4dbc-8edf-a229d8b20017/imgi_14_671197014_17909723031392929_4991029443080502674_n-bc689b74-7ec2-46cc-b032-98437cd2e195.webp", link: "https://www.instagram.com/reel/DYReHLUo0WK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "https://images.dualite.app/4befb7e4-f16f-4dbc-8edf-a229d8b20017/imgi_33_651461322_17899872642392929_7123022516344236738_n-d9ef56ba-7a5c-4ecb-9f3a-597ee1647d88.webp", link: "https://www.instagram.com/reel/DVyQHKtCKu6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "https://images.dualite.app/4befb7e4-f16f-4dbc-8edf-a229d8b20017/imgi_39_629202515_17896356102392929_7594197483807175104_n-90011609-e665-4229-931f-c052d0f76402.webp", link: "https://www.instagram.com/reel/DU0ahhpidOi/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" }
];

const FeaturedCard = ({ item, index }: { item: any, index: number }) => {
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
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 1.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer flex flex-col"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
    >
      <div className="relative w-full aspect-[9/16] rounded-[2rem] overflow-hidden bg-secondary shadow-md">
        {item.video ? (
          <video 
            ref={videoRef}
            src={item.video} 
            loop
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[2000ms] ease-cinematic"
          />
        ) : (
          <img 
            src={item.img} 
            alt="Reel Preview" 
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[2000ms] ease-cinematic"
          />
        )}
        
        {item.title && (
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-accentPink/80 via-accentPink/20 to-transparent p-8 pt-20 pointer-events-none">
            <h3 className="text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase leading-relaxed">
              {item.title}
            </h3>
          </div>
        )}

        <div className="absolute inset-0 flex items-center justify-center bg-accentPink/0 group-hover:bg-accentPink/10 transition-colors duration-1000 pointer-events-none">
          <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-xl border border-white/40 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-700">
            <Play size={18} className="ml-1" fill="currentColor" />
          </div>
        </div>
      </div>
    </motion.a>
  );
};

const FeaturedReels = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + mobileFeatured.length) % mobileFeatured.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % mobileFeatured.length);
  };

  return (
    <section id="featured-reels-section" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-primary text-textMain scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col mb-16 gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <p className="text-[10px] tracking-[0.3em] text-textMuted mb-4 flex items-center gap-2 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accentPink block"></span> Factory Exploration Frames
            </p>
            <h2 className="text-4xl md:text-6xl font-display font-light tracking-tight mb-4 leading-tight uppercase">
              Factory and founder Collaborations
            </h2>
          </motion.div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-10">
          {desktopFeatured.map((item, idx) => (
            <FeaturedCard key={idx} item={item} index={idx} />
          ))}
        </div>

        {/* Mobile Carousel with Navigation Arrows */}
        <div className="md:hidden relative h-[580px] mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ x: 20 }}
              animate={{ x: 0 }}
              exit={{ x: -20 }}
              transition={{ duration: 0.6, ease: "linear" }}
              className="absolute inset-0"
            >
              <FeaturedCard item={mobileFeatured[activeIndex]} index={0} />
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Arrows at the bottom of the card area */}
          <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-6 z-20">
            <button 
              onClick={handlePrev}
              aria-label="Previous card"
              className="w-12 h-12 rounded-full bg-white border border-accentPink/10 flex items-center justify-center shadow-lg active:scale-90 transition-transform"
            >
              <ChevronLeft size={20} className="text-textMain" />
            </button>
            <button 
              onClick={handleNext}
              aria-label="Next card"
              className="w-12 h-12 rounded-full bg-white border border-accentPink/10 flex items-center justify-center shadow-lg active:scale-90 transition-transform"
            >
              <ChevronRight size={20} className="text-textMain" />
            </button>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex justify-center"
        >
          <a 
            href="mailto:team@sejcurates.com?subject=Collaborate%20for%20Factory%20Visits" 
            className="relative overflow-hidden bg-accentPink text-white px-12 py-5 font-bold tracking-[0.2em] text-sm md:text-base uppercase group rounded-full border border-accentPink transition-all duration-700 w-full md:w-auto text-center flex items-center justify-center shadow-xl"
          >
            <span className="relative z-10 group-hover:text-accentPink transition-colors duration-700 max-w-[200px] md:max-w-none leading-tight">
              Collaborate for <br className="md:hidden" /> Factory Visits
            </span>
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-cinematic origin-left"></div>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedReels;
