import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

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

const FeaturedCard = ({ item, idx }: { item: typeof featuredData[0], idx: number }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play().catch((error) => {
        console.warn("Video playback or unmuting failed on hover/touch:", error);
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
    <motion.a 
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
        visible: { 
          opacity: 1, 
          y: 0, 
          filter: 'blur(0px)',
          transition: { duration: 1.5, delay: idx * 0.15, ease: [0.25, 1, 0.5, 1] } 
        }
      }}
      className="group cursor-pointer flex flex-col gap-4 block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
      onTouchCancel={handleMouseLeave}
    >
      <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden bg-secondary">
        <video 
          ref={videoRef}
          src={item.video} 
          loop
          muted={true}
          playsInline
          preload="auto"
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-cinematic"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-accentPink/0 group-hover:bg-accentPink/20 transition-colors duration-700 pointer-events-none">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-700 ease-cinematic">
            <Play size={20} className="ml-1" fill="currentColor" />
          </div>
        </div>
      </div>
      
      <div className="flex flex-col px-1">
        <h3 className="text-base md:text-lg font-display font-light leading-snug group-hover:text-accentPink transition-colors duration-500">
          {item.title}
        </h3>
      </div>
    </motion.a>
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
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-primary text-textMain">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col mb-16 gap-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariants}
            className="max-w-3xl"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-textMuted mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accentPink block"></span> FACTORY EXPLORATION FRAMES
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tight mb-6">
              Where It's Actually Made
            </h2>
            <p className="text-textMuted font-light leading-relaxed max-w-xl">
              Exploring factories, warehouses, and workshops, covering the processes and stories behind the products you love!
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredData.map((item, idx) => (
            <FeaturedCard key={idx} item={item} idx={idx} />
          ))}
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUpVariants}
          className="mt-20 flex justify-center"
        >
          <a 
            href="mailto:team@sejcurates.com?subject=I%20would%20love%20to%20collaborate&body=Hey%20Sejal%2C%20I%20would%20love%20to%20collaborate%20with%20you." 
            className="relative overflow-hidden bg-accentPink text-white px-10 py-5 font-medium uppercase tracking-widest text-sm group rounded-full border border-transparent group-hover:border-accentPink transition-colors duration-500"
          >
            <span className="relative z-10 group-hover:text-accentPink transition-colors duration-500">
              Collaborate with me
            </span>
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-cinematic origin-left rounded-full"></div>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedReels;
