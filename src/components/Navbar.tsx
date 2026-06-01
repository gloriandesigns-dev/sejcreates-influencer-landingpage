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
      <button className="flex items-center gap-1 hover:text-accentPink transition-colors duration-700 py-2">
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
                className="block w-full text-left px-4 py-3 text-[11px] tracking-widest hover:bg-accentLime rounded-lg transition-colors"
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
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
              className="fixed inset-0 bg-black/40 backdrop-blur-xl z-[100] lg:hidden"
            />
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-[85%] bg-white/95 backdrop-blur-2xl z-[110] lg:hidden p-8 flex flex-col gap-8"
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
                <button onClick={() => scrollToSection('about-section')} className="text-left text-3xl font-display font-light tracking-tighter hover:text-accentPink transition-colors">About</button>
                
                <div>
                  <button 
                    onClick={() => setOpenMobileDropdown(openMobileDropdown === 'WORK' ? null : 'WORK')}
                    className="flex items-center justify-between w-full text-3xl font-display font-light tracking-tighter hover:text-accentPink transition-colors"
                  >
                    Work <ChevronDown size={20} className={`transition-transform ${openMobileDropdown === 'WORK' ? 'rotate-180' : ''}`} />
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
                          <button key={item.label} onClick={() => scrollToSection(item.targetId)} className="text-left text-lg tracking-widest text-textMuted">{item.label}</button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button onClick={() => scrollToSection('reels-ticker-section')} className="text-left text-3xl font-display font-light tracking-tighter hover:text-accentPink transition-colors">Insights</button>
                <button onClick={() => scrollToSection('recognition-section')} className="text-left text-3xl font-display font-light tracking-tighter hover:text-accentPink transition-colors">Recognition</button>

                <div>
                  <button 
                    onClick={() => setOpenMobileDropdown(openMobileDropdown === 'CONTACT' ? null : 'CONTACT')}
                    className="flex items-center justify-between w-full text-3xl font-display font-light tracking-tighter hover:text-accentPink transition-colors"
                  >
                    Contact <ChevronDown size={20} className={`transition-transform ${openMobileDropdown === 'CONTACT' ? 'rotate-180' : ''}`} />
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
                          <button key={item.label} onClick={() => scrollToSection(item.targetId)} className="text-left text-lg tracking-widest text-textMuted">{item.label}</button>
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
                  className="w-full py-6 bg-accentPink text-white rounded-full font-bold tracking-widest text-xs shadow-lg"
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
        className={`fixed top-0 left-0 w-full z-[90] transition-all duration-500 ease-cinematic px-6 md:px-12 py-4 md:py-6 ${
          isScrolled 
            ? 'lg:px-24 lg:pt-4' 
            : 'bg-transparent'
        }`}
      >
        <div className={`max-w-7xl mx-auto flex justify-between items-center transition-all duration-500 ease-cinematic ${
          isScrolled 
            ? 'bg-white/30 backdrop-blur-md shadow-md rounded-full px-8 py-3 border border-white/20' 
            : 'bg-transparent py-2'
        }`}>
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden w-10 h-10 rounded-full bg-white/60 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-accentLime transition-colors shadow-sm"
          >
            <Menu size={18} />
          </button>

          <div className="hidden lg:flex gap-8 md:gap-12 items-center text-[11px] md:text-xs tracking-[0.1em] text-textMuted font-medium">
            <button onClick={() => scrollToSection('about-section')} className="hover:text-accentPink relative group transition-colors duration-700">About</button>
            <NavDropdown title="Work" items={workItems} />
            <button onClick={() => scrollToSection('reels-ticker-section')} className="hover:text-accentPink relative group transition-colors duration-700">Insights</button>
            <button onClick={() => scrollToSection('recognition-section')} className="hover:text-accentPink relative group transition-colors duration-700">Recognition</button>
            <NavDropdown title="Contact" items={contactItems} />
          </div>

          <div className="hidden lg:block text-[11px] md:text-xs tracking-[0.1em] text-textMuted font-medium">
            <a 
              href={mailtoLink}
              className="flex items-center gap-1 hover:text-accentPink relative group transition-colors duration-700"
            >
              Book A Call <ArrowUpRight size={14} className="group-hover:text-accentLime transition-colors duration-700" />
            </a>
          </div>
          
          <div className="lg:hidden w-10 h-10 rounded-full bg-accentLime flex items-center justify-center">
            <span className="font-display font-bold text-xs">S.</span>
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
