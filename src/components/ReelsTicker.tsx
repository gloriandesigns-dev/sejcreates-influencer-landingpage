import React, { useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { Instagram, Youtube } from 'lucide-react';

const desktopReels = [
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
    video: "https://www.dropbox.com/scl/fi/y0dnu1hmyir23nn95mbx2/sejcurates_1778159040_3891800077154469281_71849440928.webm?rlkey=iznh31nsdz40fvva6k0jkjfd4&st=125cjftp&raw=1"
  },
  { 
    title: "Digital Ecosystems", 
    video: "https://www.dropbox.com/scl/fi/wb7w5qu1cxxqwhnx7c0t6/sejcurates_1759931266_3738891360318036890_71849440928.webm?rlkey=gz809ajpdkl4aoemo1sxwuesu&st=4elvaxag&raw=1"
  }
];

const mobileReels = [
  { img: "https://qlhmrkvnkysnjtpvlynt.supabase.co/storage/v1/object/public/Images/imgi_18_718418916_17913483636392929_4731115862509604228_n.webp", link: "https://www.instagram.com/reel/DZNTkvbp7mJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "https://qlhmrkvnkysnjtpvlynt.supabase.co/storage/v1/object/public/Images/imgi_19_709286063_17912318826392929_3426892429119588986_n.webp", link: "https://www.instagram.com/reel/DY4nuInI6lb/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "https://qlhmrkvnkysnjtpvlynt.supabase.co/storage/v1/object/public/Images/imgi_20_702677083_17910523242392929_9154083358783962145_n.webp", link: "https://www.instagram.com/reel/DYeOGWyooBs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "https://qlhmrkvnkysnjtpvlynt.supabase.co/storage/v1/object/public/Images/imgi_21_702800873_17910541449392929_2693384120650671716_n.webp", link: "https://www.instagram.com/reel/DYXIKx6I4kB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "https://qlhmrkvnkysnjtpvlynt.supabase.co/storage/v1/object/public/Images/imgi_23_685130968_2003457336969762_7804957237640819462_n.webp", link: "https://www.instagram.com/reel/DX_9U22Ilqs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "https://qlhmrkvnkysnjtpvlynt.supabase.co/storage/v1/object/public/Images/imgi_24_688732367_4488583214756608_2996299192064223566_n.webp", link: "https://www.instagram.com/reel/DX9S9PyoPeN/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "https://qlhmrkvnkysnjtpvlynt.supabase.co/storage/v1/object/public/Images/imgi_25_685877103_992387286474405_3826993875710135673_n.webp", link: "https://www.instagram.com/reel/DX3hTn0IbYj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "https://qlhmrkvnkysnjtpvlynt.supabase.co/storage/v1/object/public/Images/imgi_26_684144685_957507396861597_7902125977210357239_n.webp", link: "https://www.instagram.com/reel/DXt0XHwCP8Y/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "https://qlhmrkvnkysnjtpvlynt.supabase.co/storage/v1/object/public/Images/imgi_29_671209569_17906504265392929_2057789499144884250_n.webp", link: "https://www.instagram.com/reel/DXb5B1ECMPd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "https://qlhmrkvnkysnjtpvlynt.supabase.co/storage/v1/object/public/Images/imgi_30_669877649_17905125102392929_875770764005633473_n.webp", link: "https://www.instagram.com/reel/DXHMjYbiMOP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "https://qlhmrkvnkysnjtpvlynt.supabase.co/storage/v1/object/public/Images/imgi_31_655954164_17902636710392929_4339815765637745422_n.webp", link: "https://www.instagram.com/reel/DWboewwiWAd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "https://qlhmrkvnkysnjtpvlynt.supabase.co/storage/v1/object/public/Images/imgi_32_657745002_1450538590188241_6500124573662560981_n.webp", link: "https://www.instagram.com/reel/DWTwBB4CKWH/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "https://qlhmrkvnkysnjtpvlynt.supabase.co/storage/v1/object/public/Images/imgi_34_649046437_930775246006584_8662392033325096966_n.webp", link: "https://www.instagram.com/reel/DVn8SssCXU4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "https://qlhmrkvnkysnjtpvlynt.supabase.co/storage/v1/object/public/Images/imgi_38_629239342_1247934043966506_7564300663645290085_n.webp", link: "https://www.instagram.com/reel/DU5mHatifkC/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "https://qlhmrkvnkysnjtpvlynt.supabase.co/storage/v1/object/public/Images/imgi_40_627531550_1462974512211583_6100548777470677902_n.webp", link: "https://www.instagram.com/reel/DUntLv9CfUB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { img: "https://qlhmrkvnkysnjtpvlynt.supabase.co/storage/v1/object/public/Images/imgi_43_626214869_17894856237392929_215426223195820100_n.webp", link: "https://www.instagram.com/reel/DUVoHJPiANs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" }
];

const ReelCard = ({ item }: { item: any }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const instagramLink = item.link || "https://www.instagram.com/sejcurates?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

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
      {item.video ? (
        <video 
          ref={videoRef}
          src={item.video}
          loop
          muted={true}
          playsInline
          preload="auto"
          className="w-full h-full object-cover group-hover/card:scale-105 transition-all duration-[2000ms] ease-cinematic pointer-events-none"
        />
      ) : (
        <img 
          src={item.img} 
          alt="Reel Preview" 
          className="w-full h-full object-cover group-hover/card:scale-105 transition-all duration-[2000ms] ease-cinematic"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover/card:opacity-80 transition-opacity duration-700 pointer-events-none" />
      {item.title && (
        <div className="absolute bottom-6 left-6 right-6 pointer-events-none">
          <p className="text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">{item.title}</p>
        </div>
      )}
    </a>
  );
};

const ReelsTicker = () => {
  const x = useMotionValue(0);

  return (
    <section id="reels-ticker-section" className="pt-20 pb-12 md:pt-24 md:pb-16 bg-primary overflow-hidden scroll-mt-20 relative">
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
          className="text-4xl md:text-5xl lg:text-6xl font-display font-light text-textMain leading-tight uppercase"
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
        {/* Desktop Ticker */}
        <motion.div 
          className="hidden md:flex gap-6 px-6"
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
          {[...desktopReels, ...desktopReels, ...desktopReels].map((item, idx) => (
            <ReelCard key={idx} item={item} />
          ))}
        </motion.div>

        {/* Mobile/Tablet Ticker */}
        <motion.div 
          className="flex md:hidden gap-6 px-6"
          drag="x"
          style={{ x }}
          dragConstraints={{ left: -4000, right: 0 }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 80,
            repeat: Infinity,
          }}
        >
          {[...mobileReels, ...mobileReels].map((item, idx) => (
            <ReelCard key={idx} item={item} />
          ))}
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 flex justify-center px-6"
      >
        <a 
          href="mailto:team@sejcurates.com?subject=Collaborate%20for%20Content%20Creation" 
          className="relative overflow-hidden bg-accentLime text-textMain px-12 py-5 font-bold tracking-[0.2em] text-sm md:text-base uppercase group rounded-full border border-accentLime transition-all duration-700 w-full md:w-auto text-center flex items-center justify-center shadow-xl"
        >
          <span className="relative z-10 group-hover:text-accentPink transition-colors duration-700">
            Collaborate for Content Creation
          </span>
          <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-cinematic origin-left"></div>
        </a>
      </motion.div>

      {/* Social Icons at Bottom-Right */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-12 flex items-center gap-6 z-20">
        <a 
          href="https://www.instagram.com/sejcurates" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#CEF679] hover:scale-110 transition-transform duration-500"
        >
          <Instagram size={24} strokeWidth={1.5} />
        </a>
        <a 
          href="https://www.youtube.com/@sejcurates" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#CEF679] hover:scale-110 transition-transform duration-500"
        >
          <Youtube size={24} strokeWidth={1.5} />
        </a>
      </div>
    </section>
  );
};

export default ReelsTicker;
