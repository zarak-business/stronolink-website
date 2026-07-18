import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedLetterProps {
  char: string;
  progress: MotionValue<number>;
  index: number;
  totalChars: number;
}

function AnimatedLetter({ char, progress, index, totalChars }: AnimatedLetterProps) {
  const charProgress = index / totalChars;
  const start = Math.max(0, charProgress - 0.1);
  const end = Math.min(1, charProgress + 0.05);

  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <motion.span style={{ opacity }}>
      {char}
    </motion.span>
  );
}

export function ScrollTextReveal({ text, className = "" }: { text: string, className?: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"]
  });

  const words = text.split(" ");
  let charIndex = 0;
  const totalChars = text.replace(/\s/g, "").length;

  return (
    <p ref={ref} className={className} style={{ display: 'flex', flexWrap: 'wrap' }}>
      {words.map((word, wordIdx) => {
        const chars = word.split("");
        
        return (
          <span key={wordIdx} className="inline-block mr-[0.25em]">
            {chars.map((char, i) => {
              const currentIdx = charIndex++;
              return (
                <AnimatedLetter 
                  key={i} 
                  char={char} 
                  progress={scrollYProgress} 
                  index={currentIdx} 
                  totalChars={totalChars} 
                />
              );
            })}
          </span>
        );
      })}
    </p>
  );
}
