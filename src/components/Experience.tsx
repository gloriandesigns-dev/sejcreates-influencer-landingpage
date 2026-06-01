import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % experiences.length);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="experience-section" className="py-10 md:py-16 px-6 md:px-12 lg:px-24 bg-primary text-textMain scroll-mt-20">
      <ConnectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start mb-10 gap-8">
          <motion.div className="md:w-1/2">
            <p className="text-[10px] tracking-[0.2em] text-textMuted mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accentPink block"></span> Experiences
            </p>
            <h2 className="text-4xl md:text-5xl font-display font-light tracking-tight">
              Digital and content strategy
            </h2>
          </motion.div>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="hidden md:flex items-center gap-1 text-xs tracking-[0.2em] font-medium hover:text-accentPink transition-colors group relative"
          >
            Book A Call <ArrowUpRight size={14} />
            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accentPink group-hover:w-full transition-all duration-700"></span>
          </button>
        </header>

        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="p-8 bg-white border border-accentPink/30 rounded-2xl flex flex-col hover:border-accentPink transition-all duration-700 group shadow-sm">
              <h3 className="text-xl font-display mb-1">{exp.organization}</h3>
              <p className="text-[9px] tracking-widest text-textMuted mb-6">{exp.timeline}</p>
              <p className="text-xs text-textMuted font-light leading-relaxed mb-6">{exp.description}</p>
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-accentPink/10">
                {exp.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full border border-accentPink/20 text-[8px] tracking-widest text-accentPink">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden relative h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 p-8 bg-white border border-accentPink/30 rounded-2xl flex flex-col shadow-xl"
            >
              <h3 className="text-2xl font-display mb-2">{experiences[activeIndex].organization}</h3>
              <p className="text-[10px] tracking-widest text-textMuted mb-8">{experiences[activeIndex].timeline}</p>
              <p className="text-sm text-textMuted font-light leading-relaxed mb-8">{experiences[activeIndex].description}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {experiences[activeIndex].tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full border border-accentPink/20 text-[9px] tracking-widest text-accentPink">{tag}</span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <button 
            onClick={() => setActiveIndex((prev) => (prev - 1 + experiences.length) % experiences.length)}
            className="absolute -left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-accentLime flex items-center justify-center z-20 shadow-lg border border-white/40"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => setActiveIndex((prev) => (prev + 1) % experiences.length)}
            className="absolute -right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-accentLime flex items-center justify-center z-20 shadow-lg border border-white/40"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
