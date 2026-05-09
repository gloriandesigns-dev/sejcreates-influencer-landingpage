import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
  // Ultra-slow cinematic entry animations
  const fadeBlurVariants = {
    hidden: { opacity: 0, filter: 'blur(24px)' },
    visible: { 
      opacity: 1, 
      filter: 'blur(0px)',
      transition: { duration: 2.4, ease: [0.25, 1, 0.5, 1] }
    }
  };

  const textRiseVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.8, ease: [0.25, 1, 0.5, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.4 }
    }
  };

  return (
    <section className="relative min-h-screen w-full bg-primary overflow-hidden flex flex-col lg:flex-row">
      
      {/* Top Navigation - Embedded directly on canvas */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
        className="absolute top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 py-8 text-[10px] md:text-xs uppercase tracking-[0.2em] text-textMuted font-medium z-20"
      >
        <div className="flex gap-8 md:gap-12">
          <a href="#" className="hover:text-accentPink relative group transition-colors duration-700">
            About
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accentPink group-hover:w-full transition-all duration-700 ease-cinematic"></span>
          </a>
          <a href="#" className="hover:text-accentPink relative group transition-colors duration-700">
            Work
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accentPink group-hover:w-full transition-all duration-700 ease-cinematic"></span>
          </a>
          <a href="#" className="hover:text-accentPink relative group transition-colors duration-700">
            Insights
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accentPink group-hover:w-full transition-all duration-700 ease-cinematic"></span>
          </a>
          <a href="#" className="hover:text-accentPink relative group transition-colors duration-700 hidden sm:block">
            Contact
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accentPink group-hover:w-full transition-all duration-700 ease-cinematic"></span>
          </a>
        </div>
        <div>
          <a href="#" className="flex items-center gap-1 hover:text-accentPink relative group transition-colors duration-700">
            Book A Call <ArrowUpRight size={14} className="group-hover:text-accentLime transition-colors duration-700" />
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accentLime group-hover:w-full transition-all duration-700 ease-cinematic"></span>
          </a>
        </div>
      </motion.nav>

      {/* Left Content Block (52%) */}
      <div className="w-full lg:w-[52%] relative z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-32 pb-24 lg:py-0 min-h-[70vh] lg:min-h-screen">
        
        {/* Vertical Label */}
        <motion.div 
          variants={fadeBlurVariants}
          initial="hidden"
          animate="visible"
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 -rotate-90 origin-left text-[9px] uppercase tracking-[0.3em] text-textMuted hidden lg:block"
        >
          Content Strategist
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-xl w-full mx-auto lg:mx-0 lg:ml-12"
        >
          {/* Stats Row */}
          <motion.div variants={textRiseVariants} className="flex gap-12 md:gap-16 mb-12 md:mb-20">
            <div>
              <p className="text-3xl md:text-4xl font-display font-light mb-2 tracking-tight text-textMain">+27k</p>
              <p className="text-[9px] text-textMuted uppercase tracking-[0.2em]">Followers</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-light mb-2 tracking-tight text-textMain">+5</p>
              <p className="text-[9px] text-textMuted uppercase tracking-[0.2em]">Brands</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-light mb-2 tracking-tight text-textMain">LBS</p>
              <p className="text-[9px] text-textMuted uppercase tracking-[0.2em]">'24</p>
            </div>
          </motion.div>

          {/* Hero Heading */}
          <motion.h1 
            variants={textRiseVariants} 
            className="text-[120px] sm:text-[160px] md:text-[200px] lg:text-[240px] leading-[0.85] font-display font-light tracking-tighter mb-8 -ml-2 text-accentPink"
          >
            Hello
          </motion.h1>
          
          {/* Subtext */}
          <motion.div variants={textRiseVariants} className="flex items-start gap-4 max-w-[420px]">
            <span className="text-accentPink mt-1">—</span>
            <div>
              <p className="text-lg md:text-xl text-textMain font-light leading-relaxed mb-8">
                It's Sejcurates shaping stories, strategy, and internet culture
              </p>
              
              {/* Micro Copy */}
              <p className="text-[9px] uppercase tracking-[0.2em] text-textMuted">
                Brand thinker · D2C obsessed · Content native
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="absolute bottom-8 left-8 md:left-12 text-[10px] uppercase tracking-widest text-textMuted hidden lg:flex items-center gap-2"
        >
          <motion.span 
            animate={{ y: [0, 5, 0] }} 
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Scroll slowly ↓
          </motion.span>
        </motion.div>
      </div>

      {/* Right Visual Block (48%) */}
      <div className="w-full lg:w-[48%] relative lg:absolute lg:right-0 lg:top-0 h-[60vh] lg:h-screen z-0 overflow-hidden after:absolute after:inset-0 after:bg-accentPink/10 after:mix-blend-overlay after:pointer-events-none">
        {/* Subtle gradient overlay to blend the image into the background slightly */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-transparent z-10 hidden lg:block w-32"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent z-10 lg:hidden h-32 bottom-0 top-auto"></div>
        
        <motion.img 
          initial={{ scale: 1.1, filter: 'blur(20px)', opacity: 0 }}
          animate={{ scale: 1, filter: 'blur(0px)', opacity: 1 }}
          transition={{ duration: 2.8, ease: [0.25, 1, 0.5, 1] }}
          whileHover={{ scale: 1.02, transition: { duration: 8, ease: "linear" } }}
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop" 
          alt="Sejcurates Portrait" 
          className="absolute inset-0 w-full h-full object-cover object-top lg:object-center"
        />
      </div>

    </section>
  );
};

export default Hero;
