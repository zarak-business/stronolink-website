import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function CaseStudiesSection() {
  const caseStudies = [
    {
      title: "LuminaGrid Solar",
      description: "Arizona based solar company generates $40,000/m.",
      image: "/pexels-kindelmedia-9875415.jpg",
    },
    {
      title: "Zylar Aesthetics",
      description: "Florida med spa generates $60,000/m using our AI content system.",
      image: "/pexels-rasul-abdurahimov-591752605-17640382.jpg",
    },
    {
      title: "Gablesmith Roofing",
      description: "A Georgia roofing contractor secured $105,000 in new roof installations in 30 days by leveraging an AI content and booking system that completely eliminated manual follow-up.",
      image: "/pexels-rstephens-37677394.jpg",
    }
  ];

  return (
    <section id="case-studies" className="bg-black py-16 md:py-24 px-4 md:px-6 w-full flex justify-center">
      <div className="max-w-7xl w-full flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center max-w-2xl mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-4xl md:text-5xl font-medium tracking-tight mb-6"
          >
            Some of our work.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[#888888] text-base md:text-lg leading-relaxed"
          >
            Real results from real engagements. Every project below was built, deployed, and managed by our team. <a href="#" className="text-[#AAAAAA] hover:text-white underline underline-offset-4 transition-colors">See all services & industries &rarr;</a>
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
          {caseStudies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl md:rounded-[1.5rem] overflow-hidden bg-[#111]">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 transition-colors duration-300 group-hover:bg-white/20">
                  <ArrowUpRight className="text-white w-5 h-5" />
                </div>
              </div>
              
              <div className="mt-5 flex flex-col gap-1.5">
                <h3 className="text-white text-xl md:text-[22px] font-medium leading-tight">
                  {study.title}
                </h3>
                <p className="text-[#888888] text-sm md:text-base leading-snug">
                  {study.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
