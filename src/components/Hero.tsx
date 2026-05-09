import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const AnimatedNumber = ({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: [0.25, 1, 0.5, 1],
        onUpdate(v) {
          if (ref.current) {
            ref.current.textContent = `${prefix}${Math.round(v)}${suffix}`;
          }
        }
      });
      return () => controls.stop();
    }
  }, [inView, value, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
};

const ScrambleText = ({ text }: { text: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    if (inView && ref.current) {
      let iteration = 0;
      const interval = setInterval(() => {
        if (ref.current) {
          ref.current.textContent = text
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");
        }
        if (iteration >= text.length) {
          clearInterval(interval);
        }
        iteration += 1 / 4;
      }, 40);
      return () => clearInterval(interval);
    }
  }, [inView, text]);

  return <span ref={ref}>{text}</span>;
};

const TypewriterHeading = () => {
  const [text, setText] = useState("");
  const fullText = "Hello";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let i = 0;
      // Small delay before typing starts to sync with the section reveal
      const timeout = setTimeout(() => {
        const timer = setInterval(() => {
          setText(fullText.slice(0, i + 1));
          i++;
          if (i >= fullText.length) {
            clearInterval(timer);
          }
        }, 200);
        return () => clearInterval(timer);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [inView]);

  return (
    <h1 ref={ref} className="text-[120px] sm:text-[160px] md:text-[200px] lg:text-[240px] leading-[0.85] font-display font-light tracking-tighter mb-8 -ml-2 text-accentPink">
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
      >
        _
      </motion.span>
    </h1>
  );
};

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
              <p className="text-3xl md:text-4xl font-display font-light mb-2 tracking-tight text-textMain">
                <AnimatedNumber value={27} prefix="+" suffix="k" />
              </p>
              <p className="text-[9px] text-textMuted uppercase tracking-[0.2em]">Followers</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-light mb-2 tracking-tight text-textMain">
                <AnimatedNumber value={5} prefix="+" />
              </p>
              <p className="text-[9px] text-textMuted uppercase tracking-[0.2em]">Brands</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-light mb-2 tracking-tight text-textMain">
                <ScrambleText text="LBS" />
              </p>
              <p className="text-[9px] text-textMuted uppercase tracking-[0.2em]">'24</p>
            </div>
          </motion.div>

          {/* Hero Heading */}
          <motion.div variants={textRiseVariants}>
            <TypewriterHeading />
          </motion.div>
          
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
      <div className="w-full lg:w-[48%] relative lg:absolute lg:right-0 lg:top-0 h-[60vh] lg:h-screen z-0 overflow-hidden flex items-end justify-end">
        <motion.img 
          initial={{ scale: 1.1, filter: 'blur(20px)', opacity: 0 }}
          animate={{ scale: 1, filter: 'blur(0px)', opacity: 1 }}
          transition={{ duration: 2.8, ease: [0.25, 1, 0.5, 1] }}
          whileHover={{ scale: 1.02, transition: { duration: 8, ease: "linear" } }}
          src="https://www.dropbox.com/scl/fi/h9zbss8aafcdf0w40lgjc/mlgyopbirnyidourb9pm.webp?rlkey=9os4k9en4v6o1wwpvs5iqj019&st=g1llypth&raw=1" 
          alt="Sejcurates Portrait" 
          className="w-[85%] lg:w-[90%] h-auto max-h-[90vh] object-contain object-bottom absolute bottom-0 right-0"
        />
      </div>

    </section>
  );
};

export default Hero;
