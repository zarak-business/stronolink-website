export function Footer() {
  return (
    <footer className="bg-black text-white text-sm pt-16 pb-6 md:pt-20 px-6 md:px-12 relative overflow-hidden">
      {/* Glow expanded to the right, with the left edge securely anchored away from the logo */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 md:-translate-x-[250px] w-[300px] md:w-[800px] h-[100px] md:h-[150px] bg-purple-500/40 blur-[60px] md:blur-[80px] pointer-events-none rounded-full" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 md:mb-16 items-center mt-4">
          
          {/* Logo */}
          <div className="flex items-center md:justify-start">
             <img src="/logo.png" alt="Stronolink Logo" className="h-8 md:h-10 lg:h-12 w-auto object-contain" />
          </div>

          {/* Links (Centered) */}
          <div className="flex flex-col gap-3 md:items-center">
            <div className="flex flex-col gap-3 font-light text-[13px] md:text-sm">
              <a href="#services" className="text-white hover:text-white/80 transition-colors duration-200">Services</a>
              <a href="#case-studies" className="text-white hover:text-white/80 transition-colors duration-200">Case Studies</a>
              <a href="#process" className="text-white hover:text-white/80 transition-colors duration-200">Process</a>
            </div>
          </div>
          
          <div className="hidden md:block"></div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/[0.05] pt-6 flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 text-xs max-w-4xl mx-auto md:ml-[33%] md:-translate-x-12">
          <p className="whitespace-nowrap text-white font-light">© Copyright 2025, Stronolink Inc</p>
          
          <div className="flex items-center gap-8 md:gap-16 font-light">
            <a href="/terms" className="text-white hover:text-white/80 transition-colors duration-200 whitespace-nowrap">Terms of Service</a>
            <a href="/privacy" className="text-white hover:text-white/80 transition-colors duration-200 whitespace-nowrap">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
