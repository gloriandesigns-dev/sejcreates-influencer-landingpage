import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, animate, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import ConnectModal from './ConnectModal';

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

  return <span ref={ref} className="uppercase whitespace-nowrap">{initialText}</span>;
};

const TypewriterHeading = () => {
  const [text, setText] = useState("");
  const fullText = "HELLO";
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
    <h1 ref={ref} className="text-[100px] sm:text-[140px] md:text-[180px] lg:text-[200px] 2xl:text-[240px] leading-[0.85] font-display font-light tracking-tighter mb-8 -ml-2 text-[#cdf578] min-h-[0.85em] whitespace-nowrap uppercase">
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

const NavDropdown = ({ title, items }: { title: string, items: { label: string, targetId: string }[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 hover:text-accentPink transition-colors duration-700 py-2 uppercase">
        {title} <ChevronDown size={10} className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 w-48 bg-white/80 backdrop-blur-xl border border-accentPink/10 rounded-xl shadow-xl p-2 z-50"
          >
            {items.map((item, idx) => (
              <button 
                key={idx} 
                onClick={() => scrollToSection(item.targetId)}
                className="block w-full text-left px-4 py-3 text-[10px] uppercase tracking-widest hover:bg-accentLime rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  
  const workItems = [
    { label: "B2B", targetId: "experience-section" },
    { label: "D2C", targetId: "featured-reels-section" },
    { label: "Content Creation", targetId: "reels-ticker-section" }
  ];

  const contactItems = [
    { label: "B2B", targetId: "cta-section" },
    { label: "D2C", targetId: "cta-section" },
    { label: "Content Creation", targetId: "cta-section" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

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

  const mailtoLink = "mailto:team@sejcurates.com?subject=I%20would%20love%20to%20collaborate&body=Hey%20Sejal%2C%20I%20would%20love%20to%20collaborate%20with%20you.";

  return (
    <section className="relative min-h-screen w-full bg-primary overflow-hidden flex flex-col lg:flex-row">
      <ConnectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-xl z-[60] lg:hidden"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-[85%] bg-white/95 backdrop-blur-2xl z-[70] lg:hidden p-8 flex flex-col gap-8"
            >
              <div className="flex justify-between items-center mb-8">
                <div className="w-10 h-10 rounded-full bg-accentLime flex items-center justify-center">
                  <span className="font-display font-bold text-xs">S.</span>
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-3 bg-black/5 rounded-full">
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex flex-col gap-6 overflow-y-auto">
                <button onClick={() => scrollToSection('about-section')} className="text-left text-3xl font-display font-light tracking-tighter uppercase hover:text-accentPink transition-colors">ABOUT</button>
                
                <div>
                  <button 
                    onClick={() => setOpenMobileDropdown(openMobileDropdown === 'WORK' ? null : 'WORK')}
                    className="flex items-center justify-between w-full text-3xl font-display font-light tracking-tighter uppercase hover:text-accentPink transition-colors"
                  >
                    WORK <ChevronDown size={20} className={`transition-transform ${openMobileDropdown === 'WORK' ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openMobileDropdown === 'WORK' && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4 mt-4 flex flex-col gap-4 border-l border-accentPink/20"
                      >
                        {workItems.map(item => (
                          <button key={item.label} onClick={() => scrollToSection(item.targetId)} className="text-left text-lg uppercase tracking-widest text-textMuted">{item.label}</button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button onClick={() => scrollToSection('reels-ticker-section')} className="text-left text-3xl font-display font-light tracking-tighter uppercase hover:text-accentPink transition-colors">INSIGHTS</button>
                <button onClick={() => scrollToSection('recognition-section')} className="text-left text-3xl font-display font-light tracking-tighter uppercase hover:text-accentPink transition-colors">RECOGNITION</button>

                <div>
                  <button 
                    onClick={() => setOpenMobileDropdown(openMobileDropdown === 'CONTACT' ? null : 'CONTACT')}
                    className="flex items-center justify-between w-full text-3xl font-display font-light tracking-tighter uppercase hover:text-accentPink transition-colors"
                  >
                    CONTACT <ChevronDown size={20} className={`transition-transform ${openMobileDropdown === 'CONTACT' ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openMobileDropdown === 'CONTACT' && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden pl-4 mt-4 flex flex-col gap-4 border-l border-accentPink/20"
                      >
                        {contactItems.map(item => (
                          <button key={item.label} onClick={() => scrollToSection(item.targetId)} className="text-left text-lg uppercase tracking-widest text-textMuted">{item.label}</button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="mt-auto">
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsModalOpen(true);
                  }}
                  className="w-full py-6 bg-accentPink text-white rounded-full font-bold uppercase tracking-widest text-xs shadow-lg"
                >
                  BOOK A CALL
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
        className="absolute top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 py-8 text-[10px] md:text-xs uppercase tracking-[0.2em] text-textMuted font-medium z-50"
      >
        <button 
          onClick={() => setIsMobileMenuOpen(true)}
          className="lg:hidden w-12 h-12 rounded-full bg-white/60 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-accentLime transition-colors shadow-sm"
        >
          <Menu size={20} />
        </button>

        <div className="hidden lg:flex gap-8 md:gap-12 items-center">
          <button onClick={() => scrollToSection('about-section')} className="hover:text-accentPink relative group transition-colors duration-700 uppercase">ABOUT</button>
          <NavDropdown title="WORK" items={workItems} />
          <button onClick={() => scrollToSection('reels-ticker-section')} className="hover:text-accentPink relative group transition-colors duration-700 uppercase">INSIGHTS</button>
          <button onClick={() => scrollToSection('recognition-section')} className="hover:text-accentPink relative group transition-colors duration-700 uppercase">RECOGNITION</button>
          <NavDropdown title="CONTACT" items={contactItems} />
        </div>

        <div className="hidden lg:block">
          <a 
            href={mailtoLink}
            className="flex items-center gap-1 hover:text-accentPink relative group transition-colors duration-700 uppercase"
          >
            BOOK A CALL <ArrowUpRight size={14} className="group-hover:text-accentLime transition-colors duration-700" />
          </a>
        </div>
      </motion.nav>

      <div className="w-full lg:w-[52%] relative z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24 pt-24 pb-4 lg:py-0 min-h-[45vh] lg:min-h-screen">
        <motion.div 
          variants={fadeBlurVariants}
          initial="hidden"
          animate="visible"
          className="absolute left-4 md:left-8 top-[75%] -translate-y-1/2 -rotate-90 origin-left text-[9px] uppercase tracking-[0.3em] text-textMuted hidden lg:block whitespace-nowrap"
        >
          CONTENT STRATEGIST . @SEJCURATES . DIGITAL STRATEGIST
        </motion.div>

        <motion.div initial="hidden" animate="visible" className="w-full max-w-xl lg:max-w-3xl xl:max-w-none mx-auto lg:mx-0 lg:ml-12">
          <motion.div variants={textRiseVariants} className="flex flex-wrap gap-8 md:gap-12 mb-8 md:mb-16">
            <div>
              <p className="text-3xl md:text-4xl font-display font-light mb-2 tracking-tight text-textMain">
                <AnimatedNumber value={50.2} prefix="" suffix="k+" decimals={1} />
              </p>
              <p className="text-[9px] text-textMuted uppercase tracking-[0.2em]">FOLLOWERS</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-display font-light mb-2 tracking-tight text-textMain">
                <AnimatedNumber value={15} prefix="" suffix="+" />
              </p>
              <p className="text-[9px] text-textMuted uppercase tracking-[0.2em]">BRANDS</p>
            </div>
            <div className="hidden sm:block">
              <p className="text-xl sm:text-2xl md:text-3xl font-display font-light mb-2 tracking-tight text-textMain whitespace-nowrap uppercase">
                <ScrambleText text="LONDON BUSINESS SCHOOL" />
              </p>
              <p className="text-[9px] text-textMuted uppercase tracking-[0.2em]">'24</p>
            </div>
          </motion.div>

          <motion.div variants={textRiseVariants}>
            <TypewriterHeading />
          </motion.div>
          
          <motion.div variants={textRiseVariants} className="flex flex-col gap-6 max-w-[420px]">
            <div className="flex items-start gap-4">
              <span className="text-accentPink mt-1">-</span>
              <p className="text-lg md:text-xl text-textMain font-light leading-relaxed uppercase">
                IT'S SEJCURATES- SHAPING STORIES, STRATEGY, AND INTERNET CULTURE!
              </p>
            </div>
            {/* Hidden on Mobile/Tablet as requested */}
            <p className="text-[10px] uppercase tracking-[0.4em] text-accentPink font-bold hidden lg:block">
              brand thinker · D2C obsessed · content native
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="w-full lg:w-[48%] relative h-[50vh] md:h-[65vh] lg:h-screen z-20 flex items-end justify-center lg:justify-end">
        {/* Desktop Image */}
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
        
        {/* Mobile/Tablet Image - Fixed Centering and Specific Link */}
        <div className="block lg:hidden w-full h-full relative flex items-end justify-center overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1, filter: 'blur(20px)', opacity: 0 }}
            animate={{ scale: 1, filter: 'blur(0px)', opacity: 1 }}
            transition={{ duration: 2.8, ease: [0.25, 1, 0.5, 1] }}
            src="https://www.dropbox.com/scl/fi/w5vlehlw94lqa7fei2fpl/mlgyopbirnyidourb9pm-1.webp?rlkey=oqmy5zz3s6dleko83pgaoawr2&st=0lo28tp0&raw=1" 
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
