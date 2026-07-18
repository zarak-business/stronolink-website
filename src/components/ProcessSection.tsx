import { motion } from 'framer-motion';

export function ProcessSection() {
  const steps = [
    {
      step: "STEP 01",
      title: "Funnel map audit",
      description: "A free 30-minute session where we audit your ad strategy, find the bottlenecks, and map out exactly how our AI system can build your ads and book your appointments."
    },
    {
      step: "STEP 02",
      title: "Proposal",
      description: "We deliver a clear scope, timeline, and fixed price. No surprises, no hourly billing. You know exactly what you're getting."
    },
    {
      step: "STEP 03",
      title: "Project",
      description: "Our team builds, tests, and deploys your systems. You get weekly updates and a working product, not a deck full of promises."
    },
    {
      step: "STEP 04",
      title: "Ongoing management",
      description: "Optional retainer for monitoring, optimization, and iteration. Most clients see compounding returns over time."
    }
  ];

  return (
    <section id="process" className="bg-black py-16 md:py-24 px-4 md:px-6 w-full flex justify-center relative overflow-hidden">
      {/* Removed container-wide glow */}

      <div className="max-w-7xl w-full flex flex-col items-center gap-16 md:gap-20 relative z-10">
        
        {/* Heading */}
        <div className="relative w-full flex justify-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[800px] h-[150px] md:h-[200px] bg-[radial-gradient(ellipse_at_center,_rgba(147,51,234,0.45)_0%,_transparent_70%)] pointer-events-none z-0" />
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-center relative z-10">
            The Roadmap: From First Call to Launch
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
          {steps.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#111111] rounded-2xl md:rounded-3xl p-6 md:p-8 flex flex-col gap-4 border border-white/[0.03]"
            >
              <div className="flex flex-col gap-2">
                <span className="text-gray-400 text-xs tracking-widest uppercase font-semibold">
                  {item.step}
                </span>
                <h3 className="text-white text-xl md:text-2xl font-medium">
                  {item.title}
                </h3>
              </div>
              
              <p className="text-gray-300 text-[15px] md:text-base leading-relaxed mt-2">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
