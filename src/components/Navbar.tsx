import { ArrowRight } from 'lucide-react';

export function Navbar() {
  const navItems = [
    "Services",
    "Process",
    "About",
    "Case Studies"
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-lg border-b border-white/5">
      <div className="w-full flex items-center justify-between px-6 md:px-12 py-4 md:py-6">
        
        {/* Left Side: Logo */}
        <div className="flex-1 flex items-center justify-start z-10">
          <a href="/">
            <img src="/logo.png" alt="Stronolink Logo" className="h-10 md:h-12 lg:h-14 w-auto object-contain" />
          </a>
        </div>

        {/* Center: Navigation Links (Absolutely Centered) */}
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

        {/* Right Side: Get in Touch Button */}
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

        {/* Mobile Navigation (Simplified) */}
        <div className="bg-black/50 backdrop-blur-md rounded-full px-5 py-2.5 flex md:hidden items-center justify-center gap-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`/#${item.toLowerCase().replace(' ', '-')}`}
              className="text-[10px] transition-colors duration-200"
              style={{ color: 'rgba(225, 224, 204, 0.8)' }}
            >
              {item}
            </a>
          ))}
        </div>

      </div>
    </nav>
  )
}
