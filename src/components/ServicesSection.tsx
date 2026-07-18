import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SpeedToLeadAnimation } from './SpeedToLeadAnimation';

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  const cards = [
    {
      videoUrl: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4",
      tag: "PRODUCTION",
      title: "Creative Production",
      description: "We generate fresh custom, high-converting video and image creatives for your business every single month. You get studio-level production without the massive budget of a camera crew or video editors."
    },
    {
      videoUrl: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4",
      tag: "ACQUISITION",
      title: "Meta Ads Management",
      description: "We fully manage your Meta ad campaigns, rapidly testing dozens of hooks and visual variations. Our system handles the platform optimization to consistently drive exclusive, high-intent leads directly to you."
    },
    {
      animationComponent: SpeedToLeadAnimation,
      tag: "CONVERSION",
      title: "Speed-to-Lead System",
      description: "We don't just generate leads. We build the engine that converts them. Our automated follow-up system ensures your team texts every homeowner in under 60 seconds. This turns new traffic into booked appointments while you focus on the work."
    }
  ];

  return (
    <section id="services" className="bg-black py-16 md:py-24 px-6 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(147,51,234,0.06)_0%,_transparent_65%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="flex flex-row justify-between items-end mb-12"
        >
          <h2 className="text-3xl md:text-5xl text-white tracking-tight">What we do</h2>
          <div className="text-white/40 text-sm hidden md:block uppercase tracking-widest">Our services</div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="liquid-glass rounded-3xl overflow-hidden group flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                {card.videoUrl ? (
                  <video
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="metadata"
                  >
                    <source src={card.videoUrl} type="video/mp4" />
                  </video>
                ) : card.animationComponent ? (
                  <card.animationComponent />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>
              
              <div className="p-6 md:p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="uppercase tracking-widest text-white/40 text-xs">
                    {card.tag}
                  </div>
                  <div className="liquid-glass rounded-full p-2">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-white text-xl md:text-2xl mb-3 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
