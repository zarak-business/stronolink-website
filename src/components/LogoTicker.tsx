import { motion } from 'framer-motion';

const ClaudeLogo = () => (
  <div className="flex items-center gap-3">
    <img src="/claude-ai-logo.svg" alt="Claude AI" className="h-8 md:h-10 w-auto object-contain" />
  </div>
);

const MetaLogo = () => (
  <div className="flex items-center gap-2">
    <img src="/meta-logo.svg" alt="Meta" className="h-6 md:h-7 w-auto object-contain" />
  </div>
);

const HiggsfieldLogo = () => (
  <div className="flex items-center gap-3">
    <img src="/higgsfield-ai-logo.svg" alt="Higgsfield AI" className="h-10 md:h-12 w-auto object-contain" />
  </div>
);

export function LogoTicker() {
  const logos = [
    <ClaudeLogo key="claude-1" />,
    <HiggsfieldLogo key="higgsfield-1" />,
    <MetaLogo key="meta-1" />,
    <ClaudeLogo key="claude-2" />,
    <HiggsfieldLogo key="higgsfield-2" />,
    <MetaLogo key="meta-2" />,
  ];

  return (
    <section className="bg-black py-10 md:py-16 border-b border-white/[0.05] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <p className="text-white text-lg md:text-xl mb-12 md:mb-16 tracking-wide font-medium">Powered By</p>
        
        <div 
          className="w-full flex overflow-hidden relative"
          style={{ 
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
          }}
        >
          <motion.div
            className="flex gap-24 md:gap-32 items-center flex-nowrap shrink-0 pr-24 md:pr-32"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          >
            {/* Render logos twice to create seamless loop */}
            {[...logos, ...logos].map((Logo, idx) => (
              <div key={idx} className="flex-shrink-0">
                {Logo}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
