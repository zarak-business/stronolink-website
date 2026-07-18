import { motion } from 'framer-motion';

export function TeamSection() {
  const team = [
    {
      name: "Zarak Khan",
      role: "CEO of Stronolink",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bio: "As a junior AI engineer and AI agency owner, Zarak previously worked at a data firm based in Philadelphia that serves some of the world’s top pharmaceutical companies. He has extensive experience using automation platforms like Claude Code and Google Antigravity, and as a HubSpot Certified professional, he builds systems that help businesses scale and unlock their full potential."
    },
    {
      name: "Ammad Yousafzai",
      role: "Director of Digital Marketing",
      image: "/Gemini_Generated_Image_zhqf5mzhqf5mzhqf.png",
      bio: "Ammad combines a background in brand building with deep expertise in performance marketing. He started by using local LLMs and GPU workflows to automate content for his own brand, gaining a technical edge in mastering ad algorithms. Today, he leads our digital marketing, running high-performing Meta Ads campaigns for businesses like yours."
    }
  ];

  return (
    <section className="bg-black py-24 md:py-32 px-6 overflow-hidden relative">
      {/* Subtle purple gradient background fading perfectly before boundaries */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-4xl lg:max-w-5xl mx-auto mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl text-white font-medium tracking-tight mb-6"
          >
            AI became our superpower in 2023.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/60 text-sm md:text-base leading-relaxed max-w-3xl mx-auto"
          >
            Back in early 2023, as two college students, we were already experimenting with generative AI and running local LLMs before most people even knew it was possible. That curiosity quickly evolved into creating content generation systems we used to scale our online jewelry brand.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {team.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex flex-col group"
            >
              {/* Image Container with light gray background to match the reference */}
              <div className="bg-[#e5e5e5] rounded-[1.5rem] md:rounded-[2rem] aspect-square md:aspect-[4/5] overflow-hidden mb-6 relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div>
                <h3 className="text-white text-xl md:text-2xl font-medium mb-1">{member.name}</h3>
                <div className="text-white/40 text-sm md:text-base mb-4">{member.role}</div>
                <p className="text-white/70 text-sm md:text-base leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
