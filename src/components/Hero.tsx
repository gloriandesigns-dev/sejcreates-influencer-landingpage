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

  // Added tabular-nums to prevent horizontal jittering as digit widths change during the countdown
  return <span ref={ref} className="tabular-nums">{prefix}0{suffix}</span>;
};

const ScrambleText = ({ text }: { text: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  
  // Initialize with scrambled text to prevent the original text from flashing/glitching on load
  const [initialText] = useState(() => 
    text.split("").map(char => char === " " ? " " : letters[Math.floor(Math.random() * letters.length)]).join("")
  );

  useEffect(() => {
    if (inView && ref.current) {
      let iteration = 0;
      const interval = setInterval(() => {
        if (ref.current) {
          ref.current.textContent = text
            .split("")
            .map((letter, index) => {
              if (letter === " ") return " ";
              if (index < iteration) {
                return text[index];
              }
              return letters[Math.floor(Math.random() * letters.length)];
            })
            .join("");
        }
        if (iteration >= text.length) {
          clearInterval(interval);
        }
        iteration += 1 / 3;
      }, 30);
      return () => clearInterval(interval);
    }
  }, [inView, text]);

  return <span ref={ref}>{initialText}</span>;
};

const TypewriterHeading = () => {
  const [text, setText] = useState("");
  const fullText = "Hello";
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let i = 0;
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
    // Adjusted responsive font sizes for smoother scaling and changed min-h to perfectly match the leading
    <h1 ref={ref} className="text-[120px] sm:text-[160px] md:text-[180px] lg:text-[200px] 2xl:text-[240px] leading-[0.85] font-display font-light tracking-tighter mb-8 -ml-2 text-[#cdf578] min-h-[0.85em] whitespace-nowrap">
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        className="inline-block"
      >
        _
      </motion.span>
    </h1>
  );
};

const Hero = () => {
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
          <a href="https://calendly.com/team-sejcurates/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-accentPink relative group transition-colors duration-700">
            Book A Call <ArrowUpRight size={14} className="group-hover:text-accentLime transition-colors duration-700" />
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accentLime group-hover:w-full transition-all duration-700 ease-cinematic"></span>
          </a>
        </div>
      </motion.nav>

      <div className="w-full lg:w-[52%] relative z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-32 pb-24 lg:py-0 min-h-[70vh] lg:min-h-screen">
        
        <motion.div 
          variants={fadeBlurVariants}
          initial="hidden"
          animate="visible"
          className="absolute left-4 md:left-8 top-[65%] -translate-y-1/2 -rotate-90 origin-left text-[9px] uppercase tracking-[0.3em] text-textMuted hidden lg:block whitespace-nowrap"
        >
          Content Strategist . @sejcurates . Digital Strategist
        </motion.div>

        {/* Removed max-w-xl constraint on large screens to prevent flex wrapping/layout shifts */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="w-full max-w-xl lg:max-w-3xl xl:max-w-none mx-auto lg:mx-0 lg:ml-12"
        >
          <motion.div variants={textRiseVariants} className="flex flex-wrap gap-8 md:gap-12 mb-12 md:mb-20">
            <div>
              <p className="text-3xl md:text-4xl font-display font-light mb-2 tracking-tight text-textMain">
                <AnimatedNumber value={27} prefix="" suffix="k+" />
              </p>
              <p className="text-[9px] text-textMuted uppercase tracking-[0.2em]">Followers</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-light mb-2 tracking-tight text-textMain">
                <AnimatedNumber value={5} prefix="" suffix="+" />
              </p>
              <p className="text-[9px] text-textMuted uppercase tracking-[0.2em]">Brands</p>
            </div>
            <div>
              {/* Added whitespace-nowrap to prevent vertical jumpiness if the scramble text tries to wrap */}
              <p className="text-xl sm:text-2xl md:text-3xl font-display font-light mb-2 tracking-tight text-textMain whitespace-nowrap">
                <ScrambleText text="London Business School" />
              </p>
              <p className="text-[9px] text-textMuted uppercase tracking-[0.2em]">'24</p>
            </div>
          </motion.div>

          <motion.div variants={textRiseVariants}>
            <TypewriterHeading />
          </motion.div>
          
          <motion.div variants={textRiseVariants} className="flex items-start gap-4 max-w-[420px]">
            <span className="text-accentPink mt-1">-</span>
            <div>
              <p className="text-lg md:text-xl text-textMain font-light leading-relaxed mb-8">
                It's Sejcurates- shaping stories, strategy, and internet culture!
              </p>
              
              <p className="text-[9px] uppercase tracking-[0.2em] text-textMuted">
                Brand thinker · D2C obsessed · Content native
              </p>
            </div>
          </motion.div>
        </motion.div>

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

      <div className="w-full lg:w-[48%] relative lg:absolute lg:right-0 lg:top-0 h-[60vh] lg:h-screen z-0 overflow-hidden flex items-end justify-end">
        <motion.img 
          initial={{ scale: 1.1, filter: 'blur(20px)', opacity: 0 }}
          animate={{ scale: 1, filter: 'blur(0px)', opacity: 1 }}
          transition={{ duration: 2.8, ease: [0.25, 1, 0.5, 1] }}
          whileHover={{ scale: 1.02, transition: { duration: 8, ease: "linear" } }}
          src="https://www.dropbox.com/scl/fi/h9zbss8aafcdf0w40lgjc/mlgyopbirnyidourb9pm.webp?rlkey=9os4k9en4v6o1wwpvs5iqj019&st=g1llypth&raw=1" 
          alt="Sejcurates Portrait" 
          fetchPriority="high"
          loading="eager"
          className="w-[85%] lg:w-[90%] h-auto max-h-[90vh] object-contain object-bottom absolute bottom-0 right-0"
        />
      </div>

    </section>
  );
};

export default Hero;
