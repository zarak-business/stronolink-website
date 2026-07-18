import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Navbar } from './Navbar';

export function HeroSection() {
  return (
    <section className="relative h-[90vh] md:h-[120vh] w-full pt-16 md:pt-20">
      {/* Navbar (Truly full-width, overlaying the entire screen) */}
      <Navbar />

      <div className="relative w-full h-full overflow-hidden">
        {/* Background Video */}
        <video
          key="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260714_113715_c7e0daa0-8bdd-4486-a2da-040901f8f0ea.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-top z-0"
        >
          <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260714_113715_c7e0daa0-8bdd-4486-a2da-040901f8f0ea.mp4" type="video/mp4" />
        </video>

        {/* Overlays */}
        {/* Removed noise overlay for a cleaner look */}

        {/* Hero Content (Forced to Sky) */}
        <div className="absolute top-[18%] md:top-[22%] left-0 right-0 z-30 flex flex-col items-center justify-center px-6 w-full max-w-4xl mx-auto text-center">
          
          <div className="w-full">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-['Instrument_Serif'] text-[#1B133C] text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight text-center max-w-4xl mx-auto"
            >
              Stop Filming Ads. Stop Chasing Leads. Let AI Do Both.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[#1B133C] font-medium drop-shadow-md text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mt-5 sm:mt-6"
          >
            Skip the expensive video production crews and stop racing competitors for shared leads. Our fully managed AI system rapidly tests high-converting Meta ads and instantly books appointments on autopilot.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 sm:mt-8"
          >
            <a 
              href="https://cal.com/zarak-khan-5xsdci/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-[#FEFEFE] rounded-full pl-6 pr-1.5 py-1.5 w-max gap-4 hover:gap-6 transition-all duration-300 cursor-pointer shadow-[0px_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0px_6px_16px_rgba(0,0,0,0.2)]"
            >
              <span className="text-[#1B133C] font-semibold text-sm sm:text-base">Get in touch</span>
              <div className="bg-[#1B133C] rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <ArrowRight className="text-white w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </a>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
