import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function TextWithImageSection() {
  return (
    <section id="about" className="bg-black py-24 md:py-32 px-4 md:px-6 w-full flex justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(147,51,234,0.18)_0%,_transparent_70%)] pointer-events-none" />
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
        
        {/* Left Side: Text and Button */}
        <div className="flex flex-col gap-6 md:gap-8 items-start">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-4xl md:text-5xl font-medium tracking-tight"
          >
            $100k+ in revenue generated for clients.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-base md:text-lg leading-relaxed"
          >
            Zarak and his team dive deep into your business to solve real problems and build proven systems that drive revenue. We've helped local service businesses scale past $60k+ in monthly revenue by ditching junk leads to focus on high-value jobs. Our team is composed of expert systems engineers and digital marketers who know exactly what it takes to get you results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-2"
          >
            <a 
              href="https://cal.com/zarak-khan-5xsdci/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-white rounded-full pl-6 pr-1.5 py-1.5 w-max gap-4 hover:gap-6 transition-all duration-300 cursor-pointer"
            >
              <span className="text-black font-medium text-sm sm:text-base">Get in touch</span>
              <div className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <ArrowRight className="text-white w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </a>
          </motion.div>
        </div>

        {/* Right Side: Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden bg-[#111]"
        >
          <img 
            src="/office-team.png" 
            alt="Stronolink team working" 
            className="w-full h-full object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}
