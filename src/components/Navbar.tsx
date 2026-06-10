import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import ConnectModal from './ConnectModal';

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
      <button className="flex items-center gap-1 hover:text-accentPink transition-colors duration-700 py-2 uppercase font-bold tracking-widest">
        {title} <ChevronDown size={10} className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-0 w-64 bg-white/90 backdrop-blur-xl border border-accentPink/10 rounded-xl shadow-2xl p-2 z-50"
          >
            {items.map((item, idx) => (
              <button 
                key={idx} 
                onClick={() => scrollToSection(item.targetId)}
                className="block w-full text-left px-4 py-3 text-[10px] tracking-widest hover:bg-accentLime/30 rounded-lg transition-colors uppercase font-bold"
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

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const commonItems = [
    { label: "Business Consultations", targetId: "experience-section" },
    { label: "Factory Collaboration", targetId: "featured-reels-section" },
    { label: "Content Collaboration", targetId: "reels-ticker-section" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const mailtoLink = "mailto:team@sejcurates.com?subject=I%20would%20love%20to%20collaborate&body=Hey%20Sejal%2C%20I%20would%20love%20to%20collaborate%20with%20you.";

  return (
    <>
      <ConnectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-md z-[100] lg:hidden"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 150 }}
              className="fixed top-0 left-0 h-full w-[80%] max-w-sm bg-white/95 backdrop-blur-2xl z-[110] lg:hidden p-8 flex flex-col shadow-2xl"
            >
              <div className="flex justify-between items-center mb-12">
                <div className="px-4 h-10 rounded-full bg-accentLime flex items-center justify-center shadow-sm">
                  <span className="font-display font-bold text-xs uppercase tracking-widest leading-none">Sejal</span>
                </div>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 hover:bg-black/5 rounded-full transition-colors">
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex flex-col gap-4 overflow-y-auto">
                <button onClick={() => scrollToSection('about-section')} className="text-left text-4xl font-display font-light tracking-tighter hover:text-accentPink transition-colors uppercase">About</button>
                
                <div className="py-2">
                  <button 
                    onClick={() => setOpenMobileDropdown(openMobileDropdown === 'WORK' ? null : 'WORK')}
                    className="flex items-center justify-between w-full text-4xl font-display font-light tracking-tighter hover:text-accentPink transition-colors uppercase"
                  >
                    Work <ChevronDown size={20} className={`transition-transform duration-500 ${openMobileDropdown === 'WORK' ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openMobileDropdown === 'WORK' && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden pl-4 mt-4 flex flex-col gap-4 border-l border-accentPink/10"
                      >
                        {commonItems.map(item => (
                          <button key={item.label} onClick={() => scrollToSection(item.targetId)} className="text-left text-sm tracking-widest text-textMuted uppercase font-bold">{item.label}</button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button onClick={() => scrollToSection('reels-ticker-section')} className="text-left text-4xl font-display font-light tracking-tighter hover:text-accentPink transition-colors uppercase">Insights</button>
                <button onClick={() => scrollToSection('recognition-section')} className="text-left text-4xl font-display font-light tracking-tighter hover:text-accentPink transition-colors uppercase">Recognition</button>

                <div className="py-2">
                  <button 
                    onClick={() => setOpenMobileDropdown(openMobileDropdown === 'CONTACT' ? null : 'CONTACT')}
                    className="flex items-center justify-between w-full text-4xl font-display font-light tracking-tighter hover:text-accentPink transition-colors uppercase"
                  >
                    Contact <ChevronDown size={20} className={`transition-transform duration-500 ${openMobileDropdown === 'CONTACT' ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openMobileDropdown === 'CONTACT' && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden pl-4 mt-4 flex flex-col gap-4 border-l border-accentPink/10"
                      >
                        {commonItems.map(item => (
                          <button key={item.label} onClick={() => scrollToSection(item.targetId)} className="text-left text-sm tracking-widest text-textMuted uppercase font-bold">{item.label}</button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="mt-auto pt-12">
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsModalOpen(true);
                  }}
                  className="w-full py-5 bg-accentPink text-white rounded-full font-bold tracking-widest text-[10px] uppercase shadow-xl hover:bg-accentPink/90 transition-colors"
                >
                  Book A Call
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-[90] transition-all duration-700 ease-cinematic px-4 md:px-8 py-4 md:py-6 ${
          isScrolled 
            ? 'lg:px-24 lg:pt-4' 
            : 'bg-transparent'
        }`}
      >
        <div className={`max-w-7xl mx-auto flex justify-between items-center transition-all duration-700 ease-cinematic ${
          isScrolled 
            ? 'bg-white/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-full px-6 md:px-10 py-3 border border-white/40' 
            : 'bg-transparent py-2'
        }`}>
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden w-10 h-10 rounded-full bg-white/40 backdrop-blur-md border border-white/40 flex items-center justify-center hover:bg-accentLime transition-colors shadow-sm"
          >
            <Menu size={18} />
          </button>

          <div className="hidden lg:flex gap-10 items-center text-[10px] tracking-[0.15em] text-textMuted font-bold uppercase">
            <button onClick={() => scrollToSection('about-section')} className="hover:text-accentPink relative group transition-colors duration-700 uppercase">About</button>
            <NavDropdown title="Work" items={commonItems} />
            <button onClick={() => scrollToSection('reels-ticker-section')} className="hover:text-accentPink relative group transition-colors duration-700 uppercase">Insights</button>
            <button onClick={() => scrollToSection('recognition-section')} className="hover:text-accentPink relative group transition-colors duration-700 uppercase">Recognition</button>
            <NavDropdown title="Contact" items={commonItems} />
          </div>

          <div className="hidden lg:block text-[10px] tracking-[0.15em] text-textMuted font-bold uppercase">
            <a 
              href={mailtoLink}
              className="flex items-center gap-1 hover:text-accentPink relative group transition-colors duration-700 uppercase"
            >
              Book A Call <ArrowUpRight size={14} className="group-hover:text-accentLime transition-colors duration-700" />
            </a>
          </div>
          
          {/* Sejal Capsule - Centered vertically and horizontally */}
          <div className="lg:flex px-4 h-10 rounded-full bg-accentLime flex items-center justify-center shadow-sm">
            <span className="font-display font-bold text-xs uppercase tracking-widest leading-none">Sejal</span>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
