import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="bg-black py-24 md:py-32 px-4 md:px-6 w-full flex justify-center">
      <div className="max-w-6xl w-full bg-black/80 rounded-2xl md:rounded-[2rem] p-12 md:p-24 flex flex-col items-center text-center gap-8 md:gap-10 relative overflow-hidden border border-white/[0.05]">
        
        {/* Left Purple Glow */}
        <div className="absolute top-0 left-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[radial-gradient(circle_at_center,_rgba(147,51,234,0.25)_0%,_transparent_70%)] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        {/* Right Purple Glow */}
        <div className="absolute bottom-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-[radial-gradient(circle_at_center,_rgba(88,28,135,0.25)_0%,_transparent_70%)] translate-x-1/3 translate-y-1/3 pointer-events-none" />
        
        {/* Center Text Glow */}
        <div className="absolute top-1/2 left-1/2 w-[400px] md:w-[800px] h-[300px] md:h-[400px] bg-[radial-gradient(ellipse_at_center,_rgba(147,51,234,0.45)_0%,_transparent_70%)] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight relative z-10"
        >
          Ready to scale with AI?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed relative z-10"
        >
          Book a free 30-minute call where we audit your bottlenecks and map out your custom AI system to build ads and book appointments on autopilot.
        </motion.p>

        <motion.a
          href="https://cal.com/zarak-khan-5xsdci/30min"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="group flex items-center justify-between bg-white rounded-full pl-6 pr-1.5 py-1.5 w-max gap-4 hover:gap-6 transition-all duration-300 cursor-pointer mt-4 relative z-10"
        >
          <span className="text-black font-medium text-sm sm:text-base">Book a free growth call</span>
          <div className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <ArrowRight className="text-white w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </motion.a>
        
      </div>
    </section>
  );
}
