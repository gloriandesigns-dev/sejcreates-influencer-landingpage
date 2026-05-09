import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    organization: "London Business School",
    location: "London, UK",
    timeline: "2023 — 2024",
    role: "Master's Graduate",
    description: "Explored strategy, consumer behavior, storytelling, and modern business thinking through a globally diverse learning environment.",
    tags: ["Strategy", "Business", "Leadership"]
  },
  {
    organization: "Dualite",
    location: "India",
    timeline: "Co-Founder · Previous Venture",
    role: "MarTech Startup Co-Founder",
    description: "Built and experimented with AI-first marketing systems while understanding the intersection of technology, content, and creator-led growth.",
    tags: ["AI", "Startup", "Growth"]
  },
  {
    organization: "Tata CLiQ Luxury",
    location: "India",
    timeline: "Brand Experience",
    role: "Luxury Commerce & Strategy",
    description: "Worked around premium digital retail experiences and modern luxury consumer ecosystems.",
    tags: ["Luxury", "D2C"]
  },
  {
    organization: "ICA Pidilite",
    location: "India",
    timeline: "Creative Strategy Experience",
    role: "Brand & Marketing Exposure",
    description: "Explored storytelling, communication systems, and consumer-focused brand positioning.",
    tags: ["Branding", "Marketing"]
  },
  {
    organization: "Morgan Stanley",
    location: "Global",
    timeline: "Corporate Experience",
    role: "Finance & Business Ecosystems",
    description: "Learned structured problem-solving and strategic thinking through high-performance corporate environments.",
    tags: ["Finance", "Strategy"]
  }
];

const Experience = () => {
  const rowVariants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 1.6, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-primary text-textMain">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={rowVariants}
            className="md:w-1/2"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-textMuted mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accentPink block"></span> Experiences
            </p>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-light tracking-tight leading-[1.1]">
              Explore My Journey
            </h2>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={rowVariants}
            className="md:w-5/12 flex flex-col items-start gap-8 md:pt-12"
          >
            <p className="text-textMuted leading-relaxed font-light text-sm md:text-base">
              From business school classrooms to startup building, from strategy decks to creator storytelling — every phase shaped the perspective-driven way I think about brands, people, and internet culture today.
            </p>
            <a href="#" className="flex items-center gap-1 text-xs uppercase tracking-[0.2em] font-medium hover:text-accentPink transition-colors duration-500 group relative">
              Book A Call <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500" />
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accentPink group-hover:w-full transition-all duration-700 ease-cinematic"></span>
            </a>
          </motion.div>
        </header>

        {/* Timeline List */}
        <div className="flex flex-col">
          {experiences.map((exp, idx) => (
            <React.Fragment key={idx}>
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={rowVariants}
                className="py-12 border-t border-borderSoft grid grid-cols-1 md:grid-cols-12 gap-8 group hover:bg-white/40 transition-colors duration-700 -mx-6 px-6 md:-mx-12 md:px-12 rounded-2xl"
              >
                {/* Left Column: Org & Timeline */}
                <div className="md:col-span-4 flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-display mb-2">{exp.organization}</h3>
                  <p className="text-sm text-textMuted flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accentPink block"></span>
                    {exp.timeline}
                  </p>
                </div>

                {/* Middle Column: Role & Description */}
                <div className="md:col-span-5 flex flex-col justify-center">
                  <h4 className="text-base text-textMain mb-2">{exp.role}, {exp.location}</h4>
                  <p className="text-sm text-textMuted font-light leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                {/* Right Column: Tags */}
                <div className="md:col-span-3 flex flex-wrap md:justify-end items-center gap-2 h-fit md:h-full mt-4 md:mt-0">
                  {exp.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-1.5 rounded-full border border-accentPink/30 text-[10px] uppercase tracking-widest text-accentPink group-hover:border-accentPink group-hover:bg-accentPink group-hover:text-white group-hover:shadow-[0_0_15px_rgba(226,120,168,0.3)] transition-all duration-500 bg-transparent"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Visual Insert after the 3rd item (index 2) */}
              {idx === 2 && (
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={rowVariants}
                  className="py-12 border-t border-borderSoft grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
                >
                  <div className="lg:col-span-7 grid grid-cols-3 gap-4">
                    <div className="h-32 md:h-48 rounded-xl overflow-hidden group/img">
                      <img src="https://images.unsplash.com/photo-1618220179428-22790b46a0eb?q=80&w=600&auto=format&fit=crop" alt="Workspace" className="w-full h-full object-cover group-hover/img:scale-105 transition-all duration-1000" />
                    </div>
                    <div className="h-32 md:h-48 rounded-xl overflow-hidden group/img">
                      <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=600&auto=format&fit=crop" alt="Abstract" className="w-full h-full object-cover group-hover/img:scale-105 transition-all duration-1000" />
                    </div>
                    <div className="h-32 md:h-48 rounded-xl overflow-hidden group/img">
                      <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=600&auto=format&fit=crop" alt="Still life" className="w-full h-full object-cover group-hover/img:scale-105 transition-all duration-1000" />
                    </div>
                  </div>
                  <div className="lg:col-span-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
                    <p className="text-sm text-textMuted font-light leading-relaxed max-w-sm">
                      From crafting seamless brand experiences to leading strategic initiatives, each phase has shaped my approach and strengthened my passion for solving modern storytelling challenges.
                    </p>
                    <a href="#" className="w-16 h-16 shrink-0 rounded-full bg-accentPink text-white flex items-center justify-center hover:bg-accentLime hover:text-textMain hover:scale-105 transition-all duration-500">
                      <ArrowUpRight size={24} />
                    </a>
                  </div>
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
        
        <div className="border-t border-borderSoft w-full mt-4"></div>
      </div>
    </section>
  );
};

export default Experience;
