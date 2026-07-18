import { ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    "Services",
    "Process",
    "About",
    "Case Studies"
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black border-b border-white/5">
      <div className="w-full flex items-center justify-between px-6 md:px-12 py-3 md:py-5">
        
        {/* Left Side: Logo */}
        <div className="flex-1 flex items-center justify-start z-10">
          <a href="/">
            <img src="/logo.png" alt="Stronolink Logo" className="h-12 md:h-14 lg:h-16 w-auto object-contain" />
          </a>
        </div>

        {/* Center: Navigation Links (Absolutely Centered for Desktop) */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center gap-8 lg:gap-14 z-20">
          {navItems.map((item) => (
            <a
              key={item}
              href={`/#${item.toLowerCase().replace(' ', '-')}`}
              className="text-white text-xs lg:text-sm font-medium transition-opacity duration-200 hover:opacity-70"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right Side: Get in Touch Button (Desktop) */}
        <div className="flex-1 hidden md:flex justify-end z-10">
          <a 
            href="https://cal.com/zarak-khan-5xsdci/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between bg-white rounded-full pl-5 pr-1.5 py-1.5 w-max gap-4 hover:gap-6 transition-all duration-300 cursor-pointer"
          >
            <span className="text-black font-medium text-xs sm:text-sm">Get in touch</span>
            <div className="bg-black rounded-full w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <ArrowRight className="text-white w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex-1 flex md:hidden justify-end z-20">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2 relative w-11 h-11 flex items-center justify-center"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <X className="w-7 h-7" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute"
                >
                  <Menu className="w-7 h-7" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full h-[100vh] bg-black flex flex-col items-center justify-start pt-16 gap-8 px-6 border-t border-white/10 md:hidden">
          {navItems.map((item) => (
            <a
              key={item}
              href={`/#${item.toLowerCase().replace(' ', '-')}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white text-2xl font-medium tracking-tight"
            >
              {item}
            </a>
          ))}
          
          <a 
            href="https://cal.com/zarak-khan-5xsdci/30min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-8 flex items-center justify-between bg-white rounded-full pl-6 pr-2 py-2 w-full max-w-xs gap-4"
          >
            <span className="text-black font-medium text-lg">Get in touch</span>
            <div className="bg-black rounded-full w-10 h-10 flex items-center justify-center">
              <ArrowRight className="text-white w-5 h-5" />
            </div>
          </a>
        </div>
      )}

    </nav>
  )
}
