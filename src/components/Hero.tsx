import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const AnimatedNumber = ({ value, prefix = "", suffix = "", decimals = 0 }: { value: number, prefix?: string, suffix?: string, decimals?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView && ref.current) {
      const controls = animate(0, value, {
        duration: 3,
        ease: [0.22, 1, 0.36, 1],
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
  const inView = useInView(ref, { once: true, margin: "-100px" });
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
        iteration += 1 / 4;
      }, 40);
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
        }, 180);
        return () => clearInterval(timer);
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [inView]);

  return (
    <h1 ref={ref} className="text-[72px] sm:text-[110px] md:text-[150px] lg:text-[200px] 2xl:text-[240px] leading-[0.85] font-display font-light tracking-tighter mb-6 -ml-2 text-[#cdf578] min-h-[0.85em] whitespace-nowrap">
      {text}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
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
      transition: { duration: 2.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const textRiseVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 2, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative min-h-screen w-full bg-primary overflow-hidden flex flex-col lg:flex-row pt-12 lg:pt-0">
      <div className="w-full lg:w-[52%] relative z-10 flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-8 pb-4 lg:py-0 min-h-[40vh] lg:min-h-screen">
        <motion.div 
          variants={fadeBlurVariants}
          initial="hidden"
          animate="visible"
          className="absolute left-4 md:left-8 top-[75%] -translate-y-1/2 -rotate-90 origin-left text-[9px] tracking-[0.3em] text-textMuted hidden lg:block whitespace-nowrap uppercase"
        >
          Content Strategist . @sejcurates . Digital Strategist
        </motion.div>

        <motion.div initial="hidden" animate="visible" className="w-full max-w-xl lg:max-w-3xl xl:max-w-none mx-auto lg:mx-0 lg:ml-12">
          <motion.div variants={textRiseVariants} className="flex flex-wrap gap-6 md:gap-12 mb-8 md:mb-16">
            <div>
              <p className="text-3xl md:text-4xl font-display font-light mb-1 tracking-tight text-textMain">
                <AnimatedNumber value={50.2} prefix="" suffix="k+" decimals={1} />
              </p>
              <p className="text-[8px] md:text-[9px] text-textMuted tracking-[0.2em] uppercase">Followers</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-light mb-1 tracking-tight text-textMain">
                <AnimatedNumber value={15} prefix="" suffix="+" />
              </p>
              <p className="text-[8px] md:text-[9px] text-textMuted tracking-[0.2em] uppercase">Brands</p>
            </div>
            <div className="hidden sm:block">
              <p className="text-xl sm:text-2xl md:text-3xl font-display font-light mb-1 tracking-tight text-textMain whitespace-nowrap">
                <ScrambleText text="London Business School" />
              </p>
              <p className="text-[8px] md:text-[9px] text-textMuted tracking-[0.2em] uppercase">'24</p>
            </div>
          </motion.div>

          <motion.div variants={textRiseVariants}>
            <TypewriterHeading />
          </motion.div>
          
          <motion.div variants={textRiseVariants} className="flex flex-col gap-5 max-w-[420px]">
            <div className="flex items-start gap-4">
              <span className="text-accentPink mt-1.5">-</span>
              <p className="text-base md:text-lg lg:text-xl text-textMain font-light leading-relaxed">
                It's Sejcurates- shaping stories, strategy, and internet culture!
              </p>
            </div>
            <p className="text-[9px] tracking-[0.4em] text-accentPink font-bold hidden lg:block uppercase">
              brand thinker · D2C obsessed · content native
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="w-full lg:w-[48%] relative h-[55vh] md:h-[65vh] lg:h-screen z-20 flex items-end justify-center">
        <motion.img 
          initial={{ scale: 1.05, filter: 'blur(20px)', opacity: 0 }}
          animate={{ scale: 1, filter: 'blur(0px)', opacity: 1 }}
          transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.02, transition: { duration: 10, ease: "linear" } }}
          src="https://www.dropbox.com/scl/fi/h9zbss8aafcdf0w40lgjc/mlgyopbirnyidourb9pm.webp?rlkey=9os4k9en4v6o1wwpvs5iqj019&st=g1llypth&raw=1" 
          alt="Sejcurates Portrait Desktop" 
          fetchPriority="high"
          loading="eager"
          className="hidden lg:block w-[88%] h-auto max-h-[100vh] object-contain object-bottom absolute bottom-0 right-[8%] z-30 pointer-events-none"
        />
        
        <div className="block lg:hidden w-full h-full relative flex items-end justify-center overflow-hidden">
          <motion.img 
            initial={{ scale: 1.05, filter: 'blur(20px)', opacity: 0 }}
            animate={{ scale: 1, filter: 'blur(0px)', opacity: 1 }}
            transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }}
            src="https://images.dualite.app/4befb7e4-f16f-4dbc-8edf-a229d8b20017/mlgyopbirnyidourb9pm_1-bd4b91ec-1900-4532-b0ce-2c2107c480c3.webp" 
            alt="Sejcurates Portrait Mobile" 
            fetchPriority="high"
            loading="eager"
            className="w-full md:w-[95%] h-full object-contain object-bottom relative z-30 pointer-events-none mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
