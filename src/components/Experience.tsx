import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import ConnectModal from './ConnectModal';

const experiences = [
  {
    organization: "Bluence",
    timeline: "E-Commerce Consultant",
    role: "D2C & E-commerce Consultant",
    description: "Took a fashion brand online- set up their Shopify store, established their digital presence, and ran paid media to drive early traction.",
    tags: ["Shopify", "Paid Media", "D2C E-commerce Setup"]
  },
  {
    organization: "Tata CLiQ Luxury",
    timeline: "Product Strategy",
    role: "Product Strategy",
    description: "Spearheaded the launch of TARA, an AI-powered personal shopper, built the full GTM playbook, prompt frameworks, and user education strategy.",
    tags: ["AI & Product", "GTM Strategy", "D2C Growth"]
  },
  {
    organization: "John John Denims",
    timeline: "Brand Consultant",
    role: "Brand Consultant",
    description: "Digital audit via Meta & Power BI. Redesigned the affiliate commission structure and storefront UX.",
    tags: ["Paid Media", "Digital Strategy"]
  },
  {
    organization: "Dualite Technology",
    timeline: "Co-Founder",
    role: "Co-Founder",
    description: "Co-founded a MarTech SaaS that converted Figma designs into interactive digital experiences. Led GTM, user research, and revenue modelling for e-commerce and retail brands.",
    tags: ["Startup Building", "GTM Strategy", "Revenue Modelling"]
  },
  {
    organization: "ICA Pidilite",
    timeline: "Brand Strategy",
    role: "Brand Strategy",
    description: "Built content calendars, SEO strategy, and an immersive VR product experience in the Metaverse.",
    tags: ["Brand & Content Strategy", "SEO"]
  },
  {
    organization: "Morgan Stanley",
    timeline: "Finance & Strategy",
    role: "Finance & Strategy",
    description: "Modelled funding pathways across 2,000+ entities and examined regulatory reports for transactions exceeding $5M.",
    tags: ["Financial Strategy", "Compliance", "Global Operations"]
  }
];

const Experience = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    autoPlayTimerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % experiences.length);
    }, 3000);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    } else {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    }
    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isAutoPlaying]);

  const handleManualNav = (direction: 'prev' | 'next') => {
    setIsAutoPlaying(false);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    
    if (direction === 'prev') {
      setActiveIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
    } else {
      setActiveIndex((prev) => (prev + 1) % experiences.length);
    }

    resumeTimerRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 60000);
  };

  return (
    <section id="experience-section" className="pt-12 pb-24 md:pt-16 md:pb-32 px-6 md:px-12 lg:px-24 bg-primary text-textMain scroll-mt-20 overflow-hidden">
      <ConnectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:w-1/2"
          >
            <p className="text-[10px] tracking-[0.3em] text-textMuted mb-4 flex items-center gap-2 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-accentPink block"></span> Experiences
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tight leading-tight uppercase">
              Digital and content strategy
            </h2>
          </motion.div>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="hidden md:flex items-center gap-2 text-[10px] tracking-[0.25em] font-bold uppercase hover:text-accentPink transition-all duration-700 group relative"
          >
            Book A Call <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accentPink group-hover:w-full transition-all duration-700"></span>
          </button>
        </header>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 bg-white border border-accentPink/10 rounded-[2rem] flex flex-col hover:border-accentPink/40 transition-all duration-1000 group shadow-[0_4px_20px_rgba(0,0,0,0.02)] min-h-[360px]"
            >
              <h3 className="text-2xl font-display mb-2 text-textMain uppercase">{exp.organization}</h3>
              <p className="text-[9px] tracking-[0.2em] text-accentPink mb-4 uppercase font-bold">{exp.timeline}</p>
              <p className="text-sm text-textMuted font-light leading-relaxed mb-4 line-clamp-6">{exp.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-accentPink/5">
                {exp.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full border border-accentPink/10 text-[8px] tracking-widest text-textMuted uppercase font-medium">{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden relative h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 p-6 bg-white border border-accentPink/10 rounded-[2rem] flex flex-col shadow-xl"
            >
              <h3 className="text-2xl font-display mb-2 uppercase">{experiences[activeIndex].organization}</h3>
              <p className="text-[10px] tracking-[0.2em] text-accentPink mb-4 uppercase font-bold">{experiences[activeIndex].timeline}</p>
              <p className="text-base text-textMuted font-light leading-relaxed mb-4 line-clamp-6">{experiences[activeIndex].description}</p>
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {experiences[activeIndex].tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full border border-accentPink/10 text-[9px] tracking-widest text-textMuted uppercase font-medium">{tag}</span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom Navigation Arrows */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-6 z-20">
            <button 
              onClick={() => handleManualNav('prev')}
              className="w-12 h-12 rounded-full bg-white border border-accentPink/10 flex items-center justify-center shadow-lg active:scale-90 transition-transform"
            >
              <ChevronLeft size={20} className="text-textMain" />
            </button>
            <button 
              onClick={() => handleManualNav('next')}
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
          className="mt-24 flex justify-center"
        >
          <a 
            href="mailto:team@sejcurates.com?subject=Collaborate%20for%20Business%20Consultation" 
            className="relative overflow-hidden bg-accentLime text-textMain px-12 py-5 font-bold tracking-[0.2em] text-sm md:text-base uppercase group rounded-full border border-accentLime transition-all duration-700 w-full md:w-auto text-center flex items-center justify-center shadow-xl"
          >
            <span className="relative z-10 group-hover:text-accentPink transition-colors duration-700 max-w-[180px] md:max-w-none leading-tight text-xs md:text-base">
              Collaborate for <br className="md:hidden" /> Business Consultation
            </span>
            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-cinematic origin-left"></div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
