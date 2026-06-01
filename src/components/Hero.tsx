import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const AnimatedNumber = ({ value, prefix = "", suffix = "", decimals = 0 }: { value: number, prefix?: string, suffix?: string, decimals?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, value, {
        duration: 2.5,
        ease: [0.25, 1, 0.5, 1],
        onUpdate(v) {
          if (ref.current) {
            ref.current.textContent = `${prefix}${v.toFixed(decimals)}${suffix}`;
          }
        }
      });
      return () => controls.stop();
    }
  }, [inView, value, prefix, suffix, decimals]);

  return <span ref={ref} className="tabular-nums">{prefix}0{suffix}</span>;
};

const ScrambleText = ({ text }: { text: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  
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

  return <span ref={ref} className="whitespace-nowrap">{initialText}</span>;
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
    <h1 ref={ref} className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] 2xl:text-[240px] leading-[0.85] font-display font-light tracking-tighter mb-8 -ml-2 text-[#cdf578] min-h-[0.85em] whitespace-nowrap">
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

  return (
    <section className="relative min-h-screen w-full bg-primary overflow-hidden flex flex-col lg:flex-row pt-20 lg:pt-0">
      <div className="w-full lg:w-[52%] relative z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-12 pb-4 lg:py-0 min-h-[45vh] lg:min-h-screen">
        <motion.div 
          variants={fadeBlurVariants}
          initial="hidden"
          animate="visible"
          className="absolute left-4 md:left-8 top-[75%] -translate-y-1/2 -rotate-90 origin-left text-[9px] tracking-[0.3em] text-textMuted hidden lg:block whitespace-nowrap"
        >
          Content Strategist . @sejcurates . Digital Strategist
        </motion.div>

        <motion.div initial="hidden" animate="visible" className="w-full max-w-xl lg:max-w-3xl xl:max-w-none mx-auto lg:mx-0 lg:ml-12">
          <motion.div variants={textRiseVariants} className="flex flex-wrap gap-8 md:gap-12 mb-8 md:mb-16">
            <div>
              <p className="text-3xl md:text-4xl font-display font-light mb-2 tracking-tight text-textMain">
                <AnimatedNumber value={50.2} prefix="" suffix="k+" decimals={1} />
              </p>
              <p className="text-[9px] text-textMuted tracking-[0.2em]">Followers</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-light mb-2 tracking-tight text-textMain">
                <AnimatedNumber value={15} prefix="" suffix="+" />
              </p>
              <p className="text-[9px] text-textMuted tracking-[0.2em]">Brands</p>
            </div>
            <div className="hidden sm:block">
              <p className="text-xl sm:text-2xl md:text-3xl font-display font-light mb-2 tracking-tight text-textMain whitespace-nowrap">
                <ScrambleText text="London Business School" />
              </p>
              <p className="text-[9px] text-textMuted tracking-[0.2em]">'24</p>
            </div>
          </motion.div>

          <motion.div variants={textRiseVariants}>
            <TypewriterHeading />
          </motion.div>
          
          <motion.div variants={textRiseVariants} className="flex flex-col gap-6 max-w-[420px]">
            <div className="flex items-start gap-4">
              <span className="text-accentPink mt-1">-</span>
              <p className="text-lg md:text-xl text-textMain font-light leading-relaxed">
                It's Sejcurates- shaping stories, strategy, and internet culture!
              </p>
            </div>
            <p className="text-[10px] tracking-[0.4em] text-accentPink font-bold hidden lg:block">
              brand thinker · D2C obsessed · content native
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="w-full lg:w-[48%] relative h-[50vh] md:h-[65vh] lg:h-screen z-20 flex items-end justify-center">
        <motion.img 
          initial={{ scale: 1.1, filter: 'blur(20px)', opacity: 0 }}
          animate={{ scale: 1, filter: 'blur(0px)', opacity: 1 }}
          transition={{ duration: 2.8, ease: [0.25, 1, 0.5, 1] }}
          whileHover={{ scale: 1.02, transition: { duration: 8, ease: "linear" } }}
          src="https://www.dropbox.com/scl/fi/h9zbss8aafcdf0w40lgjc/mlgyopbirnyidourb9pm.webp?rlkey=9os4k9en4v6o1wwpvs5iqj019&st=g1llypth&raw=1" 
          alt="Sejcurates Portrait Desktop" 
          fetchPriority="high"
          loading="eager"
          className="hidden lg:block w-[90%] h-auto max-h-[100vh] object-contain object-bottom absolute bottom-0 right-[8%] z-30 pointer-events-none"
        />
        
        <div className="block lg:hidden w-full h-full relative flex items-end justify-center overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1, filter: 'blur(20px)', opacity: 0 }}
            animate={{ scale: 1, filter: 'blur(0px)', opacity: 1 }}
            transition={{ duration: 2.8, ease: [0.25, 1, 0.5, 1] }}
            src="https://www.dropbox.com/scl/fi/w5vlehlw94lqa7fei2fpl/mlgyopbirnyidourb9pm-1.webp?rlkey=oqmy5zz3s6dleko83pgaoawr2&st=0lo28tp0&raw=1" 
            alt="Sejcurates Portrait Mobile" 
            fetchPriority="high"
            loading="eager"
            className="w-full md:w-[85%] h-full object-contain object-bottom relative z-30 pointer-events-none mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
