import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const CTA = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for tracking cursor position
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Smooth spring physics for the blob
  const springConfig = { damping: 35, stiffness: 150, mass: 0.8 };
  const blobX = useSpring(mouseX, springConfig);
  const blobY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    // Calculate mouse position relative to the card
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    // Smoothly drift the blob to the center when the mouse leaves
    mouseX.set(rect.width / 2);
    mouseY.set(rect.height / 2);
  };

  return (
    <section className="px-4 md:px-8 lg:px-12 pb-24 bg-primary">
      <motion.div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 2.2, ease: [0.25, 1, 0.5, 1] }}
        className="w-full rounded-[2rem] bg-white border border-black/5 py-32 md:py-48 px-6 relative overflow-hidden group shadow-sm cursor-crosshair"
      >
        {/* Dynamic Cursor-Following Gradient Blob */}
        <motion.div
          className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full blur-[100px] md:blur-[120px] pointer-events-none opacity-60 z-0"
          style={{
            x: blobX,
            y: blobY,
            translateX: "-50%",
            translateY: "-50%",
            background: "linear-gradient(135deg, #CEF679 0%, #E278A8 100%)"
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-textMuted mb-8">
            ( Let's build something meaningful )
          </p>
          
          <h2 className="text-6xl md:text-7xl lg:text-[100px] font-display font-light tracking-tighter mb-10 leading-[0.9] text-accentPink">
            Collaborate With Me
          </h2>
          
          <p className="text-base md:text-xl text-textMain font-light leading-relaxed max-w-2xl mb-16">
            Whether it's brand storytelling, D2C strategy, creator collaborations, or internet-first campaigns — let's create perspectives that people remember.
          </p>
          
          <a 
            href="https://calendly.com/team-sejcurates/30min" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm md:text-base uppercase tracking-[0.2em] font-medium text-textMain hover:text-accentPink transition-colors duration-500 relative group/btn"
          >
            Let's Talk <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-500" />
            <span className="absolute -bottom-3 left-0 w-full h-[1px] bg-black/10 group-hover/btn:bg-accentPink transition-colors duration-500"></span>
            {/* Glowing underline effect */}
            <span className="absolute -bottom-3 left-0 w-full h-[1px] bg-accentPink blur-[4px] opacity-0 group-hover/btn:opacity-50 transition-opacity duration-500"></span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
