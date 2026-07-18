import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function PhilosophySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  return (
    <section className="bg-black py-28 md:py-40 px-6 overflow-hidden relative">
      {/* Subtle purple gradient background fading perfectly before boundaries */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-16 md:mb-24"
        >
          Vision <span className="font-display italic text-white/40">x</span> Execution
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl overflow-hidden aspect-[4/3]"
          >
            <video
              key="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
              className="w-full h-full object-cover"
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
            >
              <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4" type="video/mp4" />
            </video>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="pb-8">
              <div className="text-white/40 text-xs tracking-widest uppercase mb-4">
                THE STRATEGIC VISION
              </div>
              <p className="text-white text-base md:text-lg leading-relaxed">
                Our system takes the guesswork out of lead generation by researching your industry's top-performing hooks to create high converting, studio-quality ad creatives.
              </p>
            </div>
            
            <div className="w-full h-px bg-white/10 my-4" />
            
            <div className="pt-8">
              <div className="text-white/40 text-xs tracking-widest uppercase mb-4">
                AUTOMATED EXECUTION
              </div>
              <p className="text-white text-base md:text-lg leading-relaxed">
                This system produces performance-tested ad variations at 10x the speed of manual teams. We handle ongoing ad management and audience targeting, driving high-intent leads into a speed-to-lead system that books appointments directly onto your calendar while you sleep.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
