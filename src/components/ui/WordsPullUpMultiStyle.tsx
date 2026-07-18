import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export interface TextSegment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: TextSegment[];
  className?: string;
}

export function WordsPullUpMultiStyle({ segments, className = "" }: WordsPullUpMultiStyleProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  let wordIndex = 0;

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {segments.map((segment, segmentIndex) => {
        const words = segment.text.split(" ");
        return words.map((word, i) => {
          const currentIndex = wordIndex++;
          return (
            <motion.span
              key={`${segmentIndex}-${i}`}
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: currentIndex * 0.08,
                ease: [0.16, 1, 0.3, 1]
              }}
              className={`inline-block mr-[0.25em] ${segment.className || ''}`}
            >
              {word}
            </motion.span>
          );
        });
      })}
    </div>
  );
}
