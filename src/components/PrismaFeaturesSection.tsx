import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { WordsPullUpMultiStyle } from './ui/WordsPullUpMultiStyle';

const FeatureCard = ({ children, delay }: { children: React.ReactNode, delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-2xl md:rounded-3xl overflow-hidden h-full min-h-[360px] lg:h-[480px] p-6 flex flex-col justify-between group"
    >
      {children}
    </motion.div>
  );
};

export function PrismaFeaturesSection() {
  const headerLines = [
    { text: "Studio-grade workflows for visionary creators. ", className: "text-[#DEDBC8]" },
    { text: "Built for pure vision. Powered by art.", className: "text-gray-500" }
  ];

  return (
    <section className="relative min-h-screen bg-black py-24 px-4 md:px-6">
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-12 lg:gap-16">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto">
          <WordsPullUpMultiStyle 
            segments={headerLines} 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-tight"
          />
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1">
          
          {/* Card 1: Video */}
          <FeatureCard delay={0}>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0"
            >
              <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            <div className="relative z-20 flex-1 flex flex-col justify-end">
              <span className="text-[#E1E0CC] font-medium text-lg">Your creative canvas.</span>
            </div>
          </FeatureCard>

          {/* Card 2: Storyboard */}
          <FeatureCard delay={0.15}>
            <div className="absolute inset-0 bg-[#212121] z-0" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-8">
                <img src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85" alt="Icon" className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover" />
                <span className="text-gray-500 text-sm font-medium">01</span>
              </div>
              <h3 className="text-[#E1E0CC] font-medium text-lg mb-6">Project Storyboard.</h3>
              <ul className="flex flex-col gap-3 mb-auto">
                {['Visual timeline mapping', 'Collaborative notes', 'Asset organization', 'Version control'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="flex items-center gap-2 text-primary text-sm font-medium hover:text-[#E1E0CC] transition-colors mt-8 group-hover:underline">
                Learn more
                <ArrowRight className="w-4 h-4 -rotate-45" />
              </a>
            </div>
          </FeatureCard>

          {/* Card 3: Critiques */}
          <FeatureCard delay={0.3}>
            <div className="absolute inset-0 bg-[#212121] z-0" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-8">
                <img src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85" alt="Icon" className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover" />
                <span className="text-gray-500 text-sm font-medium">02</span>
              </div>
              <h3 className="text-[#E1E0CC] font-medium text-lg mb-6">Smart Critiques.</h3>
              <ul className="flex flex-col gap-3 mb-auto">
                {['AI-assisted analysis', 'Automated creative notes', 'Native tool integrations'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="flex items-center gap-2 text-primary text-sm font-medium hover:text-[#E1E0CC] transition-colors mt-8 group-hover:underline">
                Learn more
                <ArrowRight className="w-4 h-4 -rotate-45" />
              </a>
            </div>
          </FeatureCard>

          {/* Card 4: Capsule */}
          <FeatureCard delay={0.45}>
            <div className="absolute inset-0 bg-[#212121] z-0" />
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-8">
                <img src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85" alt="Icon" className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover" />
                <span className="text-gray-500 text-sm font-medium">03</span>
              </div>
              <h3 className="text-[#E1E0CC] font-medium text-lg mb-6">Immersion Capsule.</h3>
              <ul className="flex flex-col gap-3 mb-auto">
                {['Smart notification silencing', 'Ambient soundscape generation', 'Calendar & schedule syncing'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="flex items-center gap-2 text-primary text-sm font-medium hover:text-[#E1E0CC] transition-colors mt-8 group-hover:underline">
                Learn more
                <ArrowRight className="w-4 h-4 -rotate-45" />
              </a>
            </div>
          </FeatureCard>

        </div>
      </div>
    </section>
  );
}
