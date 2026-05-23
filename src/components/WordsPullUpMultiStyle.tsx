import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export interface Segment {
  /** Words of this segment. Omit when using `break`. */
  text?: string;
  className?: string;
  /** Forces the following segment onto a new line within the flex wrap. */
  break?: boolean;
}

interface Props {
  segments: Segment[];
  className?: string;
  staggerDelay?: number;
}

type Item =
  | { kind: "word"; text: string; className?: string }
  | { kind: "break" };

/**
 * Like WordsPullUp, but accepts multiple styled segments. Each segment's words
 * keep their own className while sharing one staggered pull-up animation.
 */
export default function WordsPullUpMultiStyle({
  segments,
  className = "",
  staggerDelay = 0.08,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const items: Item[] = [];
  segments.forEach((seg) => {
    if (seg.break) {
      items.push({ kind: "break" });
      return;
    }
    seg.text
      ?.split(" ")
      .filter((w) => w.length > 0)
      .forEach((w) => items.push({ kind: "word", text: w, className: seg.className }));
  });

  let wordIndex = 0;

  return (
    <div ref={ref} className={`inline-flex flex-wrap justify-center ${className}`}>
      {items.map((item, i) => {
        if (item.kind === "break") {
          return <span key={`break-${i}`} className="basis-full h-0" aria-hidden />;
        }
        const delay = wordIndex * staggerDelay;
        wordIndex += 1;
        return (
          <motion.span
            key={i}
            className={`inline-block ${item.className ?? ""}`}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
          >
            {item.text}
            {" "}
          </motion.span>
        );
      })}
    </div>
  );
}
