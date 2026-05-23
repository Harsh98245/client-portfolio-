import { useRef, type CSSProperties } from "react";
import { motion, useInView } from "framer-motion";

interface WordsPullUpProps {
  text: string;
  className?: string;
  style?: CSSProperties;
  /** Adds a superscript asterisk after the last word (cinematic accent). */
  showAsterisk?: boolean;
  staggerDelay?: number;
}

/**
 * Splits text by spaces and slides each word up from y:20 with a staggered
 * delay. Triggered once when scrolled into view.
 */
export default function WordsPullUp({
  text,
  className = "",
  style,
  showAsterisk = false,
  staggerDelay = 0.08,
}: WordsPullUpProps) {
  const words = text.split(" ");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className={className} style={style}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <motion.span
            key={i}
            className="relative inline-block"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.6,
              delay: i * staggerDelay,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {showAsterisk && isLast && (
              <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em]">
                *
              </span>
            )}
            {!isLast && " "}
          </motion.span>
        );
      })}
    </div>
  );
}
