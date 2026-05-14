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
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-primary text-textMain">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start mb-16 gap-12">
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
            <a href="mailto:team@sejcurates.com?subject=I%20would%20love%20to%20collaborate&body=Hey%20Sejal%2C%20I%20would%20love%20to%20collaborate%20with%20you." className="flex items-center gap-1 text-xs uppercase tracking-[0.2em] font-medium hover:text-accentPink transition-colors duration-500 group relative">
              Book A Call <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-500" />
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accentPink group-hover:w-full transition-all duration-700 ease-cinematic"></span>
            </a>
          </motion.div>
        </header>

        {/* Timeline Grid: 3 columns, 2 rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={rowVariants}
              className="p-8 bg-white border border-accentPink/30 rounded-2xl flex flex-col hover:border-accentPink hover:shadow-[0_10px_30px_-10px_rgba(226,120,168,0.2)] transition-all duration-700 group"
            >
              <div className="mb-6">
                <h3 className="text-xl font-display mb-1">{exp.organization}</h3>
                <p className="text-[10px] uppercase tracking-widest text-textMuted flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-accentPink block"></span>
                  {exp.timeline}
                </p>
              </div>

              <div className="mb-8 flex-grow">
                <h4 className="text-sm font-semibold text-textMain mb-3 uppercase tracking-wider">{exp.role}</h4>
                <p className="text-xs text-textMuted font-light leading-relaxed">
                  {exp.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-accentPink/10">
                {exp.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 rounded-full border border-accentPink/20 text-[9px] uppercase tracking-widest text-accentPink group-hover:bg-accentPink group-hover:text-white transition-all duration-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
