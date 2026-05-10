import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-24 md:pt-32 pb-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Section */}
        <div className="mb-24 md:mb-32">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium text-white mb-2 md:mb-4 tracking-tight">
            Let's get to know each other
          </h2>
          <div className="relative inline-block">
            <a 
              href="mailto:team@sejcurates.com" 
              className="text-4xl md:text-5xl lg:text-6xl font-sans text-gray-400 hover:text-white transition-colors duration-500 tracking-tight"
            >
              team@sejcurates.com
            </a>
            {/* Custom Squiggly Underline matching the reference with draw animation */}
            <svg 
              className="absolute -bottom-4 md:-bottom-6 left-0 w-[80%] md:w-[90%] h-3 md:h-4 text-accentPink" 
              viewBox="0 0 400 12" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <motion.path 
                d="M2 5.5 L 150 5.5 C 160 5.5, 165 9.5, 175 9.5 C 185 9.5, 190 5.5, 200 5.5 L 398 5.5" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
              />
            </svg>
          </div>
        </div>

        {/* Middle Section: Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-16">
          {/* Column 1 */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 mb-6 tracking-wide">Media Inquiries</h4>
            <div className="flex items-center gap-5">
              <a href="#" className="text-white hover:text-accentPink transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-accentPink transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-accentPink transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-accentPink transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 mb-6 tracking-wide">Sales</h4>
            <a href="mailto:sales@sejcurates.com" className="text-sm md:text-base font-medium text-white hover:text-accentPink transition-colors">
              sales@sejcurates.com
            </a>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 mb-6 tracking-wide">Careers</h4>
            <a href="mailto:careers@sejcurates.com" className="text-sm md:text-base font-medium text-white hover:text-accentPink transition-colors">
              careers@sejcurates.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-6"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 text-[11px] text-gray-500 font-medium">
          <div>
            W/ <span className="text-accentPink">❤️</span> by <a href="#" className="text-gray-400 hover:text-white transition-colors">Sejcurates.com</a>. Powered by <a href="#" className="text-gray-400 hover:text-white transition-colors">Dualite</a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a href="#" className="hover:text-white transition-colors">Licensing</a>
            <a href="#" className="hover:text-white transition-colors">Style Guide</a>
            <a href="#" className="hover:text-white transition-colors">Change Log</a>
            <a href="#" className="hover:text-white transition-colors">Instructions</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
