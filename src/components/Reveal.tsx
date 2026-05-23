import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Initial vertical offset in px. */
  y?: number;
  /** Initial scale (use < 1 for the card "pop-in" effect). */
  scale?: number;
}

/**
 * Generic on-scroll entrance: fades + slides (and optionally scales) into place
 * once, when the element enters the viewport.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 24,
  scale = 1,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, scale }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
