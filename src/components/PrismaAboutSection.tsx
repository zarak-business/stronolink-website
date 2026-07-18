import { WordsPullUpMultiStyle } from './ui/WordsPullUpMultiStyle';
import { ScrollTextReveal } from './ui/ScrollTextReveal';

export function PrismaAboutSection() {
  const headingSegments = [
    { text: "I am Zarak, a", className: "font-normal" },
    { text: "growth systems engineer.", className: "italic font-serif text-primary/90" },
    { text: "I build fully managed AI systems designed to help service businesses like yours scale to", className: "font-normal" },
    { text: "$40K+ per month.", className: "text-purple-400 font-['Roboto'] pb-1" }
  ];

  return (
    <section className="bg-black p-4 md:p-6 w-full flex justify-center items-center py-20 md:py-32">
      <div className="bg-[#101010] rounded-2xl md:rounded-[2rem] w-full max-w-6xl p-8 sm:p-12 md:p-20 flex flex-col items-center text-center gap-12 md:gap-16">

        <WordsPullUpMultiStyle 
          segments={headingSegments}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-4xl mx-auto leading-[0.95] sm:leading-[0.9]"
        />

        <div className="max-w-xl mx-auto">
          <ScrollTextReveal 
            text="Over the last seven years, I have worked with a premier data firm based in Philadelphia that serves some of the top pharmaceutical companies in the world. Today, I leverage that enterprise-level experience to build automated growth systems for service-based businesses nationwide."
            className="text-[#DEDBC8] text-xs sm:text-sm md:text-base leading-relaxed"
          />
        </div>

      </div>
    </section>
  );
}
