export function Footer() {
  return (
    <footer className="bg-black text-white text-sm pt-16 pb-8 md:pt-24 md:pb-12 px-6 md:px-12 relative overflow-hidden">
      {/* Glow restored to the top */}
      <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[400px] md:w-[1000px] h-[250px] md:h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(147,51,234,0.25)_0%,_transparent_70%)] pointer-events-none z-0" />
      
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col gap-12 md:gap-16">
        
        {/* Top Section - Links on the Right */}
        <div className="flex justify-center md:justify-end">
          <div className="flex flex-row md:flex-col gap-8 md:gap-4 font-light text-sm md:text-base text-center md:text-right">
            <a href="#services" className="text-white hover:text-white/80 transition-colors duration-200">Services</a>
            <a href="#case-studies" className="text-white hover:text-white/80 transition-colors duration-200">Case Studies</a>
            <a href="#process" className="text-white hover:text-white/80 transition-colors duration-200">Process</a>
          </div>
        </div>

        {/* Bottom Section - Logo on left, legal on right */}
        <div className="border-t border-white/[0.05] pt-8 flex flex-col md:flex-row justify-between items-center md:items-center gap-8 text-xs">
          {/* Logo shifted to the bottom */}
          <div className="flex items-center">
             <img src="/logo.png" alt="Stronolink Logo" className="h-10 md:h-12 lg:h-14 w-auto object-contain" />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 font-light">
            <p className="whitespace-nowrap text-white/70">© Copyright 2025, Stronolink Inc</p>
            <div className="flex items-center gap-6">
              <a href="/terms" className="text-white/70 hover:text-white transition-colors duration-200 whitespace-nowrap">Terms of Service</a>
              <a href="/privacy" className="text-white/70 hover:text-white transition-colors duration-200 whitespace-nowrap">Privacy Policy</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
