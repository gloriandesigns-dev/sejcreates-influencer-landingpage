import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    organization: "Bluence",
    location: "Global",
    timeline: "2025",
    role: "D2C & E-commerce Consultant",
    description: "Took a fashion brand online- set up their Shopify store, established their digital presence, and ran paid media to drive early traction.",
    tags: ["Shopify", "Paid Media", "D2C E-commerce Setup"]
  },
  {
    organization: "Tata CLiQ Luxury",
    location: "India",
    timeline: "Product Strategy",
    role: "Product Strategy",
    description: "Spearheaded the launch of TARA, an AI-powered personal shopper, built the full GTM playbook, prompt frameworks, and user education strategy.",
    tags: ["AI & Product", "GTM Strategy", "D2C Growth"]
  },
  {
    organization: "John John Denims",
    location: "Brazil",
    timeline: "Brand Consultant",
    role: "Brand Consultant",
    description: "Digital audit via Meta & Power BI. Redesigned the affiliate commission structure and storefront UX.",
    tags: ["Paid Media", "Digital Strategy"]
  },
  {
    organization: "Dualite Technology",
    location: "India",
    timeline: "Co-Founder",
    role: "Co-Founder",
    description: "Co-founded a MarTech SaaS that converted Figma designs into interactive digital experiences. Led GTM, user research, and revenue modelling for e-commerce and retail brands.",
    tags: ["Startup Building", "GTM Strategy", "Revenue Modelling"]
  },
  {
    organization: "ICA Pidilite",
    location: "India",
    timeline: "Brand Strategy",
    role: "Brand Strategy",
    description: "Built content calendars, SEO strategy, and an immersive VR product experience in the Metaverse.",
    tags: ["Brand & Content Strategy", "SEO"]
  },
  {
    organization: "Morgan Stanley",
    location: "Global",
    timeline: "Finance & Strategy",
    role: "Finance & Strategy",
    description: "Modelled funding pathways across 2,000+ entities and examined regulatory reports for transactions exceeding $5M.",
    tags: ["Financial Strategy", "Compliance", "Global Operations"]
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
              From business school classrooms to startup building, from strategy decks to creator storytelling - every phase shaped the perspective-driven way I think about brands, people, and internet culture today.
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
            <motion.div 
              key={idx}
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
                <h4 className="text-base text-textMain mb-2">{exp.role}{exp.location !== 'Global' && exp.location !== 'Remote' && `, ${exp.location}`}</h4>
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
          ))}
        </div>
        
        <div className="border-t border-borderSoft w-full mt-4"></div>
      </div>
    </section>
  );
};

export default Experience;
