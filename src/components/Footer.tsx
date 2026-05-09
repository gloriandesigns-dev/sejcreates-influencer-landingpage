import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white pt-20 pb-10 px-6 md:px-12 lg:px-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-12 md:gap-0">
        
        {/* Left: Navigation */}
        <div className="flex gap-6 md:gap-8 text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/80">
          {['Home', 'About', 'Insights', 'Work', 'Contact'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="hover:text-white relative group transition-colors duration-500"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accentLime group-hover:w-full transition-all duration-700 ease-cinematic"></span>
            </a>
          ))}
        </div>

        {/* Center: Email */}
        <div className="text-center">
          <a 
            href="mailto:team@sejcurates.com" 
            className="text-xl md:text-2xl font-display font-light hover:text-accentLime transition-colors duration-500"
          >
            team@sejcurates.com
          </a>
        </div>

        {/* Right: Socials */}
        <div className="flex gap-6 md:gap-8 text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/80">
          {['Instagram', 'LinkedIn'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="hover:text-white relative group transition-colors duration-500"
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accentLime group-hover:w-full transition-all duration-700 ease-cinematic"></span>
            </a>
          ))}
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-20 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-white/60">
        <p>© 2025 Sejcurates. All rights reserved.</p>
        <p className="mt-4 md:mt-0">Designed with intent.</p>
      </div>
    </footer>
  );
};

export default Footer;
