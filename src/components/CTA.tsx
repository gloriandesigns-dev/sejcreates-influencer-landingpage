import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import ConnectModal from './ConnectModal';

const CTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);
  const springConfig = { damping: 40, stiffness: 120, mass: 1 };
  const blobX = useSpring(mouseX, springConfig);
  const blobY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(rect.width / 2);
    mouseY.set(rect.height / 2);
  };

  return (
    <section className="px-4 md:px-8 lg:px-12 pb-20 bg-primary">
      <ConnectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <motion.div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1] }}
        className="w-full rounded-[2.5rem] bg-white border border-black/[0.03] py-24 md:py-32 px-6 relative overflow-hidden group shadow-[0_8px_40px_rgba(0,0,0,0.02)] cursor-crosshair"
      >
        <motion.div
          className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full blur-[100px] md:blur-[140px] pointer-events-none opacity-40 z-0"
          style={{
            x: blobX,
            y: blobY,
            translateX: "-50%",
            translateY: "-50%",
            background: "linear-gradient(135deg, #CEF679 0%, #E278A8 100%)"
          }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-textMuted mb-10">
            ( Let's build something meaningful )
          </p>
          
          <h2 className="text-6xl md:text-7xl lg:text-[110px] font-display font-light tracking-tighter mb-12 leading-[0.85] text-accentPink">
            Collaborate With Me
          </h2>
          
          <p className="text-base md:text-xl lg:text-2xl text-textMain font-light leading-relaxed max-w-2xl mb-20">
            Whether it's brand storytelling, D2C strategy, creator collaborations, or internet-first campaigns - let's create perspectives that people remember.
          </p>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-3 text-xs md:text-sm uppercase tracking-[0.3em] font-bold text-textMain hover:text-accentPink transition-all duration-700 relative group/btn"
          >
            Let's Talk <ArrowUpRight size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-700" />
            <span className="absolute -bottom-4 left-0 w-full h-[1px] bg-black/5 group-hover/btn:bg-accentPink transition-all duration-700"></span>
            <span className="absolute -bottom-4 left-0 w-full h-[1px] bg-accentPink blur-[6px] opacity-0 group-hover/btn:opacity-40 transition-opacity duration-700"></span>
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
