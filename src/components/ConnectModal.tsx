import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Building2, ShoppingBag, Video } from 'lucide-react';

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ConnectModal = ({ isOpen, onClose }: ConnectModalProps) => {
  const options = [
    {
      title: "For B2B",
      icon: <Building2 size={32} className="text-accentPink" />,
      link: "mailto:team@sejcurates.com?subject=B2B Collaboration Inquiry"
    },
    {
      title: "For D2C",
      icon: <ShoppingBag size={32} className="text-accentPink" />,
      link: "mailto:team@sejcurates.com?subject=D2C Strategy Inquiry"
    },
    {
      title: "For Content Creation",
      icon: <Video size={32} className="text-accentPink" />,
      link: "mailto:team@sejcurates.com?subject=Content Creation Inquiry"
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/20 backdrop-blur-xl"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl bg-white/60 backdrop-blur-2xl border border-white/40 rounded-[2rem] p-8 md:p-12 overflow-hidden shadow-2xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 p-2 hover:bg-accentLime/40 rounded-full transition-colors"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-light tracking-tight text-textMain">
                Connect for
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {options.map((opt, idx) => (
                <motion.a
                  key={idx}
                  href={opt.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center gap-6 p-8 rounded-2xl border border-white/30 bg-white/30 hover:border-accentPink hover:bg-accentLime/20 transition-all group"
                >
                  <div className="p-4 bg-accentLime/40 rounded-2xl group-hover:scale-110 transition-transform backdrop-blur-md">
                    {opt.icon}
                  </div>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-center leading-tight">
                    {opt.title}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ConnectModal;
